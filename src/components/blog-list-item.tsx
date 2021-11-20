/** @jsx jsx */
import React from "react";
import { jsx, Link as TLink } from "theme-ui";
import { Box } from "@theme-ui/components";
import { Link } from "gatsby";
import ItemTags from "./item-tags";

type BlogListItemProps = {
	post: {
		slug: string;
		title: string;
		date: string;
		excerpt: string;
		description: string;
		timeToRead?: number;
		tags?: {
			name: string;
			slug: string;
		}[];
	};
	showTags?: boolean;
};

const BlogListItem = ({ post, showTags = true }: BlogListItemProps) => (
	<Box mb={4} style={{ marginBottom: "3rem" }}>
		<div style={{ marginBottom: "0.5rem" }}>
			<time>{post.date}</time>
			<br />
			<ItemTags tags={post.tags} />
		</div>
		<TLink as={Link} to={post.slug} sx={{ fontWeight: "500", fontSize: [2, 3, 3], color: `text` }}>
			{post.title}
		</TLink>
		<br />
		<div style={{ marginTop: "0.5rem" }} />
		<Box sx={{ fontSize: [1, 1, 1] }}>{post.excerpt}</Box>
	</Box>
);

export default BlogListItem;
