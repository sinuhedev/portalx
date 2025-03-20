'use client'

const css = (...classNames) => (
  classNames.filter(e => e).reduce((accumulator, currentValue) => {
    if (typeof currentValue === 'string') {
      return accumulator + currentValue + ' '
    } else if (!Array.isArray(currentValue) && typeof currentValue === 'object') {
      for (const e in currentValue) {
        if (currentValue[e]) return accumulator + e + ' '
      }
    }
    return accumulator
  }, '').trim()
)

const startViewTransition = async (fun = () => {}, ref = null, viewTransitionName = '') => {
  if (!document.startViewTransition) return fun()

  if (ref && ref.current) {
    ref.current.style.viewTransitionName = viewTransitionName
    await document.startViewTransition(fun).finished
    ref.current.style.viewTransitionName = ''
  }
}

export { css, startViewTransition }
