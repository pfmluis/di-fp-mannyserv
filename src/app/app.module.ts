// Modules
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { InputsModule } from '@progress/kendo-angular-inputs';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';

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



@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    MainPageComponent,
    LoginCardComponent,
    NavbarComponent,
    SearchPageComponent,
    NavbarButtonsComponent,
    SearchFiltersComponent,
    ProfessionCardComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    InputsModule,
    DateInputsModule,
    BrowserAnimationsModule,
    DropDownsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
