import React, { FC } from "react";

interface Props {
  marg: string;
}

export const Marginer: FC<Props> = ({ children, marg }) => {
  return <div style={{ width: "100%", minHeight: marg }}></div>;
};
