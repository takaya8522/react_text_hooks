import Counter from "./components/Counter";
import { CounterProvider } from "./context/CounterContext";

const Example = () => {
  return (
    <CounterProvider>
      <Counter/>
    </CounterProvider>
  );
};

export default Example;
