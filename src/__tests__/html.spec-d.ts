/**
 * @file Type Tests - gemojiHtml
 * @module micromark-extension-gemoji/tests/html/unit-d
 */

import type { EmptyArray } from '@flex-development/tutils'
import type { HtmlExtension } from 'micromark-util-types'
import type testSubject from '../html'

describe('unit-d:gemojiHtml', () => {
  it('should be callable with EmptyArray', () => {
    expectTypeOf<typeof testSubject>().parameters.toEqualTypeOf<EmptyArray>()
  })

  it('should return HtmlExtension', () => {
    expectTypeOf<typeof testSubject>().returns.toEqualTypeOf<HtmlExtension>()
  })
})
