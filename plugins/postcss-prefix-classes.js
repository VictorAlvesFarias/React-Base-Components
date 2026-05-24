const prefixCssClasses = () => {
    return {
        postcssPlugin: 'prefix-css-classes',
        Once(root) {
            root.walkRules(rule => {
                rule.selector = rule.selector.replace(
                    /\.(-?[a-zA-Z][a-zA-Z0-9_\\:\[\]-]*)/g,
                    (match, cls) => {
                        if (cls.startsWith('lib-')) return match

                        const unescaped = cls.replace(/\\/g, '')
                        const parts = unescaped.split(':')
                        const utilityClass = parts[parts.length - 1]
                        const variants = parts.slice(0, -1)
                        const escapedUtility = utilityClass
                            .replace(/\[/g, '\\[')
                            .replace(/\]/g, '\\]')

                        return `.${variants.length ? variants.join('\\:') + '\\:' : ''}lib-${escapedUtility}`
                    }
                )
            })
        }
    }
}

prefixCssClasses.postcss = true

export default prefixCssClasses