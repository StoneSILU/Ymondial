import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LOCALE_ID } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AccueilPageComponent } from './accueil-page/accueil-page.component';
import { MenuComponent } from './menu/menu.component';
import { CadreMatchAccueilComponent } from './cadre-match-accueil/cadre-match-accueil.component';
import { FooterComponent } from './footer/footer.component';
import { SpecialContentComponent } from './special-content/special-content.component';
import { MiniClassementAccueilComponent } from './mini-classement-accueil/mini-classement-accueil.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { InscriptionPageComponent } from './inscription-page/inscription-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
// import { ResultatPageComponent } from './resultat-page/resultat-page.component';
import { RankingPageComponent } from './ranking-page/ranking-page.component';
import { NewmatchPageComponent } from './newmatch-page/newmatch-page.component';
import { PronoPageComponent } from './prono-page/prono-page.component';
import { EditmatchComponent } from './editmatch/editmatch.component';
import { EditindividuelComponent } from './editindividuel/editindividuel.component';

import { TokenInterceptor } from './Services/Interceptors/token.interceptor';
import { AuthenticationService } from './Services/Authentication/authentication.service';
import { ApiService } from './Services/Api/api.service';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

const appRoutes: Routes = [
  { path: 'accueil', component: AccueilPageComponent },
  { path: 'inscription', component: InscriptionPageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'classement', component: RankingPageComponent },
  // { path: 'resultat', component: ResultatPageComponent },
  { path: 'prono/:id', component: PronoPageComponent },
  { path: 'admin', component: AdminPageComponent },
  // { path: 'newmatch', component: NewmatchPageComponent },
  { path: 'editindividuel/:id', component: EditindividuelComponent },
  { path: 'editmatch', component: EditmatchComponent },
  { path: '**', redirectTo: 'accueil' },
];

@NgModule({
  declarations: [
    AppComponent,
    AccueilPageComponent,
    MenuComponent,
    CadreMatchAccueilComponent,
    FooterComponent,
    PronoPageComponent,
    MiniClassementAccueilComponent,
    AdminPageComponent,
    SpecialContentComponent,
    InscriptionPageComponent,
    LoginPageComponent,
    RankingPageComponent,
    // ResultatPageComponent,
    EditindividuelComponent,
    EditmatchComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    ApiService,
    AuthenticationService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
