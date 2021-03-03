import {Pipe, PipeTransform} from '@angular/core';
import { IContributor } from '../contributor';
@Pipe({
    name:'filterContributors'
})
export class filterContributorsPipe implements PipeTransform{
    transform(contributors: IContributor[],selectedUserIds:number): IContributor[]{
      
        if(!selectedUserIds) return contributors;
        return contributors.filter(contributor=>contributor.id==selectedUserIds);
    }
}