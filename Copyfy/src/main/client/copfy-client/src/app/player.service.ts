import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { Song } from './song';

@Injectable()
export class PlayerService {

  songs: Song[];
  constructor() {
    this.songs=[];
  }
  
  // Observable string sources
  private componentMethodCallSource = new Subject<any>();
  
  // Observable string streams
  addSong$ = this.componentMethodCallSource.asObservable();
  public addSong(song: Song){
    console.log(song.title);
    this.songs=[];
    this.songs.push(song);
    this.componentMethodCallSource.next();
  }
  public addSongs(songs: Song[]){
    console.log("playlist added");
    this.songs=[];
    this.songs=this.songs.concat(songs);
    this.componentMethodCallSource.next();
  }
  public getSong():Song{
    return this.songs.shift();
  }
}
