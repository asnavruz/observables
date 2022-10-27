import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-observable-vs-subject',
  templateUrl: './observable-vs-subject.component.html',
  styleUrls: ['./observable-vs-subject.component.scss'],
})
export class ObservableVsSubjectComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    const observable = new Observable((subscriber) => {
      subscriber.next(1);
      subscriber.next(2);
      subscriber.next(3);
      subscriber.complete();
    });

    const subject = new Subject<number>();

    subject.next(1);
    subject.next(2);
    subject.next(3);
    subject.complete();

    observable.subscribe({
      next: () => console.log('Observable Subscriber 1 received data'),
      complete: () => console.log('Observable Subscriber 1 is done'),
    });

    observable.subscribe({
      next: () => console.log('Observable Subscriber 2 received data'),
      complete: () => console.log('Observable Subscriber 2 is done'),
    });

    subject.subscribe({
      next: () => console.log('Subject Subscriber 1 received data'),
      complete: () => console.log('Subject Subscriber 1 is done'),
    });

    subject.subscribe({
      next: () => console.log('Subject Subscriber 2 received data'),
      complete: () => console.log('Subject Subscriber 2 is done'),
    });
  }
}
