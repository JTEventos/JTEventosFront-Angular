import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/classes/users/user';
import { UserApiService } from 'src/app/services/users/user-api.service';

@Component({
	selector: 'app-users-table',
	templateUrl: './users-table.component.html',
	styleUrls: ['./users-table.component.css', '../../../../styles.css'],
})
export class UsersTableComponent implements OnInit {
  searchField = '';
  list: User[] = [];

	constructor(private userService: UserApiService) {
		this.findAll();
	}

  findAll() {
    this.userService.findAll().subscribe((data) => {
      this.list = data;
    });
  }

	ngOnInit(): void { }
}
