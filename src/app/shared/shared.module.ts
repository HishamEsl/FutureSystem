import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SubscriptionComponent } from './controls/subscription/subscription.component';
import { BookingComponent } from './controls/booking/booking.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SanitizeUrlPipe } from './pipes/sanitize-url.pipe';

@NgModule({
  declarations: [SubscriptionComponent, BookingComponent, SanitizeUrlPipe],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [
    SubscriptionComponent,
    BookingComponent,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    SanitizeUrlPipe,
  ],
})
export class SharedModule {}
