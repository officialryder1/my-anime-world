import { redirect } from '@sveltejs/kit';

export const load = ({locals}) => {
    const user = locals.user;
    console.log(user)
    
    if(!user){
        throw redirect(302, '/login')
    }
    return{
        user
    }

    
}

