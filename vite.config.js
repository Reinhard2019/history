// @ts-check
const reactPlugin = require('vite-plugin-react')
const path = require('path');

/**
 * @type { import('vite').UserConfig }
 */
const config = {
  assetsDir: 'public',
  jsx: 'react',
  plugins: [reactPlugin],
  optimizeDeps: {
    exclude: [''],
  },
  alias: {
    '/@/': path.resolve(__dirname, 'src')
  }
}

module.exports = config
