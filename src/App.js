import './App.css'

import {useSelector, useDispatch} from "react-redux";

export default function App() {
    const number = useSelector(({number}) => number)
    const dispatch = useDispatch()

    const dispatchF = (e) => {
        e.preventDefault()
        dispatch({type: e.target[0].name, payload: parseInt(e.target[0].value) || 0})
    }

    return (
        <div className={'father'}>
            <h1>{number}</h1>
            <hr/>

            <div className="flex">

                <div className="">
                    <button onClick={() => dispatch({type: "DEC"})} className={'btn'}>decrement</button>
                    <hr/>
                    <form onSubmit={dispatchF}>
                        <input type="number" name="DEC_CUSTOM"/>
                        <button className={'btn'}>decrement custom</button>
                    </form>
                </div>

                <hr/>
                <div className="">
                    <button onClick={() => dispatch({type: "RESET"})} className={'btn'}>reset</button>
                </div>
                <hr/>

                <div className="">
                    <button onClick={() => dispatch({type: "INC"})} className={'btn'}>increment</button>
                    <hr/>
                    <form onSubmit={dispatchF}>
                        <input type="number" name="INC_CUSTOM"/>
                        <button className={'btn'}>increment custom</button>
                    </form>
                </div>

            </div>
        </div>
    );
}