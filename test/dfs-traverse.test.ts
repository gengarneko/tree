import { describe, expect, it } from 'vitest';
import { provinceList } from './mock';
import { dfsTraverse } from '../src';

describe('dfs traverse', () => {
  it('normal', () => {
    const result = dfsTraverse(provinceList);
    console.log(result, 1111111111);
    expect(result).toEqual(provinceList);
  });

  it('empty array', () => {
    const result = dfsTraverse([]);
    expect(result).toEqual([]);
  });

  it('null', () => {
    expect(() => dfsTraverse(null)).toThrow(TypeError);
    expect(() => dfsTraverse(null)).toThrow('invalid parameters');
  });

  it('undefined', () => {
    expect(() => dfsTraverse(undefined)).toThrow(TypeError);
    expect(() => dfsTraverse(undefined)).toThrow('invalid parameters');
  });
});
