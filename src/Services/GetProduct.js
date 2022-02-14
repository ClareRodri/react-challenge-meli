export default function getProduct({ sKeyword = "" } = {}) {
    const apiURL = `/api/items?q=${sKeyword}`;
    return fetch(apiURL)
        .then(rest => rest.json())
        .then(resp => {
            const { author, items, categories } = resp;
            return { author, items, categories };
        });
}