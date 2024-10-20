import connectDB from "@/config/database";
import Message from "@/models/Message";
import { getSessionUser } from "@/utils/getSessionUser";

export const dynamic='force-dynamic';

//PUT/api/messages:id

export const PUT =async(request , {params})=>{
 try {
    await connectDB();
    const {id}=params;
    const sessionUser =await getSessionUser();
        
        if(!sessionUser || !sessionUser.user){
            return new Response(JSON.stringify('User Id is required') ,{status:401});
        };

        const {userId}=sessionUser;  

        const message=await Message.findById(id);
        if(!message) return new Response('Message Not found' , {status:404});

        //Verify ownership
        if(message.recipient.toString() !=userId){
            return new Response('Unauthorized ' , {status:401});
        }
        // console.log(123)
        // console.log(message)
        //update meassage to read/unread depending on the current status
        message.read=!message.read;
        await message.save();

        return new Response(JSON.stringify(message) , {status:200});

 } catch (error) {
    console.log(error);
    return new Response('Somthing went wrong' , {status:500});
    
 }
}