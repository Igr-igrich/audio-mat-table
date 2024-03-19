import { Component } from '@angular/core';
import { ISong } from './isong';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  

  dataSource: ISong[] = [
    {id: 1, name: 'New Song', fileName: 'song1', url: '/assets/song1.mp3'},
    {id: 2, name: 'Best Song', fileName: 'song2', url: '/assets/song2.mp3'},
    {id: 3, name: 'Popular Song', fileName: 'song3', url: '/assets/song3.mp3'},
  ];

  displayedColumns = ['id', 'name', 'fileName'];
}
