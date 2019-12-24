import { TestBed } from '@angular/core/testing';

import { InterceptorQueteService } from './interceptor-quete.service';

describe('InterceptorQueteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InterceptorQueteService = TestBed.get(InterceptorQueteService);
    expect(service).toBeTruthy();
  });
});
