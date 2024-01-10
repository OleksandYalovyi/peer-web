/* eslint-disable max-len */
import React from 'react'
import T from 'prop-types'

function MobileMenuLogo({ isHovered = false, type }) {
  if (type === 'ZEN') {
    return <ZEN isHovered={isHovered} />
  }
  if (type === 'PEER') {
    return <PEER isHovered={isHovered} />
  }
  if (type === 'OMNI') {
    return <OMNI isHovered={isHovered} />
  }
  if (type === 'INDEX') {
    return <INDEX isHovered={isHovered} />
  }
  if (type === 'LABS') {
    return <LABS isHovered={isHovered} />
  }
  if (type === 'PM') {
    return <PM isHovered={isHovered} />
  }
  if (type === 'COIN') {
    return <COIN isHovered={isHovered} />
  }

  return <PEER isHovered={isHovered} />
}
MobileMenuLogo.propTypes = {
  isHovered: T.bool,
  type: T.string,
}

function PEER({ isHovered }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 75 75" width="23.66" height="23.66">
      <path
        fill={isHovered ? '#00d3f9' : '#ffffff'}
        fillRule="evenodd"
        d="m39.06 2.686 8.191 16.856a8.592 8.592 0 0 0 3.949 3.975l16.844 8.181c3.08 1.51 3.08 5.891 0 7.399l-13.969 6.79a17.879 17.879 0 0 0-8.219 8.211L39.06 68.083c-1.51 3.075-5.895 3.075-7.405 0l-6.796-13.985a17.875 17.875 0 0 0-8.217-8.211l-13.971-6.79c-3.077-1.508-3.077-5.889 0-7.399l13.971-6.788a17.682 17.682 0 0 0 8.217-8.241l6.796-13.983c1.51-3.075 5.895-3.075 7.405 0z"
      />
    </svg>
  )
}
function LABS({ isHovered }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 75 75" width="23.66" height="23.66">
      <path
        fill={isHovered ? '#00d3f9' : '#ffffff'}
        fillRule="evenodd"
        d="m67.497 33.794-2.26 3.725c-.498.823-1.727.707-2.064-.193l-1.529-4.078a4.986 4.986 0 0 0-2.078-2.511l-3.724-2.261c-.821-.5-.707-1.726.193-2.066l4.078-1.531a5.001 5.001 0 0 0 2.511-2.085l2.257-3.723c.128-.211.307-.359.503-.449-5.472-9.548-15.346-16.38-27.143-17.483C20.747-.495 5.06 11.023.978 27.569l6.288-2.365a5.461 5.461 0 0 0 2.748-2.28l7.529-12.408c.873-1.439 3.018-1.238 3.609.336l5.092 13.586a5.473 5.473 0 0 0 2.281 2.753l12.39 7.531c1.438.873 1.238 3.018-.337 3.609l-13.575 5.103a5.47 5.47 0 0 0-2.748 2.28l-7.527 12.411c-.872 1.436-3.018 1.236-3.609-.339l-5.097-13.59a5.447 5.447 0 0 0-2.276-2.746L.005 37.961C.947 54.976 14.227 69.2 31.72 70.834a34.997 34.997 0 0 0 13.024-1.236l-.101-.266a3.722 3.722 0 0 0-1.554-1.877l-5.867-3.566c-1.131-.686-.973-2.373.265-2.838l6.419-2.412a3.753 3.753 0 0 0 1.885-1.566l3.558-5.867c.687-1.128 2.374-.972 2.837.266l2.409 6.424a3.736 3.736 0 0 0 1.564 1.887l2.802 1.703c6.008-5.636 10.067-13.398 10.893-22.241.238-2.52.194-5.001-.095-7.416a4.994 4.994 0 0 0-2.262 1.965z"
      />
    </svg>
  )
}

