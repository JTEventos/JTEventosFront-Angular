import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { User } from 'src/app/classes/users/user';
import { UsersFormComponent } from '../users-form/users-form.component';

@Component({
  selector: 'app-users-details',
  templateUrl: './users-details.component.html',
  styleUrls: ['./users-details.component.css', '../../../../styles.css'],
  providers: [NgbModalConfig, NgbModal]
})
export class UsersDetailsComponent implements OnInit {
  user = new User();

  constructor() { }

  ngOnInit(): void { }
}
