// src/components/Container.tsx
import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string; // <-- adicione isso
};

const Container = ({ children, className }: Props) => {
  return <div className={className}>{children}</div>;
};

export default Container;