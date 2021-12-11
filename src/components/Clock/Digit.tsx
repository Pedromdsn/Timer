import { memo } from "react"

interface DigitProps {
	digit?: number
	text: string
}

const Digit = ({ digit, text }: DigitProps) => {
	return (
		<div>
			<div className="text-5xl">{+digit || "00"}</div>
			<div>{text}</div>
		</div>
	)
}

export default memo(Digit)
