import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UsersService } from '../userlist/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginPassword: string = "";
  loginUserName: string = "";
  errorMessage: string = "";

  constructor( private _usersService: UsersService, 
               private _router:Router,
               private _route:ActivatedRoute ) { }

  ngOnInit(): void {
  }

  loginHandler( event: any ): void{
    event.preventDefault();

    let currentUser = {
      loginPassword : this.loginPassword,
      loginUserName : this.loginUserName
    }
    let observable = this._usersService.loginUser( currentUser );
    observable.subscribe( (data: any ) => {
      this._router.navigate( ['/home'] );
    },
    ( error: any ) => {
      console.log( error );
      this.errorMessage = error.statusText;
    });
  }

}
