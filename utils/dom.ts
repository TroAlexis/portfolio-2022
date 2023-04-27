export const setDocumentCSSProperty = (property: string, value?: string) => {
  document.documentElement.style.setProperty(property, value || "");
};
