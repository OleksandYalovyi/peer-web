/* eslint-disable max-len */
import React from 'react'
import T from 'prop-types'

const Vine = ({ isSmallScreen }) => (
  <svg
    width={isSmallScreen ? 120 : 170}
    viewBox="0 0 144 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="Group 1000001886">
      <path
        id="Vector"
        d="M40.7435 0.592285H31.0138C30.6126 0.592285 30.2499 0.839193 30.0995 1.21341L20.9678 23.9752L11.836 1.21341C11.6856 0.839193 11.3229 0.592285 10.9217 0.592285H1.19202C0.474449 0.592285 -7.56681e-05 1.33301 0.293127 1.985L14.8452 34.4032C15.2002 35.0204 15.856 35.4024 16.5697 35.4024H25.3658C26.0795 35.4024 26.7354 35.0204 27.0903 34.4032L41.6424 1.985C41.9356 1.33301 41.4611 0.592285 40.7435 0.592285Z"
        fill="white"
      />
      <path
        id="Vector_2"
        d="M99.7844 35.622H89.9428C89.4143 35.622 88.9822 35.1938 88.9822 34.6614V23.5467C88.9822 17.4821 84.0672 12.5671 78.0025 12.5671H74.2063C73.6199 12.5671 73.1454 13.0416 73.1454 13.628V34.6614C73.1454 35.19 72.7172 35.622 72.1848 35.622H62.3432C61.8147 35.622 61.3826 35.1938 61.3826 34.6614V1.707C61.3826 1.20933 61.7838 0.808105 62.2815 0.808105H77.9987C90.5562 0.808105 100.737 10.9892 100.737 23.5467V34.6614C100.737 35.19 100.309 35.622 99.7767 35.622H99.7844Z"
        fill="white"
      />
      <g id="Group">
        <path
          id="Vector_3"
          d="M56.5724 16.2246H46.5341C46.0036 16.2246 45.5735 16.6547 45.5735 17.1852V34.6616C45.5735 35.1922 46.0036 35.6223 46.5341 35.6223H56.5724C57.103 35.6223 57.5331 35.1922 57.5331 34.6616V17.1852C57.5331 16.6547 57.103 16.2246 56.5724 16.2246Z"
          fill="white"
        />
        <path
          id="Vector_4"
          d="M46.5333 0.808594H49.7508C54.0447 0.808594 57.5323 4.29616 57.5323 8.59003V12.1278C57.5323 12.6601 57.1002 13.0884 56.5716 13.0884H46.5372C46.0048 13.0884 45.5765 12.6563 45.5765 12.1278V1.77308C45.5765 1.24068 46.0086 0.812452 46.5372 0.812452L46.5333 0.808594Z"
          fill="white"
        />
      </g>
      <path
        id="Vector_5"
        d="M143.805 14.2646C143.114 10.8117 141.386 7.84112 138.616 5.34889C134.924 2.03108 130.206 0.379883 124.484 0.379883C118.763 0.379883 113.917 2.07351 110.125 5.4492C106.34 8.8326 104.438 13.057 104.438 18.1341C104.438 23.2111 106.383 27.3429 110.279 30.653C114.176 33.9709 119.338 35.6221 125.765 35.6221C126.691 35.6221 135.479 35.5873 136.347 35.5217C136.691 35.4947 136.953 35.2363 136.953 34.9276V26.2164C136.953 25.8422 136.61 25.5374 136.189 25.5374H126.216C122.301 25.5374 119.735 24.4302 118.531 22.2003H134.8H135.985C137.015 22.1502 143.859 14.5346 143.805 14.2607V14.2646ZM119.237 14.2646C118.775 14.2646 118.481 13.8325 118.69 13.4621C119.886 11.321 121.938 10.2523 124.862 10.2523C127.787 10.2523 129.704 11.3441 130.684 13.5238C130.842 13.8788 130.534 14.2646 130.105 14.2646H119.241H119.237Z"
        fill="white"
      />
    </g>
  </svg>
)

Vine.propTypes = {
  isSmallScreen: T.bool,
}

export default Vine
