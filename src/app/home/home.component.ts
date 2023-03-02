import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import {
  fadeInAnimation,
  listItemAnimation,
} from '../shared/animations/listAnimation';
import { FutureSystemService } from '../shared/services/future-system.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [listItemAnimation, fadeInAnimation],
})
export class HomeComponent implements OnInit {
  serviceOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
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
        items: 2,
      },
      740: {
        items: 3,
      },
      940: {
        items: 4,
      },
    },
    nav: true,
  };
  clientOptions: OwlOptions = {
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
        items: 2,
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
  currentImageIndex1: number = 0;
  currentImageIndex2: number = 1;
  currentImageIndex3: number = 2;
  currentImageIndex4: number = 3;
  currentImageIndex5: number = 4;
  currentImageIndex6: number = 5;
  images: string[] = [
    '../../assets/images/main-section1.png',
    '../../assets/images/main-section2.png',
    '../../assets/images/main-section3.png',
    '../../assets/images/main-section4.png',
    '../../assets/images/main-section5.png',
    '../../assets/images/main-section6.png',
  ];

  services$ = this._futureSystemServices.services$;

  constructor(private _futureSystemServices: FutureSystemService) {}

  ngOnInit(): void {
    setInterval(() => {
      this.currentImageIndex1 =
        (this.currentImageIndex1 + 1) % this.images.length;
      this.currentImageIndex2 =
        (this.currentImageIndex2 + 1) % this.images.length;
      this.currentImageIndex3 =
        (this.currentImageIndex3 + 1) % this.images.length;
      this.currentImageIndex4 =
        (this.currentImageIndex4 + 1) % this.images.length;
      this.currentImageIndex5 =
        (this.currentImageIndex5 + 1) % this.images.length;
      this.currentImageIndex6 =
        (this.currentImageIndex6 + 1) % this.images.length;
    }, 3000);

    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }
}
