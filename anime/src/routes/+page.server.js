let requestCount = 0;
const MAX_REQUESTS = 10; // Example limit, adjust according to API documentation
const TIME_WINDOW = 60000; // 1 minute in milliseconds
let resetTime = Date.now() + TIME_WINDOW;

const makeRequest = async (url) => {
    // Check if request count exceeds the limit and wait if necessary
    if (requestCount >= MAX_REQUESTS) {
        const currentTime = Date.now();
        if (currentTime < resetTime) {
            const waitTime = resetTime - currentTime;
            console.log(`Rate limit exceeded. Waiting for ${waitTime} ms`);
            await new Promise(resolve => setTimeout(resolve, waitTime));
        }
        // Reset the request count and reset time
        requestCount = 0;
        resetTime = Date.now() + TIME_WINDOW;
    }

    // Make the request
    const response = await fetch(url);

    // Increment the request count
    requestCount++;

    // Handle the response
    if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
    }

    return response.json();
};


export const load = async ({ fetch, url }) => {
    const page = Number(url.searchParams.get('page')) || 1;
    const limit = 25;

    try {
        const response = await fetch(`/api/anime?page=${page}&limit=${limit}`);
        const anime = await response.json()
        return {
            anime,
            pagination: anime.pagination,
            page: Number(page),
            limit
        };
    } catch (error) {
        console.error('Failed to fetch anime data:', error);
        return {
            error: 'Failed to load anime data. Please try again later.'
        };
    }
};