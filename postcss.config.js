module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
  serverRuntimeConfig: {
      secret: 'THIS IS USED TO SIGN AND VERIFY JWT TOKENS, REPLACE IT WITH YOUR OWN SECRET, IT CAN BE ANY STRING'
  },
  publicRuntimeConfig: {
      apiUrl: process.env.NODE_ENV === 'development'
          ? 'http://10.1.6.22:89/dev/gestorequipes/api/v1' //'http://localhost:3000/api' // development api
          : 'http://10.1.6.22:89/dev/gestorequipes/api/v1' //'http://localhost:3000/api' // production api
  }
}
