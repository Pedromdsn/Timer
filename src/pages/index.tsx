import { useRouter } from "next/router"
import { useForm } from "react-hook-form"
import { toast, ToastContainer } from "react-toastify"

type FormData = {
	data: string
}

const Home = () => {
	const { register, handleSubmit } = useForm()
	const router = useRouter()

	const submit = (e: FormData) => {
		const time = e.data.split("/").reverse().join("-")
		const parsedDateInSeconds = Date.parse(time) / 1000

		if (!parsedDateInSeconds) {
			toast.error("Data Invalida", {
				position: "bottom-right",
				autoClose: 3000,
				hideProgressBar: true,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "colored",
			})
			return
		}

		router.push({
      pathname: "/tempo",
      query:{
        time: parsedDateInSeconds
      }
    })
	}

	return (
		<main className="h-screen" style={{ background: "#222" }}>
			<form
				className="flex flex-col items-center justify-center h-screen gap-5 pb-20"
				style={{ color: "#444" }}
				onSubmit={handleSubmit(submit)}>
				<h1 className="text-7xl font-extrabold">Contador</h1>
				<h2 className="text-4xl font-bold">Informe a data</h2>
				<input
					{...register("data")}
					type="text"
					placeholder="DD/MM/AAAA"
					className="px-7 py-2 rounded-2xl text-2xl placeholder-gray-500  text-gray-900 focus:outline-none focus:ring ring-gray-600"
					style={{ background: "#444" }}
					required
				/>
				<input
					type="submit"
					className="text-2xl px-8 py-2 rounded-2xl cursor-pointer"
					style={{ color: "#222", background: "#444" }}
					value="Iniciar Contagem"
				/>
			</form>
			<ToastContainer />
		</main>
	)
}

export default Home
