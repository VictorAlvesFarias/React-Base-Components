import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'
import prefixCssClasses from './plugins/postcss-prefix-classes.js'
import postcssIsolateVariables from './plugins/postcss-isolate-variables.js'

export default {
  plugins: [
    tailwindcss(),
    autoprefixer(),
    prefixCssClasses(),       
    postcssIsolateVariables() 
  ]
}