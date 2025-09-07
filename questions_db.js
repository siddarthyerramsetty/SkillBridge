
const questionsDatabase = {
    'web-development': {
        easy: [
            {
                question: "What does HTML stand for?",
                options: ["Hyper Text Markup Language", "High Tech Modern Language", "Hyper Transfer Markup Logic", "Home Tool Markup Language"],
                correct: 0
            },
            {
                question: "Which HTML tag is used for creating a hyperlink?",
                options: ["<link>", "<a>", "<href>", "<url>"],
                correct: 1
            },
            {
                question: "What is CSS used for?",
                options: ["Server-side scripting", "Database management", "Styling web pages", "Writing JavaScript code"],
                correct: 2
            },
            {
                question: "Which CSS property changes text color?",
                options: ["text-color", "color", "font-color", "text-style"],
                correct: 1
            },
            {
                question: "What is the correct HTML element for the largest heading?",
                options: ["<h6>", "<heading>", "<head>", "<h1>"],
                correct: 3
            }
        ],
        medium: [
            {
                question: "What is the difference between 'let' and 'const' in JavaScript?",
                options: ["let is block-scoped, const is function-scoped", "let can be reassigned, const cannot", "const is block-scoped, let is function-scoped", "There is no difference"],
                correct: 1
            },
            {
                question: "What is the purpose of the 'async' keyword in JavaScript?",
                options: ["Make code run faster", "Define asynchronous functions", "Create loops", "Style elements"],
                correct: 1
            },
            {
                question: "What is a CSS flexbox?",
                options: ["A measurement unit", "A layout model", "A color system", "A text style"],
                correct: 1
            }
        ],
        hard: [
            {
                question: "Explain the concept of closures in JavaScript.",
                options: ["Functions that close the program", "Functions with access to variables in outer scope", "Functions that prevent memory leaks", "Functions that close connections"],
                correct: 1
            },
            {
                question: "What is event bubbling in JavaScript?",
                options: ["Creating multiple events", "Event propagation from child to parent", "Creating bubble animations", "Removing event listeners"],
                correct: 1
            },
            {
                question: "What is the virtual DOM in React?",
                options: ["A fake DOM element", "A lightweight copy of the actual DOM", "A browser feature", "A CSS framework"],
                correct: 1
            }
        ]
    },
    'data-science': {
        easy: [
            {
                question: "What is the primary purpose of data preprocessing?",
                options: ["To make data look nice", "To clean and prepare data for analysis", "To delete unused data", "To compress data files"],
                correct: 1
            },
            {
                question: "What is a dataset?",
                options: ["A computer program", "A collection of related data", "A type of graph", "A statistical formula"],
                correct: 1
            },
            {
                question: "What does ML stand for in data science?",
                options: ["Multiple Learning", "Machine Learning", "Meta Language", "Module Learning"],
                correct: 1
            },
            {
                question: "What is pandas in Python?",
                options: ["A data analysis library", "A game framework", "A web browser", "A database system"],
                correct: 0
            }
        ],
        medium: [
            {
                question: "What is overfitting in machine learning?",
                options: ["Perfect model performance", "Model performs too well on training data", "Large dataset size", "Fast processing speed"],
                correct: 1
            },
            {
                question: "What is a confusion matrix used for?",
                options: ["Measuring model complexity", "Evaluating classification models", "Creating neural networks", "Data visualization"],
                correct: 1
            },
            {
                question: "What is feature engineering?",
                options: ["Creating new features from existing data", "Building machine learning models", "Writing code", "Database design"],
                correct: 0
            }
        ],
        hard: [
            {
                question: "Explain gradient descent in machine learning.",
                options: ["A visualization technique", "An optimization algorithm for minimizing error", "A data cleaning method", "A type of neural network"],
                correct: 1
            },
            {
                question: "What is the curse of dimensionality?",
                options: ["A programming error", "Problems arising from high-dimensional data", "A type of virus", "A database limitation"],
                correct: 1
            },
            {
                question: "What is ensemble learning?",
                options: ["Using multiple models together", "A single powerful model", "Data preprocessing", "Database management"],
                correct: 0
            }
        ]
    },
    'digital-marketing': {
        easy: [
            {
                question: "What is SEO?",
                options: ["Search Engine Organization", "Search Engine Optimization", "Search Engine Order", "Search Engine Online"],
                correct: 1
            },
            {
                question: "What is CTA?",
                options: ["Call To Action", "Content Target Analysis", "Customer Traffic Analysis", "Content Type Association"],
                correct: 0
            },
            {
                question: "What is social media marketing?",
                options: ["Email campaigns", "Promoting on social platforms", "Website design", "Print advertising"],
                correct: 1
            },
            {
                question: "What does ROI stand for in marketing?",
                options: ["Return On Investment", "Rate Of Interest", "Return On Internet", "Range Of Impact"],
                correct: 0
            }
        ],
        medium: [
            {
                question: "What is content marketing?",
                options: ["Paid advertising", "Creating valuable content for audience", "Email spam", "Direct mail"],
                correct: 1
            },
            {
                question: "What is a landing page?",
                options: ["Homepage", "Standalone webpage for marketing", "Contact page", "About page"],
                correct: 1
            },
            {
                question: "What is PPC advertising?",
                options: ["Pay Per Click", "Post Per Content", "Page Per Click", "Price Per Customer"],
                correct: 0
            }
        ],
        hard: [
            {
                question: "What is marketing attribution?",
                options: ["Credit card processing", "Identifying marketing touchpoints", "Website design", "Email marketing"],
                correct: 1
            },
            {
                question: "What is marketing automation?",
                options: ["Manual email sending", "Automated marketing processes", "Website hosting", "Social media posting"],
                correct: 1
            },
            {
                question: "What is consumer segmentation?",
                options: ["Dividing market into groups", "Website analytics", "Email marketing", "Social media management"],
                correct: 0
            }
        ]
    },
    'graphic-design': {
        easy: [
            {
                question: "What color model is used for digital displays?",
                options: ["CMYK", "RGB", "HSL", "PMS"],
                correct: 1
            },
            {
                question: "What is typography?",
                options: ["Photo editing", "The art of arranging text", "Video editing", "Logo design"],
                correct: 1
            },
            {
                question: "What file format is best for logos?",
                options: ["JPG", "SVG", "GIF", "BMP"],
                correct: 1
            },
            {
                question: "What is white space in design?",
                options: ["Empty space in design", "White colored areas", "Page background", "Text color"],
                correct: 0
            }
        ],
        medium: [
            {
                question: "What is kerning in typography?",
                options: ["Font size", "Letter spacing", "Line height", "Font style"],
                correct: 1
            },
            {
                question: "What is the golden ratio in design?",
                options: ["A color scheme", "A mathematical ratio for proportion", "A font size", "A file format"],
                correct: 1
            },
            {
                question: "What is vector graphics?",
                options: ["Scalable graphics", "Pixel-based images", "3D models", "Video files"],
                correct: 0
            }
        ],
        hard: [
            {
                question: "What is color theory?",
                options: ["Random color selection", "Scientific study of color relationships", "Photo editing", "Font selection"],
                correct: 1
            },
            {
                question: "What is responsive design?",
                options: ["Static layouts", "Adapting design to screen size", "Print design", "Logo design"],
                correct: 1
            },
            {
                question: "What is a style guide?",
                options: ["Design documentation", "Photo collection", "Social media post", "Website template"],
                correct: 0
            }
        ]
    },
    'business': {
        easy: [
            {
                question: "What is ROI?",
                options: ["Return On Investment", "Return On Income", "Rate Of Interest", "Review Of Income"],
                correct: 0
            },
            {
                question: "What is a business plan?",
                options: ["Daily schedule", "Document outlining business goals", "Financial statement", "Marketing strategy"],
                correct: 1
            },
            {
                question: "What is marketing?",
                options: ["Selling products", "Promoting products/services", "Making products", "Shipping products"],
                correct: 1
            },
            {
                question: "What is a target market?",
                options: ["All customers", "Specific customer group", "Competitors", "Employees"],
                correct: 1
            }
        ],
        medium: [
            {
                question: "What is SWOT analysis?",
                options: ["Financial report", "Strategic planning tool", "Marketing plan", "Business license"],
                correct: 1
            },
            {
                question: "What is cash flow?",
                options: ["Profit", "Money movement in/out", "Bank balance", "Sales revenue"],
                correct: 1
            },
            {
                question: "What is market research?",
                options: ["Studying market and customers", "Advertising", "Product design", "Employee training"],
                correct: 0
            }
        ],
        hard: [
            {
                question: "What is corporate governance?",
                options: ["Daily management", "System of rules and practices", "Marketing strategy", "Product development"],
                correct: 1
            },
            {
                question: "What is strategic management?",
                options: ["Daily operations", "Long-term planning and execution", "Customer service", "Product pricing"],
                correct: 1
            },
            {
                question: "What is risk management?",
                options: ["Identifying and managing risks", "Sales strategy", "Marketing plan", "Customer service"],
                correct: 0
            }
        ]
    }
};

