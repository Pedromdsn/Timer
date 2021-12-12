export const getTime = (timeDif: number) => {
	return {
		dias: Math.floor(timeDif / (60 * 60 * 24)),
		horas: Math.floor((timeDif % (60 * 60 * 24)) / (60 * 60)),
		minutos: Math.floor((timeDif % (60 * 60)) / 60),
		segundos: Math.floor(timeDif % 60),
	}
}
