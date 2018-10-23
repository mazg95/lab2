import { Inject, Injectable } from '@angular/core';
import { Session } from './session';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
;
  constructor() {
  }

  base_url = "http://localhost:3000/api/v1/sessions/";

  getSessions() {
    return fetch(this.base_url, { method: 'GET', mode: 'cors'})
  }

  getSession(id:string){
    return fetch(this.base_url + id, { method: 'GET', mode: 'cors'})
  }

  newSession(session:Session) {
    return fetch(this.base_url, { method: 'POST', mode: 'cors'})
  }

  saveSession(session:Session){
    return fetch(this.base_url + session._id, { method: 'PUT', mode: 'cors'})
  }

  removeSession(session_id:number){
    return fetch(this.base_url + session_id, { method: 'DELETE', mode: 'cors'})
  }
}
