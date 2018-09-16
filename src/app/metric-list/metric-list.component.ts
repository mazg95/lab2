import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-metric-list',
  templateUrl: './metric-list.component.html',
  styleUrls: ['./metric-list.component.css']
})
export class MetricListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  metrics = [
    {
        "goal": 150,
        "actual": 110,
        "title": 'Minutes Effort'
    },
    {
        "goal": 10000,
        "actual": 7500,
        "title": 'Steps'
    },
    {
        "goal": 20,
        "actual":10,
        "title": 'Floors'
    }
  ];
}
