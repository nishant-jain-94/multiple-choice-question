import { NgModule } from '@angular/core';
import { McqEditorComponent } from './mcq-editor.component';
import { MarkdownEditorModule, MarkdownEditorDirective } from 'markdown-editor';

@NgModule({
  declarations: [
    McqEditorComponent
  ],
  imports: [ MarkdownEditorModule ],
  exports: [ McqEditorComponent ],
})
export class McqEditorModule { }
