import { TestBed } from '@angular/core/testing';

import { Todoservice1Service } from './todoservice1.service';

describe('Todoservice1Service', () => {
  let service: Todoservice1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Todoservice1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
