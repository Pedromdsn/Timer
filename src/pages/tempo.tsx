import { useRouter } from "next/router"
import { GetStaticProps } from "next"
import { useEffect, useState } from "react"

type Time = {
	dias: number
	horas: number
	minutos: number
	segundos: number
}

const Time = () => {
	const rout = useRouter()

	const { time } = rout.query

	const timeNow = Date.now() / 1000
	const timeDif = +time - timeNow

	const [tempo, setTempo] = useState<Time>()

	setTimeout((e) => {
		setTempo({
			dias: Math.floor(timeDif / (60 * 60 * 24)),
			horas: Math.floor((timeDif % (60 * 60 * 24)) / (60 * 60)),
			minutos: Math.floor((timeDif % (60 * 60)) / 60),
			segundos: Math.floor(timeDif % 60),
		})
	}, 1000)

	useEffect(() => {
		if (!time) rout.push("/")
	}, [])

	return (
		<main className="h-screen" style={{ background: "#222" }}>
			<div className="flex flex-col justify-center items-center  h-full gap-10 pb-40" style={{ color: "#555" }}>
				<div className="text-7xl font-extrabold">Faltam</div>
				<div className="flex text-center items-center text-2xl gap-10">
					<div>
						<div className="text-5xl">{tempo?.dias ?? "00"}</div>
						<div>Dias</div>
					</div>
					<div>
						<div className="text-5xl">{tempo?.horas ?? "00"}</div>
						<div>Horas</div>
					</div>
					<div>
						<div className="text-5xl">{tempo?.minutos ?? "00"}</div>
						<div>Minutos</div>
					</div>
					<div>
						<div className="text-5xl">{tempo?.segundos ?? "00"}</div>
						<div>Segundos</div>
					</div>
				</div>
			</div>
		</main>
	)
}

export default Time
