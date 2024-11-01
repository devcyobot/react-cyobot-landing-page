import { Link } from "@/app/components/ui/Link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { FC } from "react";

type PaginationProps = {
	activeCategory: string;
	currentPage: number;
	totalPages: number;
};
const Pagination: FC<PaginationProps> = ({
	totalPages,
	currentPage,
	activeCategory,
}) => {
	return (
		<div className="w-full grid grid-cols-3 items-center">
			<div className="justify-self-start">
				{currentPage > 1 && (
					<Link
						size={"sm"}
						variant={"outline"}
						href={`/blog/${currentPage - 1}/${activeCategory}`}
						className="text-brand-purple"
					>
						<ArrowLeft size={20} />
						Previous
					</Link>
				)}
			</div>
			<span className="font-roboto text-white justify-self-center">
				{currentPage} of {totalPages}
			</span>
			<div className="justify-self-end">
				{currentPage < totalPages && (
					<Link
						size={"sm"}
						variant={"outline"}
						href={`/blog/${currentPage + 1}/${activeCategory}`}
						className="text-brand-purple"
					>
						Next
						<ArrowRight size={20} />
					</Link>
				)}
			</div>
		</div>
	);
};

export default Pagination;
