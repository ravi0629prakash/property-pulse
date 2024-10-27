import { apiDomain } from "@/constants/constants";

async function fetchProperty(id){
    try{

      // if(!apiDomain)
      // {
      //   return null;
      // }
      
      const res =await fetch(`/api/properties/${id}`,{cache:'no-store'});
       
      if(!res.ok)
      {
        throw new Error('Failed to fetch Data');
      }
      const data = await res.json()
      return data;
  
    }
    catch(error)
    {
     console.log(error);
     return null;
    }
  
  }
   
  export { fetchProperty}; 