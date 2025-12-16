import { TestBed } from '@angular/core/testing';

import { Todoservice2Service } from './todoservice2.service';

describe('Todoservice2Service', () => {
  let service: Todoservice2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Todoservice2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
