import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SubscriptionComponent } from './controls/subscription/subscription.component';
import { BookingComponent } from './controls/booking/booking.component';

@NgModule({
  declarations: [SubscriptionComponent, BookingComponent],
  imports: [CommonModule],
  exports: [SubscriptionComponent, BookingComponent, NgbModule],
})
export class SharedModule {}
