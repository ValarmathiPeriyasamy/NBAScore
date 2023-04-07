import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  url = "https://free-nba.p.rapidapi.com/teams"

  teamresult=[]
  totalResult=[]

  public subject =new Subject<any>()

  // secondUrl=
  thirdUrl="https://rapidapi.com/theapiguy/api/free-nba"

   httpOptions = {
    headers: new HttpHeaders({
      'X-RapidAPI-Key':'2QMXSehDLSmshDmRQcKUIAiQjIZAp1UvKUrjsnewgqSP6F5oBX',
      'X-RapidAPI-Host': 'free-nba.p.rapidapi.com'
    })
  };

  

  constructor(private http:HttpClient) { 
  }

  get(){
    return this.http.get(this.url,this.httpOptions)
  }

  getDetail(id: any){
    let url = `https://free-nba.p.rapidapi.com/games?page=0&dates[]=2022-12-06&dates[]=2022-12-05&dates[]=2022-12-04&per_page=12&team_ids[]=${id}`
    return this.http.get(url,this.httpOptions)
  }

  getmethod(id:any){
    return this.http.get(this.thirdUrl+"/"+ id,this.httpOptions )
  }

  sendValue(massage:any){
    this.subject.next(massage)
  }

  receiveValue(): Observable<any>{
    return this.subject.asObservable();

  }

  
}
