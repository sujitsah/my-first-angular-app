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
servers = ['test' , 'test2'];
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
    this.servers.push(this.serverName);
  this.serverStatus = 'server was created ' + this.serverName;
               }
onUpdateServerName(event: any){
  this.serverName = (<HTMLInputElement> event.target).value;
}
}
