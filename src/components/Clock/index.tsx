import { memo } from "react"
import Digit from "./Digit"
import { GetStaticProps } from "next"
import { useEffect, useState } from "react"
import { getTime } from "../../utils/utils"

interface ClockProps {
	time: number
}

const Clock = ({ time }: ClockProps) => {
	const [timer, setTimer] = useState<number>()

	useEffect(() => {
		const interval = setInterval(() => {
			setTimer((e) => e - 1 || (time - new Date().getTime()) / 1000)
			console.log(timer)
		}, 1000)
		return () => clearInterval(interval)
	}, [])

	const clock = getTime(timer)
	return (
		<div className="flex text-center items-center text-2xl gap-10">
			<Digit digit={clock.dias} text="Dias" />
			<Digit digit={clock.horas} text="Horas" />
			<Digit digit={clock.minutos} text="Minutos" />
			<Digit digit={clock.segundos} text="Segundos" />
		</div>
	)
}

export default memo(Clock)
