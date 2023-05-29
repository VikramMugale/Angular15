import { MarvellousChkPipe } from './marvellous-chk.pipe';

describe('MarvellousChkPipe', () => {
  it('Check status of number and return result', ()=>{
    let check = new MarvellousChkPipe();
    expect(check.transform(11,"Prime")).toEqual("It is Prime number");
})
});
