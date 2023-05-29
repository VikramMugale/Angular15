import { CountCapital } from "./method1.component";

describe('CountCapital', ()=>{
    it('should return number of capital letters from string', ()=>{
        let name = "MaRveLLoUs";
        let Ret = CountCapital(name)
        expect(Ret).toBe(5);
    })
})