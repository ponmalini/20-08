let arr=[1,2,2,3,4,2,5,6,7]
let c=0;
let a=2;
for(i=0;i<arr.length;i++)
  {
    if(arr[i]==a)
    {
      c++;
    }
  }
  if(c==0)
    {
      console.log("Element false")
    }  
  else
  {
   console.log("Element true \ number of arr :" +c)
  }


