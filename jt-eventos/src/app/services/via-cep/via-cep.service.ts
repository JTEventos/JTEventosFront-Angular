import { Injectable } from '@angular/core';
import { ToastsService } from '../toasts/toasts.service';

@Injectable({
  providedIn: 'root'
})
export class ViaCepService {
  constructor(private toastService: ToastsService) { }

  // clearForm() {
  //   this.cep.nativeElement.value = ('');
  //   this.street.nativeElement.value = ('');
  //   this.neighborhood.nativeElement.value = ('');
  //   this.city.nativeElement.value = ('');
  //   this.state.nativeElement.value = ('');
  // }

  // validateBody(body: any) {
  //   if (!('erro' in body)) {
  //     this.street.nativeElement.value = (body.logradouro);
  //     this.neighborhood.nativeElement.value = (body.bairro);
  //     this.city.nativeElement.value = (body.localidade);
  //     this.state.nativeElement.value = (body.uf);
  //   } else {
  //     this.toastService.showDanger('CEP informado não encontrado.')
  //     this.clearForm();
  //   }
  // }

  async searchCep() {
    // var cep = this.cep.nativeElement.value.replace(/\D/g, '');
    // if (cep != '') {
    //   var validateCep = /^[0-9]{8}$/;
    //   if (validateCep.test(cep)) {
    //     const body = await (await fetch(`https://viacep.com.br/ws/${cep}/json`)).json();
    //     this.validateBody(body);
    //   } else {
    //     this.toastService.showWarning('CEP informado com formato inválido.')
    //     this.clearForm();
    //   }
    // } else {
    //   this.clearForm();
    // }
  }
}
