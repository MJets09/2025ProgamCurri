import React, { useState } from "react";

interface shoe {
  model: string;
  brand: string;
  yr: number;
}

interface Props {
  shoes: shoe[];
  checkClick?: (element: string) => void;
}

const Arrays = ({ shoes, checkClick }: Props) => {
  return (
    <div>
      {shoes.map((element, index) => (
        <div>
          <p key={index}>
            That model is a {element.model}, the brand is {element.brand}, and
            the year is {element.yr}
          </p>
          <button onClick={() => checkClick && checkClick(element.brand)}>
            Log brand
          </button>
        </div>
      ))}
    </div>
  );
};

export default Arrays;
