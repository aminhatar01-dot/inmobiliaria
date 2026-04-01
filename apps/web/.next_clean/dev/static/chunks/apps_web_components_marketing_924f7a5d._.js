(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/apps/web/components/marketing/video-composition.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "VideoComposition",
    ()=>VideoComposition
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/remotion/dist/esm/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
const SceneComponent = ({ scene, index, variation })=>{
    _s();
    const frame = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCurrentFrame"])();
    const { fps } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useVideoConfig"])();
    // 4-way Advanced Animation System seeded by the generation variation
    const animType = (index + variation) % 4;
    const zoomIn = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["interpolate"])(frame, [
        0,
        scene.duration
    ], [
        1.0,
        1.15
    ], {
        extrapolateRight: 'clamp'
    });
    const zoomOut = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["interpolate"])(frame, [
        0,
        scene.duration
    ], [
        1.15,
        1.0
    ], {
        extrapolateRight: 'clamp'
    });
    const panLeft = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["interpolate"])(frame, [
        0,
        scene.duration
    ], [
        0,
        -5
    ], {
        extrapolateRight: 'clamp'
    });
    const panRight = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["interpolate"])(frame, [
        0,
        scene.duration
    ], [
        -5,
        0
    ], {
        extrapolateRight: 'clamp'
    });
    const panDown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["interpolate"])(frame, [
        0,
        scene.duration
    ], [
        -5,
        0
    ], {
        extrapolateRight: 'clamp'
    });
    let scale = zoomIn;
    let translateX = 0;
    let translateY = 0;
    switch(animType){
        case 0:
            scale = zoomIn;
            break;
        case 1:
            scale = zoomOut;
            break;
        case 2:
            scale = 1.15;
            translateX = panLeft;
            break;
        case 3:
            scale = 1.15;
            translateX = panRight;
            translateY = panDown;
            break;
    }
    // Dynamic Typography (Cambiar la escritura)
    const fonts = [
        'Montserrat',
        'Inter',
        'Outfit',
        'Playfair Display'
    ];
    const fontFamily = fonts[variation % fonts.length];
    const isSerif = fontFamily === 'Playfair Display';
    // Text position variations based on animType seed
    const textPositions = {
        0: {
            justify: 'flex-end',
            align: 'flex-start'
        },
        1: {
            justify: 'flex-end',
            align: 'flex-end'
        },
        2: {
            justify: 'flex-start',
            align: 'flex-start'
        },
        3: {
            justify: 'center',
            align: 'center'
        } // Center (with title offset)
    };
    const pos = textPositions[animType];
    // Fade in and slide up text
    const textOpacity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["interpolate"])(frame, [
        0,
        15
    ], [
        0,
        1
    ], {
        extrapolateRight: 'clamp'
    });
    const textTranslateY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["interpolate"])(frame, [
        0,
        15
    ], [
        40,
        0
    ], {
        extrapolateRight: 'clamp'
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AbsoluteFill"], {
        className: "bg-black overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Img"], {
                src: scene.imageUrl,
                style: {
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transform: `scale(${scale}) translateX(${translateX}%) translateY(${translateY}%)`
                }
            }, void 0, false, {
                fileName: "[project]/apps/web/components/marketing/video-composition.tsx",
                lineNumber: 76,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AbsoluteFill"], {
                style: {
                    background: pos.justify === 'flex-start' ? 'linear-gradient(to bottom, rgba(0,0,0,0.85) 0%, transparent 60%)' : pos.justify === 'center' ? 'radial-gradient(circle, rgba(0,0,0,0.7) 0%, transparent 80%)' : 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 60%)'
                }
            }, void 0, false, {
                fileName: "[project]/apps/web/components/marketing/video-composition.tsx",
                lineNumber: 87,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AbsoluteFill"], {
                style: {
                    justifyContent: pos.justify,
                    alignItems: pos.align,
                    padding: '60px',
                    paddingTop: pos.justify === 'flex-start' || pos.justify === 'center' ? '180px' : '60px',
                    opacity: textOpacity
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        backdropFilter: 'blur(10px)',
                        borderRadius: '24px',
                        padding: '24px',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
                        textAlign: pos.align === 'center' ? 'center' : 'left',
                        transform: `translateY(${textTranslateY}px)`
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        style: {
                            color: 'white',
                            fontSize: isSerif ? '46px' : '42px',
                            fontWeight: isSerif ? 'bold' : '900',
                            fontFamily,
                            margin: 0,
                            textShadow: '0 2px 4px rgba(0,0,0,0.5)',
                            lineHeight: '1.2'
                        },
                        children: scene.text
                    }, void 0, false, {
                        fileName: "[project]/apps/web/components/marketing/video-composition.tsx",
                        lineNumber: 117,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/apps/web/components/marketing/video-composition.tsx",
                    lineNumber: 107,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/apps/web/components/marketing/video-composition.tsx",
                lineNumber: 98,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/components/marketing/video-composition.tsx",
        lineNumber: 75,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(SceneComponent, "r9+4YNOojODzOkpJxZj+8Uyazfs=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCurrentFrame"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useVideoConfig"]
    ];
});
_c = SceneComponent;
const VideoComposition = ({ scenes, musicAudioUrl, voiceAudioUrl, title, price, avatarId, variation = 0 })=>{
    let currentStartFrame = 0;
    // Hardcoded simple mapping based on ai-avatar-selector options
    const avatarsMap = {
        sofia: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
        marcos: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80",
        elena: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80",
        javier: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80"
    };
    const selectedAvatarImg = avatarId ? avatarsMap[avatarId] : null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AbsoluteFill"], {
        className: "bg-gray-900",
        children: [
            musicAudioUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Audio"], {
                src: musicAudioUrl,
                volume: voiceAudioUrl ? 0.15 : 1
            }, void 0, false, {
                fileName: "[project]/apps/web/components/marketing/video-composition.tsx",
                lineNumber: 157,
                columnNumber: 31
            }, ("TURBOPACK compile-time value", void 0)),
            voiceAudioUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Audio"], {
                src: voiceAudioUrl,
                volume: 1
            }, void 0, false, {
                fileName: "[project]/apps/web/components/marketing/video-composition.tsx",
                lineNumber: 158,
                columnNumber: 31
            }, ("TURBOPACK compile-time value", void 0)),
            scenes.map((scene, index)=>{
                const sequence = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Sequence"], {
                    from: currentStartFrame,
                    durationInFrames: scene.duration,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SceneComponent, {
                        scene: scene,
                        index: index,
                        variation: variation
                    }, void 0, false, {
                        fileName: "[project]/apps/web/components/marketing/video-composition.tsx",
                        lineNumber: 167,
                        columnNumber: 25
                    }, ("TURBOPACK compile-time value", void 0))
                }, index, false, {
                    fileName: "[project]/apps/web/components/marketing/video-composition.tsx",
                    lineNumber: 162,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0));
                currentStartFrame += scene.duration;
                return sequence;
            }),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AbsoluteFill"], {
                style: {
                    height: '150px',
                    padding: '40px',
                    pointerEvents: 'none'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                                padding: '8px 16px',
                                borderRadius: '12px',
                                fontWeight: 'bold',
                                fontSize: '14px',
                                color: '#6366f1',
                                boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                            },
                            children: title
                        }, void 0, false, {
                            fileName: "[project]/apps/web/components/marketing/video-composition.tsx",
                            lineNumber: 187,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        price && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                backgroundColor: '#6366f1',
                                padding: '8px 16px',
                                borderRadius: '12px',
                                fontWeight: '900',
                                fontSize: '16px',
                                color: 'white',
                                boxShadow: '0 4px 12px rgba(99, 102, 241, 0.3)'
                            },
                            children: price
                        }, void 0, false, {
                            fileName: "[project]/apps/web/components/marketing/video-composition.tsx",
                            lineNumber: 199,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/components/marketing/video-composition.tsx",
                    lineNumber: 182,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/apps/web/components/marketing/video-composition.tsx",
                lineNumber: 175,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            selectedAvatarImg && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AbsoluteFill"], {
                style: {
                    padding: '60px',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    pointerEvents: 'none',
                    top: '160px'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        width: '200px',
                        height: '200px',
                        borderRadius: '100px',
                        overflow: 'hidden',
                        border: '6px solid white',
                        boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
                        position: 'relative'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Img"], {
                            src: selectedAvatarImg,
                            style: {
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover'
                            }
                        }, void 0, false, {
                            fileName: "[project]/apps/web/components/marketing/video-composition.tsx",
                            lineNumber: 234,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                position: 'absolute',
                                bottom: 0,
                                right: 0,
                                left: 0,
                                height: '40px',
                                background: 'linear-gradient(transparent, rgba(0,0,0,0.7))'
                            }
                        }, void 0, false, {
                            fileName: "[project]/apps/web/components/marketing/video-composition.tsx",
                            lineNumber: 238,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/components/marketing/video-composition.tsx",
                    lineNumber: 225,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/apps/web/components/marketing/video-composition.tsx",
                lineNumber: 216,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/components/marketing/video-composition.tsx",
        lineNumber: 156,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_c1 = VideoComposition;
var _c, _c1;
__turbopack_context__.k.register(_c, "SceneComponent");
__turbopack_context__.k.register(_c1, "VideoComposition");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/components/marketing/ai-video-player.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AIVideoPlayer",
    ()=>AIVideoPlayer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$remotion$2f$player$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@remotion/player/dist/esm/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$marketing$2f$video$2d$composition$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/components/marketing/video-composition.tsx [app-client] (ecmascript)");
"use client";
;
;
;
const AIVideoPlayer = (props)=>{
    const durationInFrames = props.scenes.reduce((acc, s)=>acc + s.duration, 0);
    if (props.videoUrl) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full h-full bg-black relative",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                    src: props.videoUrl,
                    className: "w-full h-full object-cover",
                    controls: true,
                    autoPlay: true,
                    loop: true
                }, void 0, false, {
                    fileName: "[project]/apps/web/components/marketing/ai-video-player.tsx",
                    lineNumber: 13,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute top-4 left-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-2 py-1 bg-indigo-600 text-white text-[8px] font-black rounded uppercase tracking-widest shadow-lg",
                        children: "AI Synthesized"
                    }, void 0, false, {
                        fileName: "[project]/apps/web/components/marketing/ai-video-player.tsx",
                        lineNumber: 21,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/apps/web/components/marketing/ai-video-player.tsx",
                    lineNumber: 20,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/apps/web/components/marketing/ai-video-player.tsx",
            lineNumber: 12,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$remotion$2f$player$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Player"], {
        component: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$marketing$2f$video$2d$composition$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VideoComposition"],
        inputProps: props,
        durationInFrames: durationInFrames,
        fps: 30,
        compositionWidth: 1080,
        compositionHeight: 1920,
        style: {
            width: '100%',
            height: '100%'
        },
        controls: true,
        autoPlay: true,
        loop: true
    }, void 0, false, {
        fileName: "[project]/apps/web/components/marketing/ai-video-player.tsx",
        lineNumber: 30,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_c = AIVideoPlayer;
var _c;
__turbopack_context__.k.register(_c, "AIVideoPlayer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/components/marketing/ai-video-player.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/apps/web/components/marketing/ai-video-player.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=apps_web_components_marketing_924f7a5d._.js.map