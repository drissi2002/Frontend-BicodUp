import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-quiz-questions',
  templateUrl: './view-quiz-questions.component.html',
  styleUrls: ['./view-quiz-questions.component.css']
})
export class ViewQuizQuestionsComponent implements OnInit {
  idquiz:any;
  qTitle:any ;
  questions:any =[ 
  {content:'What is your name ?',
  option1:'a ',
  option2:'b',
  option3:'c',
  option4:'d',
  answer:'Manel'
  }];

 /* constructor(
    private _route:ActivatedRoute,
    private _question:QuestionService,
    private _snak:MatSnacBar) { }*/

  ngOnInit(): void {/*
    this.idquiz=this._route.snapshot.params.idquiz;
    this.qTitle=this._route.snapshot.params.title;
    this._question.getQuestionOfQuiz(this.idquiz).subscribe((data)=>{
      console.log(data);
      this.questions= data;
    },
    (error) =>{
      console.log(error);
    });*/
  }
  //delete question

  deleteQuestion(idquiz:any){/*
    Swal.fire({
      icon:'info',
      showCancelButton:true,
      confirmButtonText:'Delete',
      title:'Are you sure , want to delete this quesion ?'
    }).then((result)=>{
      if(result.isConfirmed){
         //confirm
         this._question.deleteQuestion(idquiz).subscribe((data:any)=>{
           this._snak.open('Question Deleted','',{
             duration:3000,
           });
           this.questions=this.questions.filter((q:any)=>q.quesId==idquiz);
         },
         (error:any)=>{
           this._snak.open('Error in deleting questions','',{
             duration:3000,
           })
         });
         console.log(error);
      }
    });

  */}

}
