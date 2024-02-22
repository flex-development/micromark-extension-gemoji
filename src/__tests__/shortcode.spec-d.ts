/**
 * @file Type Tests - shortcode
 * @module micromark-extension-gemoji/tests/shortcode/unit-d
 */

import type { Construct } from 'micromark-util-types'
import type testSubject from '../shortcode'

describe('unit-d:shortcode', () => {
  it('should match Construct', () => {
    expectTypeOf<typeof testSubject>().toMatchTypeOf<Construct>()
  })
})
