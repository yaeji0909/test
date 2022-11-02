// import { Helmet } from "react-helmet-async";
// import SearchInput from "../../components/search/SearchInput";
// import styled from "styled-components";
// import { MdOutlineArrowBackIosNew } from "react-icons/md";
// import { MdCancel } from "react-icons/md";
// import { useCallback, useState, useEffect } from "react";
// import { useInfiniteQuery } from "react-query";
// import { busApi } from "@api/BusServiceApi";
// import busStop from "@static/images/bus-stop.png";
// import SearchResult from "../../components/search/SearchResult";
// import { useInView } from "react-intersection-observer";

// function SearchPage() {
//   const [searchKeyword, setSearchKeyword] = useState("");
//   const [searchResult, setSearchResult] = useState([]);
//   const [ref, inView] = useInView();

//   const { data, fetchNextPage, isFetchingNextPage, refetch } = useInfiniteQuery(
//     ["busService", searchKeyword],
//     ({ pageParam = 0 }) => busApi.searchBusStop(pageParam, searchKeyword),
//     {
//       getNextPageParam: (lastPage) =>

//       onSuccess: (data) => {
//         console.log(data);
//       },
//       retry: false,
//     }
//   );
//   useEffect(() => {
//     if (inView) {
//       fetchNextPage();
//     }
//   }, [inView]);

//   return (
//     <div>
//       {/* <div />
//       {data.pages?.map((page, index) => (
//         <div key={index}>
//           {page.posts.map((post) =>
//             searchKeyword === "postings" ? (
//               <div key={post.posting_id} post={post}></div>
//             ) : null
//           )}
//         </div>
//       ))}
//       {isFetchingNextPage ? (
//         <div>로딩중입니다1!!!!</div>
//       ) : (
//         <div ref={ref} style={{ height: "100px" }}></div>
//       )} */}
//     </div>
//   );
//   // useEffect(() => {
//   //   if (isSuccess) {
//   //     const searchResultArray = busStopInfo.map((stopInfo) => [
//   //       stopInfo.name,
//   //       stopInfo.no,
//   //     ]);
//   //     console.log(searchResultArray);
//   //     editBusStopData(searchResultArray);
//   //   }
//   // }, [busStopInfo]);

//   // const onSearch = useCallback((keyword) => {
//   //   console.log(keyword);
//   //   setSearchKeyword(keyword);
//   // }, []);

//   // const editBusStopData = (searchResult) => {
//   //   setSearchResult(searchResult);
//   //   console.log(typeof searchResult);
//   // };
// }

// const SearchInputBox = styled.div`
//   display: flex;
//   align-items: center;
//   padding: 1rem;
//   width: 100%;
//   border-bottom: 1px solid #8c8d96;
//   position: relative;
//   svg {
//     color: #8c8d96;
//     font-size: 1.5rem;
//   }
//   .cancel-btn {
//     color: #a6a6a6;
//     font-size: 1.5rem;
//     position: absolute;
//     right: 3%;
//   }
// `;

// const SearchContentsBox = styled.ul`
//   width: 100%;
// `;

// const BeforeSearch = styled.div`
//   position: absolute;
//   left: 25%;
//   top: 30%;
// `;

// export default SearchPage;
