export function CheckPassword(password : any)
{
    let capital = 0;
    let small = 0;
    let digit = 0;
    let symbol = 0;
    let i = 0;
    let value;
    for(i=0;i<password.length;i++)
    {
        if(password[i]==password[i].toUpperCase())
        {
            capital++;
        } 
        if(password[i]==password[i].toLowerCase())
        {
            small++;
        } 
        if(password[i].match(/[0-9]/))
        {
            digit++;
        } 
        if(password[i].match(/[!"#$%&'()*+,-.:;<=>?@[\]^_`{|}~]/))
        {
            symbol++;
        } 
    }
    if(capital>=2 && small>=3 && digit>=2 && symbol>=1)
    {
        value = true;
    }
    return value
}