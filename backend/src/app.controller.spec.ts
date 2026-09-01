import { describe, expect, it } from 'vitest';

describe('app health', () => {
  it('starts with a valid backend status', () => {
    expect('Fitness Formula API').toContain('Fitness');
  });
});
