/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/lib/fieldset.ts":
/*!*****************************!*\
  !*** ./src/lib/fieldset.ts ***!
  \*****************************/
/*! flagged exports */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__ */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
function createFieldset(title, listener) {
    const fieldset = document.createElement('fieldset');
    const legend = document.createElement('legend');
    let timer = 0;
    legend.contentEditable = "true";
    legend.textContent = title;
    legend.addEventListener('input', (event) => {
        clearTimeout(timer);
        timer = window.setTimeout(() => {
            listener(event.target.textContent);
        }, 800);
    });
    fieldset.appendChild(legend);
    return fieldset;
}
// eslint-disable-next-line @typescript-eslint/no-empty-function
const noop = function (...args) { };
const api = {
    createFieldset: function (title) {
        const listener = this.onTitleChange ? this.onTitleChange : noop;
        return createFieldset(title, listener);
    }
};
exports.default = {
    ...api
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! flagged exports */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const fieldset_1 = __webpack_require__(/*! ./lib/fieldset */ "./src/lib/fieldset.ts");
(function () {
    const app = document.getElementById('app');
    if (app) {
        const vscode = acquireVsCodeApi();
        const state = vscode.getState() || { name: 'New Palette', colors: {} };
        fieldset_1.default.onTitleChange = (title) => {
            console.dir(state);
            vscode.setState({ name: title, colors: state.colors });
            console.dir(vscode.getState());
        };
        const fieldset = fieldset_1.default.createFieldset(state.name);
        app.appendChild(fieldset);
    }
}());


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/main.ts");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wYWxldHRlLWNvbG9ycy8uL3NyYy9saWIvZmllbGRzZXQudHMiLCJ3ZWJwYWNrOi8vcGFsZXR0ZS1jb2xvcnMvLi9zcmMvbWFpbi50cyIsIndlYnBhY2s6Ly9wYWxldHRlLWNvbG9ycy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9wYWxldHRlLWNvbG9ycy93ZWJwYWNrL3N0YXJ0dXAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxTQUFTLGNBQWMsQ0FBQyxLQUFhLEVBQUUsUUFBaUM7SUFDdEUsTUFBTSxRQUFRLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUNwRCxNQUFNLE1BQU0sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ2hELElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQztJQUVkLE1BQU0sQ0FBQyxlQUFlLEdBQUcsTUFBTSxDQUFDO0lBQ2hDLE1BQU0sQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO0lBRTNCLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxLQUFVLEVBQUUsRUFBRTtRQUM5QyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFcEIsS0FBSyxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsR0FBRyxFQUFFO1lBQzdCLFFBQVEsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3JDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUNWLENBQUMsQ0FBQyxDQUFDO0lBRUgsUUFBUSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUU3QixPQUFPLFFBQVEsQ0FBQztBQUNsQixDQUFDO0FBT0QsZ0VBQWdFO0FBQ2hFLE1BQU0sSUFBSSxHQUFHLFVBQVMsR0FBRyxJQUFTLElBQVMsQ0FBQyxDQUFDO0FBRTdDLE1BQU0sR0FBRyxHQUFRO0lBQ2YsY0FBYyxFQUFFLFVBQVUsS0FBYTtRQUNyQyxNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDaEUsT0FBTyxjQUFjLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7Q0FDRixDQUFDO0FBRUYsa0JBQWU7SUFDYixHQUFHLEdBQUc7Q0FDUCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3RDRixzRkFBeUM7QUFFekMsQ0FBQztJQUNDLE1BQU0sR0FBRyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7SUFFM0MsSUFBSSxHQUFHLEVBQUU7UUFDUCxNQUFNLE1BQU0sR0FBRyxnQkFBZ0IsRUFBRSxDQUFDO1FBQ2xDLE1BQU0sS0FBSyxHQUFHLE1BQU0sQ0FBQyxRQUFRLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxhQUFhLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBRSxDQUFDO1FBRXZFLGtCQUFXLENBQUMsYUFBYSxHQUFHLENBQUMsS0FBYSxFQUFFLEVBQUU7WUFDNUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNuQixNQUFNLENBQUMsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7WUFDdkQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztRQUNqQyxDQUFDLENBQUM7UUFDRixNQUFNLFFBQVEsR0FBRyxrQkFBVyxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFeEQsR0FBRyxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztLQUMzQjtBQUNILENBQUMsRUFBRSxDQUFDLENBQUM7Ozs7Ozs7VUNsQkw7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7OztVQ3JCQTtVQUNBO1VBQ0E7VUFDQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gY3JlYXRlRmllbGRzZXQodGl0bGU6IHN0cmluZywgbGlzdGVuZXI6ICh0aXRsZTogc3RyaW5nKSA9PiB2b2lkICkge1xuICBjb25zdCBmaWVsZHNldCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ZpZWxkc2V0Jyk7XG4gIGNvbnN0IGxlZ2VuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xlZ2VuZCcpO1xuICBsZXQgdGltZXIgPSAwO1xuXG4gIGxlZ2VuZC5jb250ZW50RWRpdGFibGUgPSBcInRydWVcIjtcbiAgbGVnZW5kLnRleHRDb250ZW50ID0gdGl0bGU7XG5cbiAgbGVnZW5kLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKGV2ZW50OiBhbnkpID0+IHtcbiAgICBjbGVhclRpbWVvdXQodGltZXIpO1xuXG4gICAgdGltZXIgPSB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBsaXN0ZW5lcihldmVudC50YXJnZXQudGV4dENvbnRlbnQpO1xuICAgIH0sIDgwMCk7XG4gIH0pO1xuXG4gIGZpZWxkc2V0LmFwcGVuZENoaWxkKGxlZ2VuZCk7XG5cbiAgcmV0dXJuIGZpZWxkc2V0O1xufVxuXG50eXBlIEFQSSA9IHtcbiAgb25UaXRsZUNoYW5nZT86ICh0aXRsZTogc3RyaW5nKSA9PiB2b2lkO1xuICBjcmVhdGVGaWVsZHNldDogKHRpdGxlOiBzdHJpbmcpID0+IEhUTUxGaWVsZFNldEVsZW1lbnRcbn07XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZW1wdHktZnVuY3Rpb25cbmNvbnN0IG5vb3AgPSBmdW5jdGlvbiguLi5hcmdzOiBhbnkpOiB2b2lkIHt9O1xuXG5jb25zdCBhcGk6IEFQSSA9IHtcbiAgY3JlYXRlRmllbGRzZXQ6IGZ1bmN0aW9uICh0aXRsZTogc3RyaW5nKSB7XG4gICAgY29uc3QgbGlzdGVuZXIgPSB0aGlzLm9uVGl0bGVDaGFuZ2UgPyB0aGlzLm9uVGl0bGVDaGFuZ2UgOiBub29wO1xuICAgIHJldHVybiBjcmVhdGVGaWVsZHNldCh0aXRsZSwgbGlzdGVuZXIpO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIC4uLmFwaVxufTtcbiIsImltcG9ydCBmaWVsZHNldEFwaSBmcm9tICcuL2xpYi9maWVsZHNldCc7XG5cbihmdW5jdGlvbigpIHtcbiAgY29uc3QgYXBwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpO1xuXG4gIGlmIChhcHApIHtcbiAgICBjb25zdCB2c2NvZGUgPSBhY3F1aXJlVnNDb2RlQXBpKCk7XG4gICAgY29uc3Qgc3RhdGUgPSB2c2NvZGUuZ2V0U3RhdGUoKSB8fCB7IG5hbWU6ICdOZXcgUGFsZXR0ZScsIGNvbG9yczoge30gfTtcblxuICAgIGZpZWxkc2V0QXBpLm9uVGl0bGVDaGFuZ2UgPSAodGl0bGU6IHN0cmluZykgPT4ge1xuICAgICAgY29uc29sZS5kaXIoc3RhdGUpO1xuICAgICAgdnNjb2RlLnNldFN0YXRlKHsgbmFtZTogdGl0bGUsIGNvbG9yczogc3RhdGUuY29sb3JzIH0pO1xuICAgICAgY29uc29sZS5kaXIodnNjb2RlLmdldFN0YXRlKCkpO1xuICAgIH07XG4gICAgY29uc3QgZmllbGRzZXQgPSBmaWVsZHNldEFwaS5jcmVhdGVGaWVsZHNldChzdGF0ZS5uYW1lKTtcblxuICAgIGFwcC5hcHBlbmRDaGlsZChmaWVsZHNldCk7XG4gIH1cbn0oKSk7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHRpZihfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdKSB7XG5cdFx0cmV0dXJuIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0uZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlXG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvbWFpbi50c1wiKTtcbi8vIFRoaXMgZW50cnkgbW9kdWxlIHVzZWQgJ2V4cG9ydHMnIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbiJdLCJzb3VyY2VSb290IjoiIn0=