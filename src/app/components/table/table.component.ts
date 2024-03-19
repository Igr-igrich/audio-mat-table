import { Component, ContentChildren, Input, OnInit, QueryList, TemplateRef } from '@angular/core';
import { TableHeaderDirective } from '../../directives/table-header.directive';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent implements OnInit {
  song = new Audio();
  songs = [
    {url: './assets/song1', name: 'New Song'},
    {url: './assets/song2', name: 'Best Song'},
    {url: './assets/song3', name: 'Popular Song'},
  ]
  songName: string | undefined;

  @Input() dataSource: {[key: string]: any}[] = [];
  @Input() displayedColumns: string[] = [];

  @ContentChildren(TableHeaderDirective) headerTemplates!: QueryList<TableHeaderDirective>;

  ngOnInit(): void {
    console.log(this.song);
  }

  public getHeaderTemplate(colName: string): TemplateRef<any> | undefined {
    return this.headerTemplates.find(item => item.appTableHeader === colName)?.templateRef;
  }

  public openSong(songUrl: string, songName: string) {
    this.song.src = songUrl;
    this.song.load();
    this.song.play();
    this.songName = songName;
  }

  public playSong() {
    this.song.play()
    this.isPlay = !this.isPlay;
  }

  public stopSong() {
    this.song.pause();
    this.isPlay = !this.isPlay;
  }

  public vol(volume: any) {
    this.song.volume = volume.target.value;
  }

  isPlay = true;

  // public toggle(track: string) {
  //     this.isPlay = !this.isPlay;
  //     this.isPlay ? 'play-button' : 'pause-button'
  // }
}
