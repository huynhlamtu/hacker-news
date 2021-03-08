import React, { Component } from "react";
import { getStoryById } from "../data/hackerStoriesFakeData";
import Comments from "./comments";
import Header from "./header";
import "../styles/story-detail.css";

class StoryDetails extends Component {
  state = {
    story: {},
  };

  componentDidMount() {
    const { match, history } = this.props;

    const story = getStoryById(match.params.id);

    if (!story) return this.props.history.replace("/not-found");

    this.setState({ story });
  }

  render() {
    const { comments, title, author, points, dayPost, link } = this.state.story;

    // console.log(123, story.comments);
    if (!comments) return <div></div>;

    if (comments)
      return (
        <React.Fragment>
          <Header logoSrc="/images/logo-hn-search.png" />
          <div className="header-detail text-center pb-4">
            <h2 className="pt-4 pb-2 story-title">{title}</h2>
            <div className="details">
              <h5>
                By {author}, at {dayPost}
              </h5>
              <h5>
                {points} points, {comments.length} comments
              </h5>
            </div>
          </div>
          <div className="comment-wraper">
            <Comments comments={comments} />
          </div>
        </React.Fragment>
      );
  }
}

export default StoryDetails;
