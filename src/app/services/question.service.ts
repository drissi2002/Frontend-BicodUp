import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { QuizService } from './quiz.service';
<<<<<<< HEAD
import basUrl from './helper';
=======
>>>>>>> c7f37e7fe776a1a9640b085c2638c089352d96c1

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

  public getQuestionsOfQuizForTest(idquiz:any)
  {  
    return this._http.get(`${basUrl}/question/quiz/${idquiz}`);
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

  //aval quiz
  public evalQuiz(questions:any){
         return this._http.post(`${basUrl}/questions/eval-quiz`,questions);
  }

}
