import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  generateEmailCode(): string {
    return '' + Math.floor(1000 + Math.random() * 9000)
  }


}
