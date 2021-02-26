import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import {CommitService} from 'src/app/services/commits/commit.service';

@Component({
  selector: 'app-commits',
  templateUrl: './commits.component.html',
  styleUrls: ['./commits.component.css']
})
export class CommitsComponent implements OnInit {
  public commits=[] as any;
  public selectedUserIds!: number;

  private readonly newProperty = this.commits;
  constructor(private _commitService:CommitService) { }

  ngOnInit(){
    this._commitService.getCommit()
      .subscribe(data => this.commits = data,
                );
  }
  columnDef=["UserId","Name","RepoName","CommitDate","CommitMessage"];

}
