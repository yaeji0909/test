import { useState, useCallback, useRef, useEffect } from "react";
import styled from "styled-components";
import { getScrollTop } from "@lib/utils/utils.js";

const StickyBlock = styled.div``;

const Sticky = ({ className, top, children }) => {
  const [y, setY] = useState(0);
  const element = useRef(null);
  const [fixed, setFixed] = useState(false);

  const setup = useCallback(() => {
    if (!element.current) return;
    const pos = element.current.getBoundingClientRect();
    setY(pos.top + getScrollTop());
  }, []);

  const onScroll = useCallback(() => {
    const scrollTop = getScrollTop();
    const nextFixed = scrollTop + 112 > y;
    if (fixed !== nextFixed) {
      setFixed(nextFixed);
    }
  }, [fixed, y]);

  useEffect(() => {
    setup();
  }, [setup]);

  // register scroll event
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [onScroll]);

  return (
    <StickyBlock
      ref={element}
      className={className}
      style={{
        position: fixed ? "fixed" : undefined,
        top: fixed ? top : undefined,
      }}
    >
      {children}
    </StickyBlock>
  );
};

export default Sticky;
