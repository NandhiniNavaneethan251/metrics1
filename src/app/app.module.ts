import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContributorService } from './services/contributors/contributor.service';
import { ContributorsComponent } from './contributors/contributors.component';
import { CommitsComponent } from './commits/commits.component';
import { CommitService } from './services/commits/commit.service';
import {MatTableModule} from '@angular/material/table';
import {AgGridModule} from 'ag-grid-angular';
import { filterContributorsPipe } from './contributors/filter-Contributors.pipe';
import { filterCommitsPipe } from './commits/filter-Commits.pipe';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    ContributorsComponent,
    CommitsComponent,
    filterContributorsPipe,
    filterCommitsPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgSelectModule, 
    FormsModule,
    MatTableModule,
    AgGridModule.withComponents([]),
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule
  ],
  providers: [ContributorService,
  CommitService],
  bootstrap: [AppComponent]
})
export class AppModule { }
