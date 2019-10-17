const BASE_URL = 'http://localhost:3000'
const CHATROOMS_URL = `${BASE_URL}/chatrooms`


const resToJSON = res => res.json()


const get = url => {
    return fetch(url).then(resToJSON)
}

const post = (url, data) => {
    const config = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(data)
    }
    return fetch(url, config).then(resToJSON)
}

const patch = (url, id, data) =>{
    const config = {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
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


export default {
    BASE_URL,
    CHATROOMS_URL,
    get,
    post,
    patch,
    destroy
}