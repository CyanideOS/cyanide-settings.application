import { TestBed } from '@angular/core/testing';

import { WindowsManagerService } from './window-manager.service';

describe('WindowsManagerService', () => {
  let service: WindowsManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WindowsManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
