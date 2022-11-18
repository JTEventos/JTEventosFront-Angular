import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UsersTableComponent } from './components/users/users-table/users-table.component';
import { CustomersTableComponent } from './components/customers/customers-table/customers-table.component';
import { EstablishmentsTableComponent } from './components/establishments/establishments-table/establishments-table.component';
import { EventsTableComponent } from './components/events/events-table/events-table.component';
import { EventTypesTableComponent } from './components/event-types/event-types-table/event-types-table.component';
import { AuthenticationComponent } from './components/authentication/authentication.component';
import { HomeComponent } from './components/home/home.component';
import { UsersEditComponent } from './components/users/users-edit/users-edit.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'users', component: UsersTableComponent },
  { path: 'users/edit/:id', component: UsersEditComponent },
  { path: 'customers', component: CustomersTableComponent },
  { path: 'establishments', component: EstablishmentsTableComponent },
  { path: 'events', component: EventsTableComponent },
  { path: 'event-types', component: EventTypesTableComponent },
  { path: 'login', component: AuthenticationComponent },
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
