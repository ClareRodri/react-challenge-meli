export default function getProduct({ sKeyword = "" } = {}) {
    const offset = 0;
    const limit = 4;
    const apiURL = `/api/items?q=${sKeyword}&offset=${offset}&limit=${limit}`;
    return fetch(apiURL)
        .then(rest => rest.json())
        .then(resp => {
            let { author, items, categories } = resp;
            items = items || [];
            categories = categories || [];
            return { author, items, categories };
        });
}