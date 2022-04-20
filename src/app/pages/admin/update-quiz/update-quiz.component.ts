import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-quiz',
  templateUrl: './update-quiz.component.html',
  styleUrls: ['./update-quiz.component.css']
})
export class UpdateQuizComponent implements OnInit {
  categories=[
    { cid:23,
     title:'Programming'
    },
    { cid:25,
     title:'Gaming'
    }
   ]


  /*constructor(
    private _route:ActivatedRoute ,
     private _quiz:QuizService , 
     private _cat:CategoryService,
     private _router:Router)
    { }*/
  

  idquiz=0;
  quiz:any;

  ngOnInit(): void {/*
    this.idquiz=this._route.snapshot.params.idquiz;
    alert(this.idquiz);
    this._quiz.getQuiz(this.idquiz).subscribe(
        (data:any)=>{
             this.quiz=data;
             console.log(this.quiz);
        },
        (error)=>{
            console.log(error);
        }
    );
    
    this._cat.categories().subscribe(
      (data:any)=>{
           this.categories=data;
      },error=>{
        alert("error in loading categories");
      }
    );*/
  }
  /*
  //update form submit
  public updateData(){
     //validatate
     this._quiz.updateQuiz(this.quiz).subscribe((data)=>{
       Swal.fire("Success !!",'quiz updated', 'success').then((e)=>{
         this._router.navigate(['/admin/quizzes']);
       });
     },(error:any)=>{
      Swal.fire('Error','error in updating quiz','error');
      console.log(error);
    })
  }*/

}
