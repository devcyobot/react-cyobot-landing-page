import { cn } from "@/app/utils/cn";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

const linkVariants = cva(
	"inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
	{
		variants: {
			variant: {
				default: "bg-primary text-primary-foreground hover:bg-primary/90",
				positive: "bg-positive text-positive-foreground hover:bg-positive/90",
				outline:
					"border border-input bg-background hover:bg-accent hover:text-accent-foreground",
				link: "text-primary underline-offset-4 underline",
				shadow:
					"hover:shadow-[4px_4px_4px_#1AD69C] bg-white shadow-md rounded-lg border-none",
			},
			size: {
				default: "h-10 px-4 py-2",
				sm: "h-9 rounded-md px-3",
				lg: "h-11 rounded-md px-10",
				xl: "rounded-md px-16 py-3",
				icon: "h-10 w-10",
			},
		},
		defaultVariants: {
			variant: "default",
			size: "default",
		},
	}
);

export interface LinkProps
	extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
		VariantProps<typeof linkVariants> {
	asChild?: boolean;
	href: string;
}

const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
	({ className, variant, size, asChild = false, ...props }, ref) => {
		const Comp = asChild ? Slot : "a";
		return (
			<Comp
				className={cn(linkVariants({ variant, size, className }))}
				ref={ref}
				{...props}
			/>
		);
	}
);
Link.displayName = "Link";

export { Link, linkVariants };
