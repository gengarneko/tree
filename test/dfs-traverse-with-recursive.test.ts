import { describe, expect, it } from 'vitest';
import { dfsTraverseWithRecursive } from '../src';
import { provinceList } from './mock';

describe('dfs traverse with recursive', () => {
  it('normal', () => {
    const result = dfsTraverseWithRecursive(provinceList);
    expect(result).toEqual(provinceList);
  });

  it('empty array', () => {
    const result = dfsTraverseWithRecursive([]);
    expect(result).toEqual([]);
  });

  it('null', () => {
    expect(() => dfsTraverseWithRecursive(null)).toThrow(TypeError);
    expect(() => dfsTraverseWithRecursive(null)).toThrow('invalid parameters');
  });

  it('undefined', () => {
    expect(() => dfsTraverseWithRecursive(undefined)).toThrow(TypeError);
    expect(() => dfsTraverseWithRecursive(undefined)).toThrow('invalid parameters');
  });
});
