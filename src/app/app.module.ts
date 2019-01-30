// Modules
import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonModule } from '@progress/kendo-angular-buttons';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { DialogModule } from '@progress/kendo-angular-dialog';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { FormsModule } from '@angular/forms';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { NgxPaginationModule } from 'ngx-pagination';

// Components
import { AppComponent } from './app.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { LoginCardComponent } from './components/login-card/login-card.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { NavbarButtonsComponent } from './components/navbar-buttons/navbar-buttons.component';
import { SearchFiltersComponent } from './components/search-filters/search-filters.component';
import { ProfessionCardComponent } from './components/profession-card/profession-card.component';
import { InConstructionPageComponent } from './pages/in-construction-page/in-construction-page.component';
import { SearchCardComponent } from './components/search-card/search-card.component';
import { ProfessionalProfileComponent } from './pages/professional-profile/professional-profile.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginCardComponent,
    LoginPageComponent,
    MainPageComponent,
    NavbarButtonsComponent,
    NavbarComponent,
    SearchPageComponent,
    SearchFiltersComponent,
    ProfessionCardComponent,
    InConstructionPageComponent,
    SearchCardComponent,
    ProfessionalProfileComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    ButtonModule,
    DateInputsModule,
    DialogModule,
    DropDownsModule,
    FormsModule,
    InputsModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
