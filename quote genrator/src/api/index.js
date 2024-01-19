let api_url = "https://api.adviceslip.com/advice";

async function quoteGenrator() {
    try {
        const response = await fetch(api_url);
        const data = await response.json();
        return data.slip.advice;

    } catch (error) {
        console.log(error);

    }

}

export default quoteGenrator;