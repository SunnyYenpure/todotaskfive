import { TestBed } from '@angular/core/testing';

import { Todoservice3Service } from './todoservice3.service';

describe('Todoservice3Service', () => {
  let service: Todoservice3Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Todoservice3Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
