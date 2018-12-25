import { TestBed, async, inject } from '@angular/core/testing';

import { DetailGuard } from './detail.guard';

describe('DetailGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DetailGuard]
    });
  });

  it('should ...', inject([DetailGuard], (guard: DetailGuard) => {
    expect(guard).toBeTruthy();
  }));
});
