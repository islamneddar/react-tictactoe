import React, {memo} from 'react';

interface SquareProps {
    value: string;
    index: number;
    onClick: (index: number) => void;
    winningSquares: number[]
}
function Square(props : SquareProps) {
    console.log("Square", props.index);
    const isWinningSquare = props.winningSquares.includes(props.index);
    return (
        <div key={props.index}
             className={` ${isWinningSquare ? "bg-indigo-500" : ""} border-2 border-solid w-10 h-10 flex items-center justify-center`}
             onClick={() => {
                 props.onClick(props.index);
             }}
        >
            <p className={""}>{props.value}</p>
        </div>
    );
}

export default memo(Square);