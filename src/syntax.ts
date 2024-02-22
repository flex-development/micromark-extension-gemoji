/**
 * @file gemoji
 * @module micromark-extension-gemoji/syntax
 */

import { codes } from 'micromark-util-symbol'
import type { Extension } from 'micromark-util-types'
import shortcode from './shortcode'

/**
 * Create an extension for [`micromark`][1] to enable [gemoji][2] shortcode
 * syntax.
 *
 * [1]: https://github.com/micromark/micromark
 * [2]: https://github.com/wooorm/gemoji
 *
 * @see {@linkcode Extension}
 *
 * @return {Extension} Extension for `micromark` that can be passed into
 * `extensions` to enable gemoji shortcode syntax.
 */
function gemoji(this: void): Extension {
  return {
    flow: { [codes.colon]: shortcode },
    text: { [codes.colon]: shortcode }
  }
}

export default gemoji
