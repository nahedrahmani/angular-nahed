import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { residence } from 'src/app/core/models/residence';

@Component({
  selector: 'app-residences',
  templateUrl: './residences.component.html',
  styleUrls: ['./residences.component.css']
})
export class ResidencesComponent {
goToDetails(arg0: number) {
throw new Error('Method not implemented.');
}


  listResidences:residence[]=[
    {id:1,name: "El fel",address:"Borj Cedria",
    "image":"../../assets/images/R1.jpeg", status: "Disponible"},
    {id:2,name: "El yasmine",
    address:"Ezzahra",image:"../../assets/images/R2.jpg", status:
    "Disponible"},
    {id:3,name: "El Arij",
    address:"Rades",image:"../../assets/images/R3.jpg", status:
    "Vendu"},
    {id:4,name: "El Anber",address:"inconnu",
    image:"../../assets/images/R4.jpg", status: "En Construction"}
  ];

 
 
//   showlocation(address : string){
//     if (address === 'inconnu') {
//       alert("L'adresse de cette résidence est inconnue");
//     } else {
//        alert(`Adresse: ${address}`);
//     }

// }

// favorites: residence[]=[];
  
// addToFavorites(name : string){
  // const residence = this.listResidences.find(res => res.name === name);
  // if (residence && !this.favorites.includes(residence)) {
  //   this.favorites.push(residence);
  //   alert(`${name} ajouté aux favoris !`);
  // } else {
  //   alert(`${name} est déjà dans vos favoris.`);
  // }
// }

// searchTerm: string = '';
// get filteredResidences(): residence[] {
//   if (!this.searchTerm.trim()) {
//     return this.listResidences;
//   }
//   return this.listResidences.filter(res =>
//     res.address.toLowerCase().includes(this.searchTerm.toLowerCase())
//   );
// }

// visibility = false;
// nameR!: string;
// showlocation(address : string){
//   if (address === 'inconnu') {
//     alert("L'adresse de cette résidence est inconnue");
//   } else {
//     this.visibility=true;
//     this.nameR=residence.name;
   
//   }
// }
    
visibility=false;
  nameR! : string;
  showAddress(residence : residence){
    if(residence.address==="inconnu"){
      alert("adrresse inconnue")
    }else{
      this.visibility=true;
      this.nameR=residence.name;
    }
  }
}  
  


