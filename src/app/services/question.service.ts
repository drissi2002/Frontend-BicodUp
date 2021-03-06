import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { QuizService } from './quiz.service';

import basUrl from './helper';



@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(
    private _http:HttpClient,
    
  ) { }

  public getQuestionsOfQuizForTest(idquiz:any)
  {  
    return this._http.get(`${basUrl}/question/quiz/${idquiz}`);
  }

  public getQuestionOfQuiz(idquiz:any)
  {  
    return this._http.get(`${basUrl}/question/quiz/${idquiz}`);
  }

  public getQuestionsOfQuizForTest(idquiz:any)
  {  
    return this._http.get(`${basUrl}/question/quiz/${idquiz}`);
  }

  // add question
  public addQuestion(question:any)
  {  
    return this._http.post(`${basUrl}/question/`,question);
  }
  // delete question
  public deleteQuestion(questionId:any)
  {  
    return this._http.delete(`${basUrl}/question/${questionId}`);
  }

  //eval quiz
  public evalQuiz(questions:any){
    return this._http.post(`${basUrl}/question/eval-quiz`,questions);
}


}
