import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './components/list/list.component';
import { MovieComponent } from './components/movie/movie.component';

const routes: Routes = [
  {path: 'movie/:id' , component: MovieComponent},
  {path: '' , component: ListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [MovieComponent]
