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
      if(!storage.get('sessions')){
        storage.set('sessions', Sessions);
      }
  }

  getSessions() : Observable<Session[]>{
    return of(this.storage.get('sessions'));
  }

  getSession(id:number): Observable<Session>{
    return of(this.storage.get('sessions').find(s => s.id === id));
  }

  newSession(session:Session): number {
    //get array of session from local storage
    let sessions = this.storage.get('sessions') || [];
    console.log(sessions.length);
    session.id = sessions[sessions.length - 1].id + 1
    // push new sessions to array
    sessions.push(session);
    // insert updated array to local storage
    this.storage.set('sessions', sessions);
    console.log(this.storage.get('sessions') || 'LocaL storage is empty');
    return session.id;
  }

  saveSession(session:Session): number{
    //get array of session from local storage
    let sessions = this.storage.get('sessions') || [];
    
    let index = sessions.indexOf(s => s.id == session.id);

    // push new session to array
    sessions.splice(index, 1, session);
    // insert updated array to local storage
    this.storage.set('sessions', sessions);
    console.log(this.storage.get('sessions') || 'LocaL storage is empty');
    return session.id;
  }

  removeSession(session_id:number): boolean{
    let sessions = this.storage.get('sessions')|| [];
    let index = sessions.indexOf(s => s.id == session_id);
    if(!index){
      return false;
    }
    sessions.splice(index,1);
    return true;
  }
}
