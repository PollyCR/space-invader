const BASE_URL = 'http://localhost:3000'
const BASE_WS_URL = "http://localhost:3000/cable"
const CHATROOMS_URL = `${BASE_URL}/chatrooms`
const MESSAGES_URL = `${BASE_URL}/messages`

const headers = (more = {}) => ({
    "Content-Type": "application/json",
    "Accept": "application/json",
    ...more
})

const resToJSON = res => res.json()


const get = url => {
    return fetch(url).then(resToJSON)
}

const post = (url, data) => {
    const config = {
        method: "POST",
        headers: headers(),
        body: JSON.stringify(data)
    }
    return fetch(url, config).then(resToJSON)
}

const patch = (url, id, data) =>{
    const config = {
        method: "PATCH",
        headers: headers(),
        body: JSON.stringify(data)
    }
    return fetch(`${url}/${id}`, config).then(resToJSON)
}

const destroy = (url, id) =>{
    const config = {
        method: "DELETE",
        headers: {
            "Accept": "application/json"
        }
    }
    return fetch(`${url}/${id}`, config).then(resToJSON)
}

const postMessage = data => {
    return post(MESSAGES_URL, data)
}


export default {
    BASE_URL,
    BASE_WS_URL,
    CHATROOMS_URL,
    get,
    post,
    patch,
    destroy,
    postMessage
}