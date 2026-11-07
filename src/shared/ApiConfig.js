const development = {
  baseUrl: 'http://127.0.0.1:8000',
  apiUrl: 'http://127.0.0.1:8000/api',
}

const production = {
  baseUrl: import.meta.env.VITE_BASE_URL ?? '',
  apiUrl: import.meta.env.VITE_API_URL ?? '/api',
}

export const App = import.meta.env.DEV ? development : production
