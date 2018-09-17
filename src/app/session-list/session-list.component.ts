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

  }

  sessions: Session[];

  getSessions(): void {
    this.sessionService.getSessions()
      .subscribe(sessions => this.sessions = sessions);
  }
}
