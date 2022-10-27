import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { CreatingService } from 'src/app/services/creating.service';

@Component({
  selector: 'app-creating',
  templateUrl: './creating.component.html',
  styleUrls: ['./creating.component.scss'],
})
export class CreatingComponent implements OnInit {
  subscriptions: Subscription[] = [];
  delaying = 'initial';
  show = true;

  obj!: Observable<{ title: string; id: number }>;

  constructor(private cs: CreatingService) {}

  ngOnInit(): void {
    this.obj = this.cs.getObject();
    /*
    this.cs.getInstance().subscribe({
      next: (data) => console.log(data),
      error: (err) => console.log(err),
      complete: () => console.log('completed'),
    });
    */
  }

  get openSubscriptionsLength(): number {
    return this.subscriptions.filter((subs) => !subs.closed).length;
  }
}
