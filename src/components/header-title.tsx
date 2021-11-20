/** @jsx jsx */
import { Link } from "gatsby";
import { jsx } from "theme-ui";
import replaceSlashes from "../utils/replaceSlashes";
import useSiteMetadata from "../hooks/use-site-metadata";
import useMinimalBlogConfig from "../hooks/use-minimal-blog-config";

const HeaderTitle = () => {
	const { siteTitle } = useSiteMetadata();
	const { basePath } = useMinimalBlogConfig();

	return (
		<Link to={replaceSlashes(`/${basePath}`)} aria-label={`${siteTitle} - Back to home`} sx={{ color: `heading`, textDecoration: `none` }}>
			<div sx={{ backgroundColor: "#B01A00", padding: "0 1rem" }}>
				<div sx={{ my: 0, fontWeight: `700`, fontSize: [3, 4], fontFamily: `Roboto Condensed`, color: "#fff" }}>{siteTitle}</div>
			</div>
		</Link>
	);
};

export default HeaderTitle;
