// This file contains the core logic for the interactive quiz application.

// Data structure for the quizzes, categorized by subject and difficulty level.
// Questions include a question, options, the correct answer, and an explanation.
const quizzes = {
    algebra: {
        beginner: [
            {
                question: "What is the value of 'x' in the equation: 3x - 2 = 7?",
                options: ["1", "3", "5", "9"],
                answer: "3",
                explanation: "First, add 2 to both sides to get 3x = 9. Then, divide both sides by 3 to get x = 3."
            },
            {
                question: "If a = 4 and b = 2, what is the value of a * b - a?",
                options: ["4", "8", "12", "6"],
                answer: "4",
                explanation: "First, multiply a by b: 4 * 2 = 8. Then, subtract a: 8 - 4 = 4."
            },
            {
                question: "Solve for 'y' in the equation: y/3 + 1 = 5",
                options: ["6", "9", "12", "15"],
                answer: "12",
                explanation: "First, subtract 1 from both sides to get y/3 = 4. Then, multiply both sides by 3 to get y = 12."
            }
        ],
        intermediate: [
            {
                question: "What is the slope of the line that passes through the points (2, 5) and (4, 9)?",
                options: ["1", "2", "3", "4"],
                answer: "2",
                explanation: "The slope is calculated as the change in y divided by the change in x. (9 - 5) / (4 - 2) = 4 / 2 = 2."
            },
            {
                question: "Solve for 'x': 4x + 3 = 2x + 9",
                options: ["3", "6", "12", "4"],
                answer: "3",
                explanation: "First, subtract 2x from both sides to get 2x + 3 = 9. Then, subtract 3 to get 2x = 6. Finally, divide by 2 to get x = 3."
            },
            {
                question: "What is the result of multiplying (x - 3) and (x + 5)?",
                options: ["x^2 - 15", "x^2 + 2x - 15", "x^2 - 2x + 15", "x^2 + 8x - 15"],
                answer: "x^2 + 2x - 15",
                explanation: "Use the FOIL method: First (x * x = x^2), Outer (x * 5 = 5x), Inner (-3 * x = -3x), Last (-3 * 5 = -15). This results in x^2 + 5x - 3x - 15, which simplifies to x^2 + 2x - 15."
            }
        ],
        hard: [
            {
                question: "Solve the system of equations: 2x + y = 7 and x - y = 2",
                options: ["x=3, y=1", "x=4, y=-1", "x=2, y=3", "x=5, y=1"],
                answer: "x=3, y=1",
                explanation: "Add the two equations together to eliminate y. This gives you 3x = 9, so x = 3. Substitute x=3 into the second equation: 3 - y = 2, which means y = 1."
            },
            {
                question: "Factor the quadratic expression: x^2 + 5x + 6",
                options: ["(x+1)(x+6)", "(x-2)(x+3)", "(x+2)(x+3)", "(x-1)(x-6)"],
                answer: "(x+2)(x+3)",
                explanation: "We need two numbers that multiply to 6 and add up to 5. These numbers are 2 and 3. So, the factored form is (x+2)(x+3)."
            },
            {
                question: "What is the value of 3! (3 factorial)?",
                options: ["3", "6", "9", "1"],
                answer: "6",
                explanation: "3 factorial means 3 * 2 * 1, which equals 6."
            }
        ]
    },
    science: {
        beginner: [
            {
                question: "What part of a plant absorbs sunlight to make food?",
                options: ["Roots", "Stem", "Leaves", "Flowers"],
                answer: "Leaves",
                explanation: "Leaves contain chlorophyll, which captures the sun's energy for photosynthesis."
            },
            {
                question: "What is the powerhouse of the cell?",
                options: ["Nucleus", "Cytoplasm", "Mitochondria", "Ribosome"],
                answer: "Mitochondria",
                explanation: "Mitochondria generate most of the chemical energy needed to power the cell's biochemical reactions."
            },
            {
                question: "What is the primary function of red blood cells?",
                options: ["Fighting infection", "Carrying oxygen", "Clotting blood", "Producing hormones"],
                answer: "Carrying oxygen",
                explanation: "Red blood cells contain hemoglobin, which binds to oxygen and transports it from the lungs to the rest of the body."
            }
        ],
        intermediate: [
            {
                question: "What is the process of a liquid turning into a gas called?",
                options: ["Condensation", "Freezing", "Evaporation", "Sublimation"],
                answer: "Evaporation",
                explanation: "Evaporation is the process by which atoms or molecules escape from a liquid and turn into a gas."
            },
            {
                question: "What is the chemical symbol for the element Gold?",
                options: ["Au", "Ag", "Fe", "Go"],
                answer: "Au",
                explanation: "The chemical symbol for Gold is 'Au', from the Latin word 'aurum'."
            },
            {
                question: "What type of rock is formed from cooled magma or lava?",
                options: ["Sedimentary", "Metamorphic", "Igneous", "Composite"],
                answer: "Igneous",
                explanation: "Igneous rocks are formed when molten rock (magma or lava) cools and solidifies."
            }
        ],
        hard: [
            {
                question: "What is the fundamental unit of heredity?",
                options: ["Protein", "Gene", "Cell", "Chromosome"],
                answer: "Gene",
                explanation: "A gene is a segment of DNA that contains the instructions for making a specific protein or RNA molecule, determining inherited traits."
            },
            {
                question: "What is the name of the process by which a cell divides into two identical daughter cells?",
                options: ["Meiosis", "Mitosis", "Photosynthesis", "Fusion"],
                answer: "Mitosis",
                explanation: "Mitosis is the process of cell division that results in two genetically identical daughter cells."
            },
            {
                question: "Which law of thermodynamics states that energy cannot be created or destroyed?",
                options: ["First Law", "Second Law", "Third Law", "Zeroth Law"],
                answer: "First Law",
                explanation: "The First Law of Thermodynamics, also known as the law of conservation of energy, states that the total energy of an isolated system is constant."
            }
        ]
    },
    'english language arts': {
        beginner: [
            {
                question: "Which word is an adjective in the sentence: 'The fluffy cat slept soundly'?",
                options: ["fluffy", "cat", "slept", "soundly"],
                answer: "fluffy",
                explanation: "An adjective describes a noun. 'Fluffy' describes the noun 'cat'."
            },
            {
                question: "What is a person, place, or thing called?",
                options: ["Verb", "Adjective", "Noun", "Adverb"],
                answer: "Noun",
                explanation: "A noun is a word that names a person, place, or thing."
            },
            {
                question: "What part of a story tells you where and when it happens?",
                options: ["Character", "Plot", "Setting", "Theme"],
                answer: "Setting",
                explanation: "The setting is the time and place in which a story takes place."
            }
        ],
        intermediate: [
            {
                question: "What is the term for the repetition of the same sound at the beginning of words, like 'Peter Piper picked a peck'?",
                options: ["Metaphor", "Alliteration", "Onomatopoeia", "Hyperbole"],
                answer: "Alliteration",
                explanation: "Alliteration is the literary device where a series of words begin with the same consonant sound."
            },
            {
                question: "The phrase 'The sun smiled down on us' is an example of what literary device?",
                options: ["Simile", "Metaphor", "Personification", "Irony"],
                answer: "Personification",
                explanation: "Personification is when a human quality is given to an inanimate object or idea. The sun cannot literally smile."
            },
            {
                question: "What is a verb that links the subject to a noun or adjective, such as 'is', 'are', or 'was'?",
                options: ["Action verb", "Helping verb", "Linking verb", "Adverb"],
                answer: "Linking verb",
                explanation: "Linking verbs connect the subject of a sentence to a noun or adjective that describes it."
            }
        ],
        hard: [
            {
                question: "What type of figurative language uses 'like' or 'as' to compare two things?",
                options: ["Metaphor", "Simile", "Personification", "Hyperbole"],
                answer: "Simile",
                explanation: "A simile is a figure of speech that directly compares two things using 'like' or 'as'."
            },
            {
                question: "A group of words that contains a subject and a verb is called a...",
                options: ["Phrase", "Clause", "Sentence", "Paragraph"],
                answer: "Clause",
                explanation: "A clause is a group of words that contains both a subject and a verb."
            },
            {
                question: "What is the term for a story that teaches a moral lesson?",
                options: ["Fable", "Myth", "Legend", "Epic"],
                answer: "Fable",
                explanation: "A fable is a short story, typically with animals as characters, that conveys a moral."
            }
        ]
    },
    history: {
        beginner: [
            {
                question: "The Boston Tea Party was a protest against which country's taxes?",
                options: ["France", "Spain", "Great Britain", "America"],
                answer: "Great Britain",
                explanation: "Colonists in Boston dumped tea into the harbor to protest the Tea Act, passed by the British Parliament in 1773."
            },
            {
                question: "Which Roman emperor made Christianity the official religion of the Roman Empire?",
                options: ["Julius Caesar", "Constantine the Great", "Nero", "Augustus"],
                answer: "Constantine the Great",
                explanation: "Constantine issued the Edict of Milan in 313 AD, which legalized Christianity, and he later made it the state religion."
            },
            {
                question: "What was the name of the route that brought enslaved Africans across the Atlantic Ocean?",
                options: ["The Silk Road", "The Middle Passage", "The Spice Route", "The New World Voyage"],
                answer: "The Middle Passage",
                explanation: "The Middle Passage was the treacherous journey of slave ships from West Africa to the West Indies and the American continents."
            }
        ],
        intermediate: [
            {
                question: "During the Cold War, which two superpowers were in a state of political and military tension?",
                options: ["Germany and France", "United States and Soviet Union", "China and Japan", "United Kingdom and Russia"],
                answer: "United States and Soviet Union",
                explanation: "The Cold War was a period of geopolitical tension between the United States and the Soviet Union and their respective allies."
            },
            {
                question: "Who was the leader of Nazi Germany during World War II?",
                options: ["Winston Churchill", "Joseph Stalin", "Benito Mussolini", "Adolf Hitler"],
                answer: "Adolf Hitler",
                explanation: "Adolf Hitler was the leader of the Nazi Party and the Führer of Germany from 1933 until his death in 1945."
            },
            {
                question: "What historical event is associated with the phrase 'I have a dream'?",
                options: ["The Civil Rights Movement", "The Women's Suffrage Movement", "The Industrial Revolution", "The American Revolution"],
                answer: "The Civil Rights Movement",
                explanation: "Dr. Martin Luther King Jr. delivered his famous 'I Have a Dream' speech during the March on Washington for Jobs and Freedom in 1963."
            }
        ],
        hard: [
            {
                question: "The Magna Carta, signed in 1215, limited the power of which English king?",
                options: ["King Henry VIII", "King Richard the Lionheart", "King John", "King Edward I"],
                answer: "King John",
                explanation: "King John was forced to sign the Magna Carta by a group of rebellious barons, which established that no one, not even the king, was above the law."
            },
            {
                question: "What was the primary goal of the Crusades?",
                options: ["To find new trade routes", "To spread democracy", "To reclaim the Holy Land from Muslim rule", "To explore the New World"],
                answer: "To reclaim the Holy Land from Muslim rule",
                explanation: "The Crusades were a series of religious wars initiated by European Christians to recover control of the Holy Land from the Islamic Caliphates."
            },
            {
                question: "The Renaissance, a period of great cultural change, began in which country?",
                options: ["France", "Spain", "Italy", "England"],
                answer: "Italy",
                explanation: "The Renaissance is widely considered to have originated in Florence, Italy, in the 14th century."
            }
        ]
    }
};