function ZEN({ isHovered }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 75 75" width="23.66" height="23.66">
      <path
        fillRule="evenodd"
        fill={isHovered ? '#00d3f9' : '#ffffff'}
        d="M66.94 33.086a1.506 1.506 0 0 1-1.601.444L36.72 24.183a1.51 1.51 0 0 1-1.022-1.194L32.772 4.833a1.51 1.51 0 0 1 1.521-1.75l18.35.391a1.507 1.507 0 0 1 1.324.852l13.195 27.11a1.51 1.51 0 0 1-.222 1.65zM34.817 66.443a1.518 1.518 0 0 1-.84.967 1.524 1.524 0 0 1-.642.129l-18.35-.391a1.519 1.519 0 0 1-1.324-.852L.466 39.19a1.51 1.51 0 0 1 .953-2.118c.285-.079.587-.972.869.02l28.62 9.345a1.502 1.502 0 0 1 1.021 1.196l2.926 18.155a1.51 1.51 0 0 1-.038.655zM22.22 30.968a1.5 1.5 0 0 1-1.192 1.023L2.907 34.922a1.501 1.501 0 0 1-1.229-.352 1.502 1.502 0 0 1-.518-1.171l.391-18.387a1.512 1.512 0 0 1 .851-1.326L29.454.466a1.5 1.5 0 0 1 1.65.218 1.508 1.508 0 0 1 .443 1.607L22.22 30.968zm23.187 8.686a1.504 1.504 0 0 1 1.193-1.023l18.12-2.926a1.505 1.505 0 0 1 1.619.88c.09.202.134.422.129.643l-.391 18.386a1.511 1.511 0 0 1-.851 1.325L38.169 70.16a1.504 1.504 0 0 1-2.11-.96 1.508 1.508 0 0 1 .021-.87l9.327-28.676z"
      />
    </svg>
  )
}
function OMNI({ isHovered }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 75 75" width="23.66" height="23.66">
      <path
        fill={isHovered ? '#00d3f9' : '#ffffff'}
        fillRule="evenodd"
        d="M69.388 43.459c-8.29-3.072-16.677-6.379-24.225-10.885-12.297-7.337-24.626-13.556-37.324-18.809a35.007 35.007 0 0 1 7.713-7.186 35.058 35.058 0 0 1 2.162-1.354 538.182 538.182 0 0 0 31.208 15.782c6.949 3.231 14.01 6.376 21.031 9.451a35.14 35.14 0 0 1-.565 13.001zM20.93 3.565C36.11-3.294 54.475 1.49 64.202 15.718a34.915 34.915 0 0 1 5.046 11.151c-6.374-2.8-12.767-5.657-19.062-8.584A533.96 533.96 0 0 1 20.93 3.565zm47.641 42.793a34.842 34.842 0 0 1-15.127 19.054 21.49 21.49 0 0 0-.98-2.217 24.613 24.613 0 0 0-1.613-2.698c-2.558-3.74-6.083-6.955-9.514-10.082l-1.082-.988C28.987 39.098 16.101 31.042 1.807 25.35a35.05 35.05 0 0 1 4.231-9.077c12.795 5.254 25.209 11.492 37.585 18.879 7.84 4.68 16.456 8.064 24.948 11.206zm-29.256 6.275c4.031 3.673 8.197 7.471 10.477 11.928.391.764.717 1.534.987 2.31-8.911 4.404-19.039 4.686-27.927 1.31a37.067 37.067 0 0 0-.228-4.488c-.405-3.458-1.622-6.334-3.318-8.811-2.97-4.346-7.408-7.466-11.499-10.34a231.748 231.748 0 0 1-2.337-1.658c-1.566-1.131-3.214-2.138-4.892-3.075a35.125 35.125 0 0 1 .482-11.522c13.81 5.55 26.267 13.361 37.166 23.351l1.089.995zM6.082 46.999c6.193 4.352 12.6 8.855 13.561 17.044.109.941.17 1.883.195 2.828A34.815 34.815 0 0 1 6.415 55.232a34.881 34.881 0 0 1-5.132-11.531 40.749 40.749 0 0 1 2.428 1.616c.779.562 1.573 1.12 2.371 1.682z"
      />
    </svg>
  )
}
function INDEX({ isHovered }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 75 75" width="23.66" height="23.66">
      <path
        fill={isHovered ? '#00d3f9' : '#ffffff'}
        fillRule="evenodd"
        d="M-.001 34.997c0 19.33 15.67 35 35 35s34.101-15.67 34.101-35-14.771-35-34.101-35-35 15.67-35 35zm46.698 3.763 1.715 3.535c.21.433.559.782.991.993l3.529 1.718a.907.907 0 0 1 0 1.632l-3.533 1.721a2.13 2.13 0 0 0-.987.988l-1.715 3.537a.906.906 0 0 1-1.63 0l-1.715-3.537a2.134 2.134 0 0 0-.987-.988l-3.533-1.721a.908.908 0 0 1 0-1.632l3.529-1.718c.432-.211.781-.56.991-.993l1.715-3.535a.906.906 0 0 1 1.63 0zm6.693-19.153 1.312 2.705c.134.277.358.502.635.637l2.701 1.314a.66.66 0 0 1 0 1.188l-2.241 1.092a2.854 2.854 0 0 0-1.318 1.32l-1.089 2.245a.66.66 0 0 1-1.186 0l-1.089-2.245a2.854 2.854 0 0 0-1.318-1.32l-2.242-1.092a.66.66 0 0 1 0-1.187l2.241-1.092a2.856 2.856 0 0 0 1.319-1.322l1.089-2.243a.659.659 0 0 1 1.186 0zm-26.542-2.358 3.626 7.476a3.128 3.128 0 0 0 1.446 1.448l7.462 3.635c.866.421.866 1.655 0 2.077l-7.462 3.633a3.128 3.128 0 0 0-1.445 1.447l-3.627 7.477c-.42.866-1.654.867-2.074.001l-3.629-7.48a3.122 3.122 0 0 0-1.444-1.445l-7.463-3.633c-.865-.422-.866-1.656 0-2.077l7.463-3.635a3.126 3.126 0 0 0 1.445-1.446l3.628-7.478c.42-.866 1.654-.866 2.074 0z"
      />
    </svg>
  )
}
function PM({ isHovered }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 30" width="25">
      <path
        fill={isHovered ? '#00d3f9' : '#ffffff'}
        fillRule="evenodd"
        d="M44.1 19.197c0 1.39-.451 2.663-2.655 3.319-2.22.699-13.378 4.222-15.355 4.824-2.245.71-4.902.718-7.109 0L3.554 22.516C1.35 21.86 0 20.587 0 19.197V9.55c0-1.39 1.35-2.663 3.554-3.358h.071c2.284-.717 13.329-4.18 15.356-4.824 2.204-.694 4.905-.694 7.109 0l15.355 4.824C43.649 6.886 44.1 8.16 44.1 9.55v9.647z"
      />
    </svg>
  )
}

