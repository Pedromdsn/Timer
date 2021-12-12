import { useRouter } from "next/router"
import { GetStaticProps } from "next"
import { useEffect, useState } from "react"
import Clock from "../components/Clock"

const Time = () => {
	const router = useRouter()

	const { time } = router.query

	return (
		<main className="h-screen" style={{ background: "#222" }}>
			<div className="flex flex-col justify-center items-center  h-full gap-10 pb-40" style={{ color: "#555" }}>
				<div className="text-7xl font-extrabold">Faltam</div>
				{ time && <Clock time={+time * 1000} />}
			</div>
		</main>
	)
}

export default Time
