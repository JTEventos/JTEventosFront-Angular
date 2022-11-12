import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map, Observable, startWith } from 'rxjs';

interface User {
	name: string;
	username: string;
	role: string;
}

const USERS: User[] = [
	{
		name: 'Thiago',
		username: 'thiago_user',
		role: 'ADMIN',
	},
	{
		name: 'Jonas',
		username: 'jonas_user',
		role: 'EMPLOYEE',
	},
];

function search(text: string): User[] {
	return USERS.filter((user) => {
		const term = text.toLowerCase();
		return (
			user.name.toLowerCase().includes(term) ||
			user.username.toLowerCase().includes(term) ||
			user.role.toLocaleLowerCase().includes(term)
		);
	});
}

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.css', '../../../styles.css']
})
export class UsersTableComponent implements OnInit {
  title = "Usuários"
  users$: Observable<User[]>;
  filter = new FormControl('', { nonNullable: true });

  constructor() {
    this.users$ = this.filter.valueChanges.pipe(
      startWith(''),
      map((text) => search(text)),
    );
  }

  ngOnInit(): void {
  }

}
