import React from 'react';
import Flux from 'app/flux';

import Subscription from 'app/components/subscription';

function HomeSmorgasbord({ data }) {
  const { event, post } = data;

  return (
    <div className="home-smorgasbord">
      <div className="smorgasbord-block smorgasbord-video">
        <iframe src="https://player.vimeo.com/video/189642924?color=ED0082&byline=0&portrait=0" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
      </div>
      <div className="smorgasbord-block-wrapper">

        <div className="smorgasbord-block smorgasbord-events">
          <h4>ustwo Events</h4>
          <div className="smorgasbord-post">
            <div className="smorgasbord-subtitle">{event.studio.name}</div>
            <h3 className="smorgasbord-title">
              <a href={event.uri} onClick={Flux.override(event.uri)}>{event.name}</a>
            </h3>
          </div>
          <button>All Events</button>
        </div>

        <div className="smorgasbord-block smorgasbord-blog">
          <h4>Blog</h4>
          <div className="smorgasbord-post">
            <div className="smorgasbord-subtitle">&nbsp;</div>
            <h3 className="smorgasbord-title">
              <a href={post.uri} onClick={Flux.override(post.uri)}>{post.name}</a>
            </h3>
          </div>
          <button>All Posts</button>
        </div>

      </div>
      <Subscription />
    </div>
  );
}

export default HomeSmorgasbord;
