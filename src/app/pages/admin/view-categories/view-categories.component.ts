import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
<<<<<<< HEAD
import Swal from 'sweetalert2';
=======
>>>>>>> c7f37e7fe776a1a9640b085c2638c089352d96c1

@Component({
  selector: 'app-view-categories',
  templateUrl: './view-categories.component.html',
  styleUrls: ['./view-categories.component.css']
})
export class ViewCategoriesComponent implements OnInit {
<<<<<<< HEAD

  
  categories=[
    {cid:10,
    title:'programming',
   description:'this is a programming description'},
   {cid:12,
    title:'prog',
   description:'this is a programming description'},
   {cid:13,
    title:'practise',
   description:'this is a programming description'},
  ]
constructor(private _category:CategoryService) { 
=======
categories=[
  {cid:10,
  title:'programming',
 description:'this is a programming description'},
 {cid:12,
  title:'prog',
 description:'this is a programming description'},
 {cid:13,
  title:'practise',
 description:'this is a programming description'},
]
//categories =[];
 constructor(private _category:CategoryService) { 
>>>>>>> c7f37e7fe776a1a9640b085c2638c089352d96c1
    this._category.categories().subscribe((data:any)=>{
      this.categories=data;
      console.log(this.categories);
    },
    (error)=>{
      console.log(error);
  
<<<<<<< HEAD
      Swal.fire("Error !" ,"Error in loading data ..","error") ; })
  }
=======
      alert('error!!') ; })
  }

>>>>>>> c7f37e7fe776a1a9640b085c2638c089352d96c1
  ngOnInit(): void {
  }

}
