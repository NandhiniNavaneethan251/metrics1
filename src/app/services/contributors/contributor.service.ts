import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IContributor } from 'src/app/contributor';

@Injectable()
export class ContributorService {
 private _url:string="/assets/contributors.json";
  

  constructor(private http:HttpClient) { }
  getContributor():Observable<IContributor[]>{

  return this.http.get<IContributor[]>(this._url);
  

}
}
