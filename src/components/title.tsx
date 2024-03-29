/** @jsx jsx */
import React from "react";
import { jsx } from "theme-ui";
import { Box } from "@theme-ui/components";

type TitleProps = {
	children: React.ReactNode;
	as?: string;
	className?: string;
	text: string;
};

const Title = ({ text, children, as = `h2`, className = `` }: TitleProps) => (
	<div
		sx={{
			justifyContent: `space-between`,
			alignItems: `center`,
			borderBottomStyle: `solid`,
			borderBottomWidth: `1px`,
			borderBottomColor: `divide`,
			pb: 2,
			mb: 4,
			flexFlow: `wrap`,
			boxSizing: `border-box`,
			display: `flex`,
			fontFamily: `Roboto Condensed`,
		}}
	>
		<Box as={as} sx={{ fontWeight: `bold`, fontSize: [4, 5], fontFamily: `heading`, lineHeight: `heading`, color: `heading` }} className={className}>
			{text}
		</Box>
		<div
			sx={{
				color: `secondary`,
				a: {
					variant: `links.secondary`,
				},
			}}
		>
			{children}
		</div>
	</div>
);

export default Title;
