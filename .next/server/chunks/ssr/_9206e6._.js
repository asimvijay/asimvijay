module.exports = {

"[project]/src/app/graph/page.jsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>Dashboard)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$vis$2d$network$2f$peer$2f$esm$2f$vis$2d$network$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/vis-network/peer/esm/vis-network.js [app-rsc] (ecmascript)");
;
;
;
function Dashboard() {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const nodes = [
            {
                id: 0,
                label: "Motor A",
                group: 0,
                shape: "circularImage",
                image: "/images/1.jpg"
            },
            {
                id: 1,
                label: "Sensor 1A",
                group: 0,
                shape: "circularImage",
                image: "/images/1.jpg"
            },
            {
                id: 2,
                label: "Sensor 2A",
                group: 0,
                shape: "circularImage",
                image: "/images/1.jpg"
            },
            {
                id: 3,
                label: "Motor B",
                group: 1,
                shape: "circularImage",
                image: "/images/1.jpg"
            },
            {
                id: 4,
                label: "Sensor 1B",
                group: 1,
                shape: "circularImage",
                image: "/images/1.jpg"
            },
            {
                id: 5,
                label: "Sensor 2B",
                group: 1,
                shape: "circularImage",
                image: "/images/1.jpg"
            },
            {
                id: 6,
                label: "Motor C",
                group: 2,
                shape: "circularImage",
                image: "/images/1.jpg"
            },
            {
                id: 7,
                label: "Sensor 1C",
                group: 2,
                shape: "circularImage",
                image: "/images/1.jpg"
            },
            {
                id: 8,
                label: "Sensor 2C",
                group: 2,
                shape: "circularImage",
                image: "/images/1.jpg"
            },
            {
                id: 9,
                label: "Sensor 3C",
                group: 2,
                shape: "circularImage",
                image: "/images/1.jpg"
            },
            {
                id: 10,
                label: "Motor D",
                group: 3,
                shape: "circularImage",
                image: "/images/1.jpg"
            },
            {
                id: 11,
                label: "Sensor 1D",
                group: 3,
                shape: "circularImage",
                image: "/images/1.jpg"
            },
            {
                id: 12,
                label: "Sensor 2D",
                group: 3,
                shape: "circularImage",
                image: "/images/1.jpg"
            },
            {
                id: 13,
                label: "Sensor 3D",
                group: 3,
                shape: "circularImage",
                image: "/images/1.jpg"
            },
            {
                id: 14,
                label: "Sensor 4D",
                group: 3,
                shape: "circularImage",
                image: "/images/1.jpg"
            },
            {
                id: 15,
                label: "Ranch 144",
                group: 0,
                shape: "circularImage",
                image: "/images/1.jpg"
            },
            {
                id: 16,
                label: "Ranch 152",
                group: 1,
                shape: "circularImage",
                image: "/images/1.jpg"
            },
            {
                id: 17,
                label: "Ranch 188",
                group: 2,
                shape: "circularImage",
                image: "/images/1.jpg"
            },
            {
                id: 18,
                label: "Ranch 136",
                group: 3,
                shape: "circularImage",
                image: "/images/1.jpg"
            },
            {
                id: 19,
                label: "Cell Tower",
                group: 4,
                shape: "circularImage",
                image: "/images/1.jpg",
                size: 40
            },
            {
                id: 20,
                label: "Cloud",
                group: 5,
                shape: "circularImage",
                image: "/images/1.jpg",
                size: 40
            }
        ];
        const edges = [
            {
                from: 0,
                to: 15
            },
            {
                from: 1,
                to: 15
            },
            {
                from: 2,
                to: 15
            },
            {
                from: 3,
                to: 16
            },
            {
                from: 4,
                to: 16
            },
            {
                from: 5,
                to: 16
            },
            {
                from: 6,
                to: 17
            },
            {
                from: 7,
                to: 17
            },
            {
                from: 8,
                to: 17
            },
            {
                from: 9,
                to: 17
            },
            {
                from: 10,
                to: 18
            },
            {
                from: 11,
                to: 18
            },
            {
                from: 12,
                to: 18
            },
            {
                from: 13,
                to: 18
            },
            {
                from: 14,
                to: 18
            },
            {
                from: 15,
                to: 19,
                arrows: "to"
            },
            {
                from: 16,
                to: 19,
                arrows: "to"
            },
            {
                from: 17,
                to: 19,
                arrows: "to"
            },
            {
                from: 18,
                to: 19,
                arrows: "to"
            },
            {
                from: 19,
                to: 20,
                arrows: "to"
            }
        ];
        const container = document.getElementById("mynetwork");
        const data = {
            nodes,
            edges
        };
        const options = {
            nodes: {
                shape: "dot",
                size: 30,
                font: {
                    size: 14
                },
                borderWidth: 2,
                shadow: true
            },
            edges: {
                width: 2,
                shadow: true
            }
        };
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$vis$2d$network$2f$peer$2f$esm$2f$vis$2d$network$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Network"](container, data, options);
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        id: "mynetwork",
        style: {
            width: "800px",
            height: "600px",
            border: "1px solid #444444",
            backgroundColor: "#dddddd",
            margin: "0 auto"
        }
    }, void 0, false, {
        fileName: "[project]/src/app/graph/page.jsx",
        lineNumber: 73,
        columnNumber: 5
    }, this);
}
}}),
"[project]/src/app/graph/page.jsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_export_namespace__(__turbopack_import__("[project]/src/app/graph/page.jsx [app-rsc] (ecmascript)"));
}}),
"[project]/.next-internal/server/app/graph/page/actions.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
}}),

};

//# sourceMappingURL=_9206e6._.js.map