import {NgModule} from '@angular/core';

import {Routes, RouterModule} from '@angular/router';

import {HomeComponent} from './home/home.component';
import {UsersComponent} from './users/users.component';
import {AllServersComponent} from './all-servers/all-servers.component';
import {ServicesComponent} from './services/services.component';


// create routes
const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'users', component:  UsersComponent, children: [
      { path: ':id', component:  UsersComponent},
    ]},
  { path: 'allServers', component: AllServersComponent },
  { path: 'services', component: ServicesComponent },
  // { path: '**', component:  NotFoundComponent}
];


@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})


export class AppRoutingModule {}
