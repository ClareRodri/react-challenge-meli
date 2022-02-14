export default function getProductById(id = '') {
    const apiURL = `/api/items/${id}`;
    return fetch(apiURL)
        .then(rest => rest.json())
        .then(resp => {
            const { author, item } = resp;
            return { author, item };
        });
}