import "./trending.css";

// Import icons properly
import calendarIcon from "../../assets/Img/calendar.svg";
import timeIcon from "../../assets/Img/time.svg";
import commentIcon from "../../assets/Img/comment.svg";

const BlogCard = ({ post }) => {
  return (
    <div className="custom-card-news">
      <div className="custom-card-image">
        <button className="custom-label">{post.category}</button>
        <img src={post.image} alt={post.title} />
      </div>
      <div className="custom-card-body">
        <div className="custom-card-info">
          <div className="custom-card-meta">
            <span className="custom-details">
              <span className="custom-icon">
                <img src={calendarIcon} alt="Calendar" />
              </span>
              {post.date}
            </span>
            <span>
              <span className="custom-icon">
                <img src={timeIcon} alt="Time" />
              </span>
              {post.readTime} mins
            </span>
            <span>
              <span className="custom-icon">
                <img src={commentIcon} alt="Comments" />
              </span>
              {post.comments} comments
            </span>
          </div>
          <h3 className="custom-card-title">
            <a href="#">{post.title}</a>
          </h3>
          <div className="custom-card-author">
            <img src={post.author.avatar} alt={post.author.name} />
            <p>{post.author.name}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
