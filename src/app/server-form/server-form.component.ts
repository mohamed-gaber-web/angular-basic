import {Component, OnInit, EventEmitter, Output, ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'app-server-form',
  templateUrl: './server-form.component.html',
  styleUrls: ['./server-form.component.css']
})
export class ServerFormComponent {
  @Output() serverCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  @Output('bpCreated') bluePrintCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  // @Output() sayHelloMan = new EventEmitter();

  // newServerName = '';
  // newServerContent = '';
  // // name = 'mohamed';

  @ViewChild('serverContentInput') serverContentInput: ElementRef;

  onAddServer(nameInput) {
    // console.log(nameInput.textContent = "ahmed");
    // nameInput === Input Element [ nameInput.value, nameInput.class, nameInput.type ]
    this.serverCreated.emit({serverName: nameInput.value, serverContent: this.serverContentInput.nativeElement.value});
  }

  onAddBluPrintServer(nameInput) {
    this.bluePrintCreated.emit({serverName: nameInput.value, serverContent: this.serverContentInput.nativeElement.value});
  }

  // test(testElement) {
  //   console.log(testElement);
  // }

  // sayHello() {
  //   // alert("Say Hello Mohamed");
  //   this.sayHelloMan.emit(this.name);
  // }
}

/***
 *
 * use EventEmitter from angular/
 * new EventEmitter()
 * new EventEmitter<type>()
 * emit()
 * @Output
 * <ng-content>  </ng-content>
 */


// Encapsulation
// class App {
//   private name: string;
//   age: number;
//
//   public getName() {
//     return this.name;
// }
//
// }
//
// class NewApp extends App{
// }
