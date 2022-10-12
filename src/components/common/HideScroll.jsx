import * as React from 'react';


const { useLayoutEffect } = React;

/**
 * Hides body scrollbar on mount
 * Revert on unmount
 */
const HideScroll = ({props}) => {
  useLayoutEffect(() => {
    const { overflowX, overflowY } = getComputedStyle(window.document.body);
    const prevStyles = {
      overflowX,
      overflowY,
    };
    window.document.body.style.overflowX = 'hidden';
    window.document.body.style.overflowY = 'hidden';
    return () => {
      window.document.body.style.overflowX = prevStyles.overflowX;
      window.document.body.style.overflowY = prevStyles.overflowY;
    };
  }, []);
  return null;
};

export default HideScroll;