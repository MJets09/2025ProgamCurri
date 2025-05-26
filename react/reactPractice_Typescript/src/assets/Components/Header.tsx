import React from "react";

interface Props {
  child: string;
}

const Header = ({ child }: Props) => {
  return (
    <div>
      <h1 className="text-bg-primary p-3">{child}</h1>
    </div>
  );
};

export default Header;
