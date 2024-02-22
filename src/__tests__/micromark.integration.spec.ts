/**
 * @file Integration Tests - micromark
 * @module micromark-extension-gemoji/tests/micromark/integration
 */

import * as testSubject from '@flex-development/micromark-extension-gemoji'
import { template } from '@flex-development/tutils'
import { micromark } from 'micromark'
import { values } from 'micromark-util-symbol'

describe('integration:micromark', () => {
  let print: (value: string) => string
  let shortcode: (value: string) => string

  beforeAll(() => {
    shortcode = (value: string) => values.colon + value + values.colon

    print = (value: string): string => {
      return micromark(value, {
        extensions: [testSubject.gemoji()],
        htmlExtensions: [testSubject.gemojiHtml()]
      })
    }
  })

  it('should ignore lone colon', () => {
    expect(print(values.colon)).to.eql(`<p>${values.colon}</p>`)
  })

  it('should not support empty shortcode', () => {
    // Arrange
    const value: string = shortcode('')

    // Act + Expect
    expect(print(value)).to.eql(`<p>${value}</p>`)
  })

  it('should not support escaped shortcodes', () => {
    // Arrange
    const value: string = shortcode('foo')
    const escaped: string = template('{bs}{colon}{name}{bs}{colon}', {
      bs: values.backslash,
      colon: values.colon,
      name: value.slice(1, -1)
    })

    // Act + Expect
    expect(print(escaped)).to.eql(`<p>${value}</p>`)
  })

  it('should not support whitespace characters', () => {
    // Arrange
    const value: string = shortcode('massage man')

    // Act + Expect
    expect(print(value)).to.eql(`<p>${value}</p>`)
  })

  describe('gemoji name', () => {
    it('should support alpha name', () => {
      expect(print(shortcode('package'))).toMatchSnapshot()
    })

    it('should support alphanumeric name', () => {
      expect(print(shortcode('star2'))).toMatchSnapshot()
    })

    it('should support name with values.dash', () => {
      expect(print(shortcode('-1'))).toMatchSnapshot()
    })

    it('should support name with values.plusSign', () => {
      expect(print(shortcode('+1'))).toMatchSnapshot()
    })

    it('should support name with values.underscore', () => {
      expect(print(shortcode('people_hugging'))).toMatchSnapshot()
    })
  })
})
