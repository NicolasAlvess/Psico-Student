// Arquivo: src/app/features/quiz/quiz.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { quizQuestions, Question, Option } from './data/quiz.data';

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css'],
})
export class QuizComponent implements OnInit {
  questions: Question[] = [];
  currentQuestionIndex: number = 0;
  score: number = 0;
  quizFinished: boolean = false;
  selectedOption: Option | null = null;
  answerChecked: boolean = false;

  ngOnInit(): void {
    this.startQuiz();
  }

  startQuiz(): void {
    // Embaralha as perguntas para serem diferentes a cada vez
    this.questions = [...quizQuestions].sort(() => Math.random() - 0.5);
    this.currentQuestionIndex = 0;
    this.score = 0;
    this.quizFinished = false;
    this.selectedOption = null;
    this.answerChecked = false;
  }

  selectAnswer(option: Option): void {
    if (this.answerChecked) {
      return; // Impede de mudar a resposta
    }

    this.answerChecked = true;
    this.selectedOption = option;

    if (option.correct) {
      this.score++;
    }
  }

  nextQuestion(): void {
    if (this.currentQuestionIndex < this.questions.length - 1) {
      this.currentQuestionIndex++;
      this.selectedOption = null;
      this.answerChecked = false;
    } else {
      this.quizFinished = true;
    }
  }

  restartQuiz(): void {
    this.startQuiz();
  }
}
