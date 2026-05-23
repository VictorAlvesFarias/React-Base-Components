export function prefixClasses() {
    return {
        name: 'prefix-classes',
        transform(code: any, id: any) {
            // Executa apenas em arquivos fonte da biblioteca (ts, jsx, tsx)
            if (!id.includes('node_modules') && /\.(ts|tsx|js|jsx)$/.test(id)) {

                // Captura o padrão className="classe1 classe2"
                return {
                    code: code.replace(/className\s*=\s*"([^"]+)"/g, (match: any, classNames: any) => {
                        const prefixed = classNames
                            .split(' ')
                            .filter(Boolean)
                            .map((c:any) => {
                                // Se já tiver prefixo ou for classe dinâmica injetada, mantém
                                if (c.startsWith('lib-') || c.startsWith('{') || c.startsWith('$')) return c;
                                return `lib-${c}`;
                            })
                            .join(' ');

                        return `className="${prefixed}"`;
                    }),
                    map: null // Mantém o source map simples
                };
            }
        }
    };
}
