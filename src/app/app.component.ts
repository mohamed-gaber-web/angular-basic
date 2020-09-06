import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  servers = [{type: 'blueprint', name: 'testServer', content: 'testServerContent' }];
  Users = ['mohamed', 'ahmed', 'khaled'];
  value = 0;
  // username = 'ahmed';
  // age = 30;
  // Hobbies = ['football', 'writing', 'cooking'];

// how to share methods
  onAddServer(serverData: { serverName: string, serverContent: string }) {
    this.servers.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
    // this.newServerName = '';
    // this.newServerContent = '';
  }


  onAddBluePrintServer(bluePrint: { serverName: string, serverContent: string  }) {
     this.servers.push({
        type: 'blueprint',
        name: bluePrint.serverName,
       content: bluePrint  .serverContent

     });
    // this.newServerName = '';
    // this.newServerContent = '';

  }

  // Example basic For Send Function
  // onSayHello(name) {
  //   alert('Say Hello ' + name);
  // }
}

/**
 * <app-component> text or html element </app-component>
 * <ng-content></ng-content>
 */