// Global variables to track the quiz state
let currentSubject = '';
let currentLevel = '';
let currentQuiz = [];
let currentQuestionIndex = 0;
let score = 0;

// Get DOM elements from the HTML file
const mainTitle = document.getElementById('main-title');
const subjectSelection = document.getElementById('subject-selection');
const levelSelection = document.getElementById('level-selection');
const quizContainer = document.getElementById('quiz-container');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const feedbackContainer = document.getElementById('feedback-container');
const feedbackMessage = document.getElementById('feedback-message');
const resultContainer = document.getElementById('result-container');
const scoreText = document.getElementById('score-text');
const restartBtn = document.getElementById('restart-btn');
const restartQuizBtn = document.getElementById('restart-quiz-btn');

// Hide all screen containers and show a specific one
function showScreen(screenId) {
    const screens = [subjectSelection, levelSelection, quizContainer, resultContainer];
    screens.forEach(screen => {
        if (screen) {
            screen.style.display = 'none';
        }
    });

    const screen = document.getElementById(screenId);
    if (screen) {
        screen.style.display = 'flex';
    }
}

// Display the subject selection screen by dynamically creating buttons
function showSubjects() {
    mainTitle.textContent = "Select a Subject";
    showScreen('subject-selection');
    subjectSelection.innerHTML = '';

    // Loop through the quizzes object to create a button for each subject
    for (const subject in quizzes) {
        const button = document.createElement('button');
        button.className = 'btn btn-custom btn-lg col-12 col-md-5 m-2';
        const displaySubject = subject === 'english language arts' ? 'English Language Arts' : subject.charAt(0).toUpperCase() + subject.slice(1);
        button.textContent = displaySubject;
        button.addEventListener('click', () => showLevels(subject));
        subjectSelection.appendChild(button);
    }
}

