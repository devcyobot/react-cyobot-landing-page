import { RichTextBlockTemplate } from "@/app/components/block/rich-text-block-template";
import { LayoutBlock } from "@/app/types";
import { FC } from "react";

interface Props {
	layoutBlock: LayoutBlock;
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

export const LayoutBlockTemplate: FC<Props> = ({
	layoutBlock,
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
}) => {
	if (layoutBlock.type === "grid") {
		return (
			<div
				key={layoutBlock.id}
				style={{
					display: layoutBlock.type === "grid" ? "grid" : "block",
					height: layoutBlock.height ?? "auto",
					width: layoutBlock.width ?? "auto",
					gridTemplateColumns: `repeat(${
						layoutBlock.numCols ?? 1
					}, minmax(0, 1fr))`,
					gridTemplateRows: `repeat(${
						layoutBlock.numRows ?? 1
					}, minmax(0, 1fr))`,
					columnGap: layoutBlock.colGap ? layoutBlock.colGap : "0px",
					rowGap: layoutBlock.rowGap ? layoutBlock.rowGap : "0px",
					justifyItems: layoutBlock.jItems ?? "stretch",
					alignItems: layoutBlock.aItems ?? "stretch",
					marginTop: layoutBlock.mt ? layoutBlock.mt : "auto",
					marginBottom: layoutBlock.mb ? layoutBlock.mb : "auto",
					marginLeft: layoutBlock.ml ? layoutBlock.ml : "auto",
					marginRight: layoutBlock.mr ? layoutBlock.mr : "auto",
					paddingTop: layoutBlock.pt ? layoutBlock.pt : "auto",
					paddingBottom: layoutBlock.pb ? layoutBlock.pb : "auto",
					paddingLeft: layoutBlock.pl ? layoutBlock.pl : "auto",
					paddingRight: layoutBlock.pr ? layoutBlock.pr : "auto",
				}}
			>
				{layoutBlock.type === "grid" &&
					layoutBlock.gridBx?.map(
						(gridBox, i) =>
							gridBox.type === "grid" && (
								<div
									key={i}
									style={{
										gridRowStart: gridBox.rowS?.toString() ?? "1",
										gridRowEnd: gridBox.rowE?.toString() ?? "1",
										gridColumnStart: gridBox.colS?.toString() ?? "1",
										gridColumnEnd: gridBox.colE?.toString() ?? "1",
										display: gridBox.type === "grid" ? "grid" : "block",
										gridTemplateColumns: `repeat(${
											gridBox.numCols ?? 1
										}, minmax(0, 1fr))`,
										gridTemplateRows: `repeat(${
											gridBox.numRows ?? 1
										}, minmax(0, 1fr))`,
										columnGap: gridBox.colGap ? gridBox.colGap : "0px",
										rowGap: gridBox.rowGap ? gridBox.rowGap : "0px",
										justifyItems: gridBox.jItems ?? "stretch",
										alignItems: gridBox.aItems ?? "stretch",
										marginTop: gridBox.mt ? gridBox.mt : "auto",
										marginBottom: gridBox.mb ? gridBox.mb : "auto",
										marginLeft: gridBox.ml ? gridBox.ml : "auto",
										marginRight: gridBox.mr ? gridBox.mr : "auto",
										paddingTop: gridBox.pt ? gridBox.pt : "auto",
										paddingBottom: gridBox.pb ? gridBox.pb : "auto",
										paddingLeft: gridBox.pl ? gridBox.pl : "auto",
										paddingRight: gridBox.pr ? gridBox.pr : "auto",
									}}
								>
									{gridBox.gridBx?.map((gridBoxContent, i) => {
										switch (gridBoxContent.blockType) {
											// case "layout":
											//   return (
											//     <LayoutBlockTemplate
											//       key={i}
											//       layoutBlock={gridBoxContent}
											//     />
											//   );
											case "rich-text":
												return (
													<RichTextBlockTemplate
														key={i}
														richTextBlock={gridBoxContent}
														pStyle={pStyle}
														linkStyle={linkStyle}
														olStyle={olStyle}
														ulStyle={ulStyle}
														liStyle={liStyle}
														h1Style={h1Style}
														h2Style={h2Style}
														h3Style={h3Style}
														h4Style={h4Style}
														h5Style={h5Style}
														h6Style={h6Style}
														blockquoteStyle={blockquoteStyle}
													/>
												);
											default:
												return null;
										}
									})}
								</div>
							)
					)}
			</div>
		);
	}
};
