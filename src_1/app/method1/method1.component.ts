export  function CountCapital(name : string)
{
   
       let count=0;
       let i=0;
       for(i=0;i<name.length;i++)
       {
          if(name[i]==name[i].toUpperCase())
          {
            count++;
          }
       }
       return count;
    
} 