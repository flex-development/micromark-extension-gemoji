/**
 * @file Type Tests - gemoji
 * @module micromark-extension-gemoji/tests/syntax/unit-d
 */

import type { EmptyArray } from '@flex-development/tutils'
import type { Extension } from 'micromark-util-types'
import type testSubject from '../syntax'

describe('unit-d:gemoji', () => {
  it('should be callable with EmptyArray', () => {
    expectTypeOf<typeof testSubject>().parameters.toEqualTypeOf<EmptyArray>()
  })

  it('should return Extension', () => {
    expectTypeOf<typeof testSubject>().returns.toEqualTypeOf<Extension>()
  })
})
