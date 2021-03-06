import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import pkg from './package.json';

export default [
  {
    input: 'dist/index.js',
    external: ['react', 'prop-types', 'casium'],
    output: {
      name: 'casium-forms',
      file: pkg.browser,
      format: 'umd',
      globals: {
        React: 'react',
      },
    },
    plugins: [
      resolve({
        customResolveOptions: { moduleDirectory: 'node_modules' },
        browser: true
      }),
      commonjs(),
    ],
  }
];
