export function ArrayAddition(add : number[])
{
    let sum = 0;
        let i=0;
        for(i=0;i<add.length;i++)
        {
          sum=sum+add[i];
        }
        return sum;
}