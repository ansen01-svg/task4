let API_ENDPOINT = `http://localhost:5001/apis/v1/jokes/deleteJoke/`

export default function deleteJoke (id) {
    fetch(`${API_ENDPOINT}${id}`, {
        method: 'DELETE',
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))
}