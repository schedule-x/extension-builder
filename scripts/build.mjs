import { execSync } from 'child_process'

const viewStarterPkg = './packages/view-starter'

function build() {
  try {
    execSync('npm run clean:build')
    execSync('rollup -c')
    execSync(`sass ${viewStarterPkg}/src/styles/index.scss ${viewStarterPkg}/dist/index.css`)
  } catch (e) {
    console.error(e)
  }
}

build()
