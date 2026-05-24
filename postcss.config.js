import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'

const prefixCssClasses = () => {
  return {
    postcssPlugin: 'prefix-css-classes',
    postcss = true,
    Once(root) {
      root.walkRules(rule => {
        rule.selector = rule.selector.replace(
          /\.(-?[a-zA-Z][a-zA-Z0-9_\\:-]*)/g,
          (match, cls) => {
            if (cls.startsWith('lib-')) {
              return match
            }

            const unescaped = cls.replace(/\\/g, '')
            const parts = unescaped.split(':')
            const utilityClass = parts[parts.length - 1]
            const variants = parts.slice(0, -1)
            const prefixed = [...variants, `lib-${utilityClass}`].join('\\:')

            return `.${variants.length ? variants.join('\\:') + '\\:' : ''}lib-${utilityClass}`
          }
        )
      })
    }
  }
}

const postcssIsolateVariables = () => {
  return {
    postcssPlugin: 'postcss-isolate-variables',
    postcss = true,
    Once(root) {
      root.walkDecls(decl => {
        if (decl.prop.startsWith('--tw-')) {
          decl.prop = decl.prop.replace('--tw-', '--lib-tw-')
        }
        if (decl.value.includes('--tw-')) {
          decl.value = decl.value.replace(/--tw-/g, '--lib-tw-')
        }
      })
    }
  }
}

export default {
  plugins: [
    tailwindcss(),
    autoprefixer(),
    prefixCssClasses(),       
    postcssIsolateVariables() 
  ]
}