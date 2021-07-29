import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

import { ListService } from '../../services/list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {


  items : any[] = []

  currentCategory : any = {
    name : 'Top Rated',
    url : 'movie/top_rated'
  } 
  listPage : number = 1;
  maxPages : number = 1

  categories : any[] = [
    {name : 'Top Rated' , url : 'movie/top_rated'},
    {name : 'Now playing' , url : 'movie/now_playing'},
    {name : 'Popular' , url : 'movie/popular'},
    {name : 'Upcoming' , url : 'movie/upcoming'}
  ]


  constructor(private listservice : ListService) { }

  ngOnInit(): void {
    this.listservice.getMovieCollection(this.currentCategory.url , this.listPage).subscribe((items) => {
      console.log(items)
      this.maxPages = items.total_pages
      this.items = items.results
    })
  }
  
  onPrev() {
    this.items = []
    this.listservice.getMovieCollection(this.currentCategory.url , this.listPage - 1).subscribe((items) => {
      console.log(items)
      this.maxPages = items.total_pages
      this.items = items.results
      this.listPage = this.listPage - 1
    })
  }
  
  onNext() {
    this.items = []
    this.listservice.getMovieCollection(this.currentCategory.url , this.listPage + 1).subscribe((items) => {
      console.log(items)
      this.maxPages = items.total_pages
      this.items = items.results
      this.listPage = this.listPage + 1
    })
  }
  
  onSelectCategory(selectName : string , selectUrl : string) {
    this.items = []
    this.listservice.getMovieCollection(selectUrl , 1 ).subscribe((items) => {
      console.log(items)
      this.maxPages = items.total_pages
      this.items = items.results
      this.listPage = 1
      this.currentCategory.name = selectName , 
      this.currentCategory.url = selectUrl
    })
  }


}
