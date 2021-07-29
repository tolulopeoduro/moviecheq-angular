import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  movie : any = null

  poster : string = ''

  constructor(private route : ActivatedRoute , private listservice : ListService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.listservice.getOneMovie(id).subscribe((movie) => {
      console.log(movie)
      this.movie = movie
      this.poster = `https://image.tmdb.org/t/p/original${movie.poster_path}`
    })
  }

}
