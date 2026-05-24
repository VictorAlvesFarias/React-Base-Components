
function prefixList(classes) {
    return classes
        .split(/\s+/)
        .filter(Boolean)
        .map((c) => {
            const match = c.match(/^((?:[a-zA-Z0-9_-]+:)*)(.+)$/)

            if (!match) {
                return c
            }

            const variant = match[1]
            const className = match[2]

            if (className.startsWith('lib-')) {
                return c
            }

            return `${variant}lib-${className}`
        })
        .join(' ')
}

export function prefixClasses() {
    return {
        name: 'prefix-classes',
        enforce: 'pre',
        transform(code, id) {
            if (!id.includes('node_modules') && /\.(ts|tsx|js|jsx)$/.test(id)) {
                if (!code.includes('className')) {
                    return null
                }

                let newCode = code

                // className="classes estáticas"
                newCode = newCode.replace(/className="([^"]+)"/g, (_, classes) => {
                    return `className="${prefixList(classes)}"`
                })

                // className='classes estáticas'  <- adicione isso
                newCode = newCode.replace(/className='([^']+)'/g, (_, classes) => {
                    return `className='${prefixList(classes)}'`
                })

                // className={'classes estáticas'}
                newCode = newCode.replace(/className=\{'([^']+)'\}/g, (_, classes) => {
                    return `className={'${prefixList(classes)}'}`
                })

                // className={expressao + 'classes estáticas'} ou className={'classes estáticas' + expressao}
                newCode = newCode.replace(/className=\{([^}]*?)'([^']+)'([^}]*?)\}/g, (_, before, classes, after) => {
                    return `className={${before}'${prefixList(classes)}'${after}}`
                })

                // Mesma coisa com aspas duplas dentro do {}
                newCode = newCode.replace(/className=\{([^}]*?)"([^"]+)"([^}]*?)\}/g, (_, before, classes, after) => {
                    return `className={${before}"${prefixList(classes)}"${after}}`
                })

                newCode = newCode.replace(/className=\{`([^`]+)`\}/g, (_, content) => {
                    const prefixed = content.replace(/([^${}]+)|\$\{[^}]*\}/g, (segment) => {
                        if (segment.startsWith('${')) {
                            return segment
                        }

                        return segment.replace(/(\S+)/g, (cls) => {
                            const match = cls.match(/^((?:[a-zA-Z0-9_-]+:)*)(.+)$/)
                            if (!match) {
                                return cls
                            }

                            const variant = match[1]
                            const className = match[2]

                            if (className.startsWith('lib-')) {
                                return cls
                            }

                            return `${variant}lib-${className}`
                        })
                    })
                    return `className={\`${prefixed}\`}`
                })

                return { code: newCode, map: null }
            }
            return null
        }
    }
}