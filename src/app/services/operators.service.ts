import { Injectable } from '@angular/core';
import { from, fromEvent, interval, Observable, of } from 'rxjs';

export interface User {
  name: string;
  age: number;
  country: string;
}

@Injectable({
  providedIn: 'root',
})
export class OperatorsService {
  private users = [
    {
      name: 'John',
      age: 20,
      country: 'UK',
    },
    {
      name: 'Lisa',
      age: 9,
      country: 'DE',
    },
    {
      name: 'Jens',
      age: 45,
      country: 'DK',
    },
    {
      name: 'Maria',
      age: 17,
      country: 'IT',
    },
    {
      name: 'Mike',
      age: 51,
      country: 'UK',
    },
  ];

  getUsers(): Observable<User[]> {
    return of(this.users);
  }

  getUsersSequentially(): Observable<User> {
    return from(this.users);
  }

  getInterval(): Observable<number> {
    return interval(100);
  }

  getClickEvent(): Observable<MouseEvent> {
    return fromEvent<MouseEvent>(document, 'click');
  }

  getSequenceWithError(): Observable<number> {
    return new Observable((subscriber) => {
      subscriber.next(1);
      subscriber.next(500);
      subscriber.next(78);
      subscriber.error('FAILED');
    });
  }
}
