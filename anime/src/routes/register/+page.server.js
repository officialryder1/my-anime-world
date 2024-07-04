import { fail, redirect } from '@sveltejs/kit';
import { createUser  } from '$lib/user.model';

export const actions = {
    default: async (event) =>{
        const formData = Object.fromEntries(await event.request.formData());

        console.log(formData)
        // Verify that we have an email and a password
        if(!formData.email || !formData.password){
            return fail(400, {
                error: "Missing an email or password"
            });
        }

        const { email, password} = formData;

        // Create a new user
        const {error} = await createUser(email, password)

        console.log(error)
        // if there was an error, return an invalid response
        if(error){
            return fail(500, {
                error,
                message: "error"
            })
        }

        throw redirect(302, '/')
    }
}