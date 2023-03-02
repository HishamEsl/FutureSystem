import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { fadeInAnimation } from '../shared/animations/listAnimation';
import { FutureSystemService } from '../shared/services/future-system.service';

@Component({
  selector: 'app-our-services',
  templateUrl: './our-services.component.html',
  styleUrls: ['./our-services.component.scss'],
  animations: [fadeInAnimation],
})
export class OurServicesComponent implements OnInit {
  portfolioOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    margin: 10,
    navSpeed: 700,
    navText: [
      "<div class='nav-button visible owl-prev-b'>‹</div>",
      "<div class='nav-button visible owl-next-b'>›</div>",
    ],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      740: {
        items: 2,
      },
      940: {
        items: 2,
      },
    },
    nav: true,
  };

  projects$ = this._futureSystemServices.projects$;
  services$ = this._futureSystemServices.services$;
  constructor(private _futureSystemServices: FutureSystemService) {}

  ngOnInit(): void {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }
}
