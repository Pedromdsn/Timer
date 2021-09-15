import Head from "next/head"

import "tailwindcss/tailwind.css"
import "react-toastify/dist/ReactToastify.css"

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
        <link rel="icon" type="image/ico" href="/coco.ico"/>
				<title>Temporizador</title>
				<meta name="description" content="O melhor temporizador nda web" />
				<meta name="author" content="Coco Blanco" />
			</Head>
			<Component {...pageProps} />
		</>
	)
}

export default MyApp
