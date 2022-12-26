import { createNgModuleType } from '@angular/compiler/src/render3/r3_module_compiler';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CustomerFormComponent } from './pages/customer-form/customer-form.component';

export const routes: Routes = [
  { path: 'home', component: CustomerFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
