import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularTutorialComponent } from './angular-tutorial/angular-tutorial.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
  {
    path: 'homepage', component: HomepageComponent
  },
  {
    path: '',
    redirectTo: 'homepage',
    pathMatch: 'full'
  },
  {
    path: 'cadastro', component: CadastroComponent
  },
  {
    path: 'angular-tutorial', component: AngularTutorialComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
