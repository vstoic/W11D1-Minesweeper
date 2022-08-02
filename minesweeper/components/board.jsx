import React from "react";
import Tile from './tile';

export default class Board extends React.Component{
    constructor(props){
        super(props)
        // this.state = {
        //     board: this.props.board
        // }
    }


    render() {
        return (
            <div>
                {this.props.board.grid.map((row, i) => {
                    return <div className="row" key={row+i}>
                        {row.map((tile, j) => {
                            return <Tile tile={tile} key={tile+j} className="tile"/>
                        })}
                    </div>
                })}
            </div>
        )
    }
}