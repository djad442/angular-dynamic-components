import { Component } from '@angular/core';
import { DialogService } from './dialog/dialog.service';
import { ExampleComponent, ExampleData } from './example/example.component';
import { DialogConfig } from './dialog/dialog-config';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public dialog: DialogService) {

  }


  showDialog(){
    const data = new DialogConfig<ExampleData>();

    data.data = { RID: 999};

    const ref = this.dialog.open(ExampleComponent, data);

    ref.afterClosed.subscribe(result => {
      alert("dialog closed result: " + result);
    });
  }
}
