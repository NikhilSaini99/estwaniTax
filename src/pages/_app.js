import '@/styles/globals.css'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Provider } from 'react-redux'
import { store } from "@/state/store"


export default function App({ Component, pageProps }) {
  const theme = createTheme({
    typography: {
      fontFamily: [
        'Jacques Francois',
        'ui-sans-serif',
        'ui-sans-serif',
        'BlinkMacSystemFont',
        "Segoe UI", 'Roboto', "Helvetica Neue", 'Arial', "Noto Sans", 'sans-serif', "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"
      ].join(','),
    },
  });

  return <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  </Provider>
}
