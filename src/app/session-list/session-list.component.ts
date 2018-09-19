import { Component, OnInit } from '@angular/core';
import { SessionService } from '../session.service';
import { Session } from '../session';


@Component({
  selector: 'app-session-list',
  templateUrl: './session-list.component.html',
  styleUrls: ['./session-list.component.css']
})
export class SessionListComponent implements OnInit {

  constructor(private sessionService: SessionService) { }
  
  ngOnInit() {
      this.getSessions();
  }


  onSessionDelete(session){
    console.log(session.id);
    this.sessionService.removeSession(session.id);
    this.getSessions();
  }

  sessions: Session[];

  getSessions(): void {
    this.sessionService.getSessions()
      .subscribe(sessions => this.sessions = sessions);
  }
}
