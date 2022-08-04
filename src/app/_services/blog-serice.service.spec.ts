import { TestBed } from '@angular/core/testing';

import { BlogSericeService } from './blog-serice.service';

describe('BlogSericeService', () => {
  let service: BlogSericeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlogSericeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
