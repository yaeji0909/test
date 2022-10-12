import { useEffect, useCallback, useRef } from 'react';
import { getScrollBottom } from '../../lib/utils';


const PaginateWithScroll = ({
  cursor,
  onLoadMore,
}) => {
  const lastCursor = useRef(null);

  const loadMore = useCallback(() => {
    if (!cursor) return;
    if (cursor === lastCursor.current) return;
    onLoadMore(cursor);
    lastCursor.current = cursor;
  }, [cursor, onLoadMore]);

  const onScroll = useCallback(() => {
    const scrollBottom = getScrollBottom();
    if (scrollBottom < 768) {
      loadMore();
    }
  }, [loadMore]);

  useEffect(() => {
    console.log('register scroll event');
    window.addEventListener('scroll', onScroll);
    return () => {
      console.log('unregister scroll event');
      window.removeEventListener('scroll', onScroll);
    };
  }, [onScroll]);
  return null;
};

export default PaginateWithScroll;