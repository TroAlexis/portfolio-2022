import { useLayoutEffect, useRef, useState } from "react";

import { useWindowSize } from "./useWindowSize";

interface UseOverflowValues {
  refXOverflowing: boolean;
  refYOverflowing: boolean;
  refXScrollBegin: boolean;
  refXScrollEnd: boolean;
  refYScrollBegin: boolean;
  refYScrollEnd: boolean;
}

export type UseOverflowProps = Partial<UseOverflowValues>;

const END_THRESHOLD = 5;

export function useOverflow<T extends HTMLElement>(
  props: UseOverflowProps = {}
) {
  const ref = useRef<T>(null);
  const [refXOverflowing, setRefXOverflowing] = useState<boolean>(
    props.refXOverflowing || false
  );
  const [refYOverflowing, setRefYOverflowing] = useState<boolean>(
    props.refYOverflowing || false
  );

  const [refXScrollBegin, setRefXScrollBegin] = useState<boolean>(
    props.refXScrollBegin || true
  );
  const [refXScrollEnd, setRefXScrollEnd] = useState<boolean>(
    props.refXScrollEnd || false
  );

  const [refYScrollBegin, setRefYScrollBegin] = useState<boolean>(
    props.refYScrollBegin || true
  );
  const [refYScrollEnd, setRefYScrollEnd] = useState<boolean>(
    props.refYScrollEnd || false
  );

  const size = useWindowSize();

  useLayoutEffect((): any => {
    if (!ref?.current) {
      return;
    }
    const isXOverflowing = ref.current.scrollWidth > ref.current.clientWidth;
    const isYOverflowing = ref.current.scrollHeight > ref.current.clientHeight;

    if (refXOverflowing !== isXOverflowing) {
      setRefXOverflowing(isXOverflowing);
    }

    if (refYOverflowing !== isYOverflowing) {
      setRefYOverflowing(isYOverflowing);
    }

    const handleScroll = (): void => {
      // Handle X Overflow
      const offsetRight =
        ref?.current?.scrollWidth! - ref?.current?.clientWidth!;
      const scrollLeft = ref?.current?.scrollLeft! + END_THRESHOLD;
      if (scrollLeft >= offsetRight && refXScrollEnd === false) {
        setRefXScrollEnd(true);
      } else {
        setRefXScrollEnd(false);
      }

      if (ref?.current?.scrollLeft === 0) {
        setRefXScrollBegin(true);
      } else {
        setRefXScrollBegin(false);
      }

      // Handle Y Overflow
      const offsetBottom =
        ref?.current?.scrollHeight! - ref?.current?.clientHeight!;
      const scrollTop = ref?.current?.scrollTop! + END_THRESHOLD;
      if (scrollTop >= offsetBottom && refYScrollEnd === false) {
        setRefYScrollEnd(true);
      } else {
        setRefYScrollEnd(false);
      }

      if (ref?.current?.scrollTop === 0) {
        setRefYScrollBegin(true);
      } else {
        setRefYScrollBegin(false);
      }
    };

    handleScroll();

    ref.current.addEventListener("scroll", handleScroll);

    return (): void => ref.current?.removeEventListener("scroll", handleScroll);
  }, [ref.current, size.width]); // Empty array ensures that effect is only run on mount and unmount

  return {
    ref,
    refXOverflowing,
    refYOverflowing,
    refXScrollBegin,
    refXScrollEnd,
    refYScrollBegin,
    refYScrollEnd,
  };
}
