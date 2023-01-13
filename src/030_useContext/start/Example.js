import Child from "./components/Child";
import { createContext } from "react";
export const MyContext = createContext('hello');

const Example = () => {
  return <Child />;
};

export default Example;
