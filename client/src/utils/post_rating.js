let API_ENDPOINT = `http://localhost:5001/apis/v1/jokes/editJoke/`

export default function postRating (jokeId, rating) {
    fetch(`${API_ENDPOINT}${jokeId}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ Rating: rating })
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))
}