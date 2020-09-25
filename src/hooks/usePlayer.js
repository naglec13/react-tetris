import {useState} from 'react'

import {randomTetromino} from '../tetrominos'

export function usePlayer() {
    const [player, setPlayer] = useState({
        pos:{x: 0, y: 0},
        randomTetromino: randomTetromino().shape,
        collided: false
    })
    return [player]
}