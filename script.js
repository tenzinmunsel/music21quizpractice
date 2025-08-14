// This file contains all the custom JavaScript for the Nucleooo quiz app.

// --- Quiz Data Structure (Reverted to original structure) ---
const quizData = {
    subjects: [
        {
            name: "General Knowledge",
            levels: [
                {
                    name: "Beginner",
                    questions: [
                        { question: "What is the capital of France?", options: ["Berlin", "London", "Paris", "Rome"], answer: "Paris", explanation: "Paris is the capital and most populous city of France." },
                        { question: "How many continents are there?", options: ["5", "6", "7", "8"], answer: "7", explanation: "There are seven continents: Asia, Africa, North America, South America, Antarctica, Europe, and Australia." },
                        { question: "Which planet is known as the 'Red Planet'?", options: ["Mars", "Jupiter", "Venus", "Saturn"], answer: "Mars", explanation: "Mars gets its reddish color from the iron oxide (rust) on its surface." }
                    ]
                },
                {
                    name: "Intermediate",
                    questions: [
                        { question: "Who wrote 'Romeo and Juliet'?", options: ["Charles Dickens", "William Shakespeare", "Mark Twain", "Jane Austen"], answer: "William Shakespeare", explanation: "William Shakespeare is widely regarded as the greatest writer in the English language." },
                        { question: "What is the largest ocean on Earth?", options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"], answer: "Pacific Ocean", explanation: "The Pacific Ocean covers about one-third of the Earth's surface." },
                        { question: "What is the chemical symbol for gold?", options: ["Au", "Ag", "Fe", "Pb"], answer: "Au", explanation: "The symbol for gold, Au, comes from the Latin word 'aurum'." }
                    ]
                },
                {
                    name: "Advanced",
                    questions: [
                        { question: "Who was the first person to walk on the moon?", options: ["Buzz Aldrin", "Yuri Gagarin", "Neil Armstrong", "Michael Collins"], answer: "Neil Armstrong", explanation: "Neil Armstrong famously said, 'That's one small step for man, one giant leap for mankind.'" },
                        { question: "What is the longest river in the world?", options: ["Nile River", "Amazon River", "Yangtze River", "Mississippi River"], answer: "Nile River", explanation: "The Nile River is approximately 6,650 km long, making it the longest river." },
                        { question: "What year did the Berlin Wall fall?", options: ["1989", "1991", "1985", "1995"], answer: "1989", explanation: "The Berlin Wall, which divided East and West Berlin, fell on November 9, 1989." }
                    ]
                }
            ]
        },
        {
            name: "Science",
            levels: [
                {
                    name: "Beginner",
                    questions: [
                        { question: "What is the largest planet in our solar system?", options: ["Mars", "Jupiter", "Earth", "Saturn"], answer: "Jupiter", explanation: "Jupiter is the largest planet, with a diameter of about 140,000 km." },
                        { question: "What gas do plants primarily use for photosynthesis?", options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"], answer: "Carbon Dioxide", explanation: "Plants use carbon dioxide, water, and sunlight to create their own food and release oxygen." },
                        { question: "What is the chemical symbol for water?", options: ["O2", "H2O", "CO2", "N2"], answer: "H2O", explanation: "Water is a chemical compound consisting of two hydrogen atoms and one oxygen atom." }
                    ]
                },
                {
                    name: "Intermediate",
                    questions: [
                        { question: "What is the process of a liquid turning into a gas?", options: ["Condensation", "Evaporation", "Sublimation", "Melting"], answer: "Evaporation", explanation: "Evaporation is the process by which atoms or molecules escape from a liquid or solid and enter the gaseous phase." },
                        { question: "What is the smallest unit of matter?", options: ["Molecule", "Proton", "Atom", "Cell"], answer: "Atom", explanation: "An atom is the smallest unit of ordinary matter that forms a chemical element." },
                        { question: "What is the speed of light in a vacuum?", options: ["150,000 km/s", "300,000 km/s", "500,000 km/s", "1,000,000 km/s"], answer: "300,000 km/s", explanation: "The speed of light in a vacuum is approximately 299,792 kilometers per second." }
                    ]
                },
                {
                    name: "Advanced",
                    questions: [
                        { question: "What is the process of splitting an atom?", options: ["Fusion", "Fission", "Metamorphosis", "Oxidation"], answer: "Fission", explanation: "Nuclear fission is a reaction in which the nucleus of an atom splits into two or more smaller nuclei." },
                        { question: "What is the name of the theory that describes the origin and evolution of the universe?", options: ["Theory of Relativity", "Quantum Mechanics", "Big Bang Theory", "Theory of Evolution"], answer: "Big Bang Theory", explanation: "The Big Bang Theory is the leading explanation for how the universe began." },
                        { question: "What does 'DNA' stand for?", options: ["Deoxyribonucleic acid", "Dihydrogen Nitrate", "Deoxy Nucleic Atom", "Dichloride Nitrogen Acid"], answer: "Deoxyribonucleic acid", explanation: "DNA is the carrier of genetic information in most living organisms." }
                    ]
                }
            ]
        },
        {
            name: "History",
            levels: [
                {
                    name: "Beginner",
                    questions: [
                        { question: "Who was the first President of the United States?", options: ["Thomas Jefferson", "Abraham Lincoln", "George Washington", "John Adams"], answer: "George Washington", explanation: "George Washington was a Founding Father and the first president of the United States, serving from 1789 to 1797." },
                        { question: "In which year did the Titanic sink?", options: ["1910", "1912", "1914", "1916"], answer: "1912", explanation: "The RMS Titanic sank on April 15, 1912, after hitting an iceberg on its maiden voyage." },
                        { question: "What ancient civilization built the pyramids?", options: ["Roman", "Greek", "Egyptian", "Mesopotamian"], answer: "Egyptian", explanation: "The ancient Egyptians built the famous pyramids as tombs for their pharaohs and queens." }
                    ]
                },
                {
                    name: "Intermediate",
                    questions: [
                        { question: "Who was the Roman emperor who made Christianity the state religion?", options: ["Julius Caesar", "Nero", "Constantine the Great", "Augustus"], answer: "Constantine the Great", explanation: "Constantine the Great legalized Christianity in 313 CE and was baptized on his deathbed." },
                        { question: "What was the name of the ship that brought the Pilgrims to America?", options: ["Santa Maria", "Mayflower", "Discovery", "Endeavour"], answer: "Mayflower", explanation: "The Mayflower transported the first English Pilgrims to the New World in 1620." },
                        { question: "The Hundred Years' War was fought between which two countries?", options: ["France and England", "Spain and Portugal", "Germany and Russia", "Italy and Austria"], answer: "France and England", explanation: "The Hundred Years' War was a series of conflicts waged from 1337 to 1453 between the House of Plantagenet, rulers of the Kingdom of England, and the House of Valois, rulers of the Kingdom of France." }
                    ]
                },
                {
                    name: "Advanced",
                    questions: [
                        { question: "Who was the primary author of the Declaration of Independence?", options: ["Benjamin Franklin", "George Washington", "Thomas Jefferson", "John Adams"], answer: "Thomas Jefferson", explanation: "Thomas Jefferson was the principal author of the Declaration of Independence." },
                        { question: "What year did World War II begin?", options: ["1939", "1941", "1945", "1935"], answer: "1939", explanation: "World War II began in Europe on September 1, 1939, with the German invasion of Poland." },
                        { question: "Which famous general led the Carthaginian army against Rome in the Second Punic War?", options: ["Julius Caesar", "Alexander the Great", "Hannibal", "Spartacus"], answer: "Hannibal", explanation: "Hannibal is considered one of the greatest military commanders in history." }
                    ]
                }
            ]
        },
        {
            name: "Geography",
            levels: [
                {
                    name: "Beginner",
                    questions: [
                        { question: "What is the capital of Japan?", options: ["Beijing", "Seoul", "Tokyo", "Bangkok"], answer: "Tokyo", explanation: "Tokyo is the world's most populous metropolitan area." },
                        { question: "Which is the largest desert in the world?", options: ["Sahara Desert", "Gobi Desert", "Kalahari Desert", "Antarctic Polar Desert"], answer: "Antarctic Polar Desert", explanation: "The Antarctic Polar Desert is the largest desert on Earth, covering an area of around 14 million square kilometers." },
                        { question: "How many states are in the USA?", options: ["48", "50", "51", "52"], answer: "50", explanation: "The United States of America is a federal republic consisting of 50 states." }
                    ]
                },
                {
                    name: "Intermediate",
                    questions: [
                        { question: "What is the highest mountain in Africa?", options: ["Mount Everest", "Mount Kilimanjaro", "Mount Denali", "Mount Fuji"], answer: "Mount Kilimanjaro", explanation: "Mount Kilimanjaro is a dormant volcano in Tanzania and the highest mountain in Africa." },
                        { question: "Which continent is home to the Amazon Rainforest?", options: ["Asia", "Africa", "North America", "South America"], answer: "South America", explanation: "The Amazon Rainforest, the largest in the world, covers much of northwestern Brazil and extends into Colombia, Peru and other South American countries." },
                        { question: "What is the longest river in Asia?", options: ["Yellow River", "Mekong River", "Yangtze River", "Ganges River"], answer: "Yangtze River", explanation: "The Yangtze River is the longest river in Asia, and the third-longest in the world." }
                    ]
                },
                {
                    name: "Advanced",
                    questions: [
                        { question: "Which sea is located between the Balkan Peninsula and the Anatolian Peninsula?", options: ["Black Sea", "Caspian Sea", "Adriatic Sea", "Aegean Sea"], answer: "Aegean Sea", explanation: "The Aegean Sea is an elongated embayment of the Mediterranean Sea located between the Balkan and Anatolian peninsulas." },
                        { question: "What is the name of the narrow strait that separates Spain from Africa?", options: ["Strait of Dover", "Strait of Gibraltar", "Bosphorus Strait", "Strait of Magellan"], answer: "Strait of Gibraltar", explanation: "The Strait of Gibraltar connects the Atlantic Ocean to the Mediterranean Sea and separates Gibraltar and Peninsular Spain in Europe from Morocco in Africa." },
                        { question: "What country has the most natural lakes?", options: ["USA", "Russia", "Canada", "China"], answer: "Canada", explanation: "Canada has over two million lakes, accounting for over 60% of the world's total." }
                    ]
                }
            ]
        }
    ]
};

// --- DOM Element References ---
const appContainer = document.getElementById('app-container');
const mainTitle = document.getElementById('main-title');
const subjectSelection = document.getElementById('subject-selection');
const levelSelection = document.getElementById('level-selection');
const quizContainer = document.getElementById('quiz-container');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const feedbackContainer = document.getElementById('feedback-container');
const feedbackMessage = document.getElementById('feedback-message');
const nextQuestionBtn = document.getElementById('next-question-btn');
const resultContainer = document.getElementById('result-container');
const scoreText = document.getElementById('score-text');
const restartButton = document.getElementById('restart-quiz-btn');
const restartNavButton = document.getElementById('restart-btn');

let currentSubject = null;
let currentLevel = null;
let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;

// --- Function to display subjects ---
function displaySubjects() {
    mainTitle.textContent = "Select a Subject";
    subjectSelection.style.display = 'flex';
    levelSelection.style.display = 'none';
    quizContainer.style.display = 'none';
    resultContainer.style.display = 'none';

    // Clear previous buttons
    subjectSelection.innerHTML = '';

    quizData.subjects.forEach(subject => {
        const button = document.createElement('button');
        button.className = 'btn custom-btn btn-lg col-md-5';
        button.textContent = subject.name;
        button.addEventListener('click', () => {
            currentSubject = subject;
            displayLevels();
        });
        subjectSelection.appendChild(button);
    });
}

// --- Function to display levels ---
function displayLevels() {
    mainTitle.textContent = `Select a Level for ${currentSubject.name}`;
    subjectSelection.style.display = 'none';
    levelSelection.style.display = 'flex';
    quizContainer.style.display = 'none';
    resultContainer.style.display = 'none';

    // Clear previous buttons
    levelSelection.innerHTML = '';

    currentSubject.levels.forEach(level => {
        const button = document.createElement('button');
        button.className = 'btn custom-btn btn-lg col-md-5';
        button.textContent = level.name;
        button.addEventListener('click', () => {
            currentLevel = level;
            currentQuestions = level.questions;
            currentQuestionIndex = 0;
            score = 0;
            displayQuestion();
        });
        levelSelection.appendChild(button);
    });
}

// --- Function to display a question and its options ---
function displayQuestion() {
    mainTitle.textContent = `${currentSubject.name} - ${currentLevel.name}`;
    levelSelection.style.display = 'none';
    quizContainer.style.display = 'block';
    feedbackContainer.style.display = 'none';
    nextQuestionBtn.style.display = 'none';

    const question = currentQuestions[currentQuestionIndex];
    questionText.textContent = question.question;

    // Clear previous options
    optionsContainer.innerHTML = '';

    question.options.forEach(option => {
        const button = document.createElement('button');
        button.className = 'btn btn-option btn-lg';
        button.textContent = option;
        button.addEventListener('click', () => checkAnswer(option, question));
        optionsContainer.appendChild(button);
    });
}

// --- Function to check the user's answer ---
function checkAnswer(selectedOption, question) {
    const optionsButtons = optionsContainer.querySelectorAll('.btn-option');
    optionsButtons.forEach(button => {
        button.disabled = true; // Disable all buttons after an answer is selected
        if (button.textContent === question.answer) {
            button.classList.add('correct');
        } else if (button.textContent === selectedOption) {
            button.classList.add('wrong');
        }
    });

    if (selectedOption === question.answer) {
        score++;
        feedbackMessage.textContent = "Correct! " + question.explanation;
        feedbackMessage.classList.add('text-success');
        feedbackMessage.classList.remove('text-danger');
    } else {
        feedbackMessage.textContent = "Incorrect. The correct answer is: " + question.answer + ". " + question.explanation;
        feedbackMessage.classList.add('text-danger');
        feedbackMessage.classList.remove('text-success');
    }

    feedbackContainer.style.display = 'block';
    nextQuestionBtn.style.display = 'block';

}

// --- Function to move to the next question or results screen ---
function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < currentQuestions.length) {
        displayQuestion();
    } else {
        displayResults();
    }
}

// --- Function to display the final results ---
function displayResults() {
    mainTitle.textContent = "Quiz Complete!";
    quizContainer.style.display = 'none';
    resultContainer.style.display = 'block';
    scoreText.textContent = `You scored ${score} out of ${currentQuestions.length}!`;
}

// --- Function to restart the entire app ---
function restartApp() {
    currentSubject = null;
    currentLevel = null;
    currentQuestions = [];
    currentQuestionIndex = 0;
    score = 0;
    displaySubjects();
}

// --- Event Listeners ---
restartButton.addEventListener('click', restartApp);
restartNavButton.addEventListener('click', restartApp);
nextQuestionBtn.addEventListener('click', nextQuestion);

// --- Initial call to start the app ---
// The initial function to call depends on the page you are on.
// If this script is included in app.html, we should call displaySubjects
document.addEventListener('DOMContentLoaded', () => {
    // Check if we are on the quiz page
    if (document.getElementById('subject-selection')) {
        displaySubjects();
    }
});
