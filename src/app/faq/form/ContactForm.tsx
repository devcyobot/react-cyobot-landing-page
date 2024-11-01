"use client";
import Image from "next/image";
import { FC, useEffect, useState } from "react";
import { useFormState } from "react-dom";

export const submitContactForm = async (
	prevState: { success: boolean } | null,
	formData: FormData
) => {
	try {
		let user = {
			email: (formData.get("email") as string) || "",
			title: (formData.get("name") as string) || "",
			message: (formData.get("message") as string) || "",
		};

		let res;
		res = await fetch(
			`${process.env.NEXT_PUBLIC_DASHBOARD_URL}/api/landing-page-contacts`,
			{
				method: "POST",
				credentials: "include",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(user),
			}
		);

		if (res.ok) {
			return {
				success: true,
			};
		}

		return { success: false };
	} catch (error) {
		console.error(error);
		throw new Error(error as string);
	}
};

const ContactForm: FC = () => {
	// const { pending } = useFormStatus();
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [message, setMessage] = useState<string | null>(null);
	const [data, formAction] = useFormState(submitContactForm, null);

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault(); // Prevent the default form submission
		setMessage(null); // Clear any previous error message

		const formData = new FormData(event.currentTarget);
		setIsLoading(true);
		formAction(formData);
	};

	useEffect(() => {
		if (data) {
			if (data.success) {
				setMessage("Message was succesfully sent to CYOBot.");
			} else {
				setMessage(
					"Message was not able to send to CYOBot. Please try again later."
				);
			}
			setIsLoading(false);
		}
	}, [data]);

	return (
		<section className="relative w-full bg-white h-auto max-h-[55rem] sm:max-h-[52rem] lg:max-h-[45rem] grid grid-cols-1 grid-rows-2 lg:grid-cols-2 lg:grid-rows-1 gap-x-3 justify-items-center items-center p-10 lg:p-16 my-5">
			<div className="z-10 flex flex-col justify-center items-center h-full w-full font-vt323 text-black">
				<p className="text-center w-full text-lg">Still have more question?</p>
				<h2 className="w-full text-center text-4xl lg:text-5xl">
					GET IN TOUCH WITH US!
				</h2>
				<figure className="relative w-full h-1/2">
					<Image
						src="/faq-robots.png"
						alt="CYOBot Robots"
						quality={80}
						fill
						sizes="(max-width: 768px) 100vw, 50vw"
						className="object-contain"
					/>
				</figure>
			</div>
			<div className="z-10 w-full h-full flex flex-col justify-evenly">
				<div className="h-10">
					{isLoading ? (
						<svg
							viewBox="0 0 50 50"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							className="w-full h-10"
						>
							<path
								fill="#A2A2A2"
								d="M43.935,25.145c0-10.318-8.362-18.68-18.68-18.68c-10.317,0-18.68,8.362-18.68,18.68h4.068
                c0-8.073,6.539-14.612,14.612-14.612c8.073,0,14.612,6.539,14.612,14.612H43.935z"
							>
								<animateTransform
									attributeType="xml"
									attributeName="transform"
									type="rotate"
									from="0 25 25"
									to="360 25 25"
									dur="0.6s"
									repeatCount="indefinite"
								/>
							</path>
						</svg>
					) : (
						<p
							className={`w-full h-16 text-sm sm:text-base sm:h-14 lg:h-6 font-roboto ${
								data?.success ? "text-brand-purple" : "text-brand-red"
							} justify-self-center`}
						>
							{message}
						</p>
					)}
				</div>
				<form
					onSubmit={handleSubmit}
					className="font-vt323 w-full h-full lg:h-4/5 grid grid-cols-1 grid-rows-[1fr_1fr_5fr]"
				>
					<label className="h-full w-full">
						<span className="sr-only">Name</span>
						<input
							type="text"
							placeholder="Name"
							name="name"
							required
							className="text-lg p-4 lg:p-5 w-full h-[90%] bg-[#E3E3E3] rounded-lg"
						/>
					</label>
					<label>
						<span className="sr-only">Email</span>
						<input
							type="email"
							placeholder="Email"
							name="email"
							required
							className="text-lg p-4 lg:p-5 w-full h-[90%] bg-[#E3E3E3] rounded-lg"
						/>
					</label>
					<label className="relative">
						<span className="sr-only">Message</span>
						<textarea
							placeholder="Message"
							name="message"
							required
							className="text-lg p-4 lg:p-5 w-full h-full bg-[#E3E3E3] rounded-lg"
						/>
						<button
							aria-disabled={isLoading}
							type="submit"
							className="bg-[url('/icon/send-icon.png')] bg-no-repeat bg-center bg-cover rounded-full absolute bottom-2 right-2 w-10 h-10 hover:shadow-md hover:shadow-brand-green"
						></button>
					</label>
				</form>
			</div>
			<div className="hidden absolute inset-0 sm:flex justify-center items-center">
				<Image
					src="/faq-form-frame.png"
					alt="CYOBot Teams"
					quality={80}
					fill
					sizes="100vw"
					className="object-contain mx-auto"
				/>
			</div>
		</section>
	);
};

export default ContactForm;
