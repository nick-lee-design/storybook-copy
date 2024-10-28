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

export const ChatIcon7 = ({
  color = "white",
  className,
}: Props): JSX.Element => {
  return (
    <svg
      className={`chat-icon-7 ${className}`}
      fill="none"
      height="33"
      viewBox="0 0 32 33"
      width="32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M26.1806 11.7728H21.0908V13.2273H25.4542L25.4533 21.9544H13.818V19.7726H12.3635V22.6818V22.6808C12.3635 22.8739 12.4408 23.0594 12.577 23.1956C12.7131 23.3317 12.8986 23.408 13.0908 23.408H21.8179L24.727 26.3171L24.726 23.408H26.1805C26.3737 23.408 26.5581 23.3317 26.6953 23.1956C26.8315 23.0594 26.9078 22.8739 26.9078 22.6808V12.5001C26.9078 12.3079 26.8315 12.1225 26.6953 11.9863C26.5581 11.8501 26.3738 11.7728 26.1806 11.7728Z"
        fill={color}
      />

      <path
        className="path"
        d="M10.182 18.318H18.9091C19.1013 18.318 19.2867 18.2407 19.4229 18.1045C19.5591 17.9683 19.6363 17.7839 19.6363 17.5907V7.41005C19.6363 7.21689 19.5591 7.03146 19.4229 6.89528C19.2867 6.7591 19.1013 6.6828 18.9091 6.6828H5.81954C5.41776 6.6828 5.09229 7.00828 5.09229 7.41005V17.5907C5.09229 17.7839 5.16858 17.9683 5.30476 18.1045C5.44191 18.2407 5.62638 18.318 5.81953 18.318H7.27404V21.2271L10.182 18.318ZM6.54669 8.1373H18.1819V16.8634H6.54669V8.1373Z"
        fill={color}
      />

      <path
        className="path"
        d="M10.9092 10.3182H16V11.7727H10.9092V10.3182Z"
        fill={color}
      />

      <path
        className="path"
        d="M10.9092 13.2271H16V14.6816H10.9092V13.2271Z"
        fill={color}
      />

      <path
        className="path"
        d="M8.00098 10.3182H9.45548V11.7727H8.00098V10.3182Z"
        fill={color}
      />
    </svg>
  );
};

ChatIcon7.propTypes = {
  color: PropTypes.string,
};
