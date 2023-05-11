import Posts from "../../components/posts/Posts";
import Stories from "../../components/stories/Stories";
import "./homepage.scss";

const Homepage = () => {
  return (
    <div className="homepage">
      <Stories />
      <Posts />
    </div>
  );
};

export default Homepage;
