let url = "https://api.jikan.moe/v4/anime"


export async function GET(){
    const response = await fetch(url)
 
    return new Response(response.body);
}