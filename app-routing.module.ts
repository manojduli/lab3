import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { CrudComponent } from './crud/crud.component';
import { TempComponent } from './temp/temp.component';


const routes: Routes = [

  {path:'welcome', component:WelcomeComponent},
  {path:'crud', component:CrudComponent},
  {path:'temp', component:TempComponent},
  {path:'', redirectTo:'welcome', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routing_components = [WelcomeComponent, CrudComponent, TempComponent];
