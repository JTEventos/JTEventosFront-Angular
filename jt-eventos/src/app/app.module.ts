import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { UsersTableComponent } from './components/users/users-table/users-table.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UsersCreateComponent } from './components/users/users-create/users-create.component';
import { UsersDetailsComponent } from './components/users/users-details/users-details.component';
import { UsersEditComponent } from './components/users/users-edit/users-edit.component';
import { EventTypesTableComponent } from './components/event-types/event-types-table/event-types-table.component';
import { EventTypesCreateComponent } from './components/event-types/event-types-create/event-types-create.component';
import { EventTypesDetailsComponent } from './components/event-types/event-types-details/event-types-details.component';
import { EventTypesEditComponent } from './components/event-types/event-types-edit/event-types-edit.component';
import { CustomersCreateComponent } from './components/customers/customers-create/customers-create.component';
import { CustomersTableComponent } from './components/customers/customers-table/customers-table.component';
import { CustomersDetailsComponent } from './components/customers/customers-details/customers-details.component';
import { CustomersEditComponent } from './components/customers/customers-edit/customers-edit.component';
import { EstablishmentsTableComponent } from './components/establishments/establishments-table/establishments-table.component';
import { EstablishmentsCreateComponent } from './components/establishments/establishments-create/establishments-create.component';
import { EstablishmentsDetailsComponent } from './components/establishments/establishments-details/establishments-details.component';
import { EstablishmentsEditComponent } from './components/establishments/establishments-edit/establishments-edit.component';
import { EventsTableComponent } from './components/events/events-table/events-table.component';
import { EventsCreateComponent } from './components/events/events-create/events-create.component';
import { EventsDetailsComponent } from './components/events/events-details/events-details.component';
import { EventsEditComponent } from './components/events/events-edit/events-edit.component';
import { EventsReportComponent } from './components/events/events-report/events-report.component';
import { AuthenticationComponent } from './components/authentication/authentication.component';
import { CancelModalComponent } from './components/modals/cancel-modal/cancel-modal.component';
import { DeleteModalComponent } from './components/modals/delete-modal/delete-modal.component';

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
    // AuthenticationComponent,
  ]
})
export class AppModule { }
