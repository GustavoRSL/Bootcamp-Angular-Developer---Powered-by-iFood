import { Component, OnInit } from '@angular/core';
import quizzQuestions from "../../../assets/data/quizz_questions.json"

@Component({
  selector: 'app-quizz',
  templateUrl: './quizz.component.html',
  styleUrls: ['./quizz.component.css']
})
export class QuizzComponent implements OnInit {
  title:string='';

  questions:any;
  questionSelected:any;

  answers:string[] = [];
  answerSelected:string="";

  questionIndex:number = 0;
  questionMaxIndex:number = 0;

  finished:boolean = false;

  constructor(){
  }

  ngOnInit(): void {
    if(quizzQuestions){
      this.finished = false;
      this.title = quizzQuestions.title;
      this.questions = quizzQuestions.questions;
      this.questionSelected = this.questions[0];
      this.questionIndex = 0;
      this.questionMaxIndex = this.questions.length;
    }
  }

  playerChoise(choise:string):void{
    this.answers.push(choise);
    this.nextStep();
  }

  async nextStep(){
    this.questionIndex+=1;
    if(this.questionMaxIndex > this.questionIndex){
      this.questionSelected = this.questions[this.questionIndex];
    }
    else {
      this.finished = true;
      this.answerSelected  = quizzQuestions.results[await this.checkResult(this.answers) as keyof typeof quizzQuestions.results];

    }
  }

  async checkResult(answers:string[]){
    const result = answers.reduce((prev, cur, i, arr) => {
      if(arr.filter(item => item === prev).length > arr.filter(item => item === cur).length){
        return prev;
      }
      else {
        return cur;
      }
    })
    return result;
  }

}
