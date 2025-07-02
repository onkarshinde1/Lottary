import { useState } from "react"
import "./Lottary.css"
import { genTicket , sum } from "./helper";

export default function Lottary() {
    let [ticket, setTicket] = useState(genTicket(3));
    let isWinning = sum(ticket) === 15;

    let newTicket = () =>{
        setTicket(genTicket(3));
    }

    return (
        <div >
            <h1>Lottary Game!!</h1>
            <div className="lottary">
                <span>{ticket[0]}</span>
                <span>{ticket[1]}</span>
                <span>{ticket[2]}</span>
            </div>
            <br />
            <button onClick={newTicket}>click to genTicket</button>
            <br />
            <h2>{isWinning  && "Congratulations, You Won The  Game"}</h2>
            
        </div>
    )
}