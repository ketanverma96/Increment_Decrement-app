import React, {useState , useEffect} from "react";

import './style.css';

const UseState = () => {
    const [myNum, setMyNum]= useState(0);

    // useEffect (() => {
    //         document.title=`chats (${myNum})`
    // });

    return(
        <div className="center_div">
            <p> {myNum} </p>
            <div className="button2" onClick={() => setMyNum(myNum + 1)}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                INCR
            </div>
            <div className="button2" onClick={() => (setMyNum > 0 ? (myNum - 1): setMyNum(0))}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                DCR
            </div>
        </div>
    );
};

export default UseState;