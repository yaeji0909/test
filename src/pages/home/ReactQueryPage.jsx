import { useQuery } from "react-query";
import axios from "axios";
import { Fragment } from "react";
import { Link } from "react-router-dom";

const getPosts = async (query) => {
  console.log(query);
  const { data } = await axios.get("http://localhost:5000/posts");
  return data;
};

// const getPosts2 = async () => {
//   axios.get("http://localhost:5000/posts");
// };
// 위와 같이 작성시 ssr직렬화 중 에러가 발생하거나 data구조가 data.data로 이뤄저 구조분해 해 반환하는게 필요함.

const ReactQueryPage = () => {
  const {
    data: posts,
    isLoading,
    isError,
    error,
  } = useQuery("posts", getPosts, {
    // stale 상태란 refetch가 이루어질 수 있는 상태를 말함. staleTime은 기본 값이 0이며, 이를 5000ms(5초)로 변경하는 코드
    staleTime: 5 * 1000,
    refetchOnMount: true,
    refetchOnWindowFocus: true,
  });
  // useQuery("queryKey",queryFn) - array 혹은 string
  // queryFn은 Promise를 반환하는 함수
  // 세번째 인자로는 옵션을 설정해 줄 수 있음 ex)promise.all비슷한..?
  //   userQuery함수가 반환하는 값 중 data에는 resolve시 data가 들어감.
  // 실패시에는 isError가 true가 됨.

  if (isError) {
    return <div>{error.message}</div>;
  }

  return (
    <>
      <Link to='parallel'>Parallel Queries Page</Link>
      <Link to='dependent'>Dependent Queries Page</Link>

      <br />

      <div>
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          posts?.map((post) => (
            <Fragment key={post.id}>
              <div>id: {post.id}</div>
              <div>제목: {post.title}</div>
              <div>작성자: {post.author}</div>
              <div>내용: {post.description.slice(0, 100)}...</div>
              <hr />
            </Fragment>
          ))
        )}
      </div>
    </>
  );
};

export default ReactQueryPage;

// stale상태와 fresh 상태 -> fresh는 이미 신선한 상태이니까 재요청을 해서 데이터를 교체할 필요가 없고, stale은 신선하지 않은 상태이니까 재요청을 해서 데이터를 교체해줘야 하는 상태라고 생각하자.
// fetching은 fetch가 진행 중인 상태를 말하며, inactive는 caching과 관련있는 상태
