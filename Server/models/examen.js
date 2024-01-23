const mongoose = require("mongoose");

const ExamSchema = mongoose.Schema({
    type: String,       // Tipo de examen (por ejemplo, "práctico" o "teórico")
    subject: String,    // Materia del examen (matematica, fisica, aritmetica,..)
    questions: [
        {
            question: String,       // Enunciado de la pregunta
            alternatives: [String], // Array de alternativas para la pregunta
            answer: String          // Respuesta correcta para la pregunta
        }
    ],
    results: {
        totalQuestions: Number,    // Número total de preguntas
        correctAnswers: Number,    // Número de respuestas correctas
        incorrectAnswers: Number,  // Número de respuestas incorrectas
        blankAnswers: Number       // Número de respuestas en blanco
    }
    // Puedes agregar más campos según tus necesidades
});

module.exports = mongoose.model("Exam", ExamSchema);
