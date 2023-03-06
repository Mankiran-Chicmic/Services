import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  constructor() { }
  users()
  {
    return [
      {name:'anil',age:28, email:'anil@test.com'},
      {name:'sam',age:25, email:'sam@test.com'},
      {name:'Peter',age:34, email:'peter@test.com'}
    ]
  }
}
