"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Home; }
/* harmony export */ });
/* harmony import */ var C_nfts_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_nfts_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_nfts_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_nfts_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ethers */ "./node_modules/ethers/lib.esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var web3modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! web3modal */ "./node_modules/web3modal/dist/index.js");
/* harmony import */ var web3modal__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(web3modal__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../config */ "./config.js");
/* harmony import */ var _artifacts_contracts_NFT_sol_NFT_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../artifacts/contracts/NFT.sol/NFT.json */ "./artifacts/contracts/NFT.sol/NFT.json");
/* harmony import */ var _artifacts_contracts_KBMarket_sol_KBMarket_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../artifacts/contracts/KBMarket.sol/KBMarket.json */ "./artifacts/contracts/KBMarket.sol/KBMarket.json");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\nfts\\pages\\index.js",
    _s = $RefreshSig$();










function Home() {
  _s();

  var _this = this;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),
      nfts = _useState[0],
      setNFts = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('not-loaded'),
      loadingState = _useState2[0],
      setLoadingState = _useState2[1];

  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    loadNFTs();
  }, []);

  function loadNFTs() {
    return _loadNFTs.apply(this, arguments);
  } // function to buy nfts for market 


  function _loadNFTs() {
    _loadNFTs = (0,C_nfts_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/C_nfts_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2() {
      var provider, tokenContract, marketContract, data, items;
      return C_nfts_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              // what we want to load:
              // ***provider, tokenContract, marketContract, data for our marketItems***
              provider = new ethers__WEBPACK_IMPORTED_MODULE_9__.ethers.providers.JsonRpcProvider();
              tokenContract = new ethers__WEBPACK_IMPORTED_MODULE_9__.ethers.Contract(_config__WEBPACK_IMPORTED_MODULE_5__.nftaddress, _artifacts_contracts_NFT_sol_NFT_json__WEBPACK_IMPORTED_MODULE_6__.abi, provider);
              marketContract = new ethers__WEBPACK_IMPORTED_MODULE_9__.ethers.Contract(_config__WEBPACK_IMPORTED_MODULE_5__.nftmarketaddress, _artifacts_contracts_KBMarket_sol_KBMarket_json__WEBPACK_IMPORTED_MODULE_7__.abi, provider);
              _context2.next = 5;
              return marketContract.fetchMarketTokens();

            case 5:
              data = _context2.sent;
              _context2.next = 8;
              return Promise.all(data.map( /*#__PURE__*/function () {
                var _ref = (0,C_nfts_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/C_nfts_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(i) {
                  var tokenUri, meta, price, item;
                  return C_nfts_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          _context.next = 2;
                          return tokenContract.tokenURI(i.tokenId);

                        case 2:
                          tokenUri = _context.sent;
                          _context.next = 5;
                          return axios__WEBPACK_IMPORTED_MODULE_3___default().get(tokenUri);

                        case 5:
                          meta = _context.sent;
                          price = ethers__WEBPACK_IMPORTED_MODULE_9__.ethers.utils.formatUnits(i.price.toString(), 'ether');
                          item = {
                            price: price,
                            tokenId: i.tokenId.toNumber(),
                            seller: i.seller,
                            owner: i.owner,
                            image: meta.data.image,
                            name: meta.data.name,
                            description: meta.data.description
                          };
                          return _context.abrupt("return", item);

                        case 9:
                        case "end":
                          return _context.stop();
                      }
                    }
                  }, _callee);
                }));

                return function (_x2) {
                  return _ref.apply(this, arguments);
                };
              }()));

            case 8:
              items = _context2.sent;
              setNFts(items);
              setLoadingState('loaded');

            case 11:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));
    return _loadNFTs.apply(this, arguments);
  }

  function buyNFT(_x) {
    return _buyNFT.apply(this, arguments);
  }

  function _buyNFT() {
    _buyNFT = (0,C_nfts_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/C_nfts_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee3(nft) {
      var web3Modal, connection, provider, signer, contract, price, transaction;
      return C_nfts_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              web3Modal = new (web3modal__WEBPACK_IMPORTED_MODULE_4___default())();
              _context3.next = 3;
              return web3Modal.connect();

            case 3:
              connection = _context3.sent;
              provider = new ethers__WEBPACK_IMPORTED_MODULE_9__.ethers.providers.Web3Provider(connection);
              signer = provider.getSigner();
              contract = new ethers__WEBPACK_IMPORTED_MODULE_9__.ethers.Contract(_config__WEBPACK_IMPORTED_MODULE_5__.nftmarketaddress, _artifacts_contracts_KBMarket_sol_KBMarket_json__WEBPACK_IMPORTED_MODULE_7__.abi, signer);
              price = ethers__WEBPACK_IMPORTED_MODULE_9__.ethers.utils.parseUnits(nft.price.toString(), 'ether');
              _context3.next = 10;
              return contract.createMarketSale(_config__WEBPACK_IMPORTED_MODULE_5__.nftaddress, nft.tokenId, {
                value: price
              });

            case 10:
              transaction = _context3.sent;
              _context3.next = 13;
              return transaction.wait();

            case 13:
              loadNFTs();

            case 14:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));
    return _buyNFT.apply(this, arguments);
  }

  if (loadingState === 'loaded' && !nfts.length) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("h1", {
    className: "px-20 py-7 text-4x1",
    children: "No NFts in marketplace"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 66,
    columnNumber: 57
  }, this);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
    className: "flex justify-center",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
      className: "px-4",
      style: {
        maxWidth: '1600px'
      },
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
        className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4",
        children: nfts.map(function (nft, i) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
            className: "border shadow rounded-x1 overflow-hidden",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("img", {
              src: nft.image
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 76,
              columnNumber: 19
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
              className: "p-4",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("p", {
                style: {
                  height: '64px'
                },
                className: "text-3x1 font-semibold",
                children: nft.name
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 78,
                columnNumber: 21
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
                style: {
                  height: '72px',
                  overflow: 'hidden'
                },
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("p", {
                  className: "text-gray-400",
                  children: nft.description
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 81,
                  columnNumber: 25
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 80,
                columnNumber: 23
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 77,
              columnNumber: 19
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
              className: "p-4 bg-black",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("p", {
                className: "text-3x-1 mb-4 font-bold text-white",
                children: [nft.price, " ETH"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 85,
                columnNumber: 25
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("button", {
                className: "w-full bg-green-500 text-white font-bold py-3 px-12 rounded",
                onClick: function onClick() {
                  return buyNFT(nft);
                },
                children: "Buy"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 86,
                columnNumber: 25
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 84,
              columnNumber: 21
            }, _this)]
          }, i, true, {
            fileName: _jsxFileName,
            lineNumber: 75,
            columnNumber: 17
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 11
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 70,
    columnNumber: 5
  }, this);
}

_s(Home, "HTwEWQ12E87N2/ThZYbqikB0WEU=");

_c = Home;

var _c;

$RefreshReg$(_c, "Home");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNDNlZTdhYjJiYjg0NTA1Yzc0OWIuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBOztBQUVlLFNBQVNTLElBQVQsR0FBZ0I7QUFBQTs7QUFBQTs7QUFDN0Isa0JBQXdCUCwrQ0FBUSxDQUFDLEVBQUQsQ0FBaEM7QUFBQSxNQUFPUSxJQUFQO0FBQUEsTUFBYUMsT0FBYjs7QUFDQSxtQkFBd0NULCtDQUFRLENBQUMsWUFBRCxDQUFoRDtBQUFBLE1BQU9VLFlBQVA7QUFBQSxNQUFxQkMsZUFBckI7O0FBRUFaLEVBQUFBLGdEQUFTLENBQUMsWUFBSztBQUNiYSxJQUFBQSxRQUFRO0FBQ1QsR0FGUSxFQUVOLEVBRk0sQ0FBVDs7QUFKNkIsV0FRZEEsUUFSYztBQUFBO0FBQUEsSUFzQzdCOzs7QUF0QzZCO0FBQUEsZ09BUTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNFO0FBQ0E7QUFFTUMsY0FBQUEsUUFKUixHQUltQixJQUFJZixvRUFBSixFQUpuQjtBQUtRa0IsY0FBQUEsYUFMUixHQUt3QixJQUFJbEIsbURBQUosQ0FBb0JLLCtDQUFwQixFQUFnQ0Usc0VBQWhDLEVBQXlDUSxRQUF6QyxDQUx4QjtBQU1RTSxjQUFBQSxjQU5SLEdBTXlCLElBQUlyQixtREFBSixDQUFvQk0scURBQXBCLEVBQXNDRSxnRkFBdEMsRUFBb0RPLFFBQXBELENBTnpCO0FBQUE7QUFBQSxxQkFPcUJNLGNBQWMsQ0FBQ0MsaUJBQWYsRUFQckI7O0FBQUE7QUFPUUMsY0FBQUEsSUFQUjtBQUFBO0FBQUEscUJBU3NCQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsSUFBSSxDQUFDRyxHQUFMO0FBQUEsMk9BQVMsaUJBQU1DLENBQU47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQ0FDaEJULGFBQWEs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O0FBQUE7QUFBQSxtQkFETztBQUFBLFNBQVQ7QUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUROO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQTRCRDs7R0F0RnVCbEI7O0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7ZXRoZXJzfSBmcm9tICdldGhlcnMnXG5pbXBvcnQge3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuaW1wb3J0IFdlYjNNb2RhbCBmcm9tICd3ZWIzbW9kYWwnXG5cbmltcG9ydCB7IG5mdGFkZHJlc3MsIG5mdG1hcmtldGFkZHJlc3MgfSBmcm9tICcuLi9jb25maWcnXG5cbmltcG9ydCBORlQgZnJvbSAnLi4vYXJ0aWZhY3RzL2NvbnRyYWN0cy9ORlQuc29sL05GVC5qc29uJ1xuaW1wb3J0IEtCTWFya2V0IGZyb20gJy4uL2FydGlmYWN0cy9jb250cmFjdHMvS0JNYXJrZXQuc29sL0tCTWFya2V0Lmpzb24nXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFtuZnRzLCBzZXRORnRzXSA9IHVzZVN0YXRlKFtdKVxuICBjb25zdCBbbG9hZGluZ1N0YXRlLCBzZXRMb2FkaW5nU3RhdGVdID0gdXNlU3RhdGUoJ25vdC1sb2FkZWQnKVxuXG4gIHVzZUVmZmVjdCgoKT0+IHtcbiAgICBsb2FkTkZUcygpXG4gIH0sIFtdKVxuXG4gIGFzeW5jIGZ1bmN0aW9uIGxvYWRORlRzKCkge1xuICAgIC8vIHdoYXQgd2Ugd2FudCB0byBsb2FkOlxuICAgIC8vICoqKnByb3ZpZGVyLCB0b2tlbkNvbnRyYWN0LCBtYXJrZXRDb250cmFjdCwgZGF0YSBmb3Igb3VyIG1hcmtldEl0ZW1zKioqXG5cbiAgICBjb25zdCBwcm92aWRlciA9IG5ldyBldGhlcnMucHJvdmlkZXJzLkpzb25ScGNQcm92aWRlcigpXG4gICAgY29uc3QgdG9rZW5Db250cmFjdCA9IG5ldyBldGhlcnMuQ29udHJhY3QobmZ0YWRkcmVzcywgTkZULmFiaSwgcHJvdmlkZXIpXG4gICAgY29uc3QgbWFya2V0Q29udHJhY3QgPSBuZXcgZXRoZXJzLkNvbnRyYWN0KG5mdG1hcmtldGFkZHJlc3MsIEtCTWFya2V0LmFiaSwgcHJvdmlkZXIpXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IG1hcmtldENvbnRyYWN0LmZldGNoTWFya2V0VG9rZW5zKClcblxuICAgIGNvbnN0IGl0ZW1zID0gYXdhaXQgUHJvbWlzZS5hbGwoZGF0YS5tYXAoYXN5bmMgaSA9PiB7XG4gICAgICBjb25zdCB0b2tlblVyaSA9IGF3YWl0IHRva2VuQ29udHJhY3QudG9rZW5VUkkoaS50b2tlbklkKVxuICAgICAgLy8gd2Ugd2FudCBnZXQgdGhlIHRva2VuIG1ldGFkYXRhIC0ganNvbiBcbiAgICAgIGNvbnN0IG1ldGEgPSBhd2FpdCBheGlvcy5nZXQodG9rZW5VcmkpXG4gICAgICBsZXQgcHJpY2UgPSBldGhlcnMudXRpbHMuZm9ybWF0VW5pdHMoaS5wcmljZS50b1N0cmluZygpLCAnZXRoZXInKVxuICAgICAgbGV0IGl0ZW0gPSB7XG4gICAgICAgIHByaWNlLFxuICAgICAgICB0b2tlbklkOiBpLnRva2VuSWQudG9OdW1iZXIoKSxcbiAgICAgICAgc2VsbGVyOiBpLnNlbGxlcixcbiAgICAgICAgb3duZXI6IGkub3duZXIsXG4gICAgICAgIGltYWdlOiBtZXRhLmRhdGEuaW1hZ2UsIFxuICAgICAgICBuYW1lOiBtZXRhLmRhdGEubmFtZSxcbiAgICAgICAgZGVzY3JpcHRpb246IG1ldGEuZGF0YS5kZXNjcmlwdGlvblxuICAgICAgfVxuICAgICAgcmV0dXJuIGl0ZW1cbiAgICB9KSlcblxuICAgIHNldE5GdHMoaXRlbXMpXG4gICAgc2V0TG9hZGluZ1N0YXRlKCdsb2FkZWQnKVxuICB9XG5cbiAgLy8gZnVuY3Rpb24gdG8gYnV5IG5mdHMgZm9yIG1hcmtldCBcblxuICBhc3luYyBmdW5jdGlvbiBidXlORlQobmZ0KSB7XG4gICAgY29uc3Qgd2ViM01vZGFsID0gbmV3IFdlYjNNb2RhbCgpXG4gICAgY29uc3QgY29ubmVjdGlvbiA9IGF3YWl0IHdlYjNNb2RhbC5jb25uZWN0KClcbiAgICBjb25zdCBwcm92aWRlciA9IG5ldyBldGhlcnMucHJvdmlkZXJzLldlYjNQcm92aWRlcihjb25uZWN0aW9uKVxuICAgIGNvbnN0IHNpZ25lciA9IHByb3ZpZGVyLmdldFNpZ25lcigpXG4gICAgY29uc3QgY29udHJhY3QgPSBuZXcgZXRoZXJzLkNvbnRyYWN0KG5mdG1hcmtldGFkZHJlc3MsIEtCTWFya2V0LmFiaSwgc2lnbmVyKVxuXG4gICAgY29uc3QgcHJpY2UgPSBldGhlcnMudXRpbHMucGFyc2VVbml0cyhuZnQucHJpY2UudG9TdHJpbmcoKSwgJ2V0aGVyJylcbiAgICBjb25zdCB0cmFuc2FjdGlvbiA9IGF3YWl0IGNvbnRyYWN0LmNyZWF0ZU1hcmtldFNhbGUobmZ0YWRkcmVzcywgbmZ0LnRva2VuSWQsIHtcbiAgICAgIHZhbHVlOiBwcmljZVxuICAgIH0pXG5cbiAgICBhd2FpdCB0cmFuc2FjdGlvbi53YWl0KClcbiAgICBsb2FkTkZUcygpXG4gIH1cbiAgaWYobG9hZGluZ1N0YXRlID09PSAnbG9hZGVkJyAmJiAhbmZ0cy5sZW5ndGgpIHJldHVybiAoPGgxXG4gIGNsYXNzTmFtZT0ncHgtMjAgcHktNyB0ZXh0LTR4MSc+Tm8gTkZ0cyBpbiBtYXJrZXRwbGFjZTwvaDE+KVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J2ZsZXgganVzdGlmeS1jZW50ZXInPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdweC00JyBzdHlsZT17e21heFdpZHRoOiAnMTYwMHB4J319PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdncmlkIGdyaWQtY29scy0xIHNtOmdyaWQtY29scy0yIGxnOmdyaWQtY29scy00IGdhcC00IHB0LTQnPlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBuZnRzLm1hcCgobmZ0LCBpKT0+KFxuICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpfSBjbGFzc05hbWU9J2JvcmRlciBzaGFkb3cgcm91bmRlZC14MSBvdmVyZmxvdy1oaWRkZW4nPlxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e25mdC5pbWFnZX0gLz5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwLTQnPlxuICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17e2hlaWdodDonNjRweCd9fSBjbGFzc05hbWU9J3RleHQtM3gxIGZvbnQtc2VtaWJvbGQnPntcbiAgICAgICAgICAgICAgICAgICAgICBuZnQubmFtZX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2hlaWdodDonNzJweCcsIG92ZXJmbG93OidoaWRkZW4nfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J3RleHQtZ3JheS00MDAnPntuZnQuZGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncC00IGJnLWJsYWNrJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0ndGV4dC0zeC0xIG1iLTQgZm9udC1ib2xkIHRleHQtd2hpdGUnPntuZnQucHJpY2V9IEVUSDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSd3LWZ1bGwgYmctZ3JlZW4tNTAwIHRleHQtd2hpdGUgZm9udC1ib2xkIHB5LTMgcHgtMTIgcm91bmRlZCdcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpPT4gYnV5TkZUKG5mdCl9ID5CdXlcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG4iXSwibmFtZXMiOlsiZXRoZXJzIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJheGlvcyIsIldlYjNNb2RhbCIsIm5mdGFkZHJlc3MiLCJuZnRtYXJrZXRhZGRyZXNzIiwiTkZUIiwiS0JNYXJrZXQiLCJIb21lIiwibmZ0cyIsInNldE5GdHMiLCJsb2FkaW5nU3RhdGUiLCJzZXRMb2FkaW5nU3RhdGUiLCJsb2FkTkZUcyIsInByb3ZpZGVyIiwicHJvdmlkZXJzIiwiSnNvblJwY1Byb3ZpZGVyIiwidG9rZW5Db250cmFjdCIsIkNvbnRyYWN0IiwiYWJpIiwibWFya2V0Q29udHJhY3QiLCJmZXRjaE1hcmtldFRva2VucyIsImRhdGEiLCJQcm9taXNlIiwiYWxsIiwibWFwIiwiaSIsInRva2VuVVJJIiwidG9rZW5JZCIsInRva2VuVXJpIiwiZ2V0IiwibWV0YSIsInByaWNlIiwidXRpbHMiLCJmb3JtYXRVbml0cyIsInRvU3RyaW5nIiwiaXRlbSIsInRvTnVtYmVyIiwic2VsbGVyIiwib3duZXIiLCJpbWFnZSIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsIml0ZW1zIiwiYnV5TkZUIiwibmZ0Iiwid2ViM01vZGFsIiwiY29ubmVjdCIsImNvbm5lY3Rpb24iLCJXZWIzUHJvdmlkZXIiLCJzaWduZXIiLCJnZXRTaWduZXIiLCJjb250cmFjdCIsInBhcnNlVW5pdHMiLCJjcmVhdGVNYXJrZXRTYWxlIiwidmFsdWUiLCJ0cmFuc2FjdGlvbiIsIndhaXQiLCJsZW5ndGgiLCJtYXhXaWR0aCIsImhlaWdodCIsIm92ZXJmbG93Il0sInNvdXJjZVJvb3QiOiIifQ==