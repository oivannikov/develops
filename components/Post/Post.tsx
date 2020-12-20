import React from 'react';

import IPost from '../../interfaces/interfaces';

interface PostProps {
  post: IPost
}

export const Post: React.FC<PostProps> = ({ post }) => {
  const { title, body } = post;

  return (
    <div className="post">
      <div className="post__content">
        <div className="post__name">{title}</div>
        <div className="post__border"></div>

        <div className="post__author">
          <p>Develops Today</p>
        </div>

        <div className="post__text">
          <p className="post__body">{ body }</p>
          <p><span>L</span>orem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eu augue at eros finibus aliquet lobortis et nisi. Integer nec ipsum feugiat, varius velit et, porta eros. Vestibulum bibendum diam nec urna dignissim sodales. Aliquam at maximus ligula.</p>

          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eu augue at eros finibus aliquet lobortis et nisi. Integer nec ipsum feugiat, varius velit et, porta eros. Vestibulum bibendum diam nec urna dignissim sodales.</p>
        </div>
      </div>      
    </div>
  );
}

