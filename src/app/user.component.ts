import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ParentUser } from '../parent-user';
import { ChildUser } from '../child-user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  @Input() parentUsers: ParentUser[];
  @Output() childUsersEvent = new EventEmitter<ChildUser[]>();

  childUsers: ChildUser[] = [
    { Id: 1, Firstname: 'Michael', Lastname: 'Chandler', DateOfBirth: '1990-02-02', PhoneNumber: '557654321', Email: 'mchandler@gmail.com' },
  
  ];

  emitChildUsers() {
    this.childUsersEvent.emit(this.childUsers);
  }
}
