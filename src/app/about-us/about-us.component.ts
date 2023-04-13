import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { FutureSystemService } from '../shared/services/future-system.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss'],
})
export class AboutUsComponent implements OnInit {
  teamOptions: OwlOptions = {
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
        items: 2,
      },
      400: {
        items: 2,
      },
      740: {
        items: 4,
      },
      940: {
        items: 4,
      },
    },
    nav: true,
  };

  projects$ = this._futureSystemServices.projects$;
  employees$ = this._futureSystemServices.employees$;
  clients$ = this._futureSystemServices.clients$;

  constructor(private _futureSystemServices: FutureSystemService) {}

  ngOnInit(): void {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }
}
