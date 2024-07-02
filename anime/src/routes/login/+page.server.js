import { ENDPOINT } from '$env/static/private'


console.log(ENDPOINT)
export const actions = {

    default: async ({ request }) => {
        const formData = await request.formData();
        const email = formData.get('email')
        const password = formData.get('password')
        const response = await fetch(ENDPOINT,{
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email,
                password
            })
        })
        if(!response.ok){
            console.error("Login Failed")
        }

        const data = await response.data();
        document.cookie = `access_token=${data.token}; path=/`;
        document.cookie = `refresh_token=${data.refresh_token}; path=/; HttpOnly`;
        console.log(data)
        return{
            status: 200,
            body: data,
            redirect: '/'
        }
        
    }
}