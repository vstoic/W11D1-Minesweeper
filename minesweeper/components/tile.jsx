import React from 'react';

export default class Tile extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            element: new Tile(props.board, props.pos)
        }
    }

    render() {
        return (
            <div>{this.state.element}</div>
        )
    }
}