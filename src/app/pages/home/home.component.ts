import { Component } from '@angular/core';
import { TopNavComponent } from '../../components/top-nav/top-nav.component';
import { SongCardComponent } from '../../components/song-card/song-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TopNavComponent, SongCardComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  public songCards = [
    {
      thumbnail: '',
      title: 'Romantic Songs',
      description: 'Relax and indulge with beautiful piano pieces',
    },
    {
      thumbnail: '',
      title: 'Upbeat Hits',
      description: 'Get energized with the latest upbeat tracks',
    },
    {
      thumbnail: '',
      title: 'Chill Vibes',
      description: 'Unwind with a collection of chill and laid-back tunes',
    },
    {
      thumbnail: '',
      title: 'Workout Jams',
      description: 'Power through your workout with high-energy songs',
    },
    {
      thumbnail: '',
      title: 'Study Focus',
      description: 'Create a focused atmosphere with instrumental study music',
    },
    {
      thumbnail: '',
      title: 'Throwback Classics',
      description: 'Take a trip down memory lane with timeless classics',
    },
  ];
}
