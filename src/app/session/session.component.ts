import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import Swal from 'sweetalert2'

@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.css']
})
export class SessionComponent implements OnInit {

  @Input() session;
  @Output() delete = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  
  deleteSession() {
   this.delete.emit(this.session);
   console.log(`confirmed remove: ${this.session}`);
  }
  
  cancelled() {
   console.log('cancelled');
  }
}
