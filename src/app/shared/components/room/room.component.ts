import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageRepository } from 'src/app/data/mock/message.repository';

@Component({
  selector: 'app-room',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './room.component.html',
  styleUrl: './room.component.scss',
})
export class RoomComponent {
  constructor(private messageRepository: MessageRepository) {}
}
