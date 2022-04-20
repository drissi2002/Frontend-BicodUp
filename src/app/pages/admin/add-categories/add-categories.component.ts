import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-categories',
  templateUrl: './add-categories.component.html',
  styleUrls: ['./add-categories.component.css']
})
export class AddCategoriesComponent implements OnInit {
  category={
    'title':'',
    'description':''
  }
 constructor(private _category:CategoryService , private _Snack:MatSnackBar) { }

  ngOnInit(): void {
  }
formSubmit(){
  if(this.category.title.trim()=="" || this.category.title== null){
  this._Snack.open('Title required','',{
    duration:300
  });
  return;
  }
  this._category.addCategory(this.category).subscribe(
    (data:any)=>{
      this.category.title=data;
      alert('success');
    },
    (error)=>{
      console.log(error);
      alert('echec');
    }
  )
}
}
