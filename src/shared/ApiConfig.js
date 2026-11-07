const appApi = {
  development: {
    baseUrl: 'http://127.0.0.1:8000',
    apiUrl: 'http://127.0.0.1:8000/api',
  },
  production: {
    baseUrl: '',
    apiUrl: '',
  },
  apiStatus: 'development',
}
export const App = appApi.apiStatus === 'development' ? appApi.development : appApi.production
