module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  corePlugins: {
    preflight: false,
  },
  // Opcional: inclua apenas as utilities que você usa
  safelist: [
    // Adicione aqui as classes que você quer garantir que sejam geradas
  ]
}