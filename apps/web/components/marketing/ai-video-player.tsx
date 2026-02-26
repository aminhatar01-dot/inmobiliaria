"use client";

import React from 'react';
import { Player } from '@remotion/player';
import { VideoComposition, VideoCompositionProps } from './video-composition';

export const AIVideoPlayer: React.FC<VideoCompositionProps> = (props) => {
    const durationInFrames = props.scenes.reduce((acc, s) => acc + s.duration, 0);

    return (
        <Player
            component={VideoComposition as any}
            inputProps={props}
            durationInFrames={durationInFrames}
            fps={30}
            compositionWidth={1080}
            compositionHeight={1920}
            style={{
                width: '100%',
                height: '100%',
            }}
            controls
            autoPlay
            loop
        />
    );
};
