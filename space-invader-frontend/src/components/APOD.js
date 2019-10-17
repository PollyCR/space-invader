import React from 'react'
import { Image } from 'semantic-ui-react'

class APOD extends React.Component {
    state= {
        apod: []
    }

    componentDidMount() {
        this.renderPhoto()
    }

    renderPhoto = () => {
        fetch("http://localhost:3000/api/APOD").then(resp=>resp.json()).then(photo=> this.setState({apod:photo}))
    }

    render() {
        return <div className = "APOD"><Image src = {this.state.apod.hdurl} alt = {this.state.apod.date} size = "big"/>
        <p>{this.state.apod.explanation}</p></div>
    }
}

export default APOD