import { TestBed } from '@angular/core/testing';

import { NativeSDKExceptionService } from './exceptions.service';

describe('ExceptionsService', () => {
  let service: NativeSDKExceptionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NativeSDKExceptionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
