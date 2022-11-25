import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { UsersTableComponent } from './components/users/users-table/users-table.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UsersDetailsComponent } from './components/users/users-details/users-details.component';
import { EventTypesTableComponent } from './components/event-types/event-types-table/event-types-table.component';
import { EventTypesDetailsComponent } from './components/event-types/event-types-details/event-types-details.component';
import { CustomersTableComponent } from './components/customers/customers-table/customers-table.component';
import { CustomersDetailsComponent } from './components/customers/customers-details/customers-details.component';
import { EstablishmentsTableComponent } from './components/establishments/establishments-table/establishments-table.component';
import { EstablishmentsDetailsComponent } from './components/establishments/establishments-details/establishments-details.component';
import { EventsTableComponent } from './components/events/events-table/events-table.component';
import { EventsDetailsComponent } from './components/events/events-details/events-details.component';
import { AuthenticationComponent } from './components/authentication/authentication.component';
import { CancelModalComponent } from './components/modals/cancel-modal/cancel-modal.component';
import { DeleteModalComponent } from './components/modals/delete-modal/delete-modal.component';
import { NgxPrintModule } from 'ngx-print';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { UsersFormComponent } from './components/users/users-form/users-form.component';
import { CustomersFormComponent } from './components/customers/customers-form/customers-form.component';
import { EventsFormComponent } from './components/events/events-form/events-form.component';
import { EstablishmentsFormComponent } from './components/establishments/establishments-form/establishments-form.component';
import { EventTypesFormComponent } from './components/event-types/event-types-form/event-types-form.component';
import { ToastsComponent } from './components/toasts/toasts.component';
import { LogoutModalComponent } from './components/modals/logout-modal/logout-modal.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    UsersTableComponent,
    UsersDetailsComponent,
    EventTypesTableComponent,
    EventTypesDetailsComponent,
    CustomersTableComponent,
    CustomersDetailsComponent,
    EstablishmentsTableComponent,
    EstablishmentsDetailsComponent,
    EventsTableComponent,
    EventsDetailsComponent,
    AuthenticationComponent,
    CancelModalComponent,
    DeleteModalComponent,
    HomeComponent,
    UsersFormComponent,
    CustomersFormComponent,
    EventsFormComponent,
    EstablishmentsFormComponent,
    EventTypesFormComponent,
    ToastsComponent,
    LogoutModalComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPrintModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [
    AppComponent,
  ]
})
export class AppModule { }
