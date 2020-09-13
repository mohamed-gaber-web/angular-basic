import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { ServerFormComponent } from './server-form/server-form.component';
import { ServerElementComponent } from './server-element/server-element.component';
import {CapitalDirective} from './Directives/capital.directive';
import {BetterCapitalDirective} from './Directives/better-capital.directive';
import { UsersComponent } from './users/users.component';
import { ServicesComponent } from './services/services.component';
import { AllServersComponent } from './all-servers/all-servers.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HeaderComponent } from './header/header.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import {AppRoutingModule} from './app.routing.module';
import { FormsComponent } from './forms/forms.component';
import { FormsExp1Component } from './forms/forms-exp1/forms-exp1.component';
import { DrivenTemplateComponent } from './forms/driven-template/driven-template.component';





@NgModule({
  declarations: [
    AppComponent,
    ServerFormComponent,
    ServerElementComponent,
    CapitalDirective,
    BetterCapitalDirective,
    UsersComponent,
    ServicesComponent,
    AllServersComponent,
    NotFoundComponent,
    HeaderComponent,
    ContactComponent,
    HomeComponent,
    FormsComponent,
    FormsExp1Component,
    DrivenTemplateComponent
  ],
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
