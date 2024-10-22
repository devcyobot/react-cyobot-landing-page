import * as React from "react";

import { useMedia } from "@/app/hooks/use-media";
import { Media } from "@/app/types";
import { cn } from "@/app/utils/cn";
import Image from "next/image";

const BlogCard = React.forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
	<div
		ref={ref}
		className={cn(
			"rounded-lg border bg-card text-card-foreground shadow-sm",
			className
		)}
		{...props}
	/>
));
BlogCard.displayName = "BlogCard";

const BlogCardImage = React.forwardRef<
	HTMLImageElement,
	React.HTMLAttributes<HTMLImageElement> & { image: string | Media }
>(async ({ className, image, ...props }, ref) => {
	const imageData: Media | null = await useMedia(image);
	if (imageData === null) return null;

	return (
		<Image
			ref={ref}
			alt={imageData.alt ?? ""}
			src={`${process.env.NEXT_PUBLIC_DASHBOARD_URL}${imageData.url}`}
			sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
			fill
			className={cn("rounded-t-lg object-cover", className)}
			{...props}
		/>
	);
});
BlogCardImage.displayName = "BlogCardImage";

const BlogCardHeader = React.forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
	<div
		ref={ref}
		className={cn("flex flex-col space-y-1.5 p-6", className)}
		{...props}
	/>
));
BlogCardHeader.displayName = "BlogCardHeader";

const BlogCardTitle = React.forwardRef<
	HTMLParagraphElement,
	React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
	<h3
		ref={ref}
		className={cn(
			"text-2xl font-medium leading-none tracking-tight",
			className
		)}
		{...props}
	/>
));
BlogCardTitle.displayName = "CardTitle";

const BlogCardDescription = React.forwardRef<
	HTMLParagraphElement,
	React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
	<p
		ref={ref}
		className={cn("text-sm text-muted-foreground", className)}
		{...props}
	/>
));
BlogCardDescription.displayName = "BlogCardDescription";

const BlogCardContent = React.forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
	<div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
));
BlogCardContent.displayName = "BlogCardContent";

const BlogCardFooter = React.forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
	<div
		ref={ref}
		className={cn("flex items-center p-6 pt-0", className)}
		{...props}
	/>
));
BlogCardFooter.displayName = "BlogCardFooter";

export {
	BlogCard,
	BlogCardContent,
	BlogCardDescription,
	BlogCardFooter,
	BlogCardHeader,
	BlogCardImage,
	BlogCardTitle,
};
