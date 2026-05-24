const prefixCssClasses = () => {
    return {
        postcssPlugin: 'prefix-css-classes',
        Once(root) {
            root.walkRules(rule => {
                rule.selector = rule.selector.replace(
                    /\.(-?[a-zA-Z][a-zA-Z0-9_\\:-]*(?:\\\[[^\]]*\\\])?)/g,
                    (match, cls) => {
                        if (cls.startsWith('lib-')) return match

                        // Não remove escapes — trabalha direto com o CSS escapado
                        const parts = cls.split('\\:')
                        const utilityClass = parts[parts.length - 1]
                        const variants = parts.slice(0, -1)

                        return `.${variants.length ? variants.join('\\:') + '\\:' : ''}lib-${utilityClass}`
                    }
                )
            })
        }
    }
}

prefixCssClasses.postcss = true

export default prefixCssClasses