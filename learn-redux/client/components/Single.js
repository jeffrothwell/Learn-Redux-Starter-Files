import React from 'react';
import Photo from './Photo'
// import comments

class Single extends React.Component {
  render() {
    // need index of post
    // need the post itself

    const i = this.props.posts.findIndex(post => post.code === this.props.params.postId)
    const post = this.props.posts[i]

    return (
      <div className="single-photo">
        <Photo i={i} post={post} {...this.props} />
      </div>
    )
  }
}

export default Single;
