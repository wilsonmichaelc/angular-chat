import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Injectable()
export class ChatService {

  constructor(private socket: Socket) { }

  sendChat(message) {
    this.socket.emit('message', message);
  }

  receiveChat() {
    return this.socket.fromEvent('message');
  }

  getUsers() {
    return this.socket.fromEvent('users');
  }

}
