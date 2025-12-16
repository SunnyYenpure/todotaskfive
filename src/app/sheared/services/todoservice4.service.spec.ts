import { TestBed } from '@angular/core/testing';

import { Todoservice4Service } from './todoservice4.service';

describe('Todoservice4Service', () => {
  let service: Todoservice4Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Todoservice4Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
