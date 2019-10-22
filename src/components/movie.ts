import { bindable } from "aurelia-framework";
import { Movie as MovieModel } from "moviedb-promise";
import { getPopcorn } from "api/index";

export class Movie {
  @bindable model: MovieModel;
  isHovering = false;

  // selected: Movie;
  selected: string;

  mouseOver() {
    this.isHovering = true;
  }

  mouseOut() {
    this.isHovering = false;
  }

  popcornTime(name: string) {
    console.log(name, 'x')
    getPopcorn(name);
  }
}
