import { Component } from '@angular/core';
import { UserdataService } from './services/userdata.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BasicRouting';
  // show=true

  // showing()
  // {
  //   if(this.show)
  //   {
  //     this.show=false;
  //   }
  //   else
  //   {
  //     this.show=true;
  //   }
  // }
  users:any=[]
  constructor(private userData:UserdataService){
    console.warn("userdata",userData.users())
    this.users=userData.users()
  }
}
