// POINT useContextとstate
import { createContext, useState } from "react";
import Child from "./component/Child";
import OtherChild from "./component/OtherChild";

export const MyContext = createContext();

const Example = () => {
  const stateAndSetter = useState(0);
  // stateAndSetter = [ state, setState ]
  return (
    <MyContext.Provider value={stateAndSetter}>
      <Child />
      <OtherChild />
    </MyContext.Provider>
  );
};

export default Example;
