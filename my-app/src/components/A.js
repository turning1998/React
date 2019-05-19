import React, { Component } from 'react';

class test extends Component {
    render() {
     
        return (
            <div>
            {this.props.match.params.id}
            </div>
        );
    }
}

export default test;