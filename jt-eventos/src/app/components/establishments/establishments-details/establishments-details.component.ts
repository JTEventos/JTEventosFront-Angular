import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Establishment } from 'src/app/classes/establishments/establishment';
import { DeleteModalComponent } from 'src/app/components/modals/delete-modal/delete-modal.component';
import { EstablishmentApiService } from 'src/app/services/establishments/establishment-api.service';
import { ToastsService } from 'src/app/services/toasts/toasts.service';
import { ValidateError } from 'src/app/utils/validate-error';
import { EstablishmentsFormComponent } from '../establishments-form/establishments-form.component';

@Component({
  selector: 'app-establishments-details',
  templateUrl: './establishments-details.component.html',
  styleUrls: ['./establishments-details.component.css', '../../../../styles.css'],
})
export class EstablishmentsDetailsComponent implements OnInit {
  id!: number;
  establishment = new Establishment();

  constructor(
    private toastService: ToastsService,
    private modalService: NgbModal,
    private establishmentService: EstablishmentApiService,
    private router: Router,
    private route: ActivatedRoute,
    private utils: ValidateError
  ) { }

  navigateToTable() {
    return this.router.navigate(['/establishments']);
  }

  openDelete(id: number) {
    const modalRef = this.modalService.open(DeleteModalComponent);
    modalRef.componentInstance.description = 'estabelecimento';
    modalRef.componentInstance.deleteData.subscribe(() => {
      this.establishmentService.deleteEstablishment(id).subscribe((res) => {
        this.toastService.showSuccess(res.body.msg);
        this.navigateToTable();
      }, (err: HttpErrorResponse) => {
        this.utils.validateError(err);
      })
    })
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    if (this.id) {
      this.establishmentService.findById(this.id).subscribe((data) => {
        this.establishment = data;
      });
    }
  }
}
