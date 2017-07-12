import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl : './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
allowNewServer = false;
serverName= '';
serverCreated= false;
serverStatus = 'no server was created';
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
      }, 2000);
  }

  ngOnInit() {
  }
onCreateServer(){
    this.serverCreated = true;
  this.serverStatus = 'server was created ' + this.serverName;
               }
onUpdateServerName(event: any){
  this.serverName = (<HTMLInputElement> event.target).value;
}
}
