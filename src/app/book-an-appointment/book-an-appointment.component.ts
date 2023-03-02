import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-an-appointment',
  templateUrl: './book-an-appointment.component.html',
  styleUrls: ['./book-an-appointment.component.scss'],
})
export class BookAnAppointmentComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }
}
