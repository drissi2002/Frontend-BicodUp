import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import basUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
     
  public addQuestionQuiz(question: { 
       quiz: {}; 
       content: string; 
       option1: string; 
       option2: string;
       option3: string;
       option4: string;
       answer: string; })
  {
    throw new Error('Method not implemented.');
  }

  constructor(private _http:HttpClient) {}
    public quizzes(){
      return this._http.get(`${basUrl}/quiz/`);
        }

      //add quiz
    public addQuiz(quiz:any)
      {return this._http.post(`${basUrl}/quiz/`,quiz);
    } 
    //delete quiz
    public deleteQuiz(idquiz: any)
    {
      return this._http.delete(`${basUrl}/quiz/${idquiz}`);
    }
    //get the single quiz
    public getQuiz(idquiz: any ){
      return this._http.get(`${basUrl}/quiz/${idquiz}`);
     
    }

    //update quiz
    public updateQuiz(quiz : any){
      return this._http.put(`${basUrl}/quiz/`,quiz);
     
    }

    // get quizzes of category
    public getQuizzesOfCategory(cid : any){
      return this._http.get(`${basUrl}/quiz/category/${cid}`);
    }

}