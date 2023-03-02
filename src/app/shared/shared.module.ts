import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SubscriptionComponent } from './controls/subscription/subscription.component';
import { BookingComponent } from './controls/booking/booking.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [SubscriptionComponent, BookingComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [
    SubscriptionComponent,
    BookingComponent,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class SharedModule {}
