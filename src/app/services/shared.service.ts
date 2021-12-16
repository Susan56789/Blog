import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  blogTitle = "Nasus Blog";
  
  constructor() { }
}
