import { Component, OnInit } from '@angular/core';
import { FutureSystemService } from '../../services/future-system.service';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.scss'],
})
export class SubscriptionComponent implements OnInit {
  email: string = '';
  constructor(private _futureSystemService: FutureSystemService) {}

  ngOnInit(): void {}

  onSendEmailSubmit(data: any) {
    const email = data.value.email;
    this._futureSystemService.PostEmail(email).subscribe();
  }
}
