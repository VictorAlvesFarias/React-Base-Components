
function prefixList(classes: string): string {
    return classes
        .split(/\s+/)
        .filter(Boolean)
        .map((c: string) => {
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
        enforce: 'pre' as const,
        transform(code: any, id: any) {
            if (!id.includes('node_modules') && /\.(ts|tsx|js|jsx)$/.test(id)) {
                if (!code.includes('className')) {
                    return null
                }

                let newCode = code

                newCode = newCode.replace(/className="([^"]+)"/g, (_: any, classes: any) => {
                    return `className="${prefixList(classes)}"`
                })

                newCode = newCode.replace(/className=\{'([^']+)'\}/g, (_: any, classes: any) => {
                    return `className={'${prefixList(classes)}'}`
                })

                newCode = newCode.replace(/className=\{`([^`]+)`\}/g, (_: any, content: any) => {
                    const prefixed = content.replace(/([^${}]+)|\$\{[^}]*\}/g, (segment: any) => {
                        if (segment.startsWith('${')) {
                            return segment
                        }

                        return segment.replace(/(\S+)/g, (cls: any) => {
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