import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CancelModalComponent } from '../../modals/cancel-modal/cancel-modal.component';
import { ToastsService } from 'src/app/services/toasts/toasts.service';
import { UserApiService } from 'src/app/services/users/user-api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/classes/users/user';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-users-form',
  templateUrl: './users-form.component.html',
  styleUrls: ['./users-form.component.css', '../../../../styles.css'],
})
export class UsersFormComponent implements OnInit {
  title = 'Cadastro';
  id!: number;
  user = new User();

  constructor(
    private toastService: ToastsService,
    private modalService: NgbModal,
    private userService: UserApiService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  navigateToTable() {
    return this.router.navigate(['/users']);
  }

	cancel() {
		const modalRef = this.modalService.open(CancelModalComponent);
    modalRef.componentInstance.cancelData.subscribe(() => {
      this.navigateToTable();
    })
	}

  save() {
    if (!this.id) {
      this.userService.createUser(this.user).subscribe((res) => {
        this.toastService.showSuccess(res.body.msg);
        this.navigateToTable();
      }, (err: HttpErrorResponse) => {
        if (err.status === 400 || err.status === 401) {
          this.toastService.showDanger(err.error.msg);
        } else if (err.status === 404) {
          this.toastService.showDanger(err.error[0].msg);
        }
      });
    } else {
      this.userService.updateUser(this.id, this.user).subscribe((res) => {
        this.toastService.showSuccess(res.body.msg);
        this.navigateToTable();
      }, (err: HttpErrorResponse) => {
        if (err.status === 400 || err.status === 401) {
          this.toastService.showDanger(err.error.msg);
        } else if (err.status === 404) {
          this.toastService.showDanger(err.error[0].msg);
        }
      });
    }
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    if (this.id) {
      this.title = "Edição";
      this.userService.findById(this.id).subscribe((data) => {
        this.user = data;
      });
    }
  }
}
