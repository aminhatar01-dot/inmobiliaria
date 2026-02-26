"use client";

import React from 'react';
import {
    AbsoluteFill,
    InterpolateOptions,
    interpolate,
    useCurrentFrame,
    useVideoConfig,
    Img,
    Audio,
    Sequence,
} from 'remotion';

export interface Scene {
    imageUrl: string;
    text: string;
    duration: number; // in frames
}

export interface VideoCompositionProps {
    scenes: Scene[];
    audioUrl?: string;
    title: string;
    price?: string;
}

const SceneComponent: React.FC<{ scene: Scene; index: number }> = ({ scene, index }) => {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();

    // Zoom effect
    const scale = interpolate(frame, [0, scene.duration], [1, 1.2], {
        extrapolateRight: 'clamp',
    });

    // Fade in text
    const textOpacity = interpolate(frame, [0, 15], [0, 1], {
        extrapolateRight: 'clamp',
    });

    return (
        <AbsoluteFill className="bg-black overflow-hidden">
            <Img
                src={scene.imageUrl}
                style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transform: `scale(${scale})`,
                }}
            />

            {/* Overlay Gradient */}
            <AbsoluteFill
                style={{
                    background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 40%)',
                }}
            />

            {/* Text Content */}
            <AbsoluteFill
                style={{
                    justifyContent: 'flex-end',
                    padding: '60px',
                    opacity: textOpacity,
                }}
            >
                <div style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: '24px',
                    padding: '24px',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
                }}>
                    <h2 style={{
                        color: 'white',
                        fontSize: '42px',
                        fontWeight: '900',
                        margin: 0,
                        textShadow: '0 2px 4px rgba(0,0,0,0.5)',
                        lineHeight: '1.2',
                    }}>
                        {scene.text}
                    </h2>
                </div>
            </AbsoluteFill>
        </AbsoluteFill>
    );
};

export const VideoComposition: React.FC<VideoCompositionProps> = ({
    scenes,
    audioUrl,
    title,
    price,
}) => {
    let currentStartFrame = 0;

    return (
        <AbsoluteFill className="bg-gray-900">
            {audioUrl && <Audio src={audioUrl} />}

            {scenes.map((scene, index) => {
                const sequence = (
                    <Sequence
                        key={index}
                        from={currentStartFrame}
                        durationInFrames={scene.duration}
                    >
                        <SceneComponent scene={scene} index={index} />
                    </Sequence>
                );
                currentStartFrame += scene.duration;
                return sequence;
            })}

            {/* Persistent Title Header */}
            <AbsoluteFill
                style={{
                    height: '150px',
                    padding: '40px',
                    pointerEvents: 'none',
                }}
            >
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}>
                    <div style={{
                        backgroundColor: 'rgba(255, 255, 255, 0.95)',
                        padding: '8px 16px',
                        borderRadius: '12px',
                        fontWeight: 'bold',
                        fontSize: '14px',
                        color: '#6366f1',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                    }}>
                        {title}
                    </div>
                    {price && (
                        <div style={{
                            backgroundColor: '#6366f1',
                            padding: '8px 16px',
                            borderRadius: '12px',
                            fontWeight: '900',
                            fontSize: '16px',
                            color: 'white',
                            boxShadow: '0 4px 12px rgba(99, 102, 241, 0.3)',
                        }}>
                            {price}
                        </div>
                    )}
                </div>
            </AbsoluteFill>
        </AbsoluteFill>
    );
};
