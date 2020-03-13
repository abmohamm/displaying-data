import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-form-control-demo',
  templateUrl: './form-control-demo.component.html',
  styleUrls: ['./form-control-demo.component.css']
})
export class FormControlDemoComponent implements OnInit {
  name = new FormControl('');

  constructor() { }

  ngOnInit(): void {
    this.name.setValue('test');
  }

  updateName() {
    this.name.setValue('updated name');
  }
}
