import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoryService } from 'src/app/services/category.service';
import { QuizService } from 'src/app/services/quiz.service';
=======
import { CategoryService } from 'src/app/services/category.service';
>>>>>>> c7f37e7fe776a1a9640b085c2638c089352d96c1
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-quiz',
  templateUrl: './add-quiz.component.html',
  styleUrls: ['./add-quiz.component.css']
})
export class AddQuizComponent implements OnInit {
<<<<<<< HEAD


  categories=[
    { 
     cid:"23",
     title:'Programming'
    },
    { 
     cid:"25",
     title:'Gaming'
    }
   ]
   
   quizData={
    title: "",
    description: "",
    maxMarks: "",
    numberOfQuestions: "",
    active: false,
    category: {
       cid:''   
    }
 
   };
 
   constructor(
     private _cat:CategoryService,
     private _snack:MatSnackBar,
      private _quiz: QuizService) 
      { }
 
   ngOnInit(): void {
      this._cat.categories().subscribe(
      (data:any)=>{
        this.categories=data;
        console.log(this.categories);
      },
       (error)=>{
         console.log(error);
         Swal.fire('Error ! ','error in loading data from server','error');
       }
      );
    }

    formSubmit(){
     if(this.quizData.title.trim()=='' || this.quizData.title==null){
         this._snack.open("Title Required !!",'', {
           duration: 3000, 
         });
         return;
     }
     //validation...
     //call server
     this._quiz.addQuiz(this.quizData).subscribe(
       (data)=>{
         Swal.fire('Success','quiz is added','success')
         this.quizData={
          title:'',
          description:'',
          maxMarks:'',
          numberOfQuestions:'',
          active:false,
          category:{
            cid:''    
           }};
   },
   (error)=>{
     Swal.fire('Error !!','Error while adding quiz','error')
     console.log(error);
   }
   );
 

}
}
=======
  categories=[
   { cid:23,
    title:'Programming'
   },
   { cid:25,
    title:'Gaming'
   }
  ]
  quizData={
    title:'',
    description:'',
    maxMarks:'',
    numberOfQuestions:'',
    active: true,
    category:{cid:'',},

  };

  /*constructor(
    private _cat:CategoryService,
    private _snack:MatSnackBar,
     private _quiz: QuizService) 
     { }*/

  ngOnInit(): void {/*

    this._cat.categories().subscribe(
     (data:any)=>{
       this.categories=data;
       console.log(this.categories);
     },

      (error)=>{
        console.log(error);
        Swal.fire('Error !! ','error in loading data from server','error');
      }
     );*/
    
  }/*
  addQuiz(){
    if(this.quizData.title.trim()=='' || this.quizData.title==null){
        this._snack.open("Title Required !!",'', {
          duration: 3000, 
        });
        return;
    }
    //validation...

    //call server
    this._quiz.addQuiz(this.quizData).subscribe(
      (data)=>{
        Swal.fire('Success','quiz is added','success')
        this.quizData={
    title:'',
    description:'',
    maxMarks:'',
    numberOfQuestions:'',
    active: true,
    category:{cid:'',
        },
      };
  },
  (error)=>{
    Swal.fire('Error !!','Error while adding quiz','error')
    console.log(error);
  }

});*/

}
>>>>>>> c7f37e7fe776a1a9640b085c2638c089352d96c1
