import GrandChild from "./GrandChild";

const Child = ({ value }) => (
  <div style={{ border: "1px solid black", padding: 10 }}>
    <h3>子コンポーネント</h3>
    <GrandChild value={value} />
  </div>
);

export default Child;
