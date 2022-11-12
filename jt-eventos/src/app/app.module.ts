import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavBarComponent } from './bars/nav-bar/nav-bar.component';
import { FooterBarComponent } from './bars/footer-bar/footer-bar.component';
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

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterBarComponent,
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
    FooterBarComponent,
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
  ]
})
export class AppModule { }
