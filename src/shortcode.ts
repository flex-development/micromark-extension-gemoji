/**
 * @file shortcode
 * @module micromark-extension-gemoji/shortcode
 */

import type { Optional } from '@flex-development/tutils'
import { ok as assert } from 'devlop'
import { asciiAlphanumeric } from 'micromark-util-character'
import { codes } from 'micromark-util-symbol'
import type {
  Code,
  Construct,
  Effects,
  State,
  TokenizeContext
} from 'micromark-util-types'

declare module 'micromark-util-types' {
  interface TokenTypeMap {
    gemoji: 'gemoji'
  }
}

/**
 * Guard whether `code` can come before a gemoji.
 *
 * @see {@linkcode Code}
 *
 * @this {TokenizeContext}
 *
 * @param {Code} code - Previous character code
 * @return {boolean} `true` if `code` allowed before construct
 */
function previous(this: TokenizeContext, code: Code): boolean {
  return code !== codes.backslash && code !== codes.colon
}

/**
 * Gemoji (`:+1:`) construct.
 *
 * @type {Construct}
 */
export default {
  /**
   * Construct name.
   */
  name: 'gemoji',

  /**
   * Guard whether `code` can come before this construct.
   *
   * @see {@linkcode Code}
   *
   * @this {TokenizeContext}
   *
   * @param {Code} code - Previous character code
   * @return {boolean} `true` if `code` allowed before construct
   */
  previous,

  /**
   * Set up a state machine to process character codes.
   *
   * @see {@linkcode Code}
   * @see {@linkcode Effects}
   * @see {@linkcode State}
   *
   * @this {TokenizeContext}
   *
   * @param {Effects} effects - Context object to transition state machine
   * @param {State} ok - Success state function
   * @param {State} nok - Error state function
   * @return {State} Initial state
   */
  tokenize(
    this: TokenizeContext,
    effects: Effects,
    ok: State,
    nok: State
  ): State {
    /**
     * Process the inside (`+1`) and end (`:`) of a gemoji shortcode.
     *
     * @param {Code} code - Character code to process
     * @return {Optional<State>} Next state
     */
    function inside(code: Code): Optional<State> {
      switch (true) {
        case code === codes.colon:
          effects.consume(code)
          effects.exit('gemoji')
          return ok
        case asciiAlphanumeric(code):
        case code === codes.dash:
        case code === codes.plusSign:
        case code === codes.underscore:
          effects.consume(code)
          return inside
        default:
          return nok(code)
      }
    }

    /**
     * Begin processing a gemoji shortcode.
     *
     * @param {Code} code - Character code to process
     * @return {Optional<State>} Next state
     */
    function begin(code: Code): Optional<State> {
      switch (code) {
        case codes.eof:
        case codes.colon:
          return nok(code)
        default:
          effects.consume(code)
          return inside
      }
    }

    /**
     * Process the start of a gemoji shortcode (`:`).
     *
     * @param {Code} code - Character code to process
     * @return {State} Next state
     */
    const start = (code: Code): State => {
      assert(code === codes.colon, 'expected `:`')
      assert(previous.call(this, this.previous), 'expected correct previous')
      effects.enter('gemoji')
      effects.consume(code)
      return begin
    }

    return start
  }
}
