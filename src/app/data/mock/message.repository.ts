import { Injectable } from '@angular/core';
import { MessageEntity } from 'src/app/core/models/message.entity';

@Injectable({
  providedIn: 'root',
})
export class MessageRepository {
  private data: MessageEntity[] = [
    {
      id: 1,
      text: 'Sed volutpat facilisis turpis nec imperdiet. Vestibulum eu quam dapibus, suscipit massa eu, varius est.',
      roomId: 1,
    },
    {
      id: 2,
      text: 'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      roomId: 1,
    },
    {
      id: 3,
      text: 'Nunc mattis, felis nec lobortis consectetur, eros tortor placerat urna, at suscipit nisl diam non ante.',
      roomId: 1,
    },
    {
      id: 4,
      text: 'Sed ultricies nisi sed rhoncus pretium. Nulla rutrum volutpat porta.',
      roomId: 2,
    },
    {
      id: 5,
      text: 'Suspendisse id finibus orci, a vehicula nibh.',
      roomId: 2,
    },
    {
      id: 6,
      text: 'Curabitur faucibus vehicula nisl eget auctor. Proin sed neque ac mi faucibus auctor aliquet id velit.',
      roomId: 3,
    },
    {
      id: 7,
      text: 'Cras accumsan faucibus purus a consequat. Maecenas eu fringilla metus.',
      roomId: 3,
    },
    {
      id: 8,
      text: 'Nam lorem arcu, pretium quis lectus et, volutpat euismod enim.',
      roomId: 3,
    },
  ];

  getMessagesByRoomId(roomId: number) {
    throw new Error('Метод не реализован');
  }

  createMessage(newMessage: MessageEntity) {
    throw new Error('Метод не реализован');
  }
}