function COIN({ isHovered }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="23.66" viewBox="0 0 52 52">
      <path
        fillRule="evenodd"
        fill={isHovered ? '#00d3f9' : '#ffffff'}
        d="M22.5 0C10.074 0 0 10.074 0 22.5s10.074 21.6 22.5 21.6 21.6-9.174 21.6-21.6C44.1 10.074 34.926 0 22.5 0zm14.813 24.183-6.331 3.076a8.102 8.102 0 0 0-3.724 3.72l-3.08 6.336c-.684 1.393-2.672 1.393-3.356 0l-3.08-6.336a8.102 8.102 0 0 0-3.724-3.72l-6.331-3.076c-1.395-.684-1.395-2.669 0-3.352l6.331-3.076a8.008 8.008 0 0 0 3.724-3.734l3.08-6.335c.684-1.394 2.672-1.394 3.356 0l3.711 7.637a3.896 3.896 0 0 0 1.791 1.8l7.633 3.708c1.395.683 1.395 2.668 0 3.352z"
      />
    </svg>
  )
}

COIN.propTypes = {
  isHovered: T.bool,
}
PM.propTypes = {
  isHovered: T.bool,
}
PEER.propTypes = {
  isHovered: T.bool,
}
ZEN.propTypes = {
  isHovered: T.bool,
}
LABS.propTypes = {
  isHovered: T.bool,
}
OMNI.propTypes = {
  isHovered: T.bool,
}
INDEX.propTypes = {
  isHovered: T.bool,
}

export default MobileMenuLogo
