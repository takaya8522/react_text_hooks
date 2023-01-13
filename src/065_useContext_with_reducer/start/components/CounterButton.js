const CounterButton = ({calcType, step, onClick}) => {
    
    return <button onClick={onClick}>{calcType}{step}</button>
}
export default CounterButton;