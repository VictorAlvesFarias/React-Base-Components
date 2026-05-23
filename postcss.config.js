import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'

const postcssIsolateVariables = () => {
  return {
    postcssPlugin: 'postcss-isolate-variables',
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

postcssIsolateVariables.postcss = true

export default {
  plugins: [
    tailwindcss(),
    autoprefixer(),
    postcssIsolateVariables()
  ]
}