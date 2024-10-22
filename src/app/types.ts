export interface DashboardUser {
	id: string;
	roles: ("admin" | "content-manager")[];
	updatedAt: string;
	createdAt: string;
	email: string;
	resetPasswordToken?: string | null;
	resetPasswordExpiration?: string | null;
	salt?: string | null;
	hash?: string | null;
	loginAttempts?: number | null;
	lockUntil?: string | null;
	password?: string | null;
}

export interface LayoutBlock {
	type?: "grid" | null;
	width?: string | null;
	height?: string | null;
	mt?: string | null;
	mb?: string | null;
	ml?: string | null;
	mr?: string | null;
	pt?: string | null;
	pb?: string | null;
	pl?: string | null;
	pr?: string | null;
	numCols?: number | null;
	numRows?: number | null;
	colGap?: string | null;
	rowGap?: string | null;
	jItems?: ("start" | "end" | "center" | "stretch") | null;
	aItems?: ("start" | "end" | "center" | "stretch") | null;
	gridBx?:
		| {
				colS?: number | null;
				colE?: number | null;
				rowS?: number | null;
				rowE?: number | null;
				type?: "grid" | null;
				mt?: string | null;
				mb?: string | null;
				ml?: string | null;
				mr?: string | null;
				pt?: string | null;
				pb?: string | null;
				pl?: string | null;
				pr?: string | null;
				numCols?: number | null;
				numRows?: number | null;
				colGap?: string | null;
				rowGap?: string | null;
				jItems?: ("start" | "end" | "center" | "stretch") | null;
				aItems?: ("start" | "end" | "center" | "stretch") | null;
				gridBx?: (RichTextBlock | PythonCodeBlock)[] | null;
				id?: string | null;
		  }[]
		| null;
	id?: string | null;
	blockName?: string | null;
	blockType: "layout";
}

export interface RichTextBlock {
	richTextContent: {
		root: {
			type: string;
			children: {
				type: string;
				version: number;
				[k: string]: unknown;
			}[];
			direction: ("ltr" | "rtl") | null;
			format: "left" | "start" | "center" | "right" | "end" | "justify" | "";
			indent: number;
			version: number;
		};
		[k: string]: unknown;
	};
	id?: string | null;
	blockName?: string | null;
	blockType: "rich-text";
}

export interface PythonCodeBlock {
	allowCopy?: boolean | null;
	pythonCode: string;
	id?: string | null;
	blockName?: string | null;
	blockType: "python-code";
}

export interface Media {
	id: string;
	alt?: string | null;
	isPublic?: boolean | null;
	createdBy: string | DashboardUser;
	updatedBy: string | DashboardUser;
	updatedAt: string;
	createdAt: string;
	_status?: ("draft" | "published") | null;
	url?: string | null;
	thumbnailURL?: string | null;
	filename?: string | null;
	mimeType?: string | null;
	filesize?: number | null;
	width?: number | null;
	height?: number | null;
	focalX?: number | null;
	focalY?: number | null;
}

export interface WebsiteBlog {
	id: string;
	slug: string;
	pageTitle: string;
	featuredImage: string | Media;
	publishedDate: string;
	description?: string | null;
	contents: LayoutBlock[];
	category?: (string | Category)[] | null;
	createdBy: string | DashboardUser;
	updatedBy: string | DashboardUser;
	updatedAt: string;
	createdAt: string;
	_status?: ("draft" | "published") | null;
}

export interface Category {
	id: string;
	slug: string;
	displayName: string;
	createdBy: string | DashboardUser;
	updatedBy: string | DashboardUser;
	updatedAt: string;
	createdAt: string;
	_status?: ("draft" | "published") | null;
}
