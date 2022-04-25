import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

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
      (user:any)=>{
        this.user=user;
      },
      (error)=>alert("error")
    )
  }

}
