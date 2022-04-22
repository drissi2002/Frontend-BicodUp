import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import basUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(
    private _http:HttpClient,
    
  ) { }

  public getQuestionOfQuiz(idquiz:any)
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
}
