module.exports = [
"[project]/apps/web/components/ui/badge.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Badge",
    ()=>Badge,
    "badgeVariants",
    ()=>badgeVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
const badgeVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2", {
    variants: {
        variant: {
            default: "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
            secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
            destructive: "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
            outline: "text-foreground"
        }
    },
    defaultVariants: {
        variant: "default"
    }
});
function Badge({ className, variant, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(badgeVariants({
            variant
        }), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/apps/web/components/ui/badge.tsx",
        lineNumber: 32,
        columnNumber: 9
    }, this);
}
;
}),
"[project]/apps/web/components/ui/scroll-area.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ScrollArea",
    ()=>ScrollArea,
    "ScrollBar",
    ()=>ScrollBar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-scroll-area/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
function ScrollArea({ className, children, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "scroll-area",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("relative", className),
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Viewport"], {
                "data-slot": "scroll-area-viewport",
                className: "focus-visible:ring-ring/50 size-full rounded-[inherit] transition-[color,box-shadow] outline-none focus-visible:ring-[3px] focus-visible:outline-1",
                children: children
            }, void 0, false, {
                fileName: "[project]/apps/web/components/ui/scroll-area.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ScrollBar, {}, void 0, false, {
                fileName: "[project]/apps/web/components/ui/scroll-area.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Corner"], {}, void 0, false, {
                fileName: "[project]/apps/web/components/ui/scroll-area.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/components/ui/scroll-area.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
function ScrollBar({ className, orientation = "vertical", ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollAreaScrollbar"], {
        "data-slot": "scroll-area-scrollbar",
        orientation: orientation,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex touch-none p-px transition-colors select-none", orientation === "vertical" && "h-full w-2.5 border-l border-l-transparent", orientation === "horizontal" && "h-2.5 flex-col border-t border-t-transparent", className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollAreaThumb"], {
            "data-slot": "scroll-area-thumb",
            className: "bg-border relative flex-1 rounded-full"
        }, void 0, false, {
            fileName: "[project]/apps/web/components/ui/scroll-area.tsx",
            lineNumber: 50,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/web/components/ui/scroll-area.tsx",
        lineNumber: 37,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/apps/web/components/messages/message-list.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MessageList",
    ()=>MessageList
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$scroll$2d$area$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/components/ui/scroll-area.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/components/ui/badge.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check-check.js [app-ssr] (ecmascript) <export default as CheckCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/date-fns/format.js [app-ssr] (ecmascript) <locals>");
"use client";
;
;
;
;
;
;
function MessageList({ messages, currentUserId }) {
    const scrollRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Auto-scroll to bottom when new messages arrive
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [
        messages
    ]);
    if (messages.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex-1 flex items-center justify-center p-8",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm font-bold text-gray-400",
                        children: "No hay mensajes aún"
                    }, void 0, false, {
                        fileName: "[project]/apps/web/components/messages/message-list.tsx",
                        lineNumber: 29,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-gray-300",
                        children: "Inicia la conversación enviando un mensaje"
                    }, void 0, false, {
                        fileName: "[project]/apps/web/components/messages/message-list.tsx",
                        lineNumber: 30,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/components/messages/message-list.tsx",
                lineNumber: 28,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/apps/web/components/messages/message-list.tsx",
            lineNumber: 27,
            columnNumber: 13
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$scroll$2d$area$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollArea"], {
        className: "flex-1 p-8",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: scrollRef,
            className: "space-y-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                        variant: "outline",
                        className: "border-gray-50 bg-gray-50/50 text-[10px] font-bold text-gray-400 px-4 py-1.5 rounded-full uppercase tracking-widest",
                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(new Date(messages[0].created_at), "EEEE, d MMM")
                    }, void 0, false, {
                        fileName: "[project]/apps/web/components/messages/message-list.tsx",
                        lineNumber: 40,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/apps/web/components/messages/message-list.tsx",
                    lineNumber: 39,
                    columnNumber: 17
                }, this),
                messages.map((msg)=>{
                    const isMe = msg.sender_id === currentUserId;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `flex ${isMe ? 'justify-end' : 'justify-start'}`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `max-w-[70%] space-y-1 ${isMe ? 'items-end flex flex-col' : 'items-start flex flex-col'}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `p-4 rounded-3xl text-sm font-medium shadow-sm ${isMe ? 'bg-blue-600 text-white rounded-tr-sm shadow-blue-500/10' : 'bg-gray-50 text-gray-800 rounded-tl-sm'}`,
                                    children: msg.content
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/components/messages/message-list.tsx",
                                    lineNumber: 51,
                                    columnNumber: 33
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-1 px-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[9px] font-bold text-gray-400",
                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(new Date(msg.created_at), "HH:mm")
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/components/messages/message-list.tsx",
                                            lineNumber: 58,
                                            columnNumber: 37
                                        }, this),
                                        isMe && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCheck$3e$__["CheckCheck"], {
                                            className: "h-3 w-3 text-blue-500"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/components/messages/message-list.tsx",
                                            lineNumber: 61,
                                            columnNumber: 46
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/components/messages/message-list.tsx",
                                    lineNumber: 57,
                                    columnNumber: 33
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/components/messages/message-list.tsx",
                            lineNumber: 50,
                            columnNumber: 29
                        }, this)
                    }, msg.id, false, {
                        fileName: "[project]/apps/web/components/messages/message-list.tsx",
                        lineNumber: 49,
                        columnNumber: 25
                    }, this);
                })
            ]
        }, void 0, true, {
            fileName: "[project]/apps/web/components/messages/message-list.tsx",
            lineNumber: 38,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/web/components/messages/message-list.tsx",
        lineNumber: 37,
        columnNumber: 9
    }, this);
}
}),
"[project]/apps/web/components/ui/textarea.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Textarea",
    ()=>Textarea
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
const Textarea = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50", className),
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "[project]/apps/web/components/ui/textarea.tsx",
        lineNumber: 11,
        columnNumber: 13
    }, ("TURBOPACK compile-time value", void 0));
});
Textarea.displayName = "Textarea";
;
}),
"[project]/apps/web/app/actions/data:27fd77 [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "sendMessage",
    ()=>$$RSC_SERVER_ACTION_2
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"70b3f66502d73e905236ee8e0923bcf95dfea7d448":"sendMessage"},"apps/web/app/actions/messages.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("70b3f66502d73e905236ee8e0923bcf95dfea7d448", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "sendMessage");
;
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vbWVzc2FnZXMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc2VydmVyXCJcblxuaW1wb3J0IHsgY3JlYXRlQ2xpZW50LCBnZXRUZW5hbnRJZCB9IGZyb20gXCJAL2xpYi9zdXBhYmFzZS9zZXJ2ZXJcIlxuaW1wb3J0IHsgcmV2YWxpZGF0ZVBhdGggfSBmcm9tIFwibmV4dC9jYWNoZVwiXG5pbXBvcnQgdHlwZSB7IENvbnZlcnNhdGlvbiwgTWVzc2FnZSwgQ29udmVyc2F0aW9uV2l0aERldGFpbHMsIE1lc3NhZ2VXaXRoU2VuZGVyIH0gZnJvbSBcIkBpbm1vY21zL3NoYXJlZFwiXG5cbi8qKlxuICogT2J0ZW5lciB0b2RhcyBsYXMgY29udmVyc2FjaW9uZXMgZGVsIHVzdWFyaW8gYWN0dWFsXG4gKiBjb24gZGV0YWxsZXMgZGUgcGFydGljaXBhbnRlcyB5IMO6bHRpbW8gbWVuc2FqZVxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q29udmVyc2F0aW9ucygpOiBQcm9taXNlPENvbnZlcnNhdGlvbldpdGhEZXRhaWxzW10+IHtcbiAgICBjb25zdCBzdXBhYmFzZSA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpXG4gICAgY29uc3QgdGVuYW50SWQgPSBhd2FpdCBnZXRUZW5hbnRJZChzdXBhYmFzZSlcblxuICAgIGNvbnN0IHsgZGF0YTogeyB1c2VyIH0gfSA9IGF3YWl0IHN1cGFiYXNlLmF1dGguZ2V0VXNlcigpXG5cbiAgICBpZiAoIXRlbmFudElkIHx8ICF1c2VyKSByZXR1cm4gW11cblxuICAgIC8vIE9idGVuZXIgY29udmVyc2FjaW9uZXMgZW4gbGFzIHF1ZSBwYXJ0aWNpcGEgZWwgdXN1YXJpb1xuICAgIGNvbnN0IHsgZGF0YTogcGFydGljaXBhdGlvbnMsIGVycm9yOiBwYXJ0aWNpcGF0aW9uRXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXG4gICAgICAgIC5mcm9tKFwiY29udmVyc2F0aW9uX3BhcnRpY2lwYW50c1wiKVxuICAgICAgICAuc2VsZWN0KGBcbiAgICAgICAgICAgIGNvbnZlcnNhdGlvbl9pZCxcbiAgICAgICAgICAgIGxhc3RfcmVhZF9hdCxcbiAgICAgICAgICAgIGNvbnZlcnNhdGlvbnMgKFxuICAgICAgICAgICAgICAgIGlkLFxuICAgICAgICAgICAgICAgIHRlbmFudF9pZCxcbiAgICAgICAgICAgICAgICBjcmVhdGVkX2F0LFxuICAgICAgICAgICAgICAgIHVwZGF0ZWRfYXQsXG4gICAgICAgICAgICAgICAgbGVhZF9pZFxuICAgICAgICAgICAgKVxuICAgICAgICBgKVxuICAgICAgICAuZXEoXCJ1c2VyX2lkXCIsIHVzZXIuaWQpXG5cbiAgICBpZiAocGFydGljaXBhdGlvbkVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyBjb252ZXJzYXRpb25zOlwiLCBwYXJ0aWNpcGF0aW9uRXJyb3IpXG4gICAgICAgIHJldHVybiBbXVxuICAgIH1cblxuICAgIGNvbnN0IGNvbnZlcnNhdGlvbnM6IENvbnZlcnNhdGlvbldpdGhEZXRhaWxzW10gPSBbXVxuXG4gICAgZm9yIChjb25zdCBwYXJ0aWNpcGF0aW9uIG9mIHBhcnRpY2lwYXRpb25zIHx8IFtdKSB7XG4gICAgICAgIGNvbnN0IGNvbnYgPSBwYXJ0aWNpcGF0aW9uLmNvbnZlcnNhdGlvbnMgYXMgdW5rbm93biBhcyBDb252ZXJzYXRpb25cbiAgICAgICAgaWYgKCFjb252KSBjb250aW51ZVxuXG4gICAgICAgIC8vIE9idGVuZXIgb3Ryb3MgcGFydGljaXBhbnRlc1xuICAgICAgICBjb25zdCB7IGRhdGE6IHBhcnRpY2lwYW50cywgZXJyb3I6IHBhcnRpY2lwYW50c0Vycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxuICAgICAgICAgICAgLmZyb20oXCJjb252ZXJzYXRpb25fcGFydGljaXBhbnRzXCIpXG4gICAgICAgICAgICAuc2VsZWN0KGBcbiAgICAgICAgICAgICAgICB1c2VyX2lkLFxuICAgICAgICAgICAgICAgIGpvaW5lZF9hdCxcbiAgICAgICAgICAgICAgICBwcm9maWxlcyAoXG4gICAgICAgICAgICAgICAgICAgIGlkLFxuICAgICAgICAgICAgICAgICAgICBlbWFpbCxcbiAgICAgICAgICAgICAgICAgICAgZnVsbF9uYW1lLFxuICAgICAgICAgICAgICAgICAgICBhdmF0YXJfdXJsXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgYClcbiAgICAgICAgICAgIC5lcShcImNvbnZlcnNhdGlvbl9pZFwiLCBjb252LmlkKVxuICAgICAgICAgICAgLm5lcShcInVzZXJfaWRcIiwgdXNlci5pZClcblxuICAgICAgICAvLyBPYnRlbmVyIMO6bHRpbW8gbWVuc2FqZVxuICAgICAgICBjb25zdCB7IGRhdGE6IGxhc3RNZXNzYWdlIH0gPSBhd2FpdCBzdXBhYmFzZVxuICAgICAgICAgICAgLmZyb20oXCJtZXNzYWdlc1wiKVxuICAgICAgICAgICAgLnNlbGVjdChgXG4gICAgICAgICAgICAgICAgaWQsXG4gICAgICAgICAgICAgICAgY29udmVyc2F0aW9uX2lkLFxuICAgICAgICAgICAgICAgIHNlbmRlcl9pZCxcbiAgICAgICAgICAgICAgICBjb250ZW50LFxuICAgICAgICAgICAgICAgIGNyZWF0ZWRfYXQsXG4gICAgICAgICAgICAgICAgcHJvZmlsZXM6c2VuZGVyX2lkIChcbiAgICAgICAgICAgICAgICAgICAgaWQsXG4gICAgICAgICAgICAgICAgICAgIGVtYWlsLFxuICAgICAgICAgICAgICAgICAgICBmdWxsX25hbWUsXG4gICAgICAgICAgICAgICAgICAgIGF2YXRhcl91cmxcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICBgKVxuICAgICAgICAgICAgLmVxKFwiY29udmVyc2F0aW9uX2lkXCIsIGNvbnYuaWQpXG4gICAgICAgICAgICAub3JkZXIoXCJjcmVhdGVkX2F0XCIsIHsgYXNjZW5kaW5nOiBmYWxzZSB9KVxuICAgICAgICAgICAgLmxpbWl0KDEpXG4gICAgICAgICAgICAuc2luZ2xlKClcblxuICAgICAgICAvLyBDYWxjdWxhciBtZW5zYWplcyBubyBsZcOtZG9zXG4gICAgICAgIGNvbnN0IHsgY291bnQ6IHVucmVhZENvdW50IH0gPSBhd2FpdCBzdXBhYmFzZVxuICAgICAgICAgICAgLmZyb20oXCJtZXNzYWdlc1wiKVxuICAgICAgICAgICAgLnNlbGVjdChcIipcIiwgeyBjb3VudDogJ2V4YWN0JywgaGVhZDogdHJ1ZSB9KVxuICAgICAgICAgICAgLmVxKFwiY29udmVyc2F0aW9uX2lkXCIsIGNvbnYuaWQpXG4gICAgICAgICAgICAubmVxKFwic2VuZGVyX2lkXCIsIHVzZXIuaWQpXG4gICAgICAgICAgICAuZ3QoXCJjcmVhdGVkX2F0XCIsIHBhcnRpY2lwYXRpb24ubGFzdF9yZWFkX2F0KVxuXG4gICAgICAgIGNvbnN0IG90aGVyVXNlciA9IHBhcnRpY2lwYW50cz8uWzBdPy5wcm9maWxlcyBhcyBhbnlcblxuICAgICAgICAvLyBGZXRjaCBsZWFkIGRldGFpbHMgaWYgaXQncyBhIGNsaWVudCBjb252ZXJzYXRpb25cbiAgICAgICAgbGV0IGxlYWREYXRhID0gbnVsbFxuICAgICAgICBpZiAoY29udi5sZWFkX2lkKSB7XG4gICAgICAgICAgICBjb25zdCB7IGRhdGE6IGxlYWQgfSA9IGF3YWl0IHN1cGFiYXNlXG4gICAgICAgICAgICAgICAgLmZyb20oXCJsZWFkc1wiKVxuICAgICAgICAgICAgICAgIC5zZWxlY3QoXCJpZCwgbmFtZSwgZW1haWwsIHBob25lLCBzdGF0dXNcIilcbiAgICAgICAgICAgICAgICAuZXEoXCJpZFwiLCBjb252LmxlYWRfaWQpXG4gICAgICAgICAgICAgICAgLnNpbmdsZSgpXG4gICAgICAgICAgICBsZWFkRGF0YSA9IGxlYWRcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnZlcnNhdGlvbnMucHVzaCh7XG4gICAgICAgICAgICAuLi5jb252LFxuICAgICAgICAgICAgbGFzdF9tZXNzYWdlOiBsYXN0TWVzc2FnZSA/IHtcbiAgICAgICAgICAgICAgICAuLi5sYXN0TWVzc2FnZSxcbiAgICAgICAgICAgICAgICBzZW5kZXI6IGxhc3RNZXNzYWdlLnByb2ZpbGVzIGFzIGFueVxuICAgICAgICAgICAgfSA6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIHVucmVhZF9jb3VudDogdW5yZWFkQ291bnQgfHwgMCxcbiAgICAgICAgICAgIG90aGVyX3VzZXI6IG90aGVyVXNlcixcbiAgICAgICAgICAgIGxlYWQ6IGxlYWREYXRhIGFzIGFueVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIC8vIE9yZGVuYXIgcG9yIMO6bHRpbWEgYWN0aXZpZGFkXG4gICAgY29udmVyc2F0aW9ucy5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgIGNvbnN0IGFUaW1lID0gYS5sYXN0X21lc3NhZ2U/LmNyZWF0ZWRfYXQgfHwgYS51cGRhdGVkX2F0XG4gICAgICAgIGNvbnN0IGJUaW1lID0gYi5sYXN0X21lc3NhZ2U/LmNyZWF0ZWRfYXQgfHwgYi51cGRhdGVkX2F0XG4gICAgICAgIHJldHVybiBuZXcgRGF0ZShiVGltZSkuZ2V0VGltZSgpIC0gbmV3IERhdGUoYVRpbWUpLmdldFRpbWUoKVxuICAgIH0pXG5cbiAgICByZXR1cm4gY29udmVyc2F0aW9uc1xufVxuXG4vKipcbiAqIE9idGVuZXIgbWVuc2FqZXMgZGUgdW5hIGNvbnZlcnNhY2nDs24gZXNwZWPDrWZpY2FcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldE1lc3NhZ2VzKGNvbnZlcnNhdGlvbklkOiBzdHJpbmcpOiBQcm9taXNlPE1lc3NhZ2VXaXRoU2VuZGVyW10+IHtcbiAgICBjb25zdCBzdXBhYmFzZSA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpXG4gICAgY29uc3QgeyBkYXRhOiB7IHVzZXIgfSB9ID0gYXdhaXQgc3VwYWJhc2UuYXV0aC5nZXRVc2VyKClcblxuICAgIGlmICghdXNlcikgcmV0dXJuIFtdXG5cbiAgICAvLyBWZXJpZmljYXIgcXVlIGVsIHVzdWFyaW8gZXMgcGFydGljaXBhbnRlIGRlIGxhIGNvbnZlcnNhY2nDs25cbiAgICBjb25zdCB7IGRhdGE6IHBhcnRpY2lwYXRpb24gfSA9IGF3YWl0IHN1cGFiYXNlXG4gICAgICAgIC5mcm9tKFwiY29udmVyc2F0aW9uX3BhcnRpY2lwYW50c1wiKVxuICAgICAgICAuc2VsZWN0KFwiY29udmVyc2F0aW9uX2lkXCIpXG4gICAgICAgIC5lcShcImNvbnZlcnNhdGlvbl9pZFwiLCBjb252ZXJzYXRpb25JZClcbiAgICAgICAgLmVxKFwidXNlcl9pZFwiLCB1c2VyLmlkKVxuICAgICAgICAuc2luZ2xlKClcblxuICAgIGlmICghcGFydGljaXBhdGlvbikge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiVXNlciBpcyBub3QgYSBwYXJ0aWNpcGFudCBvZiB0aGlzIGNvbnZlcnNhdGlvblwiKVxuICAgICAgICByZXR1cm4gW11cbiAgICB9XG5cbiAgICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxuICAgICAgICAuZnJvbShcIm1lc3NhZ2VzXCIpXG4gICAgICAgIC5zZWxlY3QoYFxuICAgICAgICAgICAgaWQsXG4gICAgICAgICAgICBjb252ZXJzYXRpb25faWQsXG4gICAgICAgICAgICBzZW5kZXJfaWQsXG4gICAgICAgICAgICBjb250ZW50LFxuICAgICAgICAgICAgY3JlYXRlZF9hdCxcbiAgICAgICAgICAgIHByb2ZpbGVzOnNlbmRlcl9pZCAoXG4gICAgICAgICAgICAgICAgaWQsXG4gICAgICAgICAgICAgICAgZW1haWwsXG4gICAgICAgICAgICAgICAgZnVsbF9uYW1lLFxuICAgICAgICAgICAgICAgIGF2YXRhcl91cmxcbiAgICAgICAgICAgIClcbiAgICAgICAgYClcbiAgICAgICAgLmVxKFwiY29udmVyc2F0aW9uX2lkXCIsIGNvbnZlcnNhdGlvbklkKVxuICAgICAgICAub3JkZXIoXCJjcmVhdGVkX2F0XCIsIHsgYXNjZW5kaW5nOiB0cnVlIH0pXG5cbiAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIG1lc3NhZ2VzOlwiLCBlcnJvcilcbiAgICAgICAgcmV0dXJuIFtdXG4gICAgfVxuXG4gICAgcmV0dXJuIGRhdGEubWFwKG1zZyA9PiAoe1xuICAgICAgICAuLi5tc2csXG4gICAgICAgIHNlbmRlcjogbXNnLnByb2ZpbGVzIGFzIGFueVxuICAgIH0pKVxufVxuXG4vKipcbiAqIEVudmlhciB1biBtZW5zYWplIGEgdW5hIGNvbnZlcnNhY2nDs25cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNlbmRNZXNzYWdlKGNvbnZlcnNhdGlvbklkOiBzdHJpbmcsIGNvbnRlbnQ6IHN0cmluZywgcmV2YWxpZGF0ZSA9IHRydWUpOiBQcm9taXNlPE1lc3NhZ2UgfCBudWxsPiB7XG4gICAgY29uc3Qgc3VwYWJhc2UgPSBhd2FpdCBjcmVhdGVDbGllbnQoKVxuICAgIGNvbnN0IHsgZGF0YTogeyB1c2VyIH0gfSA9IGF3YWl0IHN1cGFiYXNlLmF1dGguZ2V0VXNlcigpXG5cbiAgICBpZiAoIXVzZXIgfHwgIWNvbnRlbnQudHJpbSgpKSByZXR1cm4gbnVsbFxuXG4gICAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcbiAgICAgICAgLmZyb20oXCJtZXNzYWdlc1wiKVxuICAgICAgICAuaW5zZXJ0KHtcbiAgICAgICAgICAgIGNvbnZlcnNhdGlvbl9pZDogY29udmVyc2F0aW9uSWQsXG4gICAgICAgICAgICBzZW5kZXJfaWQ6IHVzZXIuaWQsXG4gICAgICAgICAgICBjb250ZW50OiBjb250ZW50LnRyaW0oKVxuICAgICAgICB9KVxuICAgICAgICAuc2VsZWN0KClcbiAgICAgICAgLnNpbmdsZSgpXG5cbiAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkRFQlVHOiBFcnJvciBzZW5kaW5nIG1lc3NhZ2U6XCIsIHtcbiAgICAgICAgICAgIGVycm9yLFxuICAgICAgICAgICAgY29udmVyc2F0aW9uSWQsXG4gICAgICAgICAgICB1c2VySWQ6IHVzZXIuaWRcbiAgICAgICAgfSlcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycm9yLm1lc3NhZ2UpXG4gICAgfVxuXG4gICAgaWYgKHJldmFsaWRhdGUpIHtcbiAgICAgICAgcmV2YWxpZGF0ZVBhdGgoXCIvbWVuc2FqZXNcIilcbiAgICB9XG4gICAgcmV0dXJuIGRhdGFcbn1cblxuLyoqXG4gKiBNYXJjYXIgY29udmVyc2FjacOzbiBjb21vIGxlw61kYVxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbWFya0FzUmVhZChjb252ZXJzYXRpb25JZDogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgY29uc3Qgc3VwYWJhc2UgPSBhd2FpdCBjcmVhdGVDbGllbnQoKVxuICAgIGNvbnN0IHsgZGF0YTogeyB1c2VyIH0gfSA9IGF3YWl0IHN1cGFiYXNlLmF1dGguZ2V0VXNlcigpXG5cbiAgICBpZiAoIXVzZXIpIHJldHVyblxuXG4gICAgY29uc3QgeyBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcbiAgICAgICAgLmZyb20oXCJjb252ZXJzYXRpb25fcGFydGljaXBhbnRzXCIpXG4gICAgICAgIC51cGRhdGUoeyBsYXN0X3JlYWRfYXQ6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSB9KVxuICAgICAgICAuZXEoXCJjb252ZXJzYXRpb25faWRcIiwgY29udmVyc2F0aW9uSWQpXG4gICAgICAgIC5lcShcInVzZXJfaWRcIiwgdXNlci5pZClcblxuICAgIGlmIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgbWFya2luZyBhcyByZWFkOlwiLCBlcnJvcilcbiAgICB9XG5cbiAgICByZXZhbGlkYXRlUGF0aChcIi9tZW5zYWplc1wiKVxufVxuXG4vKipcbiAqIE9idGVuZXIgbyBjcmVhciB1bmEgY29udmVyc2FjacOzbiBjb24gb3RybyB1c3VhcmlvXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRPckNyZWF0ZUNvbnZlcnNhdGlvbihvdGhlclVzZXJJZDogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmcgfCBudWxsPiB7XG4gICAgY29uc3Qgc3VwYWJhc2UgPSBhd2FpdCBjcmVhdGVDbGllbnQoKVxuICAgIGNvbnN0IHRlbmFudElkID0gYXdhaXQgZ2V0VGVuYW50SWQoc3VwYWJhc2UpXG4gICAgY29uc3QgeyBkYXRhOiB7IHVzZXIgfSB9ID0gYXdhaXQgc3VwYWJhc2UuYXV0aC5nZXRVc2VyKClcblxuICAgIGlmICghdGVuYW50SWQgfHwgIXVzZXIpIHJldHVybiBudWxsXG5cbiAgICAvLyBCdXNjYXIgY29udmVyc2FjacOzbiBleGlzdGVudGUgZW50cmUgZXN0b3MgZG9zIHVzdWFyaW9zXG4gICAgY29uc3QgeyBkYXRhOiBleGlzdGluZ1BhcnRpY2lwYXRpb25zIH0gPSBhd2FpdCBzdXBhYmFzZVxuICAgICAgICAuZnJvbShcImNvbnZlcnNhdGlvbl9wYXJ0aWNpcGFudHNcIilcbiAgICAgICAgLnNlbGVjdChcImNvbnZlcnNhdGlvbl9pZFwiKVxuICAgICAgICAuZXEoXCJ1c2VyX2lkXCIsIHVzZXIuaWQpXG5cbiAgICBpZiAoZXhpc3RpbmdQYXJ0aWNpcGF0aW9ucykge1xuICAgICAgICBmb3IgKGNvbnN0IHBhcnRpY2lwYXRpb24gb2YgZXhpc3RpbmdQYXJ0aWNpcGF0aW9ucykge1xuICAgICAgICAgICAgY29uc3QgeyBkYXRhOiBvdGhlclBhcnRpY2lwYXRpb24gfSA9IGF3YWl0IHN1cGFiYXNlXG4gICAgICAgICAgICAgICAgLmZyb20oXCJjb252ZXJzYXRpb25fcGFydGljaXBhbnRzXCIpXG4gICAgICAgICAgICAgICAgLnNlbGVjdChcInVzZXJfaWRcIilcbiAgICAgICAgICAgICAgICAuZXEoXCJjb252ZXJzYXRpb25faWRcIiwgcGFydGljaXBhdGlvbi5jb252ZXJzYXRpb25faWQpXG4gICAgICAgICAgICAgICAgLmVxKFwidXNlcl9pZFwiLCBvdGhlclVzZXJJZClcbiAgICAgICAgICAgICAgICAuc2luZ2xlKClcblxuICAgICAgICAgICAgaWYgKG90aGVyUGFydGljaXBhdGlvbikge1xuICAgICAgICAgICAgICAgIHJldHVybiBwYXJ0aWNpcGF0aW9uLmNvbnZlcnNhdGlvbl9pZFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gQ3JlYXIgbnVldmEgY29udmVyc2FjacOzblxuICAgIGNvbnN0IHsgZGF0YTogbmV3Q29udmVyc2F0aW9uLCBlcnJvcjogY29udkVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxuICAgICAgICAuZnJvbShcImNvbnZlcnNhdGlvbnNcIilcbiAgICAgICAgLmluc2VydCh7IHRlbmFudF9pZDogdGVuYW50SWQgfSlcbiAgICAgICAgLnNlbGVjdCgpXG4gICAgICAgIC5zaW5nbGUoKVxuXG4gICAgaWYgKGNvbnZFcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgY3JlYXRpbmcgY29udmVyc2F0aW9uOlwiLCBjb252RXJyb3IpXG4gICAgICAgIHJldHVybiBudWxsXG4gICAgfVxuXG4gICAgLy8gQWdyZWdhciBwYXJ0aWNpcGFudGVzXG4gICAgY29uc3QgeyBlcnJvcjogcGFydGljaXBhbnRzRXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXG4gICAgICAgIC5mcm9tKFwiY29udmVyc2F0aW9uX3BhcnRpY2lwYW50c1wiKVxuICAgICAgICAuaW5zZXJ0KFtcbiAgICAgICAgICAgIHsgY29udmVyc2F0aW9uX2lkOiBuZXdDb252ZXJzYXRpb24uaWQsIHVzZXJfaWQ6IHVzZXIuaWQgfSxcbiAgICAgICAgICAgIHsgY29udmVyc2F0aW9uX2lkOiBuZXdDb252ZXJzYXRpb24uaWQsIHVzZXJfaWQ6IG90aGVyVXNlcklkIH1cbiAgICAgICAgXSlcblxuICAgIGlmIChwYXJ0aWNpcGFudHNFcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgYWRkaW5nIHBhcnRpY2lwYW50czpcIiwgcGFydGljaXBhbnRzRXJyb3IpXG4gICAgICAgIHJldHVybiBudWxsXG4gICAgfVxuXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvbWVuc2FqZXNcIilcbiAgICByZXR1cm4gbmV3Q29udmVyc2F0aW9uLmlkXG59XG5cbi8qKlxuICogT2J0ZW5lciBsaXN0YSBkZSB1c3VhcmlvcyBkZWwgdGVuYW50IChwYXJhIGluaWNpYXIgY29udmVyc2FjaW9uZXMpXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRUZW5hbnRVc2VycygpIHtcbiAgICBjb25zdCBzdXBhYmFzZSA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpXG4gICAgY29uc3QgdGVuYW50SWQgPSBhd2FpdCBnZXRUZW5hbnRJZChzdXBhYmFzZSlcbiAgICBjb25zdCB7IGRhdGE6IHsgdXNlciB9IH0gPSBhd2FpdCBzdXBhYmFzZS5hdXRoLmdldFVzZXIoKVxuXG4gICAgaWYgKCF0ZW5hbnRJZCB8fCAhdXNlcikgcmV0dXJuIFtdXG5cbiAgICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxuICAgICAgICAuZnJvbShcInByb2ZpbGVzXCIpXG4gICAgICAgIC5zZWxlY3QoXCJpZCwgZW1haWwsIGZ1bGxfbmFtZSwgYXZhdGFyX3VybFwiKVxuICAgICAgICAuZXEoXCJ0ZW5hbnRfaWRcIiwgdGVuYW50SWQpXG4gICAgICAgIC5uZXEoXCJpZFwiLCB1c2VyLmlkKSAvLyBFeGNsdWlyIGFsIHVzdWFyaW8gYWN0dWFsXG5cbiAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIHRlbmFudCB1c2VyczpcIiwgZXJyb3IpXG4gICAgICAgIHJldHVybiBbXVxuICAgIH1cblxuICAgIHJldHVybiBkYXRhXG59XG5cbi8qKlxuICogT2J0ZW5lciBsaXN0YSBkZSBMZWFkcyBkZWwgdGVuYW50IChwYXJhIGluaWNpYXIgY29udmVyc2FjaW9uZXMgY29uIGNsaWVudGVzKVxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0TGVhZHNGb3JNZXNzYWdpbmcoKSB7XG4gICAgY29uc3Qgc3VwYWJhc2UgPSBhd2FpdCBjcmVhdGVDbGllbnQoKVxuICAgIGNvbnN0IHRlbmFudElkID0gYXdhaXQgZ2V0VGVuYW50SWQoc3VwYWJhc2UpXG5cbiAgICBpZiAoIXRlbmFudElkKSByZXR1cm4gW11cblxuICAgIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXG4gICAgICAgIC5mcm9tKFwibGVhZHNcIilcbiAgICAgICAgLnNlbGVjdChcImlkLCBuYW1lLCBlbWFpbCwgcGhvbmUsIHN0YXR1c1wiKVxuICAgICAgICAuZXEoXCJ0ZW5hbnRfaWRcIiwgdGVuYW50SWQpXG4gICAgICAgIC5vcmRlcihcIm5hbWVcIilcblxuICAgIGlmIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgbGVhZHMgZm9yIG1lc3NhZ2luZzpcIiwgZXJyb3IpXG4gICAgICAgIHJldHVybiBbXVxuICAgIH1cblxuICAgIHJldHVybiBkYXRhXG59XG5cbi8qKlxuICogT2J0ZW5lciBvIGNyZWFyIHVuYSBjb252ZXJzYWNpw7NuIGNvbiB1biBMZWFkXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRPckNyZWF0ZUxlYWRDb252ZXJzYXRpb24obGVhZElkOiBzdHJpbmcsIHJldmFsaWRhdGUgPSB0cnVlKTogUHJvbWlzZTxzdHJpbmcgfCBudWxsPiB7XG4gICAgY29uc3Qgc3VwYWJhc2UgPSBhd2FpdCBjcmVhdGVDbGllbnQoKVxuICAgIGNvbnN0IHRlbmFudElkID0gYXdhaXQgZ2V0VGVuYW50SWQoc3VwYWJhc2UpXG4gICAgY29uc3QgeyBkYXRhOiB7IHVzZXIgfSB9ID0gYXdhaXQgc3VwYWJhc2UuYXV0aC5nZXRVc2VyKClcblxuICAgIGlmICghdGVuYW50SWQgfHwgIXVzZXIpIHJldHVybiBudWxsXG5cbiAgICAvLyBCdXNjYXIgY29udmVyc2FjacOzbiBleGlzdGVudGUgcGFyYSBlc3RlIExlYWRcbiAgICBjb25zdCB7IGRhdGE6IGV4aXN0aW5nQ29udmVyc2F0aW9uIH0gPSBhd2FpdCBzdXBhYmFzZVxuICAgICAgICAuZnJvbShcImNvbnZlcnNhdGlvbnNcIilcbiAgICAgICAgLnNlbGVjdChcImlkXCIpXG4gICAgICAgIC5lcShcImxlYWRfaWRcIiwgbGVhZElkKVxuICAgICAgICAuc2luZ2xlKClcblxuICAgIGlmIChleGlzdGluZ0NvbnZlcnNhdGlvbikge1xuICAgICAgICAvLyBBc2VndXJhcnNlIGRlIHF1ZSBlbCB1c3VhcmlvIGFjdHVhbCBlcyBwYXJ0aWNpcGFudGVcbiAgICAgICAgY29uc3QgeyBkYXRhOiBpc1BhcnRpY2lwYW50IH0gPSBhd2FpdCBzdXBhYmFzZVxuICAgICAgICAgICAgLmZyb20oXCJjb252ZXJzYXRpb25fcGFydGljaXBhbnRzXCIpXG4gICAgICAgICAgICAuc2VsZWN0KFwiY29udmVyc2F0aW9uX2lkXCIpXG4gICAgICAgICAgICAuZXEoXCJjb252ZXJzYXRpb25faWRcIiwgZXhpc3RpbmdDb252ZXJzYXRpb24uaWQpXG4gICAgICAgICAgICAuZXEoXCJ1c2VyX2lkXCIsIHVzZXIuaWQpXG4gICAgICAgICAgICAuc2luZ2xlKClcblxuICAgICAgICBpZiAoIWlzUGFydGljaXBhbnQpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBERUJVRzogQWRkaW5nIGFnZW50ICR7dXNlci5pZH0gdG8gbGVhZCBjb252ZXJzYXRpb24gJHtleGlzdGluZ0NvbnZlcnNhdGlvbi5pZH1gKVxuICAgICAgICAgICAgYXdhaXQgc3VwYWJhc2VcbiAgICAgICAgICAgICAgICAuZnJvbShcImNvbnZlcnNhdGlvbl9wYXJ0aWNpcGFudHNcIilcbiAgICAgICAgICAgICAgICAuaW5zZXJ0KHtcbiAgICAgICAgICAgICAgICAgICAgY29udmVyc2F0aW9uX2lkOiBleGlzdGluZ0NvbnZlcnNhdGlvbi5pZCxcbiAgICAgICAgICAgICAgICAgICAgdXNlcl9pZDogdXNlci5pZFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZXhpc3RpbmdDb252ZXJzYXRpb24uaWRcbiAgICB9XG5cbiAgICAvLyBDcmVhciBudWV2YSBjb252ZXJzYWNpw7NuIHZpbmN1bGFkYSBhbCBMZWFkXG4gICAgY29uc3QgeyBkYXRhOiBuZXdDb252ZXJzYXRpb24sIGVycm9yOiBjb252RXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXG4gICAgICAgIC5mcm9tKFwiY29udmVyc2F0aW9uc1wiKVxuICAgICAgICAuaW5zZXJ0KHtcbiAgICAgICAgICAgIHRlbmFudF9pZDogdGVuYW50SWQsXG4gICAgICAgICAgICBsZWFkX2lkOiBsZWFkSWRcbiAgICAgICAgfSlcbiAgICAgICAgLnNlbGVjdCgpXG4gICAgICAgIC5zaW5nbGUoKVxuXG4gICAgaWYgKGNvbnZFcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgY3JlYXRpbmcgbGVhZCBjb252ZXJzYXRpb246XCIsIGNvbnZFcnJvcilcbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG5cbiAgICAvLyBBZ3JlZ2FyIGFsIHVzdWFyaW8gYWN0dWFsIGNvbW8gcGFydGljaXBhbnRlXG4gICAgY29uc3QgeyBlcnJvcjogcGFydGljaXBhbnRFcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcbiAgICAgICAgLmZyb20oXCJjb252ZXJzYXRpb25fcGFydGljaXBhbnRzXCIpXG4gICAgICAgIC5pbnNlcnQoeyBjb252ZXJzYXRpb25faWQ6IG5ld0NvbnZlcnNhdGlvbi5pZCwgdXNlcl9pZDogdXNlci5pZCB9KVxuXG4gICAgaWYgKHBhcnRpY2lwYW50RXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGFkZGluZyBwYXJ0aWNpcGFudCB0byBsZWFkIGNvbnZlcnNhdGlvbjpcIiwgcGFydGljaXBhbnRFcnJvcilcbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG5cbiAgICBpZiAocmV2YWxpZGF0ZSkge1xuICAgICAgICByZXZhbGlkYXRlUGF0aChcIi9tZW5zYWplc1wiKVxuICAgIH1cbiAgICByZXR1cm4gbmV3Q29udmVyc2F0aW9uLmlkXG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6ImdTQW1Mc0Isd0xBQUEifQ==
}),
"[project]/apps/web/components/messages/message-input.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MessageInput",
    ()=>MessageInput
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/send.js [app-ssr] (ecmascript) <export default as Send>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$textarea$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/components/ui/textarea.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$data$3a$27fd77__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/apps/web/app/actions/data:27fd77 [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
function MessageInput({ conversationId, onMessageSent }) {
    const [content, setContent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [isSending, setIsSending] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const textareaRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const handleSend = async ()=>{
        if (!content.trim() || isSending) return;
        setIsSending(true);
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$data$3a$27fd77__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["sendMessage"])(conversationId, content);
            setContent("");
            onMessageSent?.();
            // Auto-focus after sending
            setTimeout(()=>{
                textareaRef.current?.focus();
            }, 100);
        } catch (error) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error("Error al enviar mensaje");
            console.error(error);
        } finally{
            setIsSending(false);
        }
    };
    const handleKeyDown = (e)=>{
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-6 shrink-0 border-t border-gray-100",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-gray-50 rounded-[2.5rem] p-4 flex items-end gap-2 focus-within:ring-2 focus-within:ring-blue-100 transition-all border border-transparent focus-within:border-blue-200",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$textarea$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Textarea"], {
                    ref: textareaRef,
                    value: content,
                    onChange: (e)=>setContent(e.target.value),
                    onKeyDown: handleKeyDown,
                    placeholder: "Escribe un mensaje...",
                    disabled: isSending,
                    className: "bg-transparent border-none focus-visible:ring-0 resize-none min-h-[40px] max-h-[120px] py-3 font-medium placeholder:text-gray-400"
                }, void 0, false, {
                    fileName: "[project]/apps/web/components/messages/message-input.tsx",
                    lineNumber: 51,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                    onClick: handleSend,
                    disabled: !content.trim() || isSending,
                    className: "h-12 w-12 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg shadow-blue-500/20 shrink-0 disabled:opacity-50",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__["Send"], {
                        className: "h-5 w-5"
                    }, void 0, false, {
                        fileName: "[project]/apps/web/components/messages/message-input.tsx",
                        lineNumber: 65,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/apps/web/components/messages/message-input.tsx",
                    lineNumber: 60,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/apps/web/components/messages/message-input.tsx",
            lineNumber: 50,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/web/components/messages/message-input.tsx",
        lineNumber: 49,
        columnNumber: 9
    }, this);
}
}),
"[project]/apps/web/components/ui/dialog.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Dialog",
    ()=>Dialog,
    "DialogClose",
    ()=>DialogClose,
    "DialogContent",
    ()=>DialogContent,
    "DialogDescription",
    ()=>DialogDescription,
    "DialogFooter",
    ()=>DialogFooter,
    "DialogHeader",
    ()=>DialogHeader,
    "DialogOverlay",
    ()=>DialogOverlay,
    "DialogPortal",
    ()=>DialogPortal,
    "DialogTitle",
    ()=>DialogTitle,
    "DialogTrigger",
    ()=>DialogTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-dialog/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__XIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as XIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function Dialog({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "dialog",
        ...props
    }, void 0, false, {
        fileName: "[project]/apps/web/components/ui/dialog.tsx",
        lineNumber: 12,
        columnNumber: 10
    }, this);
}
function DialogTrigger({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Trigger"], {
        "data-slot": "dialog-trigger",
        ...props
    }, void 0, false, {
        fileName: "[project]/apps/web/components/ui/dialog.tsx",
        lineNumber: 18,
        columnNumber: 10
    }, this);
}
function DialogPortal({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Portal"], {
        "data-slot": "dialog-portal",
        ...props
    }, void 0, false, {
        fileName: "[project]/apps/web/components/ui/dialog.tsx",
        lineNumber: 24,
        columnNumber: 10
    }, this);
}
function DialogClose({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Close"], {
        "data-slot": "dialog-close",
        ...props
    }, void 0, false, {
        fileName: "[project]/apps/web/components/ui/dialog.tsx",
        lineNumber: 30,
        columnNumber: 10
    }, this);
}
function DialogOverlay({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Overlay"], {
        "data-slot": "dialog-overlay",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/apps/web/components/ui/dialog.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
function DialogContent({ className, children, showCloseButton = true, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DialogPortal, {
        "data-slot": "dialog-portal",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DialogOverlay, {}, void 0, false, {
                fileName: "[project]/apps/web/components/ui/dialog.tsx",
                lineNumber: 59,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Content"], {
                "data-slot": "dialog-content",
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 outline-none sm:max-w-lg", className),
                ...props,
                children: [
                    children,
                    showCloseButton && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Close"], {
                        "data-slot": "dialog-close",
                        className: "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__XIcon$3e$__["XIcon"], {}, void 0, false, {
                                fileName: "[project]/apps/web/components/ui/dialog.tsx",
                                lineNumber: 74,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "sr-only",
                                children: "Close"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/components/ui/dialog.tsx",
                                lineNumber: 75,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/components/ui/dialog.tsx",
                        lineNumber: 70,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/components/ui/dialog.tsx",
                lineNumber: 60,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/components/ui/dialog.tsx",
        lineNumber: 58,
        columnNumber: 5
    }, this);
}
function DialogHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "dialog-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex flex-col gap-2 text-center sm:text-left", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/apps/web/components/ui/dialog.tsx",
        lineNumber: 85,
        columnNumber: 5
    }, this);
}
function DialogFooter({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "dialog-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/apps/web/components/ui/dialog.tsx",
        lineNumber: 95,
        columnNumber: 5
    }, this);
}
function DialogTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Title"], {
        "data-slot": "dialog-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-lg leading-none font-semibold", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/apps/web/components/ui/dialog.tsx",
        lineNumber: 111,
        columnNumber: 5
    }, this);
}
function DialogDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Description"], {
        "data-slot": "dialog-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-muted-foreground text-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/apps/web/components/ui/dialog.tsx",
        lineNumber: 124,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/apps/web/components/ui/tabs.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Tabs",
    ()=>Tabs,
    "TabsContent",
    ()=>TabsContent,
    "TabsList",
    ()=>TabsList,
    "TabsTrigger",
    ()=>TabsTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-tabs/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
function Tabs({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "tabs",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex flex-col gap-2", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/apps/web/components/ui/tabs.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
function TabsList({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["List"], {
        "data-slot": "tabs-list",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("bg-muted text-muted-foreground inline-flex h-9 w-fit items-center justify-center rounded-lg p-[3px]", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/apps/web/components/ui/tabs.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
function TabsTrigger({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Trigger"], {
        "data-slot": "tabs-trigger",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("data-[state=active]:bg-background dark:data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 text-foreground dark:text-muted-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/apps/web/components/ui/tabs.tsx",
        lineNumber: 42,
        columnNumber: 5
    }, this);
}
function TabsContent({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Content"], {
        "data-slot": "tabs-content",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex-1 outline-none", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/apps/web/components/ui/tabs.tsx",
        lineNumber: 58,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/apps/web/app/actions/data:eb534d [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getTenantUsers",
    ()=>$$RSC_SERVER_ACTION_5
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"008fa5ea867711d50634039bbf9a29670ad8c7b3f0":"getTenantUsers"},"apps/web/app/actions/messages.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("008fa5ea867711d50634039bbf9a29670ad8c7b3f0", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "getTenantUsers");
;
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vbWVzc2FnZXMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc2VydmVyXCJcblxuaW1wb3J0IHsgY3JlYXRlQ2xpZW50LCBnZXRUZW5hbnRJZCB9IGZyb20gXCJAL2xpYi9zdXBhYmFzZS9zZXJ2ZXJcIlxuaW1wb3J0IHsgcmV2YWxpZGF0ZVBhdGggfSBmcm9tIFwibmV4dC9jYWNoZVwiXG5pbXBvcnQgdHlwZSB7IENvbnZlcnNhdGlvbiwgTWVzc2FnZSwgQ29udmVyc2F0aW9uV2l0aERldGFpbHMsIE1lc3NhZ2VXaXRoU2VuZGVyIH0gZnJvbSBcIkBpbm1vY21zL3NoYXJlZFwiXG5cbi8qKlxuICogT2J0ZW5lciB0b2RhcyBsYXMgY29udmVyc2FjaW9uZXMgZGVsIHVzdWFyaW8gYWN0dWFsXG4gKiBjb24gZGV0YWxsZXMgZGUgcGFydGljaXBhbnRlcyB5IMO6bHRpbW8gbWVuc2FqZVxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q29udmVyc2F0aW9ucygpOiBQcm9taXNlPENvbnZlcnNhdGlvbldpdGhEZXRhaWxzW10+IHtcbiAgICBjb25zdCBzdXBhYmFzZSA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpXG4gICAgY29uc3QgdGVuYW50SWQgPSBhd2FpdCBnZXRUZW5hbnRJZChzdXBhYmFzZSlcblxuICAgIGNvbnN0IHsgZGF0YTogeyB1c2VyIH0gfSA9IGF3YWl0IHN1cGFiYXNlLmF1dGguZ2V0VXNlcigpXG5cbiAgICBpZiAoIXRlbmFudElkIHx8ICF1c2VyKSByZXR1cm4gW11cblxuICAgIC8vIE9idGVuZXIgY29udmVyc2FjaW9uZXMgZW4gbGFzIHF1ZSBwYXJ0aWNpcGEgZWwgdXN1YXJpb1xuICAgIGNvbnN0IHsgZGF0YTogcGFydGljaXBhdGlvbnMsIGVycm9yOiBwYXJ0aWNpcGF0aW9uRXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXG4gICAgICAgIC5mcm9tKFwiY29udmVyc2F0aW9uX3BhcnRpY2lwYW50c1wiKVxuICAgICAgICAuc2VsZWN0KGBcbiAgICAgICAgICAgIGNvbnZlcnNhdGlvbl9pZCxcbiAgICAgICAgICAgIGxhc3RfcmVhZF9hdCxcbiAgICAgICAgICAgIGNvbnZlcnNhdGlvbnMgKFxuICAgICAgICAgICAgICAgIGlkLFxuICAgICAgICAgICAgICAgIHRlbmFudF9pZCxcbiAgICAgICAgICAgICAgICBjcmVhdGVkX2F0LFxuICAgICAgICAgICAgICAgIHVwZGF0ZWRfYXQsXG4gICAgICAgICAgICAgICAgbGVhZF9pZFxuICAgICAgICAgICAgKVxuICAgICAgICBgKVxuICAgICAgICAuZXEoXCJ1c2VyX2lkXCIsIHVzZXIuaWQpXG5cbiAgICBpZiAocGFydGljaXBhdGlvbkVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyBjb252ZXJzYXRpb25zOlwiLCBwYXJ0aWNpcGF0aW9uRXJyb3IpXG4gICAgICAgIHJldHVybiBbXVxuICAgIH1cblxuICAgIGNvbnN0IGNvbnZlcnNhdGlvbnM6IENvbnZlcnNhdGlvbldpdGhEZXRhaWxzW10gPSBbXVxuXG4gICAgZm9yIChjb25zdCBwYXJ0aWNpcGF0aW9uIG9mIHBhcnRpY2lwYXRpb25zIHx8IFtdKSB7XG4gICAgICAgIGNvbnN0IGNvbnYgPSBwYXJ0aWNpcGF0aW9uLmNvbnZlcnNhdGlvbnMgYXMgdW5rbm93biBhcyBDb252ZXJzYXRpb25cbiAgICAgICAgaWYgKCFjb252KSBjb250aW51ZVxuXG4gICAgICAgIC8vIE9idGVuZXIgb3Ryb3MgcGFydGljaXBhbnRlc1xuICAgICAgICBjb25zdCB7IGRhdGE6IHBhcnRpY2lwYW50cywgZXJyb3I6IHBhcnRpY2lwYW50c0Vycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxuICAgICAgICAgICAgLmZyb20oXCJjb252ZXJzYXRpb25fcGFydGljaXBhbnRzXCIpXG4gICAgICAgICAgICAuc2VsZWN0KGBcbiAgICAgICAgICAgICAgICB1c2VyX2lkLFxuICAgICAgICAgICAgICAgIGpvaW5lZF9hdCxcbiAgICAgICAgICAgICAgICBwcm9maWxlcyAoXG4gICAgICAgICAgICAgICAgICAgIGlkLFxuICAgICAgICAgICAgICAgICAgICBlbWFpbCxcbiAgICAgICAgICAgICAgICAgICAgZnVsbF9uYW1lLFxuICAgICAgICAgICAgICAgICAgICBhdmF0YXJfdXJsXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgYClcbiAgICAgICAgICAgIC5lcShcImNvbnZlcnNhdGlvbl9pZFwiLCBjb252LmlkKVxuICAgICAgICAgICAgLm5lcShcInVzZXJfaWRcIiwgdXNlci5pZClcblxuICAgICAgICAvLyBPYnRlbmVyIMO6bHRpbW8gbWVuc2FqZVxuICAgICAgICBjb25zdCB7IGRhdGE6IGxhc3RNZXNzYWdlIH0gPSBhd2FpdCBzdXBhYmFzZVxuICAgICAgICAgICAgLmZyb20oXCJtZXNzYWdlc1wiKVxuICAgICAgICAgICAgLnNlbGVjdChgXG4gICAgICAgICAgICAgICAgaWQsXG4gICAgICAgICAgICAgICAgY29udmVyc2F0aW9uX2lkLFxuICAgICAgICAgICAgICAgIHNlbmRlcl9pZCxcbiAgICAgICAgICAgICAgICBjb250ZW50LFxuICAgICAgICAgICAgICAgIGNyZWF0ZWRfYXQsXG4gICAgICAgICAgICAgICAgcHJvZmlsZXM6c2VuZGVyX2lkIChcbiAgICAgICAgICAgICAgICAgICAgaWQsXG4gICAgICAgICAgICAgICAgICAgIGVtYWlsLFxuICAgICAgICAgICAgICAgICAgICBmdWxsX25hbWUsXG4gICAgICAgICAgICAgICAgICAgIGF2YXRhcl91cmxcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICBgKVxuICAgICAgICAgICAgLmVxKFwiY29udmVyc2F0aW9uX2lkXCIsIGNvbnYuaWQpXG4gICAgICAgICAgICAub3JkZXIoXCJjcmVhdGVkX2F0XCIsIHsgYXNjZW5kaW5nOiBmYWxzZSB9KVxuICAgICAgICAgICAgLmxpbWl0KDEpXG4gICAgICAgICAgICAuc2luZ2xlKClcblxuICAgICAgICAvLyBDYWxjdWxhciBtZW5zYWplcyBubyBsZcOtZG9zXG4gICAgICAgIGNvbnN0IHsgY291bnQ6IHVucmVhZENvdW50IH0gPSBhd2FpdCBzdXBhYmFzZVxuICAgICAgICAgICAgLmZyb20oXCJtZXNzYWdlc1wiKVxuICAgICAgICAgICAgLnNlbGVjdChcIipcIiwgeyBjb3VudDogJ2V4YWN0JywgaGVhZDogdHJ1ZSB9KVxuICAgICAgICAgICAgLmVxKFwiY29udmVyc2F0aW9uX2lkXCIsIGNvbnYuaWQpXG4gICAgICAgICAgICAubmVxKFwic2VuZGVyX2lkXCIsIHVzZXIuaWQpXG4gICAgICAgICAgICAuZ3QoXCJjcmVhdGVkX2F0XCIsIHBhcnRpY2lwYXRpb24ubGFzdF9yZWFkX2F0KVxuXG4gICAgICAgIGNvbnN0IG90aGVyVXNlciA9IHBhcnRpY2lwYW50cz8uWzBdPy5wcm9maWxlcyBhcyBhbnlcblxuICAgICAgICAvLyBGZXRjaCBsZWFkIGRldGFpbHMgaWYgaXQncyBhIGNsaWVudCBjb252ZXJzYXRpb25cbiAgICAgICAgbGV0IGxlYWREYXRhID0gbnVsbFxuICAgICAgICBpZiAoY29udi5sZWFkX2lkKSB7XG4gICAgICAgICAgICBjb25zdCB7IGRhdGE6IGxlYWQgfSA9IGF3YWl0IHN1cGFiYXNlXG4gICAgICAgICAgICAgICAgLmZyb20oXCJsZWFkc1wiKVxuICAgICAgICAgICAgICAgIC5zZWxlY3QoXCJpZCwgbmFtZSwgZW1haWwsIHBob25lLCBzdGF0dXNcIilcbiAgICAgICAgICAgICAgICAuZXEoXCJpZFwiLCBjb252LmxlYWRfaWQpXG4gICAgICAgICAgICAgICAgLnNpbmdsZSgpXG4gICAgICAgICAgICBsZWFkRGF0YSA9IGxlYWRcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnZlcnNhdGlvbnMucHVzaCh7XG4gICAgICAgICAgICAuLi5jb252LFxuICAgICAgICAgICAgbGFzdF9tZXNzYWdlOiBsYXN0TWVzc2FnZSA/IHtcbiAgICAgICAgICAgICAgICAuLi5sYXN0TWVzc2FnZSxcbiAgICAgICAgICAgICAgICBzZW5kZXI6IGxhc3RNZXNzYWdlLnByb2ZpbGVzIGFzIGFueVxuICAgICAgICAgICAgfSA6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIHVucmVhZF9jb3VudDogdW5yZWFkQ291bnQgfHwgMCxcbiAgICAgICAgICAgIG90aGVyX3VzZXI6IG90aGVyVXNlcixcbiAgICAgICAgICAgIGxlYWQ6IGxlYWREYXRhIGFzIGFueVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIC8vIE9yZGVuYXIgcG9yIMO6bHRpbWEgYWN0aXZpZGFkXG4gICAgY29udmVyc2F0aW9ucy5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgIGNvbnN0IGFUaW1lID0gYS5sYXN0X21lc3NhZ2U/LmNyZWF0ZWRfYXQgfHwgYS51cGRhdGVkX2F0XG4gICAgICAgIGNvbnN0IGJUaW1lID0gYi5sYXN0X21lc3NhZ2U/LmNyZWF0ZWRfYXQgfHwgYi51cGRhdGVkX2F0XG4gICAgICAgIHJldHVybiBuZXcgRGF0ZShiVGltZSkuZ2V0VGltZSgpIC0gbmV3IERhdGUoYVRpbWUpLmdldFRpbWUoKVxuICAgIH0pXG5cbiAgICByZXR1cm4gY29udmVyc2F0aW9uc1xufVxuXG4vKipcbiAqIE9idGVuZXIgbWVuc2FqZXMgZGUgdW5hIGNvbnZlcnNhY2nDs24gZXNwZWPDrWZpY2FcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldE1lc3NhZ2VzKGNvbnZlcnNhdGlvbklkOiBzdHJpbmcpOiBQcm9taXNlPE1lc3NhZ2VXaXRoU2VuZGVyW10+IHtcbiAgICBjb25zdCBzdXBhYmFzZSA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpXG4gICAgY29uc3QgeyBkYXRhOiB7IHVzZXIgfSB9ID0gYXdhaXQgc3VwYWJhc2UuYXV0aC5nZXRVc2VyKClcblxuICAgIGlmICghdXNlcikgcmV0dXJuIFtdXG5cbiAgICAvLyBWZXJpZmljYXIgcXVlIGVsIHVzdWFyaW8gZXMgcGFydGljaXBhbnRlIGRlIGxhIGNvbnZlcnNhY2nDs25cbiAgICBjb25zdCB7IGRhdGE6IHBhcnRpY2lwYXRpb24gfSA9IGF3YWl0IHN1cGFiYXNlXG4gICAgICAgIC5mcm9tKFwiY29udmVyc2F0aW9uX3BhcnRpY2lwYW50c1wiKVxuICAgICAgICAuc2VsZWN0KFwiY29udmVyc2F0aW9uX2lkXCIpXG4gICAgICAgIC5lcShcImNvbnZlcnNhdGlvbl9pZFwiLCBjb252ZXJzYXRpb25JZClcbiAgICAgICAgLmVxKFwidXNlcl9pZFwiLCB1c2VyLmlkKVxuICAgICAgICAuc2luZ2xlKClcblxuICAgIGlmICghcGFydGljaXBhdGlvbikge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiVXNlciBpcyBub3QgYSBwYXJ0aWNpcGFudCBvZiB0aGlzIGNvbnZlcnNhdGlvblwiKVxuICAgICAgICByZXR1cm4gW11cbiAgICB9XG5cbiAgICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxuICAgICAgICAuZnJvbShcIm1lc3NhZ2VzXCIpXG4gICAgICAgIC5zZWxlY3QoYFxuICAgICAgICAgICAgaWQsXG4gICAgICAgICAgICBjb252ZXJzYXRpb25faWQsXG4gICAgICAgICAgICBzZW5kZXJfaWQsXG4gICAgICAgICAgICBjb250ZW50LFxuICAgICAgICAgICAgY3JlYXRlZF9hdCxcbiAgICAgICAgICAgIHByb2ZpbGVzOnNlbmRlcl9pZCAoXG4gICAgICAgICAgICAgICAgaWQsXG4gICAgICAgICAgICAgICAgZW1haWwsXG4gICAgICAgICAgICAgICAgZnVsbF9uYW1lLFxuICAgICAgICAgICAgICAgIGF2YXRhcl91cmxcbiAgICAgICAgICAgIClcbiAgICAgICAgYClcbiAgICAgICAgLmVxKFwiY29udmVyc2F0aW9uX2lkXCIsIGNvbnZlcnNhdGlvbklkKVxuICAgICAgICAub3JkZXIoXCJjcmVhdGVkX2F0XCIsIHsgYXNjZW5kaW5nOiB0cnVlIH0pXG5cbiAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIG1lc3NhZ2VzOlwiLCBlcnJvcilcbiAgICAgICAgcmV0dXJuIFtdXG4gICAgfVxuXG4gICAgcmV0dXJuIGRhdGEubWFwKG1zZyA9PiAoe1xuICAgICAgICAuLi5tc2csXG4gICAgICAgIHNlbmRlcjogbXNnLnByb2ZpbGVzIGFzIGFueVxuICAgIH0pKVxufVxuXG4vKipcbiAqIEVudmlhciB1biBtZW5zYWplIGEgdW5hIGNvbnZlcnNhY2nDs25cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNlbmRNZXNzYWdlKGNvbnZlcnNhdGlvbklkOiBzdHJpbmcsIGNvbnRlbnQ6IHN0cmluZywgcmV2YWxpZGF0ZSA9IHRydWUpOiBQcm9taXNlPE1lc3NhZ2UgfCBudWxsPiB7XG4gICAgY29uc3Qgc3VwYWJhc2UgPSBhd2FpdCBjcmVhdGVDbGllbnQoKVxuICAgIGNvbnN0IHsgZGF0YTogeyB1c2VyIH0gfSA9IGF3YWl0IHN1cGFiYXNlLmF1dGguZ2V0VXNlcigpXG5cbiAgICBpZiAoIXVzZXIgfHwgIWNvbnRlbnQudHJpbSgpKSByZXR1cm4gbnVsbFxuXG4gICAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcbiAgICAgICAgLmZyb20oXCJtZXNzYWdlc1wiKVxuICAgICAgICAuaW5zZXJ0KHtcbiAgICAgICAgICAgIGNvbnZlcnNhdGlvbl9pZDogY29udmVyc2F0aW9uSWQsXG4gICAgICAgICAgICBzZW5kZXJfaWQ6IHVzZXIuaWQsXG4gICAgICAgICAgICBjb250ZW50OiBjb250ZW50LnRyaW0oKVxuICAgICAgICB9KVxuICAgICAgICAuc2VsZWN0KClcbiAgICAgICAgLnNpbmdsZSgpXG5cbiAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkRFQlVHOiBFcnJvciBzZW5kaW5nIG1lc3NhZ2U6XCIsIHtcbiAgICAgICAgICAgIGVycm9yLFxuICAgICAgICAgICAgY29udmVyc2F0aW9uSWQsXG4gICAgICAgICAgICB1c2VySWQ6IHVzZXIuaWRcbiAgICAgICAgfSlcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycm9yLm1lc3NhZ2UpXG4gICAgfVxuXG4gICAgaWYgKHJldmFsaWRhdGUpIHtcbiAgICAgICAgcmV2YWxpZGF0ZVBhdGgoXCIvbWVuc2FqZXNcIilcbiAgICB9XG4gICAgcmV0dXJuIGRhdGFcbn1cblxuLyoqXG4gKiBNYXJjYXIgY29udmVyc2FjacOzbiBjb21vIGxlw61kYVxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbWFya0FzUmVhZChjb252ZXJzYXRpb25JZDogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgY29uc3Qgc3VwYWJhc2UgPSBhd2FpdCBjcmVhdGVDbGllbnQoKVxuICAgIGNvbnN0IHsgZGF0YTogeyB1c2VyIH0gfSA9IGF3YWl0IHN1cGFiYXNlLmF1dGguZ2V0VXNlcigpXG5cbiAgICBpZiAoIXVzZXIpIHJldHVyblxuXG4gICAgY29uc3QgeyBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcbiAgICAgICAgLmZyb20oXCJjb252ZXJzYXRpb25fcGFydGljaXBhbnRzXCIpXG4gICAgICAgIC51cGRhdGUoeyBsYXN0X3JlYWRfYXQ6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSB9KVxuICAgICAgICAuZXEoXCJjb252ZXJzYXRpb25faWRcIiwgY29udmVyc2F0aW9uSWQpXG4gICAgICAgIC5lcShcInVzZXJfaWRcIiwgdXNlci5pZClcblxuICAgIGlmIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgbWFya2luZyBhcyByZWFkOlwiLCBlcnJvcilcbiAgICB9XG5cbiAgICByZXZhbGlkYXRlUGF0aChcIi9tZW5zYWplc1wiKVxufVxuXG4vKipcbiAqIE9idGVuZXIgbyBjcmVhciB1bmEgY29udmVyc2FjacOzbiBjb24gb3RybyB1c3VhcmlvXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRPckNyZWF0ZUNvbnZlcnNhdGlvbihvdGhlclVzZXJJZDogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmcgfCBudWxsPiB7XG4gICAgY29uc3Qgc3VwYWJhc2UgPSBhd2FpdCBjcmVhdGVDbGllbnQoKVxuICAgIGNvbnN0IHRlbmFudElkID0gYXdhaXQgZ2V0VGVuYW50SWQoc3VwYWJhc2UpXG4gICAgY29uc3QgeyBkYXRhOiB7IHVzZXIgfSB9ID0gYXdhaXQgc3VwYWJhc2UuYXV0aC5nZXRVc2VyKClcblxuICAgIGlmICghdGVuYW50SWQgfHwgIXVzZXIpIHJldHVybiBudWxsXG5cbiAgICAvLyBCdXNjYXIgY29udmVyc2FjacOzbiBleGlzdGVudGUgZW50cmUgZXN0b3MgZG9zIHVzdWFyaW9zXG4gICAgY29uc3QgeyBkYXRhOiBleGlzdGluZ1BhcnRpY2lwYXRpb25zIH0gPSBhd2FpdCBzdXBhYmFzZVxuICAgICAgICAuZnJvbShcImNvbnZlcnNhdGlvbl9wYXJ0aWNpcGFudHNcIilcbiAgICAgICAgLnNlbGVjdChcImNvbnZlcnNhdGlvbl9pZFwiKVxuICAgICAgICAuZXEoXCJ1c2VyX2lkXCIsIHVzZXIuaWQpXG5cbiAgICBpZiAoZXhpc3RpbmdQYXJ0aWNpcGF0aW9ucykge1xuICAgICAgICBmb3IgKGNvbnN0IHBhcnRpY2lwYXRpb24gb2YgZXhpc3RpbmdQYXJ0aWNpcGF0aW9ucykge1xuICAgICAgICAgICAgY29uc3QgeyBkYXRhOiBvdGhlclBhcnRpY2lwYXRpb24gfSA9IGF3YWl0IHN1cGFiYXNlXG4gICAgICAgICAgICAgICAgLmZyb20oXCJjb252ZXJzYXRpb25fcGFydGljaXBhbnRzXCIpXG4gICAgICAgICAgICAgICAgLnNlbGVjdChcInVzZXJfaWRcIilcbiAgICAgICAgICAgICAgICAuZXEoXCJjb252ZXJzYXRpb25faWRcIiwgcGFydGljaXBhdGlvbi5jb252ZXJzYXRpb25faWQpXG4gICAgICAgICAgICAgICAgLmVxKFwidXNlcl9pZFwiLCBvdGhlclVzZXJJZClcbiAgICAgICAgICAgICAgICAuc2luZ2xlKClcblxuICAgICAgICAgICAgaWYgKG90aGVyUGFydGljaXBhdGlvbikge1xuICAgICAgICAgICAgICAgIHJldHVybiBwYXJ0aWNpcGF0aW9uLmNvbnZlcnNhdGlvbl9pZFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gQ3JlYXIgbnVldmEgY29udmVyc2FjacOzblxuICAgIGNvbnN0IHsgZGF0YTogbmV3Q29udmVyc2F0aW9uLCBlcnJvcjogY29udkVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxuICAgICAgICAuZnJvbShcImNvbnZlcnNhdGlvbnNcIilcbiAgICAgICAgLmluc2VydCh7IHRlbmFudF9pZDogdGVuYW50SWQgfSlcbiAgICAgICAgLnNlbGVjdCgpXG4gICAgICAgIC5zaW5nbGUoKVxuXG4gICAgaWYgKGNvbnZFcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgY3JlYXRpbmcgY29udmVyc2F0aW9uOlwiLCBjb252RXJyb3IpXG4gICAgICAgIHJldHVybiBudWxsXG4gICAgfVxuXG4gICAgLy8gQWdyZWdhciBwYXJ0aWNpcGFudGVzXG4gICAgY29uc3QgeyBlcnJvcjogcGFydGljaXBhbnRzRXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXG4gICAgICAgIC5mcm9tKFwiY29udmVyc2F0aW9uX3BhcnRpY2lwYW50c1wiKVxuICAgICAgICAuaW5zZXJ0KFtcbiAgICAgICAgICAgIHsgY29udmVyc2F0aW9uX2lkOiBuZXdDb252ZXJzYXRpb24uaWQsIHVzZXJfaWQ6IHVzZXIuaWQgfSxcbiAgICAgICAgICAgIHsgY29udmVyc2F0aW9uX2lkOiBuZXdDb252ZXJzYXRpb24uaWQsIHVzZXJfaWQ6IG90aGVyVXNlcklkIH1cbiAgICAgICAgXSlcblxuICAgIGlmIChwYXJ0aWNpcGFudHNFcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgYWRkaW5nIHBhcnRpY2lwYW50czpcIiwgcGFydGljaXBhbnRzRXJyb3IpXG4gICAgICAgIHJldHVybiBudWxsXG4gICAgfVxuXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvbWVuc2FqZXNcIilcbiAgICByZXR1cm4gbmV3Q29udmVyc2F0aW9uLmlkXG59XG5cbi8qKlxuICogT2J0ZW5lciBsaXN0YSBkZSB1c3VhcmlvcyBkZWwgdGVuYW50IChwYXJhIGluaWNpYXIgY29udmVyc2FjaW9uZXMpXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRUZW5hbnRVc2VycygpIHtcbiAgICBjb25zdCBzdXBhYmFzZSA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpXG4gICAgY29uc3QgdGVuYW50SWQgPSBhd2FpdCBnZXRUZW5hbnRJZChzdXBhYmFzZSlcbiAgICBjb25zdCB7IGRhdGE6IHsgdXNlciB9IH0gPSBhd2FpdCBzdXBhYmFzZS5hdXRoLmdldFVzZXIoKVxuXG4gICAgaWYgKCF0ZW5hbnRJZCB8fCAhdXNlcikgcmV0dXJuIFtdXG5cbiAgICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxuICAgICAgICAuZnJvbShcInByb2ZpbGVzXCIpXG4gICAgICAgIC5zZWxlY3QoXCJpZCwgZW1haWwsIGZ1bGxfbmFtZSwgYXZhdGFyX3VybFwiKVxuICAgICAgICAuZXEoXCJ0ZW5hbnRfaWRcIiwgdGVuYW50SWQpXG4gICAgICAgIC5uZXEoXCJpZFwiLCB1c2VyLmlkKSAvLyBFeGNsdWlyIGFsIHVzdWFyaW8gYWN0dWFsXG5cbiAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIHRlbmFudCB1c2VyczpcIiwgZXJyb3IpXG4gICAgICAgIHJldHVybiBbXVxuICAgIH1cblxuICAgIHJldHVybiBkYXRhXG59XG5cbi8qKlxuICogT2J0ZW5lciBsaXN0YSBkZSBMZWFkcyBkZWwgdGVuYW50IChwYXJhIGluaWNpYXIgY29udmVyc2FjaW9uZXMgY29uIGNsaWVudGVzKVxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0TGVhZHNGb3JNZXNzYWdpbmcoKSB7XG4gICAgY29uc3Qgc3VwYWJhc2UgPSBhd2FpdCBjcmVhdGVDbGllbnQoKVxuICAgIGNvbnN0IHRlbmFudElkID0gYXdhaXQgZ2V0VGVuYW50SWQoc3VwYWJhc2UpXG5cbiAgICBpZiAoIXRlbmFudElkKSByZXR1cm4gW11cblxuICAgIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXG4gICAgICAgIC5mcm9tKFwibGVhZHNcIilcbiAgICAgICAgLnNlbGVjdChcImlkLCBuYW1lLCBlbWFpbCwgcGhvbmUsIHN0YXR1c1wiKVxuICAgICAgICAuZXEoXCJ0ZW5hbnRfaWRcIiwgdGVuYW50SWQpXG4gICAgICAgIC5vcmRlcihcIm5hbWVcIilcblxuICAgIGlmIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgbGVhZHMgZm9yIG1lc3NhZ2luZzpcIiwgZXJyb3IpXG4gICAgICAgIHJldHVybiBbXVxuICAgIH1cblxuICAgIHJldHVybiBkYXRhXG59XG5cbi8qKlxuICogT2J0ZW5lciBvIGNyZWFyIHVuYSBjb252ZXJzYWNpw7NuIGNvbiB1biBMZWFkXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRPckNyZWF0ZUxlYWRDb252ZXJzYXRpb24obGVhZElkOiBzdHJpbmcsIHJldmFsaWRhdGUgPSB0cnVlKTogUHJvbWlzZTxzdHJpbmcgfCBudWxsPiB7XG4gICAgY29uc3Qgc3VwYWJhc2UgPSBhd2FpdCBjcmVhdGVDbGllbnQoKVxuICAgIGNvbnN0IHRlbmFudElkID0gYXdhaXQgZ2V0VGVuYW50SWQoc3VwYWJhc2UpXG4gICAgY29uc3QgeyBkYXRhOiB7IHVzZXIgfSB9ID0gYXdhaXQgc3VwYWJhc2UuYXV0aC5nZXRVc2VyKClcblxuICAgIGlmICghdGVuYW50SWQgfHwgIXVzZXIpIHJldHVybiBudWxsXG5cbiAgICAvLyBCdXNjYXIgY29udmVyc2FjacOzbiBleGlzdGVudGUgcGFyYSBlc3RlIExlYWRcbiAgICBjb25zdCB7IGRhdGE6IGV4aXN0aW5nQ29udmVyc2F0aW9uIH0gPSBhd2FpdCBzdXBhYmFzZVxuICAgICAgICAuZnJvbShcImNvbnZlcnNhdGlvbnNcIilcbiAgICAgICAgLnNlbGVjdChcImlkXCIpXG4gICAgICAgIC5lcShcImxlYWRfaWRcIiwgbGVhZElkKVxuICAgICAgICAuc2luZ2xlKClcblxuICAgIGlmIChleGlzdGluZ0NvbnZlcnNhdGlvbikge1xuICAgICAgICAvLyBBc2VndXJhcnNlIGRlIHF1ZSBlbCB1c3VhcmlvIGFjdHVhbCBlcyBwYXJ0aWNpcGFudGVcbiAgICAgICAgY29uc3QgeyBkYXRhOiBpc1BhcnRpY2lwYW50IH0gPSBhd2FpdCBzdXBhYmFzZVxuICAgICAgICAgICAgLmZyb20oXCJjb252ZXJzYXRpb25fcGFydGljaXBhbnRzXCIpXG4gICAgICAgICAgICAuc2VsZWN0KFwiY29udmVyc2F0aW9uX2lkXCIpXG4gICAgICAgICAgICAuZXEoXCJjb252ZXJzYXRpb25faWRcIiwgZXhpc3RpbmdDb252ZXJzYXRpb24uaWQpXG4gICAgICAgICAgICAuZXEoXCJ1c2VyX2lkXCIsIHVzZXIuaWQpXG4gICAgICAgICAgICAuc2luZ2xlKClcblxuICAgICAgICBpZiAoIWlzUGFydGljaXBhbnQpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBERUJVRzogQWRkaW5nIGFnZW50ICR7dXNlci5pZH0gdG8gbGVhZCBjb252ZXJzYXRpb24gJHtleGlzdGluZ0NvbnZlcnNhdGlvbi5pZH1gKVxuICAgICAgICAgICAgYXdhaXQgc3VwYWJhc2VcbiAgICAgICAgICAgICAgICAuZnJvbShcImNvbnZlcnNhdGlvbl9wYXJ0aWNpcGFudHNcIilcbiAgICAgICAgICAgICAgICAuaW5zZXJ0KHtcbiAgICAgICAgICAgICAgICAgICAgY29udmVyc2F0aW9uX2lkOiBleGlzdGluZ0NvbnZlcnNhdGlvbi5pZCxcbiAgICAgICAgICAgICAgICAgICAgdXNlcl9pZDogdXNlci5pZFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZXhpc3RpbmdDb252ZXJzYXRpb24uaWRcbiAgICB9XG5cbiAgICAvLyBDcmVhciBudWV2YSBjb252ZXJzYWNpw7NuIHZpbmN1bGFkYSBhbCBMZWFkXG4gICAgY29uc3QgeyBkYXRhOiBuZXdDb252ZXJzYXRpb24sIGVycm9yOiBjb252RXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXG4gICAgICAgIC5mcm9tKFwiY29udmVyc2F0aW9uc1wiKVxuICAgICAgICAuaW5zZXJ0KHtcbiAgICAgICAgICAgIHRlbmFudF9pZDogdGVuYW50SWQsXG4gICAgICAgICAgICBsZWFkX2lkOiBsZWFkSWRcbiAgICAgICAgfSlcbiAgICAgICAgLnNlbGVjdCgpXG4gICAgICAgIC5zaW5nbGUoKVxuXG4gICAgaWYgKGNvbnZFcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgY3JlYXRpbmcgbGVhZCBjb252ZXJzYXRpb246XCIsIGNvbnZFcnJvcilcbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG5cbiAgICAvLyBBZ3JlZ2FyIGFsIHVzdWFyaW8gYWN0dWFsIGNvbW8gcGFydGljaXBhbnRlXG4gICAgY29uc3QgeyBlcnJvcjogcGFydGljaXBhbnRFcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcbiAgICAgICAgLmZyb20oXCJjb252ZXJzYXRpb25fcGFydGljaXBhbnRzXCIpXG4gICAgICAgIC5pbnNlcnQoeyBjb252ZXJzYXRpb25faWQ6IG5ld0NvbnZlcnNhdGlvbi5pZCwgdXNlcl9pZDogdXNlci5pZCB9KVxuXG4gICAgaWYgKHBhcnRpY2lwYW50RXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGFkZGluZyBwYXJ0aWNpcGFudCB0byBsZWFkIGNvbnZlcnNhdGlvbjpcIiwgcGFydGljaXBhbnRFcnJvcilcbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG5cbiAgICBpZiAocmV2YWxpZGF0ZSkge1xuICAgICAgICByZXZhbGlkYXRlUGF0aChcIi9tZW5zYWplc1wiKVxuICAgIH1cbiAgICByZXR1cm4gbmV3Q29udmVyc2F0aW9uLmlkXG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Im1TQXVTc0IsMkxBQUEifQ==
}),
"[project]/apps/web/app/actions/data:3e80e2 [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getLeadsForMessaging",
    ()=>$$RSC_SERVER_ACTION_6
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"0081f8378d3b06372d0c255c4394ad93f173ab978b":"getLeadsForMessaging"},"apps/web/app/actions/messages.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("0081f8378d3b06372d0c255c4394ad93f173ab978b", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "getLeadsForMessaging");
;
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vbWVzc2FnZXMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc2VydmVyXCJcblxuaW1wb3J0IHsgY3JlYXRlQ2xpZW50LCBnZXRUZW5hbnRJZCB9IGZyb20gXCJAL2xpYi9zdXBhYmFzZS9zZXJ2ZXJcIlxuaW1wb3J0IHsgcmV2YWxpZGF0ZVBhdGggfSBmcm9tIFwibmV4dC9jYWNoZVwiXG5pbXBvcnQgdHlwZSB7IENvbnZlcnNhdGlvbiwgTWVzc2FnZSwgQ29udmVyc2F0aW9uV2l0aERldGFpbHMsIE1lc3NhZ2VXaXRoU2VuZGVyIH0gZnJvbSBcIkBpbm1vY21zL3NoYXJlZFwiXG5cbi8qKlxuICogT2J0ZW5lciB0b2RhcyBsYXMgY29udmVyc2FjaW9uZXMgZGVsIHVzdWFyaW8gYWN0dWFsXG4gKiBjb24gZGV0YWxsZXMgZGUgcGFydGljaXBhbnRlcyB5IMO6bHRpbW8gbWVuc2FqZVxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q29udmVyc2F0aW9ucygpOiBQcm9taXNlPENvbnZlcnNhdGlvbldpdGhEZXRhaWxzW10+IHtcbiAgICBjb25zdCBzdXBhYmFzZSA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpXG4gICAgY29uc3QgdGVuYW50SWQgPSBhd2FpdCBnZXRUZW5hbnRJZChzdXBhYmFzZSlcblxuICAgIGNvbnN0IHsgZGF0YTogeyB1c2VyIH0gfSA9IGF3YWl0IHN1cGFiYXNlLmF1dGguZ2V0VXNlcigpXG5cbiAgICBpZiAoIXRlbmFudElkIHx8ICF1c2VyKSByZXR1cm4gW11cblxuICAgIC8vIE9idGVuZXIgY29udmVyc2FjaW9uZXMgZW4gbGFzIHF1ZSBwYXJ0aWNpcGEgZWwgdXN1YXJpb1xuICAgIGNvbnN0IHsgZGF0YTogcGFydGljaXBhdGlvbnMsIGVycm9yOiBwYXJ0aWNpcGF0aW9uRXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXG4gICAgICAgIC5mcm9tKFwiY29udmVyc2F0aW9uX3BhcnRpY2lwYW50c1wiKVxuICAgICAgICAuc2VsZWN0KGBcbiAgICAgICAgICAgIGNvbnZlcnNhdGlvbl9pZCxcbiAgICAgICAgICAgIGxhc3RfcmVhZF9hdCxcbiAgICAgICAgICAgIGNvbnZlcnNhdGlvbnMgKFxuICAgICAgICAgICAgICAgIGlkLFxuICAgICAgICAgICAgICAgIHRlbmFudF9pZCxcbiAgICAgICAgICAgICAgICBjcmVhdGVkX2F0LFxuICAgICAgICAgICAgICAgIHVwZGF0ZWRfYXQsXG4gICAgICAgICAgICAgICAgbGVhZF9pZFxuICAgICAgICAgICAgKVxuICAgICAgICBgKVxuICAgICAgICAuZXEoXCJ1c2VyX2lkXCIsIHVzZXIuaWQpXG5cbiAgICBpZiAocGFydGljaXBhdGlvbkVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyBjb252ZXJzYXRpb25zOlwiLCBwYXJ0aWNpcGF0aW9uRXJyb3IpXG4gICAgICAgIHJldHVybiBbXVxuICAgIH1cblxuICAgIGNvbnN0IGNvbnZlcnNhdGlvbnM6IENvbnZlcnNhdGlvbldpdGhEZXRhaWxzW10gPSBbXVxuXG4gICAgZm9yIChjb25zdCBwYXJ0aWNpcGF0aW9uIG9mIHBhcnRpY2lwYXRpb25zIHx8IFtdKSB7XG4gICAgICAgIGNvbnN0IGNvbnYgPSBwYXJ0aWNpcGF0aW9uLmNvbnZlcnNhdGlvbnMgYXMgdW5rbm93biBhcyBDb252ZXJzYXRpb25cbiAgICAgICAgaWYgKCFjb252KSBjb250aW51ZVxuXG4gICAgICAgIC8vIE9idGVuZXIgb3Ryb3MgcGFydGljaXBhbnRlc1xuICAgICAgICBjb25zdCB7IGRhdGE6IHBhcnRpY2lwYW50cywgZXJyb3I6IHBhcnRpY2lwYW50c0Vycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxuICAgICAgICAgICAgLmZyb20oXCJjb252ZXJzYXRpb25fcGFydGljaXBhbnRzXCIpXG4gICAgICAgICAgICAuc2VsZWN0KGBcbiAgICAgICAgICAgICAgICB1c2VyX2lkLFxuICAgICAgICAgICAgICAgIGpvaW5lZF9hdCxcbiAgICAgICAgICAgICAgICBwcm9maWxlcyAoXG4gICAgICAgICAgICAgICAgICAgIGlkLFxuICAgICAgICAgICAgICAgICAgICBlbWFpbCxcbiAgICAgICAgICAgICAgICAgICAgZnVsbF9uYW1lLFxuICAgICAgICAgICAgICAgICAgICBhdmF0YXJfdXJsXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgYClcbiAgICAgICAgICAgIC5lcShcImNvbnZlcnNhdGlvbl9pZFwiLCBjb252LmlkKVxuICAgICAgICAgICAgLm5lcShcInVzZXJfaWRcIiwgdXNlci5pZClcblxuICAgICAgICAvLyBPYnRlbmVyIMO6bHRpbW8gbWVuc2FqZVxuICAgICAgICBjb25zdCB7IGRhdGE6IGxhc3RNZXNzYWdlIH0gPSBhd2FpdCBzdXBhYmFzZVxuICAgICAgICAgICAgLmZyb20oXCJtZXNzYWdlc1wiKVxuICAgICAgICAgICAgLnNlbGVjdChgXG4gICAgICAgICAgICAgICAgaWQsXG4gICAgICAgICAgICAgICAgY29udmVyc2F0aW9uX2lkLFxuICAgICAgICAgICAgICAgIHNlbmRlcl9pZCxcbiAgICAgICAgICAgICAgICBjb250ZW50LFxuICAgICAgICAgICAgICAgIGNyZWF0ZWRfYXQsXG4gICAgICAgICAgICAgICAgcHJvZmlsZXM6c2VuZGVyX2lkIChcbiAgICAgICAgICAgICAgICAgICAgaWQsXG4gICAgICAgICAgICAgICAgICAgIGVtYWlsLFxuICAgICAgICAgICAgICAgICAgICBmdWxsX25hbWUsXG4gICAgICAgICAgICAgICAgICAgIGF2YXRhcl91cmxcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICBgKVxuICAgICAgICAgICAgLmVxKFwiY29udmVyc2F0aW9uX2lkXCIsIGNvbnYuaWQpXG4gICAgICAgICAgICAub3JkZXIoXCJjcmVhdGVkX2F0XCIsIHsgYXNjZW5kaW5nOiBmYWxzZSB9KVxuICAgICAgICAgICAgLmxpbWl0KDEpXG4gICAgICAgICAgICAuc2luZ2xlKClcblxuICAgICAgICAvLyBDYWxjdWxhciBtZW5zYWplcyBubyBsZcOtZG9zXG4gICAgICAgIGNvbnN0IHsgY291bnQ6IHVucmVhZENvdW50IH0gPSBhd2FpdCBzdXBhYmFzZVxuICAgICAgICAgICAgLmZyb20oXCJtZXNzYWdlc1wiKVxuICAgICAgICAgICAgLnNlbGVjdChcIipcIiwgeyBjb3VudDogJ2V4YWN0JywgaGVhZDogdHJ1ZSB9KVxuICAgICAgICAgICAgLmVxKFwiY29udmVyc2F0aW9uX2lkXCIsIGNvbnYuaWQpXG4gICAgICAgICAgICAubmVxKFwic2VuZGVyX2lkXCIsIHVzZXIuaWQpXG4gICAgICAgICAgICAuZ3QoXCJjcmVhdGVkX2F0XCIsIHBhcnRpY2lwYXRpb24ubGFzdF9yZWFkX2F0KVxuXG4gICAgICAgIGNvbnN0IG90aGVyVXNlciA9IHBhcnRpY2lwYW50cz8uWzBdPy5wcm9maWxlcyBhcyBhbnlcblxuICAgICAgICAvLyBGZXRjaCBsZWFkIGRldGFpbHMgaWYgaXQncyBhIGNsaWVudCBjb252ZXJzYXRpb25cbiAgICAgICAgbGV0IGxlYWREYXRhID0gbnVsbFxuICAgICAgICBpZiAoY29udi5sZWFkX2lkKSB7XG4gICAgICAgICAgICBjb25zdCB7IGRhdGE6IGxlYWQgfSA9IGF3YWl0IHN1cGFiYXNlXG4gICAgICAgICAgICAgICAgLmZyb20oXCJsZWFkc1wiKVxuICAgICAgICAgICAgICAgIC5zZWxlY3QoXCJpZCwgbmFtZSwgZW1haWwsIHBob25lLCBzdGF0dXNcIilcbiAgICAgICAgICAgICAgICAuZXEoXCJpZFwiLCBjb252LmxlYWRfaWQpXG4gICAgICAgICAgICAgICAgLnNpbmdsZSgpXG4gICAgICAgICAgICBsZWFkRGF0YSA9IGxlYWRcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnZlcnNhdGlvbnMucHVzaCh7XG4gICAgICAgICAgICAuLi5jb252LFxuICAgICAgICAgICAgbGFzdF9tZXNzYWdlOiBsYXN0TWVzc2FnZSA/IHtcbiAgICAgICAgICAgICAgICAuLi5sYXN0TWVzc2FnZSxcbiAgICAgICAgICAgICAgICBzZW5kZXI6IGxhc3RNZXNzYWdlLnByb2ZpbGVzIGFzIGFueVxuICAgICAgICAgICAgfSA6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIHVucmVhZF9jb3VudDogdW5yZWFkQ291bnQgfHwgMCxcbiAgICAgICAgICAgIG90aGVyX3VzZXI6IG90aGVyVXNlcixcbiAgICAgICAgICAgIGxlYWQ6IGxlYWREYXRhIGFzIGFueVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIC8vIE9yZGVuYXIgcG9yIMO6bHRpbWEgYWN0aXZpZGFkXG4gICAgY29udmVyc2F0aW9ucy5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgIGNvbnN0IGFUaW1lID0gYS5sYXN0X21lc3NhZ2U/LmNyZWF0ZWRfYXQgfHwgYS51cGRhdGVkX2F0XG4gICAgICAgIGNvbnN0IGJUaW1lID0gYi5sYXN0X21lc3NhZ2U/LmNyZWF0ZWRfYXQgfHwgYi51cGRhdGVkX2F0XG4gICAgICAgIHJldHVybiBuZXcgRGF0ZShiVGltZSkuZ2V0VGltZSgpIC0gbmV3IERhdGUoYVRpbWUpLmdldFRpbWUoKVxuICAgIH0pXG5cbiAgICByZXR1cm4gY29udmVyc2F0aW9uc1xufVxuXG4vKipcbiAqIE9idGVuZXIgbWVuc2FqZXMgZGUgdW5hIGNvbnZlcnNhY2nDs24gZXNwZWPDrWZpY2FcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldE1lc3NhZ2VzKGNvbnZlcnNhdGlvbklkOiBzdHJpbmcpOiBQcm9taXNlPE1lc3NhZ2VXaXRoU2VuZGVyW10+IHtcbiAgICBjb25zdCBzdXBhYmFzZSA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpXG4gICAgY29uc3QgeyBkYXRhOiB7IHVzZXIgfSB9ID0gYXdhaXQgc3VwYWJhc2UuYXV0aC5nZXRVc2VyKClcblxuICAgIGlmICghdXNlcikgcmV0dXJuIFtdXG5cbiAgICAvLyBWZXJpZmljYXIgcXVlIGVsIHVzdWFyaW8gZXMgcGFydGljaXBhbnRlIGRlIGxhIGNvbnZlcnNhY2nDs25cbiAgICBjb25zdCB7IGRhdGE6IHBhcnRpY2lwYXRpb24gfSA9IGF3YWl0IHN1cGFiYXNlXG4gICAgICAgIC5mcm9tKFwiY29udmVyc2F0aW9uX3BhcnRpY2lwYW50c1wiKVxuICAgICAgICAuc2VsZWN0KFwiY29udmVyc2F0aW9uX2lkXCIpXG4gICAgICAgIC5lcShcImNvbnZlcnNhdGlvbl9pZFwiLCBjb252ZXJzYXRpb25JZClcbiAgICAgICAgLmVxKFwidXNlcl9pZFwiLCB1c2VyLmlkKVxuICAgICAgICAuc2luZ2xlKClcblxuICAgIGlmICghcGFydGljaXBhdGlvbikge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiVXNlciBpcyBub3QgYSBwYXJ0aWNpcGFudCBvZiB0aGlzIGNvbnZlcnNhdGlvblwiKVxuICAgICAgICByZXR1cm4gW11cbiAgICB9XG5cbiAgICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxuICAgICAgICAuZnJvbShcIm1lc3NhZ2VzXCIpXG4gICAgICAgIC5zZWxlY3QoYFxuICAgICAgICAgICAgaWQsXG4gICAgICAgICAgICBjb252ZXJzYXRpb25faWQsXG4gICAgICAgICAgICBzZW5kZXJfaWQsXG4gICAgICAgICAgICBjb250ZW50LFxuICAgICAgICAgICAgY3JlYXRlZF9hdCxcbiAgICAgICAgICAgIHByb2ZpbGVzOnNlbmRlcl9pZCAoXG4gICAgICAgICAgICAgICAgaWQsXG4gICAgICAgICAgICAgICAgZW1haWwsXG4gICAgICAgICAgICAgICAgZnVsbF9uYW1lLFxuICAgICAgICAgICAgICAgIGF2YXRhcl91cmxcbiAgICAgICAgICAgIClcbiAgICAgICAgYClcbiAgICAgICAgLmVxKFwiY29udmVyc2F0aW9uX2lkXCIsIGNvbnZlcnNhdGlvbklkKVxuICAgICAgICAub3JkZXIoXCJjcmVhdGVkX2F0XCIsIHsgYXNjZW5kaW5nOiB0cnVlIH0pXG5cbiAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIG1lc3NhZ2VzOlwiLCBlcnJvcilcbiAgICAgICAgcmV0dXJuIFtdXG4gICAgfVxuXG4gICAgcmV0dXJuIGRhdGEubWFwKG1zZyA9PiAoe1xuICAgICAgICAuLi5tc2csXG4gICAgICAgIHNlbmRlcjogbXNnLnByb2ZpbGVzIGFzIGFueVxuICAgIH0pKVxufVxuXG4vKipcbiAqIEVudmlhciB1biBtZW5zYWplIGEgdW5hIGNvbnZlcnNhY2nDs25cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNlbmRNZXNzYWdlKGNvbnZlcnNhdGlvbklkOiBzdHJpbmcsIGNvbnRlbnQ6IHN0cmluZywgcmV2YWxpZGF0ZSA9IHRydWUpOiBQcm9taXNlPE1lc3NhZ2UgfCBudWxsPiB7XG4gICAgY29uc3Qgc3VwYWJhc2UgPSBhd2FpdCBjcmVhdGVDbGllbnQoKVxuICAgIGNvbnN0IHsgZGF0YTogeyB1c2VyIH0gfSA9IGF3YWl0IHN1cGFiYXNlLmF1dGguZ2V0VXNlcigpXG5cbiAgICBpZiAoIXVzZXIgfHwgIWNvbnRlbnQudHJpbSgpKSByZXR1cm4gbnVsbFxuXG4gICAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcbiAgICAgICAgLmZyb20oXCJtZXNzYWdlc1wiKVxuICAgICAgICAuaW5zZXJ0KHtcbiAgICAgICAgICAgIGNvbnZlcnNhdGlvbl9pZDogY29udmVyc2F0aW9uSWQsXG4gICAgICAgICAgICBzZW5kZXJfaWQ6IHVzZXIuaWQsXG4gICAgICAgICAgICBjb250ZW50OiBjb250ZW50LnRyaW0oKVxuICAgICAgICB9KVxuICAgICAgICAuc2VsZWN0KClcbiAgICAgICAgLnNpbmdsZSgpXG5cbiAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkRFQlVHOiBFcnJvciBzZW5kaW5nIG1lc3NhZ2U6XCIsIHtcbiAgICAgICAgICAgIGVycm9yLFxuICAgICAgICAgICAgY29udmVyc2F0aW9uSWQsXG4gICAgICAgICAgICB1c2VySWQ6IHVzZXIuaWRcbiAgICAgICAgfSlcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycm9yLm1lc3NhZ2UpXG4gICAgfVxuXG4gICAgaWYgKHJldmFsaWRhdGUpIHtcbiAgICAgICAgcmV2YWxpZGF0ZVBhdGgoXCIvbWVuc2FqZXNcIilcbiAgICB9XG4gICAgcmV0dXJuIGRhdGFcbn1cblxuLyoqXG4gKiBNYXJjYXIgY29udmVyc2FjacOzbiBjb21vIGxlw61kYVxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbWFya0FzUmVhZChjb252ZXJzYXRpb25JZDogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgY29uc3Qgc3VwYWJhc2UgPSBhd2FpdCBjcmVhdGVDbGllbnQoKVxuICAgIGNvbnN0IHsgZGF0YTogeyB1c2VyIH0gfSA9IGF3YWl0IHN1cGFiYXNlLmF1dGguZ2V0VXNlcigpXG5cbiAgICBpZiAoIXVzZXIpIHJldHVyblxuXG4gICAgY29uc3QgeyBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcbiAgICAgICAgLmZyb20oXCJjb252ZXJzYXRpb25fcGFydGljaXBhbnRzXCIpXG4gICAgICAgIC51cGRhdGUoeyBsYXN0X3JlYWRfYXQ6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSB9KVxuICAgICAgICAuZXEoXCJjb252ZXJzYXRpb25faWRcIiwgY29udmVyc2F0aW9uSWQpXG4gICAgICAgIC5lcShcInVzZXJfaWRcIiwgdXNlci5pZClcblxuICAgIGlmIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgbWFya2luZyBhcyByZWFkOlwiLCBlcnJvcilcbiAgICB9XG5cbiAgICByZXZhbGlkYXRlUGF0aChcIi9tZW5zYWplc1wiKVxufVxuXG4vKipcbiAqIE9idGVuZXIgbyBjcmVhciB1bmEgY29udmVyc2FjacOzbiBjb24gb3RybyB1c3VhcmlvXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRPckNyZWF0ZUNvbnZlcnNhdGlvbihvdGhlclVzZXJJZDogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmcgfCBudWxsPiB7XG4gICAgY29uc3Qgc3VwYWJhc2UgPSBhd2FpdCBjcmVhdGVDbGllbnQoKVxuICAgIGNvbnN0IHRlbmFudElkID0gYXdhaXQgZ2V0VGVuYW50SWQoc3VwYWJhc2UpXG4gICAgY29uc3QgeyBkYXRhOiB7IHVzZXIgfSB9ID0gYXdhaXQgc3VwYWJhc2UuYXV0aC5nZXRVc2VyKClcblxuICAgIGlmICghdGVuYW50SWQgfHwgIXVzZXIpIHJldHVybiBudWxsXG5cbiAgICAvLyBCdXNjYXIgY29udmVyc2FjacOzbiBleGlzdGVudGUgZW50cmUgZXN0b3MgZG9zIHVzdWFyaW9zXG4gICAgY29uc3QgeyBkYXRhOiBleGlzdGluZ1BhcnRpY2lwYXRpb25zIH0gPSBhd2FpdCBzdXBhYmFzZVxuICAgICAgICAuZnJvbShcImNvbnZlcnNhdGlvbl9wYXJ0aWNpcGFudHNcIilcbiAgICAgICAgLnNlbGVjdChcImNvbnZlcnNhdGlvbl9pZFwiKVxuICAgICAgICAuZXEoXCJ1c2VyX2lkXCIsIHVzZXIuaWQpXG5cbiAgICBpZiAoZXhpc3RpbmdQYXJ0aWNpcGF0aW9ucykge1xuICAgICAgICBmb3IgKGNvbnN0IHBhcnRpY2lwYXRpb24gb2YgZXhpc3RpbmdQYXJ0aWNpcGF0aW9ucykge1xuICAgICAgICAgICAgY29uc3QgeyBkYXRhOiBvdGhlclBhcnRpY2lwYXRpb24gfSA9IGF3YWl0IHN1cGFiYXNlXG4gICAgICAgICAgICAgICAgLmZyb20oXCJjb252ZXJzYXRpb25fcGFydGljaXBhbnRzXCIpXG4gICAgICAgICAgICAgICAgLnNlbGVjdChcInVzZXJfaWRcIilcbiAgICAgICAgICAgICAgICAuZXEoXCJjb252ZXJzYXRpb25faWRcIiwgcGFydGljaXBhdGlvbi5jb252ZXJzYXRpb25faWQpXG4gICAgICAgICAgICAgICAgLmVxKFwidXNlcl9pZFwiLCBvdGhlclVzZXJJZClcbiAgICAgICAgICAgICAgICAuc2luZ2xlKClcblxuICAgICAgICAgICAgaWYgKG90aGVyUGFydGljaXBhdGlvbikge1xuICAgICAgICAgICAgICAgIHJldHVybiBwYXJ0aWNpcGF0aW9uLmNvbnZlcnNhdGlvbl9pZFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gQ3JlYXIgbnVldmEgY29udmVyc2FjacOzblxuICAgIGNvbnN0IHsgZGF0YTogbmV3Q29udmVyc2F0aW9uLCBlcnJvcjogY29udkVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxuICAgICAgICAuZnJvbShcImNvbnZlcnNhdGlvbnNcIilcbiAgICAgICAgLmluc2VydCh7IHRlbmFudF9pZDogdGVuYW50SWQgfSlcbiAgICAgICAgLnNlbGVjdCgpXG4gICAgICAgIC5zaW5nbGUoKVxuXG4gICAgaWYgKGNvbnZFcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgY3JlYXRpbmcgY29udmVyc2F0aW9uOlwiLCBjb252RXJyb3IpXG4gICAgICAgIHJldHVybiBudWxsXG4gICAgfVxuXG4gICAgLy8gQWdyZWdhciBwYXJ0aWNpcGFudGVzXG4gICAgY29uc3QgeyBlcnJvcjogcGFydGljaXBhbnRzRXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXG4gICAgICAgIC5mcm9tKFwiY29udmVyc2F0aW9uX3BhcnRpY2lwYW50c1wiKVxuICAgICAgICAuaW5zZXJ0KFtcbiAgICAgICAgICAgIHsgY29udmVyc2F0aW9uX2lkOiBuZXdDb252ZXJzYXRpb24uaWQsIHVzZXJfaWQ6IHVzZXIuaWQgfSxcbiAgICAgICAgICAgIHsgY29udmVyc2F0aW9uX2lkOiBuZXdDb252ZXJzYXRpb24uaWQsIHVzZXJfaWQ6IG90aGVyVXNlcklkIH1cbiAgICAgICAgXSlcblxuICAgIGlmIChwYXJ0aWNpcGFudHNFcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgYWRkaW5nIHBhcnRpY2lwYW50czpcIiwgcGFydGljaXBhbnRzRXJyb3IpXG4gICAgICAgIHJldHVybiBudWxsXG4gICAgfVxuXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvbWVuc2FqZXNcIilcbiAgICByZXR1cm4gbmV3Q29udmVyc2F0aW9uLmlkXG59XG5cbi8qKlxuICogT2J0ZW5lciBsaXN0YSBkZSB1c3VhcmlvcyBkZWwgdGVuYW50IChwYXJhIGluaWNpYXIgY29udmVyc2FjaW9uZXMpXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRUZW5hbnRVc2VycygpIHtcbiAgICBjb25zdCBzdXBhYmFzZSA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpXG4gICAgY29uc3QgdGVuYW50SWQgPSBhd2FpdCBnZXRUZW5hbnRJZChzdXBhYmFzZSlcbiAgICBjb25zdCB7IGRhdGE6IHsgdXNlciB9IH0gPSBhd2FpdCBzdXBhYmFzZS5hdXRoLmdldFVzZXIoKVxuXG4gICAgaWYgKCF0ZW5hbnRJZCB8fCAhdXNlcikgcmV0dXJuIFtdXG5cbiAgICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxuICAgICAgICAuZnJvbShcInByb2ZpbGVzXCIpXG4gICAgICAgIC5zZWxlY3QoXCJpZCwgZW1haWwsIGZ1bGxfbmFtZSwgYXZhdGFyX3VybFwiKVxuICAgICAgICAuZXEoXCJ0ZW5hbnRfaWRcIiwgdGVuYW50SWQpXG4gICAgICAgIC5uZXEoXCJpZFwiLCB1c2VyLmlkKSAvLyBFeGNsdWlyIGFsIHVzdWFyaW8gYWN0dWFsXG5cbiAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIHRlbmFudCB1c2VyczpcIiwgZXJyb3IpXG4gICAgICAgIHJldHVybiBbXVxuICAgIH1cblxuICAgIHJldHVybiBkYXRhXG59XG5cbi8qKlxuICogT2J0ZW5lciBsaXN0YSBkZSBMZWFkcyBkZWwgdGVuYW50IChwYXJhIGluaWNpYXIgY29udmVyc2FjaW9uZXMgY29uIGNsaWVudGVzKVxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0TGVhZHNGb3JNZXNzYWdpbmcoKSB7XG4gICAgY29uc3Qgc3VwYWJhc2UgPSBhd2FpdCBjcmVhdGVDbGllbnQoKVxuICAgIGNvbnN0IHRlbmFudElkID0gYXdhaXQgZ2V0VGVuYW50SWQoc3VwYWJhc2UpXG5cbiAgICBpZiAoIXRlbmFudElkKSByZXR1cm4gW11cblxuICAgIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXG4gICAgICAgIC5mcm9tKFwibGVhZHNcIilcbiAgICAgICAgLnNlbGVjdChcImlkLCBuYW1lLCBlbWFpbCwgcGhvbmUsIHN0YXR1c1wiKVxuICAgICAgICAuZXEoXCJ0ZW5hbnRfaWRcIiwgdGVuYW50SWQpXG4gICAgICAgIC5vcmRlcihcIm5hbWVcIilcblxuICAgIGlmIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgbGVhZHMgZm9yIG1lc3NhZ2luZzpcIiwgZXJyb3IpXG4gICAgICAgIHJldHVybiBbXVxuICAgIH1cblxuICAgIHJldHVybiBkYXRhXG59XG5cbi8qKlxuICogT2J0ZW5lciBvIGNyZWFyIHVuYSBjb252ZXJzYWNpw7NuIGNvbiB1biBMZWFkXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRPckNyZWF0ZUxlYWRDb252ZXJzYXRpb24obGVhZElkOiBzdHJpbmcsIHJldmFsaWRhdGUgPSB0cnVlKTogUHJvbWlzZTxzdHJpbmcgfCBudWxsPiB7XG4gICAgY29uc3Qgc3VwYWJhc2UgPSBhd2FpdCBjcmVhdGVDbGllbnQoKVxuICAgIGNvbnN0IHRlbmFudElkID0gYXdhaXQgZ2V0VGVuYW50SWQoc3VwYWJhc2UpXG4gICAgY29uc3QgeyBkYXRhOiB7IHVzZXIgfSB9ID0gYXdhaXQgc3VwYWJhc2UuYXV0aC5nZXRVc2VyKClcblxuICAgIGlmICghdGVuYW50SWQgfHwgIXVzZXIpIHJldHVybiBudWxsXG5cbiAgICAvLyBCdXNjYXIgY29udmVyc2FjacOzbiBleGlzdGVudGUgcGFyYSBlc3RlIExlYWRcbiAgICBjb25zdCB7IGRhdGE6IGV4aXN0aW5nQ29udmVyc2F0aW9uIH0gPSBhd2FpdCBzdXBhYmFzZVxuICAgICAgICAuZnJvbShcImNvbnZlcnNhdGlvbnNcIilcbiAgICAgICAgLnNlbGVjdChcImlkXCIpXG4gICAgICAgIC5lcShcImxlYWRfaWRcIiwgbGVhZElkKVxuICAgICAgICAuc2luZ2xlKClcblxuICAgIGlmIChleGlzdGluZ0NvbnZlcnNhdGlvbikge1xuICAgICAgICAvLyBBc2VndXJhcnNlIGRlIHF1ZSBlbCB1c3VhcmlvIGFjdHVhbCBlcyBwYXJ0aWNpcGFudGVcbiAgICAgICAgY29uc3QgeyBkYXRhOiBpc1BhcnRpY2lwYW50IH0gPSBhd2FpdCBzdXBhYmFzZVxuICAgICAgICAgICAgLmZyb20oXCJjb252ZXJzYXRpb25fcGFydGljaXBhbnRzXCIpXG4gICAgICAgICAgICAuc2VsZWN0KFwiY29udmVyc2F0aW9uX2lkXCIpXG4gICAgICAgICAgICAuZXEoXCJjb252ZXJzYXRpb25faWRcIiwgZXhpc3RpbmdDb252ZXJzYXRpb24uaWQpXG4gICAgICAgICAgICAuZXEoXCJ1c2VyX2lkXCIsIHVzZXIuaWQpXG4gICAgICAgICAgICAuc2luZ2xlKClcblxuICAgICAgICBpZiAoIWlzUGFydGljaXBhbnQpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBERUJVRzogQWRkaW5nIGFnZW50ICR7dXNlci5pZH0gdG8gbGVhZCBjb252ZXJzYXRpb24gJHtleGlzdGluZ0NvbnZlcnNhdGlvbi5pZH1gKVxuICAgICAgICAgICAgYXdhaXQgc3VwYWJhc2VcbiAgICAgICAgICAgICAgICAuZnJvbShcImNvbnZlcnNhdGlvbl9wYXJ0aWNpcGFudHNcIilcbiAgICAgICAgICAgICAgICAuaW5zZXJ0KHtcbiAgICAgICAgICAgICAgICAgICAgY29udmVyc2F0aW9uX2lkOiBleGlzdGluZ0NvbnZlcnNhdGlvbi5pZCxcbiAgICAgICAgICAgICAgICAgICAgdXNlcl9pZDogdXNlci5pZFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZXhpc3RpbmdDb252ZXJzYXRpb24uaWRcbiAgICB9XG5cbiAgICAvLyBDcmVhciBudWV2YSBjb252ZXJzYWNpw7NuIHZpbmN1bGFkYSBhbCBMZWFkXG4gICAgY29uc3QgeyBkYXRhOiBuZXdDb252ZXJzYXRpb24sIGVycm9yOiBjb252RXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXG4gICAgICAgIC5mcm9tKFwiY29udmVyc2F0aW9uc1wiKVxuICAgICAgICAuaW5zZXJ0KHtcbiAgICAgICAgICAgIHRlbmFudF9pZDogdGVuYW50SWQsXG4gICAgICAgICAgICBsZWFkX2lkOiBsZWFkSWRcbiAgICAgICAgfSlcbiAgICAgICAgLnNlbGVjdCgpXG4gICAgICAgIC5zaW5nbGUoKVxuXG4gICAgaWYgKGNvbnZFcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgY3JlYXRpbmcgbGVhZCBjb252ZXJzYXRpb246XCIsIGNvbnZFcnJvcilcbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG5cbiAgICAvLyBBZ3JlZ2FyIGFsIHVzdWFyaW8gYWN0dWFsIGNvbW8gcGFydGljaXBhbnRlXG4gICAgY29uc3QgeyBlcnJvcjogcGFydGljaXBhbnRFcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcbiAgICAgICAgLmZyb20oXCJjb252ZXJzYXRpb25fcGFydGljaXBhbnRzXCIpXG4gICAgICAgIC5pbnNlcnQoeyBjb252ZXJzYXRpb25faWQ6IG5ld0NvbnZlcnNhdGlvbi5pZCwgdXNlcl9pZDogdXNlci5pZCB9KVxuXG4gICAgaWYgKHBhcnRpY2lwYW50RXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGFkZGluZyBwYXJ0aWNpcGFudCB0byBsZWFkIGNvbnZlcnNhdGlvbjpcIiwgcGFydGljaXBhbnRFcnJvcilcbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG5cbiAgICBpZiAocmV2YWxpZGF0ZSkge1xuICAgICAgICByZXZhbGlkYXRlUGF0aChcIi9tZW5zYWplc1wiKVxuICAgIH1cbiAgICByZXR1cm4gbmV3Q29udmVyc2F0aW9uLmlkXG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6InlTQStUc0IsaU1BQUEifQ==
}),
"[project]/apps/web/app/actions/data:54c8cc [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getOrCreateConversation",
    ()=>$$RSC_SERVER_ACTION_4
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"4016ad19d4cb757c79fe4ae0612bfdd40cafb11a22":"getOrCreateConversation"},"apps/web/app/actions/messages.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("4016ad19d4cb757c79fe4ae0612bfdd40cafb11a22", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "getOrCreateConversation");
;
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vbWVzc2FnZXMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc2VydmVyXCJcblxuaW1wb3J0IHsgY3JlYXRlQ2xpZW50LCBnZXRUZW5hbnRJZCB9IGZyb20gXCJAL2xpYi9zdXBhYmFzZS9zZXJ2ZXJcIlxuaW1wb3J0IHsgcmV2YWxpZGF0ZVBhdGggfSBmcm9tIFwibmV4dC9jYWNoZVwiXG5pbXBvcnQgdHlwZSB7IENvbnZlcnNhdGlvbiwgTWVzc2FnZSwgQ29udmVyc2F0aW9uV2l0aERldGFpbHMsIE1lc3NhZ2VXaXRoU2VuZGVyIH0gZnJvbSBcIkBpbm1vY21zL3NoYXJlZFwiXG5cbi8qKlxuICogT2J0ZW5lciB0b2RhcyBsYXMgY29udmVyc2FjaW9uZXMgZGVsIHVzdWFyaW8gYWN0dWFsXG4gKiBjb24gZGV0YWxsZXMgZGUgcGFydGljaXBhbnRlcyB5IMO6bHRpbW8gbWVuc2FqZVxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q29udmVyc2F0aW9ucygpOiBQcm9taXNlPENvbnZlcnNhdGlvbldpdGhEZXRhaWxzW10+IHtcbiAgICBjb25zdCBzdXBhYmFzZSA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpXG4gICAgY29uc3QgdGVuYW50SWQgPSBhd2FpdCBnZXRUZW5hbnRJZChzdXBhYmFzZSlcblxuICAgIGNvbnN0IHsgZGF0YTogeyB1c2VyIH0gfSA9IGF3YWl0IHN1cGFiYXNlLmF1dGguZ2V0VXNlcigpXG5cbiAgICBpZiAoIXRlbmFudElkIHx8ICF1c2VyKSByZXR1cm4gW11cblxuICAgIC8vIE9idGVuZXIgY29udmVyc2FjaW9uZXMgZW4gbGFzIHF1ZSBwYXJ0aWNpcGEgZWwgdXN1YXJpb1xuICAgIGNvbnN0IHsgZGF0YTogcGFydGljaXBhdGlvbnMsIGVycm9yOiBwYXJ0aWNpcGF0aW9uRXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXG4gICAgICAgIC5mcm9tKFwiY29udmVyc2F0aW9uX3BhcnRpY2lwYW50c1wiKVxuICAgICAgICAuc2VsZWN0KGBcbiAgICAgICAgICAgIGNvbnZlcnNhdGlvbl9pZCxcbiAgICAgICAgICAgIGxhc3RfcmVhZF9hdCxcbiAgICAgICAgICAgIGNvbnZlcnNhdGlvbnMgKFxuICAgICAgICAgICAgICAgIGlkLFxuICAgICAgICAgICAgICAgIHRlbmFudF9pZCxcbiAgICAgICAgICAgICAgICBjcmVhdGVkX2F0LFxuICAgICAgICAgICAgICAgIHVwZGF0ZWRfYXQsXG4gICAgICAgICAgICAgICAgbGVhZF9pZFxuICAgICAgICAgICAgKVxuICAgICAgICBgKVxuICAgICAgICAuZXEoXCJ1c2VyX2lkXCIsIHVzZXIuaWQpXG5cbiAgICBpZiAocGFydGljaXBhdGlvbkVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyBjb252ZXJzYXRpb25zOlwiLCBwYXJ0aWNpcGF0aW9uRXJyb3IpXG4gICAgICAgIHJldHVybiBbXVxuICAgIH1cblxuICAgIGNvbnN0IGNvbnZlcnNhdGlvbnM6IENvbnZlcnNhdGlvbldpdGhEZXRhaWxzW10gPSBbXVxuXG4gICAgZm9yIChjb25zdCBwYXJ0aWNpcGF0aW9uIG9mIHBhcnRpY2lwYXRpb25zIHx8IFtdKSB7XG4gICAgICAgIGNvbnN0IGNvbnYgPSBwYXJ0aWNpcGF0aW9uLmNvbnZlcnNhdGlvbnMgYXMgdW5rbm93biBhcyBDb252ZXJzYXRpb25cbiAgICAgICAgaWYgKCFjb252KSBjb250aW51ZVxuXG4gICAgICAgIC8vIE9idGVuZXIgb3Ryb3MgcGFydGljaXBhbnRlc1xuICAgICAgICBjb25zdCB7IGRhdGE6IHBhcnRpY2lwYW50cywgZXJyb3I6IHBhcnRpY2lwYW50c0Vycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxuICAgICAgICAgICAgLmZyb20oXCJjb252ZXJzYXRpb25fcGFydGljaXBhbnRzXCIpXG4gICAgICAgICAgICAuc2VsZWN0KGBcbiAgICAgICAgICAgICAgICB1c2VyX2lkLFxuICAgICAgICAgICAgICAgIGpvaW5lZF9hdCxcbiAgICAgICAgICAgICAgICBwcm9maWxlcyAoXG4gICAgICAgICAgICAgICAgICAgIGlkLFxuICAgICAgICAgICAgICAgICAgICBlbWFpbCxcbiAgICAgICAgICAgICAgICAgICAgZnVsbF9uYW1lLFxuICAgICAgICAgICAgICAgICAgICBhdmF0YXJfdXJsXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgYClcbiAgICAgICAgICAgIC5lcShcImNvbnZlcnNhdGlvbl9pZFwiLCBjb252LmlkKVxuICAgICAgICAgICAgLm5lcShcInVzZXJfaWRcIiwgdXNlci5pZClcblxuICAgICAgICAvLyBPYnRlbmVyIMO6bHRpbW8gbWVuc2FqZVxuICAgICAgICBjb25zdCB7IGRhdGE6IGxhc3RNZXNzYWdlIH0gPSBhd2FpdCBzdXBhYmFzZVxuICAgICAgICAgICAgLmZyb20oXCJtZXNzYWdlc1wiKVxuICAgICAgICAgICAgLnNlbGVjdChgXG4gICAgICAgICAgICAgICAgaWQsXG4gICAgICAgICAgICAgICAgY29udmVyc2F0aW9uX2lkLFxuICAgICAgICAgICAgICAgIHNlbmRlcl9pZCxcbiAgICAgICAgICAgICAgICBjb250ZW50LFxuICAgICAgICAgICAgICAgIGNyZWF0ZWRfYXQsXG4gICAgICAgICAgICAgICAgcHJvZmlsZXM6c2VuZGVyX2lkIChcbiAgICAgICAgICAgICAgICAgICAgaWQsXG4gICAgICAgICAgICAgICAgICAgIGVtYWlsLFxuICAgICAgICAgICAgICAgICAgICBmdWxsX25hbWUsXG4gICAgICAgICAgICAgICAgICAgIGF2YXRhcl91cmxcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICBgKVxuICAgICAgICAgICAgLmVxKFwiY29udmVyc2F0aW9uX2lkXCIsIGNvbnYuaWQpXG4gICAgICAgICAgICAub3JkZXIoXCJjcmVhdGVkX2F0XCIsIHsgYXNjZW5kaW5nOiBmYWxzZSB9KVxuICAgICAgICAgICAgLmxpbWl0KDEpXG4gICAgICAgICAgICAuc2luZ2xlKClcblxuICAgICAgICAvLyBDYWxjdWxhciBtZW5zYWplcyBubyBsZcOtZG9zXG4gICAgICAgIGNvbnN0IHsgY291bnQ6IHVucmVhZENvdW50IH0gPSBhd2FpdCBzdXBhYmFzZVxuICAgICAgICAgICAgLmZyb20oXCJtZXNzYWdlc1wiKVxuICAgICAgICAgICAgLnNlbGVjdChcIipcIiwgeyBjb3VudDogJ2V4YWN0JywgaGVhZDogdHJ1ZSB9KVxuICAgICAgICAgICAgLmVxKFwiY29udmVyc2F0aW9uX2lkXCIsIGNvbnYuaWQpXG4gICAgICAgICAgICAubmVxKFwic2VuZGVyX2lkXCIsIHVzZXIuaWQpXG4gICAgICAgICAgICAuZ3QoXCJjcmVhdGVkX2F0XCIsIHBhcnRpY2lwYXRpb24ubGFzdF9yZWFkX2F0KVxuXG4gICAgICAgIGNvbnN0IG90aGVyVXNlciA9IHBhcnRpY2lwYW50cz8uWzBdPy5wcm9maWxlcyBhcyBhbnlcblxuICAgICAgICAvLyBGZXRjaCBsZWFkIGRldGFpbHMgaWYgaXQncyBhIGNsaWVudCBjb252ZXJzYXRpb25cbiAgICAgICAgbGV0IGxlYWREYXRhID0gbnVsbFxuICAgICAgICBpZiAoY29udi5sZWFkX2lkKSB7XG4gICAgICAgICAgICBjb25zdCB7IGRhdGE6IGxlYWQgfSA9IGF3YWl0IHN1cGFiYXNlXG4gICAgICAgICAgICAgICAgLmZyb20oXCJsZWFkc1wiKVxuICAgICAgICAgICAgICAgIC5zZWxlY3QoXCJpZCwgbmFtZSwgZW1haWwsIHBob25lLCBzdGF0dXNcIilcbiAgICAgICAgICAgICAgICAuZXEoXCJpZFwiLCBjb252LmxlYWRfaWQpXG4gICAgICAgICAgICAgICAgLnNpbmdsZSgpXG4gICAgICAgICAgICBsZWFkRGF0YSA9IGxlYWRcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnZlcnNhdGlvbnMucHVzaCh7XG4gICAgICAgICAgICAuLi5jb252LFxuICAgICAgICAgICAgbGFzdF9tZXNzYWdlOiBsYXN0TWVzc2FnZSA/IHtcbiAgICAgICAgICAgICAgICAuLi5sYXN0TWVzc2FnZSxcbiAgICAgICAgICAgICAgICBzZW5kZXI6IGxhc3RNZXNzYWdlLnByb2ZpbGVzIGFzIGFueVxuICAgICAgICAgICAgfSA6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIHVucmVhZF9jb3VudDogdW5yZWFkQ291bnQgfHwgMCxcbiAgICAgICAgICAgIG90aGVyX3VzZXI6IG90aGVyVXNlcixcbiAgICAgICAgICAgIGxlYWQ6IGxlYWREYXRhIGFzIGFueVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIC8vIE9yZGVuYXIgcG9yIMO6bHRpbWEgYWN0aXZpZGFkXG4gICAgY29udmVyc2F0aW9ucy5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgIGNvbnN0IGFUaW1lID0gYS5sYXN0X21lc3NhZ2U/LmNyZWF0ZWRfYXQgfHwgYS51cGRhdGVkX2F0XG4gICAgICAgIGNvbnN0IGJUaW1lID0gYi5sYXN0X21lc3NhZ2U/LmNyZWF0ZWRfYXQgfHwgYi51cGRhdGVkX2F0XG4gICAgICAgIHJldHVybiBuZXcgRGF0ZShiVGltZSkuZ2V0VGltZSgpIC0gbmV3IERhdGUoYVRpbWUpLmdldFRpbWUoKVxuICAgIH0pXG5cbiAgICByZXR1cm4gY29udmVyc2F0aW9uc1xufVxuXG4vKipcbiAqIE9idGVuZXIgbWVuc2FqZXMgZGUgdW5hIGNvbnZlcnNhY2nDs24gZXNwZWPDrWZpY2FcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldE1lc3NhZ2VzKGNvbnZlcnNhdGlvbklkOiBzdHJpbmcpOiBQcm9taXNlPE1lc3NhZ2VXaXRoU2VuZGVyW10+IHtcbiAgICBjb25zdCBzdXBhYmFzZSA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpXG4gICAgY29uc3QgeyBkYXRhOiB7IHVzZXIgfSB9ID0gYXdhaXQgc3VwYWJhc2UuYXV0aC5nZXRVc2VyKClcblxuICAgIGlmICghdXNlcikgcmV0dXJuIFtdXG5cbiAgICAvLyBWZXJpZmljYXIgcXVlIGVsIHVzdWFyaW8gZXMgcGFydGljaXBhbnRlIGRlIGxhIGNvbnZlcnNhY2nDs25cbiAgICBjb25zdCB7IGRhdGE6IHBhcnRpY2lwYXRpb24gfSA9IGF3YWl0IHN1cGFiYXNlXG4gICAgICAgIC5mcm9tKFwiY29udmVyc2F0aW9uX3BhcnRpY2lwYW50c1wiKVxuICAgICAgICAuc2VsZWN0KFwiY29udmVyc2F0aW9uX2lkXCIpXG4gICAgICAgIC5lcShcImNvbnZlcnNhdGlvbl9pZFwiLCBjb252ZXJzYXRpb25JZClcbiAgICAgICAgLmVxKFwidXNlcl9pZFwiLCB1c2VyLmlkKVxuICAgICAgICAuc2luZ2xlKClcblxuICAgIGlmICghcGFydGljaXBhdGlvbikge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiVXNlciBpcyBub3QgYSBwYXJ0aWNpcGFudCBvZiB0aGlzIGNvbnZlcnNhdGlvblwiKVxuICAgICAgICByZXR1cm4gW11cbiAgICB9XG5cbiAgICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxuICAgICAgICAuZnJvbShcIm1lc3NhZ2VzXCIpXG4gICAgICAgIC5zZWxlY3QoYFxuICAgICAgICAgICAgaWQsXG4gICAgICAgICAgICBjb252ZXJzYXRpb25faWQsXG4gICAgICAgICAgICBzZW5kZXJfaWQsXG4gICAgICAgICAgICBjb250ZW50LFxuICAgICAgICAgICAgY3JlYXRlZF9hdCxcbiAgICAgICAgICAgIHByb2ZpbGVzOnNlbmRlcl9pZCAoXG4gICAgICAgICAgICAgICAgaWQsXG4gICAgICAgICAgICAgICAgZW1haWwsXG4gICAgICAgICAgICAgICAgZnVsbF9uYW1lLFxuICAgICAgICAgICAgICAgIGF2YXRhcl91cmxcbiAgICAgICAgICAgIClcbiAgICAgICAgYClcbiAgICAgICAgLmVxKFwiY29udmVyc2F0aW9uX2lkXCIsIGNvbnZlcnNhdGlvbklkKVxuICAgICAgICAub3JkZXIoXCJjcmVhdGVkX2F0XCIsIHsgYXNjZW5kaW5nOiB0cnVlIH0pXG5cbiAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIG1lc3NhZ2VzOlwiLCBlcnJvcilcbiAgICAgICAgcmV0dXJuIFtdXG4gICAgfVxuXG4gICAgcmV0dXJuIGRhdGEubWFwKG1zZyA9PiAoe1xuICAgICAgICAuLi5tc2csXG4gICAgICAgIHNlbmRlcjogbXNnLnByb2ZpbGVzIGFzIGFueVxuICAgIH0pKVxufVxuXG4vKipcbiAqIEVudmlhciB1biBtZW5zYWplIGEgdW5hIGNvbnZlcnNhY2nDs25cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNlbmRNZXNzYWdlKGNvbnZlcnNhdGlvbklkOiBzdHJpbmcsIGNvbnRlbnQ6IHN0cmluZywgcmV2YWxpZGF0ZSA9IHRydWUpOiBQcm9taXNlPE1lc3NhZ2UgfCBudWxsPiB7XG4gICAgY29uc3Qgc3VwYWJhc2UgPSBhd2FpdCBjcmVhdGVDbGllbnQoKVxuICAgIGNvbnN0IHsgZGF0YTogeyB1c2VyIH0gfSA9IGF3YWl0IHN1cGFiYXNlLmF1dGguZ2V0VXNlcigpXG5cbiAgICBpZiAoIXVzZXIgfHwgIWNvbnRlbnQudHJpbSgpKSByZXR1cm4gbnVsbFxuXG4gICAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcbiAgICAgICAgLmZyb20oXCJtZXNzYWdlc1wiKVxuICAgICAgICAuaW5zZXJ0KHtcbiAgICAgICAgICAgIGNvbnZlcnNhdGlvbl9pZDogY29udmVyc2F0aW9uSWQsXG4gICAgICAgICAgICBzZW5kZXJfaWQ6IHVzZXIuaWQsXG4gICAgICAgICAgICBjb250ZW50OiBjb250ZW50LnRyaW0oKVxuICAgICAgICB9KVxuICAgICAgICAuc2VsZWN0KClcbiAgICAgICAgLnNpbmdsZSgpXG5cbiAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkRFQlVHOiBFcnJvciBzZW5kaW5nIG1lc3NhZ2U6XCIsIHtcbiAgICAgICAgICAgIGVycm9yLFxuICAgICAgICAgICAgY29udmVyc2F0aW9uSWQsXG4gICAgICAgICAgICB1c2VySWQ6IHVzZXIuaWRcbiAgICAgICAgfSlcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycm9yLm1lc3NhZ2UpXG4gICAgfVxuXG4gICAgaWYgKHJldmFsaWRhdGUpIHtcbiAgICAgICAgcmV2YWxpZGF0ZVBhdGgoXCIvbWVuc2FqZXNcIilcbiAgICB9XG4gICAgcmV0dXJuIGRhdGFcbn1cblxuLyoqXG4gKiBNYXJjYXIgY29udmVyc2FjacOzbiBjb21vIGxlw61kYVxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbWFya0FzUmVhZChjb252ZXJzYXRpb25JZDogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgY29uc3Qgc3VwYWJhc2UgPSBhd2FpdCBjcmVhdGVDbGllbnQoKVxuICAgIGNvbnN0IHsgZGF0YTogeyB1c2VyIH0gfSA9IGF3YWl0IHN1cGFiYXNlLmF1dGguZ2V0VXNlcigpXG5cbiAgICBpZiAoIXVzZXIpIHJldHVyblxuXG4gICAgY29uc3QgeyBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcbiAgICAgICAgLmZyb20oXCJjb252ZXJzYXRpb25fcGFydGljaXBhbnRzXCIpXG4gICAgICAgIC51cGRhdGUoeyBsYXN0X3JlYWRfYXQ6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSB9KVxuICAgICAgICAuZXEoXCJjb252ZXJzYXRpb25faWRcIiwgY29udmVyc2F0aW9uSWQpXG4gICAgICAgIC5lcShcInVzZXJfaWRcIiwgdXNlci5pZClcblxuICAgIGlmIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgbWFya2luZyBhcyByZWFkOlwiLCBlcnJvcilcbiAgICB9XG5cbiAgICByZXZhbGlkYXRlUGF0aChcIi9tZW5zYWplc1wiKVxufVxuXG4vKipcbiAqIE9idGVuZXIgbyBjcmVhciB1bmEgY29udmVyc2FjacOzbiBjb24gb3RybyB1c3VhcmlvXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRPckNyZWF0ZUNvbnZlcnNhdGlvbihvdGhlclVzZXJJZDogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmcgfCBudWxsPiB7XG4gICAgY29uc3Qgc3VwYWJhc2UgPSBhd2FpdCBjcmVhdGVDbGllbnQoKVxuICAgIGNvbnN0IHRlbmFudElkID0gYXdhaXQgZ2V0VGVuYW50SWQoc3VwYWJhc2UpXG4gICAgY29uc3QgeyBkYXRhOiB7IHVzZXIgfSB9ID0gYXdhaXQgc3VwYWJhc2UuYXV0aC5nZXRVc2VyKClcblxuICAgIGlmICghdGVuYW50SWQgfHwgIXVzZXIpIHJldHVybiBudWxsXG5cbiAgICAvLyBCdXNjYXIgY29udmVyc2FjacOzbiBleGlzdGVudGUgZW50cmUgZXN0b3MgZG9zIHVzdWFyaW9zXG4gICAgY29uc3QgeyBkYXRhOiBleGlzdGluZ1BhcnRpY2lwYXRpb25zIH0gPSBhd2FpdCBzdXBhYmFzZVxuICAgICAgICAuZnJvbShcImNvbnZlcnNhdGlvbl9wYXJ0aWNpcGFudHNcIilcbiAgICAgICAgLnNlbGVjdChcImNvbnZlcnNhdGlvbl9pZFwiKVxuICAgICAgICAuZXEoXCJ1c2VyX2lkXCIsIHVzZXIuaWQpXG5cbiAgICBpZiAoZXhpc3RpbmdQYXJ0aWNpcGF0aW9ucykge1xuICAgICAgICBmb3IgKGNvbnN0IHBhcnRpY2lwYXRpb24gb2YgZXhpc3RpbmdQYXJ0aWNpcGF0aW9ucykge1xuICAgICAgICAgICAgY29uc3QgeyBkYXRhOiBvdGhlclBhcnRpY2lwYXRpb24gfSA9IGF3YWl0IHN1cGFiYXNlXG4gICAgICAgICAgICAgICAgLmZyb20oXCJjb252ZXJzYXRpb25fcGFydGljaXBhbnRzXCIpXG4gICAgICAgICAgICAgICAgLnNlbGVjdChcInVzZXJfaWRcIilcbiAgICAgICAgICAgICAgICAuZXEoXCJjb252ZXJzYXRpb25faWRcIiwgcGFydGljaXBhdGlvbi5jb252ZXJzYXRpb25faWQpXG4gICAgICAgICAgICAgICAgLmVxKFwidXNlcl9pZFwiLCBvdGhlclVzZXJJZClcbiAgICAgICAgICAgICAgICAuc2luZ2xlKClcblxuICAgICAgICAgICAgaWYgKG90aGVyUGFydGljaXBhdGlvbikge1xuICAgICAgICAgICAgICAgIHJldHVybiBwYXJ0aWNpcGF0aW9uLmNvbnZlcnNhdGlvbl9pZFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gQ3JlYXIgbnVldmEgY29udmVyc2FjacOzblxuICAgIGNvbnN0IHsgZGF0YTogbmV3Q29udmVyc2F0aW9uLCBlcnJvcjogY29udkVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxuICAgICAgICAuZnJvbShcImNvbnZlcnNhdGlvbnNcIilcbiAgICAgICAgLmluc2VydCh7IHRlbmFudF9pZDogdGVuYW50SWQgfSlcbiAgICAgICAgLnNlbGVjdCgpXG4gICAgICAgIC5zaW5nbGUoKVxuXG4gICAgaWYgKGNvbnZFcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgY3JlYXRpbmcgY29udmVyc2F0aW9uOlwiLCBjb252RXJyb3IpXG4gICAgICAgIHJldHVybiBudWxsXG4gICAgfVxuXG4gICAgLy8gQWdyZWdhciBwYXJ0aWNpcGFudGVzXG4gICAgY29uc3QgeyBlcnJvcjogcGFydGljaXBhbnRzRXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXG4gICAgICAgIC5mcm9tKFwiY29udmVyc2F0aW9uX3BhcnRpY2lwYW50c1wiKVxuICAgICAgICAuaW5zZXJ0KFtcbiAgICAgICAgICAgIHsgY29udmVyc2F0aW9uX2lkOiBuZXdDb252ZXJzYXRpb24uaWQsIHVzZXJfaWQ6IHVzZXIuaWQgfSxcbiAgICAgICAgICAgIHsgY29udmVyc2F0aW9uX2lkOiBuZXdDb252ZXJzYXRpb24uaWQsIHVzZXJfaWQ6IG90aGVyVXNlcklkIH1cbiAgICAgICAgXSlcblxuICAgIGlmIChwYXJ0aWNpcGFudHNFcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgYWRkaW5nIHBhcnRpY2lwYW50czpcIiwgcGFydGljaXBhbnRzRXJyb3IpXG4gICAgICAgIHJldHVybiBudWxsXG4gICAgfVxuXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvbWVuc2FqZXNcIilcbiAgICByZXR1cm4gbmV3Q29udmVyc2F0aW9uLmlkXG59XG5cbi8qKlxuICogT2J0ZW5lciBsaXN0YSBkZSB1c3VhcmlvcyBkZWwgdGVuYW50IChwYXJhIGluaWNpYXIgY29udmVyc2FjaW9uZXMpXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRUZW5hbnRVc2VycygpIHtcbiAgICBjb25zdCBzdXBhYmFzZSA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpXG4gICAgY29uc3QgdGVuYW50SWQgPSBhd2FpdCBnZXRUZW5hbnRJZChzdXBhYmFzZSlcbiAgICBjb25zdCB7IGRhdGE6IHsgdXNlciB9IH0gPSBhd2FpdCBzdXBhYmFzZS5hdXRoLmdldFVzZXIoKVxuXG4gICAgaWYgKCF0ZW5hbnRJZCB8fCAhdXNlcikgcmV0dXJuIFtdXG5cbiAgICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxuICAgICAgICAuZnJvbShcInByb2ZpbGVzXCIpXG4gICAgICAgIC5zZWxlY3QoXCJpZCwgZW1haWwsIGZ1bGxfbmFtZSwgYXZhdGFyX3VybFwiKVxuICAgICAgICAuZXEoXCJ0ZW5hbnRfaWRcIiwgdGVuYW50SWQpXG4gICAgICAgIC5uZXEoXCJpZFwiLCB1c2VyLmlkKSAvLyBFeGNsdWlyIGFsIHVzdWFyaW8gYWN0dWFsXG5cbiAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIHRlbmFudCB1c2VyczpcIiwgZXJyb3IpXG4gICAgICAgIHJldHVybiBbXVxuICAgIH1cblxuICAgIHJldHVybiBkYXRhXG59XG5cbi8qKlxuICogT2J0ZW5lciBsaXN0YSBkZSBMZWFkcyBkZWwgdGVuYW50IChwYXJhIGluaWNpYXIgY29udmVyc2FjaW9uZXMgY29uIGNsaWVudGVzKVxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0TGVhZHNGb3JNZXNzYWdpbmcoKSB7XG4gICAgY29uc3Qgc3VwYWJhc2UgPSBhd2FpdCBjcmVhdGVDbGllbnQoKVxuICAgIGNvbnN0IHRlbmFudElkID0gYXdhaXQgZ2V0VGVuYW50SWQoc3VwYWJhc2UpXG5cbiAgICBpZiAoIXRlbmFudElkKSByZXR1cm4gW11cblxuICAgIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXG4gICAgICAgIC5mcm9tKFwibGVhZHNcIilcbiAgICAgICAgLnNlbGVjdChcImlkLCBuYW1lLCBlbWFpbCwgcGhvbmUsIHN0YXR1c1wiKVxuICAgICAgICAuZXEoXCJ0ZW5hbnRfaWRcIiwgdGVuYW50SWQpXG4gICAgICAgIC5vcmRlcihcIm5hbWVcIilcblxuICAgIGlmIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgbGVhZHMgZm9yIG1lc3NhZ2luZzpcIiwgZXJyb3IpXG4gICAgICAgIHJldHVybiBbXVxuICAgIH1cblxuICAgIHJldHVybiBkYXRhXG59XG5cbi8qKlxuICogT2J0ZW5lciBvIGNyZWFyIHVuYSBjb252ZXJzYWNpw7NuIGNvbiB1biBMZWFkXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRPckNyZWF0ZUxlYWRDb252ZXJzYXRpb24obGVhZElkOiBzdHJpbmcsIHJldmFsaWRhdGUgPSB0cnVlKTogUHJvbWlzZTxzdHJpbmcgfCBudWxsPiB7XG4gICAgY29uc3Qgc3VwYWJhc2UgPSBhd2FpdCBjcmVhdGVDbGllbnQoKVxuICAgIGNvbnN0IHRlbmFudElkID0gYXdhaXQgZ2V0VGVuYW50SWQoc3VwYWJhc2UpXG4gICAgY29uc3QgeyBkYXRhOiB7IHVzZXIgfSB9ID0gYXdhaXQgc3VwYWJhc2UuYXV0aC5nZXRVc2VyKClcblxuICAgIGlmICghdGVuYW50SWQgfHwgIXVzZXIpIHJldHVybiBudWxsXG5cbiAgICAvLyBCdXNjYXIgY29udmVyc2FjacOzbiBleGlzdGVudGUgcGFyYSBlc3RlIExlYWRcbiAgICBjb25zdCB7IGRhdGE6IGV4aXN0aW5nQ29udmVyc2F0aW9uIH0gPSBhd2FpdCBzdXBhYmFzZVxuICAgICAgICAuZnJvbShcImNvbnZlcnNhdGlvbnNcIilcbiAgICAgICAgLnNlbGVjdChcImlkXCIpXG4gICAgICAgIC5lcShcImxlYWRfaWRcIiwgbGVhZElkKVxuICAgICAgICAuc2luZ2xlKClcblxuICAgIGlmIChleGlzdGluZ0NvbnZlcnNhdGlvbikge1xuICAgICAgICAvLyBBc2VndXJhcnNlIGRlIHF1ZSBlbCB1c3VhcmlvIGFjdHVhbCBlcyBwYXJ0aWNpcGFudGVcbiAgICAgICAgY29uc3QgeyBkYXRhOiBpc1BhcnRpY2lwYW50IH0gPSBhd2FpdCBzdXBhYmFzZVxuICAgICAgICAgICAgLmZyb20oXCJjb252ZXJzYXRpb25fcGFydGljaXBhbnRzXCIpXG4gICAgICAgICAgICAuc2VsZWN0KFwiY29udmVyc2F0aW9uX2lkXCIpXG4gICAgICAgICAgICAuZXEoXCJjb252ZXJzYXRpb25faWRcIiwgZXhpc3RpbmdDb252ZXJzYXRpb24uaWQpXG4gICAgICAgICAgICAuZXEoXCJ1c2VyX2lkXCIsIHVzZXIuaWQpXG4gICAgICAgICAgICAuc2luZ2xlKClcblxuICAgICAgICBpZiAoIWlzUGFydGljaXBhbnQpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBERUJVRzogQWRkaW5nIGFnZW50ICR7dXNlci5pZH0gdG8gbGVhZCBjb252ZXJzYXRpb24gJHtleGlzdGluZ0NvbnZlcnNhdGlvbi5pZH1gKVxuICAgICAgICAgICAgYXdhaXQgc3VwYWJhc2VcbiAgICAgICAgICAgICAgICAuZnJvbShcImNvbnZlcnNhdGlvbl9wYXJ0aWNpcGFudHNcIilcbiAgICAgICAgICAgICAgICAuaW5zZXJ0KHtcbiAgICAgICAgICAgICAgICAgICAgY29udmVyc2F0aW9uX2lkOiBleGlzdGluZ0NvbnZlcnNhdGlvbi5pZCxcbiAgICAgICAgICAgICAgICAgICAgdXNlcl9pZDogdXNlci5pZFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZXhpc3RpbmdDb252ZXJzYXRpb24uaWRcbiAgICB9XG5cbiAgICAvLyBDcmVhciBudWV2YSBjb252ZXJzYWNpw7NuIHZpbmN1bGFkYSBhbCBMZWFkXG4gICAgY29uc3QgeyBkYXRhOiBuZXdDb252ZXJzYXRpb24sIGVycm9yOiBjb252RXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXG4gICAgICAgIC5mcm9tKFwiY29udmVyc2F0aW9uc1wiKVxuICAgICAgICAuaW5zZXJ0KHtcbiAgICAgICAgICAgIHRlbmFudF9pZDogdGVuYW50SWQsXG4gICAgICAgICAgICBsZWFkX2lkOiBsZWFkSWRcbiAgICAgICAgfSlcbiAgICAgICAgLnNlbGVjdCgpXG4gICAgICAgIC5zaW5nbGUoKVxuXG4gICAgaWYgKGNvbnZFcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgY3JlYXRpbmcgbGVhZCBjb252ZXJzYXRpb246XCIsIGNvbnZFcnJvcilcbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG5cbiAgICAvLyBBZ3JlZ2FyIGFsIHVzdWFyaW8gYWN0dWFsIGNvbW8gcGFydGljaXBhbnRlXG4gICAgY29uc3QgeyBlcnJvcjogcGFydGljaXBhbnRFcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcbiAgICAgICAgLmZyb20oXCJjb252ZXJzYXRpb25fcGFydGljaXBhbnRzXCIpXG4gICAgICAgIC5pbnNlcnQoeyBjb252ZXJzYXRpb25faWQ6IG5ld0NvbnZlcnNhdGlvbi5pZCwgdXNlcl9pZDogdXNlci5pZCB9KVxuXG4gICAgaWYgKHBhcnRpY2lwYW50RXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGFkZGluZyBwYXJ0aWNpcGFudCB0byBsZWFkIGNvbnZlcnNhdGlvbjpcIiwgcGFydGljaXBhbnRFcnJvcilcbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG5cbiAgICBpZiAocmV2YWxpZGF0ZSkge1xuICAgICAgICByZXZhbGlkYXRlUGF0aChcIi9tZW5zYWplc1wiKVxuICAgIH1cbiAgICByZXR1cm4gbmV3Q29udmVyc2F0aW9uLmlkXG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjRTQTJPc0Isb01BQUEifQ==
}),
"[project]/apps/web/app/actions/data:b2d919 [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getOrCreateLeadConversation",
    ()=>$$RSC_SERVER_ACTION_7
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"60721f3812febe2cfa0c197817caa95eb02cece7ab":"getOrCreateLeadConversation"},"apps/web/app/actions/messages.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("60721f3812febe2cfa0c197817caa95eb02cece7ab", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "getOrCreateLeadConversation");
;
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vbWVzc2FnZXMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc2VydmVyXCJcblxuaW1wb3J0IHsgY3JlYXRlQ2xpZW50LCBnZXRUZW5hbnRJZCB9IGZyb20gXCJAL2xpYi9zdXBhYmFzZS9zZXJ2ZXJcIlxuaW1wb3J0IHsgcmV2YWxpZGF0ZVBhdGggfSBmcm9tIFwibmV4dC9jYWNoZVwiXG5pbXBvcnQgdHlwZSB7IENvbnZlcnNhdGlvbiwgTWVzc2FnZSwgQ29udmVyc2F0aW9uV2l0aERldGFpbHMsIE1lc3NhZ2VXaXRoU2VuZGVyIH0gZnJvbSBcIkBpbm1vY21zL3NoYXJlZFwiXG5cbi8qKlxuICogT2J0ZW5lciB0b2RhcyBsYXMgY29udmVyc2FjaW9uZXMgZGVsIHVzdWFyaW8gYWN0dWFsXG4gKiBjb24gZGV0YWxsZXMgZGUgcGFydGljaXBhbnRlcyB5IMO6bHRpbW8gbWVuc2FqZVxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q29udmVyc2F0aW9ucygpOiBQcm9taXNlPENvbnZlcnNhdGlvbldpdGhEZXRhaWxzW10+IHtcbiAgICBjb25zdCBzdXBhYmFzZSA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpXG4gICAgY29uc3QgdGVuYW50SWQgPSBhd2FpdCBnZXRUZW5hbnRJZChzdXBhYmFzZSlcblxuICAgIGNvbnN0IHsgZGF0YTogeyB1c2VyIH0gfSA9IGF3YWl0IHN1cGFiYXNlLmF1dGguZ2V0VXNlcigpXG5cbiAgICBpZiAoIXRlbmFudElkIHx8ICF1c2VyKSByZXR1cm4gW11cblxuICAgIC8vIE9idGVuZXIgY29udmVyc2FjaW9uZXMgZW4gbGFzIHF1ZSBwYXJ0aWNpcGEgZWwgdXN1YXJpb1xuICAgIGNvbnN0IHsgZGF0YTogcGFydGljaXBhdGlvbnMsIGVycm9yOiBwYXJ0aWNpcGF0aW9uRXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXG4gICAgICAgIC5mcm9tKFwiY29udmVyc2F0aW9uX3BhcnRpY2lwYW50c1wiKVxuICAgICAgICAuc2VsZWN0KGBcbiAgICAgICAgICAgIGNvbnZlcnNhdGlvbl9pZCxcbiAgICAgICAgICAgIGxhc3RfcmVhZF9hdCxcbiAgICAgICAgICAgIGNvbnZlcnNhdGlvbnMgKFxuICAgICAgICAgICAgICAgIGlkLFxuICAgICAgICAgICAgICAgIHRlbmFudF9pZCxcbiAgICAgICAgICAgICAgICBjcmVhdGVkX2F0LFxuICAgICAgICAgICAgICAgIHVwZGF0ZWRfYXQsXG4gICAgICAgICAgICAgICAgbGVhZF9pZFxuICAgICAgICAgICAgKVxuICAgICAgICBgKVxuICAgICAgICAuZXEoXCJ1c2VyX2lkXCIsIHVzZXIuaWQpXG5cbiAgICBpZiAocGFydGljaXBhdGlvbkVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyBjb252ZXJzYXRpb25zOlwiLCBwYXJ0aWNpcGF0aW9uRXJyb3IpXG4gICAgICAgIHJldHVybiBbXVxuICAgIH1cblxuICAgIGNvbnN0IGNvbnZlcnNhdGlvbnM6IENvbnZlcnNhdGlvbldpdGhEZXRhaWxzW10gPSBbXVxuXG4gICAgZm9yIChjb25zdCBwYXJ0aWNpcGF0aW9uIG9mIHBhcnRpY2lwYXRpb25zIHx8IFtdKSB7XG4gICAgICAgIGNvbnN0IGNvbnYgPSBwYXJ0aWNpcGF0aW9uLmNvbnZlcnNhdGlvbnMgYXMgdW5rbm93biBhcyBDb252ZXJzYXRpb25cbiAgICAgICAgaWYgKCFjb252KSBjb250aW51ZVxuXG4gICAgICAgIC8vIE9idGVuZXIgb3Ryb3MgcGFydGljaXBhbnRlc1xuICAgICAgICBjb25zdCB7IGRhdGE6IHBhcnRpY2lwYW50cywgZXJyb3I6IHBhcnRpY2lwYW50c0Vycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxuICAgICAgICAgICAgLmZyb20oXCJjb252ZXJzYXRpb25fcGFydGljaXBhbnRzXCIpXG4gICAgICAgICAgICAuc2VsZWN0KGBcbiAgICAgICAgICAgICAgICB1c2VyX2lkLFxuICAgICAgICAgICAgICAgIGpvaW5lZF9hdCxcbiAgICAgICAgICAgICAgICBwcm9maWxlcyAoXG4gICAgICAgICAgICAgICAgICAgIGlkLFxuICAgICAgICAgICAgICAgICAgICBlbWFpbCxcbiAgICAgICAgICAgICAgICAgICAgZnVsbF9uYW1lLFxuICAgICAgICAgICAgICAgICAgICBhdmF0YXJfdXJsXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgYClcbiAgICAgICAgICAgIC5lcShcImNvbnZlcnNhdGlvbl9pZFwiLCBjb252LmlkKVxuICAgICAgICAgICAgLm5lcShcInVzZXJfaWRcIiwgdXNlci5pZClcblxuICAgICAgICAvLyBPYnRlbmVyIMO6bHRpbW8gbWVuc2FqZVxuICAgICAgICBjb25zdCB7IGRhdGE6IGxhc3RNZXNzYWdlIH0gPSBhd2FpdCBzdXBhYmFzZVxuICAgICAgICAgICAgLmZyb20oXCJtZXNzYWdlc1wiKVxuICAgICAgICAgICAgLnNlbGVjdChgXG4gICAgICAgICAgICAgICAgaWQsXG4gICAgICAgICAgICAgICAgY29udmVyc2F0aW9uX2lkLFxuICAgICAgICAgICAgICAgIHNlbmRlcl9pZCxcbiAgICAgICAgICAgICAgICBjb250ZW50LFxuICAgICAgICAgICAgICAgIGNyZWF0ZWRfYXQsXG4gICAgICAgICAgICAgICAgcHJvZmlsZXM6c2VuZGVyX2lkIChcbiAgICAgICAgICAgICAgICAgICAgaWQsXG4gICAgICAgICAgICAgICAgICAgIGVtYWlsLFxuICAgICAgICAgICAgICAgICAgICBmdWxsX25hbWUsXG4gICAgICAgICAgICAgICAgICAgIGF2YXRhcl91cmxcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICBgKVxuICAgICAgICAgICAgLmVxKFwiY29udmVyc2F0aW9uX2lkXCIsIGNvbnYuaWQpXG4gICAgICAgICAgICAub3JkZXIoXCJjcmVhdGVkX2F0XCIsIHsgYXNjZW5kaW5nOiBmYWxzZSB9KVxuICAgICAgICAgICAgLmxpbWl0KDEpXG4gICAgICAgICAgICAuc2luZ2xlKClcblxuICAgICAgICAvLyBDYWxjdWxhciBtZW5zYWplcyBubyBsZcOtZG9zXG4gICAgICAgIGNvbnN0IHsgY291bnQ6IHVucmVhZENvdW50IH0gPSBhd2FpdCBzdXBhYmFzZVxuICAgICAgICAgICAgLmZyb20oXCJtZXNzYWdlc1wiKVxuICAgICAgICAgICAgLnNlbGVjdChcIipcIiwgeyBjb3VudDogJ2V4YWN0JywgaGVhZDogdHJ1ZSB9KVxuICAgICAgICAgICAgLmVxKFwiY29udmVyc2F0aW9uX2lkXCIsIGNvbnYuaWQpXG4gICAgICAgICAgICAubmVxKFwic2VuZGVyX2lkXCIsIHVzZXIuaWQpXG4gICAgICAgICAgICAuZ3QoXCJjcmVhdGVkX2F0XCIsIHBhcnRpY2lwYXRpb24ubGFzdF9yZWFkX2F0KVxuXG4gICAgICAgIGNvbnN0IG90aGVyVXNlciA9IHBhcnRpY2lwYW50cz8uWzBdPy5wcm9maWxlcyBhcyBhbnlcblxuICAgICAgICAvLyBGZXRjaCBsZWFkIGRldGFpbHMgaWYgaXQncyBhIGNsaWVudCBjb252ZXJzYXRpb25cbiAgICAgICAgbGV0IGxlYWREYXRhID0gbnVsbFxuICAgICAgICBpZiAoY29udi5sZWFkX2lkKSB7XG4gICAgICAgICAgICBjb25zdCB7IGRhdGE6IGxlYWQgfSA9IGF3YWl0IHN1cGFiYXNlXG4gICAgICAgICAgICAgICAgLmZyb20oXCJsZWFkc1wiKVxuICAgICAgICAgICAgICAgIC5zZWxlY3QoXCJpZCwgbmFtZSwgZW1haWwsIHBob25lLCBzdGF0dXNcIilcbiAgICAgICAgICAgICAgICAuZXEoXCJpZFwiLCBjb252LmxlYWRfaWQpXG4gICAgICAgICAgICAgICAgLnNpbmdsZSgpXG4gICAgICAgICAgICBsZWFkRGF0YSA9IGxlYWRcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnZlcnNhdGlvbnMucHVzaCh7XG4gICAgICAgICAgICAuLi5jb252LFxuICAgICAgICAgICAgbGFzdF9tZXNzYWdlOiBsYXN0TWVzc2FnZSA/IHtcbiAgICAgICAgICAgICAgICAuLi5sYXN0TWVzc2FnZSxcbiAgICAgICAgICAgICAgICBzZW5kZXI6IGxhc3RNZXNzYWdlLnByb2ZpbGVzIGFzIGFueVxuICAgICAgICAgICAgfSA6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIHVucmVhZF9jb3VudDogdW5yZWFkQ291bnQgfHwgMCxcbiAgICAgICAgICAgIG90aGVyX3VzZXI6IG90aGVyVXNlcixcbiAgICAgICAgICAgIGxlYWQ6IGxlYWREYXRhIGFzIGFueVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIC8vIE9yZGVuYXIgcG9yIMO6bHRpbWEgYWN0aXZpZGFkXG4gICAgY29udmVyc2F0aW9ucy5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgIGNvbnN0IGFUaW1lID0gYS5sYXN0X21lc3NhZ2U/LmNyZWF0ZWRfYXQgfHwgYS51cGRhdGVkX2F0XG4gICAgICAgIGNvbnN0IGJUaW1lID0gYi5sYXN0X21lc3NhZ2U/LmNyZWF0ZWRfYXQgfHwgYi51cGRhdGVkX2F0XG4gICAgICAgIHJldHVybiBuZXcgRGF0ZShiVGltZSkuZ2V0VGltZSgpIC0gbmV3IERhdGUoYVRpbWUpLmdldFRpbWUoKVxuICAgIH0pXG5cbiAgICByZXR1cm4gY29udmVyc2F0aW9uc1xufVxuXG4vKipcbiAqIE9idGVuZXIgbWVuc2FqZXMgZGUgdW5hIGNvbnZlcnNhY2nDs24gZXNwZWPDrWZpY2FcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldE1lc3NhZ2VzKGNvbnZlcnNhdGlvbklkOiBzdHJpbmcpOiBQcm9taXNlPE1lc3NhZ2VXaXRoU2VuZGVyW10+IHtcbiAgICBjb25zdCBzdXBhYmFzZSA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpXG4gICAgY29uc3QgeyBkYXRhOiB7IHVzZXIgfSB9ID0gYXdhaXQgc3VwYWJhc2UuYXV0aC5nZXRVc2VyKClcblxuICAgIGlmICghdXNlcikgcmV0dXJuIFtdXG5cbiAgICAvLyBWZXJpZmljYXIgcXVlIGVsIHVzdWFyaW8gZXMgcGFydGljaXBhbnRlIGRlIGxhIGNvbnZlcnNhY2nDs25cbiAgICBjb25zdCB7IGRhdGE6IHBhcnRpY2lwYXRpb24gfSA9IGF3YWl0IHN1cGFiYXNlXG4gICAgICAgIC5mcm9tKFwiY29udmVyc2F0aW9uX3BhcnRpY2lwYW50c1wiKVxuICAgICAgICAuc2VsZWN0KFwiY29udmVyc2F0aW9uX2lkXCIpXG4gICAgICAgIC5lcShcImNvbnZlcnNhdGlvbl9pZFwiLCBjb252ZXJzYXRpb25JZClcbiAgICAgICAgLmVxKFwidXNlcl9pZFwiLCB1c2VyLmlkKVxuICAgICAgICAuc2luZ2xlKClcblxuICAgIGlmICghcGFydGljaXBhdGlvbikge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiVXNlciBpcyBub3QgYSBwYXJ0aWNpcGFudCBvZiB0aGlzIGNvbnZlcnNhdGlvblwiKVxuICAgICAgICByZXR1cm4gW11cbiAgICB9XG5cbiAgICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxuICAgICAgICAuZnJvbShcIm1lc3NhZ2VzXCIpXG4gICAgICAgIC5zZWxlY3QoYFxuICAgICAgICAgICAgaWQsXG4gICAgICAgICAgICBjb252ZXJzYXRpb25faWQsXG4gICAgICAgICAgICBzZW5kZXJfaWQsXG4gICAgICAgICAgICBjb250ZW50LFxuICAgICAgICAgICAgY3JlYXRlZF9hdCxcbiAgICAgICAgICAgIHByb2ZpbGVzOnNlbmRlcl9pZCAoXG4gICAgICAgICAgICAgICAgaWQsXG4gICAgICAgICAgICAgICAgZW1haWwsXG4gICAgICAgICAgICAgICAgZnVsbF9uYW1lLFxuICAgICAgICAgICAgICAgIGF2YXRhcl91cmxcbiAgICAgICAgICAgIClcbiAgICAgICAgYClcbiAgICAgICAgLmVxKFwiY29udmVyc2F0aW9uX2lkXCIsIGNvbnZlcnNhdGlvbklkKVxuICAgICAgICAub3JkZXIoXCJjcmVhdGVkX2F0XCIsIHsgYXNjZW5kaW5nOiB0cnVlIH0pXG5cbiAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIG1lc3NhZ2VzOlwiLCBlcnJvcilcbiAgICAgICAgcmV0dXJuIFtdXG4gICAgfVxuXG4gICAgcmV0dXJuIGRhdGEubWFwKG1zZyA9PiAoe1xuICAgICAgICAuLi5tc2csXG4gICAgICAgIHNlbmRlcjogbXNnLnByb2ZpbGVzIGFzIGFueVxuICAgIH0pKVxufVxuXG4vKipcbiAqIEVudmlhciB1biBtZW5zYWplIGEgdW5hIGNvbnZlcnNhY2nDs25cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNlbmRNZXNzYWdlKGNvbnZlcnNhdGlvbklkOiBzdHJpbmcsIGNvbnRlbnQ6IHN0cmluZywgcmV2YWxpZGF0ZSA9IHRydWUpOiBQcm9taXNlPE1lc3NhZ2UgfCBudWxsPiB7XG4gICAgY29uc3Qgc3VwYWJhc2UgPSBhd2FpdCBjcmVhdGVDbGllbnQoKVxuICAgIGNvbnN0IHsgZGF0YTogeyB1c2VyIH0gfSA9IGF3YWl0IHN1cGFiYXNlLmF1dGguZ2V0VXNlcigpXG5cbiAgICBpZiAoIXVzZXIgfHwgIWNvbnRlbnQudHJpbSgpKSByZXR1cm4gbnVsbFxuXG4gICAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcbiAgICAgICAgLmZyb20oXCJtZXNzYWdlc1wiKVxuICAgICAgICAuaW5zZXJ0KHtcbiAgICAgICAgICAgIGNvbnZlcnNhdGlvbl9pZDogY29udmVyc2F0aW9uSWQsXG4gICAgICAgICAgICBzZW5kZXJfaWQ6IHVzZXIuaWQsXG4gICAgICAgICAgICBjb250ZW50OiBjb250ZW50LnRyaW0oKVxuICAgICAgICB9KVxuICAgICAgICAuc2VsZWN0KClcbiAgICAgICAgLnNpbmdsZSgpXG5cbiAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkRFQlVHOiBFcnJvciBzZW5kaW5nIG1lc3NhZ2U6XCIsIHtcbiAgICAgICAgICAgIGVycm9yLFxuICAgICAgICAgICAgY29udmVyc2F0aW9uSWQsXG4gICAgICAgICAgICB1c2VySWQ6IHVzZXIuaWRcbiAgICAgICAgfSlcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycm9yLm1lc3NhZ2UpXG4gICAgfVxuXG4gICAgaWYgKHJldmFsaWRhdGUpIHtcbiAgICAgICAgcmV2YWxpZGF0ZVBhdGgoXCIvbWVuc2FqZXNcIilcbiAgICB9XG4gICAgcmV0dXJuIGRhdGFcbn1cblxuLyoqXG4gKiBNYXJjYXIgY29udmVyc2FjacOzbiBjb21vIGxlw61kYVxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbWFya0FzUmVhZChjb252ZXJzYXRpb25JZDogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgY29uc3Qgc3VwYWJhc2UgPSBhd2FpdCBjcmVhdGVDbGllbnQoKVxuICAgIGNvbnN0IHsgZGF0YTogeyB1c2VyIH0gfSA9IGF3YWl0IHN1cGFiYXNlLmF1dGguZ2V0VXNlcigpXG5cbiAgICBpZiAoIXVzZXIpIHJldHVyblxuXG4gICAgY29uc3QgeyBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcbiAgICAgICAgLmZyb20oXCJjb252ZXJzYXRpb25fcGFydGljaXBhbnRzXCIpXG4gICAgICAgIC51cGRhdGUoeyBsYXN0X3JlYWRfYXQ6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSB9KVxuICAgICAgICAuZXEoXCJjb252ZXJzYXRpb25faWRcIiwgY29udmVyc2F0aW9uSWQpXG4gICAgICAgIC5lcShcInVzZXJfaWRcIiwgdXNlci5pZClcblxuICAgIGlmIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgbWFya2luZyBhcyByZWFkOlwiLCBlcnJvcilcbiAgICB9XG5cbiAgICByZXZhbGlkYXRlUGF0aChcIi9tZW5zYWplc1wiKVxufVxuXG4vKipcbiAqIE9idGVuZXIgbyBjcmVhciB1bmEgY29udmVyc2FjacOzbiBjb24gb3RybyB1c3VhcmlvXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRPckNyZWF0ZUNvbnZlcnNhdGlvbihvdGhlclVzZXJJZDogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmcgfCBudWxsPiB7XG4gICAgY29uc3Qgc3VwYWJhc2UgPSBhd2FpdCBjcmVhdGVDbGllbnQoKVxuICAgIGNvbnN0IHRlbmFudElkID0gYXdhaXQgZ2V0VGVuYW50SWQoc3VwYWJhc2UpXG4gICAgY29uc3QgeyBkYXRhOiB7IHVzZXIgfSB9ID0gYXdhaXQgc3VwYWJhc2UuYXV0aC5nZXRVc2VyKClcblxuICAgIGlmICghdGVuYW50SWQgfHwgIXVzZXIpIHJldHVybiBudWxsXG5cbiAgICAvLyBCdXNjYXIgY29udmVyc2FjacOzbiBleGlzdGVudGUgZW50cmUgZXN0b3MgZG9zIHVzdWFyaW9zXG4gICAgY29uc3QgeyBkYXRhOiBleGlzdGluZ1BhcnRpY2lwYXRpb25zIH0gPSBhd2FpdCBzdXBhYmFzZVxuICAgICAgICAuZnJvbShcImNvbnZlcnNhdGlvbl9wYXJ0aWNpcGFudHNcIilcbiAgICAgICAgLnNlbGVjdChcImNvbnZlcnNhdGlvbl9pZFwiKVxuICAgICAgICAuZXEoXCJ1c2VyX2lkXCIsIHVzZXIuaWQpXG5cbiAgICBpZiAoZXhpc3RpbmdQYXJ0aWNpcGF0aW9ucykge1xuICAgICAgICBmb3IgKGNvbnN0IHBhcnRpY2lwYXRpb24gb2YgZXhpc3RpbmdQYXJ0aWNpcGF0aW9ucykge1xuICAgICAgICAgICAgY29uc3QgeyBkYXRhOiBvdGhlclBhcnRpY2lwYXRpb24gfSA9IGF3YWl0IHN1cGFiYXNlXG4gICAgICAgICAgICAgICAgLmZyb20oXCJjb252ZXJzYXRpb25fcGFydGljaXBhbnRzXCIpXG4gICAgICAgICAgICAgICAgLnNlbGVjdChcInVzZXJfaWRcIilcbiAgICAgICAgICAgICAgICAuZXEoXCJjb252ZXJzYXRpb25faWRcIiwgcGFydGljaXBhdGlvbi5jb252ZXJzYXRpb25faWQpXG4gICAgICAgICAgICAgICAgLmVxKFwidXNlcl9pZFwiLCBvdGhlclVzZXJJZClcbiAgICAgICAgICAgICAgICAuc2luZ2xlKClcblxuICAgICAgICAgICAgaWYgKG90aGVyUGFydGljaXBhdGlvbikge1xuICAgICAgICAgICAgICAgIHJldHVybiBwYXJ0aWNpcGF0aW9uLmNvbnZlcnNhdGlvbl9pZFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gQ3JlYXIgbnVldmEgY29udmVyc2FjacOzblxuICAgIGNvbnN0IHsgZGF0YTogbmV3Q29udmVyc2F0aW9uLCBlcnJvcjogY29udkVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxuICAgICAgICAuZnJvbShcImNvbnZlcnNhdGlvbnNcIilcbiAgICAgICAgLmluc2VydCh7IHRlbmFudF9pZDogdGVuYW50SWQgfSlcbiAgICAgICAgLnNlbGVjdCgpXG4gICAgICAgIC5zaW5nbGUoKVxuXG4gICAgaWYgKGNvbnZFcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgY3JlYXRpbmcgY29udmVyc2F0aW9uOlwiLCBjb252RXJyb3IpXG4gICAgICAgIHJldHVybiBudWxsXG4gICAgfVxuXG4gICAgLy8gQWdyZWdhciBwYXJ0aWNpcGFudGVzXG4gICAgY29uc3QgeyBlcnJvcjogcGFydGljaXBhbnRzRXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXG4gICAgICAgIC5mcm9tKFwiY29udmVyc2F0aW9uX3BhcnRpY2lwYW50c1wiKVxuICAgICAgICAuaW5zZXJ0KFtcbiAgICAgICAgICAgIHsgY29udmVyc2F0aW9uX2lkOiBuZXdDb252ZXJzYXRpb24uaWQsIHVzZXJfaWQ6IHVzZXIuaWQgfSxcbiAgICAgICAgICAgIHsgY29udmVyc2F0aW9uX2lkOiBuZXdDb252ZXJzYXRpb24uaWQsIHVzZXJfaWQ6IG90aGVyVXNlcklkIH1cbiAgICAgICAgXSlcblxuICAgIGlmIChwYXJ0aWNpcGFudHNFcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgYWRkaW5nIHBhcnRpY2lwYW50czpcIiwgcGFydGljaXBhbnRzRXJyb3IpXG4gICAgICAgIHJldHVybiBudWxsXG4gICAgfVxuXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvbWVuc2FqZXNcIilcbiAgICByZXR1cm4gbmV3Q29udmVyc2F0aW9uLmlkXG59XG5cbi8qKlxuICogT2J0ZW5lciBsaXN0YSBkZSB1c3VhcmlvcyBkZWwgdGVuYW50IChwYXJhIGluaWNpYXIgY29udmVyc2FjaW9uZXMpXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRUZW5hbnRVc2VycygpIHtcbiAgICBjb25zdCBzdXBhYmFzZSA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpXG4gICAgY29uc3QgdGVuYW50SWQgPSBhd2FpdCBnZXRUZW5hbnRJZChzdXBhYmFzZSlcbiAgICBjb25zdCB7IGRhdGE6IHsgdXNlciB9IH0gPSBhd2FpdCBzdXBhYmFzZS5hdXRoLmdldFVzZXIoKVxuXG4gICAgaWYgKCF0ZW5hbnRJZCB8fCAhdXNlcikgcmV0dXJuIFtdXG5cbiAgICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxuICAgICAgICAuZnJvbShcInByb2ZpbGVzXCIpXG4gICAgICAgIC5zZWxlY3QoXCJpZCwgZW1haWwsIGZ1bGxfbmFtZSwgYXZhdGFyX3VybFwiKVxuICAgICAgICAuZXEoXCJ0ZW5hbnRfaWRcIiwgdGVuYW50SWQpXG4gICAgICAgIC5uZXEoXCJpZFwiLCB1c2VyLmlkKSAvLyBFeGNsdWlyIGFsIHVzdWFyaW8gYWN0dWFsXG5cbiAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIHRlbmFudCB1c2VyczpcIiwgZXJyb3IpXG4gICAgICAgIHJldHVybiBbXVxuICAgIH1cblxuICAgIHJldHVybiBkYXRhXG59XG5cbi8qKlxuICogT2J0ZW5lciBsaXN0YSBkZSBMZWFkcyBkZWwgdGVuYW50IChwYXJhIGluaWNpYXIgY29udmVyc2FjaW9uZXMgY29uIGNsaWVudGVzKVxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0TGVhZHNGb3JNZXNzYWdpbmcoKSB7XG4gICAgY29uc3Qgc3VwYWJhc2UgPSBhd2FpdCBjcmVhdGVDbGllbnQoKVxuICAgIGNvbnN0IHRlbmFudElkID0gYXdhaXQgZ2V0VGVuYW50SWQoc3VwYWJhc2UpXG5cbiAgICBpZiAoIXRlbmFudElkKSByZXR1cm4gW11cblxuICAgIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXG4gICAgICAgIC5mcm9tKFwibGVhZHNcIilcbiAgICAgICAgLnNlbGVjdChcImlkLCBuYW1lLCBlbWFpbCwgcGhvbmUsIHN0YXR1c1wiKVxuICAgICAgICAuZXEoXCJ0ZW5hbnRfaWRcIiwgdGVuYW50SWQpXG4gICAgICAgIC5vcmRlcihcIm5hbWVcIilcblxuICAgIGlmIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgbGVhZHMgZm9yIG1lc3NhZ2luZzpcIiwgZXJyb3IpXG4gICAgICAgIHJldHVybiBbXVxuICAgIH1cblxuICAgIHJldHVybiBkYXRhXG59XG5cbi8qKlxuICogT2J0ZW5lciBvIGNyZWFyIHVuYSBjb252ZXJzYWNpw7NuIGNvbiB1biBMZWFkXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRPckNyZWF0ZUxlYWRDb252ZXJzYXRpb24obGVhZElkOiBzdHJpbmcsIHJldmFsaWRhdGUgPSB0cnVlKTogUHJvbWlzZTxzdHJpbmcgfCBudWxsPiB7XG4gICAgY29uc3Qgc3VwYWJhc2UgPSBhd2FpdCBjcmVhdGVDbGllbnQoKVxuICAgIGNvbnN0IHRlbmFudElkID0gYXdhaXQgZ2V0VGVuYW50SWQoc3VwYWJhc2UpXG4gICAgY29uc3QgeyBkYXRhOiB7IHVzZXIgfSB9ID0gYXdhaXQgc3VwYWJhc2UuYXV0aC5nZXRVc2VyKClcblxuICAgIGlmICghdGVuYW50SWQgfHwgIXVzZXIpIHJldHVybiBudWxsXG5cbiAgICAvLyBCdXNjYXIgY29udmVyc2FjacOzbiBleGlzdGVudGUgcGFyYSBlc3RlIExlYWRcbiAgICBjb25zdCB7IGRhdGE6IGV4aXN0aW5nQ29udmVyc2F0aW9uIH0gPSBhd2FpdCBzdXBhYmFzZVxuICAgICAgICAuZnJvbShcImNvbnZlcnNhdGlvbnNcIilcbiAgICAgICAgLnNlbGVjdChcImlkXCIpXG4gICAgICAgIC5lcShcImxlYWRfaWRcIiwgbGVhZElkKVxuICAgICAgICAuc2luZ2xlKClcblxuICAgIGlmIChleGlzdGluZ0NvbnZlcnNhdGlvbikge1xuICAgICAgICAvLyBBc2VndXJhcnNlIGRlIHF1ZSBlbCB1c3VhcmlvIGFjdHVhbCBlcyBwYXJ0aWNpcGFudGVcbiAgICAgICAgY29uc3QgeyBkYXRhOiBpc1BhcnRpY2lwYW50IH0gPSBhd2FpdCBzdXBhYmFzZVxuICAgICAgICAgICAgLmZyb20oXCJjb252ZXJzYXRpb25fcGFydGljaXBhbnRzXCIpXG4gICAgICAgICAgICAuc2VsZWN0KFwiY29udmVyc2F0aW9uX2lkXCIpXG4gICAgICAgICAgICAuZXEoXCJjb252ZXJzYXRpb25faWRcIiwgZXhpc3RpbmdDb252ZXJzYXRpb24uaWQpXG4gICAgICAgICAgICAuZXEoXCJ1c2VyX2lkXCIsIHVzZXIuaWQpXG4gICAgICAgICAgICAuc2luZ2xlKClcblxuICAgICAgICBpZiAoIWlzUGFydGljaXBhbnQpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBERUJVRzogQWRkaW5nIGFnZW50ICR7dXNlci5pZH0gdG8gbGVhZCBjb252ZXJzYXRpb24gJHtleGlzdGluZ0NvbnZlcnNhdGlvbi5pZH1gKVxuICAgICAgICAgICAgYXdhaXQgc3VwYWJhc2VcbiAgICAgICAgICAgICAgICAuZnJvbShcImNvbnZlcnNhdGlvbl9wYXJ0aWNpcGFudHNcIilcbiAgICAgICAgICAgICAgICAuaW5zZXJ0KHtcbiAgICAgICAgICAgICAgICAgICAgY29udmVyc2F0aW9uX2lkOiBleGlzdGluZ0NvbnZlcnNhdGlvbi5pZCxcbiAgICAgICAgICAgICAgICAgICAgdXNlcl9pZDogdXNlci5pZFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZXhpc3RpbmdDb252ZXJzYXRpb24uaWRcbiAgICB9XG5cbiAgICAvLyBDcmVhciBudWV2YSBjb252ZXJzYWNpw7NuIHZpbmN1bGFkYSBhbCBMZWFkXG4gICAgY29uc3QgeyBkYXRhOiBuZXdDb252ZXJzYXRpb24sIGVycm9yOiBjb252RXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXG4gICAgICAgIC5mcm9tKFwiY29udmVyc2F0aW9uc1wiKVxuICAgICAgICAuaW5zZXJ0KHtcbiAgICAgICAgICAgIHRlbmFudF9pZDogdGVuYW50SWQsXG4gICAgICAgICAgICBsZWFkX2lkOiBsZWFkSWRcbiAgICAgICAgfSlcbiAgICAgICAgLnNlbGVjdCgpXG4gICAgICAgIC5zaW5nbGUoKVxuXG4gICAgaWYgKGNvbnZFcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgY3JlYXRpbmcgbGVhZCBjb252ZXJzYXRpb246XCIsIGNvbnZFcnJvcilcbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG5cbiAgICAvLyBBZ3JlZ2FyIGFsIHVzdWFyaW8gYWN0dWFsIGNvbW8gcGFydGljaXBhbnRlXG4gICAgY29uc3QgeyBlcnJvcjogcGFydGljaXBhbnRFcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcbiAgICAgICAgLmZyb20oXCJjb252ZXJzYXRpb25fcGFydGljaXBhbnRzXCIpXG4gICAgICAgIC5pbnNlcnQoeyBjb252ZXJzYXRpb25faWQ6IG5ld0NvbnZlcnNhdGlvbi5pZCwgdXNlcl9pZDogdXNlci5pZCB9KVxuXG4gICAgaWYgKHBhcnRpY2lwYW50RXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGFkZGluZyBwYXJ0aWNpcGFudCB0byBsZWFkIGNvbnZlcnNhdGlvbjpcIiwgcGFydGljaXBhbnRFcnJvcilcbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG5cbiAgICBpZiAocmV2YWxpZGF0ZSkge1xuICAgICAgICByZXZhbGlkYXRlUGF0aChcIi9tZW5zYWplc1wiKVxuICAgIH1cbiAgICByZXR1cm4gbmV3Q29udmVyc2F0aW9uLmlkXG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6ImdUQXNWc0Isd01BQUEifQ==
}),
"[project]/apps/web/components/messages/new-chat-dialog.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NewChatDialog",
    ()=>NewChatDialog
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/components/ui/dialog.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/components/ui/input.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/components/ui/avatar.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/components/ui/tabs.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-ssr] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__UserPlus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user-plus.js [app-ssr] (ecmascript) <export default as UserPlus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-ssr] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-ssr] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$data$3a$eb534d__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/apps/web/app/actions/data:eb534d [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$data$3a$3e80e2__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/apps/web/app/actions/data:3e80e2 [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$data$3a$54c8cc__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/apps/web/app/actions/data:54c8cc [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$data$3a$b2d919__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/apps/web/app/actions/data:b2d919 [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
;
function NewChatDialog({ open, onOpenChange, onConversationCreated }) {
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("team");
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [teamUsers, setTeamUsers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [leads, setLeads] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isCreating, setIsCreating] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (open) {
            loadData();
        }
    }, [
        open
    ]);
    const loadData = async ()=>{
        setIsLoading(true);
        try {
            const [users, leadList] = await Promise.all([
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$data$3a$eb534d__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getTenantUsers"])(),
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$data$3a$3e80e2__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getLeadsForMessaging"])()
            ]);
            setTeamUsers(users);
            setLeads(leadList);
        } catch (error) {
            console.error("Error loading chat data:", error);
        } finally{
            setIsLoading(false);
        }
    };
    const handleCreateChat = async (id, type)=>{
        setIsCreating(true);
        try {
            let convId = null;
            if (type === "team") {
                convId = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$data$3a$54c8cc__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getOrCreateConversation"])(id);
            } else {
                convId = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$data$3a$b2d919__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getOrCreateLeadConversation"])(id);
            }
            if (convId) {
                onConversationCreated(convId);
                onOpenChange(false);
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error("No se pudo iniciar la conversación");
            }
        } catch (error) {
            console.error("Error creating chat:", error);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error("Ocurrió un error inesperado");
        } finally{
            setIsCreating(false);
        }
    };
    const filteredTeam = teamUsers.filter((u)=>u.full_name?.toLowerCase().includes(searchQuery.toLowerCase()) || u.email?.toLowerCase().includes(searchQuery.toLowerCase()));
    const filteredLeads = leads.filter((l)=>l.name?.toLowerCase().includes(searchQuery.toLowerCase()) || l.email?.toLowerCase().includes(searchQuery.toLowerCase()));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Dialog"], {
        open: open,
        onOpenChange: onOpenChange,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogContent"], {
            className: "sm:max-w-[425px] p-0 overflow-hidden rounded-[2rem] border-none shadow-2xl",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogHeader"], {
                    className: "p-6 bg-gray-50/50",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogTitle"], {
                            className: "text-2xl font-black text-gray-900",
                            children: "Nuevo Mensaje"
                        }, void 0, false, {
                            fileName: "[project]/apps/web/components/messages/new-chat-dialog.tsx",
                            lineNumber: 87,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogDescription"], {
                            className: "text-gray-500 font-medium",
                            children: "Selecciona un colega o cliente para iniciar un chat."
                        }, void 0, false, {
                            fileName: "[project]/apps/web/components/messages/new-chat-dialog.tsx",
                            lineNumber: 88,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/components/messages/new-chat-dialog.tsx",
                    lineNumber: 86,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-6 space-y-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                    className: "absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400"
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/components/messages/new-chat-dialog.tsx",
                                    lineNumber: 95,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                    placeholder: "Buscar por nombre...",
                                    value: searchQuery,
                                    onChange: (e)=>setSearchQuery(e.target.value),
                                    className: "pl-9 h-11 bg-gray-50 border-transparent rounded-xl focus:bg-white focus:border-blue-100 transition-all font-medium"
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/components/messages/new-chat-dialog.tsx",
                                    lineNumber: 96,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/components/messages/new-chat-dialog.tsx",
                            lineNumber: 94,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tabs"], {
                            value: activeTab,
                            onValueChange: (v)=>setActiveTab(v),
                            className: "w-full",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TabsList"], {
                                    className: "grid w-full grid-cols-2 p-1 bg-gray-100 rounded-2xl h-12",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TabsTrigger"], {
                                            value: "team",
                                            className: "rounded-xl font-bold data-[state=active]:bg-white data-[state=active]:shadow-sm",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                                    className: "h-4 w-4 mr-2"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/components/messages/new-chat-dialog.tsx",
                                                    lineNumber: 107,
                                                    columnNumber: 33
                                                }, this),
                                                "Equipo"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/web/components/messages/new-chat-dialog.tsx",
                                            lineNumber: 106,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TabsTrigger"], {
                                            value: "leads",
                                            className: "rounded-xl font-bold data-[state=active]:bg-white data-[state=active]:shadow-sm",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__UserPlus$3e$__["UserPlus"], {
                                                    className: "h-4 w-4 mr-2"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/components/messages/new-chat-dialog.tsx",
                                                    lineNumber: 111,
                                                    columnNumber: 33
                                                }, this),
                                                "Clientes"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/web/components/messages/new-chat-dialog.tsx",
                                            lineNumber: 110,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/components/messages/new-chat-dialog.tsx",
                                    lineNumber: 105,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TabsContent"], {
                                            value: "team",
                                            className: "m-0",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "max-h-[300px] overflow-y-auto space-y-1",
                                                children: isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-center p-8",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                        className: "h-6 w-6 text-blue-500 animate-spin"
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/components/messages/new-chat-dialog.tsx",
                                                        lineNumber: 121,
                                                        columnNumber: 45
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/components/messages/new-chat-dialog.tsx",
                                                    lineNumber: 120,
                                                    columnNumber: 41
                                                }, this) : filteredTeam.length > 0 ? filteredTeam.map((user)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        disabled: isCreating,
                                                        onClick: ()=>handleCreateChat(user.id, "team"),
                                                        className: "w-full flex items-center gap-3 p-3 rounded-2xl hover:bg-blue-50 transition-all text-left group disabled:opacity-50",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Avatar"], {
                                                                className: "h-10 w-10",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AvatarFallback"], {
                                                                    className: "bg-blue-100 text-blue-600 font-bold",
                                                                    children: user.full_name?.[0] || user.email?.[0]
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/web/components/messages/new-chat-dialog.tsx",
                                                                    lineNumber: 132,
                                                                    columnNumber: 53
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/apps/web/components/messages/new-chat-dialog.tsx",
                                                                lineNumber: 131,
                                                                columnNumber: 49
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex-1 min-w-0",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-sm font-bold text-gray-900 group-hover:text-blue-700",
                                                                        children: user.full_name || 'Agente'
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/apps/web/components/messages/new-chat-dialog.tsx",
                                                                        lineNumber: 137,
                                                                        columnNumber: 53
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-xs text-gray-500 truncate",
                                                                        children: user.email
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/apps/web/components/messages/new-chat-dialog.tsx",
                                                                        lineNumber: 138,
                                                                        columnNumber: 53
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/apps/web/components/messages/new-chat-dialog.tsx",
                                                                lineNumber: 136,
                                                                columnNumber: 49
                                                            }, this)
                                                        ]
                                                    }, user.id, true, {
                                                        fileName: "[project]/apps/web/components/messages/new-chat-dialog.tsx",
                                                        lineNumber: 125,
                                                        columnNumber: 45
                                                    }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-center p-8 text-sm text-gray-400",
                                                    children: "No se encontraron colegas"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/components/messages/new-chat-dialog.tsx",
                                                    lineNumber: 143,
                                                    columnNumber: 41
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/components/messages/new-chat-dialog.tsx",
                                                lineNumber: 118,
                                                columnNumber: 33
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/components/messages/new-chat-dialog.tsx",
                                            lineNumber: 117,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TabsContent"], {
                                            value: "leads",
                                            className: "m-0",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "max-h-[300px] overflow-y-auto space-y-1",
                                                children: isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-center p-8",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                        className: "h-6 w-6 text-blue-500 animate-spin"
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/components/messages/new-chat-dialog.tsx",
                                                        lineNumber: 152,
                                                        columnNumber: 45
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/components/messages/new-chat-dialog.tsx",
                                                    lineNumber: 151,
                                                    columnNumber: 41
                                                }, this) : filteredLeads.length > 0 ? filteredLeads.map((lead)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        disabled: isCreating,
                                                        onClick: ()=>handleCreateChat(lead.id, "leads"),
                                                        className: "w-full flex items-center gap-3 p-3 rounded-2xl hover:bg-blue-50 transition-all text-left group disabled:opacity-50",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Avatar"], {
                                                                className: "h-10 w-10",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AvatarFallback"], {
                                                                    className: "bg-amber-100 text-amber-600 font-bold",
                                                                    children: lead.name?.[0]
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/web/components/messages/new-chat-dialog.tsx",
                                                                    lineNumber: 163,
                                                                    columnNumber: 53
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/apps/web/components/messages/new-chat-dialog.tsx",
                                                                lineNumber: 162,
                                                                columnNumber: 49
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex-1 min-w-0",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-sm font-bold text-gray-900 group-hover:text-blue-700",
                                                                        children: lead.name
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/apps/web/components/messages/new-chat-dialog.tsx",
                                                                        lineNumber: 168,
                                                                        columnNumber: 53
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-xs text-gray-500 truncate",
                                                                        children: lead.email || lead.phone || 'Sin contacto'
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/apps/web/components/messages/new-chat-dialog.tsx",
                                                                        lineNumber: 169,
                                                                        columnNumber: 53
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/apps/web/components/messages/new-chat-dialog.tsx",
                                                                lineNumber: 167,
                                                                columnNumber: 49
                                                            }, this)
                                                        ]
                                                    }, lead.id, true, {
                                                        fileName: "[project]/apps/web/components/messages/new-chat-dialog.tsx",
                                                        lineNumber: 156,
                                                        columnNumber: 45
                                                    }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-center p-8 text-sm text-gray-400",
                                                    children: "No se encontraron clientes"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/components/messages/new-chat-dialog.tsx",
                                                    lineNumber: 174,
                                                    columnNumber: 41
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/components/messages/new-chat-dialog.tsx",
                                                lineNumber: 149,
                                                columnNumber: 33
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/components/messages/new-chat-dialog.tsx",
                                            lineNumber: 148,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/components/messages/new-chat-dialog.tsx",
                                    lineNumber: 116,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/components/messages/new-chat-dialog.tsx",
                            lineNumber: 104,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/components/messages/new-chat-dialog.tsx",
                    lineNumber: 93,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-4 bg-gray-50 border-t border-gray-100 mt-auto",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                        variant: "ghost",
                        onClick: ()=>onOpenChange(false),
                        className: "w-full font-bold text-gray-500 hover:text-gray-900",
                        children: "Cancelar"
                    }, void 0, false, {
                        fileName: "[project]/apps/web/components/messages/new-chat-dialog.tsx",
                        lineNumber: 183,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/apps/web/components/messages/new-chat-dialog.tsx",
                    lineNumber: 182,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/apps/web/components/messages/new-chat-dialog.tsx",
            lineNumber: 85,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/web/components/messages/new-chat-dialog.tsx",
        lineNumber: 84,
        columnNumber: 9
    }, this);
}
}),
"[project]/apps/web/app/actions/data:5f1b80 [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getMessages",
    ()=>$$RSC_SERVER_ACTION_1
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"40cb2d3f0a371190f0196aa0c7a3e092f01fcfe214":"getMessages"},"apps/web/app/actions/messages.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("40cb2d3f0a371190f0196aa0c7a3e092f01fcfe214", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "getMessages");
;
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vbWVzc2FnZXMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc2VydmVyXCJcblxuaW1wb3J0IHsgY3JlYXRlQ2xpZW50LCBnZXRUZW5hbnRJZCB9IGZyb20gXCJAL2xpYi9zdXBhYmFzZS9zZXJ2ZXJcIlxuaW1wb3J0IHsgcmV2YWxpZGF0ZVBhdGggfSBmcm9tIFwibmV4dC9jYWNoZVwiXG5pbXBvcnQgdHlwZSB7IENvbnZlcnNhdGlvbiwgTWVzc2FnZSwgQ29udmVyc2F0aW9uV2l0aERldGFpbHMsIE1lc3NhZ2VXaXRoU2VuZGVyIH0gZnJvbSBcIkBpbm1vY21zL3NoYXJlZFwiXG5cbi8qKlxuICogT2J0ZW5lciB0b2RhcyBsYXMgY29udmVyc2FjaW9uZXMgZGVsIHVzdWFyaW8gYWN0dWFsXG4gKiBjb24gZGV0YWxsZXMgZGUgcGFydGljaXBhbnRlcyB5IMO6bHRpbW8gbWVuc2FqZVxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q29udmVyc2F0aW9ucygpOiBQcm9taXNlPENvbnZlcnNhdGlvbldpdGhEZXRhaWxzW10+IHtcbiAgICBjb25zdCBzdXBhYmFzZSA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpXG4gICAgY29uc3QgdGVuYW50SWQgPSBhd2FpdCBnZXRUZW5hbnRJZChzdXBhYmFzZSlcblxuICAgIGNvbnN0IHsgZGF0YTogeyB1c2VyIH0gfSA9IGF3YWl0IHN1cGFiYXNlLmF1dGguZ2V0VXNlcigpXG5cbiAgICBpZiAoIXRlbmFudElkIHx8ICF1c2VyKSByZXR1cm4gW11cblxuICAgIC8vIE9idGVuZXIgY29udmVyc2FjaW9uZXMgZW4gbGFzIHF1ZSBwYXJ0aWNpcGEgZWwgdXN1YXJpb1xuICAgIGNvbnN0IHsgZGF0YTogcGFydGljaXBhdGlvbnMsIGVycm9yOiBwYXJ0aWNpcGF0aW9uRXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXG4gICAgICAgIC5mcm9tKFwiY29udmVyc2F0aW9uX3BhcnRpY2lwYW50c1wiKVxuICAgICAgICAuc2VsZWN0KGBcbiAgICAgICAgICAgIGNvbnZlcnNhdGlvbl9pZCxcbiAgICAgICAgICAgIGxhc3RfcmVhZF9hdCxcbiAgICAgICAgICAgIGNvbnZlcnNhdGlvbnMgKFxuICAgICAgICAgICAgICAgIGlkLFxuICAgICAgICAgICAgICAgIHRlbmFudF9pZCxcbiAgICAgICAgICAgICAgICBjcmVhdGVkX2F0LFxuICAgICAgICAgICAgICAgIHVwZGF0ZWRfYXQsXG4gICAgICAgICAgICAgICAgbGVhZF9pZFxuICAgICAgICAgICAgKVxuICAgICAgICBgKVxuICAgICAgICAuZXEoXCJ1c2VyX2lkXCIsIHVzZXIuaWQpXG5cbiAgICBpZiAocGFydGljaXBhdGlvbkVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyBjb252ZXJzYXRpb25zOlwiLCBwYXJ0aWNpcGF0aW9uRXJyb3IpXG4gICAgICAgIHJldHVybiBbXVxuICAgIH1cblxuICAgIGNvbnN0IGNvbnZlcnNhdGlvbnM6IENvbnZlcnNhdGlvbldpdGhEZXRhaWxzW10gPSBbXVxuXG4gICAgZm9yIChjb25zdCBwYXJ0aWNpcGF0aW9uIG9mIHBhcnRpY2lwYXRpb25zIHx8IFtdKSB7XG4gICAgICAgIGNvbnN0IGNvbnYgPSBwYXJ0aWNpcGF0aW9uLmNvbnZlcnNhdGlvbnMgYXMgdW5rbm93biBhcyBDb252ZXJzYXRpb25cbiAgICAgICAgaWYgKCFjb252KSBjb250aW51ZVxuXG4gICAgICAgIC8vIE9idGVuZXIgb3Ryb3MgcGFydGljaXBhbnRlc1xuICAgICAgICBjb25zdCB7IGRhdGE6IHBhcnRpY2lwYW50cywgZXJyb3I6IHBhcnRpY2lwYW50c0Vycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxuICAgICAgICAgICAgLmZyb20oXCJjb252ZXJzYXRpb25fcGFydGljaXBhbnRzXCIpXG4gICAgICAgICAgICAuc2VsZWN0KGBcbiAgICAgICAgICAgICAgICB1c2VyX2lkLFxuICAgICAgICAgICAgICAgIGpvaW5lZF9hdCxcbiAgICAgICAgICAgICAgICBwcm9maWxlcyAoXG4gICAgICAgICAgICAgICAgICAgIGlkLFxuICAgICAgICAgICAgICAgICAgICBlbWFpbCxcbiAgICAgICAgICAgICAgICAgICAgZnVsbF9uYW1lLFxuICAgICAgICAgICAgICAgICAgICBhdmF0YXJfdXJsXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgYClcbiAgICAgICAgICAgIC5lcShcImNvbnZlcnNhdGlvbl9pZFwiLCBjb252LmlkKVxuICAgICAgICAgICAgLm5lcShcInVzZXJfaWRcIiwgdXNlci5pZClcblxuICAgICAgICAvLyBPYnRlbmVyIMO6bHRpbW8gbWVuc2FqZVxuICAgICAgICBjb25zdCB7IGRhdGE6IGxhc3RNZXNzYWdlIH0gPSBhd2FpdCBzdXBhYmFzZVxuICAgICAgICAgICAgLmZyb20oXCJtZXNzYWdlc1wiKVxuICAgICAgICAgICAgLnNlbGVjdChgXG4gICAgICAgICAgICAgICAgaWQsXG4gICAgICAgICAgICAgICAgY29udmVyc2F0aW9uX2lkLFxuICAgICAgICAgICAgICAgIHNlbmRlcl9pZCxcbiAgICAgICAgICAgICAgICBjb250ZW50LFxuICAgICAgICAgICAgICAgIGNyZWF0ZWRfYXQsXG4gICAgICAgICAgICAgICAgcHJvZmlsZXM6c2VuZGVyX2lkIChcbiAgICAgICAgICAgICAgICAgICAgaWQsXG4gICAgICAgICAgICAgICAgICAgIGVtYWlsLFxuICAgICAgICAgICAgICAgICAgICBmdWxsX25hbWUsXG4gICAgICAgICAgICAgICAgICAgIGF2YXRhcl91cmxcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICBgKVxuICAgICAgICAgICAgLmVxKFwiY29udmVyc2F0aW9uX2lkXCIsIGNvbnYuaWQpXG4gICAgICAgICAgICAub3JkZXIoXCJjcmVhdGVkX2F0XCIsIHsgYXNjZW5kaW5nOiBmYWxzZSB9KVxuICAgICAgICAgICAgLmxpbWl0KDEpXG4gICAgICAgICAgICAuc2luZ2xlKClcblxuICAgICAgICAvLyBDYWxjdWxhciBtZW5zYWplcyBubyBsZcOtZG9zXG4gICAgICAgIGNvbnN0IHsgY291bnQ6IHVucmVhZENvdW50IH0gPSBhd2FpdCBzdXBhYmFzZVxuICAgICAgICAgICAgLmZyb20oXCJtZXNzYWdlc1wiKVxuICAgICAgICAgICAgLnNlbGVjdChcIipcIiwgeyBjb3VudDogJ2V4YWN0JywgaGVhZDogdHJ1ZSB9KVxuICAgICAgICAgICAgLmVxKFwiY29udmVyc2F0aW9uX2lkXCIsIGNvbnYuaWQpXG4gICAgICAgICAgICAubmVxKFwic2VuZGVyX2lkXCIsIHVzZXIuaWQpXG4gICAgICAgICAgICAuZ3QoXCJjcmVhdGVkX2F0XCIsIHBhcnRpY2lwYXRpb24ubGFzdF9yZWFkX2F0KVxuXG4gICAgICAgIGNvbnN0IG90aGVyVXNlciA9IHBhcnRpY2lwYW50cz8uWzBdPy5wcm9maWxlcyBhcyBhbnlcblxuICAgICAgICAvLyBGZXRjaCBsZWFkIGRldGFpbHMgaWYgaXQncyBhIGNsaWVudCBjb252ZXJzYXRpb25cbiAgICAgICAgbGV0IGxlYWREYXRhID0gbnVsbFxuICAgICAgICBpZiAoY29udi5sZWFkX2lkKSB7XG4gICAgICAgICAgICBjb25zdCB7IGRhdGE6IGxlYWQgfSA9IGF3YWl0IHN1cGFiYXNlXG4gICAgICAgICAgICAgICAgLmZyb20oXCJsZWFkc1wiKVxuICAgICAgICAgICAgICAgIC5zZWxlY3QoXCJpZCwgbmFtZSwgZW1haWwsIHBob25lLCBzdGF0dXNcIilcbiAgICAgICAgICAgICAgICAuZXEoXCJpZFwiLCBjb252LmxlYWRfaWQpXG4gICAgICAgICAgICAgICAgLnNpbmdsZSgpXG4gICAgICAgICAgICBsZWFkRGF0YSA9IGxlYWRcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnZlcnNhdGlvbnMucHVzaCh7XG4gICAgICAgICAgICAuLi5jb252LFxuICAgICAgICAgICAgbGFzdF9tZXNzYWdlOiBsYXN0TWVzc2FnZSA/IHtcbiAgICAgICAgICAgICAgICAuLi5sYXN0TWVzc2FnZSxcbiAgICAgICAgICAgICAgICBzZW5kZXI6IGxhc3RNZXNzYWdlLnByb2ZpbGVzIGFzIGFueVxuICAgICAgICAgICAgfSA6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIHVucmVhZF9jb3VudDogdW5yZWFkQ291bnQgfHwgMCxcbiAgICAgICAgICAgIG90aGVyX3VzZXI6IG90aGVyVXNlcixcbiAgICAgICAgICAgIGxlYWQ6IGxlYWREYXRhIGFzIGFueVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIC8vIE9yZGVuYXIgcG9yIMO6bHRpbWEgYWN0aXZpZGFkXG4gICAgY29udmVyc2F0aW9ucy5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgIGNvbnN0IGFUaW1lID0gYS5sYXN0X21lc3NhZ2U/LmNyZWF0ZWRfYXQgfHwgYS51cGRhdGVkX2F0XG4gICAgICAgIGNvbnN0IGJUaW1lID0gYi5sYXN0X21lc3NhZ2U/LmNyZWF0ZWRfYXQgfHwgYi51cGRhdGVkX2F0XG4gICAgICAgIHJldHVybiBuZXcgRGF0ZShiVGltZSkuZ2V0VGltZSgpIC0gbmV3IERhdGUoYVRpbWUpLmdldFRpbWUoKVxuICAgIH0pXG5cbiAgICByZXR1cm4gY29udmVyc2F0aW9uc1xufVxuXG4vKipcbiAqIE9idGVuZXIgbWVuc2FqZXMgZGUgdW5hIGNvbnZlcnNhY2nDs24gZXNwZWPDrWZpY2FcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldE1lc3NhZ2VzKGNvbnZlcnNhdGlvbklkOiBzdHJpbmcpOiBQcm9taXNlPE1lc3NhZ2VXaXRoU2VuZGVyW10+IHtcbiAgICBjb25zdCBzdXBhYmFzZSA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpXG4gICAgY29uc3QgeyBkYXRhOiB7IHVzZXIgfSB9ID0gYXdhaXQgc3VwYWJhc2UuYXV0aC5nZXRVc2VyKClcblxuICAgIGlmICghdXNlcikgcmV0dXJuIFtdXG5cbiAgICAvLyBWZXJpZmljYXIgcXVlIGVsIHVzdWFyaW8gZXMgcGFydGljaXBhbnRlIGRlIGxhIGNvbnZlcnNhY2nDs25cbiAgICBjb25zdCB7IGRhdGE6IHBhcnRpY2lwYXRpb24gfSA9IGF3YWl0IHN1cGFiYXNlXG4gICAgICAgIC5mcm9tKFwiY29udmVyc2F0aW9uX3BhcnRpY2lwYW50c1wiKVxuICAgICAgICAuc2VsZWN0KFwiY29udmVyc2F0aW9uX2lkXCIpXG4gICAgICAgIC5lcShcImNvbnZlcnNhdGlvbl9pZFwiLCBjb252ZXJzYXRpb25JZClcbiAgICAgICAgLmVxKFwidXNlcl9pZFwiLCB1c2VyLmlkKVxuICAgICAgICAuc2luZ2xlKClcblxuICAgIGlmICghcGFydGljaXBhdGlvbikge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiVXNlciBpcyBub3QgYSBwYXJ0aWNpcGFudCBvZiB0aGlzIGNvbnZlcnNhdGlvblwiKVxuICAgICAgICByZXR1cm4gW11cbiAgICB9XG5cbiAgICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxuICAgICAgICAuZnJvbShcIm1lc3NhZ2VzXCIpXG4gICAgICAgIC5zZWxlY3QoYFxuICAgICAgICAgICAgaWQsXG4gICAgICAgICAgICBjb252ZXJzYXRpb25faWQsXG4gICAgICAgICAgICBzZW5kZXJfaWQsXG4gICAgICAgICAgICBjb250ZW50LFxuICAgICAgICAgICAgY3JlYXRlZF9hdCxcbiAgICAgICAgICAgIHByb2ZpbGVzOnNlbmRlcl9pZCAoXG4gICAgICAgICAgICAgICAgaWQsXG4gICAgICAgICAgICAgICAgZW1haWwsXG4gICAgICAgICAgICAgICAgZnVsbF9uYW1lLFxuICAgICAgICAgICAgICAgIGF2YXRhcl91cmxcbiAgICAgICAgICAgIClcbiAgICAgICAgYClcbiAgICAgICAgLmVxKFwiY29udmVyc2F0aW9uX2lkXCIsIGNvbnZlcnNhdGlvbklkKVxuICAgICAgICAub3JkZXIoXCJjcmVhdGVkX2F0XCIsIHsgYXNjZW5kaW5nOiB0cnVlIH0pXG5cbiAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIG1lc3NhZ2VzOlwiLCBlcnJvcilcbiAgICAgICAgcmV0dXJuIFtdXG4gICAgfVxuXG4gICAgcmV0dXJuIGRhdGEubWFwKG1zZyA9PiAoe1xuICAgICAgICAuLi5tc2csXG4gICAgICAgIHNlbmRlcjogbXNnLnByb2ZpbGVzIGFzIGFueVxuICAgIH0pKVxufVxuXG4vKipcbiAqIEVudmlhciB1biBtZW5zYWplIGEgdW5hIGNvbnZlcnNhY2nDs25cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNlbmRNZXNzYWdlKGNvbnZlcnNhdGlvbklkOiBzdHJpbmcsIGNvbnRlbnQ6IHN0cmluZywgcmV2YWxpZGF0ZSA9IHRydWUpOiBQcm9taXNlPE1lc3NhZ2UgfCBudWxsPiB7XG4gICAgY29uc3Qgc3VwYWJhc2UgPSBhd2FpdCBjcmVhdGVDbGllbnQoKVxuICAgIGNvbnN0IHsgZGF0YTogeyB1c2VyIH0gfSA9IGF3YWl0IHN1cGFiYXNlLmF1dGguZ2V0VXNlcigpXG5cbiAgICBpZiAoIXVzZXIgfHwgIWNvbnRlbnQudHJpbSgpKSByZXR1cm4gbnVsbFxuXG4gICAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcbiAgICAgICAgLmZyb20oXCJtZXNzYWdlc1wiKVxuICAgICAgICAuaW5zZXJ0KHtcbiAgICAgICAgICAgIGNvbnZlcnNhdGlvbl9pZDogY29udmVyc2F0aW9uSWQsXG4gICAgICAgICAgICBzZW5kZXJfaWQ6IHVzZXIuaWQsXG4gICAgICAgICAgICBjb250ZW50OiBjb250ZW50LnRyaW0oKVxuICAgICAgICB9KVxuICAgICAgICAuc2VsZWN0KClcbiAgICAgICAgLnNpbmdsZSgpXG5cbiAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkRFQlVHOiBFcnJvciBzZW5kaW5nIG1lc3NhZ2U6XCIsIHtcbiAgICAgICAgICAgIGVycm9yLFxuICAgICAgICAgICAgY29udmVyc2F0aW9uSWQsXG4gICAgICAgICAgICB1c2VySWQ6IHVzZXIuaWRcbiAgICAgICAgfSlcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycm9yLm1lc3NhZ2UpXG4gICAgfVxuXG4gICAgaWYgKHJldmFsaWRhdGUpIHtcbiAgICAgICAgcmV2YWxpZGF0ZVBhdGgoXCIvbWVuc2FqZXNcIilcbiAgICB9XG4gICAgcmV0dXJuIGRhdGFcbn1cblxuLyoqXG4gKiBNYXJjYXIgY29udmVyc2FjacOzbiBjb21vIGxlw61kYVxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbWFya0FzUmVhZChjb252ZXJzYXRpb25JZDogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgY29uc3Qgc3VwYWJhc2UgPSBhd2FpdCBjcmVhdGVDbGllbnQoKVxuICAgIGNvbnN0IHsgZGF0YTogeyB1c2VyIH0gfSA9IGF3YWl0IHN1cGFiYXNlLmF1dGguZ2V0VXNlcigpXG5cbiAgICBpZiAoIXVzZXIpIHJldHVyblxuXG4gICAgY29uc3QgeyBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcbiAgICAgICAgLmZyb20oXCJjb252ZXJzYXRpb25fcGFydGljaXBhbnRzXCIpXG4gICAgICAgIC51cGRhdGUoeyBsYXN0X3JlYWRfYXQ6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSB9KVxuICAgICAgICAuZXEoXCJjb252ZXJzYXRpb25faWRcIiwgY29udmVyc2F0aW9uSWQpXG4gICAgICAgIC5lcShcInVzZXJfaWRcIiwgdXNlci5pZClcblxuICAgIGlmIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgbWFya2luZyBhcyByZWFkOlwiLCBlcnJvcilcbiAgICB9XG5cbiAgICByZXZhbGlkYXRlUGF0aChcIi9tZW5zYWplc1wiKVxufVxuXG4vKipcbiAqIE9idGVuZXIgbyBjcmVhciB1bmEgY29udmVyc2FjacOzbiBjb24gb3RybyB1c3VhcmlvXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRPckNyZWF0ZUNvbnZlcnNhdGlvbihvdGhlclVzZXJJZDogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmcgfCBudWxsPiB7XG4gICAgY29uc3Qgc3VwYWJhc2UgPSBhd2FpdCBjcmVhdGVDbGllbnQoKVxuICAgIGNvbnN0IHRlbmFudElkID0gYXdhaXQgZ2V0VGVuYW50SWQoc3VwYWJhc2UpXG4gICAgY29uc3QgeyBkYXRhOiB7IHVzZXIgfSB9ID0gYXdhaXQgc3VwYWJhc2UuYXV0aC5nZXRVc2VyKClcblxuICAgIGlmICghdGVuYW50SWQgfHwgIXVzZXIpIHJldHVybiBudWxsXG5cbiAgICAvLyBCdXNjYXIgY29udmVyc2FjacOzbiBleGlzdGVudGUgZW50cmUgZXN0b3MgZG9zIHVzdWFyaW9zXG4gICAgY29uc3QgeyBkYXRhOiBleGlzdGluZ1BhcnRpY2lwYXRpb25zIH0gPSBhd2FpdCBzdXBhYmFzZVxuICAgICAgICAuZnJvbShcImNvbnZlcnNhdGlvbl9wYXJ0aWNpcGFudHNcIilcbiAgICAgICAgLnNlbGVjdChcImNvbnZlcnNhdGlvbl9pZFwiKVxuICAgICAgICAuZXEoXCJ1c2VyX2lkXCIsIHVzZXIuaWQpXG5cbiAgICBpZiAoZXhpc3RpbmdQYXJ0aWNpcGF0aW9ucykge1xuICAgICAgICBmb3IgKGNvbnN0IHBhcnRpY2lwYXRpb24gb2YgZXhpc3RpbmdQYXJ0aWNpcGF0aW9ucykge1xuICAgICAgICAgICAgY29uc3QgeyBkYXRhOiBvdGhlclBhcnRpY2lwYXRpb24gfSA9IGF3YWl0IHN1cGFiYXNlXG4gICAgICAgICAgICAgICAgLmZyb20oXCJjb252ZXJzYXRpb25fcGFydGljaXBhbnRzXCIpXG4gICAgICAgICAgICAgICAgLnNlbGVjdChcInVzZXJfaWRcIilcbiAgICAgICAgICAgICAgICAuZXEoXCJjb252ZXJzYXRpb25faWRcIiwgcGFydGljaXBhdGlvbi5jb252ZXJzYXRpb25faWQpXG4gICAgICAgICAgICAgICAgLmVxKFwidXNlcl9pZFwiLCBvdGhlclVzZXJJZClcbiAgICAgICAgICAgICAgICAuc2luZ2xlKClcblxuICAgICAgICAgICAgaWYgKG90aGVyUGFydGljaXBhdGlvbikge1xuICAgICAgICAgICAgICAgIHJldHVybiBwYXJ0aWNpcGF0aW9uLmNvbnZlcnNhdGlvbl9pZFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gQ3JlYXIgbnVldmEgY29udmVyc2FjacOzblxuICAgIGNvbnN0IHsgZGF0YTogbmV3Q29udmVyc2F0aW9uLCBlcnJvcjogY29udkVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxuICAgICAgICAuZnJvbShcImNvbnZlcnNhdGlvbnNcIilcbiAgICAgICAgLmluc2VydCh7IHRlbmFudF9pZDogdGVuYW50SWQgfSlcbiAgICAgICAgLnNlbGVjdCgpXG4gICAgICAgIC5zaW5nbGUoKVxuXG4gICAgaWYgKGNvbnZFcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgY3JlYXRpbmcgY29udmVyc2F0aW9uOlwiLCBjb252RXJyb3IpXG4gICAgICAgIHJldHVybiBudWxsXG4gICAgfVxuXG4gICAgLy8gQWdyZWdhciBwYXJ0aWNpcGFudGVzXG4gICAgY29uc3QgeyBlcnJvcjogcGFydGljaXBhbnRzRXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXG4gICAgICAgIC5mcm9tKFwiY29udmVyc2F0aW9uX3BhcnRpY2lwYW50c1wiKVxuICAgICAgICAuaW5zZXJ0KFtcbiAgICAgICAgICAgIHsgY29udmVyc2F0aW9uX2lkOiBuZXdDb252ZXJzYXRpb24uaWQsIHVzZXJfaWQ6IHVzZXIuaWQgfSxcbiAgICAgICAgICAgIHsgY29udmVyc2F0aW9uX2lkOiBuZXdDb252ZXJzYXRpb24uaWQsIHVzZXJfaWQ6IG90aGVyVXNlcklkIH1cbiAgICAgICAgXSlcblxuICAgIGlmIChwYXJ0aWNpcGFudHNFcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgYWRkaW5nIHBhcnRpY2lwYW50czpcIiwgcGFydGljaXBhbnRzRXJyb3IpXG4gICAgICAgIHJldHVybiBudWxsXG4gICAgfVxuXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvbWVuc2FqZXNcIilcbiAgICByZXR1cm4gbmV3Q29udmVyc2F0aW9uLmlkXG59XG5cbi8qKlxuICogT2J0ZW5lciBsaXN0YSBkZSB1c3VhcmlvcyBkZWwgdGVuYW50IChwYXJhIGluaWNpYXIgY29udmVyc2FjaW9uZXMpXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRUZW5hbnRVc2VycygpIHtcbiAgICBjb25zdCBzdXBhYmFzZSA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpXG4gICAgY29uc3QgdGVuYW50SWQgPSBhd2FpdCBnZXRUZW5hbnRJZChzdXBhYmFzZSlcbiAgICBjb25zdCB7IGRhdGE6IHsgdXNlciB9IH0gPSBhd2FpdCBzdXBhYmFzZS5hdXRoLmdldFVzZXIoKVxuXG4gICAgaWYgKCF0ZW5hbnRJZCB8fCAhdXNlcikgcmV0dXJuIFtdXG5cbiAgICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxuICAgICAgICAuZnJvbShcInByb2ZpbGVzXCIpXG4gICAgICAgIC5zZWxlY3QoXCJpZCwgZW1haWwsIGZ1bGxfbmFtZSwgYXZhdGFyX3VybFwiKVxuICAgICAgICAuZXEoXCJ0ZW5hbnRfaWRcIiwgdGVuYW50SWQpXG4gICAgICAgIC5uZXEoXCJpZFwiLCB1c2VyLmlkKSAvLyBFeGNsdWlyIGFsIHVzdWFyaW8gYWN0dWFsXG5cbiAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIHRlbmFudCB1c2VyczpcIiwgZXJyb3IpXG4gICAgICAgIHJldHVybiBbXVxuICAgIH1cblxuICAgIHJldHVybiBkYXRhXG59XG5cbi8qKlxuICogT2J0ZW5lciBsaXN0YSBkZSBMZWFkcyBkZWwgdGVuYW50IChwYXJhIGluaWNpYXIgY29udmVyc2FjaW9uZXMgY29uIGNsaWVudGVzKVxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0TGVhZHNGb3JNZXNzYWdpbmcoKSB7XG4gICAgY29uc3Qgc3VwYWJhc2UgPSBhd2FpdCBjcmVhdGVDbGllbnQoKVxuICAgIGNvbnN0IHRlbmFudElkID0gYXdhaXQgZ2V0VGVuYW50SWQoc3VwYWJhc2UpXG5cbiAgICBpZiAoIXRlbmFudElkKSByZXR1cm4gW11cblxuICAgIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXG4gICAgICAgIC5mcm9tKFwibGVhZHNcIilcbiAgICAgICAgLnNlbGVjdChcImlkLCBuYW1lLCBlbWFpbCwgcGhvbmUsIHN0YXR1c1wiKVxuICAgICAgICAuZXEoXCJ0ZW5hbnRfaWRcIiwgdGVuYW50SWQpXG4gICAgICAgIC5vcmRlcihcIm5hbWVcIilcblxuICAgIGlmIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgbGVhZHMgZm9yIG1lc3NhZ2luZzpcIiwgZXJyb3IpXG4gICAgICAgIHJldHVybiBbXVxuICAgIH1cblxuICAgIHJldHVybiBkYXRhXG59XG5cbi8qKlxuICogT2J0ZW5lciBvIGNyZWFyIHVuYSBjb252ZXJzYWNpw7NuIGNvbiB1biBMZWFkXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRPckNyZWF0ZUxlYWRDb252ZXJzYXRpb24obGVhZElkOiBzdHJpbmcsIHJldmFsaWRhdGUgPSB0cnVlKTogUHJvbWlzZTxzdHJpbmcgfCBudWxsPiB7XG4gICAgY29uc3Qgc3VwYWJhc2UgPSBhd2FpdCBjcmVhdGVDbGllbnQoKVxuICAgIGNvbnN0IHRlbmFudElkID0gYXdhaXQgZ2V0VGVuYW50SWQoc3VwYWJhc2UpXG4gICAgY29uc3QgeyBkYXRhOiB7IHVzZXIgfSB9ID0gYXdhaXQgc3VwYWJhc2UuYXV0aC5nZXRVc2VyKClcblxuICAgIGlmICghdGVuYW50SWQgfHwgIXVzZXIpIHJldHVybiBudWxsXG5cbiAgICAvLyBCdXNjYXIgY29udmVyc2FjacOzbiBleGlzdGVudGUgcGFyYSBlc3RlIExlYWRcbiAgICBjb25zdCB7IGRhdGE6IGV4aXN0aW5nQ29udmVyc2F0aW9uIH0gPSBhd2FpdCBzdXBhYmFzZVxuICAgICAgICAuZnJvbShcImNvbnZlcnNhdGlvbnNcIilcbiAgICAgICAgLnNlbGVjdChcImlkXCIpXG4gICAgICAgIC5lcShcImxlYWRfaWRcIiwgbGVhZElkKVxuICAgICAgICAuc2luZ2xlKClcblxuICAgIGlmIChleGlzdGluZ0NvbnZlcnNhdGlvbikge1xuICAgICAgICAvLyBBc2VndXJhcnNlIGRlIHF1ZSBlbCB1c3VhcmlvIGFjdHVhbCBlcyBwYXJ0aWNpcGFudGVcbiAgICAgICAgY29uc3QgeyBkYXRhOiBpc1BhcnRpY2lwYW50IH0gPSBhd2FpdCBzdXBhYmFzZVxuICAgICAgICAgICAgLmZyb20oXCJjb252ZXJzYXRpb25fcGFydGljaXBhbnRzXCIpXG4gICAgICAgICAgICAuc2VsZWN0KFwiY29udmVyc2F0aW9uX2lkXCIpXG4gICAgICAgICAgICAuZXEoXCJjb252ZXJzYXRpb25faWRcIiwgZXhpc3RpbmdDb252ZXJzYXRpb24uaWQpXG4gICAgICAgICAgICAuZXEoXCJ1c2VyX2lkXCIsIHVzZXIuaWQpXG4gICAgICAgICAgICAuc2luZ2xlKClcblxuICAgICAgICBpZiAoIWlzUGFydGljaXBhbnQpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBERUJVRzogQWRkaW5nIGFnZW50ICR7dXNlci5pZH0gdG8gbGVhZCBjb252ZXJzYXRpb24gJHtleGlzdGluZ0NvbnZlcnNhdGlvbi5pZH1gKVxuICAgICAgICAgICAgYXdhaXQgc3VwYWJhc2VcbiAgICAgICAgICAgICAgICAuZnJvbShcImNvbnZlcnNhdGlvbl9wYXJ0aWNpcGFudHNcIilcbiAgICAgICAgICAgICAgICAuaW5zZXJ0KHtcbiAgICAgICAgICAgICAgICAgICAgY29udmVyc2F0aW9uX2lkOiBleGlzdGluZ0NvbnZlcnNhdGlvbi5pZCxcbiAgICAgICAgICAgICAgICAgICAgdXNlcl9pZDogdXNlci5pZFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZXhpc3RpbmdDb252ZXJzYXRpb24uaWRcbiAgICB9XG5cbiAgICAvLyBDcmVhciBudWV2YSBjb252ZXJzYWNpw7NuIHZpbmN1bGFkYSBhbCBMZWFkXG4gICAgY29uc3QgeyBkYXRhOiBuZXdDb252ZXJzYXRpb24sIGVycm9yOiBjb252RXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXG4gICAgICAgIC5mcm9tKFwiY29udmVyc2F0aW9uc1wiKVxuICAgICAgICAuaW5zZXJ0KHtcbiAgICAgICAgICAgIHRlbmFudF9pZDogdGVuYW50SWQsXG4gICAgICAgICAgICBsZWFkX2lkOiBsZWFkSWRcbiAgICAgICAgfSlcbiAgICAgICAgLnNlbGVjdCgpXG4gICAgICAgIC5zaW5nbGUoKVxuXG4gICAgaWYgKGNvbnZFcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgY3JlYXRpbmcgbGVhZCBjb252ZXJzYXRpb246XCIsIGNvbnZFcnJvcilcbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG5cbiAgICAvLyBBZ3JlZ2FyIGFsIHVzdWFyaW8gYWN0dWFsIGNvbW8gcGFydGljaXBhbnRlXG4gICAgY29uc3QgeyBlcnJvcjogcGFydGljaXBhbnRFcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcbiAgICAgICAgLmZyb20oXCJjb252ZXJzYXRpb25fcGFydGljaXBhbnRzXCIpXG4gICAgICAgIC5pbnNlcnQoeyBjb252ZXJzYXRpb25faWQ6IG5ld0NvbnZlcnNhdGlvbi5pZCwgdXNlcl9pZDogdXNlci5pZCB9KVxuXG4gICAgaWYgKHBhcnRpY2lwYW50RXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGFkZGluZyBwYXJ0aWNpcGFudCB0byBsZWFkIGNvbnZlcnNhdGlvbjpcIiwgcGFydGljaXBhbnRFcnJvcilcbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG5cbiAgICBpZiAocmV2YWxpZGF0ZSkge1xuICAgICAgICByZXZhbGlkYXRlUGF0aChcIi9tZW5zYWplc1wiKVxuICAgIH1cbiAgICByZXR1cm4gbmV3Q29udmVyc2F0aW9uLmlkXG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6ImdTQWdJc0Isd0xBQUEifQ==
}),
"[project]/apps/web/app/actions/data:94e9aa [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "markAsRead",
    ()=>$$RSC_SERVER_ACTION_3
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"409d065115292c0d87f0f9a131a5e357f44054c45a":"markAsRead"},"apps/web/app/actions/messages.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("409d065115292c0d87f0f9a131a5e357f44054c45a", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "markAsRead");
;
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vbWVzc2FnZXMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc2VydmVyXCJcblxuaW1wb3J0IHsgY3JlYXRlQ2xpZW50LCBnZXRUZW5hbnRJZCB9IGZyb20gXCJAL2xpYi9zdXBhYmFzZS9zZXJ2ZXJcIlxuaW1wb3J0IHsgcmV2YWxpZGF0ZVBhdGggfSBmcm9tIFwibmV4dC9jYWNoZVwiXG5pbXBvcnQgdHlwZSB7IENvbnZlcnNhdGlvbiwgTWVzc2FnZSwgQ29udmVyc2F0aW9uV2l0aERldGFpbHMsIE1lc3NhZ2VXaXRoU2VuZGVyIH0gZnJvbSBcIkBpbm1vY21zL3NoYXJlZFwiXG5cbi8qKlxuICogT2J0ZW5lciB0b2RhcyBsYXMgY29udmVyc2FjaW9uZXMgZGVsIHVzdWFyaW8gYWN0dWFsXG4gKiBjb24gZGV0YWxsZXMgZGUgcGFydGljaXBhbnRlcyB5IMO6bHRpbW8gbWVuc2FqZVxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q29udmVyc2F0aW9ucygpOiBQcm9taXNlPENvbnZlcnNhdGlvbldpdGhEZXRhaWxzW10+IHtcbiAgICBjb25zdCBzdXBhYmFzZSA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpXG4gICAgY29uc3QgdGVuYW50SWQgPSBhd2FpdCBnZXRUZW5hbnRJZChzdXBhYmFzZSlcblxuICAgIGNvbnN0IHsgZGF0YTogeyB1c2VyIH0gfSA9IGF3YWl0IHN1cGFiYXNlLmF1dGguZ2V0VXNlcigpXG5cbiAgICBpZiAoIXRlbmFudElkIHx8ICF1c2VyKSByZXR1cm4gW11cblxuICAgIC8vIE9idGVuZXIgY29udmVyc2FjaW9uZXMgZW4gbGFzIHF1ZSBwYXJ0aWNpcGEgZWwgdXN1YXJpb1xuICAgIGNvbnN0IHsgZGF0YTogcGFydGljaXBhdGlvbnMsIGVycm9yOiBwYXJ0aWNpcGF0aW9uRXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXG4gICAgICAgIC5mcm9tKFwiY29udmVyc2F0aW9uX3BhcnRpY2lwYW50c1wiKVxuICAgICAgICAuc2VsZWN0KGBcbiAgICAgICAgICAgIGNvbnZlcnNhdGlvbl9pZCxcbiAgICAgICAgICAgIGxhc3RfcmVhZF9hdCxcbiAgICAgICAgICAgIGNvbnZlcnNhdGlvbnMgKFxuICAgICAgICAgICAgICAgIGlkLFxuICAgICAgICAgICAgICAgIHRlbmFudF9pZCxcbiAgICAgICAgICAgICAgICBjcmVhdGVkX2F0LFxuICAgICAgICAgICAgICAgIHVwZGF0ZWRfYXQsXG4gICAgICAgICAgICAgICAgbGVhZF9pZFxuICAgICAgICAgICAgKVxuICAgICAgICBgKVxuICAgICAgICAuZXEoXCJ1c2VyX2lkXCIsIHVzZXIuaWQpXG5cbiAgICBpZiAocGFydGljaXBhdGlvbkVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyBjb252ZXJzYXRpb25zOlwiLCBwYXJ0aWNpcGF0aW9uRXJyb3IpXG4gICAgICAgIHJldHVybiBbXVxuICAgIH1cblxuICAgIGNvbnN0IGNvbnZlcnNhdGlvbnM6IENvbnZlcnNhdGlvbldpdGhEZXRhaWxzW10gPSBbXVxuXG4gICAgZm9yIChjb25zdCBwYXJ0aWNpcGF0aW9uIG9mIHBhcnRpY2lwYXRpb25zIHx8IFtdKSB7XG4gICAgICAgIGNvbnN0IGNvbnYgPSBwYXJ0aWNpcGF0aW9uLmNvbnZlcnNhdGlvbnMgYXMgdW5rbm93biBhcyBDb252ZXJzYXRpb25cbiAgICAgICAgaWYgKCFjb252KSBjb250aW51ZVxuXG4gICAgICAgIC8vIE9idGVuZXIgb3Ryb3MgcGFydGljaXBhbnRlc1xuICAgICAgICBjb25zdCB7IGRhdGE6IHBhcnRpY2lwYW50cywgZXJyb3I6IHBhcnRpY2lwYW50c0Vycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxuICAgICAgICAgICAgLmZyb20oXCJjb252ZXJzYXRpb25fcGFydGljaXBhbnRzXCIpXG4gICAgICAgICAgICAuc2VsZWN0KGBcbiAgICAgICAgICAgICAgICB1c2VyX2lkLFxuICAgICAgICAgICAgICAgIGpvaW5lZF9hdCxcbiAgICAgICAgICAgICAgICBwcm9maWxlcyAoXG4gICAgICAgICAgICAgICAgICAgIGlkLFxuICAgICAgICAgICAgICAgICAgICBlbWFpbCxcbiAgICAgICAgICAgICAgICAgICAgZnVsbF9uYW1lLFxuICAgICAgICAgICAgICAgICAgICBhdmF0YXJfdXJsXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgYClcbiAgICAgICAgICAgIC5lcShcImNvbnZlcnNhdGlvbl9pZFwiLCBjb252LmlkKVxuICAgICAgICAgICAgLm5lcShcInVzZXJfaWRcIiwgdXNlci5pZClcblxuICAgICAgICAvLyBPYnRlbmVyIMO6bHRpbW8gbWVuc2FqZVxuICAgICAgICBjb25zdCB7IGRhdGE6IGxhc3RNZXNzYWdlIH0gPSBhd2FpdCBzdXBhYmFzZVxuICAgICAgICAgICAgLmZyb20oXCJtZXNzYWdlc1wiKVxuICAgICAgICAgICAgLnNlbGVjdChgXG4gICAgICAgICAgICAgICAgaWQsXG4gICAgICAgICAgICAgICAgY29udmVyc2F0aW9uX2lkLFxuICAgICAgICAgICAgICAgIHNlbmRlcl9pZCxcbiAgICAgICAgICAgICAgICBjb250ZW50LFxuICAgICAgICAgICAgICAgIGNyZWF0ZWRfYXQsXG4gICAgICAgICAgICAgICAgcHJvZmlsZXM6c2VuZGVyX2lkIChcbiAgICAgICAgICAgICAgICAgICAgaWQsXG4gICAgICAgICAgICAgICAgICAgIGVtYWlsLFxuICAgICAgICAgICAgICAgICAgICBmdWxsX25hbWUsXG4gICAgICAgICAgICAgICAgICAgIGF2YXRhcl91cmxcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICBgKVxuICAgICAgICAgICAgLmVxKFwiY29udmVyc2F0aW9uX2lkXCIsIGNvbnYuaWQpXG4gICAgICAgICAgICAub3JkZXIoXCJjcmVhdGVkX2F0XCIsIHsgYXNjZW5kaW5nOiBmYWxzZSB9KVxuICAgICAgICAgICAgLmxpbWl0KDEpXG4gICAgICAgICAgICAuc2luZ2xlKClcblxuICAgICAgICAvLyBDYWxjdWxhciBtZW5zYWplcyBubyBsZcOtZG9zXG4gICAgICAgIGNvbnN0IHsgY291bnQ6IHVucmVhZENvdW50IH0gPSBhd2FpdCBzdXBhYmFzZVxuICAgICAgICAgICAgLmZyb20oXCJtZXNzYWdlc1wiKVxuICAgICAgICAgICAgLnNlbGVjdChcIipcIiwgeyBjb3VudDogJ2V4YWN0JywgaGVhZDogdHJ1ZSB9KVxuICAgICAgICAgICAgLmVxKFwiY29udmVyc2F0aW9uX2lkXCIsIGNvbnYuaWQpXG4gICAgICAgICAgICAubmVxKFwic2VuZGVyX2lkXCIsIHVzZXIuaWQpXG4gICAgICAgICAgICAuZ3QoXCJjcmVhdGVkX2F0XCIsIHBhcnRpY2lwYXRpb24ubGFzdF9yZWFkX2F0KVxuXG4gICAgICAgIGNvbnN0IG90aGVyVXNlciA9IHBhcnRpY2lwYW50cz8uWzBdPy5wcm9maWxlcyBhcyBhbnlcblxuICAgICAgICAvLyBGZXRjaCBsZWFkIGRldGFpbHMgaWYgaXQncyBhIGNsaWVudCBjb252ZXJzYXRpb25cbiAgICAgICAgbGV0IGxlYWREYXRhID0gbnVsbFxuICAgICAgICBpZiAoY29udi5sZWFkX2lkKSB7XG4gICAgICAgICAgICBjb25zdCB7IGRhdGE6IGxlYWQgfSA9IGF3YWl0IHN1cGFiYXNlXG4gICAgICAgICAgICAgICAgLmZyb20oXCJsZWFkc1wiKVxuICAgICAgICAgICAgICAgIC5zZWxlY3QoXCJpZCwgbmFtZSwgZW1haWwsIHBob25lLCBzdGF0dXNcIilcbiAgICAgICAgICAgICAgICAuZXEoXCJpZFwiLCBjb252LmxlYWRfaWQpXG4gICAgICAgICAgICAgICAgLnNpbmdsZSgpXG4gICAgICAgICAgICBsZWFkRGF0YSA9IGxlYWRcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnZlcnNhdGlvbnMucHVzaCh7XG4gICAgICAgICAgICAuLi5jb252LFxuICAgICAgICAgICAgbGFzdF9tZXNzYWdlOiBsYXN0TWVzc2FnZSA/IHtcbiAgICAgICAgICAgICAgICAuLi5sYXN0TWVzc2FnZSxcbiAgICAgICAgICAgICAgICBzZW5kZXI6IGxhc3RNZXNzYWdlLnByb2ZpbGVzIGFzIGFueVxuICAgICAgICAgICAgfSA6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIHVucmVhZF9jb3VudDogdW5yZWFkQ291bnQgfHwgMCxcbiAgICAgICAgICAgIG90aGVyX3VzZXI6IG90aGVyVXNlcixcbiAgICAgICAgICAgIGxlYWQ6IGxlYWREYXRhIGFzIGFueVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIC8vIE9yZGVuYXIgcG9yIMO6bHRpbWEgYWN0aXZpZGFkXG4gICAgY29udmVyc2F0aW9ucy5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgIGNvbnN0IGFUaW1lID0gYS5sYXN0X21lc3NhZ2U/LmNyZWF0ZWRfYXQgfHwgYS51cGRhdGVkX2F0XG4gICAgICAgIGNvbnN0IGJUaW1lID0gYi5sYXN0X21lc3NhZ2U/LmNyZWF0ZWRfYXQgfHwgYi51cGRhdGVkX2F0XG4gICAgICAgIHJldHVybiBuZXcgRGF0ZShiVGltZSkuZ2V0VGltZSgpIC0gbmV3IERhdGUoYVRpbWUpLmdldFRpbWUoKVxuICAgIH0pXG5cbiAgICByZXR1cm4gY29udmVyc2F0aW9uc1xufVxuXG4vKipcbiAqIE9idGVuZXIgbWVuc2FqZXMgZGUgdW5hIGNvbnZlcnNhY2nDs24gZXNwZWPDrWZpY2FcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldE1lc3NhZ2VzKGNvbnZlcnNhdGlvbklkOiBzdHJpbmcpOiBQcm9taXNlPE1lc3NhZ2VXaXRoU2VuZGVyW10+IHtcbiAgICBjb25zdCBzdXBhYmFzZSA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpXG4gICAgY29uc3QgeyBkYXRhOiB7IHVzZXIgfSB9ID0gYXdhaXQgc3VwYWJhc2UuYXV0aC5nZXRVc2VyKClcblxuICAgIGlmICghdXNlcikgcmV0dXJuIFtdXG5cbiAgICAvLyBWZXJpZmljYXIgcXVlIGVsIHVzdWFyaW8gZXMgcGFydGljaXBhbnRlIGRlIGxhIGNvbnZlcnNhY2nDs25cbiAgICBjb25zdCB7IGRhdGE6IHBhcnRpY2lwYXRpb24gfSA9IGF3YWl0IHN1cGFiYXNlXG4gICAgICAgIC5mcm9tKFwiY29udmVyc2F0aW9uX3BhcnRpY2lwYW50c1wiKVxuICAgICAgICAuc2VsZWN0KFwiY29udmVyc2F0aW9uX2lkXCIpXG4gICAgICAgIC5lcShcImNvbnZlcnNhdGlvbl9pZFwiLCBjb252ZXJzYXRpb25JZClcbiAgICAgICAgLmVxKFwidXNlcl9pZFwiLCB1c2VyLmlkKVxuICAgICAgICAuc2luZ2xlKClcblxuICAgIGlmICghcGFydGljaXBhdGlvbikge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiVXNlciBpcyBub3QgYSBwYXJ0aWNpcGFudCBvZiB0aGlzIGNvbnZlcnNhdGlvblwiKVxuICAgICAgICByZXR1cm4gW11cbiAgICB9XG5cbiAgICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxuICAgICAgICAuZnJvbShcIm1lc3NhZ2VzXCIpXG4gICAgICAgIC5zZWxlY3QoYFxuICAgICAgICAgICAgaWQsXG4gICAgICAgICAgICBjb252ZXJzYXRpb25faWQsXG4gICAgICAgICAgICBzZW5kZXJfaWQsXG4gICAgICAgICAgICBjb250ZW50LFxuICAgICAgICAgICAgY3JlYXRlZF9hdCxcbiAgICAgICAgICAgIHByb2ZpbGVzOnNlbmRlcl9pZCAoXG4gICAgICAgICAgICAgICAgaWQsXG4gICAgICAgICAgICAgICAgZW1haWwsXG4gICAgICAgICAgICAgICAgZnVsbF9uYW1lLFxuICAgICAgICAgICAgICAgIGF2YXRhcl91cmxcbiAgICAgICAgICAgIClcbiAgICAgICAgYClcbiAgICAgICAgLmVxKFwiY29udmVyc2F0aW9uX2lkXCIsIGNvbnZlcnNhdGlvbklkKVxuICAgICAgICAub3JkZXIoXCJjcmVhdGVkX2F0XCIsIHsgYXNjZW5kaW5nOiB0cnVlIH0pXG5cbiAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIG1lc3NhZ2VzOlwiLCBlcnJvcilcbiAgICAgICAgcmV0dXJuIFtdXG4gICAgfVxuXG4gICAgcmV0dXJuIGRhdGEubWFwKG1zZyA9PiAoe1xuICAgICAgICAuLi5tc2csXG4gICAgICAgIHNlbmRlcjogbXNnLnByb2ZpbGVzIGFzIGFueVxuICAgIH0pKVxufVxuXG4vKipcbiAqIEVudmlhciB1biBtZW5zYWplIGEgdW5hIGNvbnZlcnNhY2nDs25cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNlbmRNZXNzYWdlKGNvbnZlcnNhdGlvbklkOiBzdHJpbmcsIGNvbnRlbnQ6IHN0cmluZywgcmV2YWxpZGF0ZSA9IHRydWUpOiBQcm9taXNlPE1lc3NhZ2UgfCBudWxsPiB7XG4gICAgY29uc3Qgc3VwYWJhc2UgPSBhd2FpdCBjcmVhdGVDbGllbnQoKVxuICAgIGNvbnN0IHsgZGF0YTogeyB1c2VyIH0gfSA9IGF3YWl0IHN1cGFiYXNlLmF1dGguZ2V0VXNlcigpXG5cbiAgICBpZiAoIXVzZXIgfHwgIWNvbnRlbnQudHJpbSgpKSByZXR1cm4gbnVsbFxuXG4gICAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcbiAgICAgICAgLmZyb20oXCJtZXNzYWdlc1wiKVxuICAgICAgICAuaW5zZXJ0KHtcbiAgICAgICAgICAgIGNvbnZlcnNhdGlvbl9pZDogY29udmVyc2F0aW9uSWQsXG4gICAgICAgICAgICBzZW5kZXJfaWQ6IHVzZXIuaWQsXG4gICAgICAgICAgICBjb250ZW50OiBjb250ZW50LnRyaW0oKVxuICAgICAgICB9KVxuICAgICAgICAuc2VsZWN0KClcbiAgICAgICAgLnNpbmdsZSgpXG5cbiAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkRFQlVHOiBFcnJvciBzZW5kaW5nIG1lc3NhZ2U6XCIsIHtcbiAgICAgICAgICAgIGVycm9yLFxuICAgICAgICAgICAgY29udmVyc2F0aW9uSWQsXG4gICAgICAgICAgICB1c2VySWQ6IHVzZXIuaWRcbiAgICAgICAgfSlcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycm9yLm1lc3NhZ2UpXG4gICAgfVxuXG4gICAgaWYgKHJldmFsaWRhdGUpIHtcbiAgICAgICAgcmV2YWxpZGF0ZVBhdGgoXCIvbWVuc2FqZXNcIilcbiAgICB9XG4gICAgcmV0dXJuIGRhdGFcbn1cblxuLyoqXG4gKiBNYXJjYXIgY29udmVyc2FjacOzbiBjb21vIGxlw61kYVxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbWFya0FzUmVhZChjb252ZXJzYXRpb25JZDogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgY29uc3Qgc3VwYWJhc2UgPSBhd2FpdCBjcmVhdGVDbGllbnQoKVxuICAgIGNvbnN0IHsgZGF0YTogeyB1c2VyIH0gfSA9IGF3YWl0IHN1cGFiYXNlLmF1dGguZ2V0VXNlcigpXG5cbiAgICBpZiAoIXVzZXIpIHJldHVyblxuXG4gICAgY29uc3QgeyBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcbiAgICAgICAgLmZyb20oXCJjb252ZXJzYXRpb25fcGFydGljaXBhbnRzXCIpXG4gICAgICAgIC51cGRhdGUoeyBsYXN0X3JlYWRfYXQ6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSB9KVxuICAgICAgICAuZXEoXCJjb252ZXJzYXRpb25faWRcIiwgY29udmVyc2F0aW9uSWQpXG4gICAgICAgIC5lcShcInVzZXJfaWRcIiwgdXNlci5pZClcblxuICAgIGlmIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgbWFya2luZyBhcyByZWFkOlwiLCBlcnJvcilcbiAgICB9XG5cbiAgICByZXZhbGlkYXRlUGF0aChcIi9tZW5zYWplc1wiKVxufVxuXG4vKipcbiAqIE9idGVuZXIgbyBjcmVhciB1bmEgY29udmVyc2FjacOzbiBjb24gb3RybyB1c3VhcmlvXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRPckNyZWF0ZUNvbnZlcnNhdGlvbihvdGhlclVzZXJJZDogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmcgfCBudWxsPiB7XG4gICAgY29uc3Qgc3VwYWJhc2UgPSBhd2FpdCBjcmVhdGVDbGllbnQoKVxuICAgIGNvbnN0IHRlbmFudElkID0gYXdhaXQgZ2V0VGVuYW50SWQoc3VwYWJhc2UpXG4gICAgY29uc3QgeyBkYXRhOiB7IHVzZXIgfSB9ID0gYXdhaXQgc3VwYWJhc2UuYXV0aC5nZXRVc2VyKClcblxuICAgIGlmICghdGVuYW50SWQgfHwgIXVzZXIpIHJldHVybiBudWxsXG5cbiAgICAvLyBCdXNjYXIgY29udmVyc2FjacOzbiBleGlzdGVudGUgZW50cmUgZXN0b3MgZG9zIHVzdWFyaW9zXG4gICAgY29uc3QgeyBkYXRhOiBleGlzdGluZ1BhcnRpY2lwYXRpb25zIH0gPSBhd2FpdCBzdXBhYmFzZVxuICAgICAgICAuZnJvbShcImNvbnZlcnNhdGlvbl9wYXJ0aWNpcGFudHNcIilcbiAgICAgICAgLnNlbGVjdChcImNvbnZlcnNhdGlvbl9pZFwiKVxuICAgICAgICAuZXEoXCJ1c2VyX2lkXCIsIHVzZXIuaWQpXG5cbiAgICBpZiAoZXhpc3RpbmdQYXJ0aWNpcGF0aW9ucykge1xuICAgICAgICBmb3IgKGNvbnN0IHBhcnRpY2lwYXRpb24gb2YgZXhpc3RpbmdQYXJ0aWNpcGF0aW9ucykge1xuICAgICAgICAgICAgY29uc3QgeyBkYXRhOiBvdGhlclBhcnRpY2lwYXRpb24gfSA9IGF3YWl0IHN1cGFiYXNlXG4gICAgICAgICAgICAgICAgLmZyb20oXCJjb252ZXJzYXRpb25fcGFydGljaXBhbnRzXCIpXG4gICAgICAgICAgICAgICAgLnNlbGVjdChcInVzZXJfaWRcIilcbiAgICAgICAgICAgICAgICAuZXEoXCJjb252ZXJzYXRpb25faWRcIiwgcGFydGljaXBhdGlvbi5jb252ZXJzYXRpb25faWQpXG4gICAgICAgICAgICAgICAgLmVxKFwidXNlcl9pZFwiLCBvdGhlclVzZXJJZClcbiAgICAgICAgICAgICAgICAuc2luZ2xlKClcblxuICAgICAgICAgICAgaWYgKG90aGVyUGFydGljaXBhdGlvbikge1xuICAgICAgICAgICAgICAgIHJldHVybiBwYXJ0aWNpcGF0aW9uLmNvbnZlcnNhdGlvbl9pZFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gQ3JlYXIgbnVldmEgY29udmVyc2FjacOzblxuICAgIGNvbnN0IHsgZGF0YTogbmV3Q29udmVyc2F0aW9uLCBlcnJvcjogY29udkVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxuICAgICAgICAuZnJvbShcImNvbnZlcnNhdGlvbnNcIilcbiAgICAgICAgLmluc2VydCh7IHRlbmFudF9pZDogdGVuYW50SWQgfSlcbiAgICAgICAgLnNlbGVjdCgpXG4gICAgICAgIC5zaW5nbGUoKVxuXG4gICAgaWYgKGNvbnZFcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgY3JlYXRpbmcgY29udmVyc2F0aW9uOlwiLCBjb252RXJyb3IpXG4gICAgICAgIHJldHVybiBudWxsXG4gICAgfVxuXG4gICAgLy8gQWdyZWdhciBwYXJ0aWNpcGFudGVzXG4gICAgY29uc3QgeyBlcnJvcjogcGFydGljaXBhbnRzRXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXG4gICAgICAgIC5mcm9tKFwiY29udmVyc2F0aW9uX3BhcnRpY2lwYW50c1wiKVxuICAgICAgICAuaW5zZXJ0KFtcbiAgICAgICAgICAgIHsgY29udmVyc2F0aW9uX2lkOiBuZXdDb252ZXJzYXRpb24uaWQsIHVzZXJfaWQ6IHVzZXIuaWQgfSxcbiAgICAgICAgICAgIHsgY29udmVyc2F0aW9uX2lkOiBuZXdDb252ZXJzYXRpb24uaWQsIHVzZXJfaWQ6IG90aGVyVXNlcklkIH1cbiAgICAgICAgXSlcblxuICAgIGlmIChwYXJ0aWNpcGFudHNFcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgYWRkaW5nIHBhcnRpY2lwYW50czpcIiwgcGFydGljaXBhbnRzRXJyb3IpXG4gICAgICAgIHJldHVybiBudWxsXG4gICAgfVxuXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvbWVuc2FqZXNcIilcbiAgICByZXR1cm4gbmV3Q29udmVyc2F0aW9uLmlkXG59XG5cbi8qKlxuICogT2J0ZW5lciBsaXN0YSBkZSB1c3VhcmlvcyBkZWwgdGVuYW50IChwYXJhIGluaWNpYXIgY29udmVyc2FjaW9uZXMpXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRUZW5hbnRVc2VycygpIHtcbiAgICBjb25zdCBzdXBhYmFzZSA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpXG4gICAgY29uc3QgdGVuYW50SWQgPSBhd2FpdCBnZXRUZW5hbnRJZChzdXBhYmFzZSlcbiAgICBjb25zdCB7IGRhdGE6IHsgdXNlciB9IH0gPSBhd2FpdCBzdXBhYmFzZS5hdXRoLmdldFVzZXIoKVxuXG4gICAgaWYgKCF0ZW5hbnRJZCB8fCAhdXNlcikgcmV0dXJuIFtdXG5cbiAgICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxuICAgICAgICAuZnJvbShcInByb2ZpbGVzXCIpXG4gICAgICAgIC5zZWxlY3QoXCJpZCwgZW1haWwsIGZ1bGxfbmFtZSwgYXZhdGFyX3VybFwiKVxuICAgICAgICAuZXEoXCJ0ZW5hbnRfaWRcIiwgdGVuYW50SWQpXG4gICAgICAgIC5uZXEoXCJpZFwiLCB1c2VyLmlkKSAvLyBFeGNsdWlyIGFsIHVzdWFyaW8gYWN0dWFsXG5cbiAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIHRlbmFudCB1c2VyczpcIiwgZXJyb3IpXG4gICAgICAgIHJldHVybiBbXVxuICAgIH1cblxuICAgIHJldHVybiBkYXRhXG59XG5cbi8qKlxuICogT2J0ZW5lciBsaXN0YSBkZSBMZWFkcyBkZWwgdGVuYW50IChwYXJhIGluaWNpYXIgY29udmVyc2FjaW9uZXMgY29uIGNsaWVudGVzKVxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0TGVhZHNGb3JNZXNzYWdpbmcoKSB7XG4gICAgY29uc3Qgc3VwYWJhc2UgPSBhd2FpdCBjcmVhdGVDbGllbnQoKVxuICAgIGNvbnN0IHRlbmFudElkID0gYXdhaXQgZ2V0VGVuYW50SWQoc3VwYWJhc2UpXG5cbiAgICBpZiAoIXRlbmFudElkKSByZXR1cm4gW11cblxuICAgIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXG4gICAgICAgIC5mcm9tKFwibGVhZHNcIilcbiAgICAgICAgLnNlbGVjdChcImlkLCBuYW1lLCBlbWFpbCwgcGhvbmUsIHN0YXR1c1wiKVxuICAgICAgICAuZXEoXCJ0ZW5hbnRfaWRcIiwgdGVuYW50SWQpXG4gICAgICAgIC5vcmRlcihcIm5hbWVcIilcblxuICAgIGlmIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgbGVhZHMgZm9yIG1lc3NhZ2luZzpcIiwgZXJyb3IpXG4gICAgICAgIHJldHVybiBbXVxuICAgIH1cblxuICAgIHJldHVybiBkYXRhXG59XG5cbi8qKlxuICogT2J0ZW5lciBvIGNyZWFyIHVuYSBjb252ZXJzYWNpw7NuIGNvbiB1biBMZWFkXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRPckNyZWF0ZUxlYWRDb252ZXJzYXRpb24obGVhZElkOiBzdHJpbmcsIHJldmFsaWRhdGUgPSB0cnVlKTogUHJvbWlzZTxzdHJpbmcgfCBudWxsPiB7XG4gICAgY29uc3Qgc3VwYWJhc2UgPSBhd2FpdCBjcmVhdGVDbGllbnQoKVxuICAgIGNvbnN0IHRlbmFudElkID0gYXdhaXQgZ2V0VGVuYW50SWQoc3VwYWJhc2UpXG4gICAgY29uc3QgeyBkYXRhOiB7IHVzZXIgfSB9ID0gYXdhaXQgc3VwYWJhc2UuYXV0aC5nZXRVc2VyKClcblxuICAgIGlmICghdGVuYW50SWQgfHwgIXVzZXIpIHJldHVybiBudWxsXG5cbiAgICAvLyBCdXNjYXIgY29udmVyc2FjacOzbiBleGlzdGVudGUgcGFyYSBlc3RlIExlYWRcbiAgICBjb25zdCB7IGRhdGE6IGV4aXN0aW5nQ29udmVyc2F0aW9uIH0gPSBhd2FpdCBzdXBhYmFzZVxuICAgICAgICAuZnJvbShcImNvbnZlcnNhdGlvbnNcIilcbiAgICAgICAgLnNlbGVjdChcImlkXCIpXG4gICAgICAgIC5lcShcImxlYWRfaWRcIiwgbGVhZElkKVxuICAgICAgICAuc2luZ2xlKClcblxuICAgIGlmIChleGlzdGluZ0NvbnZlcnNhdGlvbikge1xuICAgICAgICAvLyBBc2VndXJhcnNlIGRlIHF1ZSBlbCB1c3VhcmlvIGFjdHVhbCBlcyBwYXJ0aWNpcGFudGVcbiAgICAgICAgY29uc3QgeyBkYXRhOiBpc1BhcnRpY2lwYW50IH0gPSBhd2FpdCBzdXBhYmFzZVxuICAgICAgICAgICAgLmZyb20oXCJjb252ZXJzYXRpb25fcGFydGljaXBhbnRzXCIpXG4gICAgICAgICAgICAuc2VsZWN0KFwiY29udmVyc2F0aW9uX2lkXCIpXG4gICAgICAgICAgICAuZXEoXCJjb252ZXJzYXRpb25faWRcIiwgZXhpc3RpbmdDb252ZXJzYXRpb24uaWQpXG4gICAgICAgICAgICAuZXEoXCJ1c2VyX2lkXCIsIHVzZXIuaWQpXG4gICAgICAgICAgICAuc2luZ2xlKClcblxuICAgICAgICBpZiAoIWlzUGFydGljaXBhbnQpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBERUJVRzogQWRkaW5nIGFnZW50ICR7dXNlci5pZH0gdG8gbGVhZCBjb252ZXJzYXRpb24gJHtleGlzdGluZ0NvbnZlcnNhdGlvbi5pZH1gKVxuICAgICAgICAgICAgYXdhaXQgc3VwYWJhc2VcbiAgICAgICAgICAgICAgICAuZnJvbShcImNvbnZlcnNhdGlvbl9wYXJ0aWNpcGFudHNcIilcbiAgICAgICAgICAgICAgICAuaW5zZXJ0KHtcbiAgICAgICAgICAgICAgICAgICAgY29udmVyc2F0aW9uX2lkOiBleGlzdGluZ0NvbnZlcnNhdGlvbi5pZCxcbiAgICAgICAgICAgICAgICAgICAgdXNlcl9pZDogdXNlci5pZFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZXhpc3RpbmdDb252ZXJzYXRpb24uaWRcbiAgICB9XG5cbiAgICAvLyBDcmVhciBudWV2YSBjb252ZXJzYWNpw7NuIHZpbmN1bGFkYSBhbCBMZWFkXG4gICAgY29uc3QgeyBkYXRhOiBuZXdDb252ZXJzYXRpb24sIGVycm9yOiBjb252RXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXG4gICAgICAgIC5mcm9tKFwiY29udmVyc2F0aW9uc1wiKVxuICAgICAgICAuaW5zZXJ0KHtcbiAgICAgICAgICAgIHRlbmFudF9pZDogdGVuYW50SWQsXG4gICAgICAgICAgICBsZWFkX2lkOiBsZWFkSWRcbiAgICAgICAgfSlcbiAgICAgICAgLnNlbGVjdCgpXG4gICAgICAgIC5zaW5nbGUoKVxuXG4gICAgaWYgKGNvbnZFcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgY3JlYXRpbmcgbGVhZCBjb252ZXJzYXRpb246XCIsIGNvbnZFcnJvcilcbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG5cbiAgICAvLyBBZ3JlZ2FyIGFsIHVzdWFyaW8gYWN0dWFsIGNvbW8gcGFydGljaXBhbnRlXG4gICAgY29uc3QgeyBlcnJvcjogcGFydGljaXBhbnRFcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcbiAgICAgICAgLmZyb20oXCJjb252ZXJzYXRpb25fcGFydGljaXBhbnRzXCIpXG4gICAgICAgIC5pbnNlcnQoeyBjb252ZXJzYXRpb25faWQ6IG5ld0NvbnZlcnNhdGlvbi5pZCwgdXNlcl9pZDogdXNlci5pZCB9KVxuXG4gICAgaWYgKHBhcnRpY2lwYW50RXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGFkZGluZyBwYXJ0aWNpcGFudCB0byBsZWFkIGNvbnZlcnNhdGlvbjpcIiwgcGFydGljaXBhbnRFcnJvcilcbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG5cbiAgICBpZiAocmV2YWxpZGF0ZSkge1xuICAgICAgICByZXZhbGlkYXRlUGF0aChcIi9tZW5zYWplc1wiKVxuICAgIH1cbiAgICByZXR1cm4gbmV3Q29udmVyc2F0aW9uLmlkXG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IitSQXFOc0IsdUxBQUEifQ==
}),
"[project]/apps/web/app/actions/data:5d5d6c [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getConversations",
    ()=>$$RSC_SERVER_ACTION_0
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"00c913f219100b63cb187db1970b2cead36b7b9f14":"getConversations"},"apps/web/app/actions/messages.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("00c913f219100b63cb187db1970b2cead36b7b9f14", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "getConversations");
;
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vbWVzc2FnZXMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc2VydmVyXCJcblxuaW1wb3J0IHsgY3JlYXRlQ2xpZW50LCBnZXRUZW5hbnRJZCB9IGZyb20gXCJAL2xpYi9zdXBhYmFzZS9zZXJ2ZXJcIlxuaW1wb3J0IHsgcmV2YWxpZGF0ZVBhdGggfSBmcm9tIFwibmV4dC9jYWNoZVwiXG5pbXBvcnQgdHlwZSB7IENvbnZlcnNhdGlvbiwgTWVzc2FnZSwgQ29udmVyc2F0aW9uV2l0aERldGFpbHMsIE1lc3NhZ2VXaXRoU2VuZGVyIH0gZnJvbSBcIkBpbm1vY21zL3NoYXJlZFwiXG5cbi8qKlxuICogT2J0ZW5lciB0b2RhcyBsYXMgY29udmVyc2FjaW9uZXMgZGVsIHVzdWFyaW8gYWN0dWFsXG4gKiBjb24gZGV0YWxsZXMgZGUgcGFydGljaXBhbnRlcyB5IMO6bHRpbW8gbWVuc2FqZVxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q29udmVyc2F0aW9ucygpOiBQcm9taXNlPENvbnZlcnNhdGlvbldpdGhEZXRhaWxzW10+IHtcbiAgICBjb25zdCBzdXBhYmFzZSA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpXG4gICAgY29uc3QgdGVuYW50SWQgPSBhd2FpdCBnZXRUZW5hbnRJZChzdXBhYmFzZSlcblxuICAgIGNvbnN0IHsgZGF0YTogeyB1c2VyIH0gfSA9IGF3YWl0IHN1cGFiYXNlLmF1dGguZ2V0VXNlcigpXG5cbiAgICBpZiAoIXRlbmFudElkIHx8ICF1c2VyKSByZXR1cm4gW11cblxuICAgIC8vIE9idGVuZXIgY29udmVyc2FjaW9uZXMgZW4gbGFzIHF1ZSBwYXJ0aWNpcGEgZWwgdXN1YXJpb1xuICAgIGNvbnN0IHsgZGF0YTogcGFydGljaXBhdGlvbnMsIGVycm9yOiBwYXJ0aWNpcGF0aW9uRXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXG4gICAgICAgIC5mcm9tKFwiY29udmVyc2F0aW9uX3BhcnRpY2lwYW50c1wiKVxuICAgICAgICAuc2VsZWN0KGBcbiAgICAgICAgICAgIGNvbnZlcnNhdGlvbl9pZCxcbiAgICAgICAgICAgIGxhc3RfcmVhZF9hdCxcbiAgICAgICAgICAgIGNvbnZlcnNhdGlvbnMgKFxuICAgICAgICAgICAgICAgIGlkLFxuICAgICAgICAgICAgICAgIHRlbmFudF9pZCxcbiAgICAgICAgICAgICAgICBjcmVhdGVkX2F0LFxuICAgICAgICAgICAgICAgIHVwZGF0ZWRfYXQsXG4gICAgICAgICAgICAgICAgbGVhZF9pZFxuICAgICAgICAgICAgKVxuICAgICAgICBgKVxuICAgICAgICAuZXEoXCJ1c2VyX2lkXCIsIHVzZXIuaWQpXG5cbiAgICBpZiAocGFydGljaXBhdGlvbkVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyBjb252ZXJzYXRpb25zOlwiLCBwYXJ0aWNpcGF0aW9uRXJyb3IpXG4gICAgICAgIHJldHVybiBbXVxuICAgIH1cblxuICAgIGNvbnN0IGNvbnZlcnNhdGlvbnM6IENvbnZlcnNhdGlvbldpdGhEZXRhaWxzW10gPSBbXVxuXG4gICAgZm9yIChjb25zdCBwYXJ0aWNpcGF0aW9uIG9mIHBhcnRpY2lwYXRpb25zIHx8IFtdKSB7XG4gICAgICAgIGNvbnN0IGNvbnYgPSBwYXJ0aWNpcGF0aW9uLmNvbnZlcnNhdGlvbnMgYXMgdW5rbm93biBhcyBDb252ZXJzYXRpb25cbiAgICAgICAgaWYgKCFjb252KSBjb250aW51ZVxuXG4gICAgICAgIC8vIE9idGVuZXIgb3Ryb3MgcGFydGljaXBhbnRlc1xuICAgICAgICBjb25zdCB7IGRhdGE6IHBhcnRpY2lwYW50cywgZXJyb3I6IHBhcnRpY2lwYW50c0Vycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxuICAgICAgICAgICAgLmZyb20oXCJjb252ZXJzYXRpb25fcGFydGljaXBhbnRzXCIpXG4gICAgICAgICAgICAuc2VsZWN0KGBcbiAgICAgICAgICAgICAgICB1c2VyX2lkLFxuICAgICAgICAgICAgICAgIGpvaW5lZF9hdCxcbiAgICAgICAgICAgICAgICBwcm9maWxlcyAoXG4gICAgICAgICAgICAgICAgICAgIGlkLFxuICAgICAgICAgICAgICAgICAgICBlbWFpbCxcbiAgICAgICAgICAgICAgICAgICAgZnVsbF9uYW1lLFxuICAgICAgICAgICAgICAgICAgICBhdmF0YXJfdXJsXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgYClcbiAgICAgICAgICAgIC5lcShcImNvbnZlcnNhdGlvbl9pZFwiLCBjb252LmlkKVxuICAgICAgICAgICAgLm5lcShcInVzZXJfaWRcIiwgdXNlci5pZClcblxuICAgICAgICAvLyBPYnRlbmVyIMO6bHRpbW8gbWVuc2FqZVxuICAgICAgICBjb25zdCB7IGRhdGE6IGxhc3RNZXNzYWdlIH0gPSBhd2FpdCBzdXBhYmFzZVxuICAgICAgICAgICAgLmZyb20oXCJtZXNzYWdlc1wiKVxuICAgICAgICAgICAgLnNlbGVjdChgXG4gICAgICAgICAgICAgICAgaWQsXG4gICAgICAgICAgICAgICAgY29udmVyc2F0aW9uX2lkLFxuICAgICAgICAgICAgICAgIHNlbmRlcl9pZCxcbiAgICAgICAgICAgICAgICBjb250ZW50LFxuICAgICAgICAgICAgICAgIGNyZWF0ZWRfYXQsXG4gICAgICAgICAgICAgICAgcHJvZmlsZXM6c2VuZGVyX2lkIChcbiAgICAgICAgICAgICAgICAgICAgaWQsXG4gICAgICAgICAgICAgICAgICAgIGVtYWlsLFxuICAgICAgICAgICAgICAgICAgICBmdWxsX25hbWUsXG4gICAgICAgICAgICAgICAgICAgIGF2YXRhcl91cmxcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICBgKVxuICAgICAgICAgICAgLmVxKFwiY29udmVyc2F0aW9uX2lkXCIsIGNvbnYuaWQpXG4gICAgICAgICAgICAub3JkZXIoXCJjcmVhdGVkX2F0XCIsIHsgYXNjZW5kaW5nOiBmYWxzZSB9KVxuICAgICAgICAgICAgLmxpbWl0KDEpXG4gICAgICAgICAgICAuc2luZ2xlKClcblxuICAgICAgICAvLyBDYWxjdWxhciBtZW5zYWplcyBubyBsZcOtZG9zXG4gICAgICAgIGNvbnN0IHsgY291bnQ6IHVucmVhZENvdW50IH0gPSBhd2FpdCBzdXBhYmFzZVxuICAgICAgICAgICAgLmZyb20oXCJtZXNzYWdlc1wiKVxuICAgICAgICAgICAgLnNlbGVjdChcIipcIiwgeyBjb3VudDogJ2V4YWN0JywgaGVhZDogdHJ1ZSB9KVxuICAgICAgICAgICAgLmVxKFwiY29udmVyc2F0aW9uX2lkXCIsIGNvbnYuaWQpXG4gICAgICAgICAgICAubmVxKFwic2VuZGVyX2lkXCIsIHVzZXIuaWQpXG4gICAgICAgICAgICAuZ3QoXCJjcmVhdGVkX2F0XCIsIHBhcnRpY2lwYXRpb24ubGFzdF9yZWFkX2F0KVxuXG4gICAgICAgIGNvbnN0IG90aGVyVXNlciA9IHBhcnRpY2lwYW50cz8uWzBdPy5wcm9maWxlcyBhcyBhbnlcblxuICAgICAgICAvLyBGZXRjaCBsZWFkIGRldGFpbHMgaWYgaXQncyBhIGNsaWVudCBjb252ZXJzYXRpb25cbiAgICAgICAgbGV0IGxlYWREYXRhID0gbnVsbFxuICAgICAgICBpZiAoY29udi5sZWFkX2lkKSB7XG4gICAgICAgICAgICBjb25zdCB7IGRhdGE6IGxlYWQgfSA9IGF3YWl0IHN1cGFiYXNlXG4gICAgICAgICAgICAgICAgLmZyb20oXCJsZWFkc1wiKVxuICAgICAgICAgICAgICAgIC5zZWxlY3QoXCJpZCwgbmFtZSwgZW1haWwsIHBob25lLCBzdGF0dXNcIilcbiAgICAgICAgICAgICAgICAuZXEoXCJpZFwiLCBjb252LmxlYWRfaWQpXG4gICAgICAgICAgICAgICAgLnNpbmdsZSgpXG4gICAgICAgICAgICBsZWFkRGF0YSA9IGxlYWRcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnZlcnNhdGlvbnMucHVzaCh7XG4gICAgICAgICAgICAuLi5jb252LFxuICAgICAgICAgICAgbGFzdF9tZXNzYWdlOiBsYXN0TWVzc2FnZSA/IHtcbiAgICAgICAgICAgICAgICAuLi5sYXN0TWVzc2FnZSxcbiAgICAgICAgICAgICAgICBzZW5kZXI6IGxhc3RNZXNzYWdlLnByb2ZpbGVzIGFzIGFueVxuICAgICAgICAgICAgfSA6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIHVucmVhZF9jb3VudDogdW5yZWFkQ291bnQgfHwgMCxcbiAgICAgICAgICAgIG90aGVyX3VzZXI6IG90aGVyVXNlcixcbiAgICAgICAgICAgIGxlYWQ6IGxlYWREYXRhIGFzIGFueVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIC8vIE9yZGVuYXIgcG9yIMO6bHRpbWEgYWN0aXZpZGFkXG4gICAgY29udmVyc2F0aW9ucy5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgIGNvbnN0IGFUaW1lID0gYS5sYXN0X21lc3NhZ2U/LmNyZWF0ZWRfYXQgfHwgYS51cGRhdGVkX2F0XG4gICAgICAgIGNvbnN0IGJUaW1lID0gYi5sYXN0X21lc3NhZ2U/LmNyZWF0ZWRfYXQgfHwgYi51cGRhdGVkX2F0XG4gICAgICAgIHJldHVybiBuZXcgRGF0ZShiVGltZSkuZ2V0VGltZSgpIC0gbmV3IERhdGUoYVRpbWUpLmdldFRpbWUoKVxuICAgIH0pXG5cbiAgICByZXR1cm4gY29udmVyc2F0aW9uc1xufVxuXG4vKipcbiAqIE9idGVuZXIgbWVuc2FqZXMgZGUgdW5hIGNvbnZlcnNhY2nDs24gZXNwZWPDrWZpY2FcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldE1lc3NhZ2VzKGNvbnZlcnNhdGlvbklkOiBzdHJpbmcpOiBQcm9taXNlPE1lc3NhZ2VXaXRoU2VuZGVyW10+IHtcbiAgICBjb25zdCBzdXBhYmFzZSA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpXG4gICAgY29uc3QgeyBkYXRhOiB7IHVzZXIgfSB9ID0gYXdhaXQgc3VwYWJhc2UuYXV0aC5nZXRVc2VyKClcblxuICAgIGlmICghdXNlcikgcmV0dXJuIFtdXG5cbiAgICAvLyBWZXJpZmljYXIgcXVlIGVsIHVzdWFyaW8gZXMgcGFydGljaXBhbnRlIGRlIGxhIGNvbnZlcnNhY2nDs25cbiAgICBjb25zdCB7IGRhdGE6IHBhcnRpY2lwYXRpb24gfSA9IGF3YWl0IHN1cGFiYXNlXG4gICAgICAgIC5mcm9tKFwiY29udmVyc2F0aW9uX3BhcnRpY2lwYW50c1wiKVxuICAgICAgICAuc2VsZWN0KFwiY29udmVyc2F0aW9uX2lkXCIpXG4gICAgICAgIC5lcShcImNvbnZlcnNhdGlvbl9pZFwiLCBjb252ZXJzYXRpb25JZClcbiAgICAgICAgLmVxKFwidXNlcl9pZFwiLCB1c2VyLmlkKVxuICAgICAgICAuc2luZ2xlKClcblxuICAgIGlmICghcGFydGljaXBhdGlvbikge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiVXNlciBpcyBub3QgYSBwYXJ0aWNpcGFudCBvZiB0aGlzIGNvbnZlcnNhdGlvblwiKVxuICAgICAgICByZXR1cm4gW11cbiAgICB9XG5cbiAgICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxuICAgICAgICAuZnJvbShcIm1lc3NhZ2VzXCIpXG4gICAgICAgIC5zZWxlY3QoYFxuICAgICAgICAgICAgaWQsXG4gICAgICAgICAgICBjb252ZXJzYXRpb25faWQsXG4gICAgICAgICAgICBzZW5kZXJfaWQsXG4gICAgICAgICAgICBjb250ZW50LFxuICAgICAgICAgICAgY3JlYXRlZF9hdCxcbiAgICAgICAgICAgIHByb2ZpbGVzOnNlbmRlcl9pZCAoXG4gICAgICAgICAgICAgICAgaWQsXG4gICAgICAgICAgICAgICAgZW1haWwsXG4gICAgICAgICAgICAgICAgZnVsbF9uYW1lLFxuICAgICAgICAgICAgICAgIGF2YXRhcl91cmxcbiAgICAgICAgICAgIClcbiAgICAgICAgYClcbiAgICAgICAgLmVxKFwiY29udmVyc2F0aW9uX2lkXCIsIGNvbnZlcnNhdGlvbklkKVxuICAgICAgICAub3JkZXIoXCJjcmVhdGVkX2F0XCIsIHsgYXNjZW5kaW5nOiB0cnVlIH0pXG5cbiAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIG1lc3NhZ2VzOlwiLCBlcnJvcilcbiAgICAgICAgcmV0dXJuIFtdXG4gICAgfVxuXG4gICAgcmV0dXJuIGRhdGEubWFwKG1zZyA9PiAoe1xuICAgICAgICAuLi5tc2csXG4gICAgICAgIHNlbmRlcjogbXNnLnByb2ZpbGVzIGFzIGFueVxuICAgIH0pKVxufVxuXG4vKipcbiAqIEVudmlhciB1biBtZW5zYWplIGEgdW5hIGNvbnZlcnNhY2nDs25cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNlbmRNZXNzYWdlKGNvbnZlcnNhdGlvbklkOiBzdHJpbmcsIGNvbnRlbnQ6IHN0cmluZywgcmV2YWxpZGF0ZSA9IHRydWUpOiBQcm9taXNlPE1lc3NhZ2UgfCBudWxsPiB7XG4gICAgY29uc3Qgc3VwYWJhc2UgPSBhd2FpdCBjcmVhdGVDbGllbnQoKVxuICAgIGNvbnN0IHsgZGF0YTogeyB1c2VyIH0gfSA9IGF3YWl0IHN1cGFiYXNlLmF1dGguZ2V0VXNlcigpXG5cbiAgICBpZiAoIXVzZXIgfHwgIWNvbnRlbnQudHJpbSgpKSByZXR1cm4gbnVsbFxuXG4gICAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcbiAgICAgICAgLmZyb20oXCJtZXNzYWdlc1wiKVxuICAgICAgICAuaW5zZXJ0KHtcbiAgICAgICAgICAgIGNvbnZlcnNhdGlvbl9pZDogY29udmVyc2F0aW9uSWQsXG4gICAgICAgICAgICBzZW5kZXJfaWQ6IHVzZXIuaWQsXG4gICAgICAgICAgICBjb250ZW50OiBjb250ZW50LnRyaW0oKVxuICAgICAgICB9KVxuICAgICAgICAuc2VsZWN0KClcbiAgICAgICAgLnNpbmdsZSgpXG5cbiAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkRFQlVHOiBFcnJvciBzZW5kaW5nIG1lc3NhZ2U6XCIsIHtcbiAgICAgICAgICAgIGVycm9yLFxuICAgICAgICAgICAgY29udmVyc2F0aW9uSWQsXG4gICAgICAgICAgICB1c2VySWQ6IHVzZXIuaWRcbiAgICAgICAgfSlcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycm9yLm1lc3NhZ2UpXG4gICAgfVxuXG4gICAgaWYgKHJldmFsaWRhdGUpIHtcbiAgICAgICAgcmV2YWxpZGF0ZVBhdGgoXCIvbWVuc2FqZXNcIilcbiAgICB9XG4gICAgcmV0dXJuIGRhdGFcbn1cblxuLyoqXG4gKiBNYXJjYXIgY29udmVyc2FjacOzbiBjb21vIGxlw61kYVxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbWFya0FzUmVhZChjb252ZXJzYXRpb25JZDogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgY29uc3Qgc3VwYWJhc2UgPSBhd2FpdCBjcmVhdGVDbGllbnQoKVxuICAgIGNvbnN0IHsgZGF0YTogeyB1c2VyIH0gfSA9IGF3YWl0IHN1cGFiYXNlLmF1dGguZ2V0VXNlcigpXG5cbiAgICBpZiAoIXVzZXIpIHJldHVyblxuXG4gICAgY29uc3QgeyBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcbiAgICAgICAgLmZyb20oXCJjb252ZXJzYXRpb25fcGFydGljaXBhbnRzXCIpXG4gICAgICAgIC51cGRhdGUoeyBsYXN0X3JlYWRfYXQ6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSB9KVxuICAgICAgICAuZXEoXCJjb252ZXJzYXRpb25faWRcIiwgY29udmVyc2F0aW9uSWQpXG4gICAgICAgIC5lcShcInVzZXJfaWRcIiwgdXNlci5pZClcblxuICAgIGlmIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgbWFya2luZyBhcyByZWFkOlwiLCBlcnJvcilcbiAgICB9XG5cbiAgICByZXZhbGlkYXRlUGF0aChcIi9tZW5zYWplc1wiKVxufVxuXG4vKipcbiAqIE9idGVuZXIgbyBjcmVhciB1bmEgY29udmVyc2FjacOzbiBjb24gb3RybyB1c3VhcmlvXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRPckNyZWF0ZUNvbnZlcnNhdGlvbihvdGhlclVzZXJJZDogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmcgfCBudWxsPiB7XG4gICAgY29uc3Qgc3VwYWJhc2UgPSBhd2FpdCBjcmVhdGVDbGllbnQoKVxuICAgIGNvbnN0IHRlbmFudElkID0gYXdhaXQgZ2V0VGVuYW50SWQoc3VwYWJhc2UpXG4gICAgY29uc3QgeyBkYXRhOiB7IHVzZXIgfSB9ID0gYXdhaXQgc3VwYWJhc2UuYXV0aC5nZXRVc2VyKClcblxuICAgIGlmICghdGVuYW50SWQgfHwgIXVzZXIpIHJldHVybiBudWxsXG5cbiAgICAvLyBCdXNjYXIgY29udmVyc2FjacOzbiBleGlzdGVudGUgZW50cmUgZXN0b3MgZG9zIHVzdWFyaW9zXG4gICAgY29uc3QgeyBkYXRhOiBleGlzdGluZ1BhcnRpY2lwYXRpb25zIH0gPSBhd2FpdCBzdXBhYmFzZVxuICAgICAgICAuZnJvbShcImNvbnZlcnNhdGlvbl9wYXJ0aWNpcGFudHNcIilcbiAgICAgICAgLnNlbGVjdChcImNvbnZlcnNhdGlvbl9pZFwiKVxuICAgICAgICAuZXEoXCJ1c2VyX2lkXCIsIHVzZXIuaWQpXG5cbiAgICBpZiAoZXhpc3RpbmdQYXJ0aWNpcGF0aW9ucykge1xuICAgICAgICBmb3IgKGNvbnN0IHBhcnRpY2lwYXRpb24gb2YgZXhpc3RpbmdQYXJ0aWNpcGF0aW9ucykge1xuICAgICAgICAgICAgY29uc3QgeyBkYXRhOiBvdGhlclBhcnRpY2lwYXRpb24gfSA9IGF3YWl0IHN1cGFiYXNlXG4gICAgICAgICAgICAgICAgLmZyb20oXCJjb252ZXJzYXRpb25fcGFydGljaXBhbnRzXCIpXG4gICAgICAgICAgICAgICAgLnNlbGVjdChcInVzZXJfaWRcIilcbiAgICAgICAgICAgICAgICAuZXEoXCJjb252ZXJzYXRpb25faWRcIiwgcGFydGljaXBhdGlvbi5jb252ZXJzYXRpb25faWQpXG4gICAgICAgICAgICAgICAgLmVxKFwidXNlcl9pZFwiLCBvdGhlclVzZXJJZClcbiAgICAgICAgICAgICAgICAuc2luZ2xlKClcblxuICAgICAgICAgICAgaWYgKG90aGVyUGFydGljaXBhdGlvbikge1xuICAgICAgICAgICAgICAgIHJldHVybiBwYXJ0aWNpcGF0aW9uLmNvbnZlcnNhdGlvbl9pZFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gQ3JlYXIgbnVldmEgY29udmVyc2FjacOzblxuICAgIGNvbnN0IHsgZGF0YTogbmV3Q29udmVyc2F0aW9uLCBlcnJvcjogY29udkVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxuICAgICAgICAuZnJvbShcImNvbnZlcnNhdGlvbnNcIilcbiAgICAgICAgLmluc2VydCh7IHRlbmFudF9pZDogdGVuYW50SWQgfSlcbiAgICAgICAgLnNlbGVjdCgpXG4gICAgICAgIC5zaW5nbGUoKVxuXG4gICAgaWYgKGNvbnZFcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgY3JlYXRpbmcgY29udmVyc2F0aW9uOlwiLCBjb252RXJyb3IpXG4gICAgICAgIHJldHVybiBudWxsXG4gICAgfVxuXG4gICAgLy8gQWdyZWdhciBwYXJ0aWNpcGFudGVzXG4gICAgY29uc3QgeyBlcnJvcjogcGFydGljaXBhbnRzRXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXG4gICAgICAgIC5mcm9tKFwiY29udmVyc2F0aW9uX3BhcnRpY2lwYW50c1wiKVxuICAgICAgICAuaW5zZXJ0KFtcbiAgICAgICAgICAgIHsgY29udmVyc2F0aW9uX2lkOiBuZXdDb252ZXJzYXRpb24uaWQsIHVzZXJfaWQ6IHVzZXIuaWQgfSxcbiAgICAgICAgICAgIHsgY29udmVyc2F0aW9uX2lkOiBuZXdDb252ZXJzYXRpb24uaWQsIHVzZXJfaWQ6IG90aGVyVXNlcklkIH1cbiAgICAgICAgXSlcblxuICAgIGlmIChwYXJ0aWNpcGFudHNFcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgYWRkaW5nIHBhcnRpY2lwYW50czpcIiwgcGFydGljaXBhbnRzRXJyb3IpXG4gICAgICAgIHJldHVybiBudWxsXG4gICAgfVxuXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvbWVuc2FqZXNcIilcbiAgICByZXR1cm4gbmV3Q29udmVyc2F0aW9uLmlkXG59XG5cbi8qKlxuICogT2J0ZW5lciBsaXN0YSBkZSB1c3VhcmlvcyBkZWwgdGVuYW50IChwYXJhIGluaWNpYXIgY29udmVyc2FjaW9uZXMpXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRUZW5hbnRVc2VycygpIHtcbiAgICBjb25zdCBzdXBhYmFzZSA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpXG4gICAgY29uc3QgdGVuYW50SWQgPSBhd2FpdCBnZXRUZW5hbnRJZChzdXBhYmFzZSlcbiAgICBjb25zdCB7IGRhdGE6IHsgdXNlciB9IH0gPSBhd2FpdCBzdXBhYmFzZS5hdXRoLmdldFVzZXIoKVxuXG4gICAgaWYgKCF0ZW5hbnRJZCB8fCAhdXNlcikgcmV0dXJuIFtdXG5cbiAgICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxuICAgICAgICAuZnJvbShcInByb2ZpbGVzXCIpXG4gICAgICAgIC5zZWxlY3QoXCJpZCwgZW1haWwsIGZ1bGxfbmFtZSwgYXZhdGFyX3VybFwiKVxuICAgICAgICAuZXEoXCJ0ZW5hbnRfaWRcIiwgdGVuYW50SWQpXG4gICAgICAgIC5uZXEoXCJpZFwiLCB1c2VyLmlkKSAvLyBFeGNsdWlyIGFsIHVzdWFyaW8gYWN0dWFsXG5cbiAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIHRlbmFudCB1c2VyczpcIiwgZXJyb3IpXG4gICAgICAgIHJldHVybiBbXVxuICAgIH1cblxuICAgIHJldHVybiBkYXRhXG59XG5cbi8qKlxuICogT2J0ZW5lciBsaXN0YSBkZSBMZWFkcyBkZWwgdGVuYW50IChwYXJhIGluaWNpYXIgY29udmVyc2FjaW9uZXMgY29uIGNsaWVudGVzKVxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0TGVhZHNGb3JNZXNzYWdpbmcoKSB7XG4gICAgY29uc3Qgc3VwYWJhc2UgPSBhd2FpdCBjcmVhdGVDbGllbnQoKVxuICAgIGNvbnN0IHRlbmFudElkID0gYXdhaXQgZ2V0VGVuYW50SWQoc3VwYWJhc2UpXG5cbiAgICBpZiAoIXRlbmFudElkKSByZXR1cm4gW11cblxuICAgIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXG4gICAgICAgIC5mcm9tKFwibGVhZHNcIilcbiAgICAgICAgLnNlbGVjdChcImlkLCBuYW1lLCBlbWFpbCwgcGhvbmUsIHN0YXR1c1wiKVxuICAgICAgICAuZXEoXCJ0ZW5hbnRfaWRcIiwgdGVuYW50SWQpXG4gICAgICAgIC5vcmRlcihcIm5hbWVcIilcblxuICAgIGlmIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgbGVhZHMgZm9yIG1lc3NhZ2luZzpcIiwgZXJyb3IpXG4gICAgICAgIHJldHVybiBbXVxuICAgIH1cblxuICAgIHJldHVybiBkYXRhXG59XG5cbi8qKlxuICogT2J0ZW5lciBvIGNyZWFyIHVuYSBjb252ZXJzYWNpw7NuIGNvbiB1biBMZWFkXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRPckNyZWF0ZUxlYWRDb252ZXJzYXRpb24obGVhZElkOiBzdHJpbmcsIHJldmFsaWRhdGUgPSB0cnVlKTogUHJvbWlzZTxzdHJpbmcgfCBudWxsPiB7XG4gICAgY29uc3Qgc3VwYWJhc2UgPSBhd2FpdCBjcmVhdGVDbGllbnQoKVxuICAgIGNvbnN0IHRlbmFudElkID0gYXdhaXQgZ2V0VGVuYW50SWQoc3VwYWJhc2UpXG4gICAgY29uc3QgeyBkYXRhOiB7IHVzZXIgfSB9ID0gYXdhaXQgc3VwYWJhc2UuYXV0aC5nZXRVc2VyKClcblxuICAgIGlmICghdGVuYW50SWQgfHwgIXVzZXIpIHJldHVybiBudWxsXG5cbiAgICAvLyBCdXNjYXIgY29udmVyc2FjacOzbiBleGlzdGVudGUgcGFyYSBlc3RlIExlYWRcbiAgICBjb25zdCB7IGRhdGE6IGV4aXN0aW5nQ29udmVyc2F0aW9uIH0gPSBhd2FpdCBzdXBhYmFzZVxuICAgICAgICAuZnJvbShcImNvbnZlcnNhdGlvbnNcIilcbiAgICAgICAgLnNlbGVjdChcImlkXCIpXG4gICAgICAgIC5lcShcImxlYWRfaWRcIiwgbGVhZElkKVxuICAgICAgICAuc2luZ2xlKClcblxuICAgIGlmIChleGlzdGluZ0NvbnZlcnNhdGlvbikge1xuICAgICAgICAvLyBBc2VndXJhcnNlIGRlIHF1ZSBlbCB1c3VhcmlvIGFjdHVhbCBlcyBwYXJ0aWNpcGFudGVcbiAgICAgICAgY29uc3QgeyBkYXRhOiBpc1BhcnRpY2lwYW50IH0gPSBhd2FpdCBzdXBhYmFzZVxuICAgICAgICAgICAgLmZyb20oXCJjb252ZXJzYXRpb25fcGFydGljaXBhbnRzXCIpXG4gICAgICAgICAgICAuc2VsZWN0KFwiY29udmVyc2F0aW9uX2lkXCIpXG4gICAgICAgICAgICAuZXEoXCJjb252ZXJzYXRpb25faWRcIiwgZXhpc3RpbmdDb252ZXJzYXRpb24uaWQpXG4gICAgICAgICAgICAuZXEoXCJ1c2VyX2lkXCIsIHVzZXIuaWQpXG4gICAgICAgICAgICAuc2luZ2xlKClcblxuICAgICAgICBpZiAoIWlzUGFydGljaXBhbnQpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBERUJVRzogQWRkaW5nIGFnZW50ICR7dXNlci5pZH0gdG8gbGVhZCBjb252ZXJzYXRpb24gJHtleGlzdGluZ0NvbnZlcnNhdGlvbi5pZH1gKVxuICAgICAgICAgICAgYXdhaXQgc3VwYWJhc2VcbiAgICAgICAgICAgICAgICAuZnJvbShcImNvbnZlcnNhdGlvbl9wYXJ0aWNpcGFudHNcIilcbiAgICAgICAgICAgICAgICAuaW5zZXJ0KHtcbiAgICAgICAgICAgICAgICAgICAgY29udmVyc2F0aW9uX2lkOiBleGlzdGluZ0NvbnZlcnNhdGlvbi5pZCxcbiAgICAgICAgICAgICAgICAgICAgdXNlcl9pZDogdXNlci5pZFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZXhpc3RpbmdDb252ZXJzYXRpb24uaWRcbiAgICB9XG5cbiAgICAvLyBDcmVhciBudWV2YSBjb252ZXJzYWNpw7NuIHZpbmN1bGFkYSBhbCBMZWFkXG4gICAgY29uc3QgeyBkYXRhOiBuZXdDb252ZXJzYXRpb24sIGVycm9yOiBjb252RXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXG4gICAgICAgIC5mcm9tKFwiY29udmVyc2F0aW9uc1wiKVxuICAgICAgICAuaW5zZXJ0KHtcbiAgICAgICAgICAgIHRlbmFudF9pZDogdGVuYW50SWQsXG4gICAgICAgICAgICBsZWFkX2lkOiBsZWFkSWRcbiAgICAgICAgfSlcbiAgICAgICAgLnNlbGVjdCgpXG4gICAgICAgIC5zaW5nbGUoKVxuXG4gICAgaWYgKGNvbnZFcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgY3JlYXRpbmcgbGVhZCBjb252ZXJzYXRpb246XCIsIGNvbnZFcnJvcilcbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG5cbiAgICAvLyBBZ3JlZ2FyIGFsIHVzdWFyaW8gYWN0dWFsIGNvbW8gcGFydGljaXBhbnRlXG4gICAgY29uc3QgeyBlcnJvcjogcGFydGljaXBhbnRFcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcbiAgICAgICAgLmZyb20oXCJjb252ZXJzYXRpb25fcGFydGljaXBhbnRzXCIpXG4gICAgICAgIC5pbnNlcnQoeyBjb252ZXJzYXRpb25faWQ6IG5ld0NvbnZlcnNhdGlvbi5pZCwgdXNlcl9pZDogdXNlci5pZCB9KVxuXG4gICAgaWYgKHBhcnRpY2lwYW50RXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGFkZGluZyBwYXJ0aWNpcGFudCB0byBsZWFkIGNvbnZlcnNhdGlvbjpcIiwgcGFydGljaXBhbnRFcnJvcilcbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG5cbiAgICBpZiAocmV2YWxpZGF0ZSkge1xuICAgICAgICByZXZhbGlkYXRlUGF0aChcIi9tZW5zYWplc1wiKVxuICAgIH1cbiAgICByZXR1cm4gbmV3Q29udmVyc2F0aW9uLmlkXG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6InFTQVVzQiw2TEFBQSJ9
}),
"[project]/apps/web/components/messages/messaging-interface.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MessagingInterface",
    ()=>MessagingInterface
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-ssr] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/phone.js [app-ssr] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Video$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/video.js [app-ssr] (ecmascript) <export default as Video>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/info.js [app-ssr] (ecmascript) <export default as Info>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mail.js [app-ssr] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/message-square.js [app-ssr] (ecmascript) <export default as MessageSquare>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-ssr] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-ssr] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/components/ui/input.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/components/ui/avatar.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/components/ui/badge.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$scroll$2d$area$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/components/ui/scroll-area.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$messages$2f$message$2d$list$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/components/messages/message-list.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$messages$2f$message$2d$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/components/messages/message-input.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$messages$2f$new$2d$chat$2d$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/components/messages/new-chat-dialog.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$data$3a$5f1b80__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/apps/web/app/actions/data:5f1b80 [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$data$3a$94e9aa__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/apps/web/app/actions/data:94e9aa [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$data$3a$5d5d6c__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/apps/web/app/actions/data:5d5d6c [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
;
function MessagingInterface({ initialConversations, currentUserId }) {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [conversations, setConversations] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(initialConversations);
    const [filterType, setFilterType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("all");
    const [selectedConversation, setSelectedConversation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(initialConversations[0] || null);
    const [messages, setMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isLoadingMessages, setIsLoadingMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isNewChatOpen, setIsNewChatOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Load messages when conversation changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (selectedConversation) {
            loadMessages(selectedConversation.id);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$data$3a$94e9aa__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["markAsRead"])(selectedConversation.id);
        }
    }, [
        selectedConversation?.id
    ]);
    const loadMessages = async (conversationId)=>{
        setIsLoadingMessages(true);
        try {
            const msgs = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$data$3a$5f1b80__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getMessages"])(conversationId);
            setMessages(msgs);
        } catch (error) {
            console.error("Error loading messages:", error);
        } finally{
            setIsLoadingMessages(false);
        }
    };
    const refreshConversations = async (newSelectedId)=>{
        try {
            const updated = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$data$3a$5d5d6c__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getConversations"])();
            setConversations(updated);
            if (newSelectedId) {
                const found = updated.find((c)=>c.id === newSelectedId);
                if (found) setSelectedConversation(found);
            }
        } catch (error) {
            console.error("Error refreshing conversations:", error);
        }
    };
    const handleConversationSelect = (conv)=>{
        setSelectedConversation(conv);
    };
    const handleMessageSent = ()=>{
        if (selectedConversation) {
            loadMessages(selectedConversation.id);
            refreshConversations();
        }
    };
    const filteredConversations = conversations.filter((conv)=>{
        if (filterType === "team") return !conv.lead_id;
        if (filterType === "leads") return !!conv.lead_id;
        return true;
    });
    const renderSidebarItem = (conv)=>{
        const isSelected = selectedConversation?.id === conv.id;
        const isClient = !!conv.lead_id;
        const displayName = isClient ? conv.lead?.name : conv.other_user?.full_name || conv.other_user?.email || 'Colega';
        const displaySub = isClient ? 'Cliente' : 'Equipo';
        const avatarInitial = (isClient ? conv.lead?.name?.[0] : conv.other_user?.full_name?.[0] || conv.other_user?.email?.[0]) || '?';
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            onClick: ()=>handleConversationSelect(conv),
            className: `p-4 rounded-2xl flex items-center gap-4 cursor-pointer transition-all group ${isSelected ? 'bg-blue-600 shadow-lg shadow-blue-500/20' : 'hover:bg-white'}`,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative shrink-0",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Avatar"], {
                            className: `h-12 w-12 border-2 ${isSelected ? 'border-white/20' : 'border-transparent'}`,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AvatarFallback"], {
                                className: `${isClient ? 'bg-gradient-to-br from-amber-400 to-orange-500' : 'bg-gradient-to-br from-blue-500 to-purple-500'} text-white font-black`,
                                children: avatarInitial
                            }, void 0, false, {
                                fileName: "[project]/apps/web/components/messages/messaging-interface.tsx",
                                lineNumber: 112,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/apps/web/components/messages/messaging-interface.tsx",
                            lineNumber: 111,
                            columnNumber: 21
                        }, this),
                        isClient && !isSelected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute -bottom-1 -right-1 h-5 w-5 rounded-full bg-amber-500 border-2 border-white flex items-center justify-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                className: "h-2.5 w-2.5 text-white"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/components/messages/messaging-interface.tsx",
                                lineNumber: 121,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/apps/web/components/messages/messaging-interface.tsx",
                            lineNumber: 120,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/components/messages/messaging-interface.tsx",
                    lineNumber: 110,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1 min-w-0",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between mb-0.5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: `text-sm font-bold truncate ${isSelected ? 'text-white' : 'text-gray-900'}`,
                                    children: displayName
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/components/messages/messaging-interface.tsx",
                                    lineNumber: 127,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: `text-[10px] font-medium ${isSelected ? 'text-white/70' : 'text-gray-400'}`,
                                    children: conv.last_message ? new Date(conv.last_message.created_at).toLocaleTimeString('es', {
                                        hour: '2-digit',
                                        minute: '2-digit'
                                    }) : ''
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/components/messages/messaging-interface.tsx",
                                    lineNumber: 130,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/components/messages/messaging-interface.tsx",
                            lineNumber: 126,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: `text-xs truncate ${isSelected ? 'text-white/80' : 'text-gray-500 font-medium'}`,
                                    children: conv.last_message?.content || 'Sin mensajes'
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/components/messages/messaging-interface.tsx",
                                    lineNumber: 135,
                                    columnNumber: 25
                                }, this),
                                (conv.unread_count || 0) > 0 && !isSelected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                    className: "h-4 min-w-[1rem] px-1 bg-red-500 text-white text-[9px] font-black border-none rounded-full flex items-center justify-center",
                                    children: conv.unread_count
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/components/messages/messaging-interface.tsx",
                                    lineNumber: 139,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/components/messages/messaging-interface.tsx",
                            lineNumber: 134,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/components/messages/messaging-interface.tsx",
                    lineNumber: 125,
                    columnNumber: 17
                }, this)
            ]
        }, conv.id, true, {
            fileName: "[project]/apps/web/components/messages/messaging-interface.tsx",
            lineNumber: 104,
            columnNumber: 13
        }, this);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "h-[calc(100vh-140px)] flex bg-white rounded-[2.5rem] shadow-xl shadow-gray-200/50 overflow-hidden border border-gray-100 animate-in fade-in duration-500",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-80 md:w-96 border-r border-gray-100 flex flex-col shrink-0 bg-gray-50/30",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-6 space-y-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-2xl font-black text-gray-900 tracking-tight",
                                        children: "Inbox"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/components/messages/messaging-interface.tsx",
                                        lineNumber: 155,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                        onClick: ()=>setIsNewChatOpen(true),
                                        className: "rounded-xl h-10 w-10 bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-500/20 p-0",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                                            className: "h-5 w-5 text-white"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/components/messages/messaging-interface.tsx",
                                            lineNumber: 160,
                                            columnNumber: 29
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/components/messages/messaging-interface.tsx",
                                        lineNumber: 156,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/components/messages/messaging-interface.tsx",
                                lineNumber: 154,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex p-1 bg-gray-100/50 rounded-2xl h-11",
                                children: [
                                    'all',
                                    'team',
                                    'leads'
                                ].map((type)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setFilterType(type),
                                        className: `flex-1 flex items-center justify-center text-[10px] font-black uppercase tracking-widest rounded-xl transition-all ${filterType === type ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-400 hover:text-gray-600'}`,
                                        children: type === 'all' ? 'Todos' : type === 'team' ? 'Equipo' : 'Clientes'
                                    }, type, false, {
                                        fileName: "[project]/apps/web/components/messages/messaging-interface.tsx",
                                        lineNumber: 166,
                                        columnNumber: 29
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/apps/web/components/messages/messaging-interface.tsx",
                                lineNumber: 164,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                        className: "absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/components/messages/messaging-interface.tsx",
                                        lineNumber: 180,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                        placeholder: "Buscar en el chat...",
                                        className: "h-10 pl-9 bg-white border-none shadow-sm rounded-xl text-xs font-medium"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/components/messages/messaging-interface.tsx",
                                        lineNumber: 181,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/components/messages/messaging-interface.tsx",
                                lineNumber: 179,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/components/messages/messaging-interface.tsx",
                        lineNumber: 153,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$scroll$2d$area$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollArea"], {
                        className: "flex-1",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "px-3 pb-6 space-y-1",
                            children: filteredConversations.length > 0 ? filteredConversations.map(renderSidebarItem) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-8 text-center text-gray-400 text-xs font-medium",
                                children: "No hay conversaciones en esta categoría"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/components/messages/messaging-interface.tsx",
                                lineNumber: 193,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/apps/web/components/messages/messaging-interface.tsx",
                            lineNumber: 189,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/apps/web/components/messages/messaging-interface.tsx",
                        lineNumber: 188,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/components/messages/messaging-interface.tsx",
                lineNumber: 152,
                columnNumber: 13
            }, this),
            selectedConversation ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 flex flex-col bg-white",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-20 px-8 border-b border-gray-100 flex items-center justify-between shrink-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Avatar"], {
                                        className: `h-10 w-10 border ${selectedConversation.lead_id ? 'border-amber-100' : 'border-gray-100'}`,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AvatarFallback"], {
                                            className: `${selectedConversation.lead_id ? 'bg-gradient-to-br from-amber-400 to-orange-500' : 'bg-gradient-to-br from-blue-500 to-purple-500'} text-white font-black`,
                                            children: (selectedConversation.lead_id ? selectedConversation.lead?.name?.[0] : selectedConversation.other_user?.full_name?.[0] || selectedConversation.other_user?.email?.[0]) || '?'
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/components/messages/messaging-interface.tsx",
                                            lineNumber: 208,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/components/messages/messaging-interface.tsx",
                                        lineNumber: 207,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-sm font-black text-gray-900 leading-none",
                                                children: selectedConversation.lead_id ? selectedConversation.lead?.name : selectedConversation.other_user?.full_name || selectedConversation.other_user?.email || 'Usuario'
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/components/messages/messaging-interface.tsx",
                                                lineNumber: 218,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-1.5 text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: `h-1.5 w-1.5 rounded-full ${selectedConversation.lead_id ? 'bg-amber-400' : 'bg-blue-400'}`
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/components/messages/messaging-interface.tsx",
                                                        lineNumber: 224,
                                                        columnNumber: 37
                                                    }, this),
                                                    selectedConversation.lead_id ? 'Cliente' : 'Equipo',
                                                    " • ",
                                                    selectedConversation.lead_id ? selectedConversation.lead?.email : selectedConversation.other_user?.email
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/apps/web/components/messages/messaging-interface.tsx",
                                                lineNumber: 223,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/components/messages/messaging-interface.tsx",
                                        lineNumber: 217,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/components/messages/messaging-interface.tsx",
                                lineNumber: 206,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                        variant: "ghost",
                                        size: "icon",
                                        className: "rounded-full h-10 w-10 text-gray-400 hover:text-blue-600 hover:bg-blue-50",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                            className: "h-4 w-4"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/components/messages/messaging-interface.tsx",
                                            lineNumber: 231,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/components/messages/messaging-interface.tsx",
                                        lineNumber: 230,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                        variant: "ghost",
                                        size: "icon",
                                        className: "rounded-full h-10 w-10 text-gray-400 hover:text-blue-600 hover:bg-blue-50",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Video$3e$__["Video"], {
                                            className: "h-4 w-4"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/components/messages/messaging-interface.tsx",
                                            lineNumber: 234,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/components/messages/messaging-interface.tsx",
                                        lineNumber: 233,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-6 w-px bg-gray-100 mx-2"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/components/messages/messaging-interface.tsx",
                                        lineNumber: 236,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                        variant: "ghost",
                                        size: "icon",
                                        className: "rounded-full h-10 w-10 text-gray-400 hover:text-blue-600 hover:bg-blue-50",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__["Info"], {
                                            className: "h-4 w-4"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/components/messages/messaging-interface.tsx",
                                            lineNumber: 238,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/components/messages/messaging-interface.tsx",
                                        lineNumber: 237,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/components/messages/messaging-interface.tsx",
                                lineNumber: 229,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/components/messages/messaging-interface.tsx",
                        lineNumber: 205,
                        columnNumber: 21
                    }, this),
                    isLoadingMessages ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 flex items-center justify-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                            className: "h-8 w-8 text-blue-500 animate-spin"
                        }, void 0, false, {
                            fileName: "[project]/apps/web/components/messages/messaging-interface.tsx",
                            lineNumber: 246,
                            columnNumber: 29
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/apps/web/components/messages/messaging-interface.tsx",
                        lineNumber: 245,
                        columnNumber: 25
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$messages$2f$message$2d$list$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MessageList"], {
                        messages: messages,
                        currentUserId: currentUserId
                    }, void 0, false, {
                        fileName: "[project]/apps/web/components/messages/messaging-interface.tsx",
                        lineNumber: 249,
                        columnNumber: 25
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$messages$2f$message$2d$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MessageInput"], {
                        conversationId: selectedConversation.id,
                        onMessageSent: handleMessageSent
                    }, void 0, false, {
                        fileName: "[project]/apps/web/components/messages/messaging-interface.tsx",
                        lineNumber: 253,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/components/messages/messaging-interface.tsx",
                lineNumber: 203,
                columnNumber: 17
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 flex items-center justify-center bg-gray-50",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-20 w-20 mx-auto rounded-3xl bg-white shadow-xl shadow-gray-200/50 flex items-center justify-center text-blue-500",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__["MessageSquare"], {
                                className: "h-10 w-10"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/components/messages/messaging-interface.tsx",
                                lineNumber: 259,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/apps/web/components/messages/messaging-interface.tsx",
                            lineNumber: 258,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm font-bold text-gray-400 uppercase tracking-widest",
                            children: "Selecciona una conversación"
                        }, void 0, false, {
                            fileName: "[project]/apps/web/components/messages/messaging-interface.tsx",
                            lineNumber: 261,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/components/messages/messaging-interface.tsx",
                    lineNumber: 257,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/web/components/messages/messaging-interface.tsx",
                lineNumber: 256,
                columnNumber: 17
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$messages$2f$new$2d$chat$2d$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NewChatDialog"], {
                open: isNewChatOpen,
                onOpenChange: setIsNewChatOpen,
                onConversationCreated: (id)=>refreshConversations(id)
            }, void 0, false, {
                fileName: "[project]/apps/web/components/messages/messaging-interface.tsx",
                lineNumber: 266,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/components/messages/messaging-interface.tsx",
        lineNumber: 150,
        columnNumber: 9
    }, this);
}
}),
];

//# sourceMappingURL=apps_web_df452fb5._.js.map