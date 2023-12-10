import React, {memo, useCallback} from 'react';
import Square from "./Square";
import ContainerRowBoard from "./ContainerRowBoard";

type PlayerType = "X" | "O";
function BoardPlay() {
    const [player, setPlayer] = React.useState<PlayerType>("X");
    const [board, setBoard] = React.useState(Array(9).fill(""));
    const [winner, setWinner] = React.useState<PlayerType | null>(null);
    const [winningSquares, setWinningSquares] = React.useState<number[]>([]);


    const isWinner = useCallback(
        (playerType : PlayerType, boardGame : PlayerType[]) => {
            const winConditions = [
                [0, 1, 2],
                [3, 4, 5],
                [6, 7 ,8],
                [0, 3, 6],
                [1, 4, 7],
                [2, 5, 8],
                [0,4,8],
                [2,4,6]
            ]
            const indexWin : number[] = findListIndexWin(playerType, boardGame);
            console.log("indexWin", indexWin)

            for(let i = 0; i < winConditions.length; i++) {
                const winCondition = winConditions[i];
                if(winCondition.every((index) => indexWin.includes(index))) {
                    return winCondition;
                }
            }
            return [];
        },[])

    const findListIndexWin = (playerType : PlayerType, boardGame : PlayerType[]) => {
        const listIndexWin : number[] = [];
        boardGame.forEach((value, index) => {
            if(value === playerType) {
                listIndexWin.push(index);
            }
        })
        return listIndexWin;
    }

    const onClick = useCallback(
        (index: number) => {
            if(board[index] !== "" || winner !== null) return;
            const boardCopy = [...board];
            boardCopy[index] = player;
            const winnerThisGame = isWinner(player, boardCopy);
            if(winnerThisGame.length > 0) {
                console.log("Winner is", player);
                console.log("Winner is", winnerThisGame);
                setWinningSquares(winnerThisGame);
                setWinner(player);
            }
            setPlayer(player === "X" ? "O" : "X");
            setBoard(boardCopy);
        },[board, isWinner, player, winner]
    )

    return (
        <>
            <div className={"ml-8 mt-6 "}>
                <ContainerRowBoard>
                    <Square value={board[0]} index={0} onClick={onClick} winningSquares={winningSquares}/>
                    <Square value={board[1]} index={1} onClick={onClick} winningSquares={winningSquares}/>
                    <Square value={board[2]} index={2} onClick={onClick} winningSquares={winningSquares}/>
                </ContainerRowBoard>
                <ContainerRowBoard>
                    <Square value={board[3]} index={3} onClick={onClick} winningSquares={winningSquares}/>
                    <Square value={board[4]} index={4} onClick={onClick} winningSquares={winningSquares}/>
                    <Square value={board[5]} index={5} onClick={onClick} winningSquares={winningSquares}/>
                </ContainerRowBoard>
                <ContainerRowBoard>
                    <Square value={board[6]} index={6} onClick={onClick} winningSquares={winningSquares}/>
                    <Square value={board[7]} index={7} onClick={onClick} winningSquares={winningSquares}/>
                    <Square value={board[8]} index={8} onClick={onClick} winningSquares={winningSquares}/>
                </ContainerRowBoard>
            </div>

        </>

    );
}

export default memo(BoardPlay);