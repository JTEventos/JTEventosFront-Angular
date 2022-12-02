import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CancelModalComponent } from '../../modals/cancel-modal/cancel-modal.component';
import { ToastsService } from 'src/app/services/toasts/toasts.service';
import { UserApiService } from 'src/app/services/users/user-api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/classes/users/user';

@Component({
  selector: 'app-users-form',
  templateUrl: './users-form.component.html',
  styleUrls: ['./users-form.component.css', '../../../../styles.css'],
})
export class UsersFormComponent implements OnInit {
  title = 'Cadastro';
  id!: number;
  user = new User();

  @ViewChild('Password', { static: false }) password: ElementRef<HTMLInputElement> = {} as ElementRef;
  @ViewChild('ConfirmPassword', { static: false }) confirmPassword: ElementRef<HTMLInputElement> = {} as ElementRef;

  constructor(
    private toastService: ToastsService,
    private modalService: NgbModal,
    private userService: UserApiService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

	cancel() {
		const modalRef = this.modalService.open(CancelModalComponent);
    modalRef.componentInstance.cancelData.subscribe(() => {
      this.router.navigate(['/users']);
    })
	}

  save() {
    if (!this.id) {
      this.userService.createUser(this.user).subscribe((user) => {
        this.user = new User();
        this.router.navigate(['/users']);
        this.toastService.showSuccess('Cadastro realizado com sucesso.');
      });
    } else {
      this.userService.updateUser(this.id, this.user).subscribe((data) => {
        this.user = data;
        this.router.navigate(['/users']);
        this.toastService.showSuccess('Edição realizada com sucesso.');
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
