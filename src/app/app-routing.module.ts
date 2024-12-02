import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResidencesComponent } from './Residences/residences/residences.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponentComponent } from './not-found-component/not-found-component.component';
import { ResidenceDetailsComponentComponent } from './Residences/residence-details-component/residence-details-component.component';
import { ApartementsByResidenceComponentComponent } from './Apartements/apartements-by-residence-component/apartements-by-residence-component.component';
import { ApartementsComponentComponent } from './Apartements/apartements-component/apartements-component.component';
import { AddResidenceComponentComponent } from './Residences/add-residence-component/add-residence-component.component';
import { AddApartementComponentComponent } from './Apartements/add-apartement-component/add-apartement-component.component';

const routes: Routes = [
  
  {path:'home',component:HomeComponent},
  {path:'residences1',component:ResidencesComponent},
  { path: 'residences/:id', component: ResidenceDetailsComponentComponent }, 
  { path: 'apartments', component:ApartementsComponentComponent }, 
  { path: 'add-residence', component: AddResidenceComponentComponent },
  { path: 'update-residence/:id', component: AddResidenceComponentComponent },
  { path: 'add-apartment', component: AddApartementComponentComponent },
  { path: 'residences/:id/apartments', component: ApartementsByResidenceComponentComponent },
  { path: '**', component: NotFoundComponentComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
