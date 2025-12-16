import { TestBed } from '@angular/core/testing';

import { GetConfirmService } from './get-confirm.service';

describe('GetConfirmService', () => {
  let service: GetConfirmService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetConfirmService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
