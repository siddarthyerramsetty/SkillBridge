
const coursesDatabase = {
    'web-development': {
        beginner: [
            {
                title: "HTML & CSS Fundamentals",
                description: "Learn the basics of web development",
                duration: "6 weeks",
                rating: 4.8,
                resources: [
                    "https://www.w3schools.com/html/",
                    "https://developer.mozilla.org/en-US/docs/Learn/HTML",
                    "https://css-tricks.com/guides/"
                ]
            },
            {
                title: "JavaScript Basics",
                description: "Introduction to JavaScript programming",
                duration: "8 weeks",
                rating: 4.7,
                resources: [
                    "https://javascript.info/",
                    "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide"
                ]
            },
            {
                title: "Responsive Web Design",
                description: "Create mobile-friendly websites",
                duration: "4 weeks",
                rating: 4.9,
                resources: [
                    "https://web.dev/responsive-web-design-basics/",
                    "https://www.w3schools.com/css/css_rwd_intro.asp"
                ]
            },
            {
                title: "Web Development Tools",
                description: "Learn essential development tools",
                duration: "3 weeks",
                rating: 4.6,
                resources: [
                    "https://developer.chrome.com/docs/devtools/",
                    "https://code.visualstudio.com/docs"
                ]
            }
        ],
        intermediate: [
            {
                title: "React.js Fundamentals",
                description: "Build modern web applications",
                duration: "10 weeks",
                rating: 4.9,
                resources: [
                    "https://react.dev/learn",
                    "https://legacy.reactjs.org/tutorial/tutorial.html"
                ]
            },
            {
                title: "Node.js & Express",
                description: "Server-side JavaScript development",
                duration: "8 weeks",
                rating: 4.7,
                resources: [
                    "https://nodejs.org/en/docs/",
                    "https://expressjs.com/en/starter/installing.html"
                ]
            },
            {
                title: "Database Integration",
                description: "Working with SQL and NoSQL databases",
                duration: "6 weeks",
                rating: 4.8,
                resources: [
                    "https://www.mongodb.com/docs/",
                    "https://dev.mysql.com/doc/"
                ]
            }
        ],
        advanced: [
            {
                title: "Full Stack Development",
                description: "End-to-end web application development",
                duration: "12 weeks",
                rating: 4.9,
                resources: [
                    "https://fullstackopen.com/en/",
                    "https://github.com/gothinkster/realworld"
                ]
            },
            {
                title: "Web Security",
                description: "Secure web application development",
                duration: "8 weeks",
                rating: 4.8,
                resources: [
                    "https://owasp.org/www-project-top-ten/",
                    "https://web.dev/security/"
                ]
            },
            {
                title: "Progressive Web Apps",
                description: "Build modern PWAs",
                duration: "6 weeks",
                rating: 4.7,
                resources: [
                    "https://web.dev/progressive-web-apps/",
                    "https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps"
                ]
            }
        ]
    },
    'data-science': {
        beginner: [
            {
                title: "Python for Data Science",
                description: "Learn Python basics for data analysis",
                duration: "6 weeks",
                rating: 4.8,
                resources: [
                    "https://docs.python.org/3/tutorial/",
                    "https://pandas.pydata.org/docs/getting_started/"
                ]
            },
            {
                title: "Statistics Fundamentals",
                description: "Basic statistical concepts",
                duration: "4 weeks",
                rating: 4.7,
                resources: [
                    "https://www.khanacademy.org/math/statistics-probability",
                    "https://www.statisticshowto.com/"
                ]
            },
            {
                title: "Data Visualization Basics",
                description: "Create basic data visualizations",
                duration: "5 weeks",
                rating: 4.9,
                resources: [
                    "https://matplotlib.org/stable/tutorials/",
                    "https://seaborn.pydata.org/tutorial.html"
                ]
            },
            {
                title: "SQL for Data Science",
                description: "Database querying basics",
                duration: "4 weeks",
                rating: 4.6,
                resources: [
                    "https://mode.com/sql-tutorial/",
                    "https://www.w3schools.com/sql/"
                ]
            }
        ],
        intermediate: [
            {
                title: "Machine Learning Fundamentals",
                description: "Introduction to ML algorithms",
                duration: "10 weeks",
                rating: 4.9,
                resources: [
                    "https://scikit-learn.org/stable/tutorial/",
                    "https://www.tensorflow.org/tutorials"
                ]
            },
            {
                title: "Data Preprocessing",
                description: "Advanced data cleaning techniques",
                duration: "6 weeks",
                rating: 4.7,
                resources: [
                    "https://pandas.pydata.org/docs/user_guide/",
                    "https://numpy.org/doc/stable/user/"
                ]
            },
            {
                title: "Advanced Statistics",
                description: "Statistical inference and modeling",
                duration: "8 weeks",
                rating: 4.8,
                resources: [
                    "https://www.statsmodels.org/stable/index.html",
                    "https://docs.scipy.org/doc/scipy/tutorial/"
                ]
            }
        ],
        advanced: [
            {
                title: "Deep Learning",
                description: "Neural networks and deep learning",
                duration: "12 weeks",
                rating: 4.9,
                resources: [
                    "https://www.tensorflow.org/tutorials/quickstart/beginner",
                    "https://pytorch.org/tutorials/"
                ]
            },
            {
                title: "Big Data Analytics",
                description: "Processing large-scale datasets",
                duration: "10 weeks",
                rating: 4.8,
                resources: [
                    "https://spark.apache.org/docs/latest/",
                    "https://hadoop.apache.org/docs/"
                ]
            },
            {
                title: "NLP Fundamentals",
                description: "Natural Language Processing",
                duration: "8 weeks",
                rating: 4.7,
                resources: [
                    "https://www.nltk.org/book/",
                    "https://spacy.io/usage/spacy-101"
                ]
            }
        ]
    }
};

function getRecommendedCourses(domain, score) {
    const courses = coursesDatabase[domain];
    if (!courses) return [];
    
    let recommendations = [];
    
    if (score >= 80) {
        // High score - mix of intermediate and advanced courses
        recommendations = [
            ...getRandomCourses(courses.intermediate, 2),
            ...getRandomCourses(courses.advanced, 2)
        ];
    } else if (score >= 60) {
        // Medium score - mix of beginner and intermediate courses
        recommendations = [
            ...getRandomCourses(courses.beginner, 2),
            ...getRandomCourses(courses.intermediate, 2)
        ];
    } else {
        // Low score - focus on beginner courses
        recommendations = [
            ...getRandomCourses(courses.beginner, 3),
            ...getRandomCourses(courses.intermediate, 1)
        ];
    }
    
    return recommendations;
}

function getRandomCourses(courseList, count) {
    const shuffled = [...courseList].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, count);
}

export { coursesDatabase, getRecommendedCourses };
