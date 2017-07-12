import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl : './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
allowNewServer = false;
serverName= '';
serverStatus = 'no server was created';
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
      }, 2000);
  }

  ngOnInit() {
  }
onCreateServer(){
  this.serverStatus = 'server was created';
               }
onUpdateServerName(event: any){
  this.serverName = (<HTMLInputElement> event.target).value;
}
}
