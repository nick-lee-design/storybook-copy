/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

interface Props {
  color: string;
  className: any;
}

export const DropdownIcon = ({
  color = "white",
  className,
}: Props): JSX.Element => {
  return (
    <svg
      className={`dropdown-icon ${className}`}
      fill="none"
      height="33"
      viewBox="0 0 32 33"
      width="32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M10.5139 12.0716L16.0001 17.5458L21.4862 12.0716L23.1715 13.7569L16.0001 20.9283L8.82861 13.7569L10.5139 12.0716Z"
        fill={color}
      />
    </svg>
  );
};

DropdownIcon.propTypes = {
  color: PropTypes.string,
};
