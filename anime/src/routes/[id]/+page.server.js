export const load = async({fetch, params}) =>{
    
    const response = await fetch(`api/anime/${params.id}`)
    const anime = await response.json()
    let error = ""

    if(!response){
        console.error(404, "🔥 Anime don't exist");
        error = "404, 🔥 Anime don't exist"
    }
    return{
        anime,
        error
    }

}