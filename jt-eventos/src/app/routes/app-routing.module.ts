import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { AuthenticationComponent } from '../components/authentication/authentication.component';
import { UsersTableComponent } from '../components/users/users-table/users-table.component';
import { UsersFormComponent } from '../components/users/users-form/users-form.component';
import { UsersDetailsComponent } from '../components/users/users-details/users-details.component';
import { CustomersTableComponent } from '../components/customers/customers-table/customers-table.component';
import { CustomersFormComponent } from '../components/customers/customers-form/customers-form.component';
import { CustomersDetailsComponent } from '../components/customers/customers-details/customers-details.component';
import { EstablishmentsTableComponent } from '../components/establishments/establishments-table/establishments-table.component';
import { EstablishmentsFormComponent } from '../components/establishments/establishments-form/establishments-form.component';
import { EstablishmentsDetailsComponent } from '../components/establishments/establishments-details/establishments-details.component';
import { EventsTableComponent } from '../components/events/events-table/events-table.component';
import { EventsFormComponent } from '../components/events/events-form/events-form.component';
import { EventsDetailsComponent } from '../components/events/events-details/events-details.component';
import { EventTypesTableComponent } from '../components/event-types/event-types-table/event-types-table.component';
import { EventTypesFormComponent } from '../components/event-types/event-types-form/event-types-form.component';
import { EventTypesDetailsComponent } from '../components/event-types/event-types-details/event-types-details.component';
import { PageNotFoundComponent } from '../components/page-not-found/page-not-found.component';

const routes: Routes = [
  // Home route
  { path: '', component: HomeComponent },

  // Authentication route
  { path: 'login', component: AuthenticationComponent },

  // Users routes
  { path: 'users', component: UsersTableComponent },
  { path: 'create', component: UsersFormComponent },
  { path: 'edit/{:id}', component: UsersFormComponent },
  { path: 'details/{:id}', component: UsersDetailsComponent },

  // Customers routes
  { path: 'customers', component: CustomersTableComponent },
  { path: 'create', component: CustomersFormComponent },
  { path: 'edit/{:id}', component: CustomersFormComponent },
  { path: 'details/{:id}', component: CustomersDetailsComponent },

  // Establishments routes
  { path: 'establishments', component: EstablishmentsTableComponent },
  { path: 'create', component: EstablishmentsFormComponent },
  { path: 'edit/{:id}', component: EstablishmentsFormComponent },
  { path: 'details/{:id}', component: EstablishmentsDetailsComponent },

  // Events routes
  { path: 'events', component: EventsTableComponent },
  { path: 'create', component: EventsFormComponent },
  { path: 'edit/{:id}', component: EventsFormComponent },
  { path: 'details/{:id}', component: EventsDetailsComponent },

  // Event Types routes
  { path: 'event-types', component: EventTypesTableComponent },
  { path: 'create', component: EventTypesFormComponent },
  { path: 'edit/{:id}', component: EventTypesFormComponent },
  { path: 'details/{:id}', component: EventTypesDetailsComponent },

  // Page Not Found
  { path: '**', component: PageNotFoundComponent },
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
