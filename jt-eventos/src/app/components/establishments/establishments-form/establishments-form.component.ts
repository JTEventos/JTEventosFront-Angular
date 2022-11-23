import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { NgbActiveModal, NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { CancelModalComponent } from '../../modals/cancel-modal/cancel-modal.component';
import { ToastsService } from 'src/app/services/toasts/toasts.service';
import { ViaCepService } from 'src/app/services/via-cep/via-cep.service';

@Component({
  selector: 'app-establishments-form',
  templateUrl: './establishments-form.component.html',
  styleUrls: ['./establishments-form.component.css', '../../../../styles.css'],
  providers: [NgbModalConfig, NgbModal]
})
export class EstablishmentsFormComponent implements OnInit {
  @Input() title: any;

  @ViewChild('Cep', { static: false }) cep: ElementRef<HTMLInputElement> = {} as ElementRef;
  @ViewChild('Street', { static: false }) street: ElementRef<HTMLInputElement> = {} as ElementRef;
  @ViewChild('StreeetNumber', { static: false }) streetNumber: ElementRef<HTMLInputElement> = {} as ElementRef;
  @ViewChild('StreeetComplement', { static: false }) streetComplement: ElementRef<HTMLInputElement> = {} as ElementRef;
  @ViewChild('Neighborhood', { static: false }) neighborhood: ElementRef<HTMLInputElement> = {} as ElementRef;
  @ViewChild('City', { static: false }) city: ElementRef<HTMLInputElement> = {} as ElementRef;
  @ViewChild('State', { static: false }) state: ElementRef<HTMLInputElement> = {} as ElementRef;

	constructor(
    private toastService: ToastsService,
    private modalService: NgbModal,
    private activeModal: NgbActiveModal,
    public viaCep: ViaCepService
  ) {}

	cancel() {
		const modalRef = this.modalService.open(CancelModalComponent);
    modalRef.componentInstance.cancelData.subscribe(() => {
      this.activeModal.close();
    })
	}

  save() {
    this.activeModal.close();
    this.toastService.showSuccess('Cadastro realizado com sucesso.');
  }

  ngOnInit(): void { }
}
