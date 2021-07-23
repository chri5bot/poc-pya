import { sum } from '@/helpers/numbers';

describe('helpers/numbers/sum', () => {
  def('num1', () => 1);
  def('num2', () => 1);
  def('subject', () => sum($.num1, $.num2));

  it('sum returns 2', () => {
    expect($.subject).toEqual(2);
  });
});
