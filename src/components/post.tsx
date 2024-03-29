/** @jsx jsx */
import { jsx, Heading } from "theme-ui";
import { MDXRenderer } from "gatsby-plugin-mdx";
import React from "react";
import Layout from "./layout";
import ItemTags from "./item-tags";
import SEO from "./seo";
import Utterances from "./Utterances";

type PostProps = {
	data: {
		post: {
			slug: string;
			title: string;
			date: string;
			tags?: {
				name: string;
				slug: string;
			}[];
			description?: string;
			canonicalUrl?: string;
			body: string;
			excerpt: string;
			timeToRead?: number;
			banner?: {
				childImageSharp: {
					resize: {
						src: string;
					};
				};
			};
		};
	};
};

const px = [`32px`, `16px`, `8px`, `4px`];
const shadow = px.map((v) => `rgba(0, 0, 0, 0.15) 0px ${v} ${v} 0px`);

const Post = ({ data: { post } }: PostProps) => (
	<Layout>
		<SEO
			title={post.title}
			description={post.description ? post.description : post.excerpt}
			image={post.banner ? post.banner.childImageSharp.resize.src : undefined}
			pathname={post.slug}
			canonicalUrl={post.canonicalUrl}
		/>
		<div style={{ boxShadow: "3px 3px 10px rgba(200,200,200,0.5)", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
			<center>
				<Heading as="h3" variant="styles.h3" sx={{ fontSize: [2, 5] }}>
					{post.title}
				</Heading>
			</center>
			<p sx={{ color: `secondary`, mt: 3, a: { color: `secondary` }, fontSize: [1, 1, 2] }}>
				<time>{post.date}</time>
				{post.tags && (
					<React.Fragment>
						{` — `}
						<ItemTags tags={post.tags} />
					</React.Fragment>
				)}
			</p>
		</div>
		<br />
		<section
			sx={{
				my: [4, 5],
				".gatsby-resp-image-wrapper": { my: [4, 4, 5], boxShadow: shadow.join(`, `) },
				variant: `layout.content`,
			}}
		>
			<MDXRenderer>{post.body}</MDXRenderer>
		</section>
		<div style={{ borderBottom: "1px solid #CBD5E0", width: "100%", margin: "5rem 0 3rem" }} />
		<Utterances repo="Jongminfire/JongminBlog" />
	</Layout>
);

export default Post;
