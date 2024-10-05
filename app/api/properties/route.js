import connectDB from "@/config/database";
import Property from "@/models/Property";
import { getSessionUser } from "@/utils/getSessionUser";
import { authOptions } from "@/utils/authOptions";
//GET /a[i/properties]
export const GET = async(request)=>{
  
    try{
      await connectDB();

      const properties=await Property.find({});
      
      return new Response(JSON.stringify(properties), {status:200});
    }
    catch(error)
    {
     console.log(error);
     return new Response('Something Went Wrong', {status:500});
    } 
};

export const POST =async(request)=>{
  try {
    await connectDB();
    

    const sessionUser=await getSessionUser() ;
    if(!sessionUser || !sessionUser.userId){
      return new Response('User ID is Required',{status:401});
    }

    const {userId}=sessionUser;

    const formData=await request.formData();
    
    //Acess all values from amenities and images
    const amenities=formData.getAll('amenities');
    const images=formData.getAll('images') .filter((image)=>image.name!=='');

    //Create Property DATA oBJECT FOR DATABASE
    const propertyData={
      type:formData.get('type'),
      name:formData.get('name'),
      description:formData.get('description'),
      location:{
        street:formData.get('location.street'),
        city:formData.get('location.city'),
        state:formData.get('location.state'),
        zipcode:formData.get('location.zipcode'),
      },
      beds:formData.get('beds'),
      baths:formData.get('baths'),
      square_feet:formData.get('square_feet'),
      amenities,
      rates:{
        weekly:formData.get('rates.weekly'),
        monthly:formData.get('rates.monthly'),
        nightly:formData.get('rates.nightly'),
      },
      seller_info:{
        name:formData.get('seller_info.name'),
        email:formData.get('seller_info.email'),
        phone:formData.get('seller_info.phone'),
      },
      owner :userId, 
      // images
    }
    
     const newProperty=new Property(propertyData);
     await newProperty.save();

     return Response.redirect(`${process.env.NEXTAUTH_URL}/properties/${newProperty._id}`);

    return new Response(JSON.stringify({message:'Sucess'}),
    {status:200});
  } catch (error) {
    return new Response('Failed To Add Property', {status:500 });
  }
};

