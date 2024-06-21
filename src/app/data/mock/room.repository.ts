import { Injectable } from '@angular/core';
import { RoomEntity } from 'src/app/core/models/room.entity';

@Injectable({
  providedIn: 'root',
})
export class RoomRepository {
  private data: RoomEntity[] = [
    {
      id: 1,
      name: 'Howard',
    },
    {
      id: 2,
      name: 'Parker',
    },
    {
      id: 3,
      name: 'Walker',
    },
    {
      id: 4,
      name: 'Bryant',
    },
  ];

  getAllRooms(): RoomEntity[] {
    throw new Error('Метод не реализован');
  }
}
