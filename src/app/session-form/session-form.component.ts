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
    const id = this.route.snapshot.paramMap.get('id');
    let self = this;
    if(id){
      this.isNew = false;
      this.sessionService.getSession(id)
      .then(res=>res.json())
      .then(s => {self.session = s[0];
      console.log(self.session);
      })
      .catch(error => console.error(error));
    }
    else{
      this.session = new Session();
    }
  }

  saveSession(){
    let self = this;
    if(this.isNew){
      this.sessionService.newSession(this.session)
      .then(res => res.status == 201)
      .then(res => {
        if(res){
          self.goBack();
        }
      })
      .catch(error => console.error(error))
    }
    else {
      this.sessionService.saveSession(this.session)
      .then(res => res.status == 204)
      .then(res => {
        if(res){
          self.goBack();
        }
      })
      .catch(error => console.error(error))
    }
  }
 
  goBack(): void {
    this.location.back();
  }
}
