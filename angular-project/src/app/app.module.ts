import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';

import { RouterModule } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { AngularTutorialComponent } from './angular-tutorial/angular-tutorial.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    CadastroComponent,
    AngularTutorialComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'homepage', component: HomepageComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
