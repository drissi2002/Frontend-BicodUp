import { Component, OnInit } from '@angular/core';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-quizzes',
  templateUrl: './view-quizzes.component.html',
  styleUrls: ['./view-quizzes.component.css']
})
export class ViewQuizzesComponent implements OnInit {
<<<<<<< HEAD
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
=======

  quizzes=[
    {idquiz:'23',
    title:'java basic',
    description:'java quiz basic description',
    active:'',
    nbrquestion:'10',
    maxMarks:'50',
    category:{
      title:'programming'
    }
  },{idquiz:'25',
  title:'java basic',
  description:'java quiz basic description',
  active:'',
  nbrquestion:'10',
  maxMarks:'50',
  category:{
    title:'programming'
  }
},
]
  /*constructor(private _quiz:QuizService) { 
  }*/

  ngOnInit(): void {/*
>>>>>>> c7f37e7fe776a1a9640b085c2638c089352d96c1
    this._quiz.quizzes().subscribe(
      (data:any)=>{
        this.quizzes=data;
        console.log(this.quizzes);
      },
      (error: any)=>{
        console.log(error);
        Swal.fire('Error!','Error in loading data !','error');
      }
<<<<<<< HEAD
    )
=======
    )*/
>>>>>>> c7f37e7fe776a1a9640b085c2638c089352d96c1
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
<<<<<<< HEAD
        {
          //delete
          this._quiz.deleteQuiz(idquiz).subscribe((data)=>{
            this.quizzes = this.quizzes.filter((quiz)=>quiz.qId!=idquiz) 
=======
        {/*
          //delete
          this._quiz.deleteQuiz(idquiz).subscribe((data)=>{
            this.quizzes = this.quizzes.filter((quiz)=>quiz.idquiz!=idquiz) 
>>>>>>> c7f37e7fe776a1a9640b085c2638c089352d96c1
           Swal.fire('Success!',' Quiz deleted !','success');
            },
            (error: any)=>{
              Swal.fire('Error!','Error in deleting quiz !','error');
<<<<<<< HEAD
            } );
=======
            } );*/
>>>>>>> c7f37e7fe776a1a9640b085c2638c089352d96c1

        }
    })
   }
<<<<<<< HEAD

=======
>>>>>>> c7f37e7fe776a1a9640b085c2638c089352d96c1
}
