import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { McqEditorComponent } from './mcq-editor.component';

describe('McqEditorComponent', () => {
  let component: McqEditorComponent;
  let fixture: ComponentFixture<McqEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ McqEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(McqEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
