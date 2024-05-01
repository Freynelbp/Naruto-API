import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PersonajeInfoPageRoutingModule } from './personaje-info-routing.module';

import { PersonajeInfoPage } from './personaje-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PersonajeInfoPageRoutingModule
  ],
  declarations: [PersonajeInfoPage]
})
export class PersonajeInfoPageModule {}
