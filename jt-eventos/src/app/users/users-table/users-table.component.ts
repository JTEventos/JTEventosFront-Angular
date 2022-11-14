import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { map, Observable, startWith } from 'rxjs';
import { UsersCreateComponent } from '../users-create/users-create.component';
import { UsersDetailsComponent } from '../users-details/users-details.component';

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
			user.role.toLowerCase().includes(term)
		);
	});
}

@Component({
	selector: 'app-users-table',
	templateUrl: './users-table.component.html',
	styleUrls: ['./users-table.component.css', '../../../styles.css'],
	providers: [NgbModalConfig, NgbModal]
})
export class UsersTableComponent implements OnInit {
	title = "Usuários"
	users$: Observable<User[]>;
	filter = new FormControl('', { nonNullable: true });

	constructor(config: NgbModalConfig, private modalService: NgbModal) {
		// customize default values of modals used by this component tree
		config.backdrop = 'static';
		config.keyboard = false;

		this.users$ = this.filter.valueChanges.pipe(
			startWith(''),
			map((text) => search(text)),
		);
	}

	createUser() {
		this.modalService.open(UsersCreateComponent, { centered: true });
	}

	detailUser() {
		this.modalService.open(UsersDetailsComponent, { centered: true });
	}

	ngOnInit(): void { }
}
