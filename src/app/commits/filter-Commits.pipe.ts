import {Pipe, PipeTransform} from '@angular/core';
import { ICommit } from '../commit';
@Pipe({
    name:'filterCommits'
})
export class filterCommitsPipe implements PipeTransform{
    transform(commits: ICommit[],selectedUserIds:string): ICommit[]{
      
        if(!selectedUserIds) return commits;
        return commits.filter(commit=>commit.UserId==selectedUserIds);
    }
}