import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
 
import { Session }         from '../session';
import { SessionService }  from '../session.service';
 

@Component({
  selector: 'app-session-form',
  templateUrl: './session-form.component.html',
  styleUrls: ['./session-form.component.css']
})
export class SessionFormComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private sessionService: SessionService,
    private location: Location
  ) {}
  session: Session;
  isNew: boolean = true;

  ngOnInit() {
    this.getSession();
  }

  getSession(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    if(id){
      this.isNew = false;
      this.sessionService.getSession(id)
      .subscribe(s => this.session = s);
    }
    else{
      this.session = new Session();
    }
  }

  saveSession(): number {
    if(this.isNew){
      return this.sessionService.newSession(this.session);
    }
    else {
      return this.sessionService.saveSession(this.session);
    }
  }
 
  goBack(): void {
    this.location.back();
  }
}
