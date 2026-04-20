import { describe, it, expect } from 'vitest';
import { normalizeColumnSpec } from './normalize-column-spec';

describe('normalizeColumnSpec', () => {
  it('passes through canonical {key, label, type}', () => {
    expect(normalizeColumnSpec({ key: 'name', label: 'Name', type: 'text' })).toEqual({
      key: 'name',
      label: 'Name',
      type: 'text',
    });
  });

  it('maps header to label', () => {
    expect(normalizeColumnSpec({ key: 'name', header: 'Name', type: 'text' })).toEqual({
      key: 'name',
      label: 'Name',
      type: 'text',
    });
  });

  it('maps id to key', () => {
    expect(normalizeColumnSpec({ id: 'name', header: 'Name', type: 'badge' })).toEqual({
      key: 'name',
      label: 'Name',
      type: 'badge',
    });
  });

  it('maps accessorKey to key', () => {
    expect(normalizeColumnSpec({ accessorKey: 'hours', header: 'Hours', type: 'number' })).toEqual({
      key: 'hours',
      label: 'Hours',
      type: 'number',
    });
  });

  it('defaults type to text when missing', () => {
    expect(normalizeColumnSpec({ key: 'task', header: 'Task' })).toEqual({
      key: 'task',
      label: 'Task',
      type: 'text',
    });
  });

  it('prefers key over id and accessorKey', () => {
    expect(normalizeColumnSpec({ key: 'a', id: 'b', accessorKey: 'c', label: 'X' })).toEqual({
      key: 'a',
      label: 'X',
      type: 'text',
    });
  });

  it('prefers label over header', () => {
    expect(normalizeColumnSpec({ key: 'x', label: 'Label', header: 'Header' })).toEqual({
      key: 'x',
      label: 'Label',
      type: 'text',
    });
  });

  it('falls back to empty string when no key variant exists', () => {
    expect(normalizeColumnSpec({ header: 'X' })).toEqual({ key: '', label: 'X', type: 'text' });
  });

  it('falls back to empty string when no label variant exists', () => {
    expect(normalizeColumnSpec({ key: 'x' })).toEqual({ key: 'x', label: '', type: 'text' });
  });
});
