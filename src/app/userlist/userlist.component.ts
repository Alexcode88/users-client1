import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
  allUsers: any[] = [];
  firstName: any = "Test";
  lastName: any = "";
  password: any = "";
  userName: any = "";

  constructor( private _usersService: UsersService ) { }

  ngOnInit(): void {
  }

  getUsers(): void {
    console.log( "We are going to fetch the user lists!" );
    this.allUsers = this._usersService.users;
    console.log( "Userlist component", this.allUsers );
  }

  updateFirstName( event: any ): void {
    this.firstName = event.target.value;
  }

  updateLastName( event: any ): void {
    this.lastName = event.target.value;
  }

  updateUserName( event: any ): void {
    this.userName = event.target.value;
  }

  updatePassword( event: any ): void {
    this.password = event.target.value;
  }

  postUser( event: any ): void {
    event.preventDefault();
    

    let newUser = {
      userName : this.userName,
      firstName : this.firstName,
      lastName : this.lastName,
      password : this.password
    };

    //this._usersService.createUser( newUser );
    let observable = this._usersService.createAndReturnUser( newUser )

    observable.subscribe( (data: any) => {
      this.allUsers.push( data );
    })
    console.log( this.firstName, this.lastName, this.password, this.userName );
  }
}
