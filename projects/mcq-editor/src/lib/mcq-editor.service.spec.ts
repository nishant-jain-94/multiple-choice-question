import { TestBed } from '@angular/core/testing';

import { McqEditorService } from './mcq-editor.service';

describe('McqEditorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: McqEditorService = TestBed.get(McqEditorService);
    expect(service).toBeTruthy();
  });
});
