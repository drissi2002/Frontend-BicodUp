import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { LoginService } from 'src/app/services/login.service';
=======
>>>>>>> c7f37e7fe776a1a9640b085c2638c089352d96c1

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
<<<<<<< HEAD
  user={ 
    "id":'', 
    "username": "", 
    "password": "", 
    "firstName": "", 
    "lastName": "", 
    "email": "", 
    "phone": "", 
    "enabled":'', 
    "profile": "", 
    "authorities": [ { 
      "authority": "" 
    } ],
    "accountNonExpired":'', 
    "credentialsNonExpired":'', 
    "accountNonLocked":'' 
  };

  constructor(private login :LoginService) { }

  ngOnInit(): void {
    //this.user=this.login.getUser();
    this.login.getCurrentUser().subscribe(
=======
user=null;
  constructor() { }

  ngOnInit(): void {
   this.user=this.login.getUser();
   this.login.getCurrentUser().subscribe(
>>>>>>> c7f37e7fe776a1a9640b085c2638c089352d96c1
      (user:any)=>{
        this.user=user;
      },
      (error)=>alert("error")
    )
  }

<<<<<<< HEAD
}
=======
}
>>>>>>> c7f37e7fe776a1a9640b085c2638c089352d96c1
