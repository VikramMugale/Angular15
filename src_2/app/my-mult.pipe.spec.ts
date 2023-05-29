import { MyMultPipe } from './my-mult.pipe';

describe('MyMultPipe', () => {
  it('should multiply two numbers', ()=>{
    let multi = new MyMultPipe();
    expect(multi.transform(10,20)).toBe(200);
  })
});
