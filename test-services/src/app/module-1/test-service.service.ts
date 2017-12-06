import { Injectable } from '@angular/core';

@Injectable()
export class TestServiceService {

  public getTitle() {
    return 'module-1';
  }

  constructor() { }

}
