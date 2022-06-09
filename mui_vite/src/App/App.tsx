import {useState} from 'react'
import {Button, CssBaseline, Link, ThemeProvider, Typography} from '@mui/material'
import {theme} from '../theme'

const App: React.FC = () => {
    const [count, setCount] = useState(0)

    return (
        <>
            <CssBaseline enableColorScheme/>
            <ThemeProvider theme={theme}>
                <header>
                    <Typography variant={'h1'}>Hello Vite + React!</Typography>
                    <Button onClick={() => setCount((count) => count + 1)}>
                        count is: {count}
                    </Button>
                    <Typography>
                        Edit <code>App.tsx</code> and save to test HMR updates.
                    </Typography>
                    <Typography>
                        <Link
                            href="https://reactjs.org"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Learn React
                        </Link>
                        {' | '}
                        <Link
                            href="https://vitejs.dev/guide/features.html"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Vite Docs
                        </Link>
                    </Typography>
                </header>
            </ThemeProvider>
        </>
    )
}

export default App
