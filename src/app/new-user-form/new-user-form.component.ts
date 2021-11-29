import { Component, Input, OnInit } from '@angular/core';
import { UsersService } from '../userlist/users.service';

@Component({
  selector: 'app-new-user-form',
  templateUrl: './new-user-form.component.html',
  styleUrls: ['./new-user-form.component.css']
})
export class NewUserFormComponent implements OnInit {
  @Input() postUser: any;
  @Input() allUsers: any[] = [];
  newUser: any;

  constructor( private _usersService: UsersService ) { }

  ngOnInit(): void {
    this.newUser = {
      firstName : "",
      lastName : "",
      password : "",
      userName : ""
    }
  }

  createNewUser( event: any ): void{
    event.preventDefault();
    this.postUser( this.newUser );
  }

}
