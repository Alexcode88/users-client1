import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UsersService } from '../userlist/users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  allUsers: any[] = [];

  constructor(  private _usersService: UsersService, 
                private _router:Router,
                private _route:ActivatedRoute) { }

  ngOnInit(): void {
    /*let observable = this._usersService.validateUser();
    observable.subscribe( (data: any) => {
      console.log( data );
    },
    (error: any) =>{
      this._router.navigate( ['/login'] );
    })*/
    this.getUsers();
  }

  getUsers(): void {
    this.allUsers = this._usersService.users;
  }

}
