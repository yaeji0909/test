import styled from "styled-components";

const highlightedText = (text, query) => {
  if (query !== "" && text.includes(query)) {
    const parts = text.split(new RegExp(`(${query})`, "gi"));

    return (
      <>
        {parts.map((part, index) =>
          part.toLowerCase() === query.toLowerCase() ? (
            <mark key={index}>{part}</mark>
          ) : (
            part
          )
        )}
      </>
    );
  }

  return text;
};

const HighlightKeyword = ({ title, arr }) => {
  return <Highlight>{highlightedText(title, arr)}</Highlight>;
};

const Highlight = styled.div`
  color: tomato;
`;
export default HighlightKeyword;
