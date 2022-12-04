import { Injectable } from "@angular/core";
import { ToastsService } from "../services/toasts/toasts.service";

@Injectable({
  providedIn: 'root'
})
export class ValidateError {

  constructor(private toastService: ToastsService) {}

  validateError(err: any) {
    if (err.error.length > 0) {
      for (let errorMessage of err.error ) {
        this.toastService.showDanger(errorMessage.msg);
      }
    } else {
      this.toastService.showDanger(err.error.msg);
    }
  }
}
