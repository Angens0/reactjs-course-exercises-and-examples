import React, { Component } from 'react'
import Cell from './Cell'
import './Board.css'

/** Game board of Lights out.
 *
 * Properties:
 *
 * - nrows: number of rows of board
 * - ncols: number of cols of board
 * - chanceLightStartsOn: float, chance any cell is lit at start of game
 *
 * State:
 *
 * - hasWon: boolean, true when board is all off
 * - board: array-of-arrays of true/false
 *
 *    For this board:
 *       .  .  .
 *       O  O  .     (where . is off, and O is on)
 *       .  .  .
 *
 *    This would be: [[f, f, f], [t, t, f], [f, f, f]]
 *
 *  This should render an HTML table of individual <Cell /> components.
 *
 *  This doesn't handle any clicks --- clicks are on individual cells
 *
 **/

class Board extends Component {
    static defaultProps = {
        nrows: 5,
        ncols: 5,
        chanceLightStartsOn: 0.25
    }

    /** create a board nrows high/ncols wide, each cell randomly lit or unlit */
    createBoard = () => {
        const { nrows, ncols, chanceLightStartsOn } = this.props
        const board = Array.from(
            { length: nrows },
            () => Array.from({ length: ncols }, () => {
                return Math.random() < chanceLightStartsOn
            })
        )
        return board
    }

    state = {
        hasWon: false,
        board: this.createBoard()
    }

    /** handle changing a cell: update board & determine if winner */
    flipCellsAround = coord => {
        const { ncols, nrows } = this.props
        const [y, x] = coord.split("-").map(Number)

        const flipCell = (board, y, x) => {
            // if this coord is actually on board, flip it
            if (x >= 0 && x < ncols && y >= 0 && y < nrows) {
                board[y][x] = !board[y][x]
            }
        }

        this.setState(state => {
            // deep clone
            const board = JSON.parse(JSON.stringify(state.board))
            flipCell(board, y, x)
            flipCell(board, y - 1, x)
            flipCell(board, y + 1, x)
            flipCell(board, y, x - 1)
            flipCell(board, y, x + 1)

            const hasWon = board.every(row => row.every(value => !value))

            return { board, hasWon }
        })
    }

    renderBoard = () => this.state.board.map((columns, y) => {
        return (
            <tr key={y}>
                {columns.map((value, x) => {
                    return <Cell
                        key={`${y}-${x}`}
                        coords={`${y}-${x}`}
                        isLit={value}
                        flipCellsAroundMe={this.flipCellsAround}
                    />
                })}
            </tr>
        )
    })

    /** Render game board or winning message. */
    render() {
        // https://codepen.io/Trinca/pen/NAvpWa
        const { hasWon } = this.state

        return (<div>
            <div className={`Board-title${hasWon ? ' winner' : ''}`}>
                <span className="neon">{hasWon ? 'You' : 'Lights'}</span>
                <span className="flux">{hasWon ? 'Win!' : 'Out'}</span>
            </div>
            {!hasWon && <table className='Board'>
                <tbody>
                    {this.renderBoard()}
                </tbody>
            </table>}
        </div>)
    }
}

export default Board
