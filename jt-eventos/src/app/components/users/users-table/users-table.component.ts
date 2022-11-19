import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { map, Observable, startWith } from 'rxjs';
import { UsersDetailsComponent } from '../users-details/users-details.component';
import { UsersFormComponent } from '../users-form/users-form.component';

interface User {
	name: string;
	username: string;
	role: string;
}

const USERS: User[] = [
	{
		name: 'Thiago',
		username: 'thiago_user',
		role: 'Administrador',
	},
	{
		name: 'Jonas',
		username: 'jonas_user',
		role: 'Funcionário',
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
	styleUrls: ['./users-table.component.css', '../../../../styles.css'],
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
		const modalRef = this.modalService.open(UsersFormComponent, { centered: true });
    modalRef.componentInstance.title = 'Cadastro';
	}

	detailUser() {
		this.modalService.open(UsersDetailsComponent, { centered: true });
	}

	ngOnInit(): void { }
}
