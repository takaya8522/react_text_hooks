// POINT Contextの練習問題
import Input from "./components/Input"
import Select from "./components/Select"
import Result from "./components/Result.js"
import { CalcProvider } from "./context/CalcContext";

const Example = () => {
  
  return (
    <CalcProvider>
      <Input name="a"/>      
      <Input name="b" />      
      <Select />
      <Result />      
    </CalcProvider>
  );
};

export default Example;
