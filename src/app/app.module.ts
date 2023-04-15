import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { ErrorComponent } from './error/error.component';
import {HttpClientModule} from '@angular/common/http';


const appRoute: Routes = [
  // {path:'',component: HomeComponent},
  {path:'', redirectTo: 'Home',pathMatch: 'full'},
  {path:'Home', component: HomeComponent},
  {path:'Aboutus', component: AboutusComponent},
  {path:'Contact', component: ContactComponent},
  {path:'ReactiveForms', component: ReactiveformComponent},
  {path:'**',component: ErrorComponent}
]

@NgModule({
  declarations: [
    AppComponent, 
    HomeComponent,
    ContactComponent,
    AboutusComponent,
    ReactiveformComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoute),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
