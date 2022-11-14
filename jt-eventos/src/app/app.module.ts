import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { UsersTableComponent } from './users/users-table/users-table.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UsersCreateComponent } from './users/users-create/users-create.component';
import { UsersDetailsComponent } from './users/users-details/users-details.component';
import { UsersEditComponent } from './users/users-edit/users-edit.component';
import { EventTypesTableComponent } from './event-types/event-types-table/event-types-table.component';
import { EventTypesCreateComponent } from './event-types/event-types-create/event-types-create.component';
import { EventTypesDetailsComponent } from './event-types/event-types-details/event-types-details.component';
import { EventTypesEditComponent } from './event-types/event-types-edit/event-types-edit.component';
import { CustomersCreateComponent } from './customers/customers-create/customers-create.component';
import { CustomersTableComponent } from './customers/customers-table/customers-table.component';
import { CustomersDetailsComponent } from './customers/customers-details/customers-details.component';
import { CustomersEditComponent } from './customers/customers-edit/customers-edit.component';
import { EstablishmentsTableComponent } from './establishments/establishments-table/establishments-table.component';
import { EstablishmentsCreateComponent } from './establishments/establishments-create/establishments-create.component';
import { EstablishmentsDetailsComponent } from './establishments/establishments-details/establishments-details.component';
import { EstablishmentsEditComponent } from './establishments/establishments-edit/establishments-edit.component';
import { EventsTableComponent } from './events/events-table/events-table.component';
import { EventsCreateComponent } from './events/events-create/events-create.component';
import { EventsDetailsComponent } from './events/events-details/events-details.component';
import { EventsEditComponent } from './events/events-edit/events-edit.component';
import { EventsReportComponent } from './events/events-report/events-report.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { CancelModalComponent } from './modals/cancel-modal/cancel-modal.component';
import { DeleteModalComponent } from './modals/delete-modal/delete-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    UsersTableComponent,
    UsersCreateComponent,
    UsersDetailsComponent,
    UsersEditComponent,
    EventTypesTableComponent,
    EventTypesCreateComponent,
    EventTypesDetailsComponent,
    EventTypesEditComponent,
    CustomersCreateComponent,
    CustomersTableComponent,
    CustomersDetailsComponent,
    CustomersEditComponent,
    EstablishmentsTableComponent,
    EstablishmentsCreateComponent,
    EstablishmentsDetailsComponent,
    EstablishmentsEditComponent,
    EventsTableComponent,
    EventsCreateComponent,
    EventsDetailsComponent,
    EventsEditComponent,
    EventsReportComponent,
    AuthenticationComponent,
    CancelModalComponent,
    DeleteModalComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    UsersTableComponent,
    // UsersCreateComponent,
    // UsersDetailsComponent,
    // UsersEditComponent,
    EventTypesTableComponent,
    // EventTypesCreateComponent,
    // EventTypesDetailsComponent,
    // EventTypesEditComponent,
    // CustomersCreateComponent,
    CustomersTableComponent,
    // CustomersDetailsComponent,
    // CustomersEditComponent,
    EstablishmentsTableComponent,
    // EstablishmentsCreateComponent,
    // EstablishmentsDetailsComponent,
    // EstablishmentsEditComponent,
    EventsTableComponent,
    // EventsCreateComponent,
    // EventsDetailsComponent,
    // EventsEditComponent,
    AuthenticationComponent,
    // CancelModalComponent,
  ]
})
export class AppModule { }
