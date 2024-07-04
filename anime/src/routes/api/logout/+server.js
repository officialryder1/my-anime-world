export async function GET({cookies}){
    // Clear the cookies
    cookies.delete('AuthorizationToken', {path: '/'})
    cookies.delete('refreshToken', {path: '/'})

    return new Response(null, {
        status: 302,
        headers:{
            location: '/login'
        }
    })

}