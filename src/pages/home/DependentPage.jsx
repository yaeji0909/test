import axios from "axios";
import { useQuery } from "react-query";

const getPost = async ({ queryKey }) => {
  const { data } = await axios.get(
    `http://localhost:5000/posts/${queryKey[1]}`
  );
  return data;
};

const getUser = async ({ queryKey }) => {
  const { data } = await axios.get(
    `http://localhost:5000/users/${queryKey[1]}`
  );
  return data;
};

const DependentPage = () => {
  const { data: user } = useQuery(["user", "kkiri@example.com"], getUser);
  // 하단의 useQuery는 첫 번째 useQuery에 의존적이기 때문에 dependent queries라고 함.
  // 동기적으로 요청을 수행해야 할 때 유용하게 사용가능.
  const { data: post } = useQuery(["post", user?.postId], getPost, {
    enabled: !!user?.postId,
    // user객체의 postId가 존재하면 enabled가 ture이고 postId가 존재하지 않으면 false
    // enabled에 따라 쿼리가 활성화되고, 비활성화되는 옵션임.
  });

  console.log({ user });
  console.log({ post });

  return <div>Dependent Queries Page</div>;
};

export default DependentPage;
