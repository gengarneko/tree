import { describe, expect, it } from 'vitest';
import { provinceList } from './mock';
import { bfsTraverse } from '../src';

describe('bfs traverse', () => {
  it('normal', () => {
    const result = bfsTraverse(provinceList);
    expect(result).toEqual(provinceList);
  });

  it('empty array', () => {
    const result = bfsTraverse([]);
    expect(result).toEqual([]);
  });

  it('null', () => {
    expect(() => bfsTraverse(null)).toThrow(TypeError);
    expect(() => bfsTraverse(null)).toThrow('invalid parameters');
  });

  it('undefined', () => {
    expect(() => bfsTraverse(undefined)).toThrow(TypeError);
    expect(() => bfsTraverse(undefined)).toThrow('invalid parameters');
  });
});
