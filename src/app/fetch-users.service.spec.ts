import { TestBed, inject } from '@angular/core/testing';

import { FetchUsersService } from './fetch-users.service';

describe('FetchUsersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FetchUsersService]
    });
  });

  it('should be created', inject([FetchUsersService], (service: FetchUsersService) => {
    expect(service).toBeTruthy();
  }));
});
