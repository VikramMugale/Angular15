import { MyAddPipe } from './my-add.pipe';

describe('MyAddPipe', () => {
  it('should add two numbers', ()=>{
    let add = new MyAddPipe();
    expect(add.transform(10,20)).toBe(30);
  })
  });

