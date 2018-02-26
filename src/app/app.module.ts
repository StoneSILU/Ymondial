import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AccueilPageComponent } from './accueil-page/accueil-page.component';
import { MenuComponent } from './menu/menu.component';
import { CadreMatchAccueilComponent } from './cadre-match-accueil/cadre-match-accueil.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SpecialContentComponent } from './special-content/special-content.component';
import { MiniClassementAccueilComponent } from './mini-classement-accueil/mini-classement-accueil.component';
import { InscriptionPageComponent } from './inscription-page/inscription-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RankingPageComponent } from './ranking-page/ranking-page.component';

import { ApiService } from './Services/Api/api.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


const appRoutes: Routes = [
  { path: 'accueil', component: AccueilPageComponent },
  { path: 'inscription', component: InscriptionPageComponent },
  { path: 'login', component: LoginPageComponent},
  { path: 'classement', component: RankingPageComponent},
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
    SpecialContentComponent,
    HeaderComponent,
    InscriptionPageComponent,
    LoginPageComponent,
    RankingPageComponent,
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    HttpModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }