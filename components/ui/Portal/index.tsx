import { PropsWithChildren, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

export type PortalProps = PropsWithChildren<{
  selector: string;
}>;

export const Portal = ({ children, selector }: PortalProps) => {
  const ref = useRef<Element>();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    ref.current = document.querySelector(selector) as Element;
    setMounted(true);
  }, [selector]);

  return mounted ? createPortal(children, ref.current as Element) : null;
};
