import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AccueilPageComponent } from './accueil-page/accueil-page.component';
import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from './header/header.component';
import { CadreMatchAccueilComponent } from './cadre-match-accueil/cadre-match-accueil.component';
import { SpecialContentComponent } from './special-content/special-content.component';
import { FooterComponent } from './footer/footer.component';
import {PronoPageComponent} from "./prono-page/prono-page.component";


const appRoutes: Routes = [
	{ path: '/accueil', component: AccueilPageComponent },
    { path: '/prono', component: PronoPageComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    AccueilPageComponent,
    MenuComponent,
    HeaderComponent,
    CadreMatchAccueilComponent,
    SpecialContentComponent,
    PronoPageComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
