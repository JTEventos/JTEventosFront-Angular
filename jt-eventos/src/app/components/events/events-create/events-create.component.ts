import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbCalendar, NgbDate, NgbDateParserFormatter, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CancelModalComponent } from 'src/app/components/modals/cancel-modal/cancel-modal.component';

@Component({
	selector: 'app-events-create',
	templateUrl: './events-create.component.html',
	styleUrls: ['./events-create.component.css', '../../../../styles.css']
})
export class EventsCreateComponent implements OnInit {
	title = "Cadastro de evento"
	hoveredDate: NgbDate | null = null;

	fromDate: NgbDate | null;
	toDate: NgbDate | null;

	constructor(private modalService: NgbModal, private calendar: NgbCalendar, public formatter: NgbDateParserFormatter, public activeModal: NgbActiveModal) {
		this.fromDate = calendar.getToday();
		this.toDate = calendar.getNext(calendar.getToday(), 'd', 10);
	}

	cancel() {
		this.modalService.open(CancelModalComponent);
	}

	onDateSelection(date: NgbDate) {
		if (!this.fromDate && !this.toDate) {
			this.fromDate = date;
		} else if (this.fromDate && !this.toDate && date && date.after(this.fromDate)) {
			this.toDate = date;
		} else {
			this.toDate = null;
			this.fromDate = date;
		}
	}

	isHovered(date: NgbDate) {
		return (
			this.fromDate && !this.toDate && this.hoveredDate && date.after(this.fromDate) && date.before(this.hoveredDate)
		);
	}

	isInside(date: NgbDate) {
		return this.toDate && date.after(this.fromDate) && date.before(this.toDate);
	}

	isRange(date: NgbDate) {
		return (
			date.equals(this.fromDate) ||
			(this.toDate && date.equals(this.toDate)) ||
			this.isInside(date) ||
			this.isHovered(date)
		);
	}

	validateInput(currentValue: NgbDate | null, input: string): NgbDate | null {
		const parsed = this.formatter.parse(input);
		return parsed && this.calendar.isValid(NgbDate.from(parsed)) ? NgbDate.from(parsed) : currentValue;
	}

	ngOnInit(): void { }
}
