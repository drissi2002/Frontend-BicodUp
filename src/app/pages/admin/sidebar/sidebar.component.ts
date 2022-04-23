import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
<<<<<<< HEAD
  selector: 'app-sidebar',
=======
  selector: 'sidebar',
>>>>>>> c7f37e7fe776a1a9640b085c2638c089352d96c1
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  isLoggedIn =false ;
  user=null;

  constructor(public login :LoginService) { }

  ngOnInit(): void {
    this.isLoggedIn = this.login.isLoggedIn();
    this.user = this.login.getUser();
    this.login.loginStatusSubject.asObservable().subscribe((data)=>{
      this.isLoggedIn = this.login.isLoggedIn();
      this.user =this.login.getUser();
    });
  }

  public logout(){
    this.login.logout();
    window.location.reload();
    //this.login.loginStatusSubject.next(false);
  }

<<<<<<< HEAD
}
=======
}
>>>>>>> c7f37e7fe776a1a9640b085c2638c089352d96c1
