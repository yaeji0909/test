import { useSetRecoilState } from "recoil";
import { counting } from "./atom";

const Test = () => {
  const [count, setCount] = useSetRecoilState(counting);
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
