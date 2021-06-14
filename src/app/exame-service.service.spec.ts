import { TestBed } from '@angular/core/testing';

import { ExameServiceService } from './exame-service.service';

describe('ExameServiceService', () => {
  let service: ExameServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExameServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
