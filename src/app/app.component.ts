import { Component } from '@angular/core';
import { ChatService } from './chat.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'chat';

  public users: number = 0;
  public message: string = '';
  public messages: string[] = [];

  constructor(private chatService: ChatService){

  }

  ngOnInit(){

    this.chatService.receiveChat().subscribe((message: string) => {
      console.log(message);
      this.messages.push(message);
    });

    this.chatService.getUsers().subscribe((users: number) => {
      console.log(users);
      this.users = users;
    });

  }

  addChat(){
    this.messages.push(this.message);
    this.chatService.sendChat(this.message);
    this.message = '';
  }
}
