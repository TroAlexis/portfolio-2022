import { useCallback, useEffect, useMemo, useRef, useState } from "react";

type Trigger = "focus";
type EventEntry = [string, string];

export interface UseHoverOptions<T extends Element> {
  triggers?: Trigger[];
  onEnter?: (event: Event) => unknown;
  onLeave?: (event: Event) => unknown;
}

const focusEvents: EventEntry = ["focusin", "focusout"];
const hoverEvents: EventEntry = ["mouseover", "mouseout"];

const getEventsArray = (triggers?: Trigger[]) => {
  const events: EventEntry[] = [hoverEvents];

  const hasFocus = triggers?.includes("focus");
  if (hasFocus) {
    events.push(focusEvents);
  }

  return events;
};

export function useActive<T extends Element>(options: UseHoverOptions<T>) {
  const { triggers, onEnter, onLeave } = options;
  const [value, setValue] = useState(false);
  const ref = useRef<T>(null);

  const handleEnter = (event: Event) => {
    setValue(true);
    onEnter?.(event);
  };

  const handleLeave = (event: Event) => {
    setValue(false);
    onLeave?.(event);
  };

  const events = useMemo(() => getEventsArray(triggers), [triggers]);

  const updateListeners = useCallback(
    (node: T, remove?: boolean) => {
      const method = remove ? "removeEventListener" : "addEventListener";

      events.forEach((entry) => {
        const [eventIn, eventOut] = entry;
        node[method](eventIn, handleEnter);
        node[method](eventOut, handleLeave);
      });
    },
    [events]
  );

  useEffect(
    () => {
      const node = ref.current;
      if (node) {
        updateListeners(node);

        return () => {
          updateListeners(node, true);
        };
      }
    },
    [updateListeners, ref.current] // Recall only if ref changes
  );
  return [ref, value] as const;
}