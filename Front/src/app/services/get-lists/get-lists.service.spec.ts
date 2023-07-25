import { TestBed } from '@angular/core/testing';

import { GetListsService } from './get-lists.service';

describe('GetListsService', () => {
  let service: GetListsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetListsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
