import { useDispatchCalc, useCalc } from "../context/CalcContext"

const Select = () => {
  const dispatch = useDispatchCalc();
  const state = useCalc();
  const calculate = (e) => {
    dispatch({ type: e.target.value });
  };
  const CALC_OPTIONS = ["add", "minus", "divide", "multiply"];
  return (
    <select value={state.type} name="type" onChange={calculate}>
      {CALC_OPTIONS.map((type) => (
        <option key={type} value={type}>
          {type}
        </option>
      ))}
    </select>
  );
};

export default Select;
