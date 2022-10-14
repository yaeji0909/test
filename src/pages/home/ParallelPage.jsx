import axios from "axios";
import { useQueries } from "react-query";

const getPost = async (query) => {
  console.log(query);
  const { data } = await axios.get(
    `http://localhost:5000/posts/${query.queryKey[1]}`
  );

  return data;
};

const ParallelPage = () => {
  useQueries([
    { queryKey: ["post", 1], queryFn: getPost },
    { queryKey: ["post", 2], queryFn: getPost },
    { queryKey: ["post", 3], queryFn: getPost },
  ]);

  return <div>Parallel Queries Page</div>;
};

export default ParallelPage;

// parallel queries는 비동기적 , dependent queries는 동기적
//
