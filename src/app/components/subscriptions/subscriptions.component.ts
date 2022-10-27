import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { CreatingService } from 'src/app/services/creating.service';

@Component({
  selector: 'app-subscriptions',
  templateUrl: './subscriptions.component.html',
  styleUrls: ['./subscriptions.component.scss'],
})
export class SubscriptionsComponent implements OnDestroy {
  @Input() subscriptions!: Subscription[];
  //destroy$: Subject<void> = new Subject();

  constructor(private cs: CreatingService) {}

  ngOnDestroy(): void {
    console.log('Sub component is destroyed!');
    //this.destroy$.next();
    //this.destroy$.complete();
  }

  onSubscribe(): void {
    const subs = this.cs
      .getInstance()
      //.pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (data) => console.log(data),
        error: (err) => console.log(err),
        complete: () => console.log('i am done!'),
      });

    this.subscriptions.push(subs);
  }

  onUnsubscribeAll(): void {
    this.subscriptions.forEach((subs) => subs.unsubscribe());
  }
}
