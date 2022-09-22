
import '../styles/globals.css'
import Nav from '../components/Nav.js'

function MyApp({ Component, pageProps }) {
    return (
        <>

            <Component {...pageProps} />
        </>
    )
}

export default MyApp