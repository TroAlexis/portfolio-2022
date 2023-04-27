export const setElementCSSProperty = (
  element: HTMLElement,
  property: string,
  value?: string
) => {
  element.style.setProperty(property, value || "");
};

export const setDocumentCSSProperty = (property: string, value?: string) => {
  setElementCSSProperty(document.documentElement, property, value);
};
