import CounterResult from "./CounterResult"
import CounterButton from "./CounterButton"

const Counter = ({ state, countUp, countDown }) => {
    return (
        <>
            <CounterResult state={state} />
            <CounterButton step={2} calcType="+" onClick={countUp}/>
            <CounterButton step={2} calcType="-" onClick={countDown}/>
        </>
    )
}
export default Counter;