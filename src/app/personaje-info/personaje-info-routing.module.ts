import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PersonajeInfoPage } from './personaje-info.page';

const routes: Routes = [
  {
    path: '',
    component: PersonajeInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PersonajeInfoPageRoutingModule {}
