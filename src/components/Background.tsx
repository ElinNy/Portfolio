import React, { useRef, useEffect } from 'react';
import YouTube from 'react-youtube';

const Background: React.FC = () => {
  const playerRef = useRef<any>(null);

  const videoOptions = {
    height: '100%',
    width: '100%',
    playerVars: {
      autoplay: 1,
      controls: 0,
      showinfo: 0,
      modestbranding: 1,
      loop: 1,
      fs: 0,
      cc_load_policy: 0,
      iv_load_policy: 0,
      disablekb: 1,
      rel: 0,
      playlist: 'cpEeYmucqYA', 
    },
  };

  useEffect(() => {
    if (playerRef.current) {
      playerRef.current.internalPlayer.playVideo();
    }
  }, []);

  const onReady = (event: any) => {
    playerRef.current = event.target;
    event.target.mute(); 
    event.target.playVideo(); 
  };

  return (
    <div className="video-container">
      <YouTube
        videoId="cpEeYmucqYA" 
        opts={videoOptions}
        onReady={onReady}
        className="background-video"
      />
    </div>
  );
};

export default Background;
