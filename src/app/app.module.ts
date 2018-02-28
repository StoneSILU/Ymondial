import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AccueilPageComponent } from './accueil-page/accueil-page.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { NewmatchPageComponent } from './newmatch-page/newmatch-page.component';
import { MenuComponent } from './menu/menu.component';
import { CadreMatchAccueilComponent } from './cadre-match-accueil/cadre-match-accueil.component';
import { FooterComponent } from './footer/footer.component';
import { SpecialContentComponent } from './special-content/special-content.component';
import { MiniClassementAccueilComponent } from './mini-classement-accueil/mini-classement-accueil.component';

import { ApiService } from './Services/Api/api.service';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { RankingPageComponent } from './ranking-page/ranking-page.component';
import { FormsModule } from '@angular/forms';
import { EditmatchComponent } from './editmatch/editmatch.component';
import { EditindividuelComponent } from './editindividuel/editindividuel.component';


const appRoutes: Routes = [
  { path: 'admin', component: AdminPageComponent },
  { path: 'newmatch', component: NewmatchPageComponent },
  { path: 'editindividuel/:id', component: EditindividuelComponent },
  //{ path: 'editindividuel', component: EditindividuelComponent },
  { path: 'editmatch', component: EditmatchComponent },
  { path: '**', redirectTo: 'admin' },
];

@NgModule({
  declarations: [
    AppComponent,
    AccueilPageComponent,
    AdminPageComponent,
    MenuComponent,
    CadreMatchAccueilComponent,
    FooterComponent,
    MiniClassementAccueilComponent,
    SpecialContentComponent,
    RankingPageComponent,
    EditmatchComponent,
    EditindividuelComponent,
    NewmatchPageComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    // BrowserAnimationsModule,
    HttpModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }