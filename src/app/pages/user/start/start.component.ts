import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';
import { LocationStrategy } from '@angular/common';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {
  qid:any;
  questions:any;
  index=1;
 
  marksGot=0;
  correctAnswers=0;
  attempted=0;
 
  isSubmit = false ;
 
  timer: any;
 
   constructor( 
     private locationSt: LocationStrategy ,
     private _route: ActivatedRoute,
     private _question:QuestionService) { }
 
   ngOnInit(): void {
     this.preventBackButton();
     this.qid = this._route.snapshot.params.qid;
     console.log(this.qid);
     this. loadQuestions();
   }
   loadQuestions() {
     this._question.getQuestionsOfQuizForTest(this.qid).subscribe(
       (data:any)=>{
         this.questions=data;
 
         this.timer = this.questions.length * 2 * 60;
         
         this.questions.forEach((q:any)=>{
         q['givenAnswer']='';
         });
         console.log(this.questions);
         this.startTimer();
 
       },
       (error:any)=>{
         console.log(error);
         Swal.fire('Error', 'Error in loading questions of quiz','error');
       }
     );
   }
   
   preventBackButton()
   {
     history.pushState(null,'null',location.href);
     this.locationSt.onPopState(() => {
       history.pushState(null,'null', location.href);
       });
 
   }
   submitQuiz(){
     Swal.fire({
       title: 'Do you want to submit the quiz ?',
 
       showCancelButton:true,
       confirmButtonText: 'Submit',
       denyButtonText: 'Dont save',
       icon:'info'
     }).then((e)=>{
          if (e.isConfirmed) {
           this.evalQuiz();
          }
     });
   }
 
   startTimer(){
    let t  = window.setInterval(()=>{
         //code
         if(this.timer <= 0){
           this.evalQuiz()
           clearInterval(t);
         }else {
           this.timer--;
         }
     },1000)
   }
   getFormattedTime(){
     let mm = Math.floor(this.timer / 60);
     let ss = this.timer - mm * 60;
     return `${mm} min : ${ss} sec`;
     
   }
   evalQuiz(){
      //calculation
      //call to server to check questions
      this._question.evalQuiz(this.questions).subscribe(
        (data:any)=>{
          console.log(data);
          this.marksGot=parseFloat(Number(data.marksGot).toFixed(2));
          this.correctAnswers=data.correctAnswers;
          this.attempted=data.attempted;
          this.isSubmit=true;
        },
        (error)=>{
          console.log(error);
        }
      );
   }
   printPage(){
    window.print();
  }
 

}
