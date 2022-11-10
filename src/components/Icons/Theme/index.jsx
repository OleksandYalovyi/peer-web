/* eslint-disable max-len */
import React from 'react'
import T from 'prop-types'
import cls from 'classnames'
import styles from './theme.module.scss'

const Theme = ({ hovered, width = '30.5', isLight }) => (
  <svg
    className={cls({ [styles.hovered]: hovered })}
    xmlns="http://www.w3.org/2000/svg"
    viewBox={isLight ? '0 0 61 61' : '0 0 44.5 44.5'}
    width={isLight ? width : '18.75'}
  >
    {isLight ? (
      <path
        fillRule="evenodd"
        d="M30.075.04a1.492 1.492 0 0 0-.178.045 1.427 1.427 0 0 0-1.112 1.427v8.56c-.005.513.262.992.706 1.255.444.256.989.256 1.434 0 .445-.263.712-.742.706-1.255v-8.56a1.417 1.417 0 0 0-.445-1.087A1.416 1.416 0 0 0 30.075.04zM9.794 8.423a1.412 1.412 0 0 0-1.112 1.003c-.15.524.005 1.081.4 1.449l6.049 6.064c.344.423.895.619 1.429.496a1.433 1.433 0 0 0 1.067-1.07 1.434 1.434 0 0 0-.495-1.432l-6.049-6.064a1.422 1.422 0 0 0-1.156-.446h-.133zm40.384 0a1.427 1.427 0 0 0-.846.446l-6.048 6.064a1.43 1.43 0 0 0 .572 2.502 1.43 1.43 0 0 0 1.43-.496l6.048-6.064a1.435 1.435 0 0 0 .311-1.644 1.422 1.422 0 0 0-1.467-.808zM30.075 15.78c-.045.011-.09.027-.133.044a1.52 1.52 0 0 0-.267.045l-.045.045c-7.549.323-13.653 6.487-13.653 14.134 0 7.853 6.398 14.268 14.231 14.268S44.44 37.901 44.44 30.048c0-7.619-6.054-13.761-13.565-14.134-.05 0-.083-.045-.133-.045a1.35 1.35 0 0 0-.445-.089h-.222zm.045 2.853h.222c6.226.073 11.252 5.156 11.252 11.415 0 6.309-5.093 11.414-11.386 11.414-6.287 0-11.385-5.105-11.385-11.414 0-6.276 5.048-11.364 11.297-11.415zM1.344 28.621a1.44 1.44 0 0 0 .4 2.853h8.539c.511.006.989-.261 1.252-.707a1.447 1.447 0 0 0 0-1.438 1.434 1.434 0 0 0-1.252-.708H1.344zm48.389 0a1.44 1.44 0 0 0 .4 2.853h8.54c.511.006.99-.261 1.25-.707a1.442 1.442 0 0 0 0-1.438 1.428 1.428 0 0 0-1.25-.708H49.1h.767-.134zm-33.756 14.09a1.424 1.424 0 0 0-.846.446l-6.049 6.064a1.438 1.438 0 0 0-.495 1.432c.123.529.54.948 1.068 1.07a1.427 1.427 0 0 0 1.428-.496l6.049-6.064a1.428 1.428 0 0 0-1.022-2.452h-.133zm28.018 0a1.413 1.413 0 0 0-1.111 1.003 1.433 1.433 0 0 0 .4 1.449l6.048 6.064a1.43 1.43 0 0 0 1.43.496 1.429 1.429 0 0 0 .572-2.502l-6.048-6.064a1.424 1.424 0 0 0-1.023-.446h-.268zm-13.92 5.841a1.494 1.494 0 0 0-.178.044 1.429 1.429 0 0 0-1.112 1.427v8.561c-.005.513.262.992.706 1.254.444.256.989.256 1.434 0 .445-.262.712-.741.706-1.254v-8.561a1.42 1.42 0 0 0-.445-1.087 1.415 1.415 0 0 0-1.111-.384z"
      />
    ) : (
      <path
        stroke="#ffffff"
        strokeWidth="3"
        fill="none"
        d="M21.645 39.025a18.16 18.16 0 0 1-12.92-5.351 18.154 18.154 0 0 1-5.352-12.92c0-4.013 1.292-7.799 3.729-10.951a18.19 18.19 0 0 1 4.153-3.911 18.636 18.636 0 0 1 5.236-2.481.892.892 0 0 1 1.048 1.262c-1.149 2.24-1.685 4.375-1.685 6.724 0 8.354 6.797 15.152 15.152 15.152 2.346 0 4.484-.535 6.723-1.686a.89.89 0 0 1 .976.106c.275.23.386.599.289.94a18.704 18.704 0 0 1-2.483 5.237 18.372 18.372 0 0 1-3.91 4.156c-3.155 2.436-6.942 3.726-10.953 3.726l-.003-.003z"
      />
    )}
  </svg>
)

Theme.propTypes = {
  hovered: T.bool,
  width: T.string,
  isLight: T.bool,
}

export default Theme
