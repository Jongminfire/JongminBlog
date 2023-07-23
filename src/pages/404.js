/** @jsx jsx */
import { jsx, Link as TLink } from "theme-ui";
import { Link } from "gatsby";
import Layout from "../components/layout";
import useMinimalBlogConfig from "../hooks/use-minimal-blog-config";
import replaceSlashes from "../utils/replaceSlashes";

const NotFound = () => {
	const { basePath } = useMinimalBlogConfig();

	return (
		<Layout
			children={
				<div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
					<p sx={{ fontSize: [3, 3, 5], fontWeight: "bold", letterSpacing: "-2px" }}>PAGE NOT FOUND</p>
					<span sx={{ fontSize: [1, 1, 2], fontWeight: "normal", letterSpacing: "-2px" }}>올바르지 않은 페이지입니다</span>
					<br />
					<TLink sx={{ fontSize: "16px" }} as={Link} activeClassName="active" to={replaceSlashes(`/${basePath}/`)}>
						메인으로
					</TLink>
				</div>
			}
		></Layout>
	);
};

export default NotFound;
