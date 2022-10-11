import { useRecoilState } from "recoil";
import { counting } from "./store";

const Test = () => {
  const [count, setCount] = useRecoilState(counting);
  const handleIncrease = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div>
      <span>{count}</span>
      <button onClick={handleIncrease}>increase</button>
    </div>
  );
};

export default Test;
