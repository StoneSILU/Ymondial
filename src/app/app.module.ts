import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AccueilPageComponent } from './accueil-page/accueil-page.component';
import { MenuComponent } from './menu/menu.component';
import { CadreMatchAccueilComponent } from './cadre-match-accueil/cadre-match-accueil.component';
import { FooterComponent } from './footer/footer.component';
import { MiniClassementAccueilComponent } from './mini-classement-accueil/mini-classement-accueil.component';
import { AdminPageComponent } from './admin-page/admin-page.component';

import { ApiService } from './Services/Api/api.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

const appRoutes: Routes = [
  { path: 'accueil', component: AccueilPageComponent },
  { path: 'admin', component: AdminPageComponent },
  { path: '**', redirectTo: 'accueil' },
];

@NgModule({
  declarations: [
    AppComponent,
    AccueilPageComponent,
    MenuComponent,
    CadreMatchAccueilComponent,
    FooterComponent,
    MiniClassementAccueilComponent,
    AdminPageComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
