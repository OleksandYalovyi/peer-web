/* eslint-disable no-multi-assign */
/* eslint-disable no-param-reassign */
/* eslint-disable no-restricted-syntax */
/* eslint-disable max-classes-per-file */
/* eslint-disable no-use-before-define */
/* eslint-disable no-plusplus */

import React, { useEffect, useMemo, useRef, useState, useCallback } from 'react'
import { useInView } from 'react-intersection-observer'
import PropTypes from 'prop-types'
import Splitting from 'splitting'
import 'splitting/dist/splitting.css'
import 'splitting/dist/splitting-cells.css'

class Line {
  position = -1

  cells = []

  constructor(linePosition) {
    this.position = linePosition
  }
}

class Cell {
  DOM = {
    el: null,
  }

  position = -1

  previousCellPosition = -1

  original

  state

  color

  originalColor

  cache

  constructor(DOMel, { position, previousCellPosition } = {}) {
    this.DOM.el = DOMel
    this.original = this.DOM.el.innerHTML
    this.state = this.original
    this.color = this.originalColor = getComputedStyle(document.documentElement).getPropertyValue(
      '--color-text',
    )
    this.position = position
    this.previousCellPosition = previousCellPosition
  }

  set(value) {
    this.state = value
    this.DOM.el.innerHTML = this.state
  }
}

export class TypeShuffle {
  DOM = {
    el: null,
  }

  lines = []

  lettersAndSymbols = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
    '!',
    '@',
    '#',
    '$',
    '&',
    '*',
    '(',
    ')',
    '-',
    '_',
    '+',
    '=',
    '/',
    '[',
    ']',
    '{',
    '}',
    ';',
    ':',
    '<',
    '>',
    ',',
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
  ]

  effects = {
    fx1: () => this.fx1(),
  }

  totalChars = 0

  constructor(DOMel) {
    this.DOM.el = DOMel

    const results = Splitting({
      target: this.DOM.el,
      by: 'lines',
    })
    results.forEach((s) => Splitting({ target: s.words }))

    // for every line
    for (const [linePosition, lineArr] of results[0].lines.entries()) {
      const line = new Line(linePosition)
      const cells = []
      let charCount = 0

      for (const word of lineArr) {
        for (const char of [...word.querySelectorAll('.char')]) {
          cells.push(
            new Cell(char, {
              position: charCount,
              previousCellPosition: charCount === 0 ? -1 : charCount - 1,
            }),
          )
          ++charCount
        }
      }
      line.cells = cells
      this.lines.push(line)
      this.totalChars += charCount
    }
  }

  clearCells() {
    for (const line of this.lines) {
      for (const cell of line.cells) {
        cell.set('&nbsp;')
      }
    }
  }

  getRandomChar() {
    return this.lettersAndSymbols[Math.floor(Math.random() * this.lettersAndSymbols.length)]
  }

  fx1() {
    const MAX_CELL_ITERATIONS = 45

    let finished = 0

    this.clearCells()

    const loop = (line, cell, iteration = 0) => {
      cell.cache = cell.state

      if (iteration === MAX_CELL_ITERATIONS - 1) {
        cell.set(cell.original)
        ++finished
        if (finished === this.totalChars) {
          this.isAnimating = false
        }
      } else if (cell.position === 0) {
        cell.set(
          iteration < 9
            ? ['*', '-', '\u0027', '\u0022'][Math.floor(Math.random() * 4)]
            : this.getRandomChar(),
        )
      } else {
        cell.set(line.cells[cell.previousCellPosition].cache)
      }

      if (cell.cache != '&nbsp;') {
        ++iteration
      }

      if (iteration < MAX_CELL_ITERATIONS) {
        setTimeout(() => loop(line, cell, iteration), 15)
      }
    }

    for (const line of this.lines) {
      for (const cell of line.cells) {
        setTimeout(() => loop(line, cell), (line.position + 1) * 200)
      }
    }
  }

  trigger() {
    if (this.isAnimating) return
    this.isAnimating = true
    this.effects.fx1()
  }
}

const TextShuffleAnimation = ({ className = null, text = '', onMouseEnterStatus = true }) => {
  const contentRef = useRef()
  const { ref, inView } = useInView()
  const [ts, setTs] = useState(undefined)

  useEffect(() => {
    if (contentRef.current) setTs(new TypeShuffle(contentRef.current))
  }, [contentRef])

  useEffect(() => {
    if (inView) {
      if (ts) ts.trigger()
    }
  }, [ts, inView])

  const onMouseEnterRef = useCallback(() => {
    if (ts && onMouseEnterStatus) {
      ts.trigger()
    }
  }, [ts, onMouseEnterStatus])

  return (
    <div ref={ref}>
      <div ref={contentRef} className={className}>
        <dt onMouseEnter={onMouseEnterRef} style={{ cursor: 'pointer' }}>
          {text}
        </dt>
      </div>
    </div>
  )
}

TextShuffleAnimation.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string.isRequired,
  onMouseEnterStatus: PropTypes.bool,
}

export default TextShuffleAnimation
