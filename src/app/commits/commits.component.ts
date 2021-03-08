import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import {CommitService} from 'src/app/services/commits/commit.service';
import {dateModel} from 'src/app/commits/date-model.modal';


@Component({
  selector: 'app-commits',
  templateUrl: './commits.component.html',
  styleUrls: ['./commits.component.css']
})
export class CommitsComponent implements OnInit {
  public commits=[] as any;
  public selectedUserIds!: string;
  len: any;
  disabl: boolean =true;
  dateArray: any =[];
  
  count:any;
  date=new dateModel();
  dataArr: any=[];
  private readonly newProperty = this.commits;
  constructor(private _commitService:CommitService) { }

  ngOnInit(){
    this._commitService.getCommit()
      .subscribe(data => this.commits = data,
                );
                
  }
  columnDef=["UserId","Name","RepoName","CommitDate","CommitMessage"];
  addDateFields() {
    if (this.dateArray.length < 5) {
      this.date = new dateModel();
      // this.dateArray.push({fromDate:"", toDate:""})
      this.dateArray.push(this.date);
    }
    this.len = this.dateArray.length;
    this.disableFunc();
  
  }
  filterDate() {
    let x = [];
    this.count = 0;
    for (let dates of this.dateArray) {
      this.count++;
      if (dates.fromDate && dates.toDate) {
        let date1 = new Date(dates.fromDate);
        let date2 = new Date(dates.toDate);
        x = this.commits.filter((item: any) =>
          new Date(item.commitDate) >= date1 && new Date(item.commitDate) <= date2 );
        if (this.count == 1) this.dataArr = x;
        else {
          for (let i of x) {
            if(!this.dataArr.includes(i))
            this.dataArr.push(i);
          }
        }
        console.log(x)
        console.log(this.dateArray);
        for(let i of this.commits){
          console.log(new Date(Date.parse(i.commitDate)))
        }
    
      }
    }
  }

  disableFunc(){
    for(let dates of this.dateArray){
      if(dates.toDate && dates.fromDate){
        this.disabl=false;
      }
      else this.disabl=true;
      }
    }
    removeDatefield(value:any){
      this.dataArr=this.commits;
      this.dateArray.splice(value,1);
      this.len=this.dateArray.length;
      this.disableFunc();
      if((this.len>0)&&(this.count>0)) this.filterDate();
    }
  }

