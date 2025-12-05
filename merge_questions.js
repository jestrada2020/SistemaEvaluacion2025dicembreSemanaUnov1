const fs = require('fs');
const path = require('path');

// Mock window
global.window = {
    examCategories: {}
};

const modulesDir = path.join(__dirname, 'js', 'modules');
const outputFile = path.join(__dirname, 'js', 'data', 'questions.js');

// Read all module files
fs.readdirSync(modulesDir).forEach(file => {
    if (file.endsWith('.js')) {
        const content = fs.readFileSync(path.join(modulesDir, file), 'utf8');
        try {
            eval(content);
            console.log(`Loaded ${file}`);
        } catch (e) {
            console.error(`Error loading ${file}:`, e.message);
        }
    }
});

// Aggregate questions
const allQuestions = [];
let questionCounter = 0;

Object.entries(window.examCategories).forEach(([key, category]) => {
    if (category.questions && Array.isArray(category.questions)) {
        category.questions.forEach((q, index) => {
            // Create a standardized question object
            const newQ = {
                ...q,
                id: `${key}_${index + 1}`, // Generate ID
                category: category.name || key // Use category name
            };
            allQuestions.push(newQ);
            questionCounter++;
        });
    }
});

console.log(`Total questions processed: ${questionCounter}`);

// Write output
const outputContent = `window.allQuestions = {
    "questions": ${JSON.stringify(allQuestions, null, 4)}
};`;

fs.writeFileSync(outputFile, outputContent);
console.log(`Written to ${outputFile}`);
