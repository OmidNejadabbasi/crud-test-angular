import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CustomerFormComponent } from './pages/customer-form/customer-form.component';
import { TextFieldComponent } from './components/text-field/text-field.component';

@NgModule({
  declarations: [AppComponent, CustomerFormComponent, TextFieldComponent],
  imports: [BrowserModule, ReactiveFormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
