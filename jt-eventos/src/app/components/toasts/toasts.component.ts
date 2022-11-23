import { Component, TemplateRef } from '@angular/core';
import { ToastsService } from 'src/app/services/toasts/toasts.service';

@Component({
  selector: 'app-toasts',
  templateUrl: './toasts.component.html',
  host: { class: 'toast-container position-fixed top-0 end-0 p-3', style: 'z-index: 1200' },
})
export class ToastsComponent {
  constructor(public toastService: ToastsService) { }

  isTemplate(toast: any) {
    return toast.textOrTpl instanceof TemplateRef;
  }
}
