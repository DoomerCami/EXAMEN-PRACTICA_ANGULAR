import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListMiapiComponent } from './list-miapi/list-miapi.component';
import { NewMiapiComponent } from './new-miapi/new-miapi.component';
import { EditMiapiComponent } from './edit-miapi/edit-miapi.component';

const routes: Routes = [
  {path: '', redirectTo: 'list', pathMatch: 'full'},
  {path: 'list', component: ListMiapiComponent},
  {path: 'create', component: NewMiapiComponent},
  {path: 'edit/:id', component: EditMiapiComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MiapiRoutingModule { }
