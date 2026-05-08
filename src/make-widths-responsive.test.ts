import { describe, expect, it } from 'vitest';
import { makeWidthsResponsive } from './components';

describe('makeWidthsResponsive', () => {
  it('rewrites bare width tokens to responsive variant', () => {
    expect(makeWidthsResponsive('w-72')).toBe('w-full min-[900px]:w-72');
    expect(makeWidthsResponsive('flex w-80 gap-4')).toBe('flex w-full min-[900px]:w-80 gap-4');
  });

  it('leaves breakpoint-prefixed widths untouched', () => {
    expect(makeWidthsResponsive('lg:w-80')).toBe('lg:w-80');
    expect(makeWidthsResponsive('md:w-72')).toBe('md:w-72');
    expect(makeWidthsResponsive('min-[900px]:w-80')).toBe('min-[900px]:w-80');
  });

  it('rewrites bare token while preserving breakpoint-prefixed sibling', () => {
    expect(makeWidthsResponsive('w-72 lg:w-80')).toBe('w-full min-[900px]:w-72 lg:w-80');
  });

  it('leaves state-prefixed widths untouched', () => {
    expect(makeWidthsResponsive('hover:w-72')).toBe('hover:w-72');
    expect(makeWidthsResponsive('lg:hover:w-80')).toBe('lg:hover:w-80');
  });

  it('does not match min-w-* or max-w-* tokens', () => {
    expect(makeWidthsResponsive('min-w-72')).toBe('min-w-72');
    expect(makeWidthsResponsive('max-w-80')).toBe('max-w-80');
  });

  it('skips when the className contains a positioning utility', () => {
    expect(makeWidthsResponsive('absolute w-72')).toBe('absolute w-72');
    expect(makeWidthsResponsive('fixed w-80')).toBe('fixed w-80');
    expect(makeWidthsResponsive('sticky w-96')).toBe('sticky w-96');
  });

  it('only rewrites whitelisted sizes', () => {
    expect(makeWidthsResponsive('w-2 w-4 w-40')).toBe('w-2 w-4 w-40');
    expect(makeWidthsResponsive('w-48')).toBe('w-full min-[900px]:w-48');
    expect(makeWidthsResponsive('w-96')).toBe('w-full min-[900px]:w-96');
  });
});
