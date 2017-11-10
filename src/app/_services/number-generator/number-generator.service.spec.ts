import { TestBed, inject } from '@angular/core/testing';

import { NumberGeneratorService } from './number-generator.service';

describe('NumberGeneratorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NumberGeneratorService]
    });
  });

  it('should be created', inject([NumberGeneratorService], (service: NumberGeneratorService) => {
    expect(service).toBeTruthy();
  }));
});
