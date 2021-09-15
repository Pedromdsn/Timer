import { useRouter } from "next/router"
import { useEffect, useState } from "react"

const Page404 = () => {
	const rout = useRouter()
	useEffect(() => {
		rout.push("/")
	}, [])
	return (
		<main className="h-screen" style={{ background: "#222" }}>
			<div className="flex flex-col justify-center items-center h-full gap-10 pb-40 text-9xl font-extrabold" style={{ color: "#555" }}>
				404
			</div>
		</main>
	)
}

export default Page404
