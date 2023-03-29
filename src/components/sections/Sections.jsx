import React from "react";
import "./sections.scss";

export const Sections = ({ sId, children }) => {
  return <section id={`section-${sId}`}>{children}</section>;
};
