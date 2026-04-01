(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/apps/web/components/ui/card.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Card",
    ()=>Card,
    "CardAction",
    ()=>CardAction,
    "CardContent",
    ()=>CardContent,
    "CardDescription",
    ()=>CardDescription,
    "CardFooter",
    ()=>CardFooter,
    "CardHeader",
    ()=>CardHeader,
    "CardTitle",
    ()=>CardTitle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/utils.ts [app-client] (ecmascript)");
;
;
function Card({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/apps/web/components/ui/card.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = Card;
function CardHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/apps/web/components/ui/card.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
_c1 = CardHeader;
function CardTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("leading-none font-semibold", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/apps/web/components/ui/card.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
_c2 = CardTitle;
function CardDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-muted-foreground text-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/apps/web/components/ui/card.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
_c3 = CardDescription;
function CardAction({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-action",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("col-start-2 row-span-2 row-start-1 self-start justify-self-end", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/apps/web/components/ui/card.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
_c4 = CardAction;
function CardContent({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-content",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("px-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/apps/web/components/ui/card.tsx",
        lineNumber: 66,
        columnNumber: 5
    }, this);
}
_c5 = CardContent;
function CardFooter({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center px-6 [.border-t]:pt-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/apps/web/components/ui/card.tsx",
        lineNumber: 76,
        columnNumber: 5
    }, this);
}
_c6 = CardFooter;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6;
__turbopack_context__.k.register(_c, "Card");
__turbopack_context__.k.register(_c1, "CardHeader");
__turbopack_context__.k.register(_c2, "CardTitle");
__turbopack_context__.k.register(_c3, "CardDescription");
__turbopack_context__.k.register(_c4, "CardAction");
__turbopack_context__.k.register(_c5, "CardContent");
__turbopack_context__.k.register(_c6, "CardFooter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/components/ui/badge.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Badge",
    ()=>Badge,
    "badgeVariants",
    ()=>badgeVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/utils.ts [app-client] (ecmascript)");
;
;
;
const badgeVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2", {
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(badgeVariants({
            variant
        }), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/apps/web/components/ui/badge.tsx",
        lineNumber: 32,
        columnNumber: 9
    }, this);
}
_c = Badge;
;
var _c;
__turbopack_context__.k.register(_c, "Badge");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/components/ui/table.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Table",
    ()=>Table,
    "TableBody",
    ()=>TableBody,
    "TableCaption",
    ()=>TableCaption,
    "TableCell",
    ()=>TableCell,
    "TableFooter",
    ()=>TableFooter,
    "TableHead",
    ()=>TableHead,
    "TableHeader",
    ()=>TableHeader,
    "TableRow",
    ()=>TableRow
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
function Table({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "table-container",
        className: "relative w-full overflow-x-auto",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
            "data-slot": "table",
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-full caption-bottom text-sm", className),
            ...props
        }, void 0, false, {
            fileName: "[project]/apps/web/components/ui/table.tsx",
            lineNumber: 13,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/web/components/ui/table.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
_c = Table;
function TableHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
        "data-slot": "table-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("[&_tr]:border-b", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/apps/web/components/ui/table.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, this);
}
_c1 = TableHeader;
function TableBody({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
        "data-slot": "table-body",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("[&_tr:last-child]:border-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/apps/web/components/ui/table.tsx",
        lineNumber: 34,
        columnNumber: 5
    }, this);
}
_c2 = TableBody;
function TableFooter({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tfoot", {
        "data-slot": "table-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-muted/50 border-t font-medium [&>tr]:last:border-b-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/apps/web/components/ui/table.tsx",
        lineNumber: 44,
        columnNumber: 5
    }, this);
}
_c3 = TableFooter;
function TableRow({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
        "data-slot": "table-row",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/apps/web/components/ui/table.tsx",
        lineNumber: 57,
        columnNumber: 5
    }, this);
}
_c4 = TableRow;
function TableHead({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
        "data-slot": "table-head",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-foreground h-10 px-2 text-left align-middle font-medium whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/apps/web/components/ui/table.tsx",
        lineNumber: 70,
        columnNumber: 5
    }, this);
}
_c5 = TableHead;
function TableCell({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
        "data-slot": "table-cell",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/apps/web/components/ui/table.tsx",
        lineNumber: 83,
        columnNumber: 5
    }, this);
}
_c6 = TableCell;
function TableCaption({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("caption", {
        "data-slot": "table-caption",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-muted-foreground mt-4 text-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/apps/web/components/ui/table.tsx",
        lineNumber: 99,
        columnNumber: 5
    }, this);
}
_c7 = TableCaption;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7;
__turbopack_context__.k.register(_c, "Table");
__turbopack_context__.k.register(_c1, "TableHeader");
__turbopack_context__.k.register(_c2, "TableBody");
__turbopack_context__.k.register(_c3, "TableFooter");
__turbopack_context__.k.register(_c4, "TableRow");
__turbopack_context__.k.register(_c5, "TableHead");
__turbopack_context__.k.register(_c6, "TableCell");
__turbopack_context__.k.register(_c7, "TableCaption");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/components/ui/dialog.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-dialog/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as XIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
function Dialog({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "dialog",
        ...props
    }, void 0, false, {
        fileName: "[project]/apps/web/components/ui/dialog.tsx",
        lineNumber: 12,
        columnNumber: 10
    }, this);
}
_c = Dialog;
function DialogTrigger({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"], {
        "data-slot": "dialog-trigger",
        ...props
    }, void 0, false, {
        fileName: "[project]/apps/web/components/ui/dialog.tsx",
        lineNumber: 18,
        columnNumber: 10
    }, this);
}
_c1 = DialogTrigger;
function DialogPortal({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"], {
        "data-slot": "dialog-portal",
        ...props
    }, void 0, false, {
        fileName: "[project]/apps/web/components/ui/dialog.tsx",
        lineNumber: 24,
        columnNumber: 10
    }, this);
}
_c2 = DialogPortal;
function DialogClose({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Close"], {
        "data-slot": "dialog-close",
        ...props
    }, void 0, false, {
        fileName: "[project]/apps/web/components/ui/dialog.tsx",
        lineNumber: 30,
        columnNumber: 10
    }, this);
}
_c3 = DialogClose;
function DialogOverlay({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Overlay"], {
        "data-slot": "dialog-overlay",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/apps/web/components/ui/dialog.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
_c4 = DialogOverlay;
function DialogContent({ className, children, showCloseButton = true, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DialogPortal, {
        "data-slot": "dialog-portal",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DialogOverlay, {}, void 0, false, {
                fileName: "[project]/apps/web/components/ui/dialog.tsx",
                lineNumber: 59,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
                "data-slot": "dialog-content",
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 outline-none sm:max-w-lg", className),
                ...props,
                children: [
                    children,
                    showCloseButton && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Close"], {
                        "data-slot": "dialog-close",
                        className: "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XIcon$3e$__["XIcon"], {}, void 0, false, {
                                fileName: "[project]/apps/web/components/ui/dialog.tsx",
                                lineNumber: 74,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
_c5 = DialogContent;
function DialogHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "dialog-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col gap-2 text-center sm:text-left", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/apps/web/components/ui/dialog.tsx",
        lineNumber: 85,
        columnNumber: 5
    }, this);
}
_c6 = DialogHeader;
function DialogFooter({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "dialog-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/apps/web/components/ui/dialog.tsx",
        lineNumber: 95,
        columnNumber: 5
    }, this);
}
_c7 = DialogFooter;
function DialogTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Title"], {
        "data-slot": "dialog-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-lg leading-none font-semibold", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/apps/web/components/ui/dialog.tsx",
        lineNumber: 111,
        columnNumber: 5
    }, this);
}
_c8 = DialogTitle;
function DialogDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Description"], {
        "data-slot": "dialog-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-muted-foreground text-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/apps/web/components/ui/dialog.tsx",
        lineNumber: 124,
        columnNumber: 5
    }, this);
}
_c9 = DialogDescription;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9;
__turbopack_context__.k.register(_c, "Dialog");
__turbopack_context__.k.register(_c1, "DialogTrigger");
__turbopack_context__.k.register(_c2, "DialogPortal");
__turbopack_context__.k.register(_c3, "DialogClose");
__turbopack_context__.k.register(_c4, "DialogOverlay");
__turbopack_context__.k.register(_c5, "DialogContent");
__turbopack_context__.k.register(_c6, "DialogHeader");
__turbopack_context__.k.register(_c7, "DialogFooter");
__turbopack_context__.k.register(_c8, "DialogTitle");
__turbopack_context__.k.register(_c9, "DialogDescription");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/components/ui/select.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Select",
    ()=>Select,
    "SelectContent",
    ()=>SelectContent,
    "SelectGroup",
    ()=>SelectGroup,
    "SelectItem",
    ()=>SelectItem,
    "SelectLabel",
    ()=>SelectLabel,
    "SelectScrollDownButton",
    ()=>SelectScrollDownButton,
    "SelectScrollUpButton",
    ()=>SelectScrollUpButton,
    "SelectSeparator",
    ()=>SelectSeparator,
    "SelectTrigger",
    ()=>SelectTrigger,
    "SelectValue",
    ()=>SelectValue
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-select/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as CheckIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDownIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDownIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUpIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-up.js [app-client] (ecmascript) <export default as ChevronUpIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
function Select({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "select",
        ...props
    }, void 0, false, {
        fileName: "[project]/apps/web/components/ui/select.tsx",
        lineNumber: 12,
        columnNumber: 10
    }, this);
}
_c = Select;
function SelectGroup({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"], {
        "data-slot": "select-group",
        ...props
    }, void 0, false, {
        fileName: "[project]/apps/web/components/ui/select.tsx",
        lineNumber: 18,
        columnNumber: 10
    }, this);
}
_c1 = SelectGroup;
function SelectValue({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Value"], {
        "data-slot": "select-value",
        ...props
    }, void 0, false, {
        fileName: "[project]/apps/web/components/ui/select.tsx",
        lineNumber: 24,
        columnNumber: 10
    }, this);
}
_c2 = SelectValue;
function SelectTrigger({ className, size = "default", children, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"], {
        "data-slot": "select-trigger",
        "data-size": size,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("border-input data-[placeholder]:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 flex w-fit items-center justify-between gap-2 rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className),
        ...props,
        children: [
            children,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                asChild: true,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDownIcon$3e$__["ChevronDownIcon"], {
                    className: "size-4 opacity-50"
                }, void 0, false, {
                    fileName: "[project]/apps/web/components/ui/select.tsx",
                    lineNumber: 47,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/web/components/ui/select.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/components/ui/select.tsx",
        lineNumber: 36,
        columnNumber: 5
    }, this);
}
_c3 = SelectTrigger;
function SelectContent({ className, children, position = "item-aligned", align = "center", ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
            "data-slot": "select-content",
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border shadow-md", position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", className),
            position: position,
            align: align,
            ...props,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SelectScrollUpButton, {}, void 0, false, {
                    fileName: "[project]/apps/web/components/ui/select.tsx",
                    lineNumber: 74,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Viewport"], {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("p-1", position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1"),
                    children: children
                }, void 0, false, {
                    fileName: "[project]/apps/web/components/ui/select.tsx",
                    lineNumber: 75,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SelectScrollDownButton, {}, void 0, false, {
                    fileName: "[project]/apps/web/components/ui/select.tsx",
                    lineNumber: 84,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/apps/web/components/ui/select.tsx",
            lineNumber: 62,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/web/components/ui/select.tsx",
        lineNumber: 61,
        columnNumber: 5
    }, this);
}
_c4 = SelectContent;
function SelectLabel({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
        "data-slot": "select-label",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-muted-foreground px-2 py-1.5 text-xs", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/apps/web/components/ui/select.tsx",
        lineNumber: 95,
        columnNumber: 5
    }, this);
}
_c5 = SelectLabel;
function SelectItem({ className, children, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Item"], {
        "data-slot": "select-item",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("focus:bg-accent focus:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2", className),
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                "data-slot": "select-item-indicator",
                className: "absolute right-2 flex size-3.5 items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ItemIndicator"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckIcon$3e$__["CheckIcon"], {
                        className: "size-4"
                    }, void 0, false, {
                        fileName: "[project]/apps/web/components/ui/select.tsx",
                        lineNumber: 122,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/apps/web/components/ui/select.tsx",
                    lineNumber: 121,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/web/components/ui/select.tsx",
                lineNumber: 117,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ItemText"], {
                children: children
            }, void 0, false, {
                fileName: "[project]/apps/web/components/ui/select.tsx",
                lineNumber: 125,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/components/ui/select.tsx",
        lineNumber: 109,
        columnNumber: 5
    }, this);
}
_c6 = SelectItem;
function SelectSeparator({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Separator"], {
        "data-slot": "select-separator",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-border pointer-events-none -mx-1 my-1 h-px", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/apps/web/components/ui/select.tsx",
        lineNumber: 135,
        columnNumber: 5
    }, this);
}
_c7 = SelectSeparator;
function SelectScrollUpButton({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollUpButton"], {
        "data-slot": "select-scroll-up-button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex cursor-default items-center justify-center py-1", className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUpIcon$3e$__["ChevronUpIcon"], {
            className: "size-4"
        }, void 0, false, {
            fileName: "[project]/apps/web/components/ui/select.tsx",
            lineNumber: 156,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/web/components/ui/select.tsx",
        lineNumber: 148,
        columnNumber: 5
    }, this);
}
_c8 = SelectScrollUpButton;
function SelectScrollDownButton({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollDownButton"], {
        "data-slot": "select-scroll-down-button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex cursor-default items-center justify-center py-1", className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDownIcon$3e$__["ChevronDownIcon"], {
            className: "size-4"
        }, void 0, false, {
            fileName: "[project]/apps/web/components/ui/select.tsx",
            lineNumber: 174,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/web/components/ui/select.tsx",
        lineNumber: 166,
        columnNumber: 5
    }, this);
}
_c9 = SelectScrollDownButton;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9;
__turbopack_context__.k.register(_c, "Select");
__turbopack_context__.k.register(_c1, "SelectGroup");
__turbopack_context__.k.register(_c2, "SelectValue");
__turbopack_context__.k.register(_c3, "SelectTrigger");
__turbopack_context__.k.register(_c4, "SelectContent");
__turbopack_context__.k.register(_c5, "SelectLabel");
__turbopack_context__.k.register(_c6, "SelectItem");
__turbopack_context__.k.register(_c7, "SelectSeparator");
__turbopack_context__.k.register(_c8, "SelectScrollUpButton");
__turbopack_context__.k.register(_c9, "SelectScrollDownButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/components/ui/tabs.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-tabs/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
function Tabs({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "tabs",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col gap-2", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/apps/web/components/ui/tabs.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
_c = Tabs;
function TabsList({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["List"], {
        "data-slot": "tabs-list",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-muted text-muted-foreground inline-flex h-9 w-fit items-center justify-center rounded-lg p-[3px]", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/apps/web/components/ui/tabs.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
_c1 = TabsList;
function TabsTrigger({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"], {
        "data-slot": "tabs-trigger",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("data-[state=active]:bg-background dark:data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 text-foreground dark:text-muted-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/apps/web/components/ui/tabs.tsx",
        lineNumber: 42,
        columnNumber: 5
    }, this);
}
_c2 = TabsTrigger;
function TabsContent({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
        "data-slot": "tabs-content",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex-1 outline-none", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/apps/web/components/ui/tabs.tsx",
        lineNumber: 58,
        columnNumber: 5
    }, this);
}
_c3 = TabsContent;
;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "Tabs");
__turbopack_context__.k.register(_c1, "TabsList");
__turbopack_context__.k.register(_c2, "TabsTrigger");
__turbopack_context__.k.register(_c3, "TabsContent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/components/ui/label.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Label",
    ()=>Label
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$label$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-label/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
;
const labelVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70");
const Label = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$label$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(labelVariants(), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/apps/web/components/ui/label.tsx",
        lineNumber: 18,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c1 = Label;
Label.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$label$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"].displayName;
;
var _c, _c1;
__turbopack_context__.k.register(_c, "Label$React.forwardRef");
__turbopack_context__.k.register(_c1, "Label");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/app/actions/data:a40f50 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getAgents",
    ()=>$$RSC_SERVER_ACTION_0
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"004c42836cbe9b34bc1b19ef6bfca3d82f2a09830b":"getAgents"},"apps/web/app/actions/agents.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("004c42836cbe9b34bc1b19ef6bfca3d82f2a09830b", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "getAgents");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWdlbnRzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHNlcnZlclwiXHJcblxyXG5pbXBvcnQgeyBjcmVhdGVDbGllbnQsIGNyZWF0ZUFkbWluQ2xpZW50LCBnZXRUZW5hbnRJZCB9IGZyb20gXCJAL2xpYi9zdXBhYmFzZS9zZXJ2ZXJcIlxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEFnZW50cygpIHtcclxuICAgIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KClcclxuICAgIGNvbnN0IHRlbmFudElkID0gYXdhaXQgZ2V0VGVuYW50SWQoc3VwYWJhc2UpXHJcblxyXG4gICAgaWYgKCF0ZW5hbnRJZCkgcmV0dXJuIFtdXHJcblxyXG4gICAgLy8gRmV0Y2ggcHJvZmlsZXMgd2l0aCByb2xlcyBhbmQgYnJhbmNoZXNcclxuICAgIC8vIFdlIHVzZSBqb2luIHRocm91Z2ggdXNlcl9yb2xlX2Fzc2lnbm1lbnRzIC0+IHJvbGVzIGFuZCB1c2VyX2JyYW5jaGVzIC0+IGJyYW5jaGVzXHJcbiAgICBjb25zdCB7IGRhdGE6IHByb2ZpbGVzLCBlcnJvcjogcHJvZmlsZUVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAgIC5mcm9tKFwicHJvZmlsZXNcIilcclxuICAgICAgICAuc2VsZWN0KGBcclxuICAgICAgICAgICAgKixcclxuICAgICAgICAgICAgdXNlcl9yb2xlX2Fzc2lnbm1lbnRzIChcclxuICAgICAgICAgICAgICAgIHJvbGVzIChcclxuICAgICAgICAgICAgICAgICAgICBpZCxcclxuICAgICAgICAgICAgICAgICAgICBuYW1lXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgIHVzZXJfYnJhbmNoZXMgKFxyXG4gICAgICAgICAgICAgICAgYnJhbmNoZXMgKFxyXG4gICAgICAgICAgICAgICAgICAgIGlkLFxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWVcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIGApXHJcbiAgICAgICAgLmVxKFwidGVuYW50X2lkXCIsIHRlbmFudElkKVxyXG4gICAgICAgIC5vcmRlcihcIm5hbWVcIiwgeyBhc2NlbmRpbmc6IHRydWUgfSlcclxuXHJcbiAgICBpZiAocHJvZmlsZUVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIGFnZW50czpcIiwgcHJvZmlsZUVycm9yKVxyXG4gICAgICAgIHJldHVybiBbXVxyXG4gICAgfVxyXG5cclxuICAgIC8vIEZldGNoIHBlbmRpbmcgaW52aXRhdGlvbnNcclxuICAgIGNvbnN0IHsgZGF0YTogaW52aXRhdGlvbnMsIGVycm9yOiBpbnZpdGVFcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgICAuZnJvbShcImludml0YXRpb25zXCIpXHJcbiAgICAgICAgLnNlbGVjdChgXHJcbiAgICAgICAgICAgICosXHJcbiAgICAgICAgICAgIHJvbGVzIChpZCwgbmFtZSksXHJcbiAgICAgICAgICAgIGJyYW5jaGVzIChpZCwgbmFtZSlcclxuICAgICAgICBgKVxyXG4gICAgICAgIC5lcShcInRlbmFudF9pZFwiLCB0ZW5hbnRJZClcclxuICAgICAgICAuZXEoXCJzdGF0dXNcIiwgXCJwZW5kaW5nXCIpXHJcblxyXG4gICAgaWYgKGludml0ZUVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIGludml0YXRpb25zOlwiLCBpbnZpdGVFcnJvcilcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBhZ2VudHMgPSBwcm9maWxlcy5tYXAocHJvZmlsZSA9PiAoe1xyXG4gICAgICAgIC4uLnByb2ZpbGUsXHJcbiAgICAgICAgcm9sZXM6IHByb2ZpbGUudXNlcl9yb2xlX2Fzc2lnbm1lbnRzPy5tYXAoKHJhOiBhbnkpID0+IHJhLnJvbGVzKSB8fCBbXSxcclxuICAgICAgICBicmFuY2hlczogcHJvZmlsZS51c2VyX2JyYW5jaGVzPy5tYXAoKHViOiBhbnkpID0+IHViLmJyYW5jaGVzKSB8fCBbXSxcclxuICAgICAgICBpc19pbnZpdGF0aW9uOiBmYWxzZVxyXG4gICAgfSkpXHJcblxyXG4gICAgY29uc3QgaW52aXRlZEFnZW50cyA9IChpbnZpdGF0aW9ucyB8fCBbXSkubWFwKGludml0ZSA9PiAoe1xyXG4gICAgICAgIGlkOiBpbnZpdGUuaWQsXHJcbiAgICAgICAgbmFtZTogaW52aXRlLm5hbWUsXHJcbiAgICAgICAgZW1haWw6IGludml0ZS5lbWFpbCxcclxuICAgICAgICByb2xlczogaW52aXRlLnJvbGVzID8gW2ludml0ZS5yb2xlc10gOiBbXSxcclxuICAgICAgICBicmFuY2hlczogaW52aXRlLmJyYW5jaGVzID8gW2ludml0ZS5icmFuY2hlc10gOiBbXSxcclxuICAgICAgICBjcmVhdGVkX2F0OiBpbnZpdGUuaW52aXRlZF9hdCxcclxuICAgICAgICBpc19pbnZpdGF0aW9uOiB0cnVlLFxyXG4gICAgICAgIHN0YXR1czogJ3BlbmRpbmcnXHJcbiAgICB9KSlcclxuXHJcbiAgICByZXR1cm4gWy4uLmFnZW50cywgLi4uaW52aXRlZEFnZW50c10uc29ydCgoYSwgYikgPT5cclxuICAgICAgICAoYS5uYW1lIHx8ICcnKS5sb2NhbGVDb21wYXJlKGIubmFtZSB8fCAnJylcclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFJvbGVzKCkge1xyXG4gICAgY29uc3Qgc3VwYWJhc2UgPSBhd2FpdCBjcmVhdGVDbGllbnQoKVxyXG4gICAgY29uc3QgdGVuYW50SWQgPSBhd2FpdCBnZXRUZW5hbnRJZChzdXBhYmFzZSlcclxuXHJcbiAgICBpZiAoIXRlbmFudElkKSByZXR1cm4gW11cclxuXHJcbiAgICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAgIC5mcm9tKFwicm9sZXNcIilcclxuICAgICAgICAuc2VsZWN0KFwiKlwiKVxyXG4gICAgICAgIC5lcShcInRlbmFudF9pZFwiLCB0ZW5hbnRJZClcclxuICAgICAgICAub3JkZXIoXCJuYW1lXCIsIHsgYXNjZW5kaW5nOiB0cnVlIH0pXHJcblxyXG4gICAgaWYgKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIHJvbGVzOlwiLCBlcnJvcilcclxuICAgICAgICByZXR1cm4gW11cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZGF0YVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QnJhbmNoZXMoKSB7XHJcbiAgICBjb25zdCBzdXBhYmFzZSA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpXHJcbiAgICBjb25zdCB0ZW5hbnRJZCA9IGF3YWl0IGdldFRlbmFudElkKHN1cGFiYXNlKVxyXG5cclxuICAgIGlmICghdGVuYW50SWQpIHJldHVybiBbXVxyXG5cclxuICAgIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgICAgLmZyb20oXCJicmFuY2hlc1wiKVxyXG4gICAgICAgIC5zZWxlY3QoXCIqXCIpXHJcbiAgICAgICAgLmVxKFwidGVuYW50X2lkXCIsIHRlbmFudElkKVxyXG4gICAgICAgIC5vcmRlcihcIm5hbWVcIiwgeyBhc2NlbmRpbmc6IHRydWUgfSlcclxuXHJcbiAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgYnJhbmNoZXM6XCIsIGVycm9yKVxyXG4gICAgICAgIHJldHVybiBbXVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBkYXRhXHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVBZ2VudFJvbGUoYWdlbnRJZDogc3RyaW5nLCByb2xlSWQ6IHN0cmluZykge1xyXG4gICAgY29uc3Qgc3VwYWJhc2UgPSBhd2FpdCBjcmVhdGVDbGllbnQoKVxyXG4gICAgY29uc3QgdGVuYW50SWQgPSBhd2FpdCBnZXRUZW5hbnRJZChzdXBhYmFzZSlcclxuXHJcbiAgICBpZiAoIXRlbmFudElkKSB0aHJvdyBuZXcgRXJyb3IoXCJVbmF1dGhvcml6ZWRcIilcclxuXHJcbiAgICAvLyBUcnkgdXBkYXRpbmcgaW52aXRhdGlvbiBmaXJzdCAoaXQncyBzaW1wbGVyIGFuZCBtb3JlIGRpcmVjdCBmb3IgdGhlIHVzZXIgSUQgcHJvdmlkZWQgaWYgaXQncyBhbiBpbnZpdGUpXHJcbiAgICBjb25zdCB7IGRhdGE6IGludml0ZVVwZGF0ZSwgZXJyb3I6IGludml0ZUVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAgIC5mcm9tKFwiaW52aXRhdGlvbnNcIilcclxuICAgICAgICAudXBkYXRlKHsgcm9sZV9pZDogcm9sZUlkIH0pXHJcbiAgICAgICAgLmVxKFwiaWRcIiwgYWdlbnRJZClcclxuICAgICAgICAuZXEoXCJ0ZW5hbnRfaWRcIiwgdGVuYW50SWQpXHJcbiAgICAgICAgLnNlbGVjdCgpXHJcblxyXG4gICAgLy8gSWYgaXQgd2FzIGFuIGludml0YXRpb24gYW5kIHdhcyB1cGRhdGVkLCB3ZSBhcmUgZG9uZVxyXG4gICAgaWYgKCFpbnZpdGVFcnJvciAmJiBpbnZpdGVVcGRhdGUgJiYgaW52aXRlVXBkYXRlLmxlbmd0aCA+IDApIHtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBPdGhlcndpc2UsIGFzc3VtZSBpdCdzIGEgcHJvZmlsZVxyXG4gICAgLy8gRmlyc3QgZGVsZXRlIGV4aXN0aW5nIGFzc2lnbm1lbnRzIGZvciB0aGlzIHVzZXJcclxuICAgIGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgICAgLmZyb20oXCJ1c2VyX3JvbGVfYXNzaWdubWVudHNcIilcclxuICAgICAgICAuZGVsZXRlKClcclxuICAgICAgICAuZXEoXCJ1c2VyX2lkXCIsIGFnZW50SWQpXHJcblxyXG4gICAgY29uc3QgeyBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgICAuZnJvbShcInVzZXJfcm9sZV9hc3NpZ25tZW50c1wiKVxyXG4gICAgICAgIC5pbnNlcnQoe1xyXG4gICAgICAgICAgICB1c2VyX2lkOiBhZ2VudElkLFxyXG4gICAgICAgICAgICByb2xlX2lkOiByb2xlSWRcclxuICAgICAgICB9KVxyXG5cclxuICAgIGlmIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciB1cGRhdGluZyBhZ2VudCByb2xlOlwiLCBlcnJvcilcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJObyBzZSBwdWRvIGFjdHVhbGl6YXIgZWwgcm9sLiBWZXJpZmlxdWUgcXVlIGVsIHVzdWFyaW8gbyBpbnZpdGFjacOzbiBzZWEgdsOhbGlkby5cIilcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGludml0ZUFnZW50KGRhdGE6IHsgbmFtZTogc3RyaW5nLCBlbWFpbDogc3RyaW5nLCByb2xlSWQ6IHN0cmluZywgYnJhbmNoSWQ6IHN0cmluZyB9KSB7XHJcbiAgICBjb25zdCBzdXBhYmFzZSA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpXHJcbiAgICBjb25zdCBhZG1pblN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQWRtaW5DbGllbnQoKVxyXG4gICAgY29uc3QgdGVuYW50SWQgPSBhd2FpdCBnZXRUZW5hbnRJZChzdXBhYmFzZSlcclxuXHJcbiAgICBpZiAoIXRlbmFudElkKSB0aHJvdyBuZXcgRXJyb3IoXCJVbmF1dGhvcml6ZWRcIilcclxuXHJcbiAgICAvLyBDaGVjayBpZiBpbnZpdGF0aW9uIGFscmVhZHkgZXhpc3RzIGZvciB0aGlzIGVtYWlsXHJcbiAgICBjb25zdCB7IGRhdGE6IGV4aXN0aW5nSW52aXRlIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAgIC5mcm9tKFwiaW52aXRhdGlvbnNcIilcclxuICAgICAgICAuc2VsZWN0KFwiKlwiKVxyXG4gICAgICAgIC5lcShcInRlbmFudF9pZFwiLCB0ZW5hbnRJZClcclxuICAgICAgICAuZXEoXCJlbWFpbFwiLCBkYXRhLmVtYWlsKVxyXG4gICAgICAgIC5lcShcInN0YXR1c1wiLCBcInBlbmRpbmdcIilcclxuICAgICAgICAuc2luZ2xlKClcclxuXHJcbiAgICBpZiAoZXhpc3RpbmdJbnZpdGUpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJZYSBleGlzdGUgdW5hIGludml0YWNpw7NuIHBlbmRpZW50ZSBwYXJhIGVzdGUgY29ycmVvIGVsZWN0csOzbmljb1wiKVxyXG4gICAgfVxyXG5cclxuICAgIC8vIFZhbGlkYXRlIHRoYXQgcm9sZUlkIGFuZCBicmFuY2hJZCBhcmUgdmFsaWQgVVVJRHMgb3IgbnVsbFxyXG4gICAgY29uc3Qgcm9sZUlkID0gZGF0YS5yb2xlSWQgPT09IFwiXCIgPyBudWxsIDogZGF0YS5yb2xlSWRcclxuICAgIGNvbnN0IGJyYW5jaElkID0gZGF0YS5icmFuY2hJZCA9PT0gXCJcIiA/IG51bGwgOiBkYXRhLmJyYW5jaElkXHJcblxyXG4gICAgLy8gMS4gU2VuZCBuYXRpdmUgU3VwYWJhc2UgaW52aXRhdGlvbiB3aXRoIG1ldGFkYXRhXHJcbiAgICBjb25zdCB7IGRhdGE6IGF1dGhEYXRhLCBlcnJvcjogYXV0aEVycm9yIH0gPSBhd2FpdCBhZG1pblN1cGFiYXNlLmF1dGguYWRtaW4uaW52aXRlVXNlckJ5RW1haWwoZGF0YS5lbWFpbCwge1xyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgdGVuYW50X2lkOiB0ZW5hbnRJZCxcclxuICAgICAgICAgICAgcm9sZV9pZDogcm9sZUlkLFxyXG4gICAgICAgICAgICBicmFuY2hfaWQ6IGJyYW5jaElkLFxyXG4gICAgICAgICAgICBmdWxsX25hbWU6IGRhdGEubmFtZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcmVkaXJlY3RUbzogYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU0lURV9VUkwgfHwgJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMCd9L2F1dGgvY2FsbGJhY2tgXHJcbiAgICB9KVxyXG5cclxuICAgIGlmIChhdXRoRXJyb3IpIHtcclxuICAgICAgICAvLyBJZiB1c2VyIGFscmVhZHkgZXhpc3RzLCBjaGVjayBpZiB0aGV5IGFyZSBhbHJlYWR5IGluIHRoZSB0ZW5hbnRcclxuICAgICAgICBpZiAoYXV0aEVycm9yLm1lc3NhZ2UuaW5jbHVkZXMoXCJhbHJlYWR5IGJlZW4gcmVnaXN0ZXJlZFwiKSB8fCBhdXRoRXJyb3Iuc3RhdHVzID09PSA0MjIpIHtcclxuICAgICAgICAgICAgY29uc3QgeyBkYXRhOiBwcm9maWxlRXhpc3RzIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAgICAgICAgICAgLmZyb20oXCJwcm9maWxlc1wiKVxyXG4gICAgICAgICAgICAgICAgLnNlbGVjdChcImlkXCIpXHJcbiAgICAgICAgICAgICAgICAuZXEoXCJlbWFpbFwiLCBkYXRhLmVtYWlsKVxyXG4gICAgICAgICAgICAgICAgLmVxKFwidGVuYW50X2lkXCIsIHRlbmFudElkKVxyXG4gICAgICAgICAgICAgICAgLm1heWJlU2luZ2xlKClcclxuXHJcbiAgICAgICAgICAgIGlmIChwcm9maWxlRXhpc3RzKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiRXN0ZSB1c3VhcmlvIHlhIGVzIHBhcnRlIGRlIHR1IGVxdWlwb1wiIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIkVzdGUgY29ycmVvIHlhIGVzdMOhIHJlZ2lzdHJhZG8gZW4gbGEgcGxhdGFmb3JtYS4gUGFyYSBzdW1hcmxvIGEgdHUgZXF1aXBvLCB1c2EgZWwgbWlzbW8gY29ycmVvIGVuIGxhIHNlY2Npw7NuIGRlIFJlZCBvIGNvbnRhY3RhIGEgc29wb3J0ZS5cIiB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiQXV0aCBJbnZpdGUgRXJyb3I6XCIsIGF1dGhFcnJvcilcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGBFcnJvciBhbCBlbnZpYXIgaW52aXRhY2nDs246ICR7YXV0aEVycm9yLm1lc3NhZ2V9YCB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gMi4gSW5zZXJ0IGludG8gb3VyIGxvY2FsIGludml0YXRpb25zIHRhYmxlIGZvciBVSSB0cmFja2luZ1xyXG4gICAgY29uc3QgeyBlcnJvcjogZGJFcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgICAuZnJvbShcImludml0YXRpb25zXCIpXHJcbiAgICAgICAgLmluc2VydCh7XHJcbiAgICAgICAgICAgIHRlbmFudF9pZDogdGVuYW50SWQsXHJcbiAgICAgICAgICAgIG5hbWU6IGRhdGEubmFtZSxcclxuICAgICAgICAgICAgZW1haWw6IGRhdGEuZW1haWwsXHJcbiAgICAgICAgICAgIHJvbGVfaWQ6IHJvbGVJZCxcclxuICAgICAgICAgICAgYnJhbmNoX2lkOiBicmFuY2hJZCxcclxuICAgICAgICAgICAgc3RhdHVzOiAncGVuZGluZydcclxuICAgICAgICB9KVxyXG5cclxuICAgIGlmIChkYkVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkRhdGFiYXNlIEVycm9yOlwiLCBkYkVycm9yKVxyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogYEVycm9yIGVuIGxhIGJhc2UgZGUgZGF0b3M6ICR7ZGJFcnJvci5tZXNzYWdlfWAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlQWdlbnQoYWdlbnRJZDogc3RyaW5nKSB7XHJcbiAgICBjb25zdCBzdXBhYmFzZSA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpXHJcbiAgICBjb25zdCB0ZW5hbnRJZCA9IGF3YWl0IGdldFRlbmFudElkKHN1cGFiYXNlKVxyXG5cclxuICAgIGlmICghdGVuYW50SWQpIHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZFwiKVxyXG5cclxuICAgIC8vIFRyeSBkZWxldGluZyBmcm9tIGludml0YXRpb25zIGZpcnN0XHJcbiAgICBjb25zdCB7IGRhdGE6IGludml0ZURlbGV0ZSwgZXJyb3I6IGludml0ZUVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAgIC5mcm9tKFwiaW52aXRhdGlvbnNcIilcclxuICAgICAgICAuZGVsZXRlKClcclxuICAgICAgICAuZXEoXCJpZFwiLCBhZ2VudElkKVxyXG4gICAgICAgIC5lcShcInRlbmFudF9pZFwiLCB0ZW5hbnRJZClcclxuICAgICAgICAuc2VsZWN0KClcclxuXHJcbiAgICBpZiAoIWludml0ZUVycm9yICYmIGludml0ZURlbGV0ZSAmJiBpbnZpdGVEZWxldGUubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIE90aGVyd2lzZSwgYXNzdW1lIGl0J3MgYSBwcm9maWxlXHJcbiAgICBjb25zdCB7IGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAgIC5mcm9tKFwicHJvZmlsZXNcIilcclxuICAgICAgICAuZGVsZXRlKClcclxuICAgICAgICAuZXEoXCJpZFwiLCBhZ2VudElkKVxyXG4gICAgICAgIC5lcShcInRlbmFudF9pZFwiLCB0ZW5hbnRJZClcclxuXHJcbiAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZGVsZXRpbmcgYWdlbnQ6XCIsIGVycm9yKVxyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vIHNlIHB1ZG8gZWxpbWluYXIgZWwgaW50ZWdyYW50ZSBkZWwgZXF1aXBvXCIpXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI0UkFJc0Isc0xBQUEifQ==
}),
"[project]/apps/web/app/actions/data:13dd5a [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getRoles",
    ()=>$$RSC_SERVER_ACTION_1
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"00bfff2f2315b3c4a9708d2ffa93c9cff96fdb8131":"getRoles"},"apps/web/app/actions/agents.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("00bfff2f2315b3c4a9708d2ffa93c9cff96fdb8131", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "getRoles");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWdlbnRzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHNlcnZlclwiXHJcblxyXG5pbXBvcnQgeyBjcmVhdGVDbGllbnQsIGNyZWF0ZUFkbWluQ2xpZW50LCBnZXRUZW5hbnRJZCB9IGZyb20gXCJAL2xpYi9zdXBhYmFzZS9zZXJ2ZXJcIlxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEFnZW50cygpIHtcclxuICAgIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KClcclxuICAgIGNvbnN0IHRlbmFudElkID0gYXdhaXQgZ2V0VGVuYW50SWQoc3VwYWJhc2UpXHJcblxyXG4gICAgaWYgKCF0ZW5hbnRJZCkgcmV0dXJuIFtdXHJcblxyXG4gICAgLy8gRmV0Y2ggcHJvZmlsZXMgd2l0aCByb2xlcyBhbmQgYnJhbmNoZXNcclxuICAgIC8vIFdlIHVzZSBqb2luIHRocm91Z2ggdXNlcl9yb2xlX2Fzc2lnbm1lbnRzIC0+IHJvbGVzIGFuZCB1c2VyX2JyYW5jaGVzIC0+IGJyYW5jaGVzXHJcbiAgICBjb25zdCB7IGRhdGE6IHByb2ZpbGVzLCBlcnJvcjogcHJvZmlsZUVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAgIC5mcm9tKFwicHJvZmlsZXNcIilcclxuICAgICAgICAuc2VsZWN0KGBcclxuICAgICAgICAgICAgKixcclxuICAgICAgICAgICAgdXNlcl9yb2xlX2Fzc2lnbm1lbnRzIChcclxuICAgICAgICAgICAgICAgIHJvbGVzIChcclxuICAgICAgICAgICAgICAgICAgICBpZCxcclxuICAgICAgICAgICAgICAgICAgICBuYW1lXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgIHVzZXJfYnJhbmNoZXMgKFxyXG4gICAgICAgICAgICAgICAgYnJhbmNoZXMgKFxyXG4gICAgICAgICAgICAgICAgICAgIGlkLFxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWVcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIGApXHJcbiAgICAgICAgLmVxKFwidGVuYW50X2lkXCIsIHRlbmFudElkKVxyXG4gICAgICAgIC5vcmRlcihcIm5hbWVcIiwgeyBhc2NlbmRpbmc6IHRydWUgfSlcclxuXHJcbiAgICBpZiAocHJvZmlsZUVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIGFnZW50czpcIiwgcHJvZmlsZUVycm9yKVxyXG4gICAgICAgIHJldHVybiBbXVxyXG4gICAgfVxyXG5cclxuICAgIC8vIEZldGNoIHBlbmRpbmcgaW52aXRhdGlvbnNcclxuICAgIGNvbnN0IHsgZGF0YTogaW52aXRhdGlvbnMsIGVycm9yOiBpbnZpdGVFcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgICAuZnJvbShcImludml0YXRpb25zXCIpXHJcbiAgICAgICAgLnNlbGVjdChgXHJcbiAgICAgICAgICAgICosXHJcbiAgICAgICAgICAgIHJvbGVzIChpZCwgbmFtZSksXHJcbiAgICAgICAgICAgIGJyYW5jaGVzIChpZCwgbmFtZSlcclxuICAgICAgICBgKVxyXG4gICAgICAgIC5lcShcInRlbmFudF9pZFwiLCB0ZW5hbnRJZClcclxuICAgICAgICAuZXEoXCJzdGF0dXNcIiwgXCJwZW5kaW5nXCIpXHJcblxyXG4gICAgaWYgKGludml0ZUVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIGludml0YXRpb25zOlwiLCBpbnZpdGVFcnJvcilcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBhZ2VudHMgPSBwcm9maWxlcy5tYXAocHJvZmlsZSA9PiAoe1xyXG4gICAgICAgIC4uLnByb2ZpbGUsXHJcbiAgICAgICAgcm9sZXM6IHByb2ZpbGUudXNlcl9yb2xlX2Fzc2lnbm1lbnRzPy5tYXAoKHJhOiBhbnkpID0+IHJhLnJvbGVzKSB8fCBbXSxcclxuICAgICAgICBicmFuY2hlczogcHJvZmlsZS51c2VyX2JyYW5jaGVzPy5tYXAoKHViOiBhbnkpID0+IHViLmJyYW5jaGVzKSB8fCBbXSxcclxuICAgICAgICBpc19pbnZpdGF0aW9uOiBmYWxzZVxyXG4gICAgfSkpXHJcblxyXG4gICAgY29uc3QgaW52aXRlZEFnZW50cyA9IChpbnZpdGF0aW9ucyB8fCBbXSkubWFwKGludml0ZSA9PiAoe1xyXG4gICAgICAgIGlkOiBpbnZpdGUuaWQsXHJcbiAgICAgICAgbmFtZTogaW52aXRlLm5hbWUsXHJcbiAgICAgICAgZW1haWw6IGludml0ZS5lbWFpbCxcclxuICAgICAgICByb2xlczogaW52aXRlLnJvbGVzID8gW2ludml0ZS5yb2xlc10gOiBbXSxcclxuICAgICAgICBicmFuY2hlczogaW52aXRlLmJyYW5jaGVzID8gW2ludml0ZS5icmFuY2hlc10gOiBbXSxcclxuICAgICAgICBjcmVhdGVkX2F0OiBpbnZpdGUuaW52aXRlZF9hdCxcclxuICAgICAgICBpc19pbnZpdGF0aW9uOiB0cnVlLFxyXG4gICAgICAgIHN0YXR1czogJ3BlbmRpbmcnXHJcbiAgICB9KSlcclxuXHJcbiAgICByZXR1cm4gWy4uLmFnZW50cywgLi4uaW52aXRlZEFnZW50c10uc29ydCgoYSwgYikgPT5cclxuICAgICAgICAoYS5uYW1lIHx8ICcnKS5sb2NhbGVDb21wYXJlKGIubmFtZSB8fCAnJylcclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFJvbGVzKCkge1xyXG4gICAgY29uc3Qgc3VwYWJhc2UgPSBhd2FpdCBjcmVhdGVDbGllbnQoKVxyXG4gICAgY29uc3QgdGVuYW50SWQgPSBhd2FpdCBnZXRUZW5hbnRJZChzdXBhYmFzZSlcclxuXHJcbiAgICBpZiAoIXRlbmFudElkKSByZXR1cm4gW11cclxuXHJcbiAgICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAgIC5mcm9tKFwicm9sZXNcIilcclxuICAgICAgICAuc2VsZWN0KFwiKlwiKVxyXG4gICAgICAgIC5lcShcInRlbmFudF9pZFwiLCB0ZW5hbnRJZClcclxuICAgICAgICAub3JkZXIoXCJuYW1lXCIsIHsgYXNjZW5kaW5nOiB0cnVlIH0pXHJcblxyXG4gICAgaWYgKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIHJvbGVzOlwiLCBlcnJvcilcclxuICAgICAgICByZXR1cm4gW11cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZGF0YVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QnJhbmNoZXMoKSB7XHJcbiAgICBjb25zdCBzdXBhYmFzZSA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpXHJcbiAgICBjb25zdCB0ZW5hbnRJZCA9IGF3YWl0IGdldFRlbmFudElkKHN1cGFiYXNlKVxyXG5cclxuICAgIGlmICghdGVuYW50SWQpIHJldHVybiBbXVxyXG5cclxuICAgIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgICAgLmZyb20oXCJicmFuY2hlc1wiKVxyXG4gICAgICAgIC5zZWxlY3QoXCIqXCIpXHJcbiAgICAgICAgLmVxKFwidGVuYW50X2lkXCIsIHRlbmFudElkKVxyXG4gICAgICAgIC5vcmRlcihcIm5hbWVcIiwgeyBhc2NlbmRpbmc6IHRydWUgfSlcclxuXHJcbiAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgYnJhbmNoZXM6XCIsIGVycm9yKVxyXG4gICAgICAgIHJldHVybiBbXVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBkYXRhXHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVBZ2VudFJvbGUoYWdlbnRJZDogc3RyaW5nLCByb2xlSWQ6IHN0cmluZykge1xyXG4gICAgY29uc3Qgc3VwYWJhc2UgPSBhd2FpdCBjcmVhdGVDbGllbnQoKVxyXG4gICAgY29uc3QgdGVuYW50SWQgPSBhd2FpdCBnZXRUZW5hbnRJZChzdXBhYmFzZSlcclxuXHJcbiAgICBpZiAoIXRlbmFudElkKSB0aHJvdyBuZXcgRXJyb3IoXCJVbmF1dGhvcml6ZWRcIilcclxuXHJcbiAgICAvLyBUcnkgdXBkYXRpbmcgaW52aXRhdGlvbiBmaXJzdCAoaXQncyBzaW1wbGVyIGFuZCBtb3JlIGRpcmVjdCBmb3IgdGhlIHVzZXIgSUQgcHJvdmlkZWQgaWYgaXQncyBhbiBpbnZpdGUpXHJcbiAgICBjb25zdCB7IGRhdGE6IGludml0ZVVwZGF0ZSwgZXJyb3I6IGludml0ZUVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAgIC5mcm9tKFwiaW52aXRhdGlvbnNcIilcclxuICAgICAgICAudXBkYXRlKHsgcm9sZV9pZDogcm9sZUlkIH0pXHJcbiAgICAgICAgLmVxKFwiaWRcIiwgYWdlbnRJZClcclxuICAgICAgICAuZXEoXCJ0ZW5hbnRfaWRcIiwgdGVuYW50SWQpXHJcbiAgICAgICAgLnNlbGVjdCgpXHJcblxyXG4gICAgLy8gSWYgaXQgd2FzIGFuIGludml0YXRpb24gYW5kIHdhcyB1cGRhdGVkLCB3ZSBhcmUgZG9uZVxyXG4gICAgaWYgKCFpbnZpdGVFcnJvciAmJiBpbnZpdGVVcGRhdGUgJiYgaW52aXRlVXBkYXRlLmxlbmd0aCA+IDApIHtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBPdGhlcndpc2UsIGFzc3VtZSBpdCdzIGEgcHJvZmlsZVxyXG4gICAgLy8gRmlyc3QgZGVsZXRlIGV4aXN0aW5nIGFzc2lnbm1lbnRzIGZvciB0aGlzIHVzZXJcclxuICAgIGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgICAgLmZyb20oXCJ1c2VyX3JvbGVfYXNzaWdubWVudHNcIilcclxuICAgICAgICAuZGVsZXRlKClcclxuICAgICAgICAuZXEoXCJ1c2VyX2lkXCIsIGFnZW50SWQpXHJcblxyXG4gICAgY29uc3QgeyBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgICAuZnJvbShcInVzZXJfcm9sZV9hc3NpZ25tZW50c1wiKVxyXG4gICAgICAgIC5pbnNlcnQoe1xyXG4gICAgICAgICAgICB1c2VyX2lkOiBhZ2VudElkLFxyXG4gICAgICAgICAgICByb2xlX2lkOiByb2xlSWRcclxuICAgICAgICB9KVxyXG5cclxuICAgIGlmIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciB1cGRhdGluZyBhZ2VudCByb2xlOlwiLCBlcnJvcilcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJObyBzZSBwdWRvIGFjdHVhbGl6YXIgZWwgcm9sLiBWZXJpZmlxdWUgcXVlIGVsIHVzdWFyaW8gbyBpbnZpdGFjacOzbiBzZWEgdsOhbGlkby5cIilcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGludml0ZUFnZW50KGRhdGE6IHsgbmFtZTogc3RyaW5nLCBlbWFpbDogc3RyaW5nLCByb2xlSWQ6IHN0cmluZywgYnJhbmNoSWQ6IHN0cmluZyB9KSB7XHJcbiAgICBjb25zdCBzdXBhYmFzZSA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpXHJcbiAgICBjb25zdCBhZG1pblN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQWRtaW5DbGllbnQoKVxyXG4gICAgY29uc3QgdGVuYW50SWQgPSBhd2FpdCBnZXRUZW5hbnRJZChzdXBhYmFzZSlcclxuXHJcbiAgICBpZiAoIXRlbmFudElkKSB0aHJvdyBuZXcgRXJyb3IoXCJVbmF1dGhvcml6ZWRcIilcclxuXHJcbiAgICAvLyBDaGVjayBpZiBpbnZpdGF0aW9uIGFscmVhZHkgZXhpc3RzIGZvciB0aGlzIGVtYWlsXHJcbiAgICBjb25zdCB7IGRhdGE6IGV4aXN0aW5nSW52aXRlIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAgIC5mcm9tKFwiaW52aXRhdGlvbnNcIilcclxuICAgICAgICAuc2VsZWN0KFwiKlwiKVxyXG4gICAgICAgIC5lcShcInRlbmFudF9pZFwiLCB0ZW5hbnRJZClcclxuICAgICAgICAuZXEoXCJlbWFpbFwiLCBkYXRhLmVtYWlsKVxyXG4gICAgICAgIC5lcShcInN0YXR1c1wiLCBcInBlbmRpbmdcIilcclxuICAgICAgICAuc2luZ2xlKClcclxuXHJcbiAgICBpZiAoZXhpc3RpbmdJbnZpdGUpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJZYSBleGlzdGUgdW5hIGludml0YWNpw7NuIHBlbmRpZW50ZSBwYXJhIGVzdGUgY29ycmVvIGVsZWN0csOzbmljb1wiKVxyXG4gICAgfVxyXG5cclxuICAgIC8vIFZhbGlkYXRlIHRoYXQgcm9sZUlkIGFuZCBicmFuY2hJZCBhcmUgdmFsaWQgVVVJRHMgb3IgbnVsbFxyXG4gICAgY29uc3Qgcm9sZUlkID0gZGF0YS5yb2xlSWQgPT09IFwiXCIgPyBudWxsIDogZGF0YS5yb2xlSWRcclxuICAgIGNvbnN0IGJyYW5jaElkID0gZGF0YS5icmFuY2hJZCA9PT0gXCJcIiA/IG51bGwgOiBkYXRhLmJyYW5jaElkXHJcblxyXG4gICAgLy8gMS4gU2VuZCBuYXRpdmUgU3VwYWJhc2UgaW52aXRhdGlvbiB3aXRoIG1ldGFkYXRhXHJcbiAgICBjb25zdCB7IGRhdGE6IGF1dGhEYXRhLCBlcnJvcjogYXV0aEVycm9yIH0gPSBhd2FpdCBhZG1pblN1cGFiYXNlLmF1dGguYWRtaW4uaW52aXRlVXNlckJ5RW1haWwoZGF0YS5lbWFpbCwge1xyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgdGVuYW50X2lkOiB0ZW5hbnRJZCxcclxuICAgICAgICAgICAgcm9sZV9pZDogcm9sZUlkLFxyXG4gICAgICAgICAgICBicmFuY2hfaWQ6IGJyYW5jaElkLFxyXG4gICAgICAgICAgICBmdWxsX25hbWU6IGRhdGEubmFtZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcmVkaXJlY3RUbzogYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU0lURV9VUkwgfHwgJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMCd9L2F1dGgvY2FsbGJhY2tgXHJcbiAgICB9KVxyXG5cclxuICAgIGlmIChhdXRoRXJyb3IpIHtcclxuICAgICAgICAvLyBJZiB1c2VyIGFscmVhZHkgZXhpc3RzLCBjaGVjayBpZiB0aGV5IGFyZSBhbHJlYWR5IGluIHRoZSB0ZW5hbnRcclxuICAgICAgICBpZiAoYXV0aEVycm9yLm1lc3NhZ2UuaW5jbHVkZXMoXCJhbHJlYWR5IGJlZW4gcmVnaXN0ZXJlZFwiKSB8fCBhdXRoRXJyb3Iuc3RhdHVzID09PSA0MjIpIHtcclxuICAgICAgICAgICAgY29uc3QgeyBkYXRhOiBwcm9maWxlRXhpc3RzIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAgICAgICAgICAgLmZyb20oXCJwcm9maWxlc1wiKVxyXG4gICAgICAgICAgICAgICAgLnNlbGVjdChcImlkXCIpXHJcbiAgICAgICAgICAgICAgICAuZXEoXCJlbWFpbFwiLCBkYXRhLmVtYWlsKVxyXG4gICAgICAgICAgICAgICAgLmVxKFwidGVuYW50X2lkXCIsIHRlbmFudElkKVxyXG4gICAgICAgICAgICAgICAgLm1heWJlU2luZ2xlKClcclxuXHJcbiAgICAgICAgICAgIGlmIChwcm9maWxlRXhpc3RzKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiRXN0ZSB1c3VhcmlvIHlhIGVzIHBhcnRlIGRlIHR1IGVxdWlwb1wiIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIkVzdGUgY29ycmVvIHlhIGVzdMOhIHJlZ2lzdHJhZG8gZW4gbGEgcGxhdGFmb3JtYS4gUGFyYSBzdW1hcmxvIGEgdHUgZXF1aXBvLCB1c2EgZWwgbWlzbW8gY29ycmVvIGVuIGxhIHNlY2Npw7NuIGRlIFJlZCBvIGNvbnRhY3RhIGEgc29wb3J0ZS5cIiB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiQXV0aCBJbnZpdGUgRXJyb3I6XCIsIGF1dGhFcnJvcilcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGBFcnJvciBhbCBlbnZpYXIgaW52aXRhY2nDs246ICR7YXV0aEVycm9yLm1lc3NhZ2V9YCB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gMi4gSW5zZXJ0IGludG8gb3VyIGxvY2FsIGludml0YXRpb25zIHRhYmxlIGZvciBVSSB0cmFja2luZ1xyXG4gICAgY29uc3QgeyBlcnJvcjogZGJFcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgICAuZnJvbShcImludml0YXRpb25zXCIpXHJcbiAgICAgICAgLmluc2VydCh7XHJcbiAgICAgICAgICAgIHRlbmFudF9pZDogdGVuYW50SWQsXHJcbiAgICAgICAgICAgIG5hbWU6IGRhdGEubmFtZSxcclxuICAgICAgICAgICAgZW1haWw6IGRhdGEuZW1haWwsXHJcbiAgICAgICAgICAgIHJvbGVfaWQ6IHJvbGVJZCxcclxuICAgICAgICAgICAgYnJhbmNoX2lkOiBicmFuY2hJZCxcclxuICAgICAgICAgICAgc3RhdHVzOiAncGVuZGluZydcclxuICAgICAgICB9KVxyXG5cclxuICAgIGlmIChkYkVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkRhdGFiYXNlIEVycm9yOlwiLCBkYkVycm9yKVxyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogYEVycm9yIGVuIGxhIGJhc2UgZGUgZGF0b3M6ICR7ZGJFcnJvci5tZXNzYWdlfWAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlQWdlbnQoYWdlbnRJZDogc3RyaW5nKSB7XHJcbiAgICBjb25zdCBzdXBhYmFzZSA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpXHJcbiAgICBjb25zdCB0ZW5hbnRJZCA9IGF3YWl0IGdldFRlbmFudElkKHN1cGFiYXNlKVxyXG5cclxuICAgIGlmICghdGVuYW50SWQpIHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZFwiKVxyXG5cclxuICAgIC8vIFRyeSBkZWxldGluZyBmcm9tIGludml0YXRpb25zIGZpcnN0XHJcbiAgICBjb25zdCB7IGRhdGE6IGludml0ZURlbGV0ZSwgZXJyb3I6IGludml0ZUVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAgIC5mcm9tKFwiaW52aXRhdGlvbnNcIilcclxuICAgICAgICAuZGVsZXRlKClcclxuICAgICAgICAuZXEoXCJpZFwiLCBhZ2VudElkKVxyXG4gICAgICAgIC5lcShcInRlbmFudF9pZFwiLCB0ZW5hbnRJZClcclxuICAgICAgICAuc2VsZWN0KClcclxuXHJcbiAgICBpZiAoIWludml0ZUVycm9yICYmIGludml0ZURlbGV0ZSAmJiBpbnZpdGVEZWxldGUubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIE90aGVyd2lzZSwgYXNzdW1lIGl0J3MgYSBwcm9maWxlXHJcbiAgICBjb25zdCB7IGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAgIC5mcm9tKFwicHJvZmlsZXNcIilcclxuICAgICAgICAuZGVsZXRlKClcclxuICAgICAgICAuZXEoXCJpZFwiLCBhZ2VudElkKVxyXG4gICAgICAgIC5lcShcInRlbmFudF9pZFwiLCB0ZW5hbnRJZClcclxuXHJcbiAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZGVsZXRpbmcgYWdlbnQ6XCIsIGVycm9yKVxyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vIHNlIHB1ZG8gZWxpbWluYXIgZWwgaW50ZWdyYW50ZSBkZWwgZXF1aXBvXCIpXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiIyUkEyRXNCLHFMQUFBIn0=
}),
"[project]/apps/web/app/actions/data:f6ea81 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getBranches",
    ()=>$$RSC_SERVER_ACTION_2
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"0076244f0dc260733da3acd003aed2654a4664f811":"getBranches"},"apps/web/app/actions/agents.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("0076244f0dc260733da3acd003aed2654a4664f811", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "getBranches");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWdlbnRzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHNlcnZlclwiXHJcblxyXG5pbXBvcnQgeyBjcmVhdGVDbGllbnQsIGNyZWF0ZUFkbWluQ2xpZW50LCBnZXRUZW5hbnRJZCB9IGZyb20gXCJAL2xpYi9zdXBhYmFzZS9zZXJ2ZXJcIlxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEFnZW50cygpIHtcclxuICAgIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KClcclxuICAgIGNvbnN0IHRlbmFudElkID0gYXdhaXQgZ2V0VGVuYW50SWQoc3VwYWJhc2UpXHJcblxyXG4gICAgaWYgKCF0ZW5hbnRJZCkgcmV0dXJuIFtdXHJcblxyXG4gICAgLy8gRmV0Y2ggcHJvZmlsZXMgd2l0aCByb2xlcyBhbmQgYnJhbmNoZXNcclxuICAgIC8vIFdlIHVzZSBqb2luIHRocm91Z2ggdXNlcl9yb2xlX2Fzc2lnbm1lbnRzIC0+IHJvbGVzIGFuZCB1c2VyX2JyYW5jaGVzIC0+IGJyYW5jaGVzXHJcbiAgICBjb25zdCB7IGRhdGE6IHByb2ZpbGVzLCBlcnJvcjogcHJvZmlsZUVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAgIC5mcm9tKFwicHJvZmlsZXNcIilcclxuICAgICAgICAuc2VsZWN0KGBcclxuICAgICAgICAgICAgKixcclxuICAgICAgICAgICAgdXNlcl9yb2xlX2Fzc2lnbm1lbnRzIChcclxuICAgICAgICAgICAgICAgIHJvbGVzIChcclxuICAgICAgICAgICAgICAgICAgICBpZCxcclxuICAgICAgICAgICAgICAgICAgICBuYW1lXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgIHVzZXJfYnJhbmNoZXMgKFxyXG4gICAgICAgICAgICAgICAgYnJhbmNoZXMgKFxyXG4gICAgICAgICAgICAgICAgICAgIGlkLFxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWVcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIGApXHJcbiAgICAgICAgLmVxKFwidGVuYW50X2lkXCIsIHRlbmFudElkKVxyXG4gICAgICAgIC5vcmRlcihcIm5hbWVcIiwgeyBhc2NlbmRpbmc6IHRydWUgfSlcclxuXHJcbiAgICBpZiAocHJvZmlsZUVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIGFnZW50czpcIiwgcHJvZmlsZUVycm9yKVxyXG4gICAgICAgIHJldHVybiBbXVxyXG4gICAgfVxyXG5cclxuICAgIC8vIEZldGNoIHBlbmRpbmcgaW52aXRhdGlvbnNcclxuICAgIGNvbnN0IHsgZGF0YTogaW52aXRhdGlvbnMsIGVycm9yOiBpbnZpdGVFcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgICAuZnJvbShcImludml0YXRpb25zXCIpXHJcbiAgICAgICAgLnNlbGVjdChgXHJcbiAgICAgICAgICAgICosXHJcbiAgICAgICAgICAgIHJvbGVzIChpZCwgbmFtZSksXHJcbiAgICAgICAgICAgIGJyYW5jaGVzIChpZCwgbmFtZSlcclxuICAgICAgICBgKVxyXG4gICAgICAgIC5lcShcInRlbmFudF9pZFwiLCB0ZW5hbnRJZClcclxuICAgICAgICAuZXEoXCJzdGF0dXNcIiwgXCJwZW5kaW5nXCIpXHJcblxyXG4gICAgaWYgKGludml0ZUVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIGludml0YXRpb25zOlwiLCBpbnZpdGVFcnJvcilcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBhZ2VudHMgPSBwcm9maWxlcy5tYXAocHJvZmlsZSA9PiAoe1xyXG4gICAgICAgIC4uLnByb2ZpbGUsXHJcbiAgICAgICAgcm9sZXM6IHByb2ZpbGUudXNlcl9yb2xlX2Fzc2lnbm1lbnRzPy5tYXAoKHJhOiBhbnkpID0+IHJhLnJvbGVzKSB8fCBbXSxcclxuICAgICAgICBicmFuY2hlczogcHJvZmlsZS51c2VyX2JyYW5jaGVzPy5tYXAoKHViOiBhbnkpID0+IHViLmJyYW5jaGVzKSB8fCBbXSxcclxuICAgICAgICBpc19pbnZpdGF0aW9uOiBmYWxzZVxyXG4gICAgfSkpXHJcblxyXG4gICAgY29uc3QgaW52aXRlZEFnZW50cyA9IChpbnZpdGF0aW9ucyB8fCBbXSkubWFwKGludml0ZSA9PiAoe1xyXG4gICAgICAgIGlkOiBpbnZpdGUuaWQsXHJcbiAgICAgICAgbmFtZTogaW52aXRlLm5hbWUsXHJcbiAgICAgICAgZW1haWw6IGludml0ZS5lbWFpbCxcclxuICAgICAgICByb2xlczogaW52aXRlLnJvbGVzID8gW2ludml0ZS5yb2xlc10gOiBbXSxcclxuICAgICAgICBicmFuY2hlczogaW52aXRlLmJyYW5jaGVzID8gW2ludml0ZS5icmFuY2hlc10gOiBbXSxcclxuICAgICAgICBjcmVhdGVkX2F0OiBpbnZpdGUuaW52aXRlZF9hdCxcclxuICAgICAgICBpc19pbnZpdGF0aW9uOiB0cnVlLFxyXG4gICAgICAgIHN0YXR1czogJ3BlbmRpbmcnXHJcbiAgICB9KSlcclxuXHJcbiAgICByZXR1cm4gWy4uLmFnZW50cywgLi4uaW52aXRlZEFnZW50c10uc29ydCgoYSwgYikgPT5cclxuICAgICAgICAoYS5uYW1lIHx8ICcnKS5sb2NhbGVDb21wYXJlKGIubmFtZSB8fCAnJylcclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFJvbGVzKCkge1xyXG4gICAgY29uc3Qgc3VwYWJhc2UgPSBhd2FpdCBjcmVhdGVDbGllbnQoKVxyXG4gICAgY29uc3QgdGVuYW50SWQgPSBhd2FpdCBnZXRUZW5hbnRJZChzdXBhYmFzZSlcclxuXHJcbiAgICBpZiAoIXRlbmFudElkKSByZXR1cm4gW11cclxuXHJcbiAgICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAgIC5mcm9tKFwicm9sZXNcIilcclxuICAgICAgICAuc2VsZWN0KFwiKlwiKVxyXG4gICAgICAgIC5lcShcInRlbmFudF9pZFwiLCB0ZW5hbnRJZClcclxuICAgICAgICAub3JkZXIoXCJuYW1lXCIsIHsgYXNjZW5kaW5nOiB0cnVlIH0pXHJcblxyXG4gICAgaWYgKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIHJvbGVzOlwiLCBlcnJvcilcclxuICAgICAgICByZXR1cm4gW11cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZGF0YVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QnJhbmNoZXMoKSB7XHJcbiAgICBjb25zdCBzdXBhYmFzZSA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpXHJcbiAgICBjb25zdCB0ZW5hbnRJZCA9IGF3YWl0IGdldFRlbmFudElkKHN1cGFiYXNlKVxyXG5cclxuICAgIGlmICghdGVuYW50SWQpIHJldHVybiBbXVxyXG5cclxuICAgIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgICAgLmZyb20oXCJicmFuY2hlc1wiKVxyXG4gICAgICAgIC5zZWxlY3QoXCIqXCIpXHJcbiAgICAgICAgLmVxKFwidGVuYW50X2lkXCIsIHRlbmFudElkKVxyXG4gICAgICAgIC5vcmRlcihcIm5hbWVcIiwgeyBhc2NlbmRpbmc6IHRydWUgfSlcclxuXHJcbiAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgYnJhbmNoZXM6XCIsIGVycm9yKVxyXG4gICAgICAgIHJldHVybiBbXVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBkYXRhXHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVBZ2VudFJvbGUoYWdlbnRJZDogc3RyaW5nLCByb2xlSWQ6IHN0cmluZykge1xyXG4gICAgY29uc3Qgc3VwYWJhc2UgPSBhd2FpdCBjcmVhdGVDbGllbnQoKVxyXG4gICAgY29uc3QgdGVuYW50SWQgPSBhd2FpdCBnZXRUZW5hbnRJZChzdXBhYmFzZSlcclxuXHJcbiAgICBpZiAoIXRlbmFudElkKSB0aHJvdyBuZXcgRXJyb3IoXCJVbmF1dGhvcml6ZWRcIilcclxuXHJcbiAgICAvLyBUcnkgdXBkYXRpbmcgaW52aXRhdGlvbiBmaXJzdCAoaXQncyBzaW1wbGVyIGFuZCBtb3JlIGRpcmVjdCBmb3IgdGhlIHVzZXIgSUQgcHJvdmlkZWQgaWYgaXQncyBhbiBpbnZpdGUpXHJcbiAgICBjb25zdCB7IGRhdGE6IGludml0ZVVwZGF0ZSwgZXJyb3I6IGludml0ZUVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAgIC5mcm9tKFwiaW52aXRhdGlvbnNcIilcclxuICAgICAgICAudXBkYXRlKHsgcm9sZV9pZDogcm9sZUlkIH0pXHJcbiAgICAgICAgLmVxKFwiaWRcIiwgYWdlbnRJZClcclxuICAgICAgICAuZXEoXCJ0ZW5hbnRfaWRcIiwgdGVuYW50SWQpXHJcbiAgICAgICAgLnNlbGVjdCgpXHJcblxyXG4gICAgLy8gSWYgaXQgd2FzIGFuIGludml0YXRpb24gYW5kIHdhcyB1cGRhdGVkLCB3ZSBhcmUgZG9uZVxyXG4gICAgaWYgKCFpbnZpdGVFcnJvciAmJiBpbnZpdGVVcGRhdGUgJiYgaW52aXRlVXBkYXRlLmxlbmd0aCA+IDApIHtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBPdGhlcndpc2UsIGFzc3VtZSBpdCdzIGEgcHJvZmlsZVxyXG4gICAgLy8gRmlyc3QgZGVsZXRlIGV4aXN0aW5nIGFzc2lnbm1lbnRzIGZvciB0aGlzIHVzZXJcclxuICAgIGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgICAgLmZyb20oXCJ1c2VyX3JvbGVfYXNzaWdubWVudHNcIilcclxuICAgICAgICAuZGVsZXRlKClcclxuICAgICAgICAuZXEoXCJ1c2VyX2lkXCIsIGFnZW50SWQpXHJcblxyXG4gICAgY29uc3QgeyBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgICAuZnJvbShcInVzZXJfcm9sZV9hc3NpZ25tZW50c1wiKVxyXG4gICAgICAgIC5pbnNlcnQoe1xyXG4gICAgICAgICAgICB1c2VyX2lkOiBhZ2VudElkLFxyXG4gICAgICAgICAgICByb2xlX2lkOiByb2xlSWRcclxuICAgICAgICB9KVxyXG5cclxuICAgIGlmIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciB1cGRhdGluZyBhZ2VudCByb2xlOlwiLCBlcnJvcilcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJObyBzZSBwdWRvIGFjdHVhbGl6YXIgZWwgcm9sLiBWZXJpZmlxdWUgcXVlIGVsIHVzdWFyaW8gbyBpbnZpdGFjacOzbiBzZWEgdsOhbGlkby5cIilcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGludml0ZUFnZW50KGRhdGE6IHsgbmFtZTogc3RyaW5nLCBlbWFpbDogc3RyaW5nLCByb2xlSWQ6IHN0cmluZywgYnJhbmNoSWQ6IHN0cmluZyB9KSB7XHJcbiAgICBjb25zdCBzdXBhYmFzZSA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpXHJcbiAgICBjb25zdCBhZG1pblN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQWRtaW5DbGllbnQoKVxyXG4gICAgY29uc3QgdGVuYW50SWQgPSBhd2FpdCBnZXRUZW5hbnRJZChzdXBhYmFzZSlcclxuXHJcbiAgICBpZiAoIXRlbmFudElkKSB0aHJvdyBuZXcgRXJyb3IoXCJVbmF1dGhvcml6ZWRcIilcclxuXHJcbiAgICAvLyBDaGVjayBpZiBpbnZpdGF0aW9uIGFscmVhZHkgZXhpc3RzIGZvciB0aGlzIGVtYWlsXHJcbiAgICBjb25zdCB7IGRhdGE6IGV4aXN0aW5nSW52aXRlIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAgIC5mcm9tKFwiaW52aXRhdGlvbnNcIilcclxuICAgICAgICAuc2VsZWN0KFwiKlwiKVxyXG4gICAgICAgIC5lcShcInRlbmFudF9pZFwiLCB0ZW5hbnRJZClcclxuICAgICAgICAuZXEoXCJlbWFpbFwiLCBkYXRhLmVtYWlsKVxyXG4gICAgICAgIC5lcShcInN0YXR1c1wiLCBcInBlbmRpbmdcIilcclxuICAgICAgICAuc2luZ2xlKClcclxuXHJcbiAgICBpZiAoZXhpc3RpbmdJbnZpdGUpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJZYSBleGlzdGUgdW5hIGludml0YWNpw7NuIHBlbmRpZW50ZSBwYXJhIGVzdGUgY29ycmVvIGVsZWN0csOzbmljb1wiKVxyXG4gICAgfVxyXG5cclxuICAgIC8vIFZhbGlkYXRlIHRoYXQgcm9sZUlkIGFuZCBicmFuY2hJZCBhcmUgdmFsaWQgVVVJRHMgb3IgbnVsbFxyXG4gICAgY29uc3Qgcm9sZUlkID0gZGF0YS5yb2xlSWQgPT09IFwiXCIgPyBudWxsIDogZGF0YS5yb2xlSWRcclxuICAgIGNvbnN0IGJyYW5jaElkID0gZGF0YS5icmFuY2hJZCA9PT0gXCJcIiA/IG51bGwgOiBkYXRhLmJyYW5jaElkXHJcblxyXG4gICAgLy8gMS4gU2VuZCBuYXRpdmUgU3VwYWJhc2UgaW52aXRhdGlvbiB3aXRoIG1ldGFkYXRhXHJcbiAgICBjb25zdCB7IGRhdGE6IGF1dGhEYXRhLCBlcnJvcjogYXV0aEVycm9yIH0gPSBhd2FpdCBhZG1pblN1cGFiYXNlLmF1dGguYWRtaW4uaW52aXRlVXNlckJ5RW1haWwoZGF0YS5lbWFpbCwge1xyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgdGVuYW50X2lkOiB0ZW5hbnRJZCxcclxuICAgICAgICAgICAgcm9sZV9pZDogcm9sZUlkLFxyXG4gICAgICAgICAgICBicmFuY2hfaWQ6IGJyYW5jaElkLFxyXG4gICAgICAgICAgICBmdWxsX25hbWU6IGRhdGEubmFtZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcmVkaXJlY3RUbzogYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU0lURV9VUkwgfHwgJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMCd9L2F1dGgvY2FsbGJhY2tgXHJcbiAgICB9KVxyXG5cclxuICAgIGlmIChhdXRoRXJyb3IpIHtcclxuICAgICAgICAvLyBJZiB1c2VyIGFscmVhZHkgZXhpc3RzLCBjaGVjayBpZiB0aGV5IGFyZSBhbHJlYWR5IGluIHRoZSB0ZW5hbnRcclxuICAgICAgICBpZiAoYXV0aEVycm9yLm1lc3NhZ2UuaW5jbHVkZXMoXCJhbHJlYWR5IGJlZW4gcmVnaXN0ZXJlZFwiKSB8fCBhdXRoRXJyb3Iuc3RhdHVzID09PSA0MjIpIHtcclxuICAgICAgICAgICAgY29uc3QgeyBkYXRhOiBwcm9maWxlRXhpc3RzIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAgICAgICAgICAgLmZyb20oXCJwcm9maWxlc1wiKVxyXG4gICAgICAgICAgICAgICAgLnNlbGVjdChcImlkXCIpXHJcbiAgICAgICAgICAgICAgICAuZXEoXCJlbWFpbFwiLCBkYXRhLmVtYWlsKVxyXG4gICAgICAgICAgICAgICAgLmVxKFwidGVuYW50X2lkXCIsIHRlbmFudElkKVxyXG4gICAgICAgICAgICAgICAgLm1heWJlU2luZ2xlKClcclxuXHJcbiAgICAgICAgICAgIGlmIChwcm9maWxlRXhpc3RzKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiRXN0ZSB1c3VhcmlvIHlhIGVzIHBhcnRlIGRlIHR1IGVxdWlwb1wiIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIkVzdGUgY29ycmVvIHlhIGVzdMOhIHJlZ2lzdHJhZG8gZW4gbGEgcGxhdGFmb3JtYS4gUGFyYSBzdW1hcmxvIGEgdHUgZXF1aXBvLCB1c2EgZWwgbWlzbW8gY29ycmVvIGVuIGxhIHNlY2Npw7NuIGRlIFJlZCBvIGNvbnRhY3RhIGEgc29wb3J0ZS5cIiB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiQXV0aCBJbnZpdGUgRXJyb3I6XCIsIGF1dGhFcnJvcilcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGBFcnJvciBhbCBlbnZpYXIgaW52aXRhY2nDs246ICR7YXV0aEVycm9yLm1lc3NhZ2V9YCB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gMi4gSW5zZXJ0IGludG8gb3VyIGxvY2FsIGludml0YXRpb25zIHRhYmxlIGZvciBVSSB0cmFja2luZ1xyXG4gICAgY29uc3QgeyBlcnJvcjogZGJFcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgICAuZnJvbShcImludml0YXRpb25zXCIpXHJcbiAgICAgICAgLmluc2VydCh7XHJcbiAgICAgICAgICAgIHRlbmFudF9pZDogdGVuYW50SWQsXHJcbiAgICAgICAgICAgIG5hbWU6IGRhdGEubmFtZSxcclxuICAgICAgICAgICAgZW1haWw6IGRhdGEuZW1haWwsXHJcbiAgICAgICAgICAgIHJvbGVfaWQ6IHJvbGVJZCxcclxuICAgICAgICAgICAgYnJhbmNoX2lkOiBicmFuY2hJZCxcclxuICAgICAgICAgICAgc3RhdHVzOiAncGVuZGluZydcclxuICAgICAgICB9KVxyXG5cclxuICAgIGlmIChkYkVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkRhdGFiYXNlIEVycm9yOlwiLCBkYkVycm9yKVxyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogYEVycm9yIGVuIGxhIGJhc2UgZGUgZGF0b3M6ICR7ZGJFcnJvci5tZXNzYWdlfWAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlQWdlbnQoYWdlbnRJZDogc3RyaW5nKSB7XHJcbiAgICBjb25zdCBzdXBhYmFzZSA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpXHJcbiAgICBjb25zdCB0ZW5hbnRJZCA9IGF3YWl0IGdldFRlbmFudElkKHN1cGFiYXNlKVxyXG5cclxuICAgIGlmICghdGVuYW50SWQpIHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZFwiKVxyXG5cclxuICAgIC8vIFRyeSBkZWxldGluZyBmcm9tIGludml0YXRpb25zIGZpcnN0XHJcbiAgICBjb25zdCB7IGRhdGE6IGludml0ZURlbGV0ZSwgZXJyb3I6IGludml0ZUVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAgIC5mcm9tKFwiaW52aXRhdGlvbnNcIilcclxuICAgICAgICAuZGVsZXRlKClcclxuICAgICAgICAuZXEoXCJpZFwiLCBhZ2VudElkKVxyXG4gICAgICAgIC5lcShcInRlbmFudF9pZFwiLCB0ZW5hbnRJZClcclxuICAgICAgICAuc2VsZWN0KClcclxuXHJcbiAgICBpZiAoIWludml0ZUVycm9yICYmIGludml0ZURlbGV0ZSAmJiBpbnZpdGVEZWxldGUubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIE90aGVyd2lzZSwgYXNzdW1lIGl0J3MgYSBwcm9maWxlXHJcbiAgICBjb25zdCB7IGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAgIC5mcm9tKFwicHJvZmlsZXNcIilcclxuICAgICAgICAuZGVsZXRlKClcclxuICAgICAgICAuZXEoXCJpZFwiLCBhZ2VudElkKVxyXG4gICAgICAgIC5lcShcInRlbmFudF9pZFwiLCB0ZW5hbnRJZClcclxuXHJcbiAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZGVsZXRpbmcgYWdlbnQ6XCIsIGVycm9yKVxyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vIHNlIHB1ZG8gZWxpbWluYXIgZWwgaW50ZWdyYW50ZSBkZWwgZXF1aXBvXCIpXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI4UkErRnNCLHdMQUFBIn0=
}),
"[project]/apps/web/app/actions/data:97ae31 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "updateAgentRole",
    ()=>$$RSC_SERVER_ACTION_3
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"6026763c4d26f05958e4c531e3b5d92e9085d67746":"updateAgentRole"},"apps/web/app/actions/agents.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("6026763c4d26f05958e4c531e3b5d92e9085d67746", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "updateAgentRole");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWdlbnRzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHNlcnZlclwiXHJcblxyXG5pbXBvcnQgeyBjcmVhdGVDbGllbnQsIGNyZWF0ZUFkbWluQ2xpZW50LCBnZXRUZW5hbnRJZCB9IGZyb20gXCJAL2xpYi9zdXBhYmFzZS9zZXJ2ZXJcIlxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEFnZW50cygpIHtcclxuICAgIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KClcclxuICAgIGNvbnN0IHRlbmFudElkID0gYXdhaXQgZ2V0VGVuYW50SWQoc3VwYWJhc2UpXHJcblxyXG4gICAgaWYgKCF0ZW5hbnRJZCkgcmV0dXJuIFtdXHJcblxyXG4gICAgLy8gRmV0Y2ggcHJvZmlsZXMgd2l0aCByb2xlcyBhbmQgYnJhbmNoZXNcclxuICAgIC8vIFdlIHVzZSBqb2luIHRocm91Z2ggdXNlcl9yb2xlX2Fzc2lnbm1lbnRzIC0+IHJvbGVzIGFuZCB1c2VyX2JyYW5jaGVzIC0+IGJyYW5jaGVzXHJcbiAgICBjb25zdCB7IGRhdGE6IHByb2ZpbGVzLCBlcnJvcjogcHJvZmlsZUVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAgIC5mcm9tKFwicHJvZmlsZXNcIilcclxuICAgICAgICAuc2VsZWN0KGBcclxuICAgICAgICAgICAgKixcclxuICAgICAgICAgICAgdXNlcl9yb2xlX2Fzc2lnbm1lbnRzIChcclxuICAgICAgICAgICAgICAgIHJvbGVzIChcclxuICAgICAgICAgICAgICAgICAgICBpZCxcclxuICAgICAgICAgICAgICAgICAgICBuYW1lXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgIHVzZXJfYnJhbmNoZXMgKFxyXG4gICAgICAgICAgICAgICAgYnJhbmNoZXMgKFxyXG4gICAgICAgICAgICAgICAgICAgIGlkLFxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWVcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIGApXHJcbiAgICAgICAgLmVxKFwidGVuYW50X2lkXCIsIHRlbmFudElkKVxyXG4gICAgICAgIC5vcmRlcihcIm5hbWVcIiwgeyBhc2NlbmRpbmc6IHRydWUgfSlcclxuXHJcbiAgICBpZiAocHJvZmlsZUVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIGFnZW50czpcIiwgcHJvZmlsZUVycm9yKVxyXG4gICAgICAgIHJldHVybiBbXVxyXG4gICAgfVxyXG5cclxuICAgIC8vIEZldGNoIHBlbmRpbmcgaW52aXRhdGlvbnNcclxuICAgIGNvbnN0IHsgZGF0YTogaW52aXRhdGlvbnMsIGVycm9yOiBpbnZpdGVFcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgICAuZnJvbShcImludml0YXRpb25zXCIpXHJcbiAgICAgICAgLnNlbGVjdChgXHJcbiAgICAgICAgICAgICosXHJcbiAgICAgICAgICAgIHJvbGVzIChpZCwgbmFtZSksXHJcbiAgICAgICAgICAgIGJyYW5jaGVzIChpZCwgbmFtZSlcclxuICAgICAgICBgKVxyXG4gICAgICAgIC5lcShcInRlbmFudF9pZFwiLCB0ZW5hbnRJZClcclxuICAgICAgICAuZXEoXCJzdGF0dXNcIiwgXCJwZW5kaW5nXCIpXHJcblxyXG4gICAgaWYgKGludml0ZUVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIGludml0YXRpb25zOlwiLCBpbnZpdGVFcnJvcilcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBhZ2VudHMgPSBwcm9maWxlcy5tYXAocHJvZmlsZSA9PiAoe1xyXG4gICAgICAgIC4uLnByb2ZpbGUsXHJcbiAgICAgICAgcm9sZXM6IHByb2ZpbGUudXNlcl9yb2xlX2Fzc2lnbm1lbnRzPy5tYXAoKHJhOiBhbnkpID0+IHJhLnJvbGVzKSB8fCBbXSxcclxuICAgICAgICBicmFuY2hlczogcHJvZmlsZS51c2VyX2JyYW5jaGVzPy5tYXAoKHViOiBhbnkpID0+IHViLmJyYW5jaGVzKSB8fCBbXSxcclxuICAgICAgICBpc19pbnZpdGF0aW9uOiBmYWxzZVxyXG4gICAgfSkpXHJcblxyXG4gICAgY29uc3QgaW52aXRlZEFnZW50cyA9IChpbnZpdGF0aW9ucyB8fCBbXSkubWFwKGludml0ZSA9PiAoe1xyXG4gICAgICAgIGlkOiBpbnZpdGUuaWQsXHJcbiAgICAgICAgbmFtZTogaW52aXRlLm5hbWUsXHJcbiAgICAgICAgZW1haWw6IGludml0ZS5lbWFpbCxcclxuICAgICAgICByb2xlczogaW52aXRlLnJvbGVzID8gW2ludml0ZS5yb2xlc10gOiBbXSxcclxuICAgICAgICBicmFuY2hlczogaW52aXRlLmJyYW5jaGVzID8gW2ludml0ZS5icmFuY2hlc10gOiBbXSxcclxuICAgICAgICBjcmVhdGVkX2F0OiBpbnZpdGUuaW52aXRlZF9hdCxcclxuICAgICAgICBpc19pbnZpdGF0aW9uOiB0cnVlLFxyXG4gICAgICAgIHN0YXR1czogJ3BlbmRpbmcnXHJcbiAgICB9KSlcclxuXHJcbiAgICByZXR1cm4gWy4uLmFnZW50cywgLi4uaW52aXRlZEFnZW50c10uc29ydCgoYSwgYikgPT5cclxuICAgICAgICAoYS5uYW1lIHx8ICcnKS5sb2NhbGVDb21wYXJlKGIubmFtZSB8fCAnJylcclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFJvbGVzKCkge1xyXG4gICAgY29uc3Qgc3VwYWJhc2UgPSBhd2FpdCBjcmVhdGVDbGllbnQoKVxyXG4gICAgY29uc3QgdGVuYW50SWQgPSBhd2FpdCBnZXRUZW5hbnRJZChzdXBhYmFzZSlcclxuXHJcbiAgICBpZiAoIXRlbmFudElkKSByZXR1cm4gW11cclxuXHJcbiAgICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAgIC5mcm9tKFwicm9sZXNcIilcclxuICAgICAgICAuc2VsZWN0KFwiKlwiKVxyXG4gICAgICAgIC5lcShcInRlbmFudF9pZFwiLCB0ZW5hbnRJZClcclxuICAgICAgICAub3JkZXIoXCJuYW1lXCIsIHsgYXNjZW5kaW5nOiB0cnVlIH0pXHJcblxyXG4gICAgaWYgKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIHJvbGVzOlwiLCBlcnJvcilcclxuICAgICAgICByZXR1cm4gW11cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZGF0YVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QnJhbmNoZXMoKSB7XHJcbiAgICBjb25zdCBzdXBhYmFzZSA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpXHJcbiAgICBjb25zdCB0ZW5hbnRJZCA9IGF3YWl0IGdldFRlbmFudElkKHN1cGFiYXNlKVxyXG5cclxuICAgIGlmICghdGVuYW50SWQpIHJldHVybiBbXVxyXG5cclxuICAgIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgICAgLmZyb20oXCJicmFuY2hlc1wiKVxyXG4gICAgICAgIC5zZWxlY3QoXCIqXCIpXHJcbiAgICAgICAgLmVxKFwidGVuYW50X2lkXCIsIHRlbmFudElkKVxyXG4gICAgICAgIC5vcmRlcihcIm5hbWVcIiwgeyBhc2NlbmRpbmc6IHRydWUgfSlcclxuXHJcbiAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgYnJhbmNoZXM6XCIsIGVycm9yKVxyXG4gICAgICAgIHJldHVybiBbXVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBkYXRhXHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVBZ2VudFJvbGUoYWdlbnRJZDogc3RyaW5nLCByb2xlSWQ6IHN0cmluZykge1xyXG4gICAgY29uc3Qgc3VwYWJhc2UgPSBhd2FpdCBjcmVhdGVDbGllbnQoKVxyXG4gICAgY29uc3QgdGVuYW50SWQgPSBhd2FpdCBnZXRUZW5hbnRJZChzdXBhYmFzZSlcclxuXHJcbiAgICBpZiAoIXRlbmFudElkKSB0aHJvdyBuZXcgRXJyb3IoXCJVbmF1dGhvcml6ZWRcIilcclxuXHJcbiAgICAvLyBUcnkgdXBkYXRpbmcgaW52aXRhdGlvbiBmaXJzdCAoaXQncyBzaW1wbGVyIGFuZCBtb3JlIGRpcmVjdCBmb3IgdGhlIHVzZXIgSUQgcHJvdmlkZWQgaWYgaXQncyBhbiBpbnZpdGUpXHJcbiAgICBjb25zdCB7IGRhdGE6IGludml0ZVVwZGF0ZSwgZXJyb3I6IGludml0ZUVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAgIC5mcm9tKFwiaW52aXRhdGlvbnNcIilcclxuICAgICAgICAudXBkYXRlKHsgcm9sZV9pZDogcm9sZUlkIH0pXHJcbiAgICAgICAgLmVxKFwiaWRcIiwgYWdlbnRJZClcclxuICAgICAgICAuZXEoXCJ0ZW5hbnRfaWRcIiwgdGVuYW50SWQpXHJcbiAgICAgICAgLnNlbGVjdCgpXHJcblxyXG4gICAgLy8gSWYgaXQgd2FzIGFuIGludml0YXRpb24gYW5kIHdhcyB1cGRhdGVkLCB3ZSBhcmUgZG9uZVxyXG4gICAgaWYgKCFpbnZpdGVFcnJvciAmJiBpbnZpdGVVcGRhdGUgJiYgaW52aXRlVXBkYXRlLmxlbmd0aCA+IDApIHtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBPdGhlcndpc2UsIGFzc3VtZSBpdCdzIGEgcHJvZmlsZVxyXG4gICAgLy8gRmlyc3QgZGVsZXRlIGV4aXN0aW5nIGFzc2lnbm1lbnRzIGZvciB0aGlzIHVzZXJcclxuICAgIGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgICAgLmZyb20oXCJ1c2VyX3JvbGVfYXNzaWdubWVudHNcIilcclxuICAgICAgICAuZGVsZXRlKClcclxuICAgICAgICAuZXEoXCJ1c2VyX2lkXCIsIGFnZW50SWQpXHJcblxyXG4gICAgY29uc3QgeyBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgICAuZnJvbShcInVzZXJfcm9sZV9hc3NpZ25tZW50c1wiKVxyXG4gICAgICAgIC5pbnNlcnQoe1xyXG4gICAgICAgICAgICB1c2VyX2lkOiBhZ2VudElkLFxyXG4gICAgICAgICAgICByb2xlX2lkOiByb2xlSWRcclxuICAgICAgICB9KVxyXG5cclxuICAgIGlmIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciB1cGRhdGluZyBhZ2VudCByb2xlOlwiLCBlcnJvcilcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJObyBzZSBwdWRvIGFjdHVhbGl6YXIgZWwgcm9sLiBWZXJpZmlxdWUgcXVlIGVsIHVzdWFyaW8gbyBpbnZpdGFjacOzbiBzZWEgdsOhbGlkby5cIilcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGludml0ZUFnZW50KGRhdGE6IHsgbmFtZTogc3RyaW5nLCBlbWFpbDogc3RyaW5nLCByb2xlSWQ6IHN0cmluZywgYnJhbmNoSWQ6IHN0cmluZyB9KSB7XHJcbiAgICBjb25zdCBzdXBhYmFzZSA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpXHJcbiAgICBjb25zdCBhZG1pblN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQWRtaW5DbGllbnQoKVxyXG4gICAgY29uc3QgdGVuYW50SWQgPSBhd2FpdCBnZXRUZW5hbnRJZChzdXBhYmFzZSlcclxuXHJcbiAgICBpZiAoIXRlbmFudElkKSB0aHJvdyBuZXcgRXJyb3IoXCJVbmF1dGhvcml6ZWRcIilcclxuXHJcbiAgICAvLyBDaGVjayBpZiBpbnZpdGF0aW9uIGFscmVhZHkgZXhpc3RzIGZvciB0aGlzIGVtYWlsXHJcbiAgICBjb25zdCB7IGRhdGE6IGV4aXN0aW5nSW52aXRlIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAgIC5mcm9tKFwiaW52aXRhdGlvbnNcIilcclxuICAgICAgICAuc2VsZWN0KFwiKlwiKVxyXG4gICAgICAgIC5lcShcInRlbmFudF9pZFwiLCB0ZW5hbnRJZClcclxuICAgICAgICAuZXEoXCJlbWFpbFwiLCBkYXRhLmVtYWlsKVxyXG4gICAgICAgIC5lcShcInN0YXR1c1wiLCBcInBlbmRpbmdcIilcclxuICAgICAgICAuc2luZ2xlKClcclxuXHJcbiAgICBpZiAoZXhpc3RpbmdJbnZpdGUpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJZYSBleGlzdGUgdW5hIGludml0YWNpw7NuIHBlbmRpZW50ZSBwYXJhIGVzdGUgY29ycmVvIGVsZWN0csOzbmljb1wiKVxyXG4gICAgfVxyXG5cclxuICAgIC8vIFZhbGlkYXRlIHRoYXQgcm9sZUlkIGFuZCBicmFuY2hJZCBhcmUgdmFsaWQgVVVJRHMgb3IgbnVsbFxyXG4gICAgY29uc3Qgcm9sZUlkID0gZGF0YS5yb2xlSWQgPT09IFwiXCIgPyBudWxsIDogZGF0YS5yb2xlSWRcclxuICAgIGNvbnN0IGJyYW5jaElkID0gZGF0YS5icmFuY2hJZCA9PT0gXCJcIiA/IG51bGwgOiBkYXRhLmJyYW5jaElkXHJcblxyXG4gICAgLy8gMS4gU2VuZCBuYXRpdmUgU3VwYWJhc2UgaW52aXRhdGlvbiB3aXRoIG1ldGFkYXRhXHJcbiAgICBjb25zdCB7IGRhdGE6IGF1dGhEYXRhLCBlcnJvcjogYXV0aEVycm9yIH0gPSBhd2FpdCBhZG1pblN1cGFiYXNlLmF1dGguYWRtaW4uaW52aXRlVXNlckJ5RW1haWwoZGF0YS5lbWFpbCwge1xyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgdGVuYW50X2lkOiB0ZW5hbnRJZCxcclxuICAgICAgICAgICAgcm9sZV9pZDogcm9sZUlkLFxyXG4gICAgICAgICAgICBicmFuY2hfaWQ6IGJyYW5jaElkLFxyXG4gICAgICAgICAgICBmdWxsX25hbWU6IGRhdGEubmFtZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcmVkaXJlY3RUbzogYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU0lURV9VUkwgfHwgJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMCd9L2F1dGgvY2FsbGJhY2tgXHJcbiAgICB9KVxyXG5cclxuICAgIGlmIChhdXRoRXJyb3IpIHtcclxuICAgICAgICAvLyBJZiB1c2VyIGFscmVhZHkgZXhpc3RzLCBjaGVjayBpZiB0aGV5IGFyZSBhbHJlYWR5IGluIHRoZSB0ZW5hbnRcclxuICAgICAgICBpZiAoYXV0aEVycm9yLm1lc3NhZ2UuaW5jbHVkZXMoXCJhbHJlYWR5IGJlZW4gcmVnaXN0ZXJlZFwiKSB8fCBhdXRoRXJyb3Iuc3RhdHVzID09PSA0MjIpIHtcclxuICAgICAgICAgICAgY29uc3QgeyBkYXRhOiBwcm9maWxlRXhpc3RzIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAgICAgICAgICAgLmZyb20oXCJwcm9maWxlc1wiKVxyXG4gICAgICAgICAgICAgICAgLnNlbGVjdChcImlkXCIpXHJcbiAgICAgICAgICAgICAgICAuZXEoXCJlbWFpbFwiLCBkYXRhLmVtYWlsKVxyXG4gICAgICAgICAgICAgICAgLmVxKFwidGVuYW50X2lkXCIsIHRlbmFudElkKVxyXG4gICAgICAgICAgICAgICAgLm1heWJlU2luZ2xlKClcclxuXHJcbiAgICAgICAgICAgIGlmIChwcm9maWxlRXhpc3RzKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiRXN0ZSB1c3VhcmlvIHlhIGVzIHBhcnRlIGRlIHR1IGVxdWlwb1wiIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIkVzdGUgY29ycmVvIHlhIGVzdMOhIHJlZ2lzdHJhZG8gZW4gbGEgcGxhdGFmb3JtYS4gUGFyYSBzdW1hcmxvIGEgdHUgZXF1aXBvLCB1c2EgZWwgbWlzbW8gY29ycmVvIGVuIGxhIHNlY2Npw7NuIGRlIFJlZCBvIGNvbnRhY3RhIGEgc29wb3J0ZS5cIiB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiQXV0aCBJbnZpdGUgRXJyb3I6XCIsIGF1dGhFcnJvcilcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGBFcnJvciBhbCBlbnZpYXIgaW52aXRhY2nDs246ICR7YXV0aEVycm9yLm1lc3NhZ2V9YCB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gMi4gSW5zZXJ0IGludG8gb3VyIGxvY2FsIGludml0YXRpb25zIHRhYmxlIGZvciBVSSB0cmFja2luZ1xyXG4gICAgY29uc3QgeyBlcnJvcjogZGJFcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgICAuZnJvbShcImludml0YXRpb25zXCIpXHJcbiAgICAgICAgLmluc2VydCh7XHJcbiAgICAgICAgICAgIHRlbmFudF9pZDogdGVuYW50SWQsXHJcbiAgICAgICAgICAgIG5hbWU6IGRhdGEubmFtZSxcclxuICAgICAgICAgICAgZW1haWw6IGRhdGEuZW1haWwsXHJcbiAgICAgICAgICAgIHJvbGVfaWQ6IHJvbGVJZCxcclxuICAgICAgICAgICAgYnJhbmNoX2lkOiBicmFuY2hJZCxcclxuICAgICAgICAgICAgc3RhdHVzOiAncGVuZGluZydcclxuICAgICAgICB9KVxyXG5cclxuICAgIGlmIChkYkVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkRhdGFiYXNlIEVycm9yOlwiLCBkYkVycm9yKVxyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogYEVycm9yIGVuIGxhIGJhc2UgZGUgZGF0b3M6ICR7ZGJFcnJvci5tZXNzYWdlfWAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlQWdlbnQoYWdlbnRJZDogc3RyaW5nKSB7XHJcbiAgICBjb25zdCBzdXBhYmFzZSA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpXHJcbiAgICBjb25zdCB0ZW5hbnRJZCA9IGF3YWl0IGdldFRlbmFudElkKHN1cGFiYXNlKVxyXG5cclxuICAgIGlmICghdGVuYW50SWQpIHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZFwiKVxyXG5cclxuICAgIC8vIFRyeSBkZWxldGluZyBmcm9tIGludml0YXRpb25zIGZpcnN0XHJcbiAgICBjb25zdCB7IGRhdGE6IGludml0ZURlbGV0ZSwgZXJyb3I6IGludml0ZUVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAgIC5mcm9tKFwiaW52aXRhdGlvbnNcIilcclxuICAgICAgICAuZGVsZXRlKClcclxuICAgICAgICAuZXEoXCJpZFwiLCBhZ2VudElkKVxyXG4gICAgICAgIC5lcShcInRlbmFudF9pZFwiLCB0ZW5hbnRJZClcclxuICAgICAgICAuc2VsZWN0KClcclxuXHJcbiAgICBpZiAoIWludml0ZUVycm9yICYmIGludml0ZURlbGV0ZSAmJiBpbnZpdGVEZWxldGUubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIE90aGVyd2lzZSwgYXNzdW1lIGl0J3MgYSBwcm9maWxlXHJcbiAgICBjb25zdCB7IGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAgIC5mcm9tKFwicHJvZmlsZXNcIilcclxuICAgICAgICAuZGVsZXRlKClcclxuICAgICAgICAuZXEoXCJpZFwiLCBhZ2VudElkKVxyXG4gICAgICAgIC5lcShcInRlbmFudF9pZFwiLCB0ZW5hbnRJZClcclxuXHJcbiAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZGVsZXRpbmcgYWdlbnQ6XCIsIGVycm9yKVxyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vIHNlIHB1ZG8gZWxpbWluYXIgZWwgaW50ZWdyYW50ZSBkZWwgZXF1aXBvXCIpXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJrU0FtSHNCLDRMQUFBIn0=
}),
"[project]/apps/web/app/actions/data:6dc741 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "deleteAgent",
    ()=>$$RSC_SERVER_ACTION_5
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"407c457a5109e97494d8366bbdb93be2321362adb5":"deleteAgent"},"apps/web/app/actions/agents.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("407c457a5109e97494d8366bbdb93be2321362adb5", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "deleteAgent");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWdlbnRzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHNlcnZlclwiXHJcblxyXG5pbXBvcnQgeyBjcmVhdGVDbGllbnQsIGNyZWF0ZUFkbWluQ2xpZW50LCBnZXRUZW5hbnRJZCB9IGZyb20gXCJAL2xpYi9zdXBhYmFzZS9zZXJ2ZXJcIlxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEFnZW50cygpIHtcclxuICAgIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KClcclxuICAgIGNvbnN0IHRlbmFudElkID0gYXdhaXQgZ2V0VGVuYW50SWQoc3VwYWJhc2UpXHJcblxyXG4gICAgaWYgKCF0ZW5hbnRJZCkgcmV0dXJuIFtdXHJcblxyXG4gICAgLy8gRmV0Y2ggcHJvZmlsZXMgd2l0aCByb2xlcyBhbmQgYnJhbmNoZXNcclxuICAgIC8vIFdlIHVzZSBqb2luIHRocm91Z2ggdXNlcl9yb2xlX2Fzc2lnbm1lbnRzIC0+IHJvbGVzIGFuZCB1c2VyX2JyYW5jaGVzIC0+IGJyYW5jaGVzXHJcbiAgICBjb25zdCB7IGRhdGE6IHByb2ZpbGVzLCBlcnJvcjogcHJvZmlsZUVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAgIC5mcm9tKFwicHJvZmlsZXNcIilcclxuICAgICAgICAuc2VsZWN0KGBcclxuICAgICAgICAgICAgKixcclxuICAgICAgICAgICAgdXNlcl9yb2xlX2Fzc2lnbm1lbnRzIChcclxuICAgICAgICAgICAgICAgIHJvbGVzIChcclxuICAgICAgICAgICAgICAgICAgICBpZCxcclxuICAgICAgICAgICAgICAgICAgICBuYW1lXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgIHVzZXJfYnJhbmNoZXMgKFxyXG4gICAgICAgICAgICAgICAgYnJhbmNoZXMgKFxyXG4gICAgICAgICAgICAgICAgICAgIGlkLFxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWVcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIGApXHJcbiAgICAgICAgLmVxKFwidGVuYW50X2lkXCIsIHRlbmFudElkKVxyXG4gICAgICAgIC5vcmRlcihcIm5hbWVcIiwgeyBhc2NlbmRpbmc6IHRydWUgfSlcclxuXHJcbiAgICBpZiAocHJvZmlsZUVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIGFnZW50czpcIiwgcHJvZmlsZUVycm9yKVxyXG4gICAgICAgIHJldHVybiBbXVxyXG4gICAgfVxyXG5cclxuICAgIC8vIEZldGNoIHBlbmRpbmcgaW52aXRhdGlvbnNcclxuICAgIGNvbnN0IHsgZGF0YTogaW52aXRhdGlvbnMsIGVycm9yOiBpbnZpdGVFcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgICAuZnJvbShcImludml0YXRpb25zXCIpXHJcbiAgICAgICAgLnNlbGVjdChgXHJcbiAgICAgICAgICAgICosXHJcbiAgICAgICAgICAgIHJvbGVzIChpZCwgbmFtZSksXHJcbiAgICAgICAgICAgIGJyYW5jaGVzIChpZCwgbmFtZSlcclxuICAgICAgICBgKVxyXG4gICAgICAgIC5lcShcInRlbmFudF9pZFwiLCB0ZW5hbnRJZClcclxuICAgICAgICAuZXEoXCJzdGF0dXNcIiwgXCJwZW5kaW5nXCIpXHJcblxyXG4gICAgaWYgKGludml0ZUVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIGludml0YXRpb25zOlwiLCBpbnZpdGVFcnJvcilcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBhZ2VudHMgPSBwcm9maWxlcy5tYXAocHJvZmlsZSA9PiAoe1xyXG4gICAgICAgIC4uLnByb2ZpbGUsXHJcbiAgICAgICAgcm9sZXM6IHByb2ZpbGUudXNlcl9yb2xlX2Fzc2lnbm1lbnRzPy5tYXAoKHJhOiBhbnkpID0+IHJhLnJvbGVzKSB8fCBbXSxcclxuICAgICAgICBicmFuY2hlczogcHJvZmlsZS51c2VyX2JyYW5jaGVzPy5tYXAoKHViOiBhbnkpID0+IHViLmJyYW5jaGVzKSB8fCBbXSxcclxuICAgICAgICBpc19pbnZpdGF0aW9uOiBmYWxzZVxyXG4gICAgfSkpXHJcblxyXG4gICAgY29uc3QgaW52aXRlZEFnZW50cyA9IChpbnZpdGF0aW9ucyB8fCBbXSkubWFwKGludml0ZSA9PiAoe1xyXG4gICAgICAgIGlkOiBpbnZpdGUuaWQsXHJcbiAgICAgICAgbmFtZTogaW52aXRlLm5hbWUsXHJcbiAgICAgICAgZW1haWw6IGludml0ZS5lbWFpbCxcclxuICAgICAgICByb2xlczogaW52aXRlLnJvbGVzID8gW2ludml0ZS5yb2xlc10gOiBbXSxcclxuICAgICAgICBicmFuY2hlczogaW52aXRlLmJyYW5jaGVzID8gW2ludml0ZS5icmFuY2hlc10gOiBbXSxcclxuICAgICAgICBjcmVhdGVkX2F0OiBpbnZpdGUuaW52aXRlZF9hdCxcclxuICAgICAgICBpc19pbnZpdGF0aW9uOiB0cnVlLFxyXG4gICAgICAgIHN0YXR1czogJ3BlbmRpbmcnXHJcbiAgICB9KSlcclxuXHJcbiAgICByZXR1cm4gWy4uLmFnZW50cywgLi4uaW52aXRlZEFnZW50c10uc29ydCgoYSwgYikgPT5cclxuICAgICAgICAoYS5uYW1lIHx8ICcnKS5sb2NhbGVDb21wYXJlKGIubmFtZSB8fCAnJylcclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFJvbGVzKCkge1xyXG4gICAgY29uc3Qgc3VwYWJhc2UgPSBhd2FpdCBjcmVhdGVDbGllbnQoKVxyXG4gICAgY29uc3QgdGVuYW50SWQgPSBhd2FpdCBnZXRUZW5hbnRJZChzdXBhYmFzZSlcclxuXHJcbiAgICBpZiAoIXRlbmFudElkKSByZXR1cm4gW11cclxuXHJcbiAgICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAgIC5mcm9tKFwicm9sZXNcIilcclxuICAgICAgICAuc2VsZWN0KFwiKlwiKVxyXG4gICAgICAgIC5lcShcInRlbmFudF9pZFwiLCB0ZW5hbnRJZClcclxuICAgICAgICAub3JkZXIoXCJuYW1lXCIsIHsgYXNjZW5kaW5nOiB0cnVlIH0pXHJcblxyXG4gICAgaWYgKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIHJvbGVzOlwiLCBlcnJvcilcclxuICAgICAgICByZXR1cm4gW11cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZGF0YVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QnJhbmNoZXMoKSB7XHJcbiAgICBjb25zdCBzdXBhYmFzZSA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpXHJcbiAgICBjb25zdCB0ZW5hbnRJZCA9IGF3YWl0IGdldFRlbmFudElkKHN1cGFiYXNlKVxyXG5cclxuICAgIGlmICghdGVuYW50SWQpIHJldHVybiBbXVxyXG5cclxuICAgIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgICAgLmZyb20oXCJicmFuY2hlc1wiKVxyXG4gICAgICAgIC5zZWxlY3QoXCIqXCIpXHJcbiAgICAgICAgLmVxKFwidGVuYW50X2lkXCIsIHRlbmFudElkKVxyXG4gICAgICAgIC5vcmRlcihcIm5hbWVcIiwgeyBhc2NlbmRpbmc6IHRydWUgfSlcclxuXHJcbiAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgYnJhbmNoZXM6XCIsIGVycm9yKVxyXG4gICAgICAgIHJldHVybiBbXVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBkYXRhXHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVBZ2VudFJvbGUoYWdlbnRJZDogc3RyaW5nLCByb2xlSWQ6IHN0cmluZykge1xyXG4gICAgY29uc3Qgc3VwYWJhc2UgPSBhd2FpdCBjcmVhdGVDbGllbnQoKVxyXG4gICAgY29uc3QgdGVuYW50SWQgPSBhd2FpdCBnZXRUZW5hbnRJZChzdXBhYmFzZSlcclxuXHJcbiAgICBpZiAoIXRlbmFudElkKSB0aHJvdyBuZXcgRXJyb3IoXCJVbmF1dGhvcml6ZWRcIilcclxuXHJcbiAgICAvLyBUcnkgdXBkYXRpbmcgaW52aXRhdGlvbiBmaXJzdCAoaXQncyBzaW1wbGVyIGFuZCBtb3JlIGRpcmVjdCBmb3IgdGhlIHVzZXIgSUQgcHJvdmlkZWQgaWYgaXQncyBhbiBpbnZpdGUpXHJcbiAgICBjb25zdCB7IGRhdGE6IGludml0ZVVwZGF0ZSwgZXJyb3I6IGludml0ZUVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAgIC5mcm9tKFwiaW52aXRhdGlvbnNcIilcclxuICAgICAgICAudXBkYXRlKHsgcm9sZV9pZDogcm9sZUlkIH0pXHJcbiAgICAgICAgLmVxKFwiaWRcIiwgYWdlbnRJZClcclxuICAgICAgICAuZXEoXCJ0ZW5hbnRfaWRcIiwgdGVuYW50SWQpXHJcbiAgICAgICAgLnNlbGVjdCgpXHJcblxyXG4gICAgLy8gSWYgaXQgd2FzIGFuIGludml0YXRpb24gYW5kIHdhcyB1cGRhdGVkLCB3ZSBhcmUgZG9uZVxyXG4gICAgaWYgKCFpbnZpdGVFcnJvciAmJiBpbnZpdGVVcGRhdGUgJiYgaW52aXRlVXBkYXRlLmxlbmd0aCA+IDApIHtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBPdGhlcndpc2UsIGFzc3VtZSBpdCdzIGEgcHJvZmlsZVxyXG4gICAgLy8gRmlyc3QgZGVsZXRlIGV4aXN0aW5nIGFzc2lnbm1lbnRzIGZvciB0aGlzIHVzZXJcclxuICAgIGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgICAgLmZyb20oXCJ1c2VyX3JvbGVfYXNzaWdubWVudHNcIilcclxuICAgICAgICAuZGVsZXRlKClcclxuICAgICAgICAuZXEoXCJ1c2VyX2lkXCIsIGFnZW50SWQpXHJcblxyXG4gICAgY29uc3QgeyBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgICAuZnJvbShcInVzZXJfcm9sZV9hc3NpZ25tZW50c1wiKVxyXG4gICAgICAgIC5pbnNlcnQoe1xyXG4gICAgICAgICAgICB1c2VyX2lkOiBhZ2VudElkLFxyXG4gICAgICAgICAgICByb2xlX2lkOiByb2xlSWRcclxuICAgICAgICB9KVxyXG5cclxuICAgIGlmIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciB1cGRhdGluZyBhZ2VudCByb2xlOlwiLCBlcnJvcilcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJObyBzZSBwdWRvIGFjdHVhbGl6YXIgZWwgcm9sLiBWZXJpZmlxdWUgcXVlIGVsIHVzdWFyaW8gbyBpbnZpdGFjacOzbiBzZWEgdsOhbGlkby5cIilcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGludml0ZUFnZW50KGRhdGE6IHsgbmFtZTogc3RyaW5nLCBlbWFpbDogc3RyaW5nLCByb2xlSWQ6IHN0cmluZywgYnJhbmNoSWQ6IHN0cmluZyB9KSB7XHJcbiAgICBjb25zdCBzdXBhYmFzZSA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpXHJcbiAgICBjb25zdCBhZG1pblN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQWRtaW5DbGllbnQoKVxyXG4gICAgY29uc3QgdGVuYW50SWQgPSBhd2FpdCBnZXRUZW5hbnRJZChzdXBhYmFzZSlcclxuXHJcbiAgICBpZiAoIXRlbmFudElkKSB0aHJvdyBuZXcgRXJyb3IoXCJVbmF1dGhvcml6ZWRcIilcclxuXHJcbiAgICAvLyBDaGVjayBpZiBpbnZpdGF0aW9uIGFscmVhZHkgZXhpc3RzIGZvciB0aGlzIGVtYWlsXHJcbiAgICBjb25zdCB7IGRhdGE6IGV4aXN0aW5nSW52aXRlIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAgIC5mcm9tKFwiaW52aXRhdGlvbnNcIilcclxuICAgICAgICAuc2VsZWN0KFwiKlwiKVxyXG4gICAgICAgIC5lcShcInRlbmFudF9pZFwiLCB0ZW5hbnRJZClcclxuICAgICAgICAuZXEoXCJlbWFpbFwiLCBkYXRhLmVtYWlsKVxyXG4gICAgICAgIC5lcShcInN0YXR1c1wiLCBcInBlbmRpbmdcIilcclxuICAgICAgICAuc2luZ2xlKClcclxuXHJcbiAgICBpZiAoZXhpc3RpbmdJbnZpdGUpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJZYSBleGlzdGUgdW5hIGludml0YWNpw7NuIHBlbmRpZW50ZSBwYXJhIGVzdGUgY29ycmVvIGVsZWN0csOzbmljb1wiKVxyXG4gICAgfVxyXG5cclxuICAgIC8vIFZhbGlkYXRlIHRoYXQgcm9sZUlkIGFuZCBicmFuY2hJZCBhcmUgdmFsaWQgVVVJRHMgb3IgbnVsbFxyXG4gICAgY29uc3Qgcm9sZUlkID0gZGF0YS5yb2xlSWQgPT09IFwiXCIgPyBudWxsIDogZGF0YS5yb2xlSWRcclxuICAgIGNvbnN0IGJyYW5jaElkID0gZGF0YS5icmFuY2hJZCA9PT0gXCJcIiA/IG51bGwgOiBkYXRhLmJyYW5jaElkXHJcblxyXG4gICAgLy8gMS4gU2VuZCBuYXRpdmUgU3VwYWJhc2UgaW52aXRhdGlvbiB3aXRoIG1ldGFkYXRhXHJcbiAgICBjb25zdCB7IGRhdGE6IGF1dGhEYXRhLCBlcnJvcjogYXV0aEVycm9yIH0gPSBhd2FpdCBhZG1pblN1cGFiYXNlLmF1dGguYWRtaW4uaW52aXRlVXNlckJ5RW1haWwoZGF0YS5lbWFpbCwge1xyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgdGVuYW50X2lkOiB0ZW5hbnRJZCxcclxuICAgICAgICAgICAgcm9sZV9pZDogcm9sZUlkLFxyXG4gICAgICAgICAgICBicmFuY2hfaWQ6IGJyYW5jaElkLFxyXG4gICAgICAgICAgICBmdWxsX25hbWU6IGRhdGEubmFtZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcmVkaXJlY3RUbzogYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU0lURV9VUkwgfHwgJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMCd9L2F1dGgvY2FsbGJhY2tgXHJcbiAgICB9KVxyXG5cclxuICAgIGlmIChhdXRoRXJyb3IpIHtcclxuICAgICAgICAvLyBJZiB1c2VyIGFscmVhZHkgZXhpc3RzLCBjaGVjayBpZiB0aGV5IGFyZSBhbHJlYWR5IGluIHRoZSB0ZW5hbnRcclxuICAgICAgICBpZiAoYXV0aEVycm9yLm1lc3NhZ2UuaW5jbHVkZXMoXCJhbHJlYWR5IGJlZW4gcmVnaXN0ZXJlZFwiKSB8fCBhdXRoRXJyb3Iuc3RhdHVzID09PSA0MjIpIHtcclxuICAgICAgICAgICAgY29uc3QgeyBkYXRhOiBwcm9maWxlRXhpc3RzIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAgICAgICAgICAgLmZyb20oXCJwcm9maWxlc1wiKVxyXG4gICAgICAgICAgICAgICAgLnNlbGVjdChcImlkXCIpXHJcbiAgICAgICAgICAgICAgICAuZXEoXCJlbWFpbFwiLCBkYXRhLmVtYWlsKVxyXG4gICAgICAgICAgICAgICAgLmVxKFwidGVuYW50X2lkXCIsIHRlbmFudElkKVxyXG4gICAgICAgICAgICAgICAgLm1heWJlU2luZ2xlKClcclxuXHJcbiAgICAgICAgICAgIGlmIChwcm9maWxlRXhpc3RzKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiRXN0ZSB1c3VhcmlvIHlhIGVzIHBhcnRlIGRlIHR1IGVxdWlwb1wiIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIkVzdGUgY29ycmVvIHlhIGVzdMOhIHJlZ2lzdHJhZG8gZW4gbGEgcGxhdGFmb3JtYS4gUGFyYSBzdW1hcmxvIGEgdHUgZXF1aXBvLCB1c2EgZWwgbWlzbW8gY29ycmVvIGVuIGxhIHNlY2Npw7NuIGRlIFJlZCBvIGNvbnRhY3RhIGEgc29wb3J0ZS5cIiB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiQXV0aCBJbnZpdGUgRXJyb3I6XCIsIGF1dGhFcnJvcilcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGBFcnJvciBhbCBlbnZpYXIgaW52aXRhY2nDs246ICR7YXV0aEVycm9yLm1lc3NhZ2V9YCB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gMi4gSW5zZXJ0IGludG8gb3VyIGxvY2FsIGludml0YXRpb25zIHRhYmxlIGZvciBVSSB0cmFja2luZ1xyXG4gICAgY29uc3QgeyBlcnJvcjogZGJFcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgICAuZnJvbShcImludml0YXRpb25zXCIpXHJcbiAgICAgICAgLmluc2VydCh7XHJcbiAgICAgICAgICAgIHRlbmFudF9pZDogdGVuYW50SWQsXHJcbiAgICAgICAgICAgIG5hbWU6IGRhdGEubmFtZSxcclxuICAgICAgICAgICAgZW1haWw6IGRhdGEuZW1haWwsXHJcbiAgICAgICAgICAgIHJvbGVfaWQ6IHJvbGVJZCxcclxuICAgICAgICAgICAgYnJhbmNoX2lkOiBicmFuY2hJZCxcclxuICAgICAgICAgICAgc3RhdHVzOiAncGVuZGluZydcclxuICAgICAgICB9KVxyXG5cclxuICAgIGlmIChkYkVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkRhdGFiYXNlIEVycm9yOlwiLCBkYkVycm9yKVxyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogYEVycm9yIGVuIGxhIGJhc2UgZGUgZGF0b3M6ICR7ZGJFcnJvci5tZXNzYWdlfWAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlQWdlbnQoYWdlbnRJZDogc3RyaW5nKSB7XHJcbiAgICBjb25zdCBzdXBhYmFzZSA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpXHJcbiAgICBjb25zdCB0ZW5hbnRJZCA9IGF3YWl0IGdldFRlbmFudElkKHN1cGFiYXNlKVxyXG5cclxuICAgIGlmICghdGVuYW50SWQpIHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZFwiKVxyXG5cclxuICAgIC8vIFRyeSBkZWxldGluZyBmcm9tIGludml0YXRpb25zIGZpcnN0XHJcbiAgICBjb25zdCB7IGRhdGE6IGludml0ZURlbGV0ZSwgZXJyb3I6IGludml0ZUVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAgIC5mcm9tKFwiaW52aXRhdGlvbnNcIilcclxuICAgICAgICAuZGVsZXRlKClcclxuICAgICAgICAuZXEoXCJpZFwiLCBhZ2VudElkKVxyXG4gICAgICAgIC5lcShcInRlbmFudF9pZFwiLCB0ZW5hbnRJZClcclxuICAgICAgICAuc2VsZWN0KClcclxuXHJcbiAgICBpZiAoIWludml0ZUVycm9yICYmIGludml0ZURlbGV0ZSAmJiBpbnZpdGVEZWxldGUubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIE90aGVyd2lzZSwgYXNzdW1lIGl0J3MgYSBwcm9maWxlXHJcbiAgICBjb25zdCB7IGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAgIC5mcm9tKFwicHJvZmlsZXNcIilcclxuICAgICAgICAuZGVsZXRlKClcclxuICAgICAgICAuZXEoXCJpZFwiLCBhZ2VudElkKVxyXG4gICAgICAgIC5lcShcInRlbmFudF9pZFwiLCB0ZW5hbnRJZClcclxuXHJcbiAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZGVsZXRpbmcgYWdlbnQ6XCIsIGVycm9yKVxyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vIHNlIHB1ZG8gZWxpbWluYXIgZWwgaW50ZWdyYW50ZSBkZWwgZXF1aXBvXCIpXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI4UkF3T3NCLHdMQUFBIn0=
}),
"[project]/apps/web/app/actions/data:6cf3ec [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "inviteNetworkAgent",
    ()=>$$RSC_SERVER_ACTION_0
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"408118bd61b89b5d829b59dd7e76fa83ba0976f18f":"inviteNetworkAgent"},"apps/web/app/actions/network.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("408118bd61b89b5d829b59dd7e76fa83ba0976f18f", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "inviteNetworkAgent");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vbmV0d29yay50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzZXJ2ZXJcIlxyXG5cclxuaW1wb3J0IHsgY3JlYXRlQ2xpZW50LCBnZXRUZW5hbnRJZCB9IGZyb20gXCJAL2xpYi9zdXBhYmFzZS9zZXJ2ZXJcIlxyXG5pbXBvcnQgeyByZXZhbGlkYXRlUGF0aCB9IGZyb20gXCJuZXh0L2NhY2hlXCJcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBpbnZpdGVOZXR3b3JrQWdlbnQoZW1haWw6IHN0cmluZykge1xyXG4gICAgY29uc3Qgc3VwYWJhc2UgPSBhd2FpdCBjcmVhdGVDbGllbnQoKVxyXG4gICAgY29uc3QgdGVuYW50SWQgPSBhd2FpdCBnZXRUZW5hbnRJZChzdXBhYmFzZSlcclxuXHJcbiAgICBpZiAoIXRlbmFudElkKSB0aHJvdyBuZXcgRXJyb3IoXCJVbmF1dGhvcml6ZWRcIilcclxuXHJcbiAgICAvLyBDaGVjayBpZiBpbnZpdGF0aW9uIGFscmVhZHkgZXhpc3RzXHJcbiAgICBjb25zdCB7IGRhdGE6IGV4aXN0aW5nIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAgIC5mcm9tKFwibmV0d29ya19pbnZpdGF0aW9uc1wiKVxyXG4gICAgICAgIC5zZWxlY3QoXCJpZCwgc3RhdHVzXCIpXHJcbiAgICAgICAgLmVxKFwic2VuZGVyX3RlbmFudF9pZFwiLCB0ZW5hbnRJZClcclxuICAgICAgICAuZXEoXCJyZWNpcGllbnRfZW1haWxcIiwgZW1haWwpXHJcbiAgICAgICAgLnNpbmdsZSgpXHJcblxyXG4gICAgaWYgKGV4aXN0aW5nKSB7XHJcbiAgICAgICAgaWYgKGV4aXN0aW5nLnN0YXR1cyA9PT0gJ3BlbmRpbmcnKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIllhIGV4aXN0ZSB1bmEgaW52aXRhY2nDs24gcGVuZGllbnRlIHBhcmEgZXN0ZSBjb3JyZW9cIilcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGV4aXN0aW5nLnN0YXR1cyA9PT0gJ2FjY2VwdGVkJykge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJFc3RlIGFnZW50ZSB5YSBlcyBwYXJ0ZSBkZSB0dSByZWRcIilcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgeyBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgICAuZnJvbShcIm5ldHdvcmtfaW52aXRhdGlvbnNcIilcclxuICAgICAgICAuaW5zZXJ0KHtcclxuICAgICAgICAgICAgc2VuZGVyX3RlbmFudF9pZDogdGVuYW50SWQsXHJcbiAgICAgICAgICAgIHJlY2lwaWVudF9lbWFpbDogZW1haWwsXHJcbiAgICAgICAgICAgIHN0YXR1czogJ3BlbmRpbmcnXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgY3JlYXRpbmcgaW52aXRhdGlvbjpcIiwgZXJyb3IpXHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRXJyb3IgYWwgY3JlYXIgbGEgaW52aXRhY2nDs25cIilcclxuICAgIH1cclxuXHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9hZ2VudGVzXCIpXHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXROZXR3b3JrU3RhdHVzKCkge1xyXG4gICAgY29uc3Qgc3VwYWJhc2UgPSBhd2FpdCBjcmVhdGVDbGllbnQoKVxyXG4gICAgY29uc3QgdGVuYW50SWQgPSBhd2FpdCBnZXRUZW5hbnRJZChzdXBhYmFzZSlcclxuXHJcbiAgICBpZiAoIXRlbmFudElkKSByZXR1cm4geyBwYXJ0bmVyczogW10sIHNlbnRJbnZpdGF0aW9uczogW10sIHJlY2VpdmVkSW52aXRhdGlvbnM6IFtdIH1cclxuXHJcbiAgICAvLyBHZXQgYWN0aXZlIHBhcnRuZXJzaGlwc1xyXG4gICAgY29uc3QgeyBkYXRhOiBwYXJ0bmVyc2hpcHMgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgICAgLmZyb20oXCJ0ZW5hbnRfcGFydG5lcnNoaXBzXCIpXHJcbiAgICAgICAgLnNlbGVjdChgXHJcbiAgICAgICAgICAgICosXHJcbiAgICAgICAgICAgIHJlcXVlc3RlcjpyZXF1ZXN0ZXJfdGVuYW50X2lkKGlkLCBuYW1lKSxcclxuICAgICAgICAgICAgcmVzcG9uZGVyOnJlc3BvbmRlcl90ZW5hbnRfaWQoaWQsIG5hbWUpXHJcbiAgICAgICAgYClcclxuICAgICAgICAub3IoYHJlcXVlc3Rlcl90ZW5hbnRfaWQuZXEuJHt0ZW5hbnRJZH0scmVzcG9uZGVyX3RlbmFudF9pZC5lcS4ke3RlbmFudElkfWApXHJcbiAgICAgICAgLmVxKFwic3RhdHVzXCIsIFwiYWN0aXZlXCIpXHJcblxyXG4gICAgLy8gR2V0IHNlbnQgaW52aXRhdGlvbnNcclxuICAgIGNvbnN0IHsgZGF0YTogc2VudEludml0YXRpb25zIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAgIC5mcm9tKFwibmV0d29ya19pbnZpdGF0aW9uc1wiKVxyXG4gICAgICAgIC5zZWxlY3QoXCIqXCIpXHJcbiAgICAgICAgLmVxKFwic2VuZGVyX3RlbmFudF9pZFwiLCB0ZW5hbnRJZClcclxuICAgICAgICAub3JkZXIoXCJjcmVhdGVkX2F0XCIsIHsgYXNjZW5kaW5nOiBmYWxzZSB9KVxyXG5cclxuICAgIC8vIEdldCByZWNlaXZlZCBpbnZpdGF0aW9ucyAoYmFzZWQgb24gdXNlciBlbWFpbClcclxuICAgIGNvbnN0IHsgZGF0YTogeyB1c2VyIH0gfSA9IGF3YWl0IHN1cGFiYXNlLmF1dGguZ2V0VXNlcigpXHJcbiAgICBsZXQgcmVjZWl2ZWRJbnZpdGF0aW9uczogYW55W10gPSBbXVxyXG5cclxuICAgIGlmICh1c2VyPy5lbWFpbCkge1xyXG4gICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgICAgICAgLmZyb20oXCJuZXR3b3JrX2ludml0YXRpb25zXCIpXHJcbiAgICAgICAgICAgIC5zZWxlY3QoYFxyXG4gICAgICAgICAgICAgICAgKixcclxuICAgICAgICAgICAgICAgIHNlbmRlcjpzZW5kZXJfdGVuYW50X2lkKGlkLCBuYW1lKVxyXG4gICAgICAgICAgICBgKVxyXG4gICAgICAgICAgICAuZXEoXCJyZWNpcGllbnRfZW1haWxcIiwgdXNlci5lbWFpbClcclxuICAgICAgICAgICAgLmVxKFwic3RhdHVzXCIsIFwicGVuZGluZ1wiKVxyXG5cclxuICAgICAgICByZWNlaXZlZEludml0YXRpb25zID0gZGF0YSB8fCBbXVxyXG4gICAgfVxyXG5cclxuICAgIC8vIEZvcm1hdCBwYXJ0bmVycyBsaXN0XHJcbiAgICBjb25zdCBwYXJ0bmVycyA9IHBhcnRuZXJzaGlwcz8ubWFwKHAgPT4ge1xyXG4gICAgICAgIGNvbnN0IGlzUmVxdWVzdGVyID0gcC5yZXF1ZXN0ZXJfdGVuYW50X2lkID09PSB0ZW5hbnRJZFxyXG4gICAgICAgIGNvbnN0IHBhcnRuZXIgPSBpc1JlcXVlc3RlciA/IHAucmVzcG9uZGVyIDogcC5yZXF1ZXN0ZXJcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBwYXJ0bmVyc2hpcElkOiBwLmlkLFxyXG4gICAgICAgICAgICBwYXJ0bmVySWQ6IHBhcnRuZXI/LmlkIHx8ICd1bmtub3duJyxcclxuICAgICAgICAgICAgcGFydG5lck5hbWU6IHBhcnRuZXI/Lm5hbWUgfHwgJ0lubW9iaWxpYXJpYSBEZXNjb25vY2lkYScsXHJcbiAgICAgICAgICAgIGNvbm5lY3RlZEF0OiBwLmNyZWF0ZWRfYXRcclxuICAgICAgICB9XHJcbiAgICB9KSB8fCBbXVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcGFydG5lcnMsXHJcbiAgICAgICAgc2VudEludml0YXRpb25zOiBzZW50SW52aXRhdGlvbnMgfHwgW10sXHJcbiAgICAgICAgcmVjZWl2ZWRJbnZpdGF0aW9uc1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYWNjZXB0TmV0d29ya0ludml0YXRpb24oaW52aXRhdGlvbklkOiBzdHJpbmcpIHtcclxuICAgIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KClcclxuICAgIGNvbnN0IHRlbmFudElkID0gYXdhaXQgZ2V0VGVuYW50SWQoc3VwYWJhc2UpXHJcblxyXG4gICAgaWYgKCF0ZW5hbnRJZCkgdGhyb3cgbmV3IEVycm9yKFwiVW5hdXRob3JpemVkXCIpXHJcblxyXG4gICAgLy8gR2V0IGludml0YXRpb25cclxuICAgIGNvbnN0IHsgZGF0YTogaW52aXRhdGlvbiB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgICAuZnJvbShcIm5ldHdvcmtfaW52aXRhdGlvbnNcIilcclxuICAgICAgICAuc2VsZWN0KFwiKlwiKVxyXG4gICAgICAgIC5lcShcImlkXCIsIGludml0YXRpb25JZClcclxuICAgICAgICAuc2luZ2xlKClcclxuXHJcbiAgICBpZiAoIWludml0YXRpb24pIHRocm93IG5ldyBFcnJvcihcIkludml0YWNpw7NuIG5vIGVuY29udHJhZGFcIilcclxuICAgIGlmIChpbnZpdGF0aW9uLnN0YXR1cyAhPT0gJ3BlbmRpbmcnKSB0aHJvdyBuZXcgRXJyb3IoXCJJbnZpdGFjacOzbiBubyB2w6FsaWRhXCIpXHJcblxyXG4gICAgLy8gU3RhcnQgdHJhbnNhY3Rpb24gKHNpbXBsaWZpZWQgYXMgc2VwYXJhdGUgY2FsbHMgZm9yIFN1cGFiYXNlIGltcGxlbWVudGF0aW9uKVxyXG5cclxuICAgIC8vIDEuIENyZWF0ZSBwYXJ0bmVyc2hpcFxyXG4gICAgY29uc3QgeyBlcnJvcjogcGFydG5lcnNoaXBFcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgICAuZnJvbShcInRlbmFudF9wYXJ0bmVyc2hpcHNcIilcclxuICAgICAgICAuaW5zZXJ0KHtcclxuICAgICAgICAgICAgcmVxdWVzdGVyX3RlbmFudF9pZDogaW52aXRhdGlvbi5zZW5kZXJfdGVuYW50X2lkLFxyXG4gICAgICAgICAgICByZXNwb25kZXJfdGVuYW50X2lkOiB0ZW5hbnRJZCxcclxuICAgICAgICAgICAgc3RhdHVzOiAnYWN0aXZlJ1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgaWYgKHBhcnRuZXJzaGlwRXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgY3JlYXRpbmcgcGFydG5lcnNoaXA6XCIsIHBhcnRuZXJzaGlwRXJyb3IpXHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRXJyb3IgYWwgYWNlcHRhciBsYSBpbnZpdGFjacOzblwiKVxyXG4gICAgfVxyXG5cclxuICAgIC8vIDIuIFVwZGF0ZSBpbnZpdGF0aW9uIHN0YXR1c1xyXG4gICAgYXdhaXQgc3VwYWJhc2VcclxuICAgICAgICAuZnJvbShcIm5ldHdvcmtfaW52aXRhdGlvbnNcIilcclxuICAgICAgICAudXBkYXRlKHsgc3RhdHVzOiAnYWNjZXB0ZWQnIH0pXHJcbiAgICAgICAgLmVxKFwiaWRcIiwgaW52aXRhdGlvbklkKVxyXG5cclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FnZW50ZXNcIilcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldE5ldHdvcmtQcm9wZXJ0aWVzKCkge1xyXG4gICAgY29uc3Qgc3VwYWJhc2UgPSBhd2FpdCBjcmVhdGVDbGllbnQoKVxyXG4gICAgY29uc3QgdGVuYW50SWQgPSBhd2FpdCBnZXRUZW5hbnRJZChzdXBhYmFzZSlcclxuXHJcbiAgICBpZiAoIXRlbmFudElkKSByZXR1cm4gW11cclxuXHJcbiAgICAvLyBSTFMgXCJQYXJ0bmVycyBjYW4gdmlldyBzaGFyZWQgcHJvcGVydGllc1wiIGhhbmRsZXMgdGhlIGxvZ2ljLlxyXG4gICAgLy8gV2UganVzdCBzZWxlY3Qgc2hhcmVkIHByb3BlcnRpZXMgcmVnYXJkbGVzcyBvZiB0ZW5hbnQsIFJMUyBmaWx0ZXJzIHRvIG9ubHkgcGFydG5lcnNcclxuICAgIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgICAgLmZyb20oXCJwcm9wZXJ0aWVzXCIpXHJcbiAgICAgICAgLnNlbGVjdChgXHJcbiAgICAgICAgICAgICosXHJcbiAgICAgICAgICAgIHByb3BlcnR5X21lZGlhICgqKSxcclxuICAgICAgICAgICAgdGVuYW50OnRlbmFudF9pZCAobmFtZSlcclxuICAgICAgICBgKVxyXG4gICAgICAgIC5lcShcImlzX3NoYXJlZFwiLCB0cnVlKVxyXG4gICAgICAgIC5uZXEoXCJ0ZW5hbnRfaWRcIiwgdGVuYW50SWQpIC8vIEV4Y2x1ZGUgbXkgb3duIHByb3BlcnRpZXMgd2hpY2ggbWlnaHQgYmUgc2hhcmVkXHJcbiAgICAgICAgLm9yZGVyKFwiY3JlYXRlZF9hdFwiLCB7IGFzY2VuZGluZzogZmFsc2UgfSlcclxuXHJcbiAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgbmV0d29yayBwcm9wZXJ0aWVzOlwiLCBlcnJvcilcclxuICAgICAgICByZXR1cm4gW11cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZGF0YVxyXG59XHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoic1NBS3NCLCtMQUFBIn0=
}),
"[project]/apps/web/app/actions/data:f83e61 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getNetworkStatus",
    ()=>$$RSC_SERVER_ACTION_1
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"00bba0568e2c37144c309296fcb021acb956fcf72d":"getNetworkStatus"},"apps/web/app/actions/network.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("00bba0568e2c37144c309296fcb021acb956fcf72d", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "getNetworkStatus");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vbmV0d29yay50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzZXJ2ZXJcIlxyXG5cclxuaW1wb3J0IHsgY3JlYXRlQ2xpZW50LCBnZXRUZW5hbnRJZCB9IGZyb20gXCJAL2xpYi9zdXBhYmFzZS9zZXJ2ZXJcIlxyXG5pbXBvcnQgeyByZXZhbGlkYXRlUGF0aCB9IGZyb20gXCJuZXh0L2NhY2hlXCJcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBpbnZpdGVOZXR3b3JrQWdlbnQoZW1haWw6IHN0cmluZykge1xyXG4gICAgY29uc3Qgc3VwYWJhc2UgPSBhd2FpdCBjcmVhdGVDbGllbnQoKVxyXG4gICAgY29uc3QgdGVuYW50SWQgPSBhd2FpdCBnZXRUZW5hbnRJZChzdXBhYmFzZSlcclxuXHJcbiAgICBpZiAoIXRlbmFudElkKSB0aHJvdyBuZXcgRXJyb3IoXCJVbmF1dGhvcml6ZWRcIilcclxuXHJcbiAgICAvLyBDaGVjayBpZiBpbnZpdGF0aW9uIGFscmVhZHkgZXhpc3RzXHJcbiAgICBjb25zdCB7IGRhdGE6IGV4aXN0aW5nIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAgIC5mcm9tKFwibmV0d29ya19pbnZpdGF0aW9uc1wiKVxyXG4gICAgICAgIC5zZWxlY3QoXCJpZCwgc3RhdHVzXCIpXHJcbiAgICAgICAgLmVxKFwic2VuZGVyX3RlbmFudF9pZFwiLCB0ZW5hbnRJZClcclxuICAgICAgICAuZXEoXCJyZWNpcGllbnRfZW1haWxcIiwgZW1haWwpXHJcbiAgICAgICAgLnNpbmdsZSgpXHJcblxyXG4gICAgaWYgKGV4aXN0aW5nKSB7XHJcbiAgICAgICAgaWYgKGV4aXN0aW5nLnN0YXR1cyA9PT0gJ3BlbmRpbmcnKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIllhIGV4aXN0ZSB1bmEgaW52aXRhY2nDs24gcGVuZGllbnRlIHBhcmEgZXN0ZSBjb3JyZW9cIilcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGV4aXN0aW5nLnN0YXR1cyA9PT0gJ2FjY2VwdGVkJykge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJFc3RlIGFnZW50ZSB5YSBlcyBwYXJ0ZSBkZSB0dSByZWRcIilcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgeyBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgICAuZnJvbShcIm5ldHdvcmtfaW52aXRhdGlvbnNcIilcclxuICAgICAgICAuaW5zZXJ0KHtcclxuICAgICAgICAgICAgc2VuZGVyX3RlbmFudF9pZDogdGVuYW50SWQsXHJcbiAgICAgICAgICAgIHJlY2lwaWVudF9lbWFpbDogZW1haWwsXHJcbiAgICAgICAgICAgIHN0YXR1czogJ3BlbmRpbmcnXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgY3JlYXRpbmcgaW52aXRhdGlvbjpcIiwgZXJyb3IpXHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRXJyb3IgYWwgY3JlYXIgbGEgaW52aXRhY2nDs25cIilcclxuICAgIH1cclxuXHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9hZ2VudGVzXCIpXHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXROZXR3b3JrU3RhdHVzKCkge1xyXG4gICAgY29uc3Qgc3VwYWJhc2UgPSBhd2FpdCBjcmVhdGVDbGllbnQoKVxyXG4gICAgY29uc3QgdGVuYW50SWQgPSBhd2FpdCBnZXRUZW5hbnRJZChzdXBhYmFzZSlcclxuXHJcbiAgICBpZiAoIXRlbmFudElkKSByZXR1cm4geyBwYXJ0bmVyczogW10sIHNlbnRJbnZpdGF0aW9uczogW10sIHJlY2VpdmVkSW52aXRhdGlvbnM6IFtdIH1cclxuXHJcbiAgICAvLyBHZXQgYWN0aXZlIHBhcnRuZXJzaGlwc1xyXG4gICAgY29uc3QgeyBkYXRhOiBwYXJ0bmVyc2hpcHMgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgICAgLmZyb20oXCJ0ZW5hbnRfcGFydG5lcnNoaXBzXCIpXHJcbiAgICAgICAgLnNlbGVjdChgXHJcbiAgICAgICAgICAgICosXHJcbiAgICAgICAgICAgIHJlcXVlc3RlcjpyZXF1ZXN0ZXJfdGVuYW50X2lkKGlkLCBuYW1lKSxcclxuICAgICAgICAgICAgcmVzcG9uZGVyOnJlc3BvbmRlcl90ZW5hbnRfaWQoaWQsIG5hbWUpXHJcbiAgICAgICAgYClcclxuICAgICAgICAub3IoYHJlcXVlc3Rlcl90ZW5hbnRfaWQuZXEuJHt0ZW5hbnRJZH0scmVzcG9uZGVyX3RlbmFudF9pZC5lcS4ke3RlbmFudElkfWApXHJcbiAgICAgICAgLmVxKFwic3RhdHVzXCIsIFwiYWN0aXZlXCIpXHJcblxyXG4gICAgLy8gR2V0IHNlbnQgaW52aXRhdGlvbnNcclxuICAgIGNvbnN0IHsgZGF0YTogc2VudEludml0YXRpb25zIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAgIC5mcm9tKFwibmV0d29ya19pbnZpdGF0aW9uc1wiKVxyXG4gICAgICAgIC5zZWxlY3QoXCIqXCIpXHJcbiAgICAgICAgLmVxKFwic2VuZGVyX3RlbmFudF9pZFwiLCB0ZW5hbnRJZClcclxuICAgICAgICAub3JkZXIoXCJjcmVhdGVkX2F0XCIsIHsgYXNjZW5kaW5nOiBmYWxzZSB9KVxyXG5cclxuICAgIC8vIEdldCByZWNlaXZlZCBpbnZpdGF0aW9ucyAoYmFzZWQgb24gdXNlciBlbWFpbClcclxuICAgIGNvbnN0IHsgZGF0YTogeyB1c2VyIH0gfSA9IGF3YWl0IHN1cGFiYXNlLmF1dGguZ2V0VXNlcigpXHJcbiAgICBsZXQgcmVjZWl2ZWRJbnZpdGF0aW9uczogYW55W10gPSBbXVxyXG5cclxuICAgIGlmICh1c2VyPy5lbWFpbCkge1xyXG4gICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgICAgICAgLmZyb20oXCJuZXR3b3JrX2ludml0YXRpb25zXCIpXHJcbiAgICAgICAgICAgIC5zZWxlY3QoYFxyXG4gICAgICAgICAgICAgICAgKixcclxuICAgICAgICAgICAgICAgIHNlbmRlcjpzZW5kZXJfdGVuYW50X2lkKGlkLCBuYW1lKVxyXG4gICAgICAgICAgICBgKVxyXG4gICAgICAgICAgICAuZXEoXCJyZWNpcGllbnRfZW1haWxcIiwgdXNlci5lbWFpbClcclxuICAgICAgICAgICAgLmVxKFwic3RhdHVzXCIsIFwicGVuZGluZ1wiKVxyXG5cclxuICAgICAgICByZWNlaXZlZEludml0YXRpb25zID0gZGF0YSB8fCBbXVxyXG4gICAgfVxyXG5cclxuICAgIC8vIEZvcm1hdCBwYXJ0bmVycyBsaXN0XHJcbiAgICBjb25zdCBwYXJ0bmVycyA9IHBhcnRuZXJzaGlwcz8ubWFwKHAgPT4ge1xyXG4gICAgICAgIGNvbnN0IGlzUmVxdWVzdGVyID0gcC5yZXF1ZXN0ZXJfdGVuYW50X2lkID09PSB0ZW5hbnRJZFxyXG4gICAgICAgIGNvbnN0IHBhcnRuZXIgPSBpc1JlcXVlc3RlciA/IHAucmVzcG9uZGVyIDogcC5yZXF1ZXN0ZXJcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBwYXJ0bmVyc2hpcElkOiBwLmlkLFxyXG4gICAgICAgICAgICBwYXJ0bmVySWQ6IHBhcnRuZXI/LmlkIHx8ICd1bmtub3duJyxcclxuICAgICAgICAgICAgcGFydG5lck5hbWU6IHBhcnRuZXI/Lm5hbWUgfHwgJ0lubW9iaWxpYXJpYSBEZXNjb25vY2lkYScsXHJcbiAgICAgICAgICAgIGNvbm5lY3RlZEF0OiBwLmNyZWF0ZWRfYXRcclxuICAgICAgICB9XHJcbiAgICB9KSB8fCBbXVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcGFydG5lcnMsXHJcbiAgICAgICAgc2VudEludml0YXRpb25zOiBzZW50SW52aXRhdGlvbnMgfHwgW10sXHJcbiAgICAgICAgcmVjZWl2ZWRJbnZpdGF0aW9uc1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYWNjZXB0TmV0d29ya0ludml0YXRpb24oaW52aXRhdGlvbklkOiBzdHJpbmcpIHtcclxuICAgIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KClcclxuICAgIGNvbnN0IHRlbmFudElkID0gYXdhaXQgZ2V0VGVuYW50SWQoc3VwYWJhc2UpXHJcblxyXG4gICAgaWYgKCF0ZW5hbnRJZCkgdGhyb3cgbmV3IEVycm9yKFwiVW5hdXRob3JpemVkXCIpXHJcblxyXG4gICAgLy8gR2V0IGludml0YXRpb25cclxuICAgIGNvbnN0IHsgZGF0YTogaW52aXRhdGlvbiB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgICAuZnJvbShcIm5ldHdvcmtfaW52aXRhdGlvbnNcIilcclxuICAgICAgICAuc2VsZWN0KFwiKlwiKVxyXG4gICAgICAgIC5lcShcImlkXCIsIGludml0YXRpb25JZClcclxuICAgICAgICAuc2luZ2xlKClcclxuXHJcbiAgICBpZiAoIWludml0YXRpb24pIHRocm93IG5ldyBFcnJvcihcIkludml0YWNpw7NuIG5vIGVuY29udHJhZGFcIilcclxuICAgIGlmIChpbnZpdGF0aW9uLnN0YXR1cyAhPT0gJ3BlbmRpbmcnKSB0aHJvdyBuZXcgRXJyb3IoXCJJbnZpdGFjacOzbiBubyB2w6FsaWRhXCIpXHJcblxyXG4gICAgLy8gU3RhcnQgdHJhbnNhY3Rpb24gKHNpbXBsaWZpZWQgYXMgc2VwYXJhdGUgY2FsbHMgZm9yIFN1cGFiYXNlIGltcGxlbWVudGF0aW9uKVxyXG5cclxuICAgIC8vIDEuIENyZWF0ZSBwYXJ0bmVyc2hpcFxyXG4gICAgY29uc3QgeyBlcnJvcjogcGFydG5lcnNoaXBFcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgICAuZnJvbShcInRlbmFudF9wYXJ0bmVyc2hpcHNcIilcclxuICAgICAgICAuaW5zZXJ0KHtcclxuICAgICAgICAgICAgcmVxdWVzdGVyX3RlbmFudF9pZDogaW52aXRhdGlvbi5zZW5kZXJfdGVuYW50X2lkLFxyXG4gICAgICAgICAgICByZXNwb25kZXJfdGVuYW50X2lkOiB0ZW5hbnRJZCxcclxuICAgICAgICAgICAgc3RhdHVzOiAnYWN0aXZlJ1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgaWYgKHBhcnRuZXJzaGlwRXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgY3JlYXRpbmcgcGFydG5lcnNoaXA6XCIsIHBhcnRuZXJzaGlwRXJyb3IpXHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRXJyb3IgYWwgYWNlcHRhciBsYSBpbnZpdGFjacOzblwiKVxyXG4gICAgfVxyXG5cclxuICAgIC8vIDIuIFVwZGF0ZSBpbnZpdGF0aW9uIHN0YXR1c1xyXG4gICAgYXdhaXQgc3VwYWJhc2VcclxuICAgICAgICAuZnJvbShcIm5ldHdvcmtfaW52aXRhdGlvbnNcIilcclxuICAgICAgICAudXBkYXRlKHsgc3RhdHVzOiAnYWNjZXB0ZWQnIH0pXHJcbiAgICAgICAgLmVxKFwiaWRcIiwgaW52aXRhdGlvbklkKVxyXG5cclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FnZW50ZXNcIilcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldE5ldHdvcmtQcm9wZXJ0aWVzKCkge1xyXG4gICAgY29uc3Qgc3VwYWJhc2UgPSBhd2FpdCBjcmVhdGVDbGllbnQoKVxyXG4gICAgY29uc3QgdGVuYW50SWQgPSBhd2FpdCBnZXRUZW5hbnRJZChzdXBhYmFzZSlcclxuXHJcbiAgICBpZiAoIXRlbmFudElkKSByZXR1cm4gW11cclxuXHJcbiAgICAvLyBSTFMgXCJQYXJ0bmVycyBjYW4gdmlldyBzaGFyZWQgcHJvcGVydGllc1wiIGhhbmRsZXMgdGhlIGxvZ2ljLlxyXG4gICAgLy8gV2UganVzdCBzZWxlY3Qgc2hhcmVkIHByb3BlcnRpZXMgcmVnYXJkbGVzcyBvZiB0ZW5hbnQsIFJMUyBmaWx0ZXJzIHRvIG9ubHkgcGFydG5lcnNcclxuICAgIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgICAgLmZyb20oXCJwcm9wZXJ0aWVzXCIpXHJcbiAgICAgICAgLnNlbGVjdChgXHJcbiAgICAgICAgICAgICosXHJcbiAgICAgICAgICAgIHByb3BlcnR5X21lZGlhICgqKSxcclxuICAgICAgICAgICAgdGVuYW50OnRlbmFudF9pZCAobmFtZSlcclxuICAgICAgICBgKVxyXG4gICAgICAgIC5lcShcImlzX3NoYXJlZFwiLCB0cnVlKVxyXG4gICAgICAgIC5uZXEoXCJ0ZW5hbnRfaWRcIiwgdGVuYW50SWQpIC8vIEV4Y2x1ZGUgbXkgb3duIHByb3BlcnRpZXMgd2hpY2ggbWlnaHQgYmUgc2hhcmVkXHJcbiAgICAgICAgLm9yZGVyKFwiY3JlYXRlZF9hdFwiLCB7IGFzY2VuZGluZzogZmFsc2UgfSlcclxuXHJcbiAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgbmV0d29yayBwcm9wZXJ0aWVzOlwiLCBlcnJvcilcclxuICAgICAgICByZXR1cm4gW11cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZGF0YVxyXG59XHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoib1NBNENzQiw2TEFBQSJ9
}),
"[project]/apps/web/app/actions/data:4a6910 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "acceptNetworkInvitation",
    ()=>$$RSC_SERVER_ACTION_2
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"4088efcbdf6a7fe8a76bb8e3d730f1a8fde4564465":"acceptNetworkInvitation"},"apps/web/app/actions/network.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("4088efcbdf6a7fe8a76bb8e3d730f1a8fde4564465", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "acceptNetworkInvitation");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vbmV0d29yay50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzZXJ2ZXJcIlxyXG5cclxuaW1wb3J0IHsgY3JlYXRlQ2xpZW50LCBnZXRUZW5hbnRJZCB9IGZyb20gXCJAL2xpYi9zdXBhYmFzZS9zZXJ2ZXJcIlxyXG5pbXBvcnQgeyByZXZhbGlkYXRlUGF0aCB9IGZyb20gXCJuZXh0L2NhY2hlXCJcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBpbnZpdGVOZXR3b3JrQWdlbnQoZW1haWw6IHN0cmluZykge1xyXG4gICAgY29uc3Qgc3VwYWJhc2UgPSBhd2FpdCBjcmVhdGVDbGllbnQoKVxyXG4gICAgY29uc3QgdGVuYW50SWQgPSBhd2FpdCBnZXRUZW5hbnRJZChzdXBhYmFzZSlcclxuXHJcbiAgICBpZiAoIXRlbmFudElkKSB0aHJvdyBuZXcgRXJyb3IoXCJVbmF1dGhvcml6ZWRcIilcclxuXHJcbiAgICAvLyBDaGVjayBpZiBpbnZpdGF0aW9uIGFscmVhZHkgZXhpc3RzXHJcbiAgICBjb25zdCB7IGRhdGE6IGV4aXN0aW5nIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAgIC5mcm9tKFwibmV0d29ya19pbnZpdGF0aW9uc1wiKVxyXG4gICAgICAgIC5zZWxlY3QoXCJpZCwgc3RhdHVzXCIpXHJcbiAgICAgICAgLmVxKFwic2VuZGVyX3RlbmFudF9pZFwiLCB0ZW5hbnRJZClcclxuICAgICAgICAuZXEoXCJyZWNpcGllbnRfZW1haWxcIiwgZW1haWwpXHJcbiAgICAgICAgLnNpbmdsZSgpXHJcblxyXG4gICAgaWYgKGV4aXN0aW5nKSB7XHJcbiAgICAgICAgaWYgKGV4aXN0aW5nLnN0YXR1cyA9PT0gJ3BlbmRpbmcnKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIllhIGV4aXN0ZSB1bmEgaW52aXRhY2nDs24gcGVuZGllbnRlIHBhcmEgZXN0ZSBjb3JyZW9cIilcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGV4aXN0aW5nLnN0YXR1cyA9PT0gJ2FjY2VwdGVkJykge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJFc3RlIGFnZW50ZSB5YSBlcyBwYXJ0ZSBkZSB0dSByZWRcIilcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgeyBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgICAuZnJvbShcIm5ldHdvcmtfaW52aXRhdGlvbnNcIilcclxuICAgICAgICAuaW5zZXJ0KHtcclxuICAgICAgICAgICAgc2VuZGVyX3RlbmFudF9pZDogdGVuYW50SWQsXHJcbiAgICAgICAgICAgIHJlY2lwaWVudF9lbWFpbDogZW1haWwsXHJcbiAgICAgICAgICAgIHN0YXR1czogJ3BlbmRpbmcnXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgY3JlYXRpbmcgaW52aXRhdGlvbjpcIiwgZXJyb3IpXHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRXJyb3IgYWwgY3JlYXIgbGEgaW52aXRhY2nDs25cIilcclxuICAgIH1cclxuXHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9hZ2VudGVzXCIpXHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXROZXR3b3JrU3RhdHVzKCkge1xyXG4gICAgY29uc3Qgc3VwYWJhc2UgPSBhd2FpdCBjcmVhdGVDbGllbnQoKVxyXG4gICAgY29uc3QgdGVuYW50SWQgPSBhd2FpdCBnZXRUZW5hbnRJZChzdXBhYmFzZSlcclxuXHJcbiAgICBpZiAoIXRlbmFudElkKSByZXR1cm4geyBwYXJ0bmVyczogW10sIHNlbnRJbnZpdGF0aW9uczogW10sIHJlY2VpdmVkSW52aXRhdGlvbnM6IFtdIH1cclxuXHJcbiAgICAvLyBHZXQgYWN0aXZlIHBhcnRuZXJzaGlwc1xyXG4gICAgY29uc3QgeyBkYXRhOiBwYXJ0bmVyc2hpcHMgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgICAgLmZyb20oXCJ0ZW5hbnRfcGFydG5lcnNoaXBzXCIpXHJcbiAgICAgICAgLnNlbGVjdChgXHJcbiAgICAgICAgICAgICosXHJcbiAgICAgICAgICAgIHJlcXVlc3RlcjpyZXF1ZXN0ZXJfdGVuYW50X2lkKGlkLCBuYW1lKSxcclxuICAgICAgICAgICAgcmVzcG9uZGVyOnJlc3BvbmRlcl90ZW5hbnRfaWQoaWQsIG5hbWUpXHJcbiAgICAgICAgYClcclxuICAgICAgICAub3IoYHJlcXVlc3Rlcl90ZW5hbnRfaWQuZXEuJHt0ZW5hbnRJZH0scmVzcG9uZGVyX3RlbmFudF9pZC5lcS4ke3RlbmFudElkfWApXHJcbiAgICAgICAgLmVxKFwic3RhdHVzXCIsIFwiYWN0aXZlXCIpXHJcblxyXG4gICAgLy8gR2V0IHNlbnQgaW52aXRhdGlvbnNcclxuICAgIGNvbnN0IHsgZGF0YTogc2VudEludml0YXRpb25zIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAgIC5mcm9tKFwibmV0d29ya19pbnZpdGF0aW9uc1wiKVxyXG4gICAgICAgIC5zZWxlY3QoXCIqXCIpXHJcbiAgICAgICAgLmVxKFwic2VuZGVyX3RlbmFudF9pZFwiLCB0ZW5hbnRJZClcclxuICAgICAgICAub3JkZXIoXCJjcmVhdGVkX2F0XCIsIHsgYXNjZW5kaW5nOiBmYWxzZSB9KVxyXG5cclxuICAgIC8vIEdldCByZWNlaXZlZCBpbnZpdGF0aW9ucyAoYmFzZWQgb24gdXNlciBlbWFpbClcclxuICAgIGNvbnN0IHsgZGF0YTogeyB1c2VyIH0gfSA9IGF3YWl0IHN1cGFiYXNlLmF1dGguZ2V0VXNlcigpXHJcbiAgICBsZXQgcmVjZWl2ZWRJbnZpdGF0aW9uczogYW55W10gPSBbXVxyXG5cclxuICAgIGlmICh1c2VyPy5lbWFpbCkge1xyXG4gICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgICAgICAgLmZyb20oXCJuZXR3b3JrX2ludml0YXRpb25zXCIpXHJcbiAgICAgICAgICAgIC5zZWxlY3QoYFxyXG4gICAgICAgICAgICAgICAgKixcclxuICAgICAgICAgICAgICAgIHNlbmRlcjpzZW5kZXJfdGVuYW50X2lkKGlkLCBuYW1lKVxyXG4gICAgICAgICAgICBgKVxyXG4gICAgICAgICAgICAuZXEoXCJyZWNpcGllbnRfZW1haWxcIiwgdXNlci5lbWFpbClcclxuICAgICAgICAgICAgLmVxKFwic3RhdHVzXCIsIFwicGVuZGluZ1wiKVxyXG5cclxuICAgICAgICByZWNlaXZlZEludml0YXRpb25zID0gZGF0YSB8fCBbXVxyXG4gICAgfVxyXG5cclxuICAgIC8vIEZvcm1hdCBwYXJ0bmVycyBsaXN0XHJcbiAgICBjb25zdCBwYXJ0bmVycyA9IHBhcnRuZXJzaGlwcz8ubWFwKHAgPT4ge1xyXG4gICAgICAgIGNvbnN0IGlzUmVxdWVzdGVyID0gcC5yZXF1ZXN0ZXJfdGVuYW50X2lkID09PSB0ZW5hbnRJZFxyXG4gICAgICAgIGNvbnN0IHBhcnRuZXIgPSBpc1JlcXVlc3RlciA/IHAucmVzcG9uZGVyIDogcC5yZXF1ZXN0ZXJcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBwYXJ0bmVyc2hpcElkOiBwLmlkLFxyXG4gICAgICAgICAgICBwYXJ0bmVySWQ6IHBhcnRuZXI/LmlkIHx8ICd1bmtub3duJyxcclxuICAgICAgICAgICAgcGFydG5lck5hbWU6IHBhcnRuZXI/Lm5hbWUgfHwgJ0lubW9iaWxpYXJpYSBEZXNjb25vY2lkYScsXHJcbiAgICAgICAgICAgIGNvbm5lY3RlZEF0OiBwLmNyZWF0ZWRfYXRcclxuICAgICAgICB9XHJcbiAgICB9KSB8fCBbXVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcGFydG5lcnMsXHJcbiAgICAgICAgc2VudEludml0YXRpb25zOiBzZW50SW52aXRhdGlvbnMgfHwgW10sXHJcbiAgICAgICAgcmVjZWl2ZWRJbnZpdGF0aW9uc1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYWNjZXB0TmV0d29ya0ludml0YXRpb24oaW52aXRhdGlvbklkOiBzdHJpbmcpIHtcclxuICAgIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KClcclxuICAgIGNvbnN0IHRlbmFudElkID0gYXdhaXQgZ2V0VGVuYW50SWQoc3VwYWJhc2UpXHJcblxyXG4gICAgaWYgKCF0ZW5hbnRJZCkgdGhyb3cgbmV3IEVycm9yKFwiVW5hdXRob3JpemVkXCIpXHJcblxyXG4gICAgLy8gR2V0IGludml0YXRpb25cclxuICAgIGNvbnN0IHsgZGF0YTogaW52aXRhdGlvbiB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgICAuZnJvbShcIm5ldHdvcmtfaW52aXRhdGlvbnNcIilcclxuICAgICAgICAuc2VsZWN0KFwiKlwiKVxyXG4gICAgICAgIC5lcShcImlkXCIsIGludml0YXRpb25JZClcclxuICAgICAgICAuc2luZ2xlKClcclxuXHJcbiAgICBpZiAoIWludml0YXRpb24pIHRocm93IG5ldyBFcnJvcihcIkludml0YWNpw7NuIG5vIGVuY29udHJhZGFcIilcclxuICAgIGlmIChpbnZpdGF0aW9uLnN0YXR1cyAhPT0gJ3BlbmRpbmcnKSB0aHJvdyBuZXcgRXJyb3IoXCJJbnZpdGFjacOzbiBubyB2w6FsaWRhXCIpXHJcblxyXG4gICAgLy8gU3RhcnQgdHJhbnNhY3Rpb24gKHNpbXBsaWZpZWQgYXMgc2VwYXJhdGUgY2FsbHMgZm9yIFN1cGFiYXNlIGltcGxlbWVudGF0aW9uKVxyXG5cclxuICAgIC8vIDEuIENyZWF0ZSBwYXJ0bmVyc2hpcFxyXG4gICAgY29uc3QgeyBlcnJvcjogcGFydG5lcnNoaXBFcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgICAuZnJvbShcInRlbmFudF9wYXJ0bmVyc2hpcHNcIilcclxuICAgICAgICAuaW5zZXJ0KHtcclxuICAgICAgICAgICAgcmVxdWVzdGVyX3RlbmFudF9pZDogaW52aXRhdGlvbi5zZW5kZXJfdGVuYW50X2lkLFxyXG4gICAgICAgICAgICByZXNwb25kZXJfdGVuYW50X2lkOiB0ZW5hbnRJZCxcclxuICAgICAgICAgICAgc3RhdHVzOiAnYWN0aXZlJ1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgaWYgKHBhcnRuZXJzaGlwRXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgY3JlYXRpbmcgcGFydG5lcnNoaXA6XCIsIHBhcnRuZXJzaGlwRXJyb3IpXHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRXJyb3IgYWwgYWNlcHRhciBsYSBpbnZpdGFjacOzblwiKVxyXG4gICAgfVxyXG5cclxuICAgIC8vIDIuIFVwZGF0ZSBpbnZpdGF0aW9uIHN0YXR1c1xyXG4gICAgYXdhaXQgc3VwYWJhc2VcclxuICAgICAgICAuZnJvbShcIm5ldHdvcmtfaW52aXRhdGlvbnNcIilcclxuICAgICAgICAudXBkYXRlKHsgc3RhdHVzOiAnYWNjZXB0ZWQnIH0pXHJcbiAgICAgICAgLmVxKFwiaWRcIiwgaW52aXRhdGlvbklkKVxyXG5cclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FnZW50ZXNcIilcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldE5ldHdvcmtQcm9wZXJ0aWVzKCkge1xyXG4gICAgY29uc3Qgc3VwYWJhc2UgPSBhd2FpdCBjcmVhdGVDbGllbnQoKVxyXG4gICAgY29uc3QgdGVuYW50SWQgPSBhd2FpdCBnZXRUZW5hbnRJZChzdXBhYmFzZSlcclxuXHJcbiAgICBpZiAoIXRlbmFudElkKSByZXR1cm4gW11cclxuXHJcbiAgICAvLyBSTFMgXCJQYXJ0bmVycyBjYW4gdmlldyBzaGFyZWQgcHJvcGVydGllc1wiIGhhbmRsZXMgdGhlIGxvZ2ljLlxyXG4gICAgLy8gV2UganVzdCBzZWxlY3Qgc2hhcmVkIHByb3BlcnRpZXMgcmVnYXJkbGVzcyBvZiB0ZW5hbnQsIFJMUyBmaWx0ZXJzIHRvIG9ubHkgcGFydG5lcnNcclxuICAgIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgICAgLmZyb20oXCJwcm9wZXJ0aWVzXCIpXHJcbiAgICAgICAgLnNlbGVjdChgXHJcbiAgICAgICAgICAgICosXHJcbiAgICAgICAgICAgIHByb3BlcnR5X21lZGlhICgqKSxcclxuICAgICAgICAgICAgdGVuYW50OnRlbmFudF9pZCAobmFtZSlcclxuICAgICAgICBgKVxyXG4gICAgICAgIC5lcShcImlzX3NoYXJlZFwiLCB0cnVlKVxyXG4gICAgICAgIC5uZXEoXCJ0ZW5hbnRfaWRcIiwgdGVuYW50SWQpIC8vIEV4Y2x1ZGUgbXkgb3duIHByb3BlcnRpZXMgd2hpY2ggbWlnaHQgYmUgc2hhcmVkXHJcbiAgICAgICAgLm9yZGVyKFwiY3JlYXRlZF9hdFwiLCB7IGFzY2VuZGluZzogZmFsc2UgfSlcclxuXHJcbiAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgbmV0d29yayBwcm9wZXJ0aWVzOlwiLCBlcnJvcilcclxuICAgICAgICByZXR1cm4gW11cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZGF0YVxyXG59XHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiMlNBd0dzQixvTUFBQSJ9
}),
"[project]/apps/web/app/actions/data:677edd [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getNetworkProperties",
    ()=>$$RSC_SERVER_ACTION_3
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"001a6e5d97930ec187df9e4cd46aa6dbecc2cd53ba":"getNetworkProperties"},"apps/web/app/actions/network.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("001a6e5d97930ec187df9e4cd46aa6dbecc2cd53ba", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "getNetworkProperties");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vbmV0d29yay50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzZXJ2ZXJcIlxyXG5cclxuaW1wb3J0IHsgY3JlYXRlQ2xpZW50LCBnZXRUZW5hbnRJZCB9IGZyb20gXCJAL2xpYi9zdXBhYmFzZS9zZXJ2ZXJcIlxyXG5pbXBvcnQgeyByZXZhbGlkYXRlUGF0aCB9IGZyb20gXCJuZXh0L2NhY2hlXCJcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBpbnZpdGVOZXR3b3JrQWdlbnQoZW1haWw6IHN0cmluZykge1xyXG4gICAgY29uc3Qgc3VwYWJhc2UgPSBhd2FpdCBjcmVhdGVDbGllbnQoKVxyXG4gICAgY29uc3QgdGVuYW50SWQgPSBhd2FpdCBnZXRUZW5hbnRJZChzdXBhYmFzZSlcclxuXHJcbiAgICBpZiAoIXRlbmFudElkKSB0aHJvdyBuZXcgRXJyb3IoXCJVbmF1dGhvcml6ZWRcIilcclxuXHJcbiAgICAvLyBDaGVjayBpZiBpbnZpdGF0aW9uIGFscmVhZHkgZXhpc3RzXHJcbiAgICBjb25zdCB7IGRhdGE6IGV4aXN0aW5nIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAgIC5mcm9tKFwibmV0d29ya19pbnZpdGF0aW9uc1wiKVxyXG4gICAgICAgIC5zZWxlY3QoXCJpZCwgc3RhdHVzXCIpXHJcbiAgICAgICAgLmVxKFwic2VuZGVyX3RlbmFudF9pZFwiLCB0ZW5hbnRJZClcclxuICAgICAgICAuZXEoXCJyZWNpcGllbnRfZW1haWxcIiwgZW1haWwpXHJcbiAgICAgICAgLnNpbmdsZSgpXHJcblxyXG4gICAgaWYgKGV4aXN0aW5nKSB7XHJcbiAgICAgICAgaWYgKGV4aXN0aW5nLnN0YXR1cyA9PT0gJ3BlbmRpbmcnKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIllhIGV4aXN0ZSB1bmEgaW52aXRhY2nDs24gcGVuZGllbnRlIHBhcmEgZXN0ZSBjb3JyZW9cIilcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGV4aXN0aW5nLnN0YXR1cyA9PT0gJ2FjY2VwdGVkJykge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJFc3RlIGFnZW50ZSB5YSBlcyBwYXJ0ZSBkZSB0dSByZWRcIilcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgeyBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgICAuZnJvbShcIm5ldHdvcmtfaW52aXRhdGlvbnNcIilcclxuICAgICAgICAuaW5zZXJ0KHtcclxuICAgICAgICAgICAgc2VuZGVyX3RlbmFudF9pZDogdGVuYW50SWQsXHJcbiAgICAgICAgICAgIHJlY2lwaWVudF9lbWFpbDogZW1haWwsXHJcbiAgICAgICAgICAgIHN0YXR1czogJ3BlbmRpbmcnXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgY3JlYXRpbmcgaW52aXRhdGlvbjpcIiwgZXJyb3IpXHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRXJyb3IgYWwgY3JlYXIgbGEgaW52aXRhY2nDs25cIilcclxuICAgIH1cclxuXHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9hZ2VudGVzXCIpXHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXROZXR3b3JrU3RhdHVzKCkge1xyXG4gICAgY29uc3Qgc3VwYWJhc2UgPSBhd2FpdCBjcmVhdGVDbGllbnQoKVxyXG4gICAgY29uc3QgdGVuYW50SWQgPSBhd2FpdCBnZXRUZW5hbnRJZChzdXBhYmFzZSlcclxuXHJcbiAgICBpZiAoIXRlbmFudElkKSByZXR1cm4geyBwYXJ0bmVyczogW10sIHNlbnRJbnZpdGF0aW9uczogW10sIHJlY2VpdmVkSW52aXRhdGlvbnM6IFtdIH1cclxuXHJcbiAgICAvLyBHZXQgYWN0aXZlIHBhcnRuZXJzaGlwc1xyXG4gICAgY29uc3QgeyBkYXRhOiBwYXJ0bmVyc2hpcHMgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgICAgLmZyb20oXCJ0ZW5hbnRfcGFydG5lcnNoaXBzXCIpXHJcbiAgICAgICAgLnNlbGVjdChgXHJcbiAgICAgICAgICAgICosXHJcbiAgICAgICAgICAgIHJlcXVlc3RlcjpyZXF1ZXN0ZXJfdGVuYW50X2lkKGlkLCBuYW1lKSxcclxuICAgICAgICAgICAgcmVzcG9uZGVyOnJlc3BvbmRlcl90ZW5hbnRfaWQoaWQsIG5hbWUpXHJcbiAgICAgICAgYClcclxuICAgICAgICAub3IoYHJlcXVlc3Rlcl90ZW5hbnRfaWQuZXEuJHt0ZW5hbnRJZH0scmVzcG9uZGVyX3RlbmFudF9pZC5lcS4ke3RlbmFudElkfWApXHJcbiAgICAgICAgLmVxKFwic3RhdHVzXCIsIFwiYWN0aXZlXCIpXHJcblxyXG4gICAgLy8gR2V0IHNlbnQgaW52aXRhdGlvbnNcclxuICAgIGNvbnN0IHsgZGF0YTogc2VudEludml0YXRpb25zIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAgIC5mcm9tKFwibmV0d29ya19pbnZpdGF0aW9uc1wiKVxyXG4gICAgICAgIC5zZWxlY3QoXCIqXCIpXHJcbiAgICAgICAgLmVxKFwic2VuZGVyX3RlbmFudF9pZFwiLCB0ZW5hbnRJZClcclxuICAgICAgICAub3JkZXIoXCJjcmVhdGVkX2F0XCIsIHsgYXNjZW5kaW5nOiBmYWxzZSB9KVxyXG5cclxuICAgIC8vIEdldCByZWNlaXZlZCBpbnZpdGF0aW9ucyAoYmFzZWQgb24gdXNlciBlbWFpbClcclxuICAgIGNvbnN0IHsgZGF0YTogeyB1c2VyIH0gfSA9IGF3YWl0IHN1cGFiYXNlLmF1dGguZ2V0VXNlcigpXHJcbiAgICBsZXQgcmVjZWl2ZWRJbnZpdGF0aW9uczogYW55W10gPSBbXVxyXG5cclxuICAgIGlmICh1c2VyPy5lbWFpbCkge1xyXG4gICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgICAgICAgLmZyb20oXCJuZXR3b3JrX2ludml0YXRpb25zXCIpXHJcbiAgICAgICAgICAgIC5zZWxlY3QoYFxyXG4gICAgICAgICAgICAgICAgKixcclxuICAgICAgICAgICAgICAgIHNlbmRlcjpzZW5kZXJfdGVuYW50X2lkKGlkLCBuYW1lKVxyXG4gICAgICAgICAgICBgKVxyXG4gICAgICAgICAgICAuZXEoXCJyZWNpcGllbnRfZW1haWxcIiwgdXNlci5lbWFpbClcclxuICAgICAgICAgICAgLmVxKFwic3RhdHVzXCIsIFwicGVuZGluZ1wiKVxyXG5cclxuICAgICAgICByZWNlaXZlZEludml0YXRpb25zID0gZGF0YSB8fCBbXVxyXG4gICAgfVxyXG5cclxuICAgIC8vIEZvcm1hdCBwYXJ0bmVycyBsaXN0XHJcbiAgICBjb25zdCBwYXJ0bmVycyA9IHBhcnRuZXJzaGlwcz8ubWFwKHAgPT4ge1xyXG4gICAgICAgIGNvbnN0IGlzUmVxdWVzdGVyID0gcC5yZXF1ZXN0ZXJfdGVuYW50X2lkID09PSB0ZW5hbnRJZFxyXG4gICAgICAgIGNvbnN0IHBhcnRuZXIgPSBpc1JlcXVlc3RlciA/IHAucmVzcG9uZGVyIDogcC5yZXF1ZXN0ZXJcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBwYXJ0bmVyc2hpcElkOiBwLmlkLFxyXG4gICAgICAgICAgICBwYXJ0bmVySWQ6IHBhcnRuZXI/LmlkIHx8ICd1bmtub3duJyxcclxuICAgICAgICAgICAgcGFydG5lck5hbWU6IHBhcnRuZXI/Lm5hbWUgfHwgJ0lubW9iaWxpYXJpYSBEZXNjb25vY2lkYScsXHJcbiAgICAgICAgICAgIGNvbm5lY3RlZEF0OiBwLmNyZWF0ZWRfYXRcclxuICAgICAgICB9XHJcbiAgICB9KSB8fCBbXVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcGFydG5lcnMsXHJcbiAgICAgICAgc2VudEludml0YXRpb25zOiBzZW50SW52aXRhdGlvbnMgfHwgW10sXHJcbiAgICAgICAgcmVjZWl2ZWRJbnZpdGF0aW9uc1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYWNjZXB0TmV0d29ya0ludml0YXRpb24oaW52aXRhdGlvbklkOiBzdHJpbmcpIHtcclxuICAgIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KClcclxuICAgIGNvbnN0IHRlbmFudElkID0gYXdhaXQgZ2V0VGVuYW50SWQoc3VwYWJhc2UpXHJcblxyXG4gICAgaWYgKCF0ZW5hbnRJZCkgdGhyb3cgbmV3IEVycm9yKFwiVW5hdXRob3JpemVkXCIpXHJcblxyXG4gICAgLy8gR2V0IGludml0YXRpb25cclxuICAgIGNvbnN0IHsgZGF0YTogaW52aXRhdGlvbiB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgICAuZnJvbShcIm5ldHdvcmtfaW52aXRhdGlvbnNcIilcclxuICAgICAgICAuc2VsZWN0KFwiKlwiKVxyXG4gICAgICAgIC5lcShcImlkXCIsIGludml0YXRpb25JZClcclxuICAgICAgICAuc2luZ2xlKClcclxuXHJcbiAgICBpZiAoIWludml0YXRpb24pIHRocm93IG5ldyBFcnJvcihcIkludml0YWNpw7NuIG5vIGVuY29udHJhZGFcIilcclxuICAgIGlmIChpbnZpdGF0aW9uLnN0YXR1cyAhPT0gJ3BlbmRpbmcnKSB0aHJvdyBuZXcgRXJyb3IoXCJJbnZpdGFjacOzbiBubyB2w6FsaWRhXCIpXHJcblxyXG4gICAgLy8gU3RhcnQgdHJhbnNhY3Rpb24gKHNpbXBsaWZpZWQgYXMgc2VwYXJhdGUgY2FsbHMgZm9yIFN1cGFiYXNlIGltcGxlbWVudGF0aW9uKVxyXG5cclxuICAgIC8vIDEuIENyZWF0ZSBwYXJ0bmVyc2hpcFxyXG4gICAgY29uc3QgeyBlcnJvcjogcGFydG5lcnNoaXBFcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgICAuZnJvbShcInRlbmFudF9wYXJ0bmVyc2hpcHNcIilcclxuICAgICAgICAuaW5zZXJ0KHtcclxuICAgICAgICAgICAgcmVxdWVzdGVyX3RlbmFudF9pZDogaW52aXRhdGlvbi5zZW5kZXJfdGVuYW50X2lkLFxyXG4gICAgICAgICAgICByZXNwb25kZXJfdGVuYW50X2lkOiB0ZW5hbnRJZCxcclxuICAgICAgICAgICAgc3RhdHVzOiAnYWN0aXZlJ1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgaWYgKHBhcnRuZXJzaGlwRXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgY3JlYXRpbmcgcGFydG5lcnNoaXA6XCIsIHBhcnRuZXJzaGlwRXJyb3IpXHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRXJyb3IgYWwgYWNlcHRhciBsYSBpbnZpdGFjacOzblwiKVxyXG4gICAgfVxyXG5cclxuICAgIC8vIDIuIFVwZGF0ZSBpbnZpdGF0aW9uIHN0YXR1c1xyXG4gICAgYXdhaXQgc3VwYWJhc2VcclxuICAgICAgICAuZnJvbShcIm5ldHdvcmtfaW52aXRhdGlvbnNcIilcclxuICAgICAgICAudXBkYXRlKHsgc3RhdHVzOiAnYWNjZXB0ZWQnIH0pXHJcbiAgICAgICAgLmVxKFwiaWRcIiwgaW52aXRhdGlvbklkKVxyXG5cclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FnZW50ZXNcIilcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldE5ldHdvcmtQcm9wZXJ0aWVzKCkge1xyXG4gICAgY29uc3Qgc3VwYWJhc2UgPSBhd2FpdCBjcmVhdGVDbGllbnQoKVxyXG4gICAgY29uc3QgdGVuYW50SWQgPSBhd2FpdCBnZXRUZW5hbnRJZChzdXBhYmFzZSlcclxuXHJcbiAgICBpZiAoIXRlbmFudElkKSByZXR1cm4gW11cclxuXHJcbiAgICAvLyBSTFMgXCJQYXJ0bmVycyBjYW4gdmlldyBzaGFyZWQgcHJvcGVydGllc1wiIGhhbmRsZXMgdGhlIGxvZ2ljLlxyXG4gICAgLy8gV2UganVzdCBzZWxlY3Qgc2hhcmVkIHByb3BlcnRpZXMgcmVnYXJkbGVzcyBvZiB0ZW5hbnQsIFJMUyBmaWx0ZXJzIHRvIG9ubHkgcGFydG5lcnNcclxuICAgIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgICAgLmZyb20oXCJwcm9wZXJ0aWVzXCIpXHJcbiAgICAgICAgLnNlbGVjdChgXHJcbiAgICAgICAgICAgICosXHJcbiAgICAgICAgICAgIHByb3BlcnR5X21lZGlhICgqKSxcclxuICAgICAgICAgICAgdGVuYW50OnRlbmFudF9pZCAobmFtZSlcclxuICAgICAgICBgKVxyXG4gICAgICAgIC5lcShcImlzX3NoYXJlZFwiLCB0cnVlKVxyXG4gICAgICAgIC5uZXEoXCJ0ZW5hbnRfaWRcIiwgdGVuYW50SWQpIC8vIEV4Y2x1ZGUgbXkgb3duIHByb3BlcnRpZXMgd2hpY2ggbWlnaHQgYmUgc2hhcmVkXHJcbiAgICAgICAgLm9yZGVyKFwiY3JlYXRlZF9hdFwiLCB7IGFzY2VuZGluZzogZmFsc2UgfSlcclxuXHJcbiAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgbmV0d29yayBwcm9wZXJ0aWVzOlwiLCBlcnJvcilcclxuICAgICAgICByZXR1cm4gW11cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZGF0YVxyXG59XHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoid1NBaUpzQixpTUFBQSJ9
}),
"[project]/apps/web/app/(dashboard)/agentes/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AgentsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mail.js [app-client] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield.js [app-client] (ecmascript) <export default as Shield>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ellipsis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MoreHorizontal$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/ellipsis.js [app-client] (ecmascript) <export default as MoreHorizontal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserPlus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user-plus.js [app-client] (ecmascript) <export default as UserPlus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$cog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserCog$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user-cog.js [app-client] (ecmascript) <export default as UserCog>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$network$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Network$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/network.js [app-client] (ecmascript) <export default as Network>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/building-2.js [app-client] (ecmascript) <export default as Building2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-x.js [app-client] (ecmascript) <export default as XCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/house.js [app-client] (ecmascript) <export default as Home>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/components/ui/badge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/components/ui/avatar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/components/ui/table.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/components/ui/dropdown-menu.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/components/ui/dialog.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/components/ui/select.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/components/ui/tabs.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/components/ui/label.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$data$3a$a40f50__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/apps/web/app/actions/data:a40f50 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$data$3a$13dd5a__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/apps/web/app/actions/data:13dd5a [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$data$3a$f6ea81__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/apps/web/app/actions/data:f6ea81 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$data$3a$97ae31__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/apps/web/app/actions/data:97ae31 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$data$3a$6dc741__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/apps/web/app/actions/data:6dc741 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$data$3a$6cf3ec__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/apps/web/app/actions/data:6cf3ec [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$data$3a$f83e61__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/apps/web/app/actions/data:f83e61 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$data$3a$4a6910__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/apps/web/app/actions/data:4a6910 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$data$3a$677edd__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/apps/web/app/actions/data:677edd [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/date-fns/format.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$locale$2f$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/locale/es.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
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
;
;
;
;
;
function AgentsPage() {
    _s();
    // Team Data
    const [agents, setAgents] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [roles, setRoles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [branches, setBranches] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    // Network Data
    const [partners, setPartners] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [sentInvitations, setSentInvitations] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [receivedInvitations, setReceivedInvitations] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [networkProperties, setNetworkProperties] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("team");
    // Dialog states
    const [inviteOpen, setInviteOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [networkInviteOpen, setNetworkInviteOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [roleOpen, setRoleOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedAgent, setSelectedAgent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [newRoleId, setNewRoleId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    // Invite form states (Team)
    const [inviteName, setInviteName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [inviteEmail, setInviteEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [inviteRoleId, setInviteRoleId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [inviteBranchId, setInviteBranchId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [isInviting, setIsInviting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Invite form states (Network)
    const [networkEmail, setNetworkEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [isNetworkInviting, setIsNetworkInviting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const fetchData = async ()=>{
        setLoading(true);
        try {
            const [agentsData, rolesData, branchesData, networkData, propertiesData] = await Promise.all([
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$data$3a$a40f50__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getAgents"])(),
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$data$3a$13dd5a__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getRoles"])(),
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$data$3a$f6ea81__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getBranches"])(),
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$data$3a$f83e61__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getNetworkStatus"])(),
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$data$3a$677edd__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getNetworkProperties"])()
            ]);
            setAgents(agentsData);
            setRoles(rolesData);
            setBranches(branchesData);
            setPartners(networkData.partners);
            setSentInvitations(networkData.sentInvitations);
            setReceivedInvitations(networkData.receivedInvitations);
            setNetworkProperties(propertiesData);
        } catch (error) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Error al cargar datos");
        } finally{
            setLoading(false);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AgentsPage.useEffect": ()=>{
            fetchData();
        }
    }["AgentsPage.useEffect"], []);
    // --- Team Handlers ---
    const handleRoleChange = async ()=>{
        if (!selectedAgent || !newRoleId) return;
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$data$3a$97ae31__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["updateAgentRole"])(selectedAgent.id, newRoleId);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Rol actualizado correctamente");
            setRoleOpen(false);
            fetchData();
        } catch (error) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Error al actualizar rol");
        }
    };
    const handleInviteSubmit = async ()=>{
        if (!inviteEmail) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Por favor completa el correo electrónico");
            return;
        }
        setIsInviting(true);
        try {
            const { inviteToAgency } = await __turbopack_context__.A("[project]/apps/web/app/actions/subscriptions.ts [app-client] (ecmascript, async loader)");
            const result = await inviteToAgency(inviteEmail);
            if (result.success) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Invitación generada", {
                    description: "Se ha creado el link de invitación correctamente."
                });
                // Show link in a way they can copy it (maybe another state or just toast)
                if (result.inviteLink) {
                    const copyToClipboard = ()=>{
                        navigator.clipboard.writeText(result.inviteLink);
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Link copiado al portapapeles");
                    };
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].info("Link de invitación", {
                        action: {
                            label: "Copiar Link",
                            onClick: copyToClipboard
                        },
                        duration: 10000
                    });
                }
                setInviteOpen(false);
                setInviteEmail("");
                fetchData();
            }
        } catch (error) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Error", {
                description: error.message
            });
        } finally{
            setIsInviting(false);
        }
    };
    const handleDelete = async (agent)=>{
        if (confirm(`¿Estás seguro de que deseas eliminar a ${agent.name}?`)) {
            try {
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$data$3a$6dc741__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["deleteAgent"])(agent.id);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Agente eliminado");
                fetchData();
            } catch (error) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Error al eliminar agente");
            }
        }
    };
    // --- Network Handlers ---
    const handleNetworkInvite = async ()=>{
        if (!networkEmail) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Por favor ingresa un correo electrónico");
            return;
        }
        setIsNetworkInviting(true);
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$data$3a$6cf3ec__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["inviteNetworkAgent"])(networkEmail);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Invitación enviada a la red");
            setNetworkInviteOpen(false);
            setNetworkEmail("");
            fetchData();
        } catch (error) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(error.message || "Error al enviar invitación");
        } finally{
            setIsNetworkInviting(false);
        }
    };
    const handleAcceptInvitation = async (invitationId)=>{
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$actions$2f$data$3a$4a6910__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["acceptNetworkInvitation"])(invitationId);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("¡Conexión establecida! Ahora son partners.");
            fetchData();
        } catch (error) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(error.message || "Error al aceptar invitación");
        }
    };
    // --- Filters ---
    const filteredAgents = agents.filter((agent)=>agent.name?.toLowerCase().includes(searchQuery.toLowerCase()) || agent.email?.toLowerCase().includes(searchQuery.toLowerCase()) || agent.branches?.some((b)=>b.name.toLowerCase().includes(searchQuery.toLowerCase())));
    const filteredPartners = partners.filter((p)=>p.partnerName?.toLowerCase().includes(searchQuery.toLowerCase()));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6 animate-in fade-in duration-500 pb-10",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col md:flex-row md:items-center justify-between gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-3xl font-black text-gray-800 tracking-tight",
                                children: "Gestión de Agentes"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/app/(dashboard)/agentes/page.tsx",
                                lineNumber: 253,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-500 text-sm font-medium",
                                children: "Administra tu equipo y red de contactos"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/app/(dashboard)/agentes/page.tsx",
                                lineNumber: 254,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/app/(dashboard)/agentes/page.tsx",
                        lineNumber: 252,
                        columnNumber: 17
                    }, this),
                    activeTab === "team" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        onClick: ()=>setInviteOpen(true),
                        className: "bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-lg shadow-blue-500/20 py-6 px-6 h-fit",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                className: "h-5 w-5 mr-2"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/app/(dashboard)/agentes/page.tsx",
                                lineNumber: 259,
                                columnNumber: 25
                            }, this),
                            " Invitar Agente"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/app/(dashboard)/agentes/page.tsx",
                        lineNumber: 258,
                        columnNumber: 21
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        onClick: ()=>setNetworkInviteOpen(true),
                        className: "bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl shadow-lg shadow-indigo-500/20 py-6 px-6 h-fit",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$network$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Network$3e$__["Network"], {
                                className: "h-5 w-5 mr-2"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/app/(dashboard)/agentes/page.tsx",
                                lineNumber: 263,
                                columnNumber: 25
                            }, this),
                            " Conectar Partner"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/app/(dashboard)/agentes/page.tsx",
                        lineNumber: 262,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/app/(dashboard)/agentes/page.tsx",
                lineNumber: 251,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tabs"], {
                defaultValue: "team",
                value: activeTab,
                onValueChange: setActiveTab,
                className: "w-full",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsList"], {
                        className: "bg-gray-100/50 p-1 rounded-2xl mb-6 h-auto",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsTrigger"], {
                                value: "team",
                                className: "rounded-xl px-6 py-3 font-bold text-gray-500 data-[state=active]:bg-white data-[state=active]:text-blue-600 data-[state=active]:shadow-sm transition-all focus-visible:ring-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                        className: "h-4 w-4 mr-2"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/app/(dashboard)/agentes/page.tsx",
                                        lineNumber: 271,
                                        columnNumber: 25
                                    }, this),
                                    " Mi Equipo"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/app/(dashboard)/agentes/page.tsx",
                                lineNumber: 270,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsTrigger"], {
                                value: "network",
                                className: "rounded-xl px-6 py-3 font-bold text-gray-500 data-[state=active]:bg-white data-[state=active]:text-indigo-600 data-[state=active]:shadow-sm transition-all focus-visible:ring-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$network$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Network$3e$__["Network"], {
                                        className: "h-4 w-4 mr-2"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/app/(dashboard)/agentes/page.tsx",
                                        lineNumber: 274,
                                        columnNumber: 25
                                    }, this),
                                    " Red de Colegas",
                                    receivedInvitations.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                        className: "ml-2 bg-red-500 text-white border-0",
                                        children: receivedInvitations.length
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/app/(dashboard)/agentes/page.tsx",
                                        lineNumber: 276,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/app/(dashboard)/agentes/page.tsx",
                                lineNumber: 273,
                                columnNumber: 21
                            }, this),
                            activeTab === 'network' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                variant: "outline",
                                className: "ml-auto mr-4 border-indigo-200 text-indigo-700 bg-indigo-50 hidden md:flex",
                                children: [
                                    networkProperties.length,
                                    " Propiedades en Red"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/app/(dashboard)/agentes/page.tsx",
                                lineNumber: 280,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/app/(dashboard)/agentes/page.tsx",
                        lineNumber: 269,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsContent"], {
                        value: "team",
                        className: "mt-0",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                            className: "border-none shadow-sm rounded-3xl overflow-hidden bg-white/80 backdrop-blur-xl",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-4 md:p-6 border-b border-gray-100 flex flex-col md:flex-row gap-4 items-center justify-between",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative w-full md:max-w-md",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                                className: "absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/app/(dashboard)/agentes/page.tsx",
                                                lineNumber: 291,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                placeholder: "Buscar por nombre, email o sucursal...",
                                                value: searchQuery,
                                                onChange: (e)=>setSearchQuery(e.target.value),
                                                className: "pl-9 h-11 bg-gray-50 border-gray-100 rounded-xl focus:bg-white transition-all text-sm w-full"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/app/(dashboard)/agentes/page.tsx",
                                                lineNumber: 292,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/app/(dashboard)/agentes/page.tsx",
                                        lineNumber: 290,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/app/(dashboard)/agentes/page.tsx",
                                    lineNumber: 289,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "overflow-x-auto",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Table"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHeader"], {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableRow"], {
                                                    className: "bg-gray-50/50 border-gray-100 hover:bg-gray-50/50",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                                                            className: "font-bold text-gray-400 text-[10px] uppercase tracking-wider py-4 px-6",
                                                            children: "Agente"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/web/app/(dashboard)/agentes/page.tsx",
                                                            lineNumber: 305,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                                                            className: "font-bold text-gray-400 text-[10px] uppercase tracking-wider py-4 px-6",
                                                            children: "Roles"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/web/app/(dashboard)/agentes/page.tsx",
                                                            lineNumber: 306,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                                                            className: "font-bold text-gray-400 text-[10px] uppercase tracking-wider py-4 px-6",
                                                            children: "Sucursales"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/web/app/(dashboard)/agentes/page.tsx",
                                                            lineNumber: 307,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                                                            className: "font-bold text-gray-400 text-[10px] uppercase tracking-wider py-4 px-6",
                                                            children: "Ingreso"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/web/app/(dashboard)/agentes/page.tsx",
                                                            lineNumber: 308,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                                                            className: "font-bold text-gray-400 text-[10px] uppercase tracking-wider py-4 px-6 text-right",
                                                            children: "Acciones"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/web/app/(dashboard)/agentes/page.tsx",
                                                            lineNumber: 309,
                                                            columnNumber: 41
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/web/app/(dashboard)/agentes/page.tsx",
                                                    lineNumber: 304,
                                                    columnNumber: 37
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/app/(dashboard)/agentes/page.tsx",
                                                lineNumber: 303,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableBody"], {
                                                children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableRow"], {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                                        colSpan: 5,
                                                        className: "h-48 text-center text-gray-400 font-medium",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                                className: "h-8 w-8 animate-spin text-blue-500 mx-auto mb-2"
                                                            }, void 0, false, {
                                                                fileName: "[project]/apps/web/app/(dashboard)/agentes/page.tsx",
                                                                lineNumber: 316,
                                                                columnNumber: 49
                                                            }, this),
                                                            "Cargando integrantes..."
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/apps/web/app/(dashboard)/agentes/page.tsx",
                                                        lineNumber: 315,
                                                        columnNumber: 45
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/app/(dashboard)/agentes/page.tsx",
                                                    lineNumber: 314,
                                                    columnNumber: 41
                                                }, this) : filteredAgents.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableRow"], {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                                        colSpan: 5,
                                                        className: "h-48 text-center text-gray-400 font-medium font-bold",
                                                        children: searchQuery ? "No se encontraron agentes." : "Aún no tienes agentes en tu equipo."
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/app/(dashboard)/agentes/page.tsx",
                                                        lineNumber: 322,
                                                        columnNumber: 45
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/app/(dashboard)/agentes/page.tsx",
                                                    lineNumber: 321,
                                                    columnNumber: 41
                                                }, this) : filteredAgents.map((agent)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableRow"], {
                                                        className: "border-gray-50 hover:bg-blue-50/30 transition-colors group",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                                                className: "py-4 px-6",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center gap-3",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Avatar"], {
                                                                            className: "h-10 w-10 border border-gray-100 rounded-xl shadow-sm",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AvatarImage"], {
                                                                                    src: agent.avatar_url
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/apps/web/app/(dashboard)/agentes/page.tsx",
                                                                                    lineNumber: 332,
                                                                                    columnNumber: 61
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AvatarFallback"], {
                                                                                    className: "bg-blue-50 text-blue-600 font-black",
                                                                                    children: agent.name?.[0] || agent.email?.[0]?.toUpperCase()
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/apps/web/app/(dashboard)/agentes/page.tsx",
                                                                                    lineNumber: 333,
                                                                                    columnNumber: 61
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/apps/web/app/(dashboard)/agentes/page.tsx",
                                                                            lineNumber: 331,
                                                                            columnNumber: 57
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex flex-col",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "flex items-center gap-2",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                            className: "text-sm font-black text-gray-800 tracking-tight",
                                                                                            children: agent.name || 'Sin nombre'
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/apps/web/app/(dashboard)/agentes/page.tsx",
                                                                                            lineNumber: 339,
                                                                                            columnNumber: 65
                                                                                        }, this),
                                                                                        agent.is_invitation && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                                                            className: "bg-amber-100 text-amber-700 border-none px-2 py-0 h-4 font-black text-[8px] uppercase tracking-tighter rounded-full",
                                                                                            children: "Invitado"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/apps/web/app/(dashboard)/agentes/page.tsx",
                                                                                            lineNumber: 341,
                                                                                            columnNumber: 69
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/apps/web/app/(dashboard)/agentes/page.tsx",
                                                                                    lineNumber: 338,
                                                                                    columnNumber: 61
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "text-[10px] text-gray-400 font-bold flex items-center",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                                                                                            className: "h-3 w-3 mr-1 text-blue-400"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/apps/web/app/(dashboard)/agentes/page.tsx",
                                                                                            lineNumber: 345,
                                                                                            columnNumber: 65
                                                                                        }, this),
                                                                                        " ",
                                                                                        agent.email
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/apps/web/app/(dashboard)/agentes/page.tsx",
                                                                                    lineNumber: 344,
                                                                                    columnNumber: 61
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/apps/web/app/(dashboard)/agentes/page.tsx",
                                                                            lineNumber: 337,
                                                                            columnNumber: 57
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/apps/web/app/(dashboard)/agentes/page.tsx",
                                                                    lineNumber: 330,
                                                                    columnNumber: 53
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/apps/web/app/(dashboard)/agentes/page.tsx",
                                                                lineNumber: 329,
                                                                columnNumber: 49
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                                                className: "py-4 px-6",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex flex-wrap gap-1",
                                                                    children: agent.roles.length > 0 ? agent.roles.map((role)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                                            variant: "outline",
                                                                            className: "bg-indigo-50 text-indigo-600 border-none px-2.5 py-1 font-black text-[9px] uppercase tracking-wider rounded-lg shadow-sm",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"], {
                                                                                    className: "h-3 w-3 mr-1 text-indigo-400"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/apps/web/app/(dashboard)/agentes/page.tsx",
                                                                                    lineNumber: 355,
                                                                                    columnNumber: 69
                                                                                }, this),
                                                                                " ",
                                                                                role.name
                                                                            ]
                                                                        }, role.id, true, {
                                                                            fileName: "[project]/apps/web/app/(dashboard)/agentes/page.tsx",
                                                                            lineNumber: 354,
                                                                            columnNumber: 65
                                                                        }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-[10px] text-gray-400 font-bold",
                                                                        children: "Sin rol"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/apps/web/app/(dashboard)/agentes/page.tsx",
                                                                        lineNumber: 358,
                                                                        columnNumber: 61
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/web/app/(dashboard)/agentes/page.tsx",
                                                                    lineNumber: 351,
                                                                    columnNumber: 53
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/apps/web/app/(dashboard)/agentes/page.tsx",
                                                                lineNumber: 350,
                                                                columnNumber: 49
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                                                className: "py-4 px-6",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex flex-wrap gap-1",
                                                                    children: agent.branches.length > 0 ? agent.branches.map((branch)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex items-center gap-1.5 text-[11px] font-black text-gray-600 bg-gray-50 px-3 py-1.5 rounded-xl border border-gray-100/50",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                                                    className: "h-3 w-3 text-red-400"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/apps/web/app/(dashboard)/agentes/page.tsx",
                                                                                    lineNumber: 366,
                                                                                    columnNumber: 69
                                                                                }, this),
                                                                                " ",
                                                                                branch.name
                                                                            ]
                                                                        }, branch.id, true, {
                                                                            fileName: "[project]/apps/web/app/(dashboard)/agentes/page.tsx",
                                                                            lineNumber: 365,
                                                                            columnNumber: 65
                                                                        }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-[10px] text-gray-400 font-bold",
                                                                        children: "Sin sucursal"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/apps/web/app/(dashboard)/agentes/page.tsx",
                                                                        lineNumber: 369,
                                                                        columnNumber: 61
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/web/app/(dashboard)/agentes/page.tsx",
                                                                    lineNumber: 362,
                                                                    columnNumber: 53
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/apps/web/app/(dashboard)/agentes/page.tsx",
                                                                lineNumber: 361,
                                                                columnNumber: 49
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                                                className: "py-4 px-6 text-[11px] text-gray-400 font-black uppercase tracking-wider",
                                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(new Date(agent.created_at), 'dd MMM yyyy', {
                                                                    locale: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$locale$2f$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["es"]
                                                                })
                                                            }, void 0, false, {
                                                                fileName: "[project]/apps/web/app/(dashboard)/agentes/page.tsx",
                                                                lineNumber: 372,
                                                                columnNumber: 49
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                                                className: "py-4 px-6 text-right",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenu"], {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuTrigger"], {
                                                                            asChild: true,
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                                                variant: "ghost",
                                                                                size: "icon",
                                                                                className: "h-9 w-9 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-xl",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ellipsis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MoreHorizontal$3e$__["MoreHorizontal"], {
                                                                                    className: "h-5 w-5"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/apps/web/app/(dashboard)/agentes/page.tsx",
                                                                                    lineNumber: 379,
                                                                                    columnNumber: 65
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/apps/web/app/(dashboard)/agentes/page.tsx",
                                                                                lineNumber: 378,
                                                                                columnNumber: 61
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/apps/web/app/(dashboard)/agentes/page.tsx",
                                                                            lineNumber: 377,
                                                                            columnNumber: 57
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuContent"], {
                                                                            align: "end",
                                                                            className: "w-56 rounded-3xl border-gray-100 shadow-2xl p-2",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                                                                    className: "rounded-2xl py-3 px-4 cursor-pointer font-bold text-gray-700 hover:bg-blue-50 flex items-center gap-3",
                                                                                    onClick: ()=>{
                                                                                        setSelectedAgent(agent);
                                                                                        setRoleOpen(true);
                                                                                    },
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$cog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserCog$3e$__["UserCog"], {
                                                                                            className: "h-4 w-4 text-blue-500"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/apps/web/app/(dashboard)/agentes/page.tsx",
                                                                                            lineNumber: 384,
                                                                                            columnNumber: 65
                                                                                        }, this),
                                                                                        " Cambiar Rol"
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/apps/web/app/(dashboard)/agentes/page.tsx",
                                                                                    lineNumber: 383,
                                                                                    columnNumber: 61
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuSeparator"], {
                                                                                    className: "bg-gray-50 mx-2"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/apps/web/app/(dashboard)/agentes/page.tsx",
                                                                                    lineNumber: 386,
                                                                                    columnNumber: 61
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                                                                    className: "rounded-2xl py-3 px-4 cursor-pointer font-bold text-red-600 flex items-center gap-3",
                                                                                    onClick: ()=>handleDelete(agent),
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                                                            className: "h-4 w-4"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/apps/web/app/(dashboard)/agentes/page.tsx",
                                                                                            lineNumber: 388,
                                                                                            columnNumber: 65
                                                                                        }, this),
                                                                                        " Eliminar Agente"
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/apps/web/app/(dashboard)/agentes/page.tsx",
                                                                                    lineNumber: 387,
                                                                                    columnNumber: 61
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/apps/web/app/(dashboard)/agentes/page.tsx",
                                                                            lineNumber: 382,
                                                                            columnNumber: 57
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/apps/web/app/(dashboard)/agentes/page.tsx",
                                                                    lineNumber: 376,
                                                                    columnNumber: 53
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/apps/web/app/(dashboard)/agentes/page.tsx",
                                                                lineNumber: 375,
                                                                columnNumber: 49
                                                            }, this)
                                                        ]
                                                    }, agent.id, true, {
                                                        fileName: "[project]/apps/web/app/(dashboard)/agentes/page.tsx",
                                                        lineNumber: 328,
                                                        columnNumber: 45
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/app/(dashboard)/agentes/page.tsx",
                                                lineNumber: 312,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/app/(dashboard)/agentes/page.tsx",
                                        lineNumber: 302,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/app/(dashboard)/agentes/page.tsx",
                                    lineNumber: 301,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/app/(dashboard)/agentes/page.tsx",
                            lineNumber: 288,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/apps/web/app/(dashboard)/agentes/page.tsx",
                        lineNumber: 287,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsContent"], {
                        value: "network",
                        className: "mt-0 space-y-8",
                        children: [
                            receivedInvitations.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                className: "border-none shadow-sm rounded-3xl overflow-hidden bg-white/80 backdrop-blur-xl border-l-4 border-l-indigo-500",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-6 border-b border-gray-100",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-lg font-black text-gray-800 flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                                                    className: "h-5 w-5 text-indigo-500"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/app/(dashboard)/agentes/page.tsx",
                                                    lineNumber: 410,
                                                    columnNumber: 37
                                                }, this),
                                                " Solicitudes Pendientes"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/web/app/(dashboard)/agentes/page.tsx",
                                            lineNumber: 409,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/app/(dashboard)/agentes/page.tsx",
                                        lineNumber: 408,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-6",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid gap-4",
                                            children: receivedInvitations.map((inv)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-between bg-gray-50 p-4 rounded-2xl border border-gray-100",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-4",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "h-12 w-12 rounded-xl bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold text-xl",
                                                                    children: inv.sender?.name?.[0] || "?"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/web/app/(dashboard)/agentes/page.tsx",
                                                                    lineNumber: 418,
                                                                    columnNumber: 49
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "font-bold text-gray-800",
                                                                            children: inv.sender?.name || "Inmobiliaria Desconocida"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/apps/web/app/(dashboard)/agentes/page.tsx",
                                                                            lineNumber: 422,
                                                                            columnNumber: 53
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-sm text-gray-500",
                                                                            children: "Te ha invitado a conectar inmobiliarias"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/apps/web/app/(dashboard)/agentes/page.tsx",
                                                                            lineNumber: 423,
                                                                            columnNumber: 53
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-xs text-gray-400 mt-1",
                                                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(new Date(inv.created_at), "dd 'de' MMMM", {
                                                                                locale: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$locale$2f$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["es"]
                                                                            })
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/apps/web/app/(dashboard)/agentes/page.tsx",
                                                                            lineNumber: 424,
                                                                            columnNumber: 53
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/apps/web/app/(dashboard)/agentes/page.tsx",
                                                                    lineNumber: 421,
                                                                    columnNumber: 49
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/apps/web/app/(dashboard)/agentes/page.tsx",
                                                            lineNumber: 417,
                                                            columnNumber: 45
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex gap-2",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                                onClick: ()=>handleAcceptInvitation(inv.id),
                                                                className: "bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl px-6",
                                                                children: "Aceptar"
                                                            }, void 0, false, {
                                                                fileName: "[project]/apps/web/app/(dashboard)/agentes/page.tsx",
                                                                lineNumber: 428,
                                                                columnNumber: 49
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/web/app/(dashboard)/agentes/page.tsx",
                                                            lineNumber: 427,
                                                            columnNumber: 45
                                                        }, this)
                                                    ]
                                                }, inv.id, true, {
                                                    fileName: "[project]/apps/web/app/(dashboard)/agentes/page.tsx",
                                                    lineNumber: 416,
                                                    columnNumber: 41
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/app/(dashboard)/agentes/page.tsx",
                                            lineNumber: 414,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/app/(dashboard)/agentes/page.tsx",
                                        lineNumber: 413,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/app/(dashboard)/agentes/page.tsx",
                                lineNumber: 407,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 lg:grid-cols-3 gap-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "lg:col-span-2 space-y-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-xl font-black text-gray-800 tracking-tight flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__["Building2"], {
                                                        className: "h-5 w-5 text-gray-400"
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/app/(dashboard)/agentes/page.tsx",
                                                        lineNumber: 443,
                                                        columnNumber: 33
                                                    }, this),
                                                    " Inmobiliarias Aliadas"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/apps/web/app/(dashboard)/agentes/page.tsx",
                                                lineNumber: 442,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid gap-4",
                                                children: [
                                                    partners.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                                        className: "border-dashed border-2 border-gray-200 bg-gray-50/50 p-12 flex flex-col items-center justify-center text-center rounded-3xl",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "h-16 w-16 bg-gray-100 rounded-full flex items-center justify-center mb-4",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$network$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Network$3e$__["Network"], {
                                                                    className: "h-8 w-8 text-gray-400"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/web/app/(dashboard)/agentes/page.tsx",
                                                                    lineNumber: 450,
                                                                    columnNumber: 45
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/apps/web/app/(dashboard)/agentes/page.tsx",
                                                                lineNumber: 449,
                                                                columnNumber: 41
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                className: "text-lg font-bold text-gray-700",
                                                                children: "Tu red está vacía"
                                                            }, void 0, false, {
                                                                fileName: "[project]/apps/web/app/(dashboard)/agentes/page.tsx",
                                                                lineNumber: 452,
                                                                columnNumber: 41
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-gray-500 text-sm max-w-sm mt-2 mb-6",
                                                                children: "Conecta con otras inmobiliarias para compartir propiedades y potenciar tus ventas."
                                                            }, void 0, false, {
                                                                fileName: "[project]/apps/web/app/(dashboard)/agentes/page.tsx",
                                                                lineNumber: 453,
                                                                columnNumber: 41
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                                onClick: ()=>setNetworkInviteOpen(true),
                                                                variant: "outline",
                                                                className: "rounded-xl font-bold border-gray-300 text-gray-600",
                                                                children: "Invitar Colega"
                                                            }, void 0, false, {
                                                                fileName: "[project]/apps/web/app/(dashboard)/agentes/page.tsx",
                                                                lineNumber: 454,
                                                                columnNumber: 41
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/apps/web/app/(dashboard)/agentes/page.tsx",
                                                        lineNumber: 448,
                                                        columnNumber: 37
                                                    }, this) : partners.map((partner)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                                            className: "border-none shadow-none bg-white p-4 rounded-2xl flex items-center justify-between group hover:shadow-lg transition-all duration-300",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center gap-4",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "h-12 w-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-indigo-500/20",
                                                                            children: partner.partnerName?.[0]
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/apps/web/app/(dashboard)/agentes/page.tsx",
                                                                            lineNumber: 462,
                                                                            columnNumber: 49
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                                    className: "font-bold text-gray-800",
                                                                                    children: partner.partnerName
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/apps/web/app/(dashboard)/agentes/page.tsx",
                                                                                    lineNumber: 466,
                                                                                    columnNumber: 53
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "flex items-center gap-2 mt-1",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                                                            variant: "secondary",
                                                                                            className: "bg-green-100 text-green-700 font-bold text-[10px] rounded-lg",
                                                                                            children: [
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                                                                                    className: "h-3 w-3 mr-1"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/apps/web/app/(dashboard)/agentes/page.tsx",
                                                                                                    lineNumber: 469,
                                                                                                    columnNumber: 61
                                                                                                }, this),
                                                                                                " Conectado"
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/apps/web/app/(dashboard)/agentes/page.tsx",
                                                                                            lineNumber: 468,
                                                                                            columnNumber: 57
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                            className: "text-[10px] text-gray-400 font-medium",
                                                                                            children: [
                                                                                                "Desde ",
                                                                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(new Date(partner.connectedAt), 'MMM yyyy', {
                                                                                                    locale: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$locale$2f$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["es"]
                                                                                                })
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/apps/web/app/(dashboard)/agentes/page.tsx",
                                                                                            lineNumber: 471,
                                                                                            columnNumber: 57
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/apps/web/app/(dashboard)/agentes/page.tsx",
                                                                                    lineNumber: 467,
                                                                                    columnNumber: 53
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/apps/web/app/(dashboard)/agentes/page.tsx",
                                                                            lineNumber: 465,
                                                                            columnNumber: 49
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/apps/web/app/(dashboard)/agentes/page.tsx",
                                                                    lineNumber: 461,
                                                                    columnNumber: 45
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                                    variant: "ghost",
                                                                    size: "icon",
                                                                    className: "rounded-xl text-gray-300 hover:text-red-500 hover:bg-red-50",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__["XCircle"], {
                                                                        className: "h-5 w-5"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/apps/web/app/(dashboard)/agentes/page.tsx",
                                                                        lineNumber: 478,
                                                                        columnNumber: 49
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/web/app/(dashboard)/agentes/page.tsx",
                                                                    lineNumber: 477,
                                                                    columnNumber: 45
                                                                }, this)
                                                            ]
                                                        }, partner.partnershipId, true, {
                                                            fileName: "[project]/apps/web/app/(dashboard)/agentes/page.tsx",
                                                            lineNumber: 460,
                                                            columnNumber: 41
                                                        }, this)),
                                                    sentInvitations.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mt-8",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                className: "text-sm font-bold text-gray-400 uppercase tracking-widest mb-4 ml-1",
                                                                children: "Invitaciones Enviadas"
                                                            }, void 0, false, {
                                                                fileName: "[project]/apps/web/app/(dashboard)/agentes/page.tsx",
                                                                lineNumber: 487,
                                                                columnNumber: 41
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "space-y-2",
                                                                children: sentInvitations.map((inv)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex items-center justify-between p-3 bg-white rounded-xl border border-gray-100",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "flex items-center gap-3",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "h-8 w-8 rounded-lg bg-gray-100 flex items-center justify-center text-gray-500",
                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                                                                                            className: "h-4 w-4"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/apps/web/app/(dashboard)/agentes/page.tsx",
                                                                                            lineNumber: 493,
                                                                                            columnNumber: 61
                                                                                        }, this)
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/apps/web/app/(dashboard)/agentes/page.tsx",
                                                                                        lineNumber: 492,
                                                                                        columnNumber: 57
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                className: "text-sm font-bold text-gray-700",
                                                                                                children: inv.recipient_email
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/apps/web/app/(dashboard)/agentes/page.tsx",
                                                                                                lineNumber: 496,
                                                                                                columnNumber: 61
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                className: "text-[10px] text-gray-400",
                                                                                                children: inv.status === 'pending' ? 'Esperando respuesta...' : inv.status
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/apps/web/app/(dashboard)/agentes/page.tsx",
                                                                                                lineNumber: 497,
                                                                                                columnNumber: 61
                                                                                            }, this)
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/apps/web/app/(dashboard)/agentes/page.tsx",
                                                                                        lineNumber: 495,
                                                                                        columnNumber: 57
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/apps/web/app/(dashboard)/agentes/page.tsx",
                                                                                lineNumber: 491,
                                                                                columnNumber: 53
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                                                variant: "outline",
                                                                                className: "text-[10px] uppercase font-bold text-gray-400 border-gray-200",
                                                                                children: inv.status
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/apps/web/app/(dashboard)/agentes/page.tsx",
                                                                                lineNumber: 500,
                                                                                columnNumber: 53
                                                                            }, this)
                                                                        ]
                                                                    }, inv.id, true, {
                                                                        fileName: "[project]/apps/web/app/(dashboard)/agentes/page.tsx",
                                                                        lineNumber: 490,
                                                                        columnNumber: 49
                                                                    }, this))
                                                            }, void 0, false, {
                                                                fileName: "[project]/apps/web/app/(dashboard)/agentes/page.tsx",
                                                                lineNumber: 488,
                                                                columnNumber: 41
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/apps/web/app/(dashboard)/agentes/page.tsx",
                                                        lineNumber: 486,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/apps/web/app/(dashboard)/agentes/page.tsx",
                                                lineNumber: 446,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/app/(dashboard)/agentes/page.tsx",
                                        lineNumber: 441,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-xl font-black text-gray-800 tracking-tight flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"], {
                                                        className: "h-5 w-5 text-gray-400"
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/app/(dashboard)/agentes/page.tsx",
                                                        lineNumber: 514,
                                                        columnNumber: 33
                                                    }, this),
                                                    " Propiedades Compartidas"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/apps/web/app/(dashboard)/agentes/page.tsx",
                                                lineNumber: 513,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-4",
                                                children: [
                                                    networkProperties.slice(0, 3).map((prop)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                                            className: "border-none shadow-sm hover:shadow-md transition-all rounded-2xl overflow-hidden bg-white group cursor-pointer",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "h-32 bg-gray-100 relative",
                                                                    children: [
                                                                        prop.property_media?.[0]?.url ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                            src: prop.property_media[0].url,
                                                                            className: "w-full h-full object-cover"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/apps/web/app/(dashboard)/agentes/page.tsx",
                                                                            lineNumber: 522,
                                                                            columnNumber: 49
                                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "w-full h-full flex items-center justify-center text-gray-300",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"], {
                                                                                className: "h-8 w-8"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/apps/web/app/(dashboard)/agentes/page.tsx",
                                                                                lineNumber: 525,
                                                                                columnNumber: 53
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/apps/web/app/(dashboard)/agentes/page.tsx",
                                                                            lineNumber: 524,
                                                                            columnNumber: 49
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "absolute top-2 right-2",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                                                className: "bg-black/50 hover:bg-black/70 backdrop-blur-md border-0 text-[10px] font-bold",
                                                                                children: prop.tenant?.name
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/apps/web/app/(dashboard)/agentes/page.tsx",
                                                                                lineNumber: 529,
                                                                                columnNumber: 49
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/apps/web/app/(dashboard)/agentes/page.tsx",
                                                                            lineNumber: 528,
                                                                            columnNumber: 45
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/apps/web/app/(dashboard)/agentes/page.tsx",
                                                                    lineNumber: 520,
                                                                    columnNumber: 41
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "p-4",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "font-bold text-gray-800 line-clamp-1",
                                                                            children: prop.title
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/apps/web/app/(dashboard)/agentes/page.tsx",
                                                                            lineNumber: 535,
                                                                            columnNumber: 45
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-xs text-gray-500 mt-1 line-clamp-1",
                                                                            children: prop.address
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/apps/web/app/(dashboard)/agentes/page.tsx",
                                                                            lineNumber: 536,
                                                                            columnNumber: 45
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex items-center justify-between mt-3",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "font-black text-blue-600",
                                                                                    children: [
                                                                                        prop.currency,
                                                                                        " ",
                                                                                        prop.price?.toLocaleString()
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/apps/web/app/(dashboard)/agentes/page.tsx",
                                                                                    lineNumber: 538,
                                                                                    columnNumber: 49
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "text-[10px] bg-blue-50 text-blue-600 px-2 py-1 rounded-lg font-bold uppercase",
                                                                                    children: prop.operation_type
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/apps/web/app/(dashboard)/agentes/page.tsx",
                                                                                    lineNumber: 541,
                                                                                    columnNumber: 49
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/apps/web/app/(dashboard)/agentes/page.tsx",
                                                                            lineNumber: 537,
                                                                            columnNumber: 45
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/apps/web/app/(dashboard)/agentes/page.tsx",
                                                                    lineNumber: 534,
                                                                    columnNumber: 41
                                                                }, this)
                                                            ]
                                                        }, prop.id, true, {
                                                            fileName: "[project]/apps/web/app/(dashboard)/agentes/page.tsx",
                                                            lineNumber: 519,
                                                            columnNumber: 37
                                                        }, this)),
                                                    networkProperties.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-center p-8 bg-gray-50 rounded-2xl border border-gray-100",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sm font-medium text-gray-500",
                                                            children: "Tus partners aún no han compartido propiedades."
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/web/app/(dashboard)/agentes/page.tsx",
                                                            lineNumber: 551,
                                                            columnNumber: 41
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/app/(dashboard)/agentes/page.tsx",
                                                        lineNumber: 550,
                                                        columnNumber: 37
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                        variant: "ghost",
                                                        className: "w-full text-blue-600 font-bold text-sm hover:bg-blue-50 rounded-xl",
                                                        children: [
                                                            "Ver todas (",
                                                            networkProperties.length,
                                                            ")"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/apps/web/app/(dashboard)/agentes/page.tsx",
                                                        lineNumber: 554,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/apps/web/app/(dashboard)/agentes/page.tsx",
                                                lineNumber: 517,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/app/(dashboard)/agentes/page.tsx",
                                        lineNumber: 512,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/app/(dashboard)/agentes/page.tsx",
                                lineNumber: 439,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/app/(dashboard)/agentes/page.tsx",
                        lineNumber: 403,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/app/(dashboard)/agentes/page.tsx",
                lineNumber: 268,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
                open: inviteOpen,
                onOpenChange: setInviteOpen,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogContent"], {
                    className: "sm:max-w-[425px] rounded-3xl",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogHeader"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTitle"], {
                                    className: "font-black text-2xl flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserPlus$3e$__["UserPlus"], {
                                            className: "h-6 w-6 text-blue-600"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/app/(dashboard)/agentes/page.tsx",
                                            lineNumber: 569,
                                            columnNumber: 29
                                        }, this),
                                        "Invitar Agente"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/app/(dashboard)/agentes/page.tsx",
                                    lineNumber: 568,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogDescription"], {
                                    className: "font-medium text-gray-500",
                                    children: "Suma un nuevo integrante a tu equipo interno."
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/app/(dashboard)/agentes/page.tsx",
                                    lineNumber: 572,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/app/(dashboard)/agentes/page.tsx",
                            lineNumber: 567,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid gap-4 py-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                            htmlFor: "name",
                                            className: "font-bold text-gray-700 ml-1",
                                            children: "Nombre completo"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/app/(dashboard)/agentes/page.tsx",
                                            lineNumber: 579,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                            id: "name",
                                            placeholder: "Ej: Juan Pérez",
                                            className: "rounded-xl bg-gray-50 border-gray-100",
                                            value: inviteName,
                                            onChange: (e)=>setInviteName(e.target.value)
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/app/(dashboard)/agentes/page.tsx",
                                            lineNumber: 580,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/app/(dashboard)/agentes/page.tsx",
                                    lineNumber: 578,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                            htmlFor: "email",
                                            className: "font-bold text-gray-700 ml-1",
                                            children: "Correo electrónico"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/app/(dashboard)/agentes/page.tsx",
                                            lineNumber: 583,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                            id: "email",
                                            type: "email",
                                            placeholder: "juan@inmobiliaria.com",
                                            className: "rounded-xl bg-gray-50 border-gray-100",
                                            value: inviteEmail,
                                            onChange: (e)=>setInviteEmail(e.target.value)
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/app/(dashboard)/agentes/page.tsx",
                                            lineNumber: 584,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/app/(dashboard)/agentes/page.tsx",
                                    lineNumber: 582,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-2 gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                    className: "font-bold text-gray-700 ml-1",
                                                    children: "Rol"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/app/(dashboard)/agentes/page.tsx",
                                                    lineNumber: 588,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                                                    onValueChange: setInviteRoleId,
                                                    value: inviteRoleId,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                                            className: "rounded-xl bg-gray-50 border-gray-100",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {
                                                                placeholder: "Seleccionar"
                                                            }, void 0, false, {
                                                                fileName: "[project]/apps/web/app/(dashboard)/agentes/page.tsx",
                                                                lineNumber: 590,
                                                                columnNumber: 102
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/web/app/(dashboard)/agentes/page.tsx",
                                                            lineNumber: 590,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
                                                            className: "rounded-xl border-gray-100 shadow-xl",
                                                            children: roles.map((role)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                                    value: role.id,
                                                                    className: "rounded-lg",
                                                                    children: role.name
                                                                }, role.id, false, {
                                                                    fileName: "[project]/apps/web/app/(dashboard)/agentes/page.tsx",
                                                                    lineNumber: 592,
                                                                    columnNumber: 61
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/web/app/(dashboard)/agentes/page.tsx",
                                                            lineNumber: 591,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/web/app/(dashboard)/agentes/page.tsx",
                                                    lineNumber: 589,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/web/app/(dashboard)/agentes/page.tsx",
                                            lineNumber: 587,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                    className: "font-bold text-gray-700 ml-1",
                                                    children: "Sucursal"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/app/(dashboard)/agentes/page.tsx",
                                                    lineNumber: 597,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                                                    onValueChange: setInviteBranchId,
                                                    value: inviteBranchId,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                                            className: "rounded-xl bg-gray-50 border-gray-100",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {
                                                                placeholder: "Seleccionar"
                                                            }, void 0, false, {
                                                                fileName: "[project]/apps/web/app/(dashboard)/agentes/page.tsx",
                                                                lineNumber: 599,
                                                                columnNumber: 102
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/web/app/(dashboard)/agentes/page.tsx",
                                                            lineNumber: 599,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
                                                            className: "rounded-xl border-gray-100 shadow-xl",
                                                            children: branches.map((branch)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                                    value: branch.id,
                                                                    className: "rounded-lg",
                                                                    children: branch.name
                                                                }, branch.id, false, {
                                                                    fileName: "[project]/apps/web/app/(dashboard)/agentes/page.tsx",
                                                                    lineNumber: 601,
                                                                    columnNumber: 66
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/web/app/(dashboard)/agentes/page.tsx",
                                                            lineNumber: 600,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/web/app/(dashboard)/agentes/page.tsx",
                                                    lineNumber: 598,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/web/app/(dashboard)/agentes/page.tsx",
                                            lineNumber: 596,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/app/(dashboard)/agentes/page.tsx",
                                    lineNumber: 586,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/app/(dashboard)/agentes/page.tsx",
                            lineNumber: 577,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogFooter"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "outline",
                                    onClick: ()=>setInviteOpen(false),
                                    className: "rounded-xl font-bold",
                                    children: "Cancelar"
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/app/(dashboard)/agentes/page.tsx",
                                    lineNumber: 608,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    onClick: handleInviteSubmit,
                                    disabled: isInviting,
                                    className: "bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl px-8 shadow-lg shadow-blue-500/10",
                                    children: isInviting ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                        className: "h-4 w-4 animate-spin mr-2"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/app/(dashboard)/agentes/page.tsx",
                                        lineNumber: 610,
                                        columnNumber: 43
                                    }, this) : "Enviar Invitación"
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/app/(dashboard)/agentes/page.tsx",
                                    lineNumber: 609,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/app/(dashboard)/agentes/page.tsx",
                            lineNumber: 607,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/app/(dashboard)/agentes/page.tsx",
                    lineNumber: 566,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/web/app/(dashboard)/agentes/page.tsx",
                lineNumber: 565,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
                open: networkInviteOpen,
                onOpenChange: setNetworkInviteOpen,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogContent"], {
                    className: "sm:max-w-[425px] rounded-3xl",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogHeader"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTitle"], {
                                    className: "font-black text-2xl flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$network$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Network$3e$__["Network"], {
                                            className: "h-6 w-6 text-indigo-600"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/app/(dashboard)/agentes/page.tsx",
                                            lineNumber: 621,
                                            columnNumber: 29
                                        }, this),
                                        "Conectar Inmobiliaria"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/app/(dashboard)/agentes/page.tsx",
                                    lineNumber: 620,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogDescription"], {
                                    className: "font-medium text-gray-500",
                                    children: "Envía una invitación a un colega para compartir propiedades."
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/app/(dashboard)/agentes/page.tsx",
                                    lineNumber: 624,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/app/(dashboard)/agentes/page.tsx",
                            lineNumber: 619,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid gap-4 py-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                        htmlFor: "net-email",
                                        className: "font-bold text-gray-700 ml-1",
                                        children: "Email del Colega / Inmobiliaria"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/app/(dashboard)/agentes/page.tsx",
                                        lineNumber: 630,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                        id: "net-email",
                                        type: "email",
                                        placeholder: "contacto@colegainmobiliaria.com",
                                        className: "rounded-xl bg-gray-50 border-gray-100 h-12",
                                        value: networkEmail,
                                        onChange: (e)=>setNetworkEmail(e.target.value)
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/app/(dashboard)/agentes/page.tsx",
                                        lineNumber: 631,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-gray-400 ml-1",
                                        children: "Debe ser el correo asociado a su cuenta en la plataforma."
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/app/(dashboard)/agentes/page.tsx",
                                        lineNumber: 639,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/app/(dashboard)/agentes/page.tsx",
                                lineNumber: 629,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/apps/web/app/(dashboard)/agentes/page.tsx",
                            lineNumber: 628,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogFooter"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "outline",
                                    onClick: ()=>setNetworkInviteOpen(false),
                                    className: "rounded-xl font-bold",
                                    children: "Cancelar"
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/app/(dashboard)/agentes/page.tsx",
                                    lineNumber: 645,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    onClick: handleNetworkInvite,
                                    disabled: isNetworkInviting,
                                    className: "bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl px-8 shadow-lg shadow-indigo-500/10",
                                    children: isNetworkInviting ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                        className: "h-4 w-4 animate-spin mr-2"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/app/(dashboard)/agentes/page.tsx",
                                        lineNumber: 651,
                                        columnNumber: 50
                                    }, this) : "Enviar Invitación"
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/app/(dashboard)/agentes/page.tsx",
                                    lineNumber: 646,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/app/(dashboard)/agentes/page.tsx",
                            lineNumber: 644,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/app/(dashboard)/agentes/page.tsx",
                    lineNumber: 618,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/web/app/(dashboard)/agentes/page.tsx",
                lineNumber: 617,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
                open: roleOpen,
                onOpenChange: setRoleOpen,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogContent"], {
                    className: "sm:max-w-[400px] rounded-3xl",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogHeader"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTitle"], {
                                    className: "font-black text-2xl flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$cog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserCog$3e$__["UserCog"], {
                                            className: "h-6 w-6 text-blue-600"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/app/(dashboard)/agentes/page.tsx",
                                            lineNumber: 662,
                                            columnNumber: 29
                                        }, this),
                                        "Cambiar Rol"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/app/(dashboard)/agentes/page.tsx",
                                    lineNumber: 661,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogDescription"], {
                                    className: "font-medium text-gray-500",
                                    children: [
                                        "Actualiza los permisos de ",
                                        selectedAgent?.name,
                                        "."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/app/(dashboard)/agentes/page.tsx",
                                    lineNumber: 665,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/app/(dashboard)/agentes/page.tsx",
                            lineNumber: 660,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "py-6 space-y-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                        className: "font-bold text-gray-700 ml-1",
                                        children: "Nuevo Rol"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/app/(dashboard)/agentes/page.tsx",
                                        lineNumber: 671,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                                        onValueChange: setNewRoleId,
                                        defaultValue: selectedAgent?.roles?.[0]?.id,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                                className: "rounded-xl bg-gray-50 border-gray-100 h-12",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {
                                                    placeholder: "Seleccionar nuevo rol"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/app/(dashboard)/agentes/page.tsx",
                                                    lineNumber: 674,
                                                    columnNumber: 37
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/app/(dashboard)/agentes/page.tsx",
                                                lineNumber: 673,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
                                                className: "rounded-xl border-gray-100 shadow-xl",
                                                children: roles.map((role)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                        value: role.id,
                                                        className: "rounded-lg",
                                                        children: role.name
                                                    }, role.id, false, {
                                                        fileName: "[project]/apps/web/app/(dashboard)/agentes/page.tsx",
                                                        lineNumber: 678,
                                                        columnNumber: 41
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/app/(dashboard)/agentes/page.tsx",
                                                lineNumber: 676,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/app/(dashboard)/agentes/page.tsx",
                                        lineNumber: 672,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/app/(dashboard)/agentes/page.tsx",
                                lineNumber: 670,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/apps/web/app/(dashboard)/agentes/page.tsx",
                            lineNumber: 669,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogFooter"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "outline",
                                    onClick: ()=>setRoleOpen(false),
                                    className: "rounded-xl font-bold",
                                    children: "Cancelar"
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/app/(dashboard)/agentes/page.tsx",
                                    lineNumber: 685,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    onClick: handleRoleChange,
                                    disabled: !newRoleId,
                                    className: "bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl px-8 shadow-lg shadow-blue-500/10",
                                    children: "Guardar Cambios"
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/app/(dashboard)/agentes/page.tsx",
                                    lineNumber: 686,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/app/(dashboard)/agentes/page.tsx",
                            lineNumber: 684,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/app/(dashboard)/agentes/page.tsx",
                    lineNumber: 659,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/web/app/(dashboard)/agentes/page.tsx",
                lineNumber: 658,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/app/(dashboard)/agentes/page.tsx",
        lineNumber: 249,
        columnNumber: 9
    }, this);
}
_s(AgentsPage, "0YsiPLBNQNqfjp9wslUcFlwf8mc=");
_c = AgentsPage;
var _c;
__turbopack_context__.k.register(_c, "AgentsPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=apps_web_234dad36._.js.map