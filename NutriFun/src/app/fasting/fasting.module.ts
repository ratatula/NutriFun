import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FastingPageRoutingModule } from './fasting-routing.module';

import { FastingPage } from './fasting.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FastingPageRoutingModule
  ],
  declarations: [FastingPage]
})
export class FastingPageModule {}
