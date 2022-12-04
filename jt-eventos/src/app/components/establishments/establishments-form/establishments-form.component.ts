import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CancelModalComponent } from '../../modals/cancel-modal/cancel-modal.component';
import { ToastsService } from 'src/app/services/toasts/toasts.service';
import { ActivatedRoute, Router } from '@angular/router';
import { EstablishmentApiService } from 'src/app/services/establishments/establishment-api.service';
import { Establishment } from 'src/app/classes/establishments/establishment';
import { HttpErrorResponse } from '@angular/common/http';
import { ValidateError } from 'src/app/utils/validate-error';
import { ViaCepService } from 'src/app/services/via-cep/via-cep.service';

@Component({
  selector: 'app-establishments-form',
  templateUrl: './establishments-form.component.html',
  styleUrls: ['./establishments-form.component.css', '../../../../styles.css'],
})
export class EstablishmentsFormComponent implements OnInit {
  title = 'Cadastro';
  id!: number;
  establishment = new Establishment();

	constructor(
    private toastService: ToastsService,
    private modalService: NgbModal,
    private establishmentService: EstablishmentApiService,
    private router: Router,
    private route: ActivatedRoute,
    private utils: ValidateError,
    public viaCep: ViaCepService
  ) {}

  navigateToTable() {
    return this.router.navigate(['/establishments']);
  }

	cancel() {
		const modalRef = this.modalService.open(CancelModalComponent);
    modalRef.componentInstance.cancelData.subscribe(() => {
      this.navigateToTable();
    })
	}

  save() {
    if (!this.id) {
      this.establishmentService.createEstablishment(this.establishment).subscribe((res) => {
        this.toastService.showSuccess(res.body.msg);
        this.navigateToTable();
      }, (err: HttpErrorResponse) => {
        this.utils.validateError(err);
      });
    } else {
      this.establishmentService.updateEstablishment(this.id, this.establishment).subscribe((res) => {
        this.toastService.showSuccess(res.body.msg);
        this.navigateToTable();
      }, (err: HttpErrorResponse) => {
        this.utils.validateError(err);
      });
    }
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    if (this.id) {
      this.title = "Edição";
      this.establishmentService.findById(this.id).subscribe((data) => {
        this.establishment = data;
      });
    }
  }
}
