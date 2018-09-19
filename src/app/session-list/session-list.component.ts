import { Component, OnInit } from '@angular/core';
import { SessionService } from '../session.service';
import { Session } from '../session';

import Swal from 'sweetalert2';

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
    var self = this;
      Swal({
        title: 'Are you sure?',
        text: 'You will not be able to recover this data session!',
        type: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, keep it'
      }).then((result) => {
        if (result.value) {
          let val = self.sessionService.removeSession(session.id);
          if(val){
            self.getSessions();
            Swal(
            'Deleted!',
            'Your data session has been deleted.',
            'success'
          );}
          else{
            Swal('Not Deleted!',
            'Retry Later.',
            'error');
          }
        // For more information about handling dismissals please visit
        // https://sweetalert2.github.io/#handling-dismissals
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          Swal(
            'Cancelled',
            'Your data session is safe :)',
            'error'
          );
        }
      });
  }

  sessions: Session[];

  getSessions(): void {
    this.sessionService.getSessions()
      .subscribe(sessions => this.sessions = sessions);
  }
}
