import React, { FC, useEffect, useRef, useState } from 'react'
import { Colors } from '../models/Colors';
import { Player } from '../models/Player'

interface TimerProps {
    currentPlayer : Player | null;
    restart :()=> void;
}

export const Timer: FC<TimerProps> = ({currentPlayer, restart}) => {
    const [blackTime, setBlackTime] = useState(300);
    const [whiteTime, setWhiteTime] = useState(300);
    const timer = useRef<null | ReturnType<typeof setInterval>> (null);

    useEffect(() => {
      startTimer()
    }, [currentPlayer])
    
    function startTimer(){
        if(timer.current){
            clearInterval(timer.current)
        }
        const callback = currentPlayer?.color === Colors.WHITE ? decrementWhiteTimer : decrementBlackTimer
        timer.current = setInterval(callback,1000)
    }

    const handleRestart=()=>{
        setWhiteTime(300);
        setBlackTime(300);
        restart();
    }

    function decrementBlackTimer(){
        setBlackTime(prev=>prev-1)
    }

    function decrementWhiteTimer(){
        setWhiteTime(prev=>prev-1)
    }

  return (
    <div>
        <div>
            <button onClick={handleRestart}>Restart game</button>
        </div>
        <h2>Black - {blackTime}</h2>
        <h2>White - {whiteTime}</h2>
    </div>
  )
}