// Display the level selection screen for a given subject
function showLevels(subject) {
    currentSubject = subject;
    const displaySubject = subject === 'english language arts' ? 'English Language Arts' : subject.charAt(0).toUpperCase() + subject.slice(1);
    mainTitle.textContent = `Select a Level for ${displaySubject}`;
    showScreen('level-selection');
    levelSelection.innerHTML = '';

    // Loop through the levels for the selected subject to create buttons
    for (const level in quizzes[subject]) {
        const button = document.createElement('button');
        button.className = 'btn btn-custom btn-lg col-12 col-md-5 m-2';
        button.textContent = level.charAt(0).toUpperCase() + level.slice(1);
        button.addEventListener('click', () => startQuiz(subject, level));
        levelSelection.appendChild(button);
    }
}

// Initialize and start the quiz with a selected subject and level
function startQuiz(subject, level) {
    currentLevel = level;
    currentQuiz = quizzes[subject][level];
    currentQuestionIndex = 0;
    score = 0;
    const displaySubject = subject === 'english language arts' ? 'English Language Arts' : subject.charAt(0).toUpperCase() + subject.slice(1);
    mainTitle.textContent = `${displaySubject} Quiz - ${level.charAt(0).toUpperCase() + level.slice(1)}`;
    showScreen('quiz-container');
    displayQuestion();
}

// Display the current question and its options
function displayQuestion() {
    // Hide the feedback box and clear previous options
    feedbackContainer.style.display = 'none';
    optionsContainer.innerHTML = '';
    const currentQ = currentQuiz[currentQuestionIndex];
    questionText.innerHTML = `Question ${currentQuestionIndex + 1}: ${currentQ.question}`;

    // Create a button for each answer option
    currentQ.options.forEach(option => {
        const button = document.createElement('button');
        button.className = 'btn btn-option text-start';
        button.innerHTML = option;
        button.addEventListener('click', () => checkAnswer(option));
        optionsContainer.appendChild(button);
    });

    // Remove the 'Next Question' button if it exists
    const nextButton = document.getElementById('next-question-btn');
    if (nextButton) {
        nextButton.remove();
    }
}

// Check the user's answer and provide feedback
function checkAnswer(userChoice) {
    const currentQ = currentQuiz[currentQuestionIndex];
    const allOptions = optionsContainer.querySelectorAll('.btn-option');

    // Disable all option buttons to prevent multiple clicks
    allOptions.forEach(button => button.disabled = true);

    // Provide visual and text feedback for correct/wrong answers
    let isCorrect = userChoice === currentQ.answer;
    if (isCorrect) {
        score++;
        feedbackMessage.innerHTML = `<span class="text-success fw-bold">Correct!</span><br>${currentQ.explanation}`;
    } else {
        feedbackMessage.innerHTML = `<span class="text-danger fw-bold">Incorrect!</span><br>The correct answer was: <b>${currentQ.answer}</b><br>${currentQ.explanation}`;
    }

    // Highlight the user's choice and the correct answer
    allOptions.forEach(button => {
        if (button.innerHTML === currentQ.answer) {
            button.classList.add('correct');
        }
        if (button.innerHTML === userChoice && !isCorrect) {
            button.classList.add('wrong');
        }
    });

    feedbackContainer.style.display = 'block';

    // Add a 'Next' button to allow the user to advance manually
    const nextButton = document.createElement('button');
    nextButton.id = 'next-question-btn';
    nextButton.className = 'btn btn-custom mt-4';
    nextButton.textContent = 'Next Question';
    nextButton.addEventListener('click', handleNextQuestion);
    optionsContainer.parentNode.appendChild(nextButton);
}

// Handle moving to the next question or showing results
function handleNextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < currentQuiz.length) {
        displayQuestion();
    } else {
        showResult();
    }
}

// Display the final results screen
function showResult() {
    mainTitle.textContent = "Quiz Complete!";
    showScreen('result-container');

    let message = '';
    const percentage = (score / currentQuiz.length) * 100;
    if (percentage >= 70) {
        message = `Great job! You scored ${score}/${currentQuiz.length} (${percentage.toFixed(0)}%).`;
    } else {
        message = `Better luck next time. You scored ${score}/${currentQuiz.length} (${percentage.toFixed(0)}%).`;
    }
    scoreText.textContent = message;
}

// Restart the quiz from the beginning
function restartQuiz() {
    currentSubject = '';
    currentLevel = '';
    currentQuiz = [];
    currentQuestionIndex = 0;
    score = 0;
    feedbackContainer.style.display = 'none';
    showSubjects();
}

// Event listeners
if (restartBtn) {
    restartBtn.addEventListener('click', restartQuiz);
}
if (restartQuizBtn) {
    restartQuizBtn.addEventListener('click', restartQuiz);
}

// Initialize the application on page load
document.addEventListener('DOMContentLoaded', showSubjects);
