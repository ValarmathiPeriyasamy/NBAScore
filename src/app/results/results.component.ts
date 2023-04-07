import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  results:any=[]

  constructor(private service:ServiceService, public route:Router) { }

  ngOnInit(): void {debugger
    this.results.push(this.service.teamresult)

  }

  back(){
    this.route.navigateByUrl('home')

  }

}
