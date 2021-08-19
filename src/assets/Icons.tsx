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

export const XLogoIcon = ({ size, ...rest }: IconsProps) => {
  return (
    <svg
      width={size ? size : "30"}
      height={size ? size - 10 : "20"}
      viewBox="0 0 30 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.760369 1.05773L11.4995 6.34295L7.59928 8.26451L0.454712 4.74846V0.909058L0.760369 1.05773ZM29.5452 15.2262V19.0656L18.5291 13.6466L22.4261 11.725L29.5452 15.2262ZM29.5456 4.75206V0.912656L29.2431 1.05761L15.0145 8.07112H15.0113L11.1143 9.99639L0.454712 15.2482V19.0913L15.0145 11.9142L18.9115 9.99268L29.5456 4.75206Z"
        fill="currentColor"
      />
    </svg>
  );
};

export const HomeIcon = ({ size, ...rest }: IconsProps) => {
  return (
    <svg
      width={size ? size : "22"}
      height={size ? size - 2 : "20"}
      viewBox="0 0 22 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M18 19.9999H4C3.73478 19.9999 3.48043 19.8946 3.29289 19.707C3.10536 19.5195 3 19.2651 3 18.9999V9.99992H0L10.327 0.61192C10.5111 0.444398 10.7511 0.351562 11 0.351562C11.2489 0.351563 11.4889 0.444398 11.673 0.61192L22 9.99992H19V18.9999C19 19.2651 18.8946 19.5195 18.7071 19.707C18.5196 19.8946 18.2652 19.9999 18 19.9999ZM5 17.9999H17V8.15692L11 2.70292L5 8.15692V17.9999Z"
        fill="currentColor"
      />
    </svg>
  );
};

export const CarIcon = ({ size, ...rest }: IconsProps) => {
  return (
    <svg
      width={size || "20"}
      height={size - 2 || "18"}
      viewBox="0 0 20 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M17 16H3V17C3 17.2652 2.89464 17.5196 2.70711 17.7071C2.51957 17.8946 2.26522 18 2 18H1C0.734784 18 0.48043 17.8946 0.292893 17.7071C0.105357 17.5196 0 17.2652 0 17V7L2.48 1.212C2.63432 0.852001 2.89096 0.545239 3.21805 0.32978C3.54515 0.114322 3.92832 -0.000347568 4.32 7.91365e-07H15.68C16.0713 4.4012e-05 16.4541 0.114897 16.7808 0.330331C17.1075 0.545765 17.3638 0.852314 17.518 1.212L20 7V17C20 17.2652 19.8946 17.5196 19.7071 17.7071C19.5196 17.8946 19.2652 18 19 18H18C17.7348 18 17.4804 17.8946 17.2929 17.7071C17.1054 17.5196 17 17.2652 17 17V16ZM18 9H2V14H18V9ZM2.176 7H17.824L15.681 2H4.32L2.176 7ZM4.5 13C4.10218 13 3.72064 12.842 3.43934 12.5607C3.15804 12.2794 3 11.8978 3 11.5C3 11.1022 3.15804 10.7206 3.43934 10.4393C3.72064 10.158 4.10218 10 4.5 10C4.89782 10 5.27936 10.158 5.56066 10.4393C5.84196 10.7206 6 11.1022 6 11.5C6 11.8978 5.84196 12.2794 5.56066 12.5607C5.27936 12.842 4.89782 13 4.5 13ZM15.5 13C15.1022 13 14.7206 12.842 14.4393 12.5607C14.158 12.2794 14 11.8978 14 11.5C14 11.1022 14.158 10.7206 14.4393 10.4393C14.7206 10.158 15.1022 10 15.5 10C15.8978 10 16.2794 10.158 16.5607 10.4393C16.842 10.7206 17 11.1022 17 11.5C17 11.8978 16.842 12.2794 16.5607 12.5607C16.2794 12.842 15.8978 13 15.5 13Z"
        fill="currentColor"
      />
    </svg>
  );
};

export const LeafIcon = ({ size, ...rest }: IconsProps) => {
  return (
    <svg
      height={size || "26"}
      viewBox="0 0 24 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M24 0V2.66667C24 15.5027 16.836 21.3333 8 21.3333H2.99067C2.77333 22.5493 2.66667 23.876 2.66667 25.3333H0C0 23.516 0.154667 21.8667 0.461333 20.3573C0.154667 18.632 0 16.2907 0 13.3333C0 5.96933 5.96933 0 13.3333 0C16 0 18.6667 1.33333 24 0ZM13.3333 2.66667C7.44267 2.66667 2.66667 7.44267 2.66667 13.3333C2.66667 13.816 2.67067 14.2813 2.68 14.728C4.352 12.0907 6.80133 10.0067 10.0053 8.176L11.328 10.4907C7.52133 12.6667 4.996 15.1387 3.70133 18.6667H8C16.02 18.6667 21.1613 13.3693 21.3293 3.184C19.5 3.36133 17.8 3.248 15.7027 2.93333C14.1693 2.70267 13.868 2.66667 13.3333 2.66667Z"
        fill="currentColor"
      />
    </svg>
  );
};

export const LightningIcon = ({ size, ...rest }: IconsProps) => {
  return (
    <svg
      height={size || "32"}
      viewBox="0 0 28 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M14.7018 10.6667H27.3334L11.8948 33.3333V21.3333H0.666687L14.7018 -1.33334V10.6667ZM11.8948 13.3333V8.29332L5.62388 18.6667H14.7018V24.5253L22.0884 13.3333H11.8948Z"
        fill="currentColor"
      />
    </svg>
  );
};

export const WaterIcon = ({ size, ...rest }: IconsProps) => {
  return (
    <svg
      height={size || "30"}
      viewBox="0 0 24 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M11.9999 4.13334L5.39988 10.7333C4.09469 12.0387 3.20587 13.7017 2.84582 15.5122C2.48577 17.3226 2.67065 19.1992 3.3771 20.9046C4.08354 22.61 5.27982 24.0676 6.81466 25.0931C8.3495 26.1186 10.154 26.666 11.9999 26.666C13.8458 26.666 15.6503 26.1186 17.1851 25.0931C18.7199 24.0676 19.9162 22.61 20.6227 20.9046C21.3291 19.1992 21.514 17.3226 21.1539 15.5122C20.7939 13.7017 19.9051 12.0387 18.5999 10.7333L11.9999 4.13334ZM11.9999 0.362671L20.4852 8.84801C22.1634 10.5262 23.3063 12.6644 23.7693 14.9922C24.2323 17.32 23.9947 19.7328 23.0864 21.9255C22.1782 24.1182 20.6401 25.9923 18.6667 27.3109C16.6933 28.6295 14.3733 29.3332 11.9999 29.3332C9.62651 29.3332 7.30644 28.6295 5.33306 27.3109C3.35967 25.9923 1.8216 24.1182 0.913343 21.9255C0.00508706 19.7328 -0.232562 17.32 0.230449 14.9922C0.69346 12.6644 1.83633 10.5262 3.51455 8.84801L11.9999 0.362671Z"
        fill="currentColor"
      />
    </svg>
  );
};

export const EnvelopeIcon = ({ size, ...rest }: IconsProps) => {
  return (
    <svg
      width={size || "20"}
      height={size - 2 || "18"}
      viewBox="0 0 20 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M1 0H19C19.2652 0 19.5196 0.105357 19.7071 0.292893C19.8946 0.48043 20 0.734784 20 1V17C20 17.2652 19.8946 17.5196 19.7071 17.7071C19.5196 17.8946 19.2652 18 19 18H1C0.734784 18 0.48043 17.8946 0.292893 17.7071C0.105357 17.5196 0 17.2652 0 17V1C0 0.734784 0.105357 0.48043 0.292893 0.292893C0.48043 0.105357 0.734784 0 1 0ZM18 4.238L10.072 11.338L2 4.216V16H18V4.238ZM2.511 2L10.061 8.662L17.502 2H2.511Z"
        fill="currentColor"
      />
    </svg>
  );
};

export const LockIcon = ({ size, ...rest }: IconsProps) => {
  return (
    <svg
      width={size || "18"}
      height={size + 3 || "21"}
      viewBox="0 0 18 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M3 7V6C3 4.4087 3.63214 2.88258 4.75736 1.75736C5.88258 0.632141 7.4087 0 9 0C10.5913 0 12.1174 0.632141 13.2426 1.75736C14.3679 2.88258 15 4.4087 15 6V7H17C17.2652 7 17.5196 7.10536 17.7071 7.29289C17.8946 7.48043 18 7.73478 18 8V20C18 20.2652 17.8946 20.5196 17.7071 20.7071C17.5196 20.8946 17.2652 21 17 21H1C0.734784 21 0.48043 20.8946 0.292893 20.7071C0.105357 20.5196 0 20.2652 0 20V8C0 7.73478 0.105357 7.48043 0.292893 7.29289C0.48043 7.10536 0.734784 7 1 7H3ZM16 9H2V19H16V9ZM8 14.732C7.61872 14.5119 7.32072 14.1721 7.15224 13.7653C6.98376 13.3586 6.9542 12.9076 7.06815 12.4823C7.1821 12.057 7.43319 11.6813 7.78248 11.4132C8.13177 11.1452 8.55973 10.9999 9 10.9999C9.44027 10.9999 9.86823 11.1452 10.2175 11.4132C10.5668 11.6813 10.8179 12.057 10.9319 12.4823C11.0458 12.9076 11.0162 13.3586 10.8478 13.7653C10.6793 14.1721 10.3813 14.5119 10 14.732V17H8V14.732ZM5 7H13V6C13 4.93913 12.5786 3.92172 11.8284 3.17157C11.0783 2.42143 10.0609 2 9 2C7.93913 2 6.92172 2.42143 6.17157 3.17157C5.42143 3.92172 5 4.93913 5 6V7Z"
        fill="currentColor"
      />
    </svg>
  );
};

export const EyeIcon = ({ size, ...rest }: IconsProps) => {
  return (
    <svg
      width={size || "22"}
      height={size - 4 || "18"}
      viewBox="0 0 22 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M11 0C16.392 0 20.878 3.88 21.819 9C20.879 14.12 16.392 18 11 18C5.608 18 1.122 14.12 0.181 9C1.121 3.88 5.608 0 11 0ZM11 16C13.0395 15.9996 15.0184 15.3068 16.6129 14.0352C18.2073 12.7635 19.3229 10.9883 19.777 9C19.3212 7.0133 18.2049 5.24 16.6106 3.97003C15.0163 2.70005 13.0383 2.00853 11 2.00853C8.9617 2.00853 6.98369 2.70005 5.38938 3.97003C3.79506 5.24 2.67877 7.0133 2.223 9C2.6771 10.9883 3.79267 12.7635 5.38714 14.0352C6.98161 15.3068 8.96053 15.9996 11 16ZM11 13.5C9.80653 13.5 8.66193 13.0259 7.81802 12.182C6.97411 11.3381 6.5 10.1935 6.5 9C6.5 7.80653 6.97411 6.66193 7.81802 5.81802C8.66193 4.97411 9.80653 4.5 11 4.5C12.1935 4.5 13.3381 4.97411 14.182 5.81802C15.0259 6.66193 15.5 7.80653 15.5 9C15.5 10.1935 15.0259 11.3381 14.182 12.182C13.3381 13.0259 12.1935 13.5 11 13.5ZM11 11.5C11.663 11.5 12.2989 11.2366 12.7678 10.7678C13.2366 10.2989 13.5 9.66304 13.5 9C13.5 8.33696 13.2366 7.70107 12.7678 7.23223C12.2989 6.76339 11.663 6.5 11 6.5C10.337 6.5 9.70107 6.76339 9.23223 7.23223C8.76339 7.70107 8.5 8.33696 8.5 9C8.5 9.66304 8.76339 10.2989 9.23223 10.7678C9.70107 11.2366 10.337 11.5 11 11.5Z"
        fill="currentColor"
      />
    </svg>
  );
};

export const GreenCheckIcon = ({ size, ...rest }: IconsProps) => {
  return (
    <svg
      width={size || "78"}
      height={size - 22 || "56"}
      viewBox="0 0 78 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M29.5504 41.6902L70.9059 0L78 7.15238L29.5504 56L0 26.2069L7.09912 19.0545L29.5504 41.6902Z"
        fill="#03B352"
      />
    </svg>
  );
};