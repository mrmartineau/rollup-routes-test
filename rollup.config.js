import generatePackageJson from 'rollup-plugin-generate-package-json'
import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve'
import autoExternal from 'rollup-plugin-auto-external'
import pkg from './package.json'

const sharedPlugins = [
  resolve(),
  babel({
    exclude: 'node_modules/**'
  }),
  commonjs(),
  generatePackageJson({
    baseContents: {
      main: 'cjs.js',
      module: 'es.js'
    }
  }),
  autoExternal()
]

export default [
  {
    input: 'src/index.js',
    output: [
      {
        file: pkg.main,
        format: 'cjs',
        exports: 'named',
        sourcemap: true
      },
      {
        file: pkg.module,
        format: 'es',
        exports: 'named',
        sourcemap: true
      }
    ],
    plugins: sharedPlugins
  },
  {
    input: 'src/Button/Button.js',
    output: [
      {
        file: 'button/cjs.js',
        format: 'cjs',
        exports: 'named',
        sourcemap: true
      },
      {
        file: 'button/es.js',
        format: 'es',
        exports: 'named',
        sourcemap: true
      }
    ],
    plugins: sharedPlugins
  },
  {
    input: 'src/Modal/Modal.js',
    output: [
      {
        file: 'modal/cjs.js',
        format: 'cjs',
        exports: 'named',
        sourcemap: true
      },
      {
        file: 'modal/es.js',
        format: 'es',
        exports: 'named',
        sourcemap: true
      }
    ],
    plugins: sharedPlugins
  }
]
