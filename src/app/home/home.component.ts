import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  details:any=[];
  selectedLevel="Atlanta Hawks";
  filterarry= {}
  params={};
  teamsDetail:any=[];
  imagepath:any;

  constructor(private service:ServiceService, private router: Router) { }

  ngOnInit(): void {debugger
     this.teamsDetail = this.service.totalResult 
    this.get()
  }

  get(){
    this.service.get().subscribe((x:any)=>{
      console.log(x,'hiii')
      this.details = x.data;
      console.log(this.details.data , 'hiiii')
    }) 
   }

    onclick(value:any){debugger
    this.details.forEach((x:any) => {
       if(value == x.full_name){
         this.filterarry= x.id;
       }
     });
     this.service.getDetail(this.filterarry).subscribe((x:any)=>{
        console.log(x,'khgjg')
        this.teamsDetail.push( x.data[0])
        let imagepath = this.teamsDetail[this.teamsDetail.length - 1].home_team.abbreviation
        
        console.log(this.teamsDetail,'kkkk');
        this.imagepath = `https://interstate21.com/nba-logos/${imagepath}.png`
        this.teamsDetail[this.teamsDetail.length - 1]['img']=this.imagepath;
     })

    }

    remove(data:any){ debugger
      this.teamsDetail.pop(data);
    }

    getResult(result:any){debugger
      this.service.totalResult = this.teamsDetail
      this.service.teamresult = result;
     if(result){
      this.router.navigateByUrl('result')
     }
    }

}
