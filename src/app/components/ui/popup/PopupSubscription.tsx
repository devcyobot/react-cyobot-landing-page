"use client";
import { Button } from "@/app/components/ui/Button";
import FormInput from "@/app/components/ui/FormInput";
import LogoBadge from "@/app/components/ui/LogoBadge";
import useSessionStorage from "@/app/hooks/use-session-storage";
import Link from "next/link";
import { FC, useEffect, useState } from "react";
import { useFormState } from "react-dom";

type PopupSubscriptionProps = {
	onClose?: () => void;
};

export const submitSubscriptionForm = async (
	prevState: {
		success: boolean;
		errors?: { message: string; path: string }[];
	} | null,
	formData: FormData
) => {
	try {
		let user = {
			name: (formData.get("subscription-name") as string) || "",
			email: (formData.get("subscription-email") as string) || "",
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
			errors: responseData.errors[0].data.errors,
		};
	} catch (error) {
		return {
			success: false,
		};
	}
};

const PopupSubscription: FC<PopupSubscriptionProps> = (props) => {
	const [isVisible, setIsVisible] = useState<boolean>(false);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [message, setMessage] = useState<string | null>(null);
	const [data, formAction] = useFormState(submitSubscriptionForm, null);
	const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
	const [animateForm, setAnimateForm] = useState<boolean>(false);
	const [seenSubscriptionPopup, setSeenSubscriptionPopup] =
		useSessionStorage<boolean>("seenSubscriptionPopup", false);

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault(); // Prevent the default form submission
		setMessage(null); // Clear any previous error message
		setIsSubmitted(true);

		const formData = new FormData(event.currentTarget);
		setIsLoading(true);
		formAction(formData);
		event.currentTarget.reset();
	};

	useEffect(() => {
		// Trigger the visibility state after the component has mounted
		setTimeout(() => setIsVisible(true), 10); // Small delay to ensure mounting transition

		if (data) {
			if (data.success) {
				setMessage("SUCCESS: Your email was succesfully subscribed to CYOBot.");
			} else if (
				!data.success &&
				data.errors[0].message === "Value must be unique" &&
				data.errors[0].path === "email"
			) {
				setMessage("ERROR: This email was already subscribed to CYOBot.");
			} else {
				setMessage(
					"ERROR: Your email was not able to subscribe to CYOBot. Please contact CYOBot for further assistance."
				);
			}
			setIsLoading(false);
		}
	}, [data]);

	const handleClose = () => {
		setSeenSubscriptionPopup(true);
		setIsVisible(false);
		if (props.onClose) setTimeout(props.onClose, 300); // Delay to match the transition duration
	};

	if (seenSubscriptionPopup) return;

	return (
		<div
			className={`${
				isLoading ? "cursor-wait" : "cursor-default"
			} px-3 fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300 ${
				isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
			} overflow-auto`}
		>
			<div className="relative max-h-[95%]">
				<div className="py-5">
					<div
						className={`p-5 bg-brand-purple-dark rounded-xl shadow-lg overflow-auto flex flex-col justify-center transform transition-all duration-300 ${
							isVisible
								? "scale-100 translate-y-0 opacity-100"
								: "scale-90 -translate-y-10 opacity-0"
						}`}
					>
						<button
							onClick={handleClose}
							className="absolute top-5 right-5 text-white bg-transparent hover:bg-gray-500 rounded transition w-5"
						>
							&#10005;
						</button>
						<div className="my-5 gap-y-5 px-5 sm:px-10 flex flex-col justify-evenly">
							<div className="mx-auto h-10 2xl:h-11">
								<p className="sr-only">CYOBot Company</p>
								<LogoBadge description={""} src={"/cyobot-logo.png"} />
							</div>
							<h1 className="text-center text-brand-green text-3xl sm:text-[2rem] md:text-4xl lg:text-[2.5rem] xl:text-5xl 2xl:text-6xl font-vt323">
								Get the latest updates from us!
							</h1>
							<div
								className={`grid grid-cols-1 transition-all duration-500 ease-in-out ${
									isSubmitted
										? "animate-slideOut"
										: animateForm
											? "animate-slideIn"
											: ""
								}`}
							>
								{!isSubmitted && (
									<div className="gap-y-2 grid grid-cols-1 justify-evenly">
										<p className="font-roboto text-white text-start text-sm sm:text-base 2xl:text-lg">
											Enter your email for the latest updates from us and
											exclusive deals of CYOBot products
										</p>
										<form
											className="flex flex-col justify-evenly mx-auto w-full"
											onSubmit={handleSubmit}
										>
											<label
												htmlFor="subscription-name"
												className="text-white font-robotoRegular mt-3 grid grid-cols-1 items-center"
											>
												<FormInput
													type="name"
													name="subscription-name"
													placeholder="Name"
													id="subscription-name"
													bgColor="dark"
												/>
											</label>
											<label
												htmlFor="subscription-email"
												className="text-white font-robotoRegular mt-3 grid grid-cols-1 items-center"
											>
												<FormInput
													type="email"
													name="subscription-email"
													placeholder="Email"
													id="subscription-email"
													bgColor="dark"
												/>
											</label>
											<div className="font-roboto flex flex-col justify-evenly gap-y-2 h-1/4 w-full my-5">
												<p className="text-white text-center text-sm sm:text-base 2xl:text-lg">
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
											</div>
											<Button
												type="submit"
												size="xl"
												disabled={isLoading}
												variant={"positive"}
												className="mx-auto md:text-xl xl:text-2xl text-white font-roboto"
											>
												JOIN OUR LIST
											</Button>
										</form>
									</div>
								)}
							</div>
							<div
								className={`gap-y-10 grid grid-rows-1 grid-cols-1 justify-items-center transition-all duration-500 ease-in-out delay-500 ${
									!isSubmitted ? "animate-slideOut hidden" : "animate-slideIn"
								}`}
							>
								{isSubmitted && (
									<>
										{isLoading ? (
											<svg
												viewBox="0 0 50 50"
												xmlns="http://www.w3.org/2000/svg"
												fill="none"
												className="w-full h-11"
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
											<p className="text-white text-center text-sm sm:text-xl my-auto">
												{message}
											</p>
										)}

										<Button
											size="xl"
											disabled={isLoading}
											variant={"positive"}
											className="mx-auto md:text-xl xl:text-2xl text-white font-roboto"
											onClick={() => {
												setAnimateForm(true);
												setIsSubmitted(false);
											}}
										>
											{data !== null && !data.success
												? "TRY AGAIN"
												: "SUBSCRIBE MORE"}
										</Button>
									</>
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PopupSubscription;
