import { Component } from '@angular/core';
import { ParentUser } from './parent-user';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Vazha Kimadze';

  users = [
    { firstname: 'Sam', lastname: 'Hyde', age: 32 },
    { firstname: 'Leon', lastname: 'Edwards', age: 30 },
    { firstname: 'Jon', lastname: 'Jones', age: 37 },
    { firstname: 'Dexter', lastname: 'Morgan', age: 32 },
    { firstname: 'Dustin', lastname: 'Porier', age: 30 }
  ];

  parentUsers: ParentUser[] = [
    { Id: 1, Firstname: 'John', Lastname: 'Doe', DateOfBirth: '1990-01-01', PhoneNumber: '577205770', Email: 'johndoegmail.com' },
  
  ];

  receivedChildUsers: ChildUser[];

  userForm = new FormGroup({
    Id: new FormControl('', Validators.required),
    Firstname: new FormControl('', [Validators.required, Validators.minLength(3)]),
    Lastname: new FormControl('', [Validators.required, Validators.minLength(3)]),
    DateOfBirth: new FormControl('', Validators.required),
    PhoneNumber: new FormControl('', [Validators.required, Validators.minLength(9)]),
    Email: new FormControl('', [Validators.required, Validators.minLength(8)])
  });

  addUser() {
    if (this.userForm.valid) {
      this.users.push(this.userForm.value);
      this.userForm.reset();
    }
  }

  receiveChildUsers(childUsers: ChildUser[]) {
    this.receivedChildUsers = childUsers;
  }
}
