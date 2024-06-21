import { Component } from '@angular/core';
import { RoomRepository } from './data/mock/room.repository';
import { ExerciseComponent } from './exercise.component';
import { MainComponent } from './shared/components/main/main.component';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [ExerciseComponent, MainComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor(private roomRepository: RoomRepository) {}
}
