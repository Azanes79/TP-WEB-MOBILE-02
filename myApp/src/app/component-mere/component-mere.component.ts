import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-mere',
  templateUrl: './component-mere.component.html',
  styleUrls: ['./component-mere.component.scss'],
})
export class ComponentMereComponent implements OnInit {

  public notes: string[];

  constructor() {
    this.notes = [];
  }

  ngOnInit() {}

  addNote(note: string) {
    this.notes.push(note);
  }

}
