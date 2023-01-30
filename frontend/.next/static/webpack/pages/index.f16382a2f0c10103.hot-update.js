"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_NFTBox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/NFTBox */ \"./components/NFTBox.js\");\n/* harmony import */ var _constants_networkMapping_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/networkMapping.json */ \"./constants/networkMapping.json\");\n/* harmony import */ var react_moralis__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-moralis */ \"./node_modules/react-moralis/lib/index.esm.js\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var _constants_subgraphQueries__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constants/subgraphQueries */ \"./constants/subgraphQueries.js\");\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Home() {\n    var _this = this;\n    _s();\n    var ref = (0,react_moralis__WEBPACK_IMPORTED_MODULE_3__.useMoralis)(), chainId = ref.chainId, isWeb3Enabled = ref.isWeb3Enabled;\n    console.log(chainId);\n    var chainString = chainId ? parseInt(chainId).toString() : \"31337\";\n    console.log(chainString);\n    var marketplaceAddress = _constants_networkMapping_json__WEBPACK_IMPORTED_MODULE_2__[chainString].NftMarketplace[0];\n    console.log(marketplaceAddress);\n    var ref1 = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_5__.useQuery)(_constants_subgraphQueries__WEBPACK_IMPORTED_MODULE_4__[\"default\"]), loading = ref1.loading, error = ref1.error, listedNfts = ref1.data;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container mx-auto\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"py-4 px-4 font-bold text-2xl\",\n                children: \"Recently Listed\"\n            }, void 0, false, {\n                fileName: \"/Users/nindo/Desktop/Crypto/Patrick_Course_Solidity/Lesson_15/frontend/pages/index.js\",\n                lineNumber: 18,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-wrap\",\n                children: isWeb3Enabled ? loading || !listedNfts ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: \"Loading...\"\n                }, void 0, false, {\n                    fileName: \"/Users/nindo/Desktop/Crypto/Patrick_Course_Solidity/Lesson_15/frontend/pages/index.js\",\n                    lineNumber: 22,\n                    columnNumber: 25\n                }, this) : listedNfts.activeItems.map(function(nft) {\n                    var price = nft.price, nftAddress = nft.nftAddress, tokenId = nft.tokenId, seller = nft.seller;\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_NFTBox__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        price: price,\n                        nftAddress: nftAddress,\n                        tokenId: tokenId,\n                        marketplaceAddress: marketplaceAddress,\n                        seller: seller\n                    }, \"\".concat(nftAddress).concat(tokenId), false, {\n                        fileName: \"/Users/nindo/Desktop/Crypto/Patrick_Course_Solidity/Lesson_15/frontend/pages/index.js\",\n                        lineNumber: 27,\n                        columnNumber: 33\n                    }, _this);\n                }) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: \"Web3 Currently Not Enabled\"\n                }, void 0, false, {\n                    fileName: \"/Users/nindo/Desktop/Crypto/Patrick_Course_Solidity/Lesson_15/frontend/pages/index.js\",\n                    lineNumber: 39,\n                    columnNumber: 21\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/nindo/Desktop/Crypto/Patrick_Course_Solidity/Lesson_15/frontend/pages/index.js\",\n                lineNumber: 19,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/nindo/Desktop/Crypto/Patrick_Course_Solidity/Lesson_15/frontend/pages/index.js\",\n        lineNumber: 17,\n        columnNumber: 9\n    }, this);\n};\n_s(Home, \"AF5UVAI4p0L5hQZG/1GqeCJeeU8=\", false, function() {\n    return [\n        react_moralis__WEBPACK_IMPORTED_MODULE_3__.useMoralis,\n        _apollo_client__WEBPACK_IMPORTED_MODULE_5__.useQuery\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQXlDO0FBQ29CO0FBQ25CO0FBQ0Q7QUFDa0I7O0FBRTVDLFNBQVNLLElBQUksR0FBRzs7O0lBQzNCLElBQW1DSCxHQUFZLEdBQVpBLHlEQUFVLEVBQUUsRUFBdkNJLE9BQU8sR0FBb0JKLEdBQVksQ0FBdkNJLE9BQU8sRUFBRUMsYUFBYSxHQUFLTCxHQUFZLENBQTlCSyxhQUFhO0lBQzlCQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0gsT0FBTyxDQUFDO0lBQ3BCLElBQU1JLFdBQVcsR0FBR0osT0FBTyxHQUFHSyxRQUFRLENBQUNMLE9BQU8sQ0FBQyxDQUFDTSxRQUFRLEVBQUUsR0FBRyxPQUFPO0lBQ3BFSixPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsV0FBVyxDQUFDO0lBQ3hCLElBQU1HLGtCQUFrQixHQUFHWiwyREFBYyxDQUFDUyxXQUFXLENBQUMsQ0FBQ0ksY0FBYyxDQUFDLENBQUMsQ0FBQztJQUN4RU4sT0FBTyxDQUFDQyxHQUFHLENBQUNJLGtCQUFrQixDQUFDO0lBQy9CLElBQTZDVixJQUEwQixHQUExQkEsd0RBQVEsQ0FBQ0Msa0VBQWdCLENBQUMsRUFBL0RXLE9BQU8sR0FBOEJaLElBQTBCLENBQS9EWSxPQUFPLEVBQUVDLEtBQUssR0FBdUJiLElBQTBCLENBQXREYSxLQUFLLEVBQUVDLFVBQWdCLEdBQUtkLElBQTBCLENBQS9DYyxJQUFJO0lBRTVCLHFCQUNJLDhEQUFDRSxLQUFHO1FBQUNDLFNBQVMsRUFBQyxtQkFBbUI7OzBCQUM5Qiw4REFBQ0MsSUFBRTtnQkFBQ0QsU0FBUyxFQUFDLDhCQUE4QjswQkFBQyxpQkFBZTs7Ozs7b0JBQUs7MEJBQ2pFLDhEQUFDRCxLQUFHO2dCQUFDQyxTQUFTLEVBQUMsZ0JBQWdCOzBCQUMxQmIsYUFBYSxHQUNWUSxPQUFPLElBQUksQ0FBQ0csVUFBVSxpQkFDbEIsOERBQUNDLEtBQUc7OEJBQUMsWUFBVTs7Ozs7d0JBQU0sR0FFckJELFVBQVUsQ0FBQ0ksV0FBVyxDQUFDQyxHQUFHLENBQUMsU0FBQ0MsR0FBRyxFQUFLO29CQUNoQyxJQUFRQyxLQUFLLEdBQWtDRCxHQUFHLENBQTFDQyxLQUFLLEVBQUVDLFVBQVUsR0FBc0JGLEdBQUcsQ0FBbkNFLFVBQVUsRUFBRUMsT0FBTyxHQUFhSCxHQUFHLENBQXZCRyxPQUFPLEVBQUVDLE1BQU0sR0FBS0osR0FBRyxDQUFkSSxNQUFNO29CQUMxQyxxQkFDSSw4REFBQzVCLDBEQUFNO3dCQUNIeUIsS0FBSyxFQUFFQSxLQUFLO3dCQUNaQyxVQUFVLEVBQUVBLFVBQVU7d0JBQ3RCQyxPQUFPLEVBQUVBLE9BQU87d0JBQ2hCZCxrQkFBa0IsRUFBRUEsa0JBQWtCO3dCQUN0Q2UsTUFBTSxFQUFFQSxNQUFNO3VCQUNULEVBQUMsQ0FBZUQsTUFBTyxDQUFwQkQsVUFBVSxDQUFXLFFBQVJDLE9BQU8sQ0FBRTs7Ozs2QkFDaEMsQ0FDTDtpQkFDSixDQUFDLGlCQUdOLDhEQUFDUixLQUFHOzhCQUFDLDRCQUEwQjs7Ozs7d0JBQU07Ozs7O29CQUV2Qzs7Ozs7O1lBQ0osQ0FDVDtDQUNKO0dBckN1QmQsSUFBSTs7UUFDV0gscURBQVU7UUFNQUMsb0RBQVE7OztBQVBqQ0UsS0FBQUEsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBORlRCb3ggZnJvbSBcIi4uL2NvbXBvbmVudHMvTkZUQm94XCJcbmltcG9ydCBuZXR3b3JrTWFwcGluZyBmcm9tIFwiLi4vY29uc3RhbnRzL25ldHdvcmtNYXBwaW5nLmpzb25cIlxuaW1wb3J0IHsgdXNlTW9yYWxpcyB9IGZyb20gXCJyZWFjdC1tb3JhbGlzXCJcbmltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSBcIkBhcG9sbG8vY2xpZW50XCJcbmltcG9ydCBHRVRfQUNUSVZFX0lURU1TIGZyb20gXCIuLi9jb25zdGFudHMvc3ViZ3JhcGhRdWVyaWVzXCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgICBjb25zdCB7IGNoYWluSWQsIGlzV2ViM0VuYWJsZWQgfSA9IHVzZU1vcmFsaXMoKVxuICAgIGNvbnNvbGUubG9nKGNoYWluSWQpXG4gICAgY29uc3QgY2hhaW5TdHJpbmcgPSBjaGFpbklkID8gcGFyc2VJbnQoY2hhaW5JZCkudG9TdHJpbmcoKSA6IFwiMzEzMzdcIlxuICAgIGNvbnNvbGUubG9nKGNoYWluU3RyaW5nKVxuICAgIGNvbnN0IG1hcmtldHBsYWNlQWRkcmVzcyA9IG5ldHdvcmtNYXBwaW5nW2NoYWluU3RyaW5nXS5OZnRNYXJrZXRwbGFjZVswXVxuICAgIGNvbnNvbGUubG9nKG1hcmtldHBsYWNlQWRkcmVzcylcbiAgICBjb25zdCB7IGxvYWRpbmcsIGVycm9yLCBkYXRhOiBsaXN0ZWROZnRzIH0gPSB1c2VRdWVyeShHRVRfQUNUSVZFX0lURU1TKVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0b1wiPlxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInB5LTQgcHgtNCBmb250LWJvbGQgdGV4dC0yeGxcIj5SZWNlbnRseSBMaXN0ZWQ8L2gxPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcFwiPlxuICAgICAgICAgICAgICAgIHtpc1dlYjNFbmFibGVkID8gKFxuICAgICAgICAgICAgICAgICAgICBsb2FkaW5nIHx8ICFsaXN0ZWROZnRzID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5Mb2FkaW5nLi4uPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICBsaXN0ZWROZnRzLmFjdGl2ZUl0ZW1zLm1hcCgobmZ0KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgeyBwcmljZSwgbmZ0QWRkcmVzcywgdG9rZW5JZCwgc2VsbGVyIH0gPSBuZnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TkZUQm94XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmljZT17cHJpY2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZnRBZGRyZXNzPXtuZnRBZGRyZXNzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9rZW5JZD17dG9rZW5JZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmtldHBsYWNlQWRkcmVzcz17bWFya2V0cGxhY2VBZGRyZXNzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsbGVyPXtzZWxsZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2Ake25mdEFkZHJlc3N9JHt0b2tlbklkfWB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+V2ViMyBDdXJyZW50bHkgTm90IEVuYWJsZWQ8L2Rpdj5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cbiJdLCJuYW1lcyI6WyJORlRCb3giLCJuZXR3b3JrTWFwcGluZyIsInVzZU1vcmFsaXMiLCJ1c2VRdWVyeSIsIkdFVF9BQ1RJVkVfSVRFTVMiLCJIb21lIiwiY2hhaW5JZCIsImlzV2ViM0VuYWJsZWQiLCJjb25zb2xlIiwibG9nIiwiY2hhaW5TdHJpbmciLCJwYXJzZUludCIsInRvU3RyaW5nIiwibWFya2V0cGxhY2VBZGRyZXNzIiwiTmZ0TWFya2V0cGxhY2UiLCJsb2FkaW5nIiwiZXJyb3IiLCJkYXRhIiwibGlzdGVkTmZ0cyIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwiYWN0aXZlSXRlbXMiLCJtYXAiLCJuZnQiLCJwcmljZSIsIm5mdEFkZHJlc3MiLCJ0b2tlbklkIiwic2VsbGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});