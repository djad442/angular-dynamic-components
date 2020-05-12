import { Component, OnInit } from '@angular/core';
import { DialogConfig } from '../dialog/dialog-config';
import { DialogRef } from '../dialog/dialog-ref';

export class ExampleData{
  RID: number;
}

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements OnInit {

  rid:number;

  constructor(public config: DialogConfig<ExampleData>, public dialog: DialogRef) {

  }

  ngOnInit(): void {
    this.rid = this.config.data.RID;
  }

  onClose() {
    this.dialog.close('some value');
  }
}
