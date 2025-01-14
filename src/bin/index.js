#!/usr/bin/env node

import fs from 'node:fs'

function createPage (name) {
  const dirName = `./src/pages/${name}`

  if (fs.existsSync(dirName)) { console.error(`Error: Can't create '${dirName}' page : File exists`) } else {
    fs.mkdirSync(dirName, { recursive: true })

    const pageName = name.replaceAll('/', '')

    // index.js
    fs.writeFileSync(`${dirName}/index.jsx`, `
import React, { useEffect } from 'react'
import { useFx, css } from 'portalx'
import functions from './functions'
import './style.css'

const ${pageName} = ({ name, className, style}) => {
  const { state, fx } = useFx(functions)

  return (
    <main className={css(name, className, '')} style={style}>
      ${pageName}
    </main>
  )
}

export default ${pageName}
`)

    // style.scss
    fs.writeFileSync(`
${dirName}/style.css`,
      `.${pageName}  {
}`)

    // function.js
    fs.writeFileSync(`
${dirName}/functions.js`,
      `const initialState = {
}

export default {initialState}`)
  }
}

function createComponent (name) {
  const dirName = `./src/components/${name}`

  if (fs.existsSync(dirName)) { console.error(`Error: Can't create '${dirName}' component : File exists`) } else {
    fs.mkdirSync(dirName, { recursive: true })

    const componentName = name.replaceAll('/', '') + '-component'

    // index.js
    fs.writeFileSync(`${dirName}/index.jsx`, `
import React, { useEffect, useState } from 'react'
import './style.css'
import { css } from 'portalx'

export default ({ children, name, value, type, className, style, readOnly, disabled }) => {
  return (
    <article className={css('${componentName}', className)} style={style} name={name}>
      ${componentName}
    </article>
  )
}`)

    // style.scss
    fs.writeFileSync(`${dirName}/style.css`,
      `.${componentName}  {
}`
    )
  }
}

function createContainer (name) {
  const dirName = `./src/containers/${name}`

  if (fs.existsSync(dirName)) { console.error(`Error: Can't create '${dirName}' container : File exists`) } else {
    fs.mkdirSync(dirName, { recursive: true })

    const containerName = name.replaceAll('/', '') + '-container'

    // index.js
    fs.writeFileSync(`${dirName}/index.jsx`, `
import React, { useEffect } from 'react'
import { useFx, css } from 'portalx'
import functions from './functions'
import './style.css'

export default ({ className, style}) => {
  const { state, fx } = useFx(functions)

  return (
    <article className={css( '${containerName}' , className, '')} style={style}>
      ${containerName}
    </article>
  )
}
`)

    // style.scss
    fs.writeFileSync(`${dirName}/style.css`, `
.${containerName}  {
}`)

    // function.js
    fs.writeFileSync(`${dirName}/functions.js`, `
const initialState = {
}

export default {initialState}`)
  }
}

/**
 * run template
 */

const CMD = process.argv[2]
const FILE_NAME = process.argv[3]

switch (CMD) {
  case 'page':
    if (FILE_NAME) createPage(FILE_NAME)
    else console.warn('npm run page <PageName>')
    break

  case 'component':
    if (FILE_NAME) createComponent(FILE_NAME)
    else console.warn('npm run component <ComponentName>')
    break

  case 'container':
    if (FILE_NAME) createContainer(FILE_NAME)
    else console.warn('npm run container <ContainerName>')
    break

  default:
    console.info('portalx')
    break
}
