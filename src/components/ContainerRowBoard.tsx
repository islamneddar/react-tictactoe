import React, {memo} from 'react';

interface ContainerRowBoardProps {
    children?: React.ReactNode;
}
function ContainerRowBoard(props: ContainerRowBoardProps) {
    return (
        <div className={"flex"}>
            {props.children}
        </div>

    );
}

export default memo(ContainerRowBoard);