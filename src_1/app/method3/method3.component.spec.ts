import { ArrayAddition } from "./method3.component";
describe('ArrayAddition', ()=>{
    it('Return addition of all elements in Array', ()=>{
        let add = [1,2,3,4,5];
        let Ret = ArrayAddition(add);
        expect(Ret).toBe(15);
    })
})