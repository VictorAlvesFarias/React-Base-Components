import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'
import prefixCssClasses from './plugins/postcss-prefix-classes.ts'
import postcssIsolateVariables from './plugins/postcss-isolate-variables.ts'

export default {
  plugins: [
    tailwindcss(),
    autoprefixer(),
    prefixCssClasses(),       
    postcssIsolateVariables() 
  ]
}