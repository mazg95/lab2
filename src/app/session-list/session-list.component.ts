import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-session-list',
  templateUrl: './session-list.component.html',
  styleUrls: ['./session-list.component.css']
})
export class SessionListComponent implements OnInit {

  constructor() { }
  ngOnInit() {
  }


  onSessionDelete(session){

  }

  sessions = [
    {
        id:1,
        date_done: '2018-08-15',
        duration: '1h 5min',
        calories: 400,
        fc: 140
    },{
        id:2,
        date_done: '2018-08-15',
        duration: '1h 5min',
        calories: 400,
        fc: 140
    },{
        id:3,
        date_done: '2018-08-15',
        duration: '1h 5min',
        calories: 400,
        fc: 140
    },{
        id:4,
        date_done: '2018-08-15',
        duration: '1h 5min',
        calories: 400,
        fc: 140
    },{
        id:5,
        date_done: '2018-08-15',
        duration: '1h 5min',
        calories: 400,
        fc: 140
    },{
        id:6,
        date_done: '2018-08-15',
        duration: '1h 5min',
        calories: 400,
        fc: 140
    },{
        id:7,
        date_done: '2018-08-15',
        duration: '1h 5min',
        calories: 400,
        fc: 140
    }
];


}
