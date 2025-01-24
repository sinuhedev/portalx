import { flushSync } from 'react-dom'

/**
 * href
 * @param {*} href
 * @param {*} params
 * @returns
 */
const href = (href, params = {}) =>
  href + '?' + new URLSearchParams(params).toString()

/**
 * css
 * @param  {...any} classNames
 * @returns
 */
function css (...classNames) {
  return classNames.filter(e => e).reduce((accumulator, currentValue) => {
    if (typeof currentValue === 'string') {
      return accumulator + currentValue + ' '
    } else if (!Array.isArray(currentValue) && typeof currentValue === 'object') {
      for (const e in currentValue) {
        if (currentValue[e]) return accumulator + e + ' '
      }
    }
    return accumulator
  }, '').trim()
}

/**
 * i18n
 * @param {*} value
 * @param {*} args
 * @param {*} i18nFile
 * @param {*} locale
 * @returns
 */
function i18n (value, args = [], i18nFile, locale) {
  if (!value) return ''

  try {
    const localeIndex = i18nFile.locales.indexOf(locale)

    let text = value.split('.').reduce((ac, el) => ac[el], i18nFile)
    text = text[localeIndex]

    if (args) {
      text = text.replace(
        /([{}])\\1|[{](.*?)(?:!(.+?))?[}]/g,
        (match, literal, number) => args[number] || match
      )
    }

    return text
  } catch (e) {
    console.error('Error in [il8n] => ' + value)
    return value
  }
}

/**
 * startViewTransition
 * @param {*} fun
 * @param {*} ref
 * @param {*} viewTransitionName
 * @returns
 */
function startViewTransition (
  fun = () => {},
  ref = null,
  viewTransitionName = ''
) {
  if (!document.startViewTransition) return fun()

  ;(async () => {
    if (ref && ref.current) { ref.current.style.viewTransitionName = viewTransitionName }

    await document.startViewTransition(() => flushSync(() => fun())).finished

    if (ref && ref.current) ref.current.style.viewTransitionName = ''
  })()
}

export { href, css, i18n, startViewTransition }
