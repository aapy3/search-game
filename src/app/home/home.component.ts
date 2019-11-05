import { Component, OnInit, ViewChild } from '@angular/core';
import {Observable} from 'rxjs';
import {debounceTime, distinctUntilChanged, map, startWith} from 'rxjs/operators';
import { ApiHitService } from '../apiHit.service';
import { Router } from '@angular/router';
import { NgProgress } from 'ngx-progressbar';
import { FormControl } from '@angular/forms';
import { MatSort, MatPaginator, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  // @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  // @ViewChild(MatSort, {static: true}) sort: MatSort;
  limit : Number = 10;
  displayedColumns: string[] = ['title', 'platform', 'score', 'genre', 'editors_choice'];
  gameCtrl = new FormControl();
  searchGameArray: MatTableDataSource<any>
  filteredGames: Observable<any>;
  selectedGame: any;
  constructor(private hit : ApiHitService,private router: Router,public ngProgress: NgProgress) { 

    // this.filteredGames = this.gameCtrl.valueChanges
    //   .pipe(
    //     startWith(''),
    //     map(state => state ? this._filterStates(state) : this.searchGameArray.slice())
    //   );
  }

  ngOnInit() {
      this.hit.getGame().subscribe((result) =>{
        let tmp_data = JSON.parse(result['_body']);
        tmp_data.splice(0,1);
        this.searchGameArray = new MatTableDataSource(tmp_data);
      })
  }

  // private _filterStates(value: string) {
  //   const filterValue = value.toLowerCase();
  //   return this.searchGameArray.filter(state => state.title.toLowerCase().indexOf(filterValue) === 0);
  // }

  selectGame(data){
    this.selectedGame = data;
  }

  applyFilter(filterValue: string) {
    this.searchGameArray.filter = filterValue.trim().toLowerCase();

    if (this.searchGameArray.paginator) {
      this.searchGameArray.paginator.firstPage();
    }
  }


}
