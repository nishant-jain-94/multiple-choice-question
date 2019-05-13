import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'quizetency-mcq-editor',
  template: `
    <textarea [markdown]></textarea>
  `,
  styles: []
})
export class McqEditorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
