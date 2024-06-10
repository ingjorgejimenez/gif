import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { SharedModule } from './shared/shared.module'
import { GifsModule } from './gifs/gifs.module'

const routes: Routes = []

@NgModule({
  imports: [RouterModule.forRoot(routes), SharedModule, GifsModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
