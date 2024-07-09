import { FC } from "react";
import Image from "next/image";

const ContactForm: FC = () => {
	return (
		<section className="relative w-full bg-white h-auto max-h-[33rem] grid grid-cols-1 grid-rows-2 lg:grid-cols-2 lg:grid-rows-1 gap-x-3 justify-items-center items-center p-10 lg:p-20 my-5">
			<div className="z-10 flex flex-col justify-center items-center h-full w-full font-vt323 text-black">
				<p className="text-center w-full text-lg">Still have more question?</p>
				<h2 className="w-full text-center text-4xl lg:text-5xl">
					GET IN TOUCH WITH US!
				</h2>
				<figure className="relative w-full h-1/2">
					<Image
						src="/faq-robots.png"
						alt="CYOBot Robots"
						quality={100}
						fill
						sizes="(max-width: 768px) 100vw, 50vw"
						className="object-contain"
					/>
				</figure>
			</div>
			<form className="z-10 font-vt323 w-full h-full lg:h-4/5 grid grid-cols-1 grid-rows-[1fr_1fr_5fr]">
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
						type="submit"
						className="bg-[url('/icon/send-icon.png')] bg-no-repeat bg-center bg-cover rounded-full absolute bottom-2 right-2 w-10 h-10 hover:shadow-md hover:shadow-brand-green"
					></button>
				</label>
			</form>
			<div className="hidden absolute inset-0 sm:flex justify-center items-center">
				<Image
					src="/faq-form-frame.png"
					alt="CYOBot Teams"
					quality={100}
					fill
					sizes="100vw"
					className="object-contain mx-auto"
				/>
			</div>
		</section>
	);
};

export default ContactForm;
