import { Movie } from "moviedb-promise";
import { bindable } from "aurelia-framework";
import { getPopcorn } from "api/index";

export class MovieList {
  @bindable movies: Movie[];
  @bindable title: string;
  // selected: Movie;
  selected: string;

  popcornTime(name: string) {
    getPopcorn(name);
  }  

}
