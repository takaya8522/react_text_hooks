import { useCounter } from "../context/CounterContext";

const CounterResult = () => {
  const state = useCounter();
  return <h3>{state}</h3>;
};

export default CounterResult;