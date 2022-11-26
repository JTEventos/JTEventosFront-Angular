import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { NgbActiveModal, NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { CancelModalComponent } from '../../modals/cancel-modal/cancel-modal.component';
import { ToastsService } from 'src/app/services/toasts/toasts.service';

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

  clearForm() {
    this.cep.nativeElement.value = ('');
    this.street.nativeElement.value = ('');
    this.neighborhood.nativeElement.value = ('');
    this.city.nativeElement.value = ('');
    this.state.nativeElement.value = ('');
  }

  myCallback(body: any) {
    if (!('erro' in body)) {
      this.street.nativeElement.value = (body.logradouro);
      this.neighborhood.nativeElement.value = (body.bairro);
      this.city.nativeElement.value = (body.localidade);
      this.state.nativeElement.value = (body.uf);
    } else {
      this.toastService.showDanger('CEP informado não encontrado.')
      this.clearForm();
    }
  }

  async searchCep() {
    var cep = this.cep.nativeElement.value.replace(/\D/g, '');
    if (cep != '') {
      var validateCep = /^[0-9]{8}$/;
      if (validateCep.test(cep)) {
        const body = await (await fetch(`https://viacep.com.br/ws/${cep}/json`)).json();
        this.myCallback(body);
      } else {
        this.toastService.showWarning('CEP informado com formato inválido.')
        this.clearForm();
      }
    } else {
      this.clearForm();
    }
  }

  ngOnInit(): void { }
}