function getRandomQuestions(domain, level) {
    const domainQuestions = questionsDatabase[domain];
    if (!domainQuestions) {
        throw new Error('Invalid domain selected');
    }

    let questions = [];
    
    // Pick questions based on level
    if (level === 'beginner') {
        // 4 easy, 3 medium, 3 hard
        questions = [
            ...getRandomFromArray(domainQuestions.easy, 4),
            ...getRandomFromArray(domainQuestions.medium, 3),
            ...getRandomFromArray(domainQuestions.hard, 3)
        ];
    } else if (level === 'intermediate') {
        // 4 easy, 3 medium, 3 hard
        questions = [
            ...getRandomFromArray(domainQuestions.easy, 4),
            ...getRandomFromArray(domainQuestions.medium, 3),
            ...getRandomFromArray(domainQuestions.hard, 3)
        ];
    } else {
        // 4 easy, 3 medium, 3 hard
        questions = [
            ...getRandomFromArray(domainQuestions.easy, 4),
            ...getRandomFromArray(domainQuestions.medium, 3),
            ...getRandomFromArray(domainQuestions.hard, 3)
        ];
    }

    return questions.sort(() => Math.random() - 0.5);
}

function getRandomFromArray(array, count) {
    const shuffled = [...array].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, count);
}

export { questionsDatabase, getRandomQuestions };
