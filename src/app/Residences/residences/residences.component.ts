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
filteredResidences: any;
likeResidence(_t6: residence) {
throw new Error('Method not implemented.');
}

  listResidences: residence[] = [
    { id: 1, name: "El Fel", address: "Borj Cedria", image: "../../assets/images/R1.jpeg", status: "Disponible" },
    { id: 2, name: "El Yasmine", address: "Ezzahra", image: "../../assets/images/R2.jpg", status: "Disponible" },
    { id: 3, name: "El Arij", address: "Rades", image: "../../assets/images/R3.jpg", status: "Vendu" },
    { id: 4, name: "El Anber", address: "inconnu", image: "../../assets/images/R4.jpg", status: "En Construction" }
  ];

  favorites: residence[] = [];
  visibility: boolean = false;
  nameR!: string;

  showAddress(residence: residence) {
    if (residence.address.toLowerCase() === "inconnu") {
      alert("Adresse inconnue");
    } else {
      this.visibility = true;
      this.nameR = residence.name;
    }
  }

  addToFavorites(residence: residence) {
    console.log(this.favorites);
  
    if (this.favorites.includes(residence)) {
      alert(`${residence.name} est déjà dans vos favoris.`);
    } else {
      this.favorites.push(residence);
      console.log('Favoris:', this.favorites);
      alert(`${residence.name} ajouté aux favoris !`);
    }
  }

  
}  

    // addFavoris(r:residence){
    //   console.log(this.listFavoris);

    // if (this.listFavoris.includes(r)){
    // alert('already liked')
    // }
    // else{this.listFavoris.push(r);
    // console.log('tab', this.listFavoris);
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
    

  


