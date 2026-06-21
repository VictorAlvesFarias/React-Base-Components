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

function findClosingBrace(code, openIdx) {
    let depth = 0

    for (let i = openIdx; i < code.length; i++) {
        if (code[i] === '{') {
            depth++
        }
        else if (code[i] === '}') {
            depth--

            if (depth === 0) {
                return i
            }
        }
    }

    return -1
}

function prefixInsideBraces(expr) {
    expr = expr.replace(/'([^']+)'/g, (_, classes) => {
        return `'${prefixList(classes)}'`
    })

    expr = expr.replace(/"([^"]+)"/g, (_, classes) => {
        return `"${prefixList(classes)}"`
    })

    return expr
}

export function prefixClasses() {
    return {
        name: 'prefix-classes',
        enforce: 'pre',
        transform(code, id) {
            if (id.includes('node_modules') || !/\.(ts|tsx|js|jsx)$/.test(id)) {
                return null
            }

            if (!code.includes('className')) {
                return null
            }

            let result = ''
            let i = 0

            while (i < code.length) {
                const classNameIdx = code.indexOf('className=', i)

                if (classNameIdx === -1) {
                    result += code.slice(i)
                    break
                }

                result += code.slice(i, classNameIdx)
                result += 'className='
                i = classNameIdx + 'className='.length

                const next = code[i]

                if (next === '"') {
                    const end = code.indexOf('"', i + 1)

                    if (end === -1) {
                        result += code.slice(i)
                        break
                    }

                    const classes = code.slice(i + 1, end)
                    result += `"${prefixList(classes)}"`
                    i = end + 1
                }
                else if (next === "'") {
                    const end = code.indexOf("'", i + 1)

                    if (end === -1) {
                        result += code.slice(i)
                        break
                    }

                    const classes = code.slice(i + 1, end)
                    result += `'${prefixList(classes)}'`
                    i = end + 1
                }
                else if (next === '{') {
                    const closeIdx = findClosingBrace(code, i)

                    if (closeIdx === -1) {
                        result += code.slice(i)
                        break
                    }

                    const inner = code.slice(i + 1, closeIdx)

                    if (inner.startsWith('`') && inner.endsWith('`')) {
                        const tplContent = inner.slice(1, -1)

                        const prefixed = tplContent.replace(/([^${}]+)|\$\{[^}]*\}/g, (segment) => {
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

                        result += `{\`${prefixed}\`}`
                    }
                    else {
                        result += `{${prefixInsideBraces(inner)}}`
                    }

                    i = closeIdx + 1
                }
                else {
                    result += next
                    i++
                }
            }

            return result !== code ? { code: result, map: null } : null
        }
    }
}