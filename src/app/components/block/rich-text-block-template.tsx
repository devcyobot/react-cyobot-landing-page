import { LayoutBlockTemplate } from "@/app/components/block/layout-block-template";
import { useMedia } from "@/app/hooks/use-media";
import { Media, RichTextBlock as TRichTextBlock } from "@/app/types";
import Image from "next/image";
import Link from "next/link";
import { FC, ReactNode, Suspense } from "react";

const RichTextImage = async ({ value }: { value: string | Media }) => {
	const media: Media | null = await useMedia(value);
	if (!media) return null;
	return (
		<div className="w-3/4 h-full overflow-hidden mx-auto flex flex-col items-center justify-center py-6">
			<Image
				alt={media.alt ?? "Blog Image"}
				src={media.url ? `${process.env.NEXT_PUBLIC_DASHBOARD_URL}${media.url}` : ""}
				height={media.height ?? undefined}
				width={media.width ?? undefined}
				className="rounded-md"
			/>
		</div>


	);
};

const olStyles = [
	"decimal",
	"upper-alpha",
	"lower-alpha",
	"upper-roman",
	"lower-roman",
];

const ulStyles = ["disc", "circle", "square"];

const getListStyle = (indent: number, type: "ol" | "ul") => {
	if (type === "ol") {
		return olStyles[indent % olStyles.length];
	} else {
		if (indent >= 2) return ulStyles[2];
		return ulStyles[indent];
	}
};

const renderChild = (
	pStyle: string,
	linkStyle: string,
	olStyle: string,
	ulStyle: string,
	liStyle: string,
	h1Style: string,
	h2Style: string,
	h3Style: string,
	h4Style: string,
	h5Style: string,
	h6Style: string,
	blockquoteStyle: string,
	child: any,
	index: number,
	parentIsListWithType?: any
): ReactNode => {
	if (typeof child.type !== "string") {
		return null;
	}
	if (child.type === "paragraph") {
		return (
			<p
				key={index}
				className={pStyle}
				style={{ textAlign: child.format ?? "left" }}
			>
				{child.children?.map((child: any, i: number) =>
					renderChild(
						pStyle,
						linkStyle,
						olStyle,
						ulStyle,
						liStyle,
						h1Style,
						h2Style,
						h3Style,
						h4Style,
						h5Style,
						h6Style,
						blockquoteStyle,
						child,
						i
					)
				)}
			</p>
		);
	} else if (child.type === "text") {
		if (Array.isArray(child.children)) {
			return child.children.map((child: any, i: number) =>
				renderChild(
					pStyle,
					linkStyle,
					olStyle,
					ulStyle,
					liStyle,
					h1Style,
					h2Style,
					h3Style,
					h4Style,
					h5Style,
					h6Style,
					blockquoteStyle,
					child,
					i
				)
			);
		}
		const format = child.format;
		if (typeof format !== "number" || format === 0) {
			return child.text;
		}
		let formattedText = child.text;
		const isBold = (format: number) => (format & 1) !== 0;
		const isItalic = (format: number) => (format & 2) !== 0;
		const isStrikethrough = (format: number) => (format & 4) !== 0;
		const isUnderline = (format: number) => (format & 8) !== 0;
		const isCode = (format: number) => (format & 16) !== 0;
		const isSubscript = (format: number) => (format & 32) !== 0;
		const isSuperscript = (format: number) => (format & 64) !== 0;

		if (isBold(child.format)) {
			formattedText = <strong key={index}>{formattedText}</strong>;
		}
		if (isItalic(format)) {
			formattedText = <em key={index}>{formattedText}</em>;
		}
		if (isUnderline(format)) {
			formattedText = <u key={index}>{formattedText}</u>;
		}
		if (isStrikethrough(format)) {
			formattedText = <del key={index}>{formattedText}</del>;
		}
		if (isCode(format)) {
			formattedText = (
				<code key={index} className="rounded-md bg-brand-purple p-1">
					{formattedText}
				</code>
			);
		}
		if (isSubscript(format)) {
			formattedText = <sub key={index}>{formattedText}</sub>;
		}
		if (isSuperscript(format)) {
			formattedText = <sup key={index}>{formattedText}</sup>;
		}
		return formattedText;
	} else if (child.type === "link") {
		return (
			<Link
				key={index}
				className={linkStyle}
				href={child.fields.url}
				target={child.fields.newTab ? "_blank" : "_self"}
			>
				{child.children.map((child: any, i: number) =>
					renderChild(
						pStyle,
						linkStyle,
						olStyle,
						ulStyle,
						liStyle,
						h1Style,
						h2Style,
						h3Style,
						h4Style,
						h5Style,
						h6Style,
						blockquoteStyle,
						child,
						i
					)
				)}
			</Link>
		);
	} else if (child.type === "list") {
		if (child.tag === "ol") {
			return (
				<ol
					key={index}
					className={olStyle}
					style={{ textAlign: child.format ?? "left" }}
					start={child.start ?? 1}
				>
					{Array.isArray(child.children) &&
						child.children.map((child: any, index: number) =>
							renderChild(
								pStyle,
								linkStyle,
								olStyle,
								ulStyle,
								liStyle,
								h1Style,
								h2Style,
								h3Style,
								h4Style,
								h5Style,
								h6Style,
								blockquoteStyle,
								child,
								index,
								"ol"
							)
						)}
				</ol>
			);
		}
		if (child.tag === "ul") {
			return (
				<ul
					key={index}
					style={{ textAlign: child.format ?? "left" }}
					className={ulStyle}
				>
					{Array.isArray(child.children) &&
						child.children.map((child: any, index: number) =>
							renderChild(
								pStyle,
								linkStyle,
								olStyle,
								ulStyle,
								liStyle,
								h1Style,
								h2Style,
								h3Style,
								h4Style,
								h5Style,
								h6Style,
								blockquoteStyle,
								child,
								index,
								"ul"
							)
						)}
				</ul>
			);
		}
		return null;
	} else if (child.type === "listitem") {
		const children = child.children;
		if (Array.isArray(children)) {
			if (children.length === 1 && children[0].type === "list") {
				return renderChild(
					pStyle,
					linkStyle,
					olStyle,
					ulStyle,
					liStyle,
					h1Style,
					h2Style,
					h3Style,
					h4Style,
					h5Style,
					h6Style,
					blockquoteStyle,
					children[0],
					0
				);
			}
			return (
				<li
					key={index}
					className={liStyle}
					style={{
						listStyleType:
							parentIsListWithType === "ol"
								? getListStyle(child.indent, "ol")
								: parentIsListWithType === "ul"
									? getListStyle(child.indent, "ul")
									: "none",
						textIndent: `${child.indent}rem`,
						listStylePosition: "inside",
					}}
				>
					{children.map((child: any, i: number) =>
						renderChild(
							pStyle,
							linkStyle,
							olStyle,
							ulStyle,
							liStyle,
							h1Style,
							h2Style,
							h3Style,
							h4Style,
							h5Style,
							h6Style,
							blockquoteStyle,
							child,
							i
						)
					)}
				</li>
			);
		}
		return null;
	} else if (child.type === "heading") {
		if (child.tag === "h1") {
			return (
				<h1 key={index} className={h1Style} style={{ textAlign: child.format }}>
					{child.children?.map((child: any, i: number) =>
						renderChild(
							pStyle,
							linkStyle,
							olStyle,
							ulStyle,
							liStyle,
							h1Style,
							h2Style,
							h3Style,
							h4Style,
							h5Style,
							h6Style,
							blockquoteStyle,
							child,
							i
						)
					)}
				</h1>
			);
		} else if (child.tag === "h2") {
			return (
				<h2 key={index} className={h2Style} style={{ textAlign: child.format }}>
					{child.children.map((child: any, i: number) =>
						renderChild(
							pStyle,
							linkStyle,
							olStyle,
							ulStyle,
							liStyle,
							h1Style,
							h2Style,
							h3Style,
							h4Style,
							h5Style,
							h6Style,
							blockquoteStyle,
							child,
							i
						)
					)}
				</h2>
			);
		} else if (child.tag === "h3") {
			return (
				<h3 key={index} className={h3Style} style={{ textAlign: child.format }}>
					{child.children.map((child: any, i: number) =>
						renderChild(
							pStyle,
							linkStyle,
							olStyle,
							ulStyle,
							liStyle,
							h1Style,
							h2Style,
							h3Style,
							h4Style,
							h5Style,
							h6Style,
							blockquoteStyle,
							child,
							i
						)
					)}
				</h3>
			);
		} else if (child.tag === "h4") {
			return (
				<h4 key={index} className={h4Style} style={{ textAlign: child.format }}>
					{child.children.map((child: any, i: number) =>
						renderChild(
							pStyle,
							linkStyle,
							olStyle,
							ulStyle,
							liStyle,
							h1Style,
							h2Style,
							h3Style,
							h4Style,
							h5Style,
							h6Style,
							blockquoteStyle,
							child,
							i
						)
					)}
				</h4>
			);
		} else if (child.tag === "h5") {
			return (
				<h5 key={index} className={h5Style} style={{ textAlign: child.format }}>
					{child.children.map((child: any, i: number) =>
						renderChild(
							pStyle,
							linkStyle,
							olStyle,
							ulStyle,
							liStyle,
							h1Style,
							h2Style,
							h3Style,
							h4Style,
							h5Style,
							h6Style,
							blockquoteStyle,
							child,
							i
						)
					)}
				</h5>
			);
		} else if (child.tag === "h6") {
			return (
				<h6 key={index} className={h6Style} style={{ textAlign: child.format }}>
					{child.children.map((child: any, i: number) =>
						renderChild(
							pStyle,
							linkStyle,
							olStyle,
							ulStyle,
							liStyle,
							h1Style,
							h2Style,
							h3Style,
							h4Style,
							h5Style,
							h6Style,
							blockquoteStyle,
							child,
							i
						)
					)}
				</h6>
			);
		}
		return null;
	} else if (child.type === "quote") {
		return (
			<blockquote key={index} className={blockquoteStyle}>
				{child.children.map((child: any, i: number) =>
					renderChild(
						pStyle,
						linkStyle,
						olStyle,
						ulStyle,
						liStyle,
						h1Style,
						h2Style,
						h3Style,
						h4Style,
						h5Style,
						h6Style,
						blockquoteStyle,
						child,
						i
					)
				)}
			</blockquote>
		);
	} else if (child.type === "upload") {
		if (child.value) {
			return <RichTextImage key={index} value={child.value} />;
		}
		return null;
	} else if (child.type === "block") {
		if (child.fields && child.fields.blockType === "layout") {
			return <LayoutBlockTemplate key={index} layoutBlock={child.fields} />;
		}
		return null;
	} else {
		return null;
	}
};

interface Props {
	richTextBlock: TRichTextBlock;
	pStyle?: string;
	linkStyle?: string;
	olStyle?: string;
	ulStyle?: string;
	liStyle?: string;
	h1Style?: string;
	h2Style?: string;
	h3Style?: string;
	h4Style?: string;
	h5Style?: string;
	h6Style?: string;
	blockquoteStyle?: string;
}
export const RichTextBlockTemplate: FC<Props> = ({
	richTextBlock,
	pStyle = "font-robotoRegular text-2xl",
	linkStyle = "text-2xl text-brand-green",
	olStyle = "text-2xl",
	ulStyle = "text-2xl",
	liStyle = "font-robotoRegular text-2xl",
	h1Style = "text-6xl text-brand-yellow",
	h2Style = "text-5xl text-brand-yellow",
	h3Style = "text-4xl text-brand-yellow",
	h4Style = "text-3xl text-brand-yellow",
	h5Style = "text-2xl text-brand-yellow",
	h6Style = "text-2xl text-brand-yellow",
	blockquoteStyle = "text-2xl border-l-4 border-brand-purple/50 bg-brand-purple/25 pl-4",
}) => {
	return (
		<Suspense>
			{richTextBlock?.richTextContent?.root?.children?.map((child, i) =>
				renderChild(
					pStyle,
					linkStyle,
					olStyle,
					ulStyle,
					liStyle,
					h1Style,
					h2Style,
					h3Style,
					h4Style,
					h5Style,
					h6Style,
					blockquoteStyle,
					child,
					i
				)
			)}
		</Suspense>
	);
};
