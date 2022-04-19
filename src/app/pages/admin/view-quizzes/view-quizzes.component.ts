import { Component, OnInit } from '@angular/core';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-quizzes',
  templateUrl: './view-quizzes.component.html',
  styleUrls: ['./view-quizzes.component.css']
})
export class ViewQuizzesComponent implements OnInit {
  quizzes=[
    {
    qId: 41,
    title: "Java Basics",
    description: "This quiz  contains questions about Java Basics",
    maxMarks: "200",
    numberOfQuestions: "100",
    active: false,
    category: {
        title: "Programming languages",
    }
},
{
  qId: 45,
  title: "Docker fundamentals",
  description: "This quiz  contains questions about Docker fundamentals",
  maxMarks: "100",
  numberOfQuestions: "50",
  active: false,
  category: {
      title: "DevOps",
  }
}



]
  constructor(private _quiz:QuizService) { 
  }

  ngOnInit(): void {
    this._quiz.quizzes().subscribe(
      (data:any)=>{
        this.quizzes=data;
        console.log(this.quizzes);
      },
      (error: any)=>{
        console.log(error);
        Swal.fire('Error!','Error in loading data !','error');
      }
    )
  }
   //
  
   deleteQuiz(idquiz: any){
    Swal.fire({
      icon:'info',
      title:'Are you sure ?',
      confirmButtonText: 'Delete',
      showCancelButton:true,
    }).then((result)=>{

      if(result.isConfirmed)
        {
          //delete
          this._quiz.deleteQuiz(idquiz).subscribe((data)=>{
            this.quizzes = this.quizzes.filter((quiz)=>quiz.qId!=idquiz) 
           Swal.fire('Success!',' Quiz deleted !','success');
            },
            (error: any)=>{
              Swal.fire('Error!','Error in deleting quiz !','error');
            } );

        }
    })
   }

}
