// Modules
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { InConstructionPageComponent } from './pages/in-construction-page/in-construction-page.component';
import { ProfessionalProfileComponent } from './pages/professional-profile/professional-profile.component';

const routes: Routes = [
  {path: '', component: MainPageComponent},
  {path: 'register', component: InConstructionPageComponent},
  {path: 'login', component: LoginPageComponent},
  {path: 'search/:content', component: SearchPageComponent},
  {path: 'search', component: SearchPageComponent},
  {path: 'mapa_do_site', component: InConstructionPageComponent},
  {path: 'contactos', component: InConstructionPageComponent},
  {path: 'apoio', component: InConstructionPageComponent},
  {path: 'myprofile', component: InConstructionPageComponent},
  {path: 'history', component: InConstructionPageComponent},
  {path: 'user/:id', component: ProfessionalProfileComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
