import { db } from '../src/lib/db';
import jwt from 'jsonwebtoken';
import { parse } from 'cookie'; // Assuming 'cookie' package is used for parsing cookies

export const handle = async ({ event, resolve }) => {
    const { headers } = event.request;
    const cookies = parse(headers.get("cookie") ?? "");
    
    if (cookies.AuthorizationToken) {
        // Remove Bearer prefix
        const token = cookies.AuthorizationToken.split(" ")[1];


        try {
            const jwtUser = jwt.verify(token, 'secret');
           
            if (typeof jwtUser === "string") {
                throw new Error("Something went wrong");
            }

            const user = await db.user.findUnique({
                where: {
                    id: jwtUser.id,
                },
            });

            
            if (!user) {
                throw new Error("User not found");
            }

            const sessionUser = {
                id: user.id,
                email: user.email
            };
            
            event.locals.user = sessionUser;
           
        } catch (error) {
            console.error(error);
        }
        
    }

    
    
    return await resolve(event);
};