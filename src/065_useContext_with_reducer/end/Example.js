import Counter from "./components/Counter";
import { CounterProvider } from "./context/CounterContext";
// POINT useContext x useReducer
const Example = () => {
  return (
    <CounterProvider>
      <Counter />
    </CounterProvider>
  );
};

export default Example;
