import { TestBed } from '@angular/core/testing';
import { DesignSystem } from './design-system';

describe('DesignSystem', () => {
  it('should create', async () => {
    await TestBed.configureTestingModule({
      imports: [DesignSystem],
    }).compileComponents();
    const fixture = TestBed.createComponent(DesignSystem);
    expect(fixture.componentInstance).toBeTruthy();
  });
});
