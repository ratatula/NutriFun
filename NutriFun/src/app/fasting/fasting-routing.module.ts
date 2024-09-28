import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FastingPage } from './fasting.page';

const routes: Routes = [
  {
    path: '',
    component: FastingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FastingPageRoutingModule {}
