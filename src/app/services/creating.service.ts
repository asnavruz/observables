import { Injectable } from '@angular/core';
import { from, fromEvent, Observable, of } from 'rxjs';
import { delay, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CreatingService {
  constructor() {}

  getOf(): Observable<number[]> {
    return of([3, 9, 45, 2324, 1]);
  }

  getFrom(): Observable<string> {
    return from(['qimia', 'rxjs', 'angular', 'web']);
  }

  getFromPromise(): Observable<number> {
    return from(
      new Promise<number>((resolve) => {
        setInterval(() => {
          resolve(Math.random() * 10);
        }, 1000);
      })
    );
  }

  getObject(): Observable<{ title: string; id: number }> {
    return of({ title: 'Hello', id: 5 });
  }

  getFromEvent(): Observable<string> {
    return fromEvent(document, 'click').pipe(
      map((event) => event.timeStamp.toString())
    );
  }

  getInstance(): Observable<number> {
    return new Observable((subscriber) => {
      setInterval(() => {
        subscriber.next(8);
        subscriber.next(5646);
        subscriber.next(-44);
      }, 1000);
    });
  }

  getDelayingValue(): string {
    let val = '';
    of('Delay')
      .pipe(delay(100))
      .subscribe((data) => (val = data));
    return val;
  }

  getCompleting(): Observable<void> {
    return new Observable((sub) => {
      setTimeout(() => {
        sub.next();
        sub.complete();
      }, 2000);
    });
  }
}
