import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { IBooking } from '../../models/booking.model';
import { FutureSystemService } from '../../services/future-system.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss'],
})
export class BookingComponent implements OnInit {
  bookingForm!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private _futureSystemService: FutureSystemService
  ) {}

  ngOnInit(): void {
    /* Init Customized Form */
    this.bookingForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^01[0-9]{9}$')]],
      message: [''],
    });
  }

  onBookingSubmit() {
    const bookingObJ: IBooking = {
      name: this.bookingForm.controls['name'].value,
      email: this.bookingForm.controls['email'].value,
      phone: this.bookingForm.controls['phone'].value,
      message: this.bookingForm.controls['message'].value,
    };

    this._futureSystemService
      .PostPickAppointmentEmail(bookingObJ)
      .subscribe((e) => {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Your email has been Sent',
          showConfirmButton: false,
          timer: 1500,
        });

        this.bookingForm.reset();
      });
  }

  get f() {
    return this.bookingForm.controls;
  }
}
