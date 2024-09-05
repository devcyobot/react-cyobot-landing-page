import { FC, useEffect, useState } from "react";
import LogoBadge from "../LogoBadge";
import FormInput from "../FormInput";
import Link from "next/link";
import { GreenButton } from "../button/GreenButton";
import { useFormState } from "react-dom";

type PopupSubscriptionProps = {
	onClose: () => void;
};

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

const PopupSubscription: FC<PopupSubscriptionProps> = (props) => {
	const [isVisible, setIsVisible] = useState<boolean>(false);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [message, setMessage] = useState<string | null>(null);
	const [data, formAction] = useFormState(submitSubscriptionForm, null);
	const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
	const [animateForm, setAnimateForm] = useState<boolean>(false);

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault(); // Prevent the default form submission
		setMessage(null); // Clear any previous error message
		setIsSubmitted(true);

		const formData = new FormData(event.currentTarget);
		setIsLoading(true);
		formAction(formData);
	};

	useEffect(() => {
		// Trigger the visibility state after the component has mounted
		setTimeout(() => setIsVisible(true), 10); // Small delay to ensure mounting transition

		if (data) {
			if (data.success) {
				setMessage("Your email was succesfully subscribed to CYOBot Team.");
			} else if (
				!data.success &&
				data.message === "email: Value must be unique"
			) {
				setMessage("This email was already subscribed to CYOBot Team.");
			} else {
				setMessage(
					"Your email was not able to subscribe to CYOBot Team. Please contact CYOBot for further assistance."
				);
			}
			setIsLoading(false);
		}
	}, [data]);

	const handleClose = () => {
		setIsVisible(false);
		setTimeout(props.onClose, 300); // Delay to match the transition duration
	};
	return (
		<div
			className={`${
				isLoading ? "cursor-wait" : "cursor-default"
			} px-3 fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300 ${
				isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
			}`}
		>
			<div
				className={`h-2/3 max-h-custom:min-h-80 min-h-[26rem] max-h-[30rem] p-5 bg-brand-purple-dark rounded-xl shadow-lg overflow-auto flex flex-col transform transition-all duration-300 ${
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
				<div className="px-5 sm:px-10 flex flex-col justify-evenly h-full">
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
							<div className="flex flex-col justify-evenly">
								<p className="text-white text-center text-sm sm:text-base 2xl:text-lg">
									Enter your email for the latest updates from us and exclusive
									deals of CYOBot products
								</p>
								<form
									className="flex flex-col justify-evenly mx-auto w-[90%] sm:w-[85%]"
									onSubmit={handleSubmit}
								>
									<label className="text-base sm:text-lg md:text-xl xl:text-2xl text-white font-robotoRegular mt-3 grid grid-cols-[1fr_4fr] sm:grid-cols-[1fr_6fr] items-center">
										Email
										<FormInput
											typeInput="email"
											name="email"
											placeHolder="Email"
											id="email"
										/>
									</label>
									<div className="font-robotoRegular flex flex-col justify-evenly gap-y-2 h-1/4 w-full my-5">
										<label className="grid grid-cols-[1fr_15fr] gap-x-3 sm:gap-x-0 text-xs md:text-sm 2xl:text-base text-white w-full">
											<input
												type="checkbox"
												value="terms"
												name="terms"
												className="h-5 w-5"
												required
											/>
											<p>
												By checking this, you agree to our
												<Link
													passHref={true}
													target="_blank"
													href="https://www.roboticsquest.com/cyobot-terms-and-conditions.pdf"
													className="underline mx-1"
												>
													Terms & Conditions
												</Link>
												and
												<Link
													passHref={true}
													target="_blank"
													href="https://www.roboticsquest.com/cyobot-privacy-policy.pdf"
													className="underline mx-1"
												>
													Privacy Policy
												</Link>
											</p>
										</label>
									</div>
									<div className="sm:w-1/2 mx-auto">
										<GreenButton
											description="JOIN OUR LIST"
											type="submit"
											disabled={isLoading}
										/>
									</div>
								</form>
							</div>
						)}
					</div>
					<div
						className={`pb-5 h-1/2 grid grid-rows-1 grid-cols-1 justify-items-center transition-all duration-500 ease-in-out delay-500 ${
							!isSubmitted ? "animate-slideOut hidden" : "animate-slideIn"
						}`}
					>
						{isSubmitted && (
							<>
								<p className="text-white text-center text-sm sm:text-xl my-auto">
									{message}
								</p>
								{data !== null && !data.success && (
									<div className="w-1/2">
										<GreenButton
											description="TRY AGAIN"
											type="button"
											onClick={() => {
												setAnimateForm(true);
												setIsSubmitted(false);
											}}
										/>
									</div>
								)}
							</>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default PopupSubscription;
