import { Component, OnInit } from '@angular/core';
import { ChatService } from './chat.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'chat';

  chat: any[] = [];
  users = 0;
  message = '';

  constructor(private chatService: ChatService) {

  }

  ngOnInit() {

    this.chatService.receiveChat().subscribe((message: any) => {
      this.chat.push(message);
    });

    this.chatService.getUsers().subscribe((users: number) => {
      console.log('users??', users);
      this.users = users;
    });

  }

  sendMessage() {
    if (this.message !== '') {
      this.chat.push({user: 'Me', msg: this.message});
      this.chatService.sendChat({user: 'Michael', msg: this.message});
      this.message = '';
    }
  }
}
