"use client";

import React from 'react';
import { Player } from '@remotion/player';
import { VideoComposition, VideoCompositionProps } from './video-composition';

export const AIVideoPlayer: React.FC<VideoCompositionProps & { videoUrl?: string }> = (props) => {
    const durationInFrames = props.scenes.reduce((acc, s) => acc + s.duration, 0);

    if (props.videoUrl) {
        return (
            <div className="w-full h-full bg-black relative">
                <video 
                    src={props.videoUrl} 
                    className="w-full h-full object-cover"
                    controls
                    autoPlay
                    loop
                />
                <div className="absolute top-4 left-4">
                    <div className="px-2 py-1 bg-indigo-600 text-white text-[8px] font-black rounded uppercase tracking-widest shadow-lg">
                        AI Synthesized
                    </div>
                </div>
            </div>
        );
    }

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
