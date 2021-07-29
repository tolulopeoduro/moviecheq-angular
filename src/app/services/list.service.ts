import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  private apiKey = 'dbf1aa578a70e23a10f55559d754340e'

  constructor(private http:HttpClient) { }

  getMovieCollection(category : string , page : number): Observable<any> {
    const items =  this.http.get(`
    https://api.themoviedb.org/3/${category}?api_key=${this.apiKey}&language=en-US&page=${page.toString()}`)

    return(items)
  }

  getOneMovie(id : any): Observable<any> {
    return this.http.get(`
    https://api.themoviedb.org/3/movie/${id}?api_key=${this.apiKey}&language=en-US`)
  }
}
