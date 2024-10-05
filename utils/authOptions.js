import GoogleProvider from 'next-auth/providers/google';

export const authOptions={
        providers: [
          GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            authorization: {
                params: {
                  prompt: "consent",
                  access_type: "offline",
                  response_type: "code"
                }
              } 
          })
        ],
        callbacks:{
            //Invoked on succesful sigin 
            async signIn({profile})
            {
                // connect to database
                //check if user exists
                // If not , then add user to database
                // return true to allow sign in
            },
            async session({session})
            {
                //get user from database
                //assign the user id to the database
                // return session
            }
        }
};