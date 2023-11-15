/* eslint-disable max-len */
import React from 'react'
import T from 'prop-types'

const Peer = ({ width = '150', height = '43' }) => (
  <svg 
    width={width}
    height={height}
    viewBox="0 0 150 43" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="peerlogo.a728a866.svg" clipPath="url(#clip0_21_11173)">
    <path id="Vector" fillRule="evenodd" clipRule="evenodd" d="M148.978 29.1728L145.889 30.6832C145.096 31.0727 144.456 31.7155 144.071 32.5098L142.568 35.621C142.234 36.3047 141.264 36.3047 140.93 35.621L139.427 32.5098C139.041 31.7156 138.401 31.0727 137.609 30.6832L134.519 29.1728C133.838 28.8373 133.838 27.8622 134.519 27.5267L137.609 26.0162C138.405 25.6281 139.045 24.9822 139.427 24.1836L140.93 21.0724C141.264 20.3881 142.234 20.3881 142.568 21.0724L144.38 24.8225C144.564 25.2066 144.871 25.5179 145.253 25.7067L148.978 27.5267C149.659 27.8622 149.659 28.8373 148.978 29.1728ZM138.85 10.2225H136.813C130.68 10.2225 125.701 15.2244 125.701 21.3886V31.9478C125.701 32.3199 125.554 32.6769 125.292 32.9407C125.029 33.2044 124.673 33.3535 124.301 33.3553H117.46C117.088 33.3534 116.732 33.2042 116.469 32.9405C116.207 32.6767 116.059 32.3198 116.06 31.9478V21.3886C116.06 9.86699 125.354 0.53418 136.813 0.53418H138.85C139.221 0.535941 139.578 0.684944 139.84 0.948595C140.102 1.21225 140.25 1.56909 140.25 1.94107V8.81501C140.25 9.18709 140.103 9.54409 139.84 9.80787C139.578 10.0717 139.222 10.2207 138.85 10.2225ZM112.148 18.8001C112.119 19.1499 111.959 19.4761 111.701 19.714C111.443 19.9519 111.105 20.0842 110.754 20.0846H87.6298C87.8119 20.9211 88.1218 21.7245 88.5486 22.4666C89.3256 23.8087 90.4242 24.8352 91.8438 25.539C93.2634 26.2421 94.9332 26.591 96.8536 26.591C98.5755 26.591 100.085 26.3324 101.383 25.8097C102.314 25.4361 103.188 24.932 103.977 24.3126C104.253 24.0931 104.602 23.9864 104.954 24.014C105.305 24.0415 105.634 24.2012 105.872 24.461L109.032 27.901C109.283 28.1762 109.415 28.5389 109.401 28.9108C109.386 29.2828 109.226 29.6341 108.955 29.8892C107.658 31.0896 106.129 32.0514 104.356 32.7678C102.121 33.6714 99.539 34.1232 96.6229 34.1232C92.9419 34.1232 89.7175 33.4001 86.9364 31.9545C84.1547 30.5088 82.0029 28.5272 80.487 26.0162C78.965 23.5059 78.2068 20.6848 78.2068 17.432C78.2068 14.1791 78.9584 11.2939 80.4549 8.78291C81.9514 6.27195 84.0009 4.30364 86.6021 2.87677C89.1972 1.45717 92.2611 0.740701 95.4153 0.740701C98.5688 0.740701 101.421 1.41841 103.958 2.7611H103.971C106.508 4.10318 108.519 6.03333 109.996 8.54429C111.474 11.0546 112.212 14.0628 112.212 17.5543C112.212 17.9159 112.186 18.3289 112.148 18.7874V18.8001ZM102.493 11.8293C101.813 10.5835 100.875 9.609 99.6735 8.90525C98.4725 8.20817 97.0723 7.85326 95.4728 7.85326C93.8733 7.85326 92.4664 8.20211 91.2461 8.90525H91.24C90.0257 9.609 89.0749 10.5901 88.3941 11.8553C87.9575 12.6747 87.6619 13.5916 87.5081 14.5982H103.393C103.245 13.5783 102.943 12.6553 102.493 11.8293ZM74.3077 18.8001C74.2787 19.1499 74.1194 19.4761 73.8613 19.714C73.6032 19.9519 73.2652 20.0842 72.9142 20.0846H49.7898C49.9719 20.9211 50.2818 21.7245 50.7086 22.4666C51.4856 23.8087 52.5842 24.8352 54.0038 25.539C55.4234 26.2421 57.0932 26.591 59.0136 26.591C60.7355 26.591 62.2447 26.3324 63.5426 25.8097C64.4741 25.4359 65.3478 24.9319 66.1377 24.3126C66.4137 24.093 66.7626 23.9863 67.1141 24.0138C67.4657 24.0413 67.7937 24.2011 68.0321 24.461L71.1923 27.901C71.4428 28.1762 71.5751 28.5389 71.5608 28.9108C71.5464 29.2828 71.3864 29.6341 71.1154 29.8892C69.8182 31.0896 68.2889 32.0514 66.5162 32.7678C64.2808 33.6714 61.699 34.1232 58.7829 34.1232C55.1019 34.1232 51.8775 33.4001 49.0964 31.9545C46.3147 30.5088 44.1629 28.5272 42.647 26.0162C41.125 23.5059 40.3668 20.6848 40.3668 17.432C40.3668 14.1791 41.1184 11.2939 42.6149 8.78291C44.112 6.27195 46.1609 4.30364 48.7621 2.87677C51.3572 1.45717 54.4211 0.740701 57.5753 0.740701C60.7288 0.740701 63.5807 1.41841 66.1183 2.7611H66.1311C68.6681 4.10318 70.6788 6.03333 72.1559 8.54429C73.6336 11.0546 74.3719 14.0628 74.3719 17.5543C74.3719 17.9159 74.3465 18.3289 74.3077 18.7874V18.8001ZM64.6539 11.8293C63.9726 10.5835 63.035 9.609 61.8335 8.90525C60.6325 8.20817 59.2323 7.85326 57.6328 7.85326C56.0333 7.85326 54.627 8.20211 53.4061 8.90525H53.4C52.1857 9.609 51.2355 10.5901 50.5541 11.8553C50.1175 12.6747 49.8219 13.5916 49.6681 14.5982H65.5527C65.4049 13.5783 65.1033 12.6553 64.6539 11.8293ZM28.3873 29.4568C25.6705 30.6832 22.4328 31.2961 18.6754 31.2961H11.6222C11.2502 31.2979 10.8941 31.4469 10.6317 31.7106C10.3693 31.9742 10.222 32.331 10.222 32.703V41.5198C10.2221 41.8919 10.0749 42.2489 9.81247 42.5127C9.55005 42.7765 9.19382 42.9256 8.82174 42.9273H1.91024C1.53816 42.9256 1.18193 42.7765 0.919514 42.5127C0.657093 42.2489 0.509854 41.8919 0.510018 41.5198V2.15425C0.509381 1.96985 0.545111 1.78713 0.615164 1.61655C0.685217 1.44597 0.788217 1.29088 0.918272 1.16015C1.04833 1.02942 1.20288 0.92562 1.3731 0.854685C1.54331 0.78375 1.72584 0.747074 1.91024 0.746757H18.6815C22.4394 0.746757 25.6765 1.36026 28.394 2.58001H28.3873C31.1042 3.80642 33.2052 5.56215 34.6823 7.85326C36.1594 10.145 36.8983 12.92 36.8983 16.0505C36.8983 19.181 36.1594 21.8919 34.6823 24.1836C33.2052 26.4747 31.1042 28.2304 28.3873 29.4568ZM24.8547 10.6289C23.3709 9.34434 21.1355 8.69873 18.1358 8.69873H10.222V23.3375H18.1358C21.1355 23.3375 23.3769 22.6925 24.8547 21.408V21.4146C26.3318 20.1301 27.0707 18.381 27.0707 16.0505C27.0707 13.7206 26.3318 11.9134 24.8547 10.6289Z" fill="white"/>
    </g>
    <defs>
    <clipPath id="clip0_21_11173">
    <rect 
      width="148.986"
      height="43"
      fill="white"
      transform="translate(0.511963 0.000976562)"
    />
    </clipPath>
    </defs>
  </svg>
)

Peer.propTypes = {
  width: T.string,
  height: T.string,
}

export default Peer
