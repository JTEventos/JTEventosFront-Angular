import { Injectable, TemplateRef } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ToastService {
	toasts: any[] = [];

	show(textOrTpl: string | TemplateRef<any>, options: any = {}) {
		this.toasts.push({ textOrTpl, ...options });
	}

  showSuccess(text: string) {
    this.show(text, { classname: 'bg-success text-light' });
  }

  showDanger(text: string) {
    this.show(text, { classname: 'bg-danger text-light' });
  }

  showWarning(text: string) {
    this.show(text, { classname: 'bg-warning text-dark' });
  }

	remove(toast: any) {
		this.toasts = this.toasts.filter((t) => t !== toast);
	}

	clear() {
		this.toasts.splice(0, this.toasts.length);
	}
}
