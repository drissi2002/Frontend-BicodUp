import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
     addQuiz(question: { 
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
      return this._http.get('${baseUrl}/quiz/');
        }

      //add quiz
    /* public addQuiz(quiz:any)
      {return this._http.post('${baseUrl}/quiz/',quiz);
    } */
    //delete quiz
    public deleteQuiz(idquiz: any)
    {
      return this._http.delete('${baseUrl}/quiz/${idquiz}');
    }
    //get the single quiz
    public getQuiz(idquiz: any ){
      return this._http.get('${baseUrl}/quiz/${idquiz}');
     
    }

    //update quiz
    public updateQuiz(quiz : any){
      return this._http.put('${baseUrl}/quiz/',quiz);
     
    }

}
