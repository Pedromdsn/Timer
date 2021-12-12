import { useRouter } from "next/router"
import { GetStaticProps } from "next"
import { useEffect, useState } from "react"
import Clock from "../components/Clock"

const Time = () => {
	const router = useRouter()

	const { time } = router.query
	const [savedTime, setSavedTime] = useState(+time * 1000)


	// useEffect(() => {
	// 	setSavedTime(e => +time * 1000)
	// 	// if (!time) router.push("/")
	// }, [])

	return (
		<main className="h-screen" style={{ background: "#222" }}>
			<div className="flex flex-col justify-center items-center  h-full gap-10 pb-40" style={{ color: "#555" }}>
				<div className="text-7xl font-extrabold">Faltam</div>
				<Clock time={savedTime} />
			</div>
		</main>
	)
}

export default Time
