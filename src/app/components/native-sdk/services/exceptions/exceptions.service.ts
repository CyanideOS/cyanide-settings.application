import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NativeSDKExceptionService {
  constructor() {}

  AssertionException(msg: string = 'Assertion Error Occured') {
    throw Error(msg);
  }
}
