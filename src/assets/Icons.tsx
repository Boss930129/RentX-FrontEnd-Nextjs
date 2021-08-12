import { SVGAttributes } from "react";

interface IconsProps extends SVGAttributes<SVGElement> {
  color?: string;
  size?: number;
  height?: number;
}

export const LogoIcon = ({ size, ...rest }: IconsProps) => {
  return (
    <>
      <svg
        height={size ? size : "22"}
        viewBox="0 0 200 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...rest}
      >
        <g clip-path="url(#clip0)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M77.1465 0.435547H42.7969V4.65515H77.1465V0.435547ZM77.1465 9.09915H42.7969V13.3188H77.1465V9.09915ZM42.7969 17.7627H77.1465V21.9823H42.7969V17.7627Z"
            fill="#E1E1E6"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M124.594 0.435547H158.944V4.65515H124.594V0.435547ZM143.665 21.9823V7.70391L143.477 7.79631L140.06 9.48591V21.9823H143.665Z"
            fill="#E1E1E6"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M165.959 0.611548L178.639 6.86835L174.034 9.14315L165.598 4.98075V0.435547L165.959 0.611548ZM199.947 17.3844V21.9296L186.94 15.5144L191.541 13.2396L199.947 17.3844ZM199.947 4.98514V0.439944L199.59 0.611544L182.79 8.91434H182.786L178.184 11.1935L165.598 17.4107V21.9603L182.79 13.4639L187.391 11.1891L199.947 4.98514Z"
            fill="#DC1637"
          />
          <path
            d="M3.60526 21.9999H0V18.2027C0.00198877 13.4948 1.60005 8.98007 4.44336 5.64978C7.28667 2.31949 11.1429 0.445769 15.1654 0.439941H36.1541V4.65954H15.1654C12.1013 4.6642 9.16385 6.09057 6.99687 8.62597C4.82989 11.1614 3.61024 14.599 3.60526 18.1851V21.9999Z"
            fill="#E1E1E6"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M85.3251 0.43335H81.7983V1.44359L81.7969 1.44665C81.7969 1.77695 81.7966 2.15409 81.7963 2.53058C81.7958 3.28243 81.7952 4.03166 81.7969 4.3999V21.9999H85.4022V5.39926L88.5023 6.99904L116.172 21.9751V21.9823H116.185L116.217 21.9999H119.779V18.6027L119.777 18.602V11.1011L119.771 11.1042V0.4399H116.165V16.7564L113.874 15.593L85.3251 0.43335Z"
            fill="#E1E1E6"
          />
        </g>
        <defs>
          <clipPath id="clip0">
            <rect width="200" height="22" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </>
  );
};

export const XLogoIcon = ({size, ...rest}: IconsProps) => {
  return (
    <svg width={size ? size : "30"} height={size ? size - 10 : "20" } viewBox="0 0 30 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0.760369 1.05773L11.4995 6.34295L7.59928 8.26451L0.454712 4.74846V0.909058L0.760369 1.05773ZM29.5452 15.2262V19.0656L18.5291 13.6466L22.4261 11.725L29.5452 15.2262ZM29.5456 4.75206V0.912656L29.2431 1.05761L15.0145 8.07112H15.0113L11.1143 9.99639L0.454712 15.2482V19.0913L15.0145 11.9142L18.9115 9.99268L29.5456 4.75206Z"
        fill="currentColor"
      />
    </svg>
  );
};
