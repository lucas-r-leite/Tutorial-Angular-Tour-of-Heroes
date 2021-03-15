import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  messages: string[] = [];

  add(message: string) {//adicionando message ao cache
    this.messages.push(message);
  }

  clear() {//limpando cache
    this.messages = [];
  }
}