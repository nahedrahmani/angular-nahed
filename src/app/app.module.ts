import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { ResidencesComponent } from './Residences/residences/residences.component';
import { NotFoundComponentComponent } from './not-found-component/not-found-component.component';
import { NavBarComponentComponent } from './nav-bar-component/nav-bar-component.component';
import { ApartementsComponentComponent } from './Apartements/apartements-component/apartements-component.component';
import { ApartementsByResidenceComponentComponent } from './Apartements/apartements-by-residence-component/apartements-by-residence-component.component';
import { AddApartementComponentComponent } from './Apartements/add-apartement-component/add-apartement-component.component';
import { ResidencesComponentComponent } from './Residences/residences-component/residences-component.component';
import { ResidenceDetailsComponentComponent } from './Residences/residence-details-component/residence-details-component.component';
import { AddResidenceComponentComponent } from './Residences/add-residence-component/add-residence-component.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ResidencesComponent,
    NotFoundComponentComponent,
    NavBarComponentComponent,
    ApartementsComponentComponent,
    ApartementsByResidenceComponentComponent,
    AddApartementComponentComponent,
    ResidencesComponentComponent,
    ResidenceDetailsComponentComponent,
    AddResidenceComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
