const url = "https://api.jikan.moe/v4/anime"
export const GET = async({params}) =>{

    const response = await fetch(`${url}/${params.id}`)
    return new Response(response.body)
}