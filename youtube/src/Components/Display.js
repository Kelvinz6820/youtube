import React, { Component } from 'react'
import VideoList from './VideoList'
export default class Display extends Component {
    render() {
        return (
            <div>
                {this.props.visibility ? <VideoList videos={this.props.videos}/> : ""}
            </div>
        )
    }
}
