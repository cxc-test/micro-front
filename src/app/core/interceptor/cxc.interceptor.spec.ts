import { TestBed } from '@angular/core/testing';

import { CxcInterceptor } from './cxc.interceptor';

describe('CxcInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      CxcInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: CxcInterceptor = TestBed.inject(CxcInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
