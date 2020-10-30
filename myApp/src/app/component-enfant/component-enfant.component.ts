import { Component, EventEmitter, OnInit, Output } from '@angular/core';
@Component({
  selector: 'app-component-enfant',
  templateUrl: './component-enfant.component.html',
  styleUrls: ['./component-enfant.component.scss'],
})
export class ComponentEnfantComponent implements OnInit {

  public note: string;
  @Output() sendNote = new EventEmitter<string>();

  constructor() {
    this.note = '';
  }

  ngOnInit() {}

  send() {
    if (this.note !== '') {
      this.sendNote.emit(this.note);
      this.note = '';
    }
  }

}
