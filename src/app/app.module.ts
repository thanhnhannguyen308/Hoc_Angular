import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TutorialComponent } from './tutorial.component';
import { FormComponent } from './form.component';
import { EmployeeListComponent } from './employee.component'

import { EmployeeService } from './services/employee.service';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    TutorialComponent,
    FormComponent,
    EmployeeListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
    
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
