import { FC } from "react";
import AccordionQA from "../../components/ui/AccordionQA";
import { FaqData, FaqDataType } from "../../data/FaqData";
type QuestionsListProps = {
	data: FaqDataType[];
};

const QuestionsList: FC<QuestionsListProps> = (props) => {
	return (
		<section className="flex flex-col h-auto justify-evenly gap-10 w-full mx-auto">
			{FaqData.map((item, i) => (
				<section key={`faq-section-${i}`} id={`section-${i + 1}`}>
					<h2 className="text-brand-green font-vt323 text-3xl lg:text-4xl mb-5">
						{item.section}
					</h2>
					<ul className="divide-y divide-gray-100">
						{item.list.map((qa, i) => (
							<li key={`qa-${i}`}>
								<AccordionQA question={qa.question} answer={qa.answer} />
							</li>
						))}
					</ul>
				</section>
			))}
		</section>
	);
};

export default QuestionsList;
