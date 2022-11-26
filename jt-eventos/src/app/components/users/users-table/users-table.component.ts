import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { map, Observable, startWith } from 'rxjs';
import { User } from 'src/app/classes/users/user';
import { UserApiService } from 'src/app/services/users/user-api.service';
import { UsersDetailsComponent } from '../users-details/users-details.component';
import { UsersFormComponent } from '../users-form/users-form.component';

@Component({
	selector: 'app-users-table',
	templateUrl: './users-table.component.html',
	styleUrls: ['./users-table.component.css', '../../../../styles.css'],
	providers: [NgbModalConfig, NgbModal]
})
export class UsersTableComponent implements OnInit {
	title = "Usuários";
  searchField = '';
  list: User[] = [];

	constructor(
    config: NgbModalConfig,
    private modalService: NgbModal,
    private userService: UserApiService,
  ) {
		config.backdrop = 'static';
		config.keyboard = false;

		this.findAll();
	}

  findAll() {
    this.userService.findAll().subscribe((data) => {
      this.list = data;
    });
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
