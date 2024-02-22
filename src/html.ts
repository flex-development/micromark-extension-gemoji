/**
 * @file gemojiHtml
 * @module micromark-extension-gemoji/html
 */

import { ok } from 'devlop'
import { nameToEmoji } from 'gemoji'
import { codes } from 'micromark-util-symbol'
import type { CompileContext, HtmlExtension, Token } from 'micromark-util-types'

/**
 * Create an extension for [`micromark`][1] to support [gemoji][2] shortcodes
 * when serializing to HTML.
 *
 * [1]: https://github.com/micromark/micromark
 * [2]: https://github.com/wooorm/gemoji
 *
 * @see {@linkcode HtmlExtension}
 *
 * @return {HtmlExtension} Extension for `micromark` that can be passed into
 * `htmlExtensions` to support gemoji shortcodes when serializing to HTML.
 */
function gemojiHtml(this: void): HtmlExtension {
  return {
    enter: {
      /**
       * Open a gemoji element.
       *
       * @see {@linkcode CompileContext}
       *
       * @this {CompileContext}
       *
       * @return {undefined} Nothing
       */
      gemoji(this: CompileContext): undefined {
        return void this.tag('<span>')
      }
    },
    exit: {
      /**
       * Close a gemoji element.
       *
       * @see {@linkcode CompileContext}
       * @see {@linkcode Token}
       *
       * @this {CompileContext}
       *
       * @param {Token} token - Micromark token
       * @return {undefined} Nothing
       */
      gemoji(this: CompileContext, token: Token): undefined {
        /**
         * Gemoji shortcode.
         *
         * @const {string} val
         */
        const val: string = this.sliceSerialize(token)

        // assert shortcode
        ok(val.codePointAt(0) === codes.colon, 'expected `:` start')
        ok(val.codePointAt(val.length - 1) === codes.colon, 'expected `:` end')

        this.raw(nameToEmoji[val.slice(1, -1)] ?? /* c8 ignore next */ val)
        return void this.tag('</span>')
      }
    }
  }
}

export default gemojiHtml
