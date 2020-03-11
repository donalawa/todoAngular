import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllTodoComponent } from './components/all-todo/all-todo.component';
import { CompleteComponent } from './components/complete/complete.component';
import { HomeComponent } from './components/home/home.component';


const routes: Routes = [
  {path: 'completed', component: CompleteComponent},
  {path: 'alltodo', component: AllTodoComponent},
  {path: 'home', component: HomeComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
