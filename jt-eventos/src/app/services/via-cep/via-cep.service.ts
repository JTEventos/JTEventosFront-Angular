import { Injectable } from '@angular/core';
import { ToastsService } from '../toasts/toasts.service';

@Injectable({
  providedIn: 'root'
})
export class ViaCepService {

  constructor(private toastService: ToastsService) {}

  clearForm(entity: any) {
    entity.cep = '';
    entity.street = '';
    entity.neighborhood = '';
    entity.city = '';
    entity.state = '';
  }

  myCallback(body: any, entity: any) {
    if (!('erro' in body)) {
      entity.street = body.logradouro;
      entity.neighborhood = body.bairro;
      entity.city = body.localidade;
      entity.state = body.uf;
    } else {
      this.toastService.showDanger('CEP informado não encontrado')
      this.clearForm(entity);
    }
  }

  async searchCep(entity: any) {
    var cep = entity.cep.replace(/\D/g, '');
    if (cep != '') {
      var validateCep = /^[0-9]{8}$/;
      if (validateCep.test(cep)) {
        const body = await (await fetch(`https://viacep.com.br/ws/${cep}/json`)).json();
        this.myCallback(body, entity);
      } else {
        this.toastService.showWarning('CEP informado com formato inválido')
        this.clearForm(entity);
      }
    } else {
      this.clearForm(entity);
    }
  }
}
