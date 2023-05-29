import { CheckPassword } from "./method2.component";
describe('CheckPassword', ()=>{
    it('Checks whether password contains minimum 2 capital,3 small,2 digits and 1 special symbol', ()=>{
        let password : any = "MarveLLous@123";
        let Ret = CheckPassword(password);
        expect(Ret).toBe(true);
    })
})