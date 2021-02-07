import { TestBed } from '@angular/core/testing';

import { QualiteAirService } from './qualite-air.service';

describe('QualiteAirService', () => {
  let service: QualiteAirService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QualiteAirService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
