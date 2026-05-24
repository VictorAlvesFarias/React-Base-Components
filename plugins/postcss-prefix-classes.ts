import postcss from "postcss"
import { root } from "postcss"

const prefixCssClasses = () => {
    return {
        postcssPlugin: 'prefix-css-classes',
        Once(root: any) {
            root.walkRules((rule: any) => {
                rule.selector = rule.selector.replace(
                    /\.(-?[a-zA-Z][a-zA-Z0-9_\\:-]*)/g,
                    (match: any, cls: any) => {
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

prefixCssClasses.postcss = true

export default prefixCssClasses