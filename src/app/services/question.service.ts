import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { QuizService } from './quiz.service';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(
    private _http:HttpClient,
    
  ) { }

  public getQuestionOfQuiz(idquiz:any)
  {  
    return this._http.get('${baseUrl/question/quiz/all/${idquiz}');
  }
  // add question
  public addQuestion(question:any)
  {  
    return this._http.post('${baseUrl/question/',question);
  }
  // delete question
  public deleteQuestion(questionId:any)
  {  
    return this._http.delete('${baseUrl/question/${questionId}');
  }
}
