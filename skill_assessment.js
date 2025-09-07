
import { getRandomQuestions } from './questions_db.js';
import { getRecommendedCourses } from './courses_db.js';
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBX-VqTsgU0wL1Bl3f44iraw9LOjtF7aE4",
    authDomain: "login-21c99.firebaseapp.com",
    projectId: "login-21c99",
    storageBucket: "login-21c99.firebasestorage.app",
    messagingSenderId: "903951003268",
    appId: "1:903951003268:web:262456d503b3cd25bcdcd1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);

// Initialize variables
let currentQuestionIndex = 0;
let questions = [];
let userScore = 0;

// Get URL parameters and normalize them
const urlParams = new URLSearchParams(window.location.search);
const domain = urlParams.get('domain') || 'web-development';
const level = urlParams.get('level') || 'beginner';

// Update UI with domain and level
document.getElementById('domain-name').textContent = domain.replace('-', ' ').toUpperCase();
document.getElementById('level-name').textContent = level.charAt(0).toUpperCase() + level.slice(1);

function initializeAssessment() {
    try {
        questions = getRandomQuestions(domain, level);
        displayQuestion(0);
    } catch (error) {
        console.error('Error loading questions:', error);
        document.getElementById('question-text').textContent = 
            'Error: Could not load questions. Please try again later.';
    }
}

function displayQuestion(index) {
    if (!questions) return;
    
    if (index >= questions.length) {
        finishAssessment();
        return;
    }

    const question = questions[index];
    const answersContainer = document.getElementById('answers-container');
    const nextButton = document.getElementById('next-question-btn');

    // Update progress bar
    const progress = ((index + 1) / questions.length) * 100;
    document.getElementById('progress').style.width = `${progress}%`;

    // Display question
    document.getElementById('question-text').textContent = question.question;
    answersContainer.innerHTML = '';

    // Create answer buttons
    question.options.forEach((option, i) => {
        const button = document.createElement('button');
        button.className = 'answer-btn';
        button.textContent = option;
        button.onclick = () => handleAnswer(i);
        answersContainer.appendChild(button);
    });

    nextButton.style.display = 'none';
}

function handleAnswer(selectedIndex) {
    const question = questions[currentQuestionIndex];
    const buttons = document.querySelectorAll('.answer-btn');
    const nextButton = document.getElementById('next-question-btn');

    // Disable all buttons
    buttons.forEach(button => button.disabled = true);

    // Mark correct and incorrect answers
    buttons.forEach((button, index) => {
        if (index === question.correct) {
            button.style.backgroundColor = '#7AE582';
            button.style.color = 'white';
        }
        if (index === selectedIndex && selectedIndex !== question.correct) {
            button.style.backgroundColor = '#FF6B6B';
            button.style.color = 'white';
        }
    });

    // Update score
    if (selectedIndex === question.correct) {
        userScore++;
    }

    // Show next button
    nextButton.style.display = 'block';
    nextButton.onclick = () => {
        if (currentQuestionIndex === questions.length - 1) {
            finishAssessment();
        } else {
            currentQuestionIndex++;
            displayQuestion(currentQuestionIndex);
        }
    };
}

function finishAssessment() {
    const container = document.getElementById('question-container');
    const score = Math.round((userScore / questions.length) * 100);
    let performance = score >= 80 ? 'Excellent' : score >= 60 ? 'Good' : 'Needs Improvement';

    // Get recommended courses
    const recommendedCourses = getRecommendedCourses(domain, score);
    
    // Store data in Firebase
    const user = auth.currentUser;
    if (user) {
        const userRef = ref(db, 'userCourses/' + user.email.replace('.', '_'));
        set(userRef, {
            courses: recommendedCourses,
            score: score,
            performance: performance,
            timestamp: new Date().toISOString()
        });
    }

    // Store in localStorage for backup
    localStorage.setItem('userScore', score);
    localStorage.setItem('userPerformance', performance);
    localStorage.setItem('recommendedCourses', JSON.stringify(recommendedCourses));

    // Display completion page
    container.innerHTML = `
        <div style="text-align: center; padding: 20px;">
            <h2 style="color: var(--primary);">Assessment Complete!</h2>
            <div style="margin: 20px 0;">
                <p style="font-size: 1.2rem;">Your Score: ${score}%</p>
                <p style="font-size: 1.1rem;">Performance: ${performance}</p>
                <p>Correctly answered: ${userScore} out of ${questions.length} questions</p>
            </div>
            <a href="home.html" class="btn" style="display: inline-block; margin-top: 20px;">View Your Dashboard</a>
        </div>
        <div style="margin-top: 30px;">
            <h3 style="color: var(--primary); text-align: center;">Recommended Courses</h3>
            <div style="margin-top: 20px;">
                ${recommendedCourses.map(course => `
                    <div class="course-card" style="background: white; padding: 20px; border-radius: 10px; margin: 10px 0; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
                        <h3 style="color: var(--primary); margin-bottom: 10px;">${course.title}</h3>
                        <p style="margin-bottom: 10px;">${course.description}</p>
                        <p>Duration: ${course.duration} | Rating: ${course.rating}⭐</p>
                        <div style="margin-top: 10px;">
                            <strong>Resources:</strong>
                            <ul style="list-style-type: none; padding-left: 0;">
                                ${course.resources.map(resource => `
                                    <li><a href="${resource}" target="_blank" style="color: var(--primary);">📚 Learning Resource</a></li>
                                `).join('')}
                            </ul>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

// Start assessment when page loads
document.addEventListener('DOMContentLoaded', initializeAssessment);
