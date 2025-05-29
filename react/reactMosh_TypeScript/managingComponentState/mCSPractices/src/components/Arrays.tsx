import React, { useState } from "react";

interface shoe {
  model: string;
  brand: string;
  yr: number;
}

interface Props {
  shoes: shoe[];
}

const Arrays = ({ shoes }: Props) => {
  const [yeezy, setYeezy] = useState(false);

  return (
    <div>
      {shoes.map((element) =>
        element.model === "Yeezy" ? (
          <p>Nice Yeezys</p>
        ) : (
          <p>
            That model is a {element.model}, the brand is {element.brand}, and
            the year is {element.yr}
          </p>
        )
      )}
    </div>
  );
};

export default Arrays;
