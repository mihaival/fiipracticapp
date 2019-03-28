import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainComponent} from './presentation/components/main/main.component';
import {CategoryComponent} from './presentation/components/category/category.component';

const routes: Routes = [
  {path: '', redirectTo: '/main', pathMatch: 'full'},
  {path: 'main', component: MainComponent },
  {path: 'category', component: CategoryComponent},
  {path: 'category/:aria', component: CategoryComponent},
  {path: 'account', loadChildren: './accounts/accounts.module#AccountsModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
