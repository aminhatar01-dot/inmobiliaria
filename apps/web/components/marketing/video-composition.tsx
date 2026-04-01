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
    musicAudioUrl?: string;
    voiceAudioUrl?: string;
    title: string;
    price?: string;
    avatarId?: string | null;
    variation?: number;
}

const SceneComponent: React.FC<{ scene: Scene; index: number; variation: number }> = ({ scene, index, variation }) => {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();

    // 4-way Advanced Animation System seeded by the generation variation
    const animType = (index + variation) % 4;

    const zoomIn = interpolate(frame, [0, scene.duration], [1.0, 1.15], { extrapolateRight: 'clamp' });
    const zoomOut = interpolate(frame, [0, scene.duration], [1.15, 1.0], { extrapolateRight: 'clamp' });
    const panLeft = interpolate(frame, [0, scene.duration], [0, -5], { extrapolateRight: 'clamp' });
    const panRight = interpolate(frame, [0, scene.duration], [-5, 0], { extrapolateRight: 'clamp' });
    const panDown = interpolate(frame, [0, scene.duration], [-5, 0], { extrapolateRight: 'clamp' });

    let scale = zoomIn;
    let translateX = 0;
    let translateY = 0;

    switch(animType) {
        case 0: scale = zoomIn; break;
        case 1: scale = zoomOut; break;
        case 2: scale = 1.15; translateX = panLeft; break;
        case 3: scale = 1.15; translateX = panRight; translateY = panDown; break;
    }

    // Dynamic Typography (Cambiar la escritura)
    const fonts = ['Montserrat', 'Inter', 'Outfit', 'Playfair Display'];
    const fontFamily = fonts[variation % fonts.length];
    const isSerif = fontFamily === 'Playfair Display';

    // Text position variations based on animType seed
    const textPositions = {
        0: { justify: 'flex-end', align: 'flex-start' }, // Bottom Left
        1: { justify: 'flex-end', align: 'flex-end' }, // Bottom Right
        2: { justify: 'flex-start', align: 'flex-start' }, // Top Left
        3: { justify: 'center', align: 'center' } // Center (with title offset)
    };
    
    const pos = textPositions[animType as keyof typeof textPositions];

    // Fade in and slide up text
    const textOpacity = interpolate(frame, [0, 15], [0, 1], { extrapolateRight: 'clamp' });
    const textTranslateY = interpolate(frame, [0, 15], [40, 0], { extrapolateRight: 'clamp' });

    return (
        <AbsoluteFill className="bg-black overflow-hidden">
            <Img
                src={scene.imageUrl}
                style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transform: `scale(${scale}) translateX(${translateX}%) translateY(${translateY}%)`,
                }}
            />

            {/* Overlay Gradient that adapts to text position */}
            <AbsoluteFill
                style={{
                    background: pos.justify === 'flex-start' 
                        ? 'linear-gradient(to bottom, rgba(0,0,0,0.85) 0%, transparent 60%)'
                        : pos.justify === 'center'
                        ? 'radial-gradient(circle, rgba(0,0,0,0.7) 0%, transparent 80%)'
                        : 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 60%)',
                }}
            />

            {/* Text Content */}
            <AbsoluteFill
                style={{
                    justifyContent: pos.justify,
                    alignItems: pos.align,
                    padding: '60px',
                    paddingTop: pos.justify === 'flex-start' || pos.justify === 'center' ? '180px' : '60px', // Avoid title overlap
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
                    textAlign: pos.align === 'center' ? 'center' : 'left',
                    transform: `translateY(${textTranslateY}px)`,
                }}>
                    <h2 style={{
                        color: 'white',
                        fontSize: isSerif ? '46px' : '42px',
                        fontWeight: isSerif ? 'bold' : '900',
                        fontFamily,
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
    musicAudioUrl,
    voiceAudioUrl,
    title,
    price,
    avatarId,
    variation = 0,
}) => {
    let currentStartFrame = 0;

    // Hardcoded simple mapping based on ai-avatar-selector options
    const avatarsMap: Record<string, string> = {
        sofia: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
        marcos: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80",
        elena: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80",
        javier: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80"
    };
    
    const selectedAvatarImg = avatarId ? avatarsMap[avatarId] : null;

    return (
        <AbsoluteFill className="bg-gray-900">
            {musicAudioUrl && <Audio src={musicAudioUrl} volume={voiceAudioUrl ? 0.15 : 1} />}
            {voiceAudioUrl && <Audio src={voiceAudioUrl} volume={1} />}

            {scenes.map((scene, index) => {
                const sequence = (
                    <Sequence
                        key={index}
                        from={currentStartFrame}
                        durationInFrames={scene.duration}
                    >
                        <SceneComponent scene={scene} index={index} variation={variation} />
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

            {/* AI Avatar Picture in Picture */}
            {selectedAvatarImg && (
                <AbsoluteFill
                    style={{
                        padding: '60px',
                        justifyContent: 'flex-start',
                        alignItems: 'flex-start',
                        pointerEvents: 'none',
                        top: '160px', // Below the title
                    }}
                >
                    <div style={{
                        width: '200px',
                        height: '200px',
                        borderRadius: '100px',
                        overflow: 'hidden',
                        border: '6px solid white',
                        boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
                        position: 'relative',
                    }}>
                        <Img 
                            src={selectedAvatarImg} 
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                        />
                        <div style={{
                            position: 'absolute',
                            bottom: 0,
                            right: 0,
                            left: 0,
                            height: '40px',
                            background: 'linear-gradient(transparent, rgba(0,0,0,0.7))',
                        }} />
                    </div>
                </AbsoluteFill>
            )}
        </AbsoluteFill>
    );
};
