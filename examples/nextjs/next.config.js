import packageJson from './package.json' with { type: "json" }
import { execSync } from 'node:child_process'

const gitHash = execSync('git rev-parse --short HEAD 2> /dev/null').toString()

export default {

  env: {
    VERSION: packageJson.version,
    GIT_HASH: gitHash
  },

  devIndicators: {
    appIsrStatus: false
  }

}
