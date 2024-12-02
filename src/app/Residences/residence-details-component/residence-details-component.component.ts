import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-residence-details-component',
  templateUrl: './residence-details-component.component.html',
  styleUrls: ['./residence-details-component.component.css']
})
export class ResidenceDetailsComponentComponent implements OnInit {

  residenceId!: number;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.residenceId = +params['id'];
    });
  }

  goToNextResidence(): void {
    const nextId = this.residenceId + 1;
    this.router.navigate(['/residences', nextId]);
  }
}
