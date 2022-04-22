import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-sidebar-user',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
categories:any;
  constructor(private _cat:CategoryService,private _snack:MatSnackBar) {
    
   }

  ngOnInit(): void {
this._cat.categories().subscribe(
  (data:any)=>{this.categories=data;

  },(error)=>{
this._snack.open('Error in loading categories from server','',{
  duration:3000,
});
  }
);
  }

}
