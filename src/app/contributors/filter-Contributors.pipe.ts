import {Pipe, PipeTransform} from '@angular/core';
@Pipe({
    name:'filterContributors'
})
export class filterContributorsPipe implements PipeTransform{
    transform(contributors: any[],selectedUserIds:number): any[]{
        if(!contributors) return [];
        if(!selectedUserIds) return contributors;
        return contributors.filter(contributor=>{
            return contributor.id.includes(selectedUserIds);
        });
    }
}