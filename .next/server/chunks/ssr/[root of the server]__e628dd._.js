module.exports = {

"[externals]/next/dist/compiled/next-server/app-page.runtime.dev.js [external] (next/dist/compiled/next-server/app-page.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
const mod = __turbopack_external_require__("next/dist/compiled/next-server/app-page.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page.runtime.dev.js"));

module.exports = mod;
}}),
"[project]/src/app/components/Sidebar/sidebar.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$gi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-icons/gi/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ai$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-icons/ai/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$go$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-icons/go/index.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
const Sidebar = ({ theme, setTheme })=>{
    const toggleTheme = ()=>{
        setTheme(theme === "light" ? "dark" : "light");
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white dark:bg-gray-900 dark:text-gray-200 p-4 md:p-6 lg:p-0 lg:h-full flex flex-col justify-between",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        src: "/images/me.jpg",
                        alt: "user avatar",
                        width: 112,
                        height: 112,
                        className: "rounded-full mx-auto border-4 border-blue-400 dark:border-gray-700"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/Sidebar/sidebar.tsx",
                        lineNumber: 23,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "my-3 text-2xl font-bold text-center tracking-wider text-gray-700 dark:text-gray-200 font-kaushan",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-blue-500 dark:text-blue-300",
                                children: "Hashim"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/Sidebar/sidebar.tsx",
                                lineNumber: 34,
                                columnNumber: 11
                            }, this),
                            "Hasan"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/Sidebar/sidebar.tsx",
                        lineNumber: 33,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "px-3 py-1 bg-blue-100 dark:bg-gray-700 text-blue-600 dark:text-gray-300 font-medium rounded-full text-center text-sm",
                        children: "Web Developer"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/Sidebar/sidebar.tsx",
                        lineNumber: 42,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "",
                        download: "resume",
                        className: "flex items-center justify-center text-sm gap-2 px-4 py-2 bg-gradient-to-r from-blue-400 to-green-400 text-white mt-2 rounded-full",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$gi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GiTie"], {
                                className: "w-5 h-5"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/Sidebar/sidebar.tsx",
                                lineNumber: 52,
                                columnNumber: 11
                            }, this),
                            "Download Resume"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/Sidebar/sidebar.tsx",
                        lineNumber: 47,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/Sidebar/sidebar.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "lg:my-2 my-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-around py-2 text-gray-600 dark:text-gray-400",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ai$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AiFillFacebook"], {
                                    className: "w-6 h-6 cursor-pointer hover:text-blue-600 dark:hover:text-blue-400"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/Sidebar/sidebar.tsx",
                                    lineNumber: 62,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/Sidebar/sidebar.tsx",
                                lineNumber: 61,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ai$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AiFillGithub"], {
                                    className: "w-6 h-6 cursor-pointer hover:text-gray-800 dark:hover:text-gray-200"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/Sidebar/sidebar.tsx",
                                    lineNumber: 65,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/Sidebar/sidebar.tsx",
                                lineNumber: 64,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ai$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AiFillLinkedin"], {
                                    className: "w-6 h-6 cursor-pointer hover:text-blue-700 dark:hover:text-blue-400"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/Sidebar/sidebar.tsx",
                                    lineNumber: 68,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/Sidebar/sidebar.tsx",
                                lineNumber: 67,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/Sidebar/sidebar.tsx",
                        lineNumber: 60,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "py-3 bg-gray-200 dark:bg-gray-800 rounded-lg text-center mx-[-1rem]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-center gap-2 text-gray-600 dark:text-gray-300",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$go$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GoLocation"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Sidebar/sidebar.tsx",
                                        lineNumber: 75,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Karachi, Pakistan"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Sidebar/sidebar.tsx",
                                        lineNumber: 76,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/Sidebar/sidebar.tsx",
                                lineNumber: 74,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "my-2 text-gray-600 dark:text-gray-300 text-sm",
                                children: "hashimhasan444@gmail.com"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/Sidebar/sidebar.tsx",
                                lineNumber: 78,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "my-2 text-gray-600 dark:text-gray-300 text-sm",
                                children: "9876543210"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/Sidebar/sidebar.tsx",
                                lineNumber: 81,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/Sidebar/sidebar.tsx",
                        lineNumber: 73,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/Sidebar/sidebar.tsx",
                lineNumber: 58,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col items-center gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "bg-gradient-to-r from-green-400 to-blue-400 w-10/12 rounded-full py-2 text-white hover:shadow-lg transition duration-300",
                        onClick: ()=>window.open("mailto:hashimhasan444@gmail.com"),
                        children: "Email me"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/Sidebar/sidebar.tsx",
                        lineNumber: 89,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "bg-gradient-to-r from-green-400 to-blue-400 w-10/12 rounded-full py-2 text-white hover:shadow-lg transition duration-300",
                        onClick: toggleTheme,
                        children: "Toggle Theme"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/Sidebar/sidebar.tsx",
                        lineNumber: 95,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/Sidebar/sidebar.tsx",
                lineNumber: 88,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/Sidebar/sidebar.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = Sidebar;
}}),
"[project]/src/app/components/Main/contact.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
const Contact = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "about"
    }, void 0, false, {
        fileName: "[project]/src/app/components/Main/contact.tsx",
        lineNumber: 3,
        columnNumber: 9
    }, this);
};
const __TURBOPACK__default__export__ = Contact;
}}),
"[project]/src/app/components/Main/data.jsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// src/app/components/Main/data.jsx
__turbopack_esm__({
    "projects": (()=>projects)
});
const projects = [
    {
        id: 1,
        name: "Music World",
        languages: [
            "JavaScript",
            "Html"
        ],
        images: [
            "/images/Musicworld.png"
        ],
        videos: [
            "/videos/Musicworld.mp4"
        ],
        description: "My Music World is a dynamic and interactive web application that brings the joy of music to users through a feature-rich, JavaScript-powered platform. Designed with creativity and functionality in mind, this website combines stunning visuals with seamless interactivity to deliver a captivating user experience."
    },
    {
        id: 2,
        name: "Smart Crop",
        languages: [
            "Python",
            "React",
            "Tailwind"
        ],
        images: [
            "/images/Cropsmart.png"
        ],
        videos: [
            "/videos/Smartcrop.mp4"
        ],
        description: "Smart farm is an innovative satellite monitoring system designed to empower farmers across the globe by providing detailed information and analytics on crop health, weather patterns, soil conditions, and more. Our goal is to utilize cutting-edge satellite technology and data-driven insights to help farmers make informed decisions that enhance productivity and sustainability."
    },
    {
        id: 3,
        name: "Driverless",
        languages: [
            "Nextjs",
            "Python"
        ],
        images: [
            "/images/driverless.png"
        ],
        videos: [
            "/videos/Driverless.mp4"
        ],
        description: "The Driverless Car Website is a sophisticated web application built using Next.js, designed to provide an immersive and detailed exploration of autonomous vehicle technologies. This platform combines advanced frontend UI/UX design with complex backend logic to deliver a seamless and feature-rich user experience."
    },
    {
        id: 4,
        name: "Smart Farming",
        languages: [
            "Nextjs",
            "Tailwind"
        ],
        images: [
            "/images/Smartfarming.png"
        ],
        videos: [
            "/videos/Smartfarming.mp4"
        ],
        description: "Smart Farming is an innovative web platform designed to revolutionize the way farmers interact with their land, crops, and livestock. Powered by Next.js, the platform integrates cutting-edge technologies such as real-time data analytics, IoT sensors, and machine learning to optimize farming practices, enhance crop yield, and ensure sustainability."
    },
    {
        id: 5,
        name: "Travel World",
        languages: [
            "JavaScript",
            "Tailwind"
        ],
        images: [
            "/images/Travelworlds1.png",
            "/images/Travelworlds2.png",
            "/images/Travelworlds3.png"
        ],
        videos: [
            "/videos/Travelworld.mp4"
        ],
        description: "Travel World is an interactive and engaging web platform designed to help travelers explore, plan, and book their dream vacations with ease. Built using JavaScript, the website combines intuitive navigation, stunning visuals, and powerful functionality to provide a seamless travel experience."
    },
    {
        id: 6,
        name: "Project 6",
        languages: [
            "Python",
            "Flask"
        ],
        images: [
            "/images/Travelworlds1.png"
        ],
        videos: [
            "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4"
        ],
        description: "Project 6 description"
    }
];
}}),
"[project]/src/app/components/Main/projects.jsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Main$2f$data$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/components/Main/data.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
const Projects = ()=>{
    const [selectedLanguage, setSelectedLanguage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("All");
    const [selectedProject, setSelectedProject] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [currentImageIndex, setCurrentImageIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const filterProjects = (language)=>{
        if (language === "All") {
            return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Main$2f$data$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["projects"];
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Main$2f$data$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["projects"].filter((project)=>project.languages.includes(language));
    };
    // Automatically change image every 3 seconds for selected project
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (selectedProject) {
            const intervalId = setInterval(()=>{
                setCurrentImageIndex((prevIndex)=>(prevIndex + 1) % selectedProject.images.length);
            }, 3000); // 3 seconds
            return ()=>clearInterval(intervalId); // Clean up interval on unmount
        }
    }, [
        selectedProject
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex space-x-4 mb-6 overflow-scroll lg:overflow-hidden ",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setSelectedLanguage("All"),
                        className: "p-2 bg-blue-500 text-white rounded",
                        children: "All"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/Main/projects.jsx",
                        lineNumber: 34,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setSelectedLanguage("JavaScript"),
                        className: "p-2 bg-blue-500 text-white rounded",
                        children: "JavaScript"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/Main/projects.jsx",
                        lineNumber: 37,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setSelectedLanguage("React"),
                        className: "p-2 bg-blue-500 text-white rounded",
                        children: "React"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/Main/projects.jsx",
                        lineNumber: 40,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setSelectedLanguage("Python"),
                        className: "p-2 bg-blue-500 text-white rounded",
                        children: "Python"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/Main/projects.jsx",
                        lineNumber: 43,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setSelectedLanguage("Nextjs"),
                        className: "p-2 bg-blue-500 text-white rounded",
                        children: "Nextjs"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/Main/projects.jsx",
                        lineNumber: 46,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/Main/projects.jsx",
                lineNumber: 33,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-2xl font-bold mb-4",
                        children: [
                            "Projects in ",
                            selectedLanguage
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/Main/projects.jsx",
                        lineNumber: 53,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4 cursor-pointer",
                        children: filterProjects(selectedLanguage).map((project)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "project-card p-4 border rounded-lg shadow-lg transition-transform duration-300",
                                onClick: ()=>setSelectedProject(project),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative group",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                src: project.images[0],
                                                alt: project.name,
                                                width: 500,
                                                height: 300,
                                                className: "w-full h-48 object-contain rounded-lg mb-4 transition-opacity duration-500 group-hover:opacity-0"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/Main/projects.jsx",
                                                lineNumber: 63,
                                                columnNumber: 17
                                            }, this),
                                            project.videos.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                                                src: project.videos[0],
                                                autoPlay: true,
                                                loop: true,
                                                muted: true,
                                                className: "absolute top-0 left-0 w-full h-full object-contain rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/Main/projects.jsx",
                                                lineNumber: 71,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/components/Main/projects.jsx",
                                        lineNumber: 61,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-xl font-semibold",
                                        children: project.name
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Main/projects.jsx",
                                        lineNumber: 80,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-gray-500",
                                        children: [
                                            "Languages: ",
                                            project.languages.join(", ")
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/components/Main/projects.jsx",
                                        lineNumber: 81,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, project.id, true, {
                                fileName: "[project]/src/app/components/Main/projects.jsx",
                                lineNumber: 56,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/Main/projects.jsx",
                        lineNumber: 54,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/Main/projects.jsx",
                lineNumber: 52,
                columnNumber: 7
            }, this),
            selectedProject && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white p-6 rounded-lg max-w-lg w-full",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-2xl font-semibold mb-4",
                            children: selectedProject.name
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/Main/projects.jsx",
                            lineNumber: 91,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mb-4",
                            children: selectedProject.description
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/Main/projects.jsx",
                            lineNumber: 92,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative group",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: selectedProject.images[currentImageIndex],
                                        alt: `${selectedProject.name} image`,
                                        className: "w-full h-48 object-cover rounded-lg transition-opacity duration-500 group-hover:opacity-0"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Main/projects.jsx",
                                        lineNumber: 95,
                                        columnNumber: 17
                                    }, this),
                                    selectedProject.videos.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                                        src: selectedProject.videos[0],
                                        autoPlay: true,
                                        loop: true,
                                        muted: true,
                                        className: "absolute top-0 left-0 w-full h-full object-cover rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Main/projects.jsx",
                                        lineNumber: 101,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/Main/projects.jsx",
                                lineNumber: 94,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/Main/projects.jsx",
                            lineNumber: 93,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setSelectedProject(null),
                            className: "px-4 py-2 bg-blue-500 text-white rounded",
                            children: "Close"
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/Main/projects.jsx",
                            lineNumber: 111,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/components/Main/projects.jsx",
                    lineNumber: 90,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/components/Main/projects.jsx",
                lineNumber: 89,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/Main/projects.jsx",
        lineNumber: 31,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = Projects;
}}),
"[project]/src/app/components/Main/resume.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
const Resume = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white text-gray-800 min-h-screen py-6 px-8 flex flex-col items-center",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-4xl font-bold mb-6 text-center",
                children: "Resume"
            }, void 0, false, {
                fileName: "[project]/src/app/components/Main/resume.tsx",
                lineNumber: 7,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "max-w-4xl w-full text-center mb-12",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-2xl font-semibold",
                        children: "Hashim Hasan"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/Main/resume.tsx",
                        lineNumber: 11,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-lg font-medium text-gray-600",
                        children: "Web Developer, Python Developer, and MERN-Stack Developer"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/Main/resume.tsx",
                        lineNumber: 12,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-gray-500 mt-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: [
                                    "Email:",
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "mailto:hashimhasan444@gmail.com",
                                        className: "text-blue-500",
                                        children: "hashimhasan444@gmail.com"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Main/resume.tsx",
                                        lineNumber: 18,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/Main/resume.tsx",
                                lineNumber: 16,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "Phone: 03240251086"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/Main/resume.tsx",
                                lineNumber: 25,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "Location: B125, Karachi, Pakistan"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/Main/resume.tsx",
                                lineNumber: 26,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/Main/resume.tsx",
                        lineNumber: 15,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/Main/resume.tsx",
                lineNumber: 10,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "max-w-4xl w-full mb-12",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-2xl font-bold mb-4",
                        children: "Work Experience"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/Main/resume.tsx",
                        lineNumber: 32,
                        columnNumber: 3
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid gap-4 md:grid-cols-2 ",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-gray-100 rounded-lg p-4 shadow-md",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "text-xl font-semibold",
                                        children: "Intern - Frontend Web Designer and Backend Developer"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Main/resume.tsx",
                                        lineNumber: 35,
                                        columnNumber: 7
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-gray-600",
                                        children: "NCAI - NEDUET, Smart City Lab (12/2023 - 08/2024)"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Main/resume.tsx",
                                        lineNumber: 38,
                                        columnNumber: 7
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-gray-500",
                                        children: "Completed an 8-month internship focusing on frontend design and backend development, contributing to key projects in the Smart City Lab."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Main/resume.tsx",
                                        lineNumber: 41,
                                        columnNumber: 7
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/Main/resume.tsx",
                                lineNumber: 34,
                                columnNumber: 5
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-gray-100 rounded-lg p-4 shadow-md",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "text-xl font-semibold",
                                        children: "Frontend Web Designer and Backend Developer"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Main/resume.tsx",
                                        lineNumber: 47,
                                        columnNumber: 7
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-gray-600",
                                        children: "NCAI - NEDUET, Smart City Lab (08/2024 - Present)"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Main/resume.tsx",
                                        lineNumber: 50,
                                        columnNumber: 7
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-gray-500",
                                        children: "Currently working as a frontend web designer and backend developer at the National Center of Artificial Intelligence (NCAI), NED University."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Main/resume.tsx",
                                        lineNumber: 53,
                                        columnNumber: 7
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/Main/resume.tsx",
                                lineNumber: 46,
                                columnNumber: 5
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/Main/resume.tsx",
                        lineNumber: 33,
                        columnNumber: 3
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/Main/resume.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "max-w-4xl w-full mb-12",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-2xl font-bold mb-4",
                        children: "Education"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/Main/resume.tsx",
                        lineNumber: 64,
                        columnNumber: 3
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid gap-4 md:grid-cols-2 lg:grid-cols-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-gray-100 rounded-lg p-4 shadow-md",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "text-xl font-semibold",
                                        children: "Software Engineering"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Main/resume.tsx",
                                        lineNumber: 67,
                                        columnNumber: 7
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-gray-600",
                                        children: "Aptech Pakistan (08/2023 - Present)"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Main/resume.tsx",
                                        lineNumber: 68,
                                        columnNumber: 7
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/Main/resume.tsx",
                                lineNumber: 66,
                                columnNumber: 5
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-gray-100 rounded-lg p-4 shadow-md",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "text-xl font-semibold",
                                        children: "BBA"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Main/resume.tsx",
                                        lineNumber: 71,
                                        columnNumber: 7
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-gray-600",
                                        children: "Allama Iqbal Open University (AIOU) (08/2023 - Present)"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Main/resume.tsx",
                                        lineNumber: 72,
                                        columnNumber: 7
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/Main/resume.tsx",
                                lineNumber: 70,
                                columnNumber: 5
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-gray-100 rounded-lg p-4 shadow-md",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "text-xl font-semibold",
                                        children: "Pre-Engineering"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Main/resume.tsx",
                                        lineNumber: 77,
                                        columnNumber: 7
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-gray-600",
                                        children: "Islamia Science College (08/2020 - 08/2022)"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Main/resume.tsx",
                                        lineNumber: 78,
                                        columnNumber: 7
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/Main/resume.tsx",
                                lineNumber: 76,
                                columnNumber: 5
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-gray-100 rounded-lg p-4 shadow-md",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "text-xl font-semibold",
                                        children: "Computer Science"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Main/resume.tsx",
                                        lineNumber: 83,
                                        columnNumber: 7
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-gray-600",
                                        children: "White House Grammar School (01/2009 - 07/2019)"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Main/resume.tsx",
                                        lineNumber: 84,
                                        columnNumber: 7
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/Main/resume.tsx",
                                lineNumber: 82,
                                columnNumber: 5
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/Main/resume.tsx",
                        lineNumber: 65,
                        columnNumber: 3
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/Main/resume.tsx",
                lineNumber: 63,
                columnNumber: 1
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "max-w-4xl w-full mb-12",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-2xl font-bold mb-4",
                        children: "Skills"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/Main/resume.tsx",
                        lineNumber: 94,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap gap-2",
                        children: [
                            "WordPress",
                            "HTML",
                            "CSS",
                            "Tailwind CSS",
                            "Python",
                            "JavaScript",
                            "Next.js",
                            "React.js",
                            "Flutter",
                            "Firebase"
                        ].map((skill)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "bg-green-100 text-green-600 px-3 py-1 rounded-full shadow-md",
                                children: skill
                            }, skill, false, {
                                fileName: "[project]/src/app/components/Main/resume.tsx",
                                lineNumber: 108,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/Main/resume.tsx",
                        lineNumber: 95,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/Main/resume.tsx",
                lineNumber: 93,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "max-w-4xl w-full mb-12",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-2xl font-bold mb-4",
                        children: "Languages & Frameworks"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/Main/resume.tsx",
                        lineNumber: 120,
                        columnNumber: 3
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4",
                        children: [
                            {
                                name: "Python",
                                level: "80%",
                                icon: "🐍"
                            },
                            {
                                name: "JavaScript",
                                level: "70%",
                                icon: "✨"
                            },
                            {
                                name: "React",
                                level: "65%",
                                icon: "⚛️"
                            },
                            {
                                name: "React-Native",
                                level: "60%",
                                icon: "📱"
                            },
                            {
                                name: "Flutter",
                                level: "65%",
                                icon: "🦋"
                            },
                            {
                                name: "Nextjs",
                                level: "50%",
                                icon: "🌱"
                            },
                            {
                                name: "Tailwind",
                                level: "80%",
                                icon: "📦"
                            }
                        ].map((skill, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between mb-2",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "flex items-center text-gray-700 text-sm font-medium",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "mr-2",
                                                    children: skill.icon
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/Main/resume.tsx",
                                                    lineNumber: 134,
                                                    columnNumber: 13
                                                }, this),
                                                " ",
                                                skill.name
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/components/Main/resume.tsx",
                                            lineNumber: 133,
                                            columnNumber: 11
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Main/resume.tsx",
                                        lineNumber: 132,
                                        columnNumber: 9
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-full h-6 bg-gray-300 rounded-full relative overflow-hidden shadow-inner",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-gradient-to-r from-green-400  to-blue-400 h-full rounded-full shadow-lg flex items-center justify-center transition-all duration-500 ease-in-out",
                                            style: {
                                                width: skill.level
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/Main/resume.tsx",
                                            lineNumber: 139,
                                            columnNumber: 11
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Main/resume.tsx",
                                        lineNumber: 138,
                                        columnNumber: 9
                                    }, this)
                                ]
                            }, index, true, {
                                fileName: "[project]/src/app/components/Main/resume.tsx",
                                lineNumber: 131,
                                columnNumber: 7
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/Main/resume.tsx",
                        lineNumber: 121,
                        columnNumber: 3
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/Main/resume.tsx",
                lineNumber: 119,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/Main/resume.tsx",
        lineNumber: 6,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = Resume;
}}),
"[project]/src/app/components/Main/about.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-icons/fa/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-icons/fa6/index.mjs [app-ssr] (ecmascript)");
;
;
;
const About = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "about bg-white text-gray-800 min-h-screen flex flex-col items-center py-6 px-8 rounded-lg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-4xl font-bold text-center mb-8",
                children: "About Me"
            }, void 0, false, {
                fileName: "[project]/src/app/components/Main/about.tsx",
                lineNumber: 8,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "max-w-3xl w-full text-center mb-12",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "md:text-lg text-sm",
                    children: "Hello! I'm Hashim, a passionate frontend developer and backend engineer. I specialize in creating intuitive and responsive web applications using modern technologies like React, ASP.NET Core, and more. I have 2+ years of experience in Web Development, and I am constantly learning new tools to improve my skills and provide high-quality solutions to complex problems."
                }, void 0, false, {
                    fileName: "[project]/src/app/components/Main/about.tsx",
                    lineNumber: 12,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/components/Main/about.tsx",
                lineNumber: 11,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "w-full text-xl font-semibold text-center mb-6",
                children: [
                    "What I Offer",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-blue-800 font-kaushan text-2xl",
                        children: "  ?"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/Main/about.tsx",
                        lineNumber: 18,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/Main/about.tsx",
                lineNumber: 17,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl w-full",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-gray-100 rounded-lg p-6 flex flex-col md:flex-row items-center shadow-md hover:shadow-lg transition-shadow",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-green-500 text-4xl mr-4 mb-4 md:mb-0",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaLaptopCode"], {}, void 0, false, {
                                    fileName: "[project]/src/app/components/Main/about.tsx",
                                    lineNumber: 26,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/Main/about.tsx",
                                lineNumber: 25,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-xl font-bold mb-2",
                                        children: "Frontend Development"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Main/about.tsx",
                                        lineNumber: 29,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "I can build a beautiful and scalable SPA using HTML, CSS, and React.js / Nextjs."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Main/about.tsx",
                                        lineNumber: 30,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/Main/about.tsx",
                                lineNumber: 28,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/Main/about.tsx",
                        lineNumber: 24,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-gray-100 rounded-lg p-6 flex flex-col md:flex-row items-center shadow-md hover:shadow-lg transition-shadow",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-blue-500 text-4xl mr-4 mb-4 md:mb-0",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaDatabase"], {}, void 0, false, {
                                    fileName: "[project]/src/app/components/Main/about.tsx",
                                    lineNumber: 37,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/Main/about.tsx",
                                lineNumber: 36,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-xl font-bold mb-2",
                                        children: "Backend Development"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Main/about.tsx",
                                        lineNumber: 40,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "Handle databases, servers, and APIs using Nodejs, Python Flask, and Nextjs."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Main/about.tsx",
                                        lineNumber: 41,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/Main/about.tsx",
                                lineNumber: 39,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/Main/about.tsx",
                        lineNumber: 35,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-gray-100 rounded-lg p-6 flex flex-col md:flex-row items-center shadow-md hover:shadow-lg transition-shadow",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-green-500 text-4xl mr-4 mb-4 md:mb-0",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaMobileScreen"], {}, void 0, false, {
                                    fileName: "[project]/src/app/components/Main/about.tsx",
                                    lineNumber: 48,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/Main/about.tsx",
                                lineNumber: 47,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-xl font-bold mb-2",
                                        children: "App Development"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Main/about.tsx",
                                        lineNumber: 51,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "I can build a beautiful App and scalable SPA using Flutter and React Native."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Main/about.tsx",
                                        lineNumber: 52,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/Main/about.tsx",
                                lineNumber: 50,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/Main/about.tsx",
                        lineNumber: 46,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-gray-100 rounded-lg p-6 flex flex-col md:flex-row items-center shadow-md hover:shadow-lg transition-shadow",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-red-500 text-4xl mr-4 mb-4 md:mb-0",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaCodeBranch"], {}, void 0, false, {
                                    fileName: "[project]/src/app/components/Main/about.tsx",
                                    lineNumber: 59,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/Main/about.tsx",
                                lineNumber: 58,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-xl font-bold mb-2",
                                        children: "API Development"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Main/about.tsx",
                                        lineNumber: 62,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "Develop robust REST APIs using Django Rest Framework and Node.js."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Main/about.tsx",
                                        lineNumber: 63,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/Main/about.tsx",
                                lineNumber: 61,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/Main/about.tsx",
                        lineNumber: 57,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-gray-100 rounded-lg p-6 flex flex-col md:flex-row items-center shadow-md hover:shadow-lg transition-shadow",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-yellow-500 text-4xl mr-4 mb-4 md:mb-0",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaPencilRuler"], {}, void 0, false, {
                                    fileName: "[project]/src/app/components/Main/about.tsx",
                                    lineNumber: 70,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/Main/about.tsx",
                                lineNumber: 69,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-xl font-bold mb-2",
                                        children: "UI/UX Design"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Main/about.tsx",
                                        lineNumber: 73,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "Stunning user interface designs using Figma and Framer."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Main/about.tsx",
                                        lineNumber: 74,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/Main/about.tsx",
                                lineNumber: 72,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/Main/about.tsx",
                        lineNumber: 68,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-gray-100 rounded-lg p-6 flex flex-col md:flex-row items-center shadow-md hover:shadow-lg transition-shadow",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-purple-500 text-4xl mr-4 mb-4 md:mb-0",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaTrophy"], {}, void 0, false, {
                                    fileName: "[project]/src/app/components/Main/about.tsx",
                                    lineNumber: 81,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/Main/about.tsx",
                                lineNumber: 80,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-xl font-bold mb-2",
                                        children: "Competitive Coding"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Main/about.tsx",
                                        lineNumber: 84,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "Daily problem solver on HackerRank and LeetCode."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Main/about.tsx",
                                        lineNumber: 85,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/Main/about.tsx",
                                lineNumber: 83,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/Main/about.tsx",
                        lineNumber: 79,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-gray-100 rounded-lg p-6 flex flex-col md:flex-row items-center shadow-md hover:shadow-lg transition-shadow",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-pink-500 text-4xl mr-4 mb-4 md:mb-0",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaLightbulb"], {}, void 0, false, {
                                    fileName: "[project]/src/app/components/Main/about.tsx",
                                    lineNumber: 92,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/Main/about.tsx",
                                lineNumber: 91,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-xl font-bold mb-2",
                                        children: "Other Projects"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Main/about.tsx",
                                        lineNumber: 95,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "Always exploring innovative solutions and building tools for efficiency."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Main/about.tsx",
                                        lineNumber: 96,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/Main/about.tsx",
                                lineNumber: 94,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/Main/about.tsx",
                        lineNumber: 90,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/Main/about.tsx",
                lineNumber: 22,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/Main/about.tsx",
        lineNumber: 7,
        columnNumber: 9
    }, this);
};
const __TURBOPACK__default__export__ = About;
}}),
"[project]/src/app/components/Right/page.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Main$2f$contact$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/components/Main/contact.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Main$2f$projects$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/components/Main/projects.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Main$2f$resume$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/components/Main/resume.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Main$2f$about$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/components/Main/about.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
const RightWithNavbar = ()=>{
    const [activeComponent, setActiveComponent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("About"); // Default to "About"
    const [theme, setTheme] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("light"); // State for theme
    const [menuOpen, setMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false); // State to control the hamburger menu
    const navItems = [
        "About",
        "Resume",
        "Projects",
        "Contact"
    ]; // Nav items
    // Initialize theme from localStorage
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const storedTheme = localStorage.getItem("theme");
        if (storedTheme) {
            setTheme(storedTheme);
        }
    }, []);
    // Update the theme class on documentElement and localStorage whenever theme changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        document.documentElement.className = theme; // Apply theme to root element
        localStorage.setItem("theme", theme); // Save theme to localStorage
    }, [
        theme
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "lg:overflow-y-auto h-full scrollbar-hide bg-transparent",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "sticky top-0 z-10 h-12 bg-gray-50 shadow-md flex justify-between items-center px-4 rounded-lg",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-lg font-semibold text-gray-800",
                        children: activeComponent
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/Right/page.tsx",
                        lineNumber: 35,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hidden lg:flex space-x-12 font-bold",
                        children: navItems.filter((item)=>item !== activeComponent) // Filter out the active link
                        .map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "cursor-pointer text-sky-600 hover:text-green-600 transition duration-200",
                                onClick: ()=>setActiveComponent(item),
                                children: item
                            }, item, false, {
                                fileName: "[project]/src/app/components/Right/page.tsx",
                                lineNumber: 44,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/Right/page.tsx",
                        lineNumber: 40,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lg:hidden flex items-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setMenuOpen(!menuOpen),
                            className: "text-gray-800 focus:outline-none",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                stroke: "currentColor",
                                className: "w-8 h-8",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: "2",
                                    d: "M4 6h16M4 12h16M4 18h16"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/Right/page.tsx",
                                    lineNumber: 68,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/Right/page.tsx",
                                lineNumber: 61,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/Right/page.tsx",
                            lineNumber: 56,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/Right/page.tsx",
                        lineNumber: 55,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/Right/page.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, this),
            menuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "lg:hidden bg-gray-50 shadow-md space-x-4 p-4",
                children: navItems.filter((item)=>item !== activeComponent) // Filter out the active link
                .map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "cursor-pointer text-sky-600 hover:text-green-600 transition duration-200",
                        onClick: ()=>{
                            setActiveComponent(item);
                            setMenuOpen(false); // Close the menu after selection
                        },
                        children: item
                    }, item, false, {
                        fileName: "[project]/src/app/components/Right/page.tsx",
                        lineNumber: 85,
                        columnNumber: 15
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/components/Right/page.tsx",
                lineNumber: 81,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-4",
                children: [
                    activeComponent === "About" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Main$2f$about$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/src/app/components/Right/page.tsx",
                        lineNumber: 101,
                        columnNumber: 41
                    }, this),
                    activeComponent === "Projects" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Main$2f$projects$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/src/app/components/Right/page.tsx",
                        lineNumber: 102,
                        columnNumber: 44
                    }, this),
                    activeComponent === "Resume" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Main$2f$resume$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/src/app/components/Right/page.tsx",
                        lineNumber: 103,
                        columnNumber: 42
                    }, this),
                    activeComponent === "Contact" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Main$2f$contact$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/src/app/components/Right/page.tsx",
                        lineNumber: 104,
                        columnNumber: 43
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/Right/page.tsx",
                lineNumber: 100,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/Right/page.tsx",
        lineNumber: 31,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = RightWithNavbar;
}}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
const mod = __turbopack_external_require__("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}}),
"[project]/src/app/animations/welcome.json (json)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_export_value__(JSON.parse("{\"v\":\"5.5.9\",\"fr\":60,\"ip\":0,\"op\":600,\"w\":4096,\"h\":3112,\"nm\":\"MF - Title 02\",\"ddd\":0,\"assets\":[{\"id\":\"comp_0\",\"layers\":[{\"ddd\":0,\"ind\":1,\"ty\":4,\"nm\":\"Setting\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[2048,1556,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"ef\":[{\"ty\":5,\"nm\":\"MF - Title 01\",\"np\":10,\"mn\":\"Pseudo/KEAnae8ef7d9E\",\"ix\":1,\"en\":1,\"ef\":[{\"ty\":2,\"nm\":\"Color 1\",\"mn\":\"Pseudo/KEAnae8ef7d9E-0001\",\"ix\":1,\"v\":{\"a\":0,\"k\":[0.066666666667,0.066666666667,0.066666666667,1],\"ix\":1}},{\"ty\":2,\"nm\":\"Color 2\",\"mn\":\"Pseudo/KEAnae8ef7d9E-0002\",\"ix\":2,\"v\":{\"a\":0,\"k\":[0.243845492601,0.210239604115,0.804764688015,1],\"ix\":2}},{\"ty\":2,\"nm\":\"Color 3\",\"mn\":\"Pseudo/KEAnae8ef7d9E-0003\",\"ix\":3,\"v\":{\"a\":0,\"k\":[0,0.843137254902,0.952941176471,1],\"ix\":3}},{\"ty\":2,\"nm\":\"Color 4\",\"mn\":\"Pseudo/KEAnae8ef7d9E-0004\",\"ix\":4,\"v\":{\"a\":0,\"k\":[0,0,0,1],\"ix\":4}},{\"ty\":2,\"nm\":\"Color 5\",\"mn\":\"Pseudo/KEAnae8ef7d9E-0005\",\"ix\":5,\"v\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":5}},{\"ty\":7,\"nm\":\"Background\",\"mn\":\"Pseudo/KEAnae8ef7d9E-0006\",\"ix\":6,\"v\":{\"a\":0,\"k\":1,\"ix\":6}},{\"ty\":6,\"nm\":\"www.pixflow.net\",\"mn\":\"Pseudo/KEAnae8ef7d9E-0007\",\"ix\":7,\"v\":0},{\"ty\":6,\"nm\":\"\",\"mn\":\"Pseudo/KEAnae8ef7d9E-0008\",\"ix\":8,\"v\":0}]}],\"shapes\":[],\"ip\":0,\"op\":600.600600600601,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":2,\"ty\":4,\"nm\":\"Triangle 8 Outlines 3\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.05,\"y\":1},\"o\":{\"x\":0.55,\"y\":0},\"t\":56.056,\"s\":[2048,1556,0],\"to\":[50.015,50.291,0],\"ti\":[-50.015,-50.291,0]},{\"t\":110.110739645896,\"s\":[2348.09,1857.745,0]}],\"ix\":2},\"a\":{\"a\":0,\"k\":[150.34,150.316,0],\"ix\":1},\"s\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.05,0.05,0.05],\"y\":[1,1,1]},\"o\":{\"x\":[0.55,0.55,0.55],\"y\":[0,0,0]},\"t\":8.007,\"s\":[0,0,100]},{\"t\":48.0482396458959,\"s\":[100,100,100]}],\"ix\":6}},\"ao\":0,\"hasMask\":true,\"masksProperties\":[{\"inv\":false,\"mode\":\"a\",\"pt\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.05,\"y\":1},\"o\":{\"x\":0.55,\"y\":0},\"t\":56.056,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[300.34,-1.684],[-2.66,-1.684],[-2.66,300.316],[300.34,300.316]],\"c\":true}]},{\"t\":110.110739645896,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[0.34,-302.684],[-302.66,-302.684],[-302.66,-0.684],[0.34,-0.684]],\"c\":true}]}],\"ix\":1},\"o\":{\"a\":0,\"k\":100,\"ix\":3},\"x\":{\"a\":0,\"k\":0,\"ix\":4},\"nm\":\"Mask 1\"}],\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[-150.09,150.065],[150.09,150.065],[149.745,-151.745],[-150.09,-150.066]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0,0.258823529412,0.952941176471,1],\"ix\":4,\"x\":\"var $bm_rt;\\n$bm_rt = thisComp.layer('Setting').effect('MF - Title 01')('Pseudo/KEAnae8ef7d9E-0002');\"},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[150.34,150.316],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 1\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":600.600600600601,\"st\":-104.104104104104,\"bm\":0},{\"ddd\":0,\"ind\":3,\"ty\":4,\"nm\":\"Triangle 8 Outlines 2\",\"sr\":1,\"ks\":{\"o\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.43],\"y\":[1]},\"o\":{\"x\":[0.95],\"y\":[0]},\"t\":182.183,\"s\":[100]},{\"t\":264.265036520896,\"s\":[0]}],\"ix\":11,\"x\":\"var $bm_rt;\\n$bm_rt = loopOut('pingpong');\"},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.05,\"y\":1},\"o\":{\"x\":0.55,\"y\":0},\"t\":120.121,\"s\":[2048,1556,0],\"to\":[-168,-88.417,0],\"ti\":[0,0,0]},{\"i\":{\"x\":0.05,\"y\":0.05},\"o\":{\"x\":0.55,\"y\":0.55},\"t\":174.173,\"s\":[1040,1025.5,0],\"to\":[0,0,0],\"ti\":[0,0,0]},{\"i\":{\"x\":0.05,\"y\":1},\"o\":{\"x\":0.55,\"y\":0},\"t\":484.484,\"s\":[1040,1025.5,0],\"to\":[0,0,0],\"ti\":[0,0,0]},{\"t\":546.546286520896,\"s\":[884,881.5,0]}],\"ix\":2},\"a\":{\"a\":0,\"k\":[150.34,150.316,0],\"ix\":1},\"s\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.05,0.05,0.05],\"y\":[1,1,1]},\"o\":{\"x\":[0.55,0.55,0.55],\"y\":[0,0,0]},\"t\":120.121,\"s\":[100,100,100]},{\"t\":174.173239645896,\"s\":[32,32,100]}],\"ix\":6}},\"ao\":0,\"hasMask\":true,\"masksProperties\":[{\"inv\":true,\"mode\":\"a\",\"pt\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.05,\"y\":1},\"o\":{\"x\":0.55,\"y\":0},\"t\":484.484,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[156.59,-598.122],[-593.41,-598.122],[-593.41,-60.622],[156.59,-60.622]],\"c\":true}]},{\"t\":546.546286520896,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[600.34,-148.122],[-149.66,-148.122],[-149.66,389.378],[600.34,389.378]],\"c\":true}]}],\"ix\":1},\"o\":{\"a\":0,\"k\":100,\"ix\":3},\"x\":{\"a\":0,\"k\":0,\"ix\":4},\"nm\":\"Mask 1\"}],\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0]],\"v\":[[-150.09,150.065],[150.09,150.065],[-150.09,-150.066]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.067000003889,0.067000003889,0.067000003889,1],\"ix\":4,\"x\":\"var $bm_rt;\\n$bm_rt = thisComp.layer('Setting').effect('MF - Title 01')('Pseudo/KEAnae8ef7d9E-0004');\"},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[150.34,150.316],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 1\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":40.04004004004,\"op\":600.600600600601,\"st\":-104.104104104104,\"bm\":0},{\"ddd\":0,\"ind\":4,\"ty\":4,\"nm\":\"Dots Outlines 4\",\"sr\":1,\"ks\":{\"o\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.43],\"y\":[1]},\"o\":{\"x\":[0.95],\"y\":[0]},\"t\":218.218,\"s\":[100]},{\"t\":300.300192770896,\"s\":[0]}],\"ix\":11,\"x\":\"var $bm_rt;\\n$bm_rt = loopOut('pingpong');\"},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.05,\"y\":1},\"o\":{\"x\":0.55,\"y\":0},\"t\":54.054,\"s\":[2347.329,1854.651,0],\"to\":[0,0,0],\"ti\":[0,0,0]},{\"i\":{\"x\":0.05,\"y\":0.05},\"o\":{\"x\":0.55,\"y\":0.55},\"t\":108.109,\"s\":[2048,1556,0],\"to\":[0,0,0],\"ti\":[0,0,0]},{\"i\":{\"x\":0.05,\"y\":1},\"o\":{\"x\":0.55,\"y\":0},\"t\":120.121,\"s\":[2048,1556,0],\"to\":[0,0,0],\"ti\":[-0.112,-0.225,0]},{\"t\":174.173,\"s\":[2877.5,1954,0],\"h\":1},{\"i\":{\"x\":0.05,\"y\":1},\"o\":{\"x\":0.55,\"y\":0},\"t\":484.484,\"s\":[2877.5,1954,0],\"to\":[0,0,0],\"ti\":[0,0,0]},{\"t\":546.546286520896,\"s\":[3165.5,2210,0]}],\"ix\":2},\"a\":{\"a\":0,\"k\":[142.469,141.823,0],\"ix\":1},\"s\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.05,0.05,0.05],\"y\":[1,1,1]},\"o\":{\"x\":[0.95,0.95,0.95],\"y\":[0,0,0]},\"t\":108.109,\"s\":[105,105,100]},{\"i\":{\"x\":[0.05,0.05,0.05],\"y\":[1,1,1]},\"o\":{\"x\":[0.55,0.55,0.55],\"y\":[0,0,0]},\"t\":120.121,\"s\":[105,105,100]},{\"t\":174.173239645896,\"s\":[100,100,100]}],\"ix\":6}},\"ao\":0,\"hasMask\":true,\"masksProperties\":[{\"inv\":false,\"mode\":\"a\",\"pt\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.05,\"y\":1},\"o\":{\"x\":0.55,\"y\":0},\"t\":54.054,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[2.245,-290.256],[-288.321,-290.256],[-288.321,0.25],[2.245,0.25]],\"c\":true}]},{\"t\":108.108786520896,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[287.007,-4.542],[-3.56,-4.542],[-3.56,285.964],[287.007,285.964]],\"c\":true}]}],\"ix\":1},\"o\":{\"a\":0,\"k\":100,\"ix\":3},\"x\":{\"a\":0,\"k\":0,\"ix\":4},\"nm\":\"Mask 1\"},{\"inv\":false,\"mode\":\"s\",\"pt\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.05,\"y\":1},\"o\":{\"x\":0.55,\"y\":0},\"t\":484.484,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[638.969,321.823],[-13.031,321.823],[-13.031,715.823],[638.969,715.823]],\"c\":true}]},{\"t\":544.544333395896,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[542.969,-26.177],[-109.031,-26.177],[-109.031,367.823],[542.969,367.823]],\"c\":true}]}],\"ix\":1},\"o\":{\"a\":0,\"k\":100,\"ix\":3},\"x\":{\"a\":0,\"k\":0,\"ix\":4},\"nm\":\"Mask 2\"}],\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[-92.889,-71.26],[-75.882,-71.26],[-75.882,-88.365],[-92.889,-88.365]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":1,\"ty\":\"sh\",\"ix\":2,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[37.893,35.156],[54.998,35.156],[54.998,18.052],[37.893,18.052]],\"c\":true},\"ix\":2},\"nm\":\"Path 2\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":2,\"ty\":\"sh\",\"ix\":3,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[81.452,88.365],[98.557,88.365],[98.557,71.259],[81.452,71.259]],\"c\":true},\"ix\":2},\"nm\":\"Path 3\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":3,\"ty\":\"sh\",\"ix\":4,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[125.114,141.573],[142.219,141.573],[142.219,124.467],[125.114,124.467]],\"c\":true},\"ix\":2},\"nm\":\"Path 4\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":4,\"ty\":\"sh\",\"ix\":5,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[125.114,88.365],[142.219,88.365],[142.219,71.259],[125.114,71.259]],\"c\":true},\"ix\":2},\"nm\":\"Path 5\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":5,\"ty\":\"sh\",\"ix\":6,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[81.452,35.156],[98.557,35.156],[98.557,18.052],[81.452,18.052]],\"c\":true},\"ix\":2},\"nm\":\"Path 6\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":6,\"ty\":\"sh\",\"ix\":7,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[125.114,35.156],[142.219,35.156],[142.219,18.052],[125.114,18.052]],\"c\":true},\"ix\":2},\"nm\":\"Path 7\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":7,\"ty\":\"sh\",\"ix\":8,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[-49.329,-18.051],[-32.224,-18.051],[-32.224,-35.156],[-49.329,-35.156]],\"c\":true},\"ix\":2},\"nm\":\"Path 8\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":8,\"ty\":\"sh\",\"ix\":9,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[-5.668,-18.051],[11.338,-18.051],[11.338,-35.156],[-5.668,-35.156]],\"c\":true},\"ix\":2},\"nm\":\"Path 9\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":9,\"ty\":\"sh\",\"ix\":10,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[37.893,-18.051],[54.998,-18.051],[54.998,-35.156],[37.893,-35.156]],\"c\":true},\"ix\":2},\"nm\":\"Path 10\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":10,\"ty\":\"sh\",\"ix\":11,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[81.452,-18.051],[98.557,-18.051],[98.557,-35.156],[81.452,-35.156]],\"c\":true},\"ix\":2},\"nm\":\"Path 11\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":11,\"ty\":\"sh\",\"ix\":12,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[125.114,-18.051],[142.219,-18.051],[142.219,-35.156],[125.114,-35.156]],\"c\":true},\"ix\":2},\"nm\":\"Path 12\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":12,\"ty\":\"sh\",\"ix\":13,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[-49.329,-71.26],[-32.224,-71.26],[-32.224,-88.365],[-49.329,-88.365]],\"c\":true},\"ix\":2},\"nm\":\"Path 13\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":13,\"ty\":\"sh\",\"ix\":14,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[-5.668,-71.26],[11.338,-71.26],[11.338,-88.365],[-5.668,-88.365]],\"c\":true},\"ix\":2},\"nm\":\"Path 14\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":14,\"ty\":\"sh\",\"ix\":15,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[37.893,-71.26],[54.998,-71.26],[54.998,-88.365],[37.893,-88.365]],\"c\":true},\"ix\":2},\"nm\":\"Path 15\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":15,\"ty\":\"sh\",\"ix\":16,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[81.452,-71.26],[98.557,-71.26],[98.557,-88.365],[81.452,-88.365]],\"c\":true},\"ix\":2},\"nm\":\"Path 16\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":16,\"ty\":\"sh\",\"ix\":17,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[125.114,-71.26],[142.219,-71.26],[142.219,-88.365],[125.114,-88.365]],\"c\":true},\"ix\":2},\"nm\":\"Path 17\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":17,\"ty\":\"sh\",\"ix\":18,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[-142.219,-124.467],[-125.113,-124.467],[-125.113,-141.573],[-142.219,-141.573]],\"c\":true},\"ix\":2},\"nm\":\"Path 18\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":18,\"ty\":\"sh\",\"ix\":19,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[-92.889,-124.467],[-75.882,-124.467],[-75.882,-141.573],[-92.889,-141.573]],\"c\":true},\"ix\":2},\"nm\":\"Path 19\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":19,\"ty\":\"sh\",\"ix\":20,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[-49.329,-124.467],[-32.224,-124.467],[-32.224,-141.573],[-49.329,-141.573]],\"c\":true},\"ix\":2},\"nm\":\"Path 20\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":20,\"ty\":\"sh\",\"ix\":21,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[-5.668,-124.467],[11.338,-124.467],[11.338,-141.573],[-5.668,-141.573]],\"c\":true},\"ix\":2},\"nm\":\"Path 21\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":21,\"ty\":\"sh\",\"ix\":22,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[37.893,-124.467],[54.998,-124.467],[54.998,-141.573],[37.893,-141.573]],\"c\":true},\"ix\":2},\"nm\":\"Path 22\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":22,\"ty\":\"sh\",\"ix\":23,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[81.452,-124.467],[98.557,-124.467],[98.557,-141.573],[81.452,-141.573]],\"c\":true},\"ix\":2},\"nm\":\"Path 23\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":23,\"ty\":\"sh\",\"ix\":24,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[125.114,-124.467],[142.219,-124.467],[142.219,-141.573],[125.114,-141.573]],\"c\":true},\"ix\":2},\"nm\":\"Path 24\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"mm\",\"mm\":1,\"nm\":\"Merge Paths 1\",\"mn\":\"ADBE Vector Filter - Merge\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0,0.258999992819,0.952999997606,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[142.469,141.823],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 1\",\"np\":26,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":40.04004004004,\"op\":600.600600600601,\"st\":-104.104104104104,\"bm\":0},{\"ddd\":0,\"ind\":5,\"ty\":4,\"nm\":\"Move Text\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.05,\"y\":1},\"o\":{\"x\":0.55,\"y\":0},\"t\":158.158,\"s\":[2074.558,1885.067,0],\"to\":[0,-49.333,0],\"ti\":[0,49.333,0]},{\"t\":188.188,\"s\":[2074.558,1589.067,0],\"h\":1},{\"i\":{\"x\":0.05,\"y\":1},\"o\":{\"x\":0.55,\"y\":0},\"t\":492.492,\"s\":[2074.558,1589.067,0],\"to\":[0,-49.333,0],\"ti\":[0,49.333,0]},{\"t\":528.529296875,\"s\":[2074.558,1885.067,0]}],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[],\"ip\":0,\"op\":600.600600600601,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":6,\"ty\":5,\"nm\":\"Text 01\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[2074.558,1885.067,0],\"ix\":2,\"x\":\"var $bm_rt;\\n$bm_rt = thisComp.layer('Move Text').transform.position;\"},\"a\":{\"a\":0,\"k\":[-7.238,-89.916,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"hasMask\":true,\"masksProperties\":[{\"inv\":false,\"mode\":\"a\",\"pt\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.05,\"y\":1},\"o\":{\"x\":0.55,\"y\":0},\"t\":158.158,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[2136.693,-587.053],[-2125.473,-587.053],[-2125.473,-263.114],[2136.693,-263.114]],\"c\":true}]},{\"i\":{\"x\":0.05,\"y\":1},\"o\":{\"x\":0.167,\"y\":0},\"t\":188.188,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[2136.693,-263.114],[-2125.473,-263.114],[-2125.473,60.825],[2136.693,60.825]],\"c\":true}]},{\"i\":{\"x\":0.05,\"y\":1},\"o\":{\"x\":0.55,\"y\":0},\"t\":492.492,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[2136.693,-263.114],[-2125.473,-263.114],[-2125.473,60.825],[2136.693,60.825]],\"c\":true}]},{\"t\":528.529296875,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[2136.693,-587.053],[-2125.473,-587.053],[-2125.473,-263.114],[2136.693,-263.114]],\"c\":true}]}],\"ix\":1},\"o\":{\"a\":0,\"k\":100,\"ix\":3},\"x\":{\"a\":0,\"k\":0,\"ix\":4},\"nm\":\"Mask 1\"}],\"t\":{\"d\":{\"k\":[{\"s\":{\"s\":254,\"f\":\"Poppins-ExtraBold\",\"t\":\"WELCOME\",\"j\":2,\"tr\":-25,\"lh\":304.8,\"ls\":0,\"fc\":[0.067,0.067,0.067]},\"t\":0}]},\"p\":{},\"m\":{\"g\":1,\"a\":{\"a\":0,\"k\":[0,0],\"ix\":2}},\"a\":[{\"nm\":\"Animator 1\",\"s\":{\"t\":0,\"xe\":{\"k\":0},\"ne\":{\"k\":0},\"a\":{\"k\":100},\"b\":0,\"sh\":0,\"s\":{\"k\":0},\"e\":{\"k\":100},\"o\":{\"k\":0}},\"a\":{\"t\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0],\"y\":[1]},\"o\":{\"x\":[0.769],\"y\":[0]},\"t\":186.186,\"s\":[10]},{\"t\":216.217,\"s\":[0],\"h\":1},{\"i\":{\"x\":[0.05],\"y\":[1]},\"o\":{\"x\":[0.55],\"y\":[0]},\"t\":472.473,\"s\":[0]},{\"t\":506.505859375,\"s\":[10]}],\"ix\":89}}},{\"nm\":\"Animator 2\",\"s\":{\"t\":0,\"xe\":{\"k\":0},\"ne\":{\"k\":0},\"a\":{\"k\":100},\"b\":0,\"sh\":0,\"s\":{\"k\":0},\"e\":{\"k\":100},\"o\":{\"k\":0}},\"a\":{\"fc\":{\"a\":0,\"k\":[1,0,0,1],\"ix\":12,\"x\":\"var $bm_rt;\\n$bm_rt = thisComp.layer('Setting').effect('MF - Title 01')('Pseudo/KEAnae8ef7d9E-0001');\"}}}]},\"ip\":104.104104104104,\"op\":600.600600600601,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":7,\"ty\":4,\"nm\":\"Dots Outlines 3\",\"sr\":1,\"ks\":{\"o\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.43],\"y\":[1]},\"o\":{\"x\":[0.95],\"y\":[0]},\"t\":108.107,\"s\":[100]},{\"t\":204.205078125,\"s\":[0]}],\"ix\":11,\"x\":\"var $bm_rt;\\n$bm_rt = loopOut('pingpong');\"},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.05,\"y\":1},\"o\":{\"x\":0.55,\"y\":0},\"t\":134.135,\"s\":[1066.886,2266.576,0],\"to\":[48.53,-52.17,0],\"ti\":[-48.53,52.17,0]},{\"t\":176.176,\"s\":[1358.068,1953.556,0],\"h\":1},{\"i\":{\"x\":0.05,\"y\":1},\"o\":{\"x\":0.55,\"y\":0},\"t\":498.498,\"s\":[1358.068,1953.556,0],\"to\":[0,0,0],\"ti\":[-48.53,52.17,0]},{\"t\":554.5546875,\"s\":[1066.886,2266.576,0]}],\"ix\":2},\"a\":{\"a\":0,\"k\":[141.823,142.469,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"hasMask\":true,\"masksProperties\":[{\"inv\":true,\"mode\":\"a\",\"pt\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.05,\"y\":1},\"o\":{\"x\":0.55,\"y\":0},\"t\":134.135,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[634.483,-14.253],[-495.517,-14.253],[-495.517,455.747],[634.483,455.747]],\"c\":true}]},{\"t\":176.176,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[898.483,307.747],[-231.517,307.747],[-231.517,777.747],[898.483,777.747]],\"c\":true}],\"h\":1},{\"i\":{\"x\":0.05,\"y\":1},\"o\":{\"x\":0.55,\"y\":0},\"t\":498.498,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[898.483,307.747],[-231.517,307.747],[-231.517,777.747],[898.483,777.747]],\"c\":true}]},{\"t\":554.5546875,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[634.483,-14.253],[-495.517,-14.253],[-495.517,455.747],[634.483,455.747]],\"c\":true}]}],\"ix\":1},\"o\":{\"a\":0,\"k\":100,\"ix\":3},\"x\":{\"a\":0,\"k\":0,\"ix\":4},\"nm\":\"Mask 1\"}],\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[-88.365,92.89],[-71.259,92.89],[-71.259,75.883],[-88.365,75.883]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":1,\"ty\":\"sh\",\"ix\":2,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[18.052,-37.892],[35.157,-37.892],[35.157,-54.997],[18.052,-54.997]],\"c\":true},\"ix\":2},\"nm\":\"Path 2\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":2,\"ty\":\"sh\",\"ix\":3,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[71.26,-81.452],[88.365,-81.452],[88.365,-98.558],[71.26,-98.558]],\"c\":true},\"ix\":2},\"nm\":\"Path 3\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":3,\"ty\":\"sh\",\"ix\":4,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[124.467,-125.113],[141.573,-125.113],[141.573,-142.219],[124.467,-142.219]],\"c\":true},\"ix\":2},\"nm\":\"Path 4\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":4,\"ty\":\"sh\",\"ix\":5,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0]],\"o\":[[0,0]],\"v\":[[124.467,-142.219]],\"c\":false},\"ix\":2},\"nm\":\"Path 5\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":5,\"ty\":\"sh\",\"ix\":6,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[71.26,-125.113],[88.365,-125.113],[88.365,-142.219],[71.26,-142.219]],\"c\":true},\"ix\":2},\"nm\":\"Path 6\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":6,\"ty\":\"sh\",\"ix\":7,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[18.052,-81.452],[35.157,-81.452],[35.157,-98.558],[18.052,-98.558]],\"c\":true},\"ix\":2},\"nm\":\"Path 7\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":7,\"ty\":\"sh\",\"ix\":8,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[18.052,-125.113],[35.157,-125.113],[35.157,-142.219],[18.052,-142.219]],\"c\":true},\"ix\":2},\"nm\":\"Path 8\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":8,\"ty\":\"sh\",\"ix\":9,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[-35.156,49.329],[-18.051,49.329],[-18.051,32.224],[-35.156,32.224]],\"c\":true},\"ix\":2},\"nm\":\"Path 9\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":9,\"ty\":\"sh\",\"ix\":10,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[-35.156,5.669],[-18.051,5.669],[-18.051,-11.337],[-35.156,-11.337]],\"c\":true},\"ix\":2},\"nm\":\"Path 10\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":10,\"ty\":\"sh\",\"ix\":11,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[-35.156,-37.892],[-18.051,-37.892],[-18.051,-54.997],[-35.156,-54.997]],\"c\":true},\"ix\":2},\"nm\":\"Path 11\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":11,\"ty\":\"sh\",\"ix\":12,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[-35.156,-81.452],[-18.051,-81.452],[-18.051,-98.558],[-35.156,-98.558]],\"c\":true},\"ix\":2},\"nm\":\"Path 12\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":12,\"ty\":\"sh\",\"ix\":13,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[-35.156,-125.113],[-18.051,-125.113],[-18.051,-142.219],[-35.156,-142.219]],\"c\":true},\"ix\":2},\"nm\":\"Path 13\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":13,\"ty\":\"sh\",\"ix\":14,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[-88.365,49.329],[-71.259,49.329],[-71.259,32.224],[-88.365,32.224]],\"c\":true},\"ix\":2},\"nm\":\"Path 14\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":14,\"ty\":\"sh\",\"ix\":15,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[-88.365,5.669],[-71.259,5.669],[-71.259,-11.337],[-88.365,-11.337]],\"c\":true},\"ix\":2},\"nm\":\"Path 15\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":15,\"ty\":\"sh\",\"ix\":16,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[-88.365,-37.892],[-71.259,-37.892],[-71.259,-54.997],[-88.365,-54.997]],\"c\":true},\"ix\":2},\"nm\":\"Path 16\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":16,\"ty\":\"sh\",\"ix\":17,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[-88.365,-81.452],[-71.259,-81.452],[-71.259,-98.558],[-88.365,-98.558]],\"c\":true},\"ix\":2},\"nm\":\"Path 17\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":17,\"ty\":\"sh\",\"ix\":18,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[-88.365,-125.113],[-71.259,-125.113],[-71.259,-142.219],[-88.365,-142.219]],\"c\":true},\"ix\":2},\"nm\":\"Path 18\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":18,\"ty\":\"sh\",\"ix\":19,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[-141.573,142.219],[-124.467,142.219],[-124.467,125.113],[-141.573,125.113]],\"c\":true},\"ix\":2},\"nm\":\"Path 19\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":19,\"ty\":\"sh\",\"ix\":20,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[-141.573,92.89],[-124.467,92.89],[-124.467,75.883],[-141.573,75.883]],\"c\":true},\"ix\":2},\"nm\":\"Path 20\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":20,\"ty\":\"sh\",\"ix\":21,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[-141.573,49.329],[-124.467,49.329],[-124.467,32.224],[-141.573,32.224]],\"c\":true},\"ix\":2},\"nm\":\"Path 21\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":21,\"ty\":\"sh\",\"ix\":22,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[-141.573,5.669],[-124.467,5.669],[-124.467,-11.337],[-141.573,-11.337]],\"c\":true},\"ix\":2},\"nm\":\"Path 22\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":22,\"ty\":\"sh\",\"ix\":23,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[-141.573,-37.892],[-124.467,-37.892],[-124.467,-54.997],[-141.573,-54.997]],\"c\":true},\"ix\":2},\"nm\":\"Path 23\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":23,\"ty\":\"sh\",\"ix\":24,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[-141.573,-81.452],[-124.467,-81.452],[-124.467,-98.558],[-141.573,-98.558]],\"c\":true},\"ix\":2},\"nm\":\"Path 24\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":24,\"ty\":\"sh\",\"ix\":25,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[-141.573,-125.113],[-124.467,-125.113],[-124.467,-142.219],[-141.573,-142.219]],\"c\":true},\"ix\":2},\"nm\":\"Path 25\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"mm\",\"mm\":1,\"nm\":\"Merge Paths 1\",\"mn\":\"ADBE Vector Filter - Merge\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.067000003889,0.067000003889,0.067000003889,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[141.823,142.469],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 1\",\"np\":27,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":104.104104104104,\"op\":600.600600600601,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":8,\"ty\":4,\"nm\":\"Dots Outlines\",\"sr\":1,\"ks\":{\"o\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.43],\"y\":[1]},\"o\":{\"x\":[0.95],\"y\":[0]},\"t\":124.125,\"s\":[100]},{\"t\":228.228515625,\"s\":[0]}],\"ix\":11,\"x\":\"var $bm_rt;\\n$bm_rt = loopOut('pingpong');\"},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.05,\"y\":1},\"o\":{\"x\":0.55,\"y\":0},\"t\":126.127,\"s\":[2194.131,1510.163,0],\"to\":[45.497,-45.497,0],\"ti\":[-45.497,45.497,0]},{\"t\":168.168,\"s\":[2467.114,1237.18,0],\"h\":1},{\"i\":{\"x\":0.05,\"y\":1},\"o\":{\"x\":0.55,\"y\":0},\"t\":502.502,\"s\":[2467.114,1237.18,0],\"to\":[0,0,0],\"ti\":[-45.497,45.497,0]},{\"t\":558.55859375,\"s\":[2194.131,1510.163,0]}],\"ix\":2},\"a\":{\"a\":0,\"k\":[141.823,142.469,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"hasMask\":true,\"masksProperties\":[{\"inv\":true,\"mode\":\"a\",\"pt\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.05,\"y\":1},\"o\":{\"x\":0.55,\"y\":0},\"t\":126.127,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[634.483,-14.253],[-495.517,-14.253],[-495.517,455.747],[634.483,455.747]],\"c\":true}]},{\"t\":168.168,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[898.483,307.747],[-231.517,307.747],[-231.517,777.747],[898.483,777.747]],\"c\":true}],\"h\":1},{\"i\":{\"x\":0.05,\"y\":1},\"o\":{\"x\":0.55,\"y\":0},\"t\":502.502,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[898.483,307.747],[-231.517,307.747],[-231.517,777.747],[898.483,777.747]],\"c\":true}]},{\"t\":558.55859375,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[634.483,-14.253],[-495.517,-14.253],[-495.517,455.747],[634.483,455.747]],\"c\":true}]}],\"ix\":1},\"o\":{\"a\":0,\"k\":100,\"ix\":3},\"x\":{\"a\":0,\"k\":0,\"ix\":4},\"nm\":\"Mask 1\"}],\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[-88.365,92.89],[-71.26,92.89],[-71.26,75.884],[-88.365,75.884]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":1,\"ty\":\"sh\",\"ix\":2,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[18.051,-37.892],[35.156,-37.892],[35.156,-54.998],[18.051,-54.998]],\"c\":true},\"ix\":2},\"nm\":\"Path 2\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":2,\"ty\":\"sh\",\"ix\":3,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[71.259,-81.452],[88.365,-81.452],[88.365,-98.558],[71.259,-98.558]],\"c\":true},\"ix\":2},\"nm\":\"Path 3\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":3,\"ty\":\"sh\",\"ix\":4,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[124.467,-125.113],[141.573,-125.113],[141.573,-142.219],[124.467,-142.219]],\"c\":true},\"ix\":2},\"nm\":\"Path 4\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":4,\"ty\":\"sh\",\"ix\":5,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0]],\"o\":[[0,0]],\"v\":[[124.467,-142.219]],\"c\":false},\"ix\":2},\"nm\":\"Path 5\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":5,\"ty\":\"sh\",\"ix\":6,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[71.259,-125.113],[88.365,-125.113],[88.365,-142.219],[71.259,-142.219]],\"c\":true},\"ix\":2},\"nm\":\"Path 6\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":6,\"ty\":\"sh\",\"ix\":7,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[18.051,-81.452],[35.156,-81.452],[35.156,-98.558],[18.051,-98.558]],\"c\":true},\"ix\":2},\"nm\":\"Path 7\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":7,\"ty\":\"sh\",\"ix\":8,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[18.051,-125.113],[35.156,-125.113],[35.156,-142.219],[18.051,-142.219]],\"c\":true},\"ix\":2},\"nm\":\"Path 8\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":8,\"ty\":\"sh\",\"ix\":9,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[-35.156,49.329],[-18.052,49.329],[-18.052,32.223],[-35.156,32.223]],\"c\":true},\"ix\":2},\"nm\":\"Path 9\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":9,\"ty\":\"sh\",\"ix\":10,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[-35.156,5.669],[-18.052,5.669],[-18.052,-11.338],[-35.156,-11.338]],\"c\":true},\"ix\":2},\"nm\":\"Path 10\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":10,\"ty\":\"sh\",\"ix\":11,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[-35.156,-37.892],[-18.052,-37.892],[-18.052,-54.998],[-35.156,-54.998]],\"c\":true},\"ix\":2},\"nm\":\"Path 11\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":11,\"ty\":\"sh\",\"ix\":12,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[-35.156,-81.452],[-18.052,-81.452],[-18.052,-98.558],[-35.156,-98.558]],\"c\":true},\"ix\":2},\"nm\":\"Path 12\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":12,\"ty\":\"sh\",\"ix\":13,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[-35.156,-125.113],[-18.052,-125.113],[-18.052,-142.219],[-35.156,-142.219]],\"c\":true},\"ix\":2},\"nm\":\"Path 13\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":13,\"ty\":\"sh\",\"ix\":14,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[-88.365,49.329],[-71.26,49.329],[-71.26,32.223],[-88.365,32.223]],\"c\":true},\"ix\":2},\"nm\":\"Path 14\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":14,\"ty\":\"sh\",\"ix\":15,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[-88.365,5.669],[-71.26,5.669],[-71.26,-11.338],[-88.365,-11.338]],\"c\":true},\"ix\":2},\"nm\":\"Path 15\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":15,\"ty\":\"sh\",\"ix\":16,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[-88.365,-37.892],[-71.26,-37.892],[-71.26,-54.998],[-88.365,-54.998]],\"c\":true},\"ix\":2},\"nm\":\"Path 16\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":16,\"ty\":\"sh\",\"ix\":17,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[-88.365,-81.452],[-71.26,-81.452],[-71.26,-98.558],[-88.365,-98.558]],\"c\":true},\"ix\":2},\"nm\":\"Path 17\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":17,\"ty\":\"sh\",\"ix\":18,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[-88.365,-125.113],[-71.26,-125.113],[-71.26,-142.219],[-88.365,-142.219]],\"c\":true},\"ix\":2},\"nm\":\"Path 18\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":18,\"ty\":\"sh\",\"ix\":19,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[-141.573,142.219],[-124.467,142.219],[-124.467,125.113],[-141.573,125.113]],\"c\":true},\"ix\":2},\"nm\":\"Path 19\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":19,\"ty\":\"sh\",\"ix\":20,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[-141.573,92.89],[-124.467,92.89],[-124.467,75.884],[-141.573,75.884]],\"c\":true},\"ix\":2},\"nm\":\"Path 20\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":20,\"ty\":\"sh\",\"ix\":21,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[-141.573,49.329],[-124.467,49.329],[-124.467,32.223],[-141.573,32.223]],\"c\":true},\"ix\":2},\"nm\":\"Path 21\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":21,\"ty\":\"sh\",\"ix\":22,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[-141.573,5.669],[-124.467,5.669],[-124.467,-11.338],[-141.573,-11.338]],\"c\":true},\"ix\":2},\"nm\":\"Path 22\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":22,\"ty\":\"sh\",\"ix\":23,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[-141.573,-37.892],[-124.467,-37.892],[-124.467,-54.998],[-141.573,-54.998]],\"c\":true},\"ix\":2},\"nm\":\"Path 23\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":23,\"ty\":\"sh\",\"ix\":24,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[-141.573,-81.452],[-124.467,-81.452],[-124.467,-98.558],[-141.573,-98.558]],\"c\":true},\"ix\":2},\"nm\":\"Path 24\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":24,\"ty\":\"sh\",\"ix\":25,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[-141.573,-125.113],[-124.467,-125.113],[-124.467,-142.219],[-141.573,-142.219]],\"c\":true},\"ix\":2},\"nm\":\"Path 25\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"mm\",\"mm\":1,\"nm\":\"Merge Paths 1\",\"mn\":\"ADBE Vector Filter - Merge\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0,0.842999985639,0.976000019148,1],\"ix\":4,\"x\":\"var $bm_rt;\\n$bm_rt = thisComp.layer('Setting').effect('MF - Title 01')('Pseudo/KEAnae8ef7d9E-0003');\"},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[141.823,142.469],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 1\",\"np\":27,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":104.104104104104,\"op\":600.600600600601,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":9,\"ty\":4,\"nm\":\"Triangle 15 Outlines\",\"sr\":1,\"ks\":{\"o\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.43],\"y\":[1]},\"o\":{\"x\":[0.95],\"y\":[0]},\"t\":176.176,\"s\":[100]},{\"t\":258.2578125,\"s\":[0]}],\"ix\":11,\"x\":\"var $bm_rt;\\n$bm_rt = loopOut('pingpong');\"},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.05,\"y\":1},\"o\":{\"x\":0.55,\"y\":0},\"t\":126.127,\"s\":[738.642,1271.662,0],\"to\":[52.333,54,0],\"ti\":[-52.333,-54,0]},{\"t\":182.182,\"s\":[1052.642,1595.662,0],\"h\":1},{\"i\":{\"x\":0.05,\"y\":1},\"o\":{\"x\":0.55,\"y\":0},\"t\":492.492,\"s\":[1052.642,1595.662,0],\"to\":[0,0,0],\"ti\":[-52.333,-54,0]},{\"t\":548.548828125,\"s\":[738.642,1271.662,0]}],\"ix\":2},\"a\":{\"a\":0,\"k\":[148.07,148.093,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"hasMask\":true,\"masksProperties\":[{\"inv\":true,\"mode\":\"a\",\"pt\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.05,\"y\":1},\"o\":{\"x\":0.55,\"y\":0},\"t\":126.127,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[335.428,-39.569],[-54.572,-39.569],[-54.572,302.431],[335.428,302.431]],\"c\":true}]},{\"t\":182.182,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[71.428,-355.569],[-318.572,-355.569],[-318.572,-13.569],[71.428,-13.569]],\"c\":true}],\"h\":1},{\"i\":{\"x\":0.05,\"y\":1},\"o\":{\"x\":0.55,\"y\":0},\"t\":492.492,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[71.428,-355.569],[-318.572,-355.569],[-318.572,-13.569],[71.428,-13.569]],\"c\":true}]},{\"t\":548.548828125,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[335.428,-39.569],[-54.572,-39.569],[-54.572,302.431],[335.428,302.431]],\"c\":true}]}],\"ix\":1},\"o\":{\"a\":0,\"k\":100,\"ix\":3},\"x\":{\"a\":0,\"k\":0,\"ix\":4},\"nm\":\"Mask 1\"}],\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0]],\"v\":[[147.82,147.843],[-147.82,-147.843],[-147.82,147.843]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0,0.258999992819,0.952999997606,1],\"ix\":4,\"x\":\"var $bm_rt;\\n$bm_rt = thisComp.layer('Setting').effect('MF - Title 01')('Pseudo/KEAnae8ef7d9E-0002');\"},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[148.07,148.093],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 1\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":104.104104104104,\"op\":600.600600600601,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":10,\"ty\":4,\"nm\":\"Triangle 13 Outlines\",\"sr\":1,\"ks\":{\"o\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.43],\"y\":[1]},\"o\":{\"x\":[0.95],\"y\":[0]},\"t\":136.137,\"s\":[100]},{\"t\":232.232421875,\"s\":[0]}],\"ix\":11,\"x\":\"var $bm_rt;\\n$bm_rt = loopOut('pingpong');\"},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.05,\"y\":1},\"o\":{\"x\":0.55,\"y\":0},\"t\":142.143,\"s\":[910.555,837.824,0],\"to\":[52.333,54,0],\"ti\":[-52.333,-54,0]},{\"t\":198.197,\"s\":[1224.555,1161.824,0],\"h\":1},{\"i\":{\"x\":0.05,\"y\":1},\"o\":{\"x\":0.55,\"y\":0},\"t\":510.51,\"s\":[1224.555,1161.824,0],\"to\":[0,0,0],\"ti\":[-52.333,-54,0]},{\"t\":566.56640625,\"s\":[910.555,837.824,0]}],\"ix\":2},\"a\":{\"a\":0,\"k\":[60.723,60.714,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"hasMask\":true,\"masksProperties\":[{\"inv\":true,\"mode\":\"a\",\"pt\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.05,\"y\":1},\"o\":{\"x\":0.55,\"y\":0},\"t\":142.143,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[241.428,-197.569],[-148.572,-197.569],[-148.572,144.431],[241.428,144.431]],\"c\":true}]},{\"t\":198.197,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[71.428,-355.569],[-318.572,-355.569],[-318.572,-13.569],[71.428,-13.569]],\"c\":true}],\"h\":1},{\"i\":{\"x\":0.05,\"y\":1},\"o\":{\"x\":0.55,\"y\":0},\"t\":510.51,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[71.428,-355.569],[-318.572,-355.569],[-318.572,-13.569],[71.428,-13.569]],\"c\":true}]},{\"t\":566.56640625,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[241.428,-197.569],[-148.572,-197.569],[-148.572,144.431],[241.428,144.431]],\"c\":true}]}],\"ix\":1},\"o\":{\"a\":0,\"k\":100,\"ix\":3},\"x\":{\"a\":0,\"k\":0,\"ix\":4},\"nm\":\"Mask 1\"}],\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0]],\"v\":[[60.473,-60.464],[-60.473,-60.464],[60.473,60.464]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0,0.842999985639,0.976000019148,1],\"ix\":4,\"x\":\"var $bm_rt;\\n$bm_rt = thisComp.layer('Setting').effect('MF - Title 01')('Pseudo/KEAnae8ef7d9E-0003');\"},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[60.723,60.713],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 1\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":104.104104104104,\"op\":600.600600600601,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":11,\"ty\":4,\"nm\":\"Triangle 12 Outlines\",\"sr\":1,\"ks\":{\"o\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.43],\"y\":[1]},\"o\":{\"x\":[0.95],\"y\":[0]},\"t\":118.117,\"s\":[100]},{\"t\":204.205078125,\"s\":[0]}],\"ix\":11,\"x\":\"var $bm_rt;\\n$bm_rt = loopOut('pingpong');\"},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.05,\"y\":1},\"o\":{\"x\":0.55,\"y\":0},\"t\":134.135,\"s\":[1225.925,913.18,0],\"to\":[52.333,54,0],\"ti\":[-52.333,-54,0]},{\"t\":190.189,\"s\":[1539.925,1237.18,0],\"h\":1},{\"i\":{\"x\":0.05,\"y\":1},\"o\":{\"x\":0.55,\"y\":0},\"t\":492.492,\"s\":[1539.925,1237.18,0],\"to\":[0,0,0],\"ti\":[-52.333,-54,0]},{\"t\":548.548828125,\"s\":[1225.925,913.18,0]}],\"ix\":2},\"a\":{\"a\":0,\"k\":[148.093,148.07,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"hasMask\":true,\"masksProperties\":[{\"inv\":true,\"mode\":\"a\",\"pt\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.05,\"y\":1},\"o\":{\"x\":0.55,\"y\":0},\"t\":134.135,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[854.168,-39.569],[-54.572,-39.569],[-54.572,302.431],[854.168,302.431]],\"c\":true}]},{\"t\":190.189,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[512.168,-355.569],[-318.572,-355.569],[-318.572,-13.569],[512.168,-13.569]],\"c\":true}],\"h\":1},{\"i\":{\"x\":0.05,\"y\":1},\"o\":{\"x\":0.55,\"y\":0},\"t\":492.492,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[512.168,-355.569],[-318.572,-355.569],[-318.572,-13.569],[512.168,-13.569]],\"c\":true}]},{\"t\":548.548828125,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[854.168,-39.569],[-54.572,-39.569],[-54.572,302.431],[854.168,302.431]],\"c\":true}]}],\"ix\":1},\"o\":{\"a\":0,\"k\":100,\"ix\":3},\"x\":{\"a\":0,\"k\":0,\"ix\":4},\"nm\":\"Mask 1\"}],\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0]],\"v\":[[147.843,-147.82],[-147.843,-147.82],[147.843,147.82]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0,0.842999985639,0.976000019148,1],\"ix\":4,\"x\":\"var $bm_rt;\\n$bm_rt = thisComp.layer('Setting').effect('MF - Title 01')('Pseudo/KEAnae8ef7d9E-0003');\"},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[148.093,148.07],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 1\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":104.104104104104,\"op\":600.600600600601,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":12,\"ty\":4,\"nm\":\"Triangle 11 Outlines\",\"sr\":1,\"ks\":{\"o\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.43],\"y\":[1]},\"o\":{\"x\":[0.95],\"y\":[0]},\"t\":144.145,\"s\":[100]},{\"t\":240.240234375,\"s\":[0]}],\"ix\":11,\"x\":\"var $bm_rt;\\n$bm_rt = loopOut('pingpong');\"},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.05,\"y\":1},\"o\":{\"x\":0.55,\"y\":0},\"t\":144.145,\"s\":[2485.587,1584.346,0],\"to\":[-57.333,-58.333,0],\"ti\":[57.333,58.333,0]},{\"t\":186.186,\"s\":[2141.587,1234.346,0],\"h\":1},{\"i\":{\"x\":0.05,\"y\":1},\"o\":{\"x\":0.55,\"y\":0},\"t\":504.504,\"s\":[2141.587,1234.346,0],\"to\":[0,0,0],\"ti\":[57.333,58.333,0]},{\"t\":560.560546875,\"s\":[2485.587,1584.346,0]}],\"ix\":2},\"a\":{\"a\":0,\"k\":[148.07,148.093,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"hasMask\":true,\"masksProperties\":[{\"inv\":true,\"mode\":\"a\",\"pt\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.05,\"y\":1},\"o\":{\"x\":0.55,\"y\":0},\"t\":144.145,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[634.483,-14.253],[-495.517,-14.253],[-495.517,455.747],[634.483,455.747]],\"c\":true}]},{\"t\":186.186,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[898.483,307.747],[-231.517,307.747],[-231.517,777.747],[898.483,777.747]],\"c\":true}],\"h\":1},{\"i\":{\"x\":0.05,\"y\":1},\"o\":{\"x\":0.55,\"y\":0},\"t\":504.504,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[898.483,307.747],[-231.517,307.747],[-231.517,777.747],[898.483,777.747]],\"c\":true}]},{\"t\":560.560546875,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[634.483,-14.253],[-495.517,-14.253],[-495.517,455.747],[634.483,455.747]],\"c\":true}]}],\"ix\":1},\"o\":{\"a\":0,\"k\":100,\"ix\":3},\"x\":{\"a\":0,\"k\":0,\"ix\":4},\"nm\":\"Mask 1\"}],\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0]],\"v\":[[147.82,147.843],[-147.82,-147.843],[-147.82,147.843]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0,0.258999992819,0.952999997606,1],\"ix\":4,\"x\":\"var $bm_rt;\\n$bm_rt = thisComp.layer('Setting').effect('MF - Title 01')('Pseudo/KEAnae8ef7d9E-0002');\"},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[148.07,148.093],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 1\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":104.104104104104,\"op\":600.600600600601,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":13,\"ty\":4,\"nm\":\"Triangle 10 Outlines\",\"sr\":1,\"ks\":{\"o\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.43],\"y\":[1]},\"o\":{\"x\":[0.95],\"y\":[0]},\"t\":132.133,\"s\":[100]},{\"t\":228.228515625,\"s\":[0]}],\"ix\":11,\"x\":\"var $bm_rt;\\n$bm_rt = loopOut('pingpong');\"},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.05,\"y\":1},\"o\":{\"x\":0.55,\"y\":0},\"t\":140.141,\"s\":[1531.925,913.18,0],\"to\":[52.333,54,0],\"ti\":[-52.333,-54,0]},{\"t\":196.195,\"s\":[1845.925,1237.18,0],\"h\":1},{\"i\":{\"x\":0.05,\"y\":1},\"o\":{\"x\":0.55,\"y\":0},\"t\":502.502,\"s\":[1845.925,1237.18,0],\"to\":[0,0,0],\"ti\":[-52.333,-54,0]},{\"t\":558.55859375,\"s\":[1531.925,913.18,0]}],\"ix\":2},\"a\":{\"a\":0,\"k\":[148.093,148.07,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"hasMask\":true,\"masksProperties\":[{\"inv\":true,\"mode\":\"a\",\"pt\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.05,\"y\":1},\"o\":{\"x\":0.55,\"y\":0},\"t\":140.141,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[770.168,-39.569],[-54.572,-39.569],[-54.572,302.431],[770.168,302.431]],\"c\":true}]},{\"t\":196.195,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[540.168,-355.569],[-318.572,-355.569],[-318.572,-13.569],[540.168,-13.569]],\"c\":true}],\"h\":1},{\"i\":{\"x\":0.05,\"y\":1},\"o\":{\"x\":0.55,\"y\":0},\"t\":502.502,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[540.168,-355.569],[-318.572,-355.569],[-318.572,-13.569],[540.168,-13.569]],\"c\":true}]},{\"t\":558.55859375,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[770.168,-39.569],[-54.572,-39.569],[-54.572,302.431],[770.168,302.431]],\"c\":true}]}],\"ix\":1},\"o\":{\"a\":0,\"k\":100,\"ix\":3},\"x\":{\"a\":0,\"k\":0,\"ix\":4},\"nm\":\"Mask 1\"}],\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0]],\"v\":[[147.843,-147.82],[-147.843,-147.82],[147.843,147.82]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0,0.842999985639,0.976000019148,1],\"ix\":4,\"x\":\"var $bm_rt;\\n$bm_rt = thisComp.layer('Setting').effect('MF - Title 01')('Pseudo/KEAnae8ef7d9E-0003');\"},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[148.093,148.07],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 1\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":104.104104104104,\"op\":600.600600600601,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":14,\"ty\":4,\"nm\":\"Triangle 9 Outlines\",\"sr\":1,\"ks\":{\"o\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.43],\"y\":[1]},\"o\":{\"x\":[0.95],\"y\":[0]},\"t\":124.125,\"s\":[100]},{\"t\":234.234375,\"s\":[0]}],\"ix\":11,\"x\":\"var $bm_rt;\\n$bm_rt = loopOut('pingpong');\"},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.05,\"y\":1},\"o\":{\"x\":0.55,\"y\":0},\"t\":118.117,\"s\":[2080.778,570.215,0],\"to\":[52.333,54,0],\"ti\":[-52.333,-54,0]},{\"t\":174.174,\"s\":[2394.778,894.215,0],\"h\":1},{\"i\":{\"x\":0.05,\"y\":1},\"o\":{\"x\":0.55,\"y\":0},\"t\":490.49,\"s\":[2394.778,894.215,0],\"to\":[0,0,0],\"ti\":[-52.333,-54,0]},{\"t\":546.546875,\"s\":[2080.778,570.215,0]}],\"ix\":2},\"a\":{\"a\":0,\"k\":[79.08,79.093,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"hasMask\":true,\"masksProperties\":[{\"inv\":true,\"mode\":\"a\",\"pt\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.05,\"y\":1},\"o\":{\"x\":0.55,\"y\":0},\"t\":118.117,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[335.428,-39.569],[-54.572,-39.569],[-54.572,302.431],[335.428,302.431]],\"c\":true}]},{\"t\":174.174,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[71.428,-355.569],[-318.572,-355.569],[-318.572,-13.569],[71.428,-13.569]],\"c\":true}],\"h\":1},{\"i\":{\"x\":0.05,\"y\":1},\"o\":{\"x\":0.55,\"y\":0},\"t\":490.49,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[71.428,-355.569],[-318.572,-355.569],[-318.572,-13.569],[71.428,-13.569]],\"c\":true}]},{\"t\":546.546875,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[335.428,-39.569],[-54.572,-39.569],[-54.572,302.431],[335.428,302.431]],\"c\":true}]}],\"ix\":1},\"o\":{\"a\":0,\"k\":100,\"ix\":3},\"x\":{\"a\":0,\"k\":0,\"ix\":4},\"nm\":\"Mask 1\"}],\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0]],\"v\":[[78.831,78.843],[-78.831,-78.843],[-78.831,78.843]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0,0.258999992819,0.952999997606,1],\"ix\":4,\"x\":\"var $bm_rt;\\n$bm_rt = thisComp.layer('Setting').effect('MF - Title 01')('Pseudo/KEAnae8ef7d9E-0002');\"},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[79.08,79.093],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 1\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":104.104104104104,\"op\":600.600600600601,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":15,\"ty\":4,\"nm\":\"Triangle 8 Outlines\",\"sr\":1,\"ks\":{\"o\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.43],\"y\":[1]},\"o\":{\"x\":[0.95],\"y\":[0]},\"t\":164.164,\"s\":[100]},{\"t\":248.248046875,\"s\":[0]}],\"ix\":11,\"x\":\"var $bm_rt;\\n$bm_rt = loopOut('pingpong');\"},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.05,\"y\":1},\"o\":{\"x\":0.55,\"y\":0},\"t\":142.143,\"s\":[2480.91,915.426,0],\"to\":[52.333,54,0],\"ti\":[-52.333,-54,0]},{\"t\":198.197,\"s\":[2794.91,1239.426,0],\"h\":1},{\"i\":{\"x\":0.05,\"y\":1},\"o\":{\"x\":0.55,\"y\":0},\"t\":490.49,\"s\":[2794.91,1239.426,0],\"to\":[0,0,0],\"ti\":[-52.333,-54,0]},{\"t\":546.546875,\"s\":[2480.91,915.426,0]}],\"ix\":2},\"a\":{\"a\":0,\"k\":[150.34,150.316,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"hasMask\":true,\"masksProperties\":[{\"inv\":true,\"mode\":\"a\",\"pt\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.05,\"y\":1},\"o\":{\"x\":0.55,\"y\":0},\"t\":142.143,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[335.428,-39.569],[-54.572,-39.569],[-54.572,302.431],[335.428,302.431]],\"c\":true}]},{\"t\":198.197,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[71.428,-355.569],[-318.572,-355.569],[-318.572,-13.569],[71.428,-13.569]],\"c\":true}],\"h\":1},{\"i\":{\"x\":0.05,\"y\":1},\"o\":{\"x\":0.55,\"y\":0},\"t\":490.49,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[71.428,-355.569],[-318.572,-355.569],[-318.572,-13.569],[71.428,-13.569]],\"c\":true}]},{\"t\":546.546875,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[335.428,-39.569],[-54.572,-39.569],[-54.572,302.431],[335.428,302.431]],\"c\":true}]}],\"ix\":1},\"o\":{\"a\":0,\"k\":100,\"ix\":3},\"x\":{\"a\":0,\"k\":0,\"ix\":4},\"nm\":\"Mask 1\"}],\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0]],\"v\":[[-150.09,150.065],[150.09,150.065],[-150.09,-150.066]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0,0.843137323856,0.980392217636,0.843137323856],\"ix\":4,\"x\":\"var $bm_rt;\\n$bm_rt = thisComp.layer('Setting').effect('MF - Title 01')('Pseudo/KEAnae8ef7d9E-0003');\"},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[150.34,150.316],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 1\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":104.104104104104,\"op\":600.600600600601,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":16,\"ty\":4,\"nm\":\"Triangle 7 Outlines\",\"sr\":1,\"ks\":{\"o\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.43],\"y\":[1]},\"o\":{\"x\":[0.95],\"y\":[0]},\"t\":138.139,\"s\":[100]},{\"t\":234.234375,\"s\":[0]}],\"ix\":11,\"x\":\"var $bm_rt;\\n$bm_rt = loopOut('pingpong');\"},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.05,\"y\":1},\"o\":{\"x\":0.55,\"y\":0},\"t\":156.156,\"s\":[3021.889,1421.261,0],\"to\":[38,-40.333,0],\"ti\":[-38,40.333,0]},{\"t\":198.197,\"s\":[3249.889,1179.261,0],\"h\":1},{\"i\":{\"x\":0.05,\"y\":1},\"o\":{\"x\":0.55,\"y\":0},\"t\":498.498,\"s\":[3249.889,1179.261,0],\"to\":[0,0,0],\"ti\":[-38,40.333,0]},{\"t\":554.5546875,\"s\":[3021.889,1421.261,0]}],\"ix\":2},\"a\":{\"a\":0,\"k\":[78.138,78.151,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"hasMask\":true,\"masksProperties\":[{\"inv\":true,\"mode\":\"a\",\"pt\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.05,\"y\":1},\"o\":{\"x\":0.55,\"y\":0},\"t\":156.156,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[634.483,-14.253],[-495.517,-14.253],[-495.517,455.747],[634.483,455.747]],\"c\":true}]},{\"t\":198.197,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[898.483,307.747],[-231.517,307.747],[-231.517,777.747],[898.483,777.747]],\"c\":true}],\"h\":1},{\"i\":{\"x\":0.05,\"y\":1},\"o\":{\"x\":0.55,\"y\":0},\"t\":498.498,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[898.483,307.747],[-231.517,307.747],[-231.517,777.747],[898.483,777.747]],\"c\":true}]},{\"t\":554.5546875,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[634.483,-14.253],[-495.517,-14.253],[-495.517,455.747],[634.483,455.747]],\"c\":true}]}],\"ix\":1},\"o\":{\"a\":0,\"k\":100,\"ix\":3},\"x\":{\"a\":0,\"k\":0,\"ix\":4},\"nm\":\"Mask 1\"}],\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0]],\"v\":[[77.889,77.901],[77.889,-77.901],[-77.889,77.901]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.066666670144,0.066666670144,0.066666670144,1],\"ix\":4,\"x\":\"var $bm_rt;\\n$bm_rt = thisComp.layer('Setting').effect('MF - Title 01')('Pseudo/KEAnae8ef7d9E-0004');\"},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[78.138,78.151],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 1\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":104.104104104104,\"op\":600.600600600601,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":17,\"ty\":4,\"nm\":\"Triangle 6 Outlines\",\"sr\":1,\"ks\":{\"o\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.43],\"y\":[1]},\"o\":{\"x\":[0.95],\"y\":[0]},\"t\":130.131,\"s\":[100]},{\"t\":226.2265625,\"s\":[0]}],\"ix\":11,\"x\":\"var $bm_rt;\\n$bm_rt = loopOut('pingpong');\"},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.05,\"y\":1},\"o\":{\"x\":0.55,\"y\":0},\"t\":142.143,\"s\":[2881.767,1271.662,0],\"to\":[52.333,54,0],\"ti\":[-52.333,-54,0]},{\"t\":198.197,\"s\":[3195.767,1595.662,0],\"h\":1},{\"i\":{\"x\":0.05,\"y\":1},\"o\":{\"x\":0.55,\"y\":0},\"t\":506.506,\"s\":[3195.767,1595.662,0],\"to\":[0,0,0],\"ti\":[-52.333,-54,0]},{\"t\":562.5625,\"s\":[2881.767,1271.662,0]}],\"ix\":2},\"a\":{\"a\":0,\"k\":[148.07,148.093,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"hasMask\":true,\"masksProperties\":[{\"inv\":true,\"mode\":\"a\",\"pt\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.05,\"y\":1},\"o\":{\"x\":0.55,\"y\":0},\"t\":142.143,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[335.428,-39.569],[-54.572,-39.569],[-54.572,302.431],[335.428,302.431]],\"c\":true}]},{\"t\":198.197,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[71.428,-355.569],[-318.572,-355.569],[-318.572,-13.569],[71.428,-13.569]],\"c\":true}],\"h\":1},{\"i\":{\"x\":0.05,\"y\":1},\"o\":{\"x\":0.55,\"y\":0},\"t\":506.506,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[71.428,-355.569],[-318.572,-355.569],[-318.572,-13.569],[71.428,-13.569]],\"c\":true}]},{\"t\":562.5625,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[335.428,-39.569],[-54.572,-39.569],[-54.572,302.431],[335.428,302.431]],\"c\":true}]}],\"ix\":1},\"o\":{\"a\":0,\"k\":100,\"ix\":3},\"x\":{\"a\":0,\"k\":0,\"ix\":4},\"nm\":\"Mask 1\"}],\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0]],\"v\":[[147.821,147.843],[-147.821,-147.843],[-147.821,147.843]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0,0.258999992819,0.952999997606,1],\"ix\":4,\"x\":\"var $bm_rt;\\n$bm_rt = thisComp.layer('Setting').effect('MF - Title 01')('Pseudo/KEAnae8ef7d9E-0002');\"},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[148.07,148.093],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 1\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":104.104104104104,\"op\":600.600600600601,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":18,\"ty\":4,\"nm\":\"Triangle 5 Outlines\",\"sr\":1,\"ks\":{\"o\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.43],\"y\":[1]},\"o\":{\"x\":[0.95],\"y\":[0]},\"t\":156.156,\"s\":[100]},{\"t\":252.251953125,\"s\":[0]}],\"ix\":11,\"x\":\"var $bm_rt;\\n$bm_rt = loopOut('pingpong');\"},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.05,\"y\":1},\"o\":{\"x\":0.55,\"y\":0},\"t\":150.15,\"s\":[2205.924,2321.18,0],\"to\":[57,-60.333,0],\"ti\":[-57,60.333,0]},{\"t\":192.191,\"s\":[2547.924,1959.18,0],\"h\":1},{\"i\":{\"x\":0.05,\"y\":1},\"o\":{\"x\":0.55,\"y\":0},\"t\":492.492,\"s\":[2547.924,1959.18,0],\"to\":[0,0,0],\"ti\":[-57,60.333,0]},{\"t\":548.548828125,\"s\":[2205.924,2321.18,0]}],\"ix\":2},\"a\":{\"a\":0,\"k\":[148.07,148.094,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"hasMask\":true,\"masksProperties\":[{\"inv\":true,\"mode\":\"a\",\"pt\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.05,\"y\":1},\"o\":{\"x\":0.55,\"y\":0},\"t\":150.15,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[634.483,-14.253],[-495.517,-14.253],[-495.517,455.747],[634.483,455.747]],\"c\":true}]},{\"t\":192.191,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[898.483,307.747],[-231.517,307.747],[-231.517,777.747],[898.483,777.747]],\"c\":true}],\"h\":1},{\"i\":{\"x\":0.05,\"y\":1},\"o\":{\"x\":0.55,\"y\":0},\"t\":492.492,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[898.483,307.747],[-231.517,307.747],[-231.517,777.747],[898.483,777.747]],\"c\":true}]},{\"t\":548.548828125,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[634.483,-14.253],[-495.517,-14.253],[-495.517,455.747],[634.483,455.747]],\"c\":true}]}],\"ix\":1},\"o\":{\"a\":0,\"k\":100,\"ix\":3},\"x\":{\"a\":0,\"k\":0,\"ix\":4},\"nm\":\"Mask 1\"}],\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0]],\"v\":[[147.82,147.843],[147.82,-147.843],[-147.82,147.843]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0,0.842999985639,0.976000019148,1],\"ix\":4,\"x\":\"var $bm_rt;\\n$bm_rt = thisComp.layer('Setting').effect('MF - Title 01')('Pseudo/KEAnae8ef7d9E-0003');\"},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[148.07,148.094],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 1\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":104.104104104104,\"op\":600.600600600601,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":19,\"ty\":4,\"nm\":\"Triangle 4 Outlines\",\"sr\":1,\"ks\":{\"o\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.43],\"y\":[1]},\"o\":{\"x\":[0.95],\"y\":[0]},\"t\":116.115,\"s\":[100]},{\"t\":196.1953125,\"s\":[0]}],\"ix\":11,\"x\":\"var $bm_rt;\\n$bm_rt = loopOut('pingpong');\"},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.05,\"y\":1},\"o\":{\"x\":0.55,\"y\":0},\"t\":134.135,\"s\":[1895.947,2385.18,0],\"to\":[70,-71,0],\"ti\":[-70,71,0]},{\"t\":176.176,\"s\":[2315.947,1959.18,0],\"h\":1},{\"i\":{\"x\":0.05,\"y\":1},\"o\":{\"x\":0.55,\"y\":0},\"t\":506.506,\"s\":[2315.947,1959.18,0],\"to\":[0,0,0],\"ti\":[-70,71,0]},{\"t\":562.5625,\"s\":[1895.947,2385.18,0]}],\"ix\":2},\"a\":{\"a\":0,\"k\":[148.88,148.068,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"hasMask\":true,\"masksProperties\":[{\"inv\":true,\"mode\":\"a\",\"pt\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.05,\"y\":1},\"o\":{\"x\":0.55,\"y\":0},\"t\":134.135,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[634.483,-14.253],[-495.517,-14.253],[-495.517,455.747],[634.483,455.747]],\"c\":true}]},{\"t\":176.176,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[898.483,307.747],[-231.517,307.747],[-231.517,777.747],[898.483,777.747]],\"c\":true}],\"h\":1},{\"i\":{\"x\":0.05,\"y\":1},\"o\":{\"x\":0.55,\"y\":0},\"t\":506.506,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[898.483,307.747],[-231.517,307.747],[-231.517,777.747],[898.483,777.747]],\"c\":true}]},{\"t\":562.5625,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[634.483,-14.253],[-495.517,-14.253],[-495.517,455.747],[634.483,455.747]],\"c\":true}]}],\"ix\":1},\"o\":{\"a\":0,\"k\":100,\"ix\":3},\"x\":{\"a\":0,\"k\":0,\"ix\":4},\"nm\":\"Mask 1\"}],\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0]],\"v\":[[-148.63,147.818],[148.63,-146.24],[-147.052,-147.818]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0,0.258999992819,0.952999997606,1],\"ix\":4,\"x\":\"var $bm_rt;\\n$bm_rt = thisComp.layer('Setting').effect('MF - Title 01')('Pseudo/KEAnae8ef7d9E-0002');\"},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[148.88,148.068],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 1\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":104.104104104104,\"op\":600.600600600601,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":20,\"ty\":4,\"nm\":\"Triangle 3 Outlines\",\"sr\":1,\"ks\":{\"o\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.43],\"y\":[1]},\"o\":{\"x\":[0.95],\"y\":[0]},\"t\":124.125,\"s\":[100]},{\"t\":238.23828125,\"s\":[0]}],\"ix\":11,\"x\":\"var $bm_rt;\\n$bm_rt = loopOut('pingpong');\"},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.05,\"y\":1},\"o\":{\"x\":0.55,\"y\":0},\"t\":142.143,\"s\":[1647.925,2351.18,0],\"to\":[62,-65.333,0],\"ti\":[-62,65.333,0]},{\"t\":184.184,\"s\":[2019.925,1959.18,0],\"h\":1},{\"i\":{\"x\":0.05,\"y\":1},\"o\":{\"x\":0.55,\"y\":0},\"t\":490.49,\"s\":[2019.925,1959.18,0],\"to\":[0,0,0],\"ti\":[-62,65.333,0]},{\"t\":546.546875,\"s\":[1647.925,2351.18,0]}],\"ix\":2},\"a\":{\"a\":0,\"k\":[148.07,148.094,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"hasMask\":true,\"masksProperties\":[{\"inv\":true,\"mode\":\"a\",\"pt\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.05,\"y\":1},\"o\":{\"x\":0.55,\"y\":0},\"t\":142.143,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[634.483,-14.253],[-495.517,-14.253],[-495.517,455.747],[634.483,455.747]],\"c\":true}]},{\"t\":184.184,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[898.483,307.747],[-231.517,307.747],[-231.517,777.747],[898.483,777.747]],\"c\":true}],\"h\":1},{\"i\":{\"x\":0.05,\"y\":1},\"o\":{\"x\":0.55,\"y\":0},\"t\":490.49,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[898.483,307.747],[-231.517,307.747],[-231.517,777.747],[898.483,777.747]],\"c\":true}]},{\"t\":546.546875,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[634.483,-14.253],[-495.517,-14.253],[-495.517,455.747],[634.483,455.747]],\"c\":true}]}],\"ix\":1},\"o\":{\"a\":0,\"k\":100,\"ix\":3},\"x\":{\"a\":0,\"k\":0,\"ix\":4},\"nm\":\"Mask 1\"}],\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0]],\"v\":[[147.82,147.843],[147.82,-147.843],[-147.82,147.843]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0,0.842999985639,0.976000019148,1],\"ix\":4,\"x\":\"var $bm_rt;\\n$bm_rt = thisComp.layer('Setting').effect('MF - Title 01')('Pseudo/KEAnae8ef7d9E-0003');\"},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[148.07,148.094],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 1\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":104.104104104104,\"op\":600.600600600601,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":21,\"ty\":4,\"nm\":\"Triangle 2 Outlines\",\"sr\":1,\"ks\":{\"o\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.43],\"y\":[1]},\"o\":{\"x\":[0.95],\"y\":[0]},\"t\":144.145,\"s\":[100]},{\"t\":240.240234375,\"s\":[0]}],\"ix\":11,\"x\":\"var $bm_rt;\\n$bm_rt = loopOut('pingpong');\"},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.05,\"y\":1},\"o\":{\"x\":0.55,\"y\":0},\"t\":134.135,\"s\":[1373.767,1635.18,0],\"to\":[52.333,54,0],\"ti\":[-52.333,-54,0]},{\"t\":190.189,\"s\":[1687.767,1959.18,0],\"h\":1},{\"i\":{\"x\":0.05,\"y\":1},\"o\":{\"x\":0.55,\"y\":0},\"t\":502.502,\"s\":[1687.767,1959.18,0],\"to\":[0,0,0],\"ti\":[-52.333,-54,0]},{\"t\":558.55859375,\"s\":[1373.767,1635.18,0]}],\"ix\":2},\"a\":{\"a\":0,\"k\":[148.07,148.094,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"hasMask\":true,\"masksProperties\":[{\"inv\":true,\"mode\":\"a\",\"pt\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.05,\"y\":1},\"o\":{\"x\":0.55,\"y\":0},\"t\":134.135,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[335.428,-39.569],[-54.572,-39.569],[-54.572,302.431],[335.428,302.431]],\"c\":true}]},{\"t\":190.189,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[71.428,-355.569],[-318.572,-355.569],[-318.572,-13.569],[71.428,-13.569]],\"c\":true}],\"h\":1},{\"i\":{\"x\":0.05,\"y\":1},\"o\":{\"x\":0.55,\"y\":0},\"t\":502.502,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[71.428,-355.569],[-318.572,-355.569],[-318.572,-13.569],[71.428,-13.569]],\"c\":true}]},{\"t\":558.55859375,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[335.428,-39.569],[-54.572,-39.569],[-54.572,302.431],[335.428,302.431]],\"c\":true}]}],\"ix\":1},\"o\":{\"a\":0,\"k\":100,\"ix\":3},\"x\":{\"a\":0,\"k\":0,\"ix\":4},\"nm\":\"Mask 1\"}],\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0]],\"v\":[[147.82,147.843],[-147.82,-147.843],[-147.82,147.843]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0,0.258999992819,0.952999997606,1],\"ix\":4,\"x\":\"var $bm_rt;\\n$bm_rt = thisComp.layer('Setting').effect('MF - Title 01')('Pseudo/KEAnae8ef7d9E-0002');\"},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[148.07,148.094],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 1\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":104.104104104104,\"op\":600.600600600601,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":22,\"ty\":4,\"nm\":\"Triangle 1 Outlines\",\"sr\":1,\"ks\":{\"o\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.43],\"y\":[1]},\"o\":{\"x\":[0.95],\"y\":[0]},\"t\":132.133,\"s\":[100]},{\"t\":228.228515625,\"s\":[0]}],\"ix\":11,\"x\":\"var $bm_rt;\\n$bm_rt = loopOut('pingpong');\"},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.05,\"y\":1},\"o\":{\"x\":0.55,\"y\":0},\"t\":152.152,\"s\":[1190.923,2488.686,0],\"to\":[40.333,-41.667,0],\"ti\":[-40.333,41.667,0]},{\"t\":194.193,\"s\":[1432.923,2238.686,0],\"h\":1},{\"i\":{\"x\":0.05,\"y\":1},\"o\":{\"x\":0.55,\"y\":0},\"t\":492.492,\"s\":[1432.923,2238.686,0],\"to\":[0,0,0],\"ti\":[-40.333,41.667,0]},{\"t\":548.548828125,\"s\":[1190.923,2488.686,0]}],\"ix\":2},\"a\":{\"a\":0,\"k\":[75.104,75.117,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"hasMask\":true,\"masksProperties\":[{\"inv\":true,\"mode\":\"a\",\"pt\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.05,\"y\":1},\"o\":{\"x\":0.55,\"y\":0},\"t\":152.152,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[634.483,-14.253],[-495.517,-14.253],[-495.517,455.747],[634.483,455.747]],\"c\":true}]},{\"t\":194.193,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[898.483,307.747],[-231.517,307.747],[-231.517,777.747],[898.483,777.747]],\"c\":true}],\"h\":1},{\"i\":{\"x\":0.05,\"y\":1},\"o\":{\"x\":0.55,\"y\":0},\"t\":492.492,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[898.483,307.747],[-231.517,307.747],[-231.517,777.747],[898.483,777.747]],\"c\":true}]},{\"t\":548.548828125,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[634.483,-14.253],[-495.517,-14.253],[-495.517,455.747],[634.483,455.747]],\"c\":true}]}],\"ix\":1},\"o\":{\"a\":0,\"k\":100,\"ix\":3},\"x\":{\"a\":0,\"k\":0,\"ix\":4},\"nm\":\"Mask 1\"}],\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0]],\"v\":[[74.855,74.866],[74.855,-74.866],[-74.855,74.866]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0,0.842999985639,0.976000019148,1],\"ix\":4,\"x\":\"var $bm_rt;\\n$bm_rt = thisComp.layer('Setting').effect('MF - Title 01')('Pseudo/KEAnae8ef7d9E-0003');\"},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[75.104,75.116],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 1\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":104.104104104104,\"op\":600.600600600601,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":23,\"ty\":4,\"nm\":\"BG\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11,\"x\":\"var $bm_rt;\\nif (thisComp.layer('Setting').effect('MF - Title 01')('Pseudo/KEAnae8ef7d9E-0006') == 1) {\\n    $bm_rt = 100;\\n} else {\\n    $bm_rt = 0;\\n}\\n;\"},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[2048,1556,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ty\":\"rc\",\"d\":1,\"s\":{\"a\":0,\"k\":[4096,3112],\"ix\":2},\"p\":{\"a\":0,\"k\":[0,0],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":4},\"nm\":\"Rectangle Path 1\",\"mn\":\"ADBE Vector Shape - Rect\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":4,\"x\":\"var $bm_rt;\\n$bm_rt = thisComp.layer('Setting').effect('MF - Title 01')('Pseudo/KEAnae8ef7d9E-0005');\"},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Rectangle 1\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":600.600600600601,\"st\":0,\"bm\":0}]}],\"fonts\":{\"list\":[{\"fName\":\"Poppins-ExtraBold\",\"fFamily\":\"Poppins\",\"fStyle\":\"ExtraBold\",\"ascent\":71.8994140625}]},\"layers\":[{\"ddd\":0,\"ind\":1,\"ty\":0,\"nm\":\"MF - Title 01\",\"refId\":\"comp_0\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[2048,1556,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[2048,1556,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"w\":4096,\"h\":3112,\"ip\":0,\"op\":600,\"st\":0,\"bm\":0}],\"markers\":[],\"chars\":[{\"ch\":\"W\",\"size\":254,\"style\":\"ExtraBold\",\"w\":94.38,\"data\":{\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"v\":[[1.831,-71.729],[20.581,0],[30.786,0],[47.437,-59.473],[63.989,0],[74.194,0],[93.042,-71.729],[82.39,-71.729],[68.867,-13.343],[52.617,-71.729],[42.114,-71.729],[25.9,-13.453],[12.379,-71.729]],\"c\":true},\"ix\":2},\"nm\":\"W\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false}],\"nm\":\"W\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}]},\"fFamily\":\"Poppins\"},{\"ch\":\"E\",\"size\":254,\"style\":\"ExtraBold\",\"w\":66.7,\"data\":{\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"v\":[[8.545,0],[61.328,0],[61.328,-8.545],[18.018,-8.545],[18.018,-32.861],[57.373,-32.861],[57.373,-41.162],[18.018,-41.162],[18.018,-62.939],[60.596,-62.939],[60.596,-71.729],[8.545,-71.729]],\"c\":true},\"ix\":2},\"nm\":\"E\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false}],\"nm\":\"E\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}]},\"fFamily\":\"Poppins\"},{\"ch\":\"L\",\"size\":254,\"style\":\"ExtraBold\",\"w\":55.62,\"data\":{\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"v\":[[7.617,0],[53.32,0],[53.32,-8.545],[17.334,-8.545],[17.334,-71.729],[7.617,-71.729]],\"c\":true},\"ix\":2},\"nm\":\"L\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false}],\"nm\":\"L\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}]},\"fFamily\":\"Poppins\"},{\"ch\":\"C\",\"size\":254,\"style\":\"ExtraBold\",\"w\":72.22,\"data\":{\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[8.976,0],[5.984,-7.361],[0,-10.586],[-7.368,-6.677],[-8.237,0],[-5.631,6.152],[-0.837,7.552],[0,0],[1.95,-2.897],[7.035,0],[3.853,5.229],[0,8.406],[-4.268,4.968],[-6.937,0],[-3.149,-2.702],[-1.055,-4.622],[0,0],[4.955,4.785]],\"o\":[[-10.521,0],[-5.534,6.776],[0,13.942],[5.598,5.049],[9.557,0],[4.697,-5.11],[0,0],[-0.96,4.72],[-3.677,5.502],[-7.642,0],[-3.854,-5.229],[0,-10.262],[4.268,-4.968],[5.69,0],[3.149,2.702],[0,0],[-0.547,-6.087],[-4.955,-4.785]],\"v\":[[37.453,-73.682],[12.695,-62.64],[4.395,-36.597],[15.447,-5.669],[36.201,1.904],[58.984,-7.324],[67.285,-26.318],[57.812,-26.318],[53.448,-14.893],[37.379,-6.641],[20.135,-14.484],[14.355,-34.936],[20.757,-57.782],[37.564,-65.234],[50.823,-61.182],[57.129,-50.195],[66.602,-50.195],[58.349,-66.504]],\"c\":true},\"ix\":2},\"nm\":\"C\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false}],\"nm\":\"C\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}]},\"fFamily\":\"Poppins\"},{\"ch\":\"O\",\"size\":254,\"style\":\"ExtraBold\",\"w\":77.78,\"data\":{\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[12.663,0],[6.184,-8.854],[0,-9.7],[-5.632,-7.031],[-11.035,0],[-6.38,8.334],[0,10.71],[4.752,6.348]],\"o\":[[-12.109,0],[-4.818,6.902],[0,10.742],[6.315,7.292],[11.816,0],[5.436,-7.096],[0,-9.895],[-6.087,-8.138]],\"v\":[[38.574,-73.682],[11.133,-60.4],[3.906,-35.498],[12.354,-8.838],[38.379,2.1],[65.674,-10.4],[73.828,-37.109],[66.699,-61.475]],\"c\":true},\"ix\":2},\"nm\":\"O\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":1,\"ty\":\"sh\",\"ix\":2,\"ks\":{\"a\":0,\"k\":{\"i\":[[8.561,0],[4.02,5.457],[0,7.95],[-4.688,5.099],[-7.422,0],[-4.411,-5.148],[0,-8.438],[3.825,-6.141]],\"o\":[[-9.017,0],[-4.021,-5.457],[0,-9.937],[4.688,-5.099],[7.649,0],[4.411,5.148],[0,7.982],[-3.825,6.142]],\"v\":[[39.551,-6.543],[19.995,-14.729],[13.965,-34.838],[20.996,-57.391],[39.16,-65.039],[57.251,-57.317],[63.867,-36.939],[58.13,-15.755]],\"c\":true},\"ix\":2},\"nm\":\"O\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false}],\"nm\":\"O\",\"np\":5,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}]},\"fFamily\":\"Poppins\"},{\"ch\":\"M\",\"size\":254,\"style\":\"ExtraBold\",\"w\":83.3,\"data\":{\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0.098,3.597],[0,1.758],[0,0],[0,0],[0,0],[0,0],[0.065,-3.385],[0,-1.465],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,-1.692],[-0.098,-3.596],[0,0],[0,0],[0,0],[0,0],[0,3.874],[-0.066,3.386],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"v\":[[7.373,0],[16.65,0],[16.65,-42.334],[16.504,-50.269],[16.357,-58.301],[16.357,-60.498],[37.032,0],[46.66,0],[67.139,-60.498],[67.041,-49.609],[66.943,-42.334],[66.943,0],[76.221,0],[76.221,-71.729],[62.398,-71.729],[41.919,-11.084],[21.294,-71.729],[7.373,-71.729]],\"c\":true},\"ix\":2},\"nm\":\"M\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false}],\"nm\":\"M\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}]},\"fFamily\":\"Poppins\"}]}"));}}),
"[project]/src/app/page.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>Home)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Sidebar$2f$sidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/components/Sidebar/sidebar.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Right$2f$page$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/components/Right/page.tsx [app-ssr] (ecmascript)");
// Import dynamic from next
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-ssr] (ecmascript)");
// Example animation (replace with your own JSON file)
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$animations$2f$welcome$2e$json__$28$json$29$__ = __turbopack_import__("[project]/src/app/animations/welcome.json (json)");
"use client";
;
;
;
;
;
// Dynamically import Lottie with SSR disabled
const Lottie = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(async ()=>{
    typeof require.resolveWeak !== "undefined" && require.resolveWeak("react-lottie");
}, {
    loadableGenerated: {
        modules: [
            "src/app/page.tsx -> " + "react-lottie"
        ]
    },
    ssr: false
});
;
function Home() {
    const [theme, setTheme] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("light");
    const [showSplash, setShowSplash] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    // Initialize theme from localStorage
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const storedTheme = localStorage.getItem("theme");
        if (storedTheme) {
            setTheme(storedTheme);
        }
    }, []);
    // Update theme when it changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        document.documentElement.className = theme; // Apply theme to the root element
        localStorage.setItem("theme", theme); // Persist theme in localStorage
    }, [
        theme
    ]);
    // Handle splash screen visibility
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const timer = setTimeout(()=>setShowSplash(false), 5000); // 3-second splash
        return ()=>clearTimeout(timer); // Cleanup timer
    }, []);
    // Lottie animation options
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$animations$2f$welcome$2e$json__$28$json$29$__["default"],
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: showSplash ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `fixed inset-0 flex items-center justify-center ${theme === "light" ? "bg-gradient-to-r from-green-400 to-blue-400" : "bg-gray-900"}`,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Lottie, {
                        options: defaultOptions,
                        height: 70,
                        width: 150
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 58,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-4xl font-bold text-white animate-bounce mt-4",
                        children: "To My Portfolio"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 59,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-lg text-white mt-4",
                        children: "Loading..."
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 62,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 56,
                columnNumber: 11
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 51,
            columnNumber: 9
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `min-h-screen ${theme === "light" ? "bg-gradient-to-r from-green-400 to-blue-400" : "bg-gray-900"} p-8 lg:px-20`,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-12 gap-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lg:col-span-3 col-span-12 bg-white dark:bg-gray-800 rounded-2xl shadow-xl lg:p-4 lg:sticky top-0 max-h-[90vh]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Sidebar$2f$sidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            theme: theme,
                            setTheme: setTheme
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 74,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 73,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lg:col-span-9 col-span-12 bg-white dark:bg-gray-800 rounded-2xl shadow-xl lg:p-4 lg:max-h-[90vh]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Right$2f$page$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 79,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 78,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 71,
                columnNumber: 11
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 66,
            columnNumber: 9
        }, this)
    }, void 0, false);
}
}}),
"[project]/src/app/page.tsx [app-rsc] (ecmascript, Next.js server component, client modules ssr)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
}}),

};

//# sourceMappingURL=%5Broot%20of%20the%20server%5D__e628dd._.js.map