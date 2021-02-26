import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {ICommit} from 'src/app/commit';

@Injectable()
export class CommitService {
  private _url:string="/assets/commits.json";


  constructor(private http:HttpClient) { }
  getCommit():Observable<ICommit[]>{

  return this.http.get<ICommit[]>(this._url);
  

}
}
