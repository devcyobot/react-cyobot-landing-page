"use client";
import { FC, FormEvent, useEffect, useState } from "react";
import Image from "next/image";
import { useFormState } from "react-dom";
import { GreenButton } from "../components/ui/button/GreenButton";
import Link from "next/link";

export const submitSubscriptionForm = async (
	prevState: { success: boolean; message?: string } | null,
	formData: FormData
) => {
	try {
		let user = {
			email: (formData.get("email") as string) || "",
		};

		let res;
		res = await fetch(
			`${process.env.NEXT_PUBLIC_DASHBOARD_URL}/api/landing-page-email-subscriptions`,
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

		const responseData = await res.json();

		return {
			success: false,
			message: `${responseData.errors[0].data.errors[0].field}: ${responseData.errors[0].data.errors[0].message}`,
		};
	} catch (error) {
		return {
			success: false,
		};
	}
};

const EmailSubscription: FC = () => {
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [message, setMessage] = useState<string | null>(null);
	const [data, formAction] = useFormState(submitSubscriptionForm, null);

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
				setMessage("Your email was succesfully subscribed to CYOBot.");
			} else if (
				!data.success &&
				data.message === "email: Value must be unique"
			) {
				setMessage("This email was already subscribed to CYOBot.");
			} else {
				setMessage(
					"Your email was not able to subscribe to CYOBot. Please contact CYOBot for further assistance."
				);
			}
			setIsLoading(false);
		}
	}, [data]);

	return (
		<section className="bg-white">
			<div className="mx-auto max-w-[1536px] relative w-full h-[40rem] grid grid-cols-1 grid-rows-2 lg:grid-cols-2 lg:grid-rows-1 gap-x-3 justify-items-center items-center p-10 lg:p-16">
				<div className="z-10 flex flex-col justify-center items-center h-full w-full font-vt323 text-black">
					<h2 className="w-full text-center text-4xl lg:text-5xl">
						GET IN TOUCH WITH US!
					</h2>
					<p className="text-center w-full text-lg">
						Enter your email for the latest updates from us and exclusive deals
						of CYOBot products
					</p>
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
				<div className="z-10 w-full sm:w-2/3 lg:w-[90%] h-full flex flex-col justify-center gap-y-5">
					<div className="h-11">
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
						className="font-vt323 grid grid-cols-1 gap-y-5"
					>
						<label>
							<span className="sr-only">Email</span>
							<input
								type="email"
								placeholder="Email"
								name="email"
								required
								className="text-lg p-4 lg:p-5 w-full bg-[#E3E3E3] rounded-lg"
							/>
						</label>
						<p className="text-center">
							By joining our list you agree to our
							<Link
								passHref={true}
								target="_blank"
								href="https://www.roboticsquest.com/cyobot-privacy-policy.pdf"
								className="underline mx-1"
							>
								Privacy Policy
							</Link>
						</p>
						<div className="w-1/2 mx-auto">
							<GreenButton
								description="JOIN OUR LIST"
								type="submit"
								disabled={isLoading}
							/>
						</div>
					</form>
				</div>
				<div className="hidden absolute inset-0 sm:flex justify-center items-center">
					<Image
						src="/faq-form-frame.png"
						alt="CYOBot Teams"
						quality={80}
						fill
						sizes="100vw"
						className="object-contain"
					/>
				</div>
			</div>
		</section>
	);
};

export default EmailSubscription;
