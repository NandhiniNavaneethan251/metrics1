import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import {ContributorService} from 'src/app/services/contributors/contributor.service';

@Component({
  selector: 'app-contributors',
  templateUrl: './contributors.component.html',
  styleUrls: ['./contributors.component.css']
})
export class ContributorsComponent implements OnInit {
  public contributors=[] as any;
  public selectedUserIds!: number;
 
  
 
 
  //private readonly newProperty = this.contributors;

  constructor(private _contributorService:ContributorService) { }

  ngOnInit(){
    this._contributorService.getContributor()
      .subscribe(data => this.contributors = data,
                );
  }
 
 

  columnDefs=["id","Login","RepoName"];
  

}
