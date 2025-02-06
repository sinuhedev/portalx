import React from 'react'
import { useFx, css } from 'portalx'
import i18nFile from 'assets/i18n'
import './style.css'

const I18n = ({ value, args = [] }) => {
  if (!value) return ''

  try {
    const { context } = useFx()

    const locale = i18nFile.locales.includes(context.state.i18n) ? context.state.i18n : i18nFile.defaultLocale
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

const Translate = ({ className, style }) => {
  const { context } = useFx()

  return (
    <article className={css('Translate-component', className)} style={style}>
      <select
        name='i18n'
        value={context.state.i18n}
        onChange={e => context.fx.changeI18n(e)}
      >
        {i18nFile.locales.map(e => (
          <option key={e} value={e}>
            {e}
          </option>
        ))}
      </select>
    </article>
  )
}

export { I18n, Translate }
