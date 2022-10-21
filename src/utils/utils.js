// import distanceInWordsToNow from "date-fns/formatDistanceToNow";
// import format from "date-fns/format";
// import koLocale from "date-fns/locale/ko";

// export const formatDate = (date) => {
//   const d = new Date(date);
//   const now = Date.now();
//   const diff = now - new Date(date).getTime();
//   // less than 5 minutes
//   if (diff < 1000 * 60 * 5) {
//     return "방금 전";
//   }
//   if (diff < 1000 * 60 * 60 * 24) {
//     return distanceInWordsToNow(d, { addSuffix: true, locale: koLocale });
//   }
//   if (diff < 1000 * 60 * 60 * 36) {
//     return "어제";
//   }
//   if (diff < 1000 * 60 * 60 * 24 * 7) {
//     return distanceInWordsToNow(d, { addSuffix: true, locale: koLocale });
//   }
//   return format(d, "yyyy년 M월 d일");
// };

// export const getScrollTop = () => {
//   if (!document.body) return 0;
//   const scrollTop = document.documentElement
//     ? document.documentElement.scrollTop || document.body.scrollTop
//     : document.body.scrollTop;
//   return scrollTop;
// };

// export const getScrollBottom = () => {
//   if (!document.body) return 0;
//   const { scrollHeight } = document.body;
//   const { innerHeight } = window;
//   const scrollTop = getScrollTop();
//   return scrollHeight - innerHeight - scrollTop;
// };

// export function createReducer(handlers, initialState) {
//   return (state, action) => {
//     const handler = handlers[action.type];
//     if (!handler) return state;
//     return handler(state, action);
//   };
// }

// export function updateKey(state, key, value) {
//   return {
//     ...state,
//     [key]: value,
//   };
// }

// export function detectJSDOM() {
//   if (typeof navigator === "undefined") return false;
//   return navigator.userAgent.includes("jsdom");
// }

// export const escapeForUrl = (text) => {
//   return text
//     .replace(
//       /[^0-9a-zA-Zㄱ-힣.\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf -]/g,
//       ""
//     )
//     .trim()
//     .replace(/ /g, "-")
//     .replace(/--+/g, "-");
// };

// export function sleep(ms) {
//   return new Promise((resolve) => setTimeout(resolve, ms));
// }

// export function loadScript(url) {
//   return new Promise((resolve, reject) => {
//     const script = document.createElement("script");
//     script.onload = function onload() {
//       resolve(null);
//     };
//     script.onerror = function onerror() {
//       reject();
//     };
//     script.src = url;
//     if (!document || !document.head) return;
//     document.head.appendChild(script);
//   });
// }

// export const ssrEnabled = process.env.REACT_APP_SSR === "enabled";

export const objectToParam = (obj, deleteEmpty) => {
  let param = "?";
  for (let key in obj) {
    if (!obj[key] && deleteEmpty) continue;
    if (param !== "?") {
      param += "&";
    }
    param += key + "=" + obj[key];
  }
  return param === "?" ? "" : param;
};
