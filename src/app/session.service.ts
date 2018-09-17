import { Inject, Injectable } from '@angular/core';
import { Session } from './session';
import { Sessions } from './mock-sessions';
import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';

import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
;
  constructor(@Inject(LOCAL_STORAGE) private storage: WebStorageService) {
      
  }

  getSessions() : Observable<Session[]>{
    return of(Sessions);
  }

  getSession(id:number): Observable<Session>{
    return of(Sessions.find(s => s.id === id));
  }

  newSession(session:Session): number {
    return Sessions.length;
  }

  saveSession(session:Session): number{
    return session.id;
  }

  removeSession(session:Session): boolean{
    return false;
  }
}
