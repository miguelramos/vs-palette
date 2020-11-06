(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(self, function() {
return /******/ (() => { // webpackBootstrap
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
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const utils_1 = __webpack_require__(/*! ./utils */ "./src/lib/utils.ts");
function createFieldset(title, listener) {
    const fieldset = document.createElement('fieldset');
    const legend = document.createElement('legend');
    let timer = 0;
    legend.contentEditable = 'true';
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
const api = {
    createFieldset(title) {
        return createFieldset(title, this.onTitleChange);
    },
    onTitleChange: utils_1.noop
};
exports.default = api;


/***/ }),

/***/ "./src/lib/li.ts":
/*!***********************!*\
  !*** ./src/lib/li.ts ***!
  \***********************/
/*! flagged exports */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const utils_1 = __webpack_require__(/*! ./utils */ "./src/lib/utils.ts");
/**
 * Creates div to preview color.
 *
 * @param color string
 */
function createColorPreview(color = null) {
    const colorPreview = document.createElement('div');
    colorPreview.className = 'color-preview';
    if (color) {
        colorPreview.style.backgroundColor = `#${color}`;
    }
    return colorPreview;
}
/**
 * Creates button to remove li element
 */
function createColorRemove() {
    const button = document.createElement('button');
    const i = document.createElement('i');
    i.className = 'codicon codicon-trash';
    button.className = 'color-icon icon';
    button.appendChild(i);
    return button;
}
/**
 * Creates button to copy color to clipboard
 */
function createColorCopy() {
    const button = document.createElement('button');
    const i = document.createElement('i');
    i.className = 'codicon codicon-clippy';
    button.className = 'color-icon icon';
    button.appendChild(i);
    return button;
}
/**
 * Creates group element to define color.
 * @param color COLOR
 * @param listeners
 */
function createColorInput(color = null, listeners = {}) {
    const colorElement = document.createElement('li');
    const colorInput = document.createElement('input');
    const colorNameInput = document.createElement('input');
    const colorPreview = createColorPreview();
    const colorRemove = createColorRemove();
    const colorClip = createColorCopy();
    let timer = 0;
    colorElement.className = 'color-entry';
    colorInput.className = 'color-input';
    colorInput.placeholder = 'Color hex';
    colorNameInput.className = 'color-input';
    colorNameInput.placeholder = 'Color name or css var';
    colorNameInput.disabled = true;
    if (color) {
        colorInput.value = color.value;
        colorNameInput.value = color.name;
        colorNameInput.disabled = false;
        colorPreview.style.backgroundColor = `#${color.value}`;
    }
    colorElement.appendChild(colorPreview);
    colorElement.appendChild(colorInput);
    colorElement.appendChild(colorNameInput);
    colorElement.appendChild(colorClip);
    colorElement.appendChild(colorRemove);
    colorRemove.addEventListener('click', () => {
        listeners.onColorRemove(colorInput.value);
        colorElement.remove();
    });
    colorInput.addEventListener('input', (event) => {
        clearTimeout(timer);
        timer = window.setTimeout(() => {
            colorPreview.style.backgroundColor = `#${event.target.value}`;
            colorNameInput.disabled = false;
            colorNameInput.focus();
            listeners.onColorChange(event.target.value);
        }, 800);
    });
    colorNameInput.addEventListener('input', (event) => {
        clearTimeout(timer);
        timer = window.setTimeout(() => {
            listeners.onNameChange(colorInput.value, event.target.value);
        }, 800);
    });
    colorClip.addEventListener('click', () => {
        colorNameInput.select();
        colorNameInput.setSelectionRange(0, 99999);
        document.execCommand('copy');
    });
    return colorElement;
}
const api = {
    createColorInput(color = null) {
        return createColorInput(color, {
            onColorChange: this.onColorChange,
            onColorRemove: this.onColorRemove,
            onNameChange: this.onNameChange
        });
    },
    onColorRemove: utils_1.noop,
    onColorChange: utils_1.noop,
    onNameChange: utils_1.noop
};
exports.default = api;


/***/ }),

/***/ "./src/lib/ul.ts":
/*!***********************!*\
  !*** ./src/lib/ul.ts ***!
  \***********************/
/*! flagged exports */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__ */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
function createColorGroup() {
    const ul = document.createElement('ul');
    ul.className = 'color-list';
    return ul;
}
const api = {
    createGroup: () => {
        return createColorGroup();
    }
};
exports.default = {
    ...api
};


/***/ }),

/***/ "./src/lib/utils.ts":
/*!**************************!*\
  !*** ./src/lib/utils.ts ***!
  \**************************/
/*! flagged exports */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! export noop [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__ */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.noop = void 0;
// eslint-disable-next-line @typescript-eslint/no-empty-function
exports.noop = function (...args) { };


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! flagged exports */
/*! export __esModule [provided] [maybe used in index (runtime-defined)] [usage prevents renaming] */
/*! other exports [not provided] [maybe used in index (runtime-defined)] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const fieldset_1 = __webpack_require__(/*! ./lib/fieldset */ "./src/lib/fieldset.ts");
const ul_1 = __webpack_require__(/*! ./lib/ul */ "./src/lib/ul.ts");
const li_1 = __webpack_require__(/*! ./lib/li */ "./src/lib/li.ts");
(function () {
    const app = document.getElementById('app');
    if (app) {
        const vscode = acquireVsCodeApi();
        const state = vscode.getState() || {
            name: 'New Palette (click to edit)',
            colors: {},
        };
        console.dir(state);
        console.dir(vscode);
        const hasColors = () => !!Object.keys(state.colors).length;
        fieldset_1.default.onTitleChange = (title) => {
            console.dir(title);
            vscode.setState({ name: title, colors: state.colors });
        };
        li_1.default.onColorChange = (color) => {
            state.colors[color] = '';
            vscode.setState({ name: state.name, colors: state.colors });
        };
        li_1.default.onColorRemove = (color) => {
            delete state.colors[color];
            vscode.setState({ name: state.name, colors: state.colors });
        };
        li_1.default.onNameChange = (color, name) => {
            state.colors[color] = name;
            vscode.setState({ name: state.name, colors: state.colors });
            console.dir(state);
        };
        const fieldset = fieldset_1.default.createFieldset(state.name);
        const ul = ul_1.default.createGroup();
        window.addEventListener('message', (event) => {
            const message = event.data; // The json data that the extension sent
            switch (message.type) {
                case 'addColor': {
                    const li = li_1.default.createColorInput();
                    ul.appendChild(li);
                    break;
                }
                case 'clearColors': {
                    ul.innerHTML = '';
                    state.colors = {};
                    vscode.setState({ name: state.name, colors: state.colors });
                    break;
                }
            }
        });
        if (hasColors()) {
            Object.keys(state.colors).forEach((key) => {
                const li = li_1.default.createColorInput({ value: key, name: state.colors[key] });
                ul.appendChild(li);
            });
        }
        fieldset.appendChild(ul);
        app.appendChild(fieldset);
    }
})();


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
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__("./src/main.ts");
/******/ })()
;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92cy1wYWxldHRlL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly92cy1wYWxldHRlLy4vc3JjL2xpYi9maWVsZHNldC50cyIsIndlYnBhY2s6Ly92cy1wYWxldHRlLy4vc3JjL2xpYi9saS50cyIsIndlYnBhY2s6Ly92cy1wYWxldHRlLy4vc3JjL2xpYi91bC50cyIsIndlYnBhY2s6Ly92cy1wYWxldHRlLy4vc3JjL2xpYi91dGlscy50cyIsIndlYnBhY2s6Ly92cy1wYWxldHRlLy4vc3JjL21haW4udHMiLCJ3ZWJwYWNrOi8vdnMtcGFsZXR0ZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly92cy1wYWxldHRlL3dlYnBhY2svc3RhcnR1cCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWQSx5RUFBK0I7QUFPL0IsU0FBUyxjQUFjLENBQUMsS0FBYSxFQUFFLFFBQWlDO0lBQ3RFLE1BQU0sUUFBUSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDcEQsTUFBTSxNQUFNLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNoRCxJQUFJLEtBQUssR0FBRyxDQUFDLENBQUM7SUFFZCxNQUFNLENBQUMsZUFBZSxHQUFHLE1BQU0sQ0FBQztJQUNoQyxNQUFNLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztJQUUzQixNQUFNLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLENBQUMsS0FBVSxFQUFFLEVBQUU7UUFDOUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRXBCLEtBQUssR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLEdBQUcsRUFBRTtZQUM3QixRQUFRLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxX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QUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7VUNyQkE7VUFDQTtVQUNBO1VBQ0EiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSB7XG5cdFx0dmFyIGEgPSBmYWN0b3J5KCk7XG5cdFx0Zm9yKHZhciBpIGluIGEpICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgPyBleHBvcnRzIDogcm9vdClbaV0gPSBhW2ldO1xuXHR9XG59KShzZWxmLCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCJpbXBvcnQgeyBub29wIH0gZnJvbSAnLi91dGlscyc7XG5cbnR5cGUgQVBJID0ge1xuICBvblRpdGxlQ2hhbmdlPzogKHRpdGxlOiBzdHJpbmcpID0+IHZvaWQ7XG4gIGNyZWF0ZUZpZWxkc2V0OiAodGl0bGU6IHN0cmluZykgPT4gSFRNTEZpZWxkU2V0RWxlbWVudFxufTtcblxuZnVuY3Rpb24gY3JlYXRlRmllbGRzZXQodGl0bGU6IHN0cmluZywgbGlzdGVuZXI6ICh0aXRsZTogc3RyaW5nKSA9PiB2b2lkICkge1xuICBjb25zdCBmaWVsZHNldCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ZpZWxkc2V0Jyk7XG4gIGNvbnN0IGxlZ2VuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xlZ2VuZCcpO1xuICBsZXQgdGltZXIgPSAwO1xuXG4gIGxlZ2VuZC5jb250ZW50RWRpdGFibGUgPSAndHJ1ZSc7XG4gIGxlZ2VuZC50ZXh0Q29udGVudCA9IHRpdGxlO1xuXG4gIGxlZ2VuZC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIChldmVudDogYW55KSA9PiB7XG4gICAgY2xlYXJUaW1lb3V0KHRpbWVyKTtcblxuICAgIHRpbWVyID0gd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgbGlzdGVuZXIoZXZlbnQudGFyZ2V0LnRleHRDb250ZW50KTtcbiAgICB9LCA4MDApO1xuICB9KTtcblxuICBmaWVsZHNldC5hcHBlbmRDaGlsZChsZWdlbmQpO1xuXG4gIHJldHVybiBmaWVsZHNldDtcbn1cblxuY29uc3QgYXBpOiBBUEkgPSB7XG4gIGNyZWF0ZUZpZWxkc2V0KHRpdGxlOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gY3JlYXRlRmllbGRzZXQodGl0bGUsIHRoaXMub25UaXRsZUNoYW5nZSk7XG4gIH0sXG4gIG9uVGl0bGVDaGFuZ2U6IG5vb3Bcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGFwaTtcbiIsImltcG9ydCB7IG5vb3AgfSBmcm9tICcuL3V0aWxzJztcblxudHlwZSBDT0xPUiA9IHsgbmFtZTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nIH0gfCBudWxsO1xuXG50eXBlIEFQSSA9IHtcbiAgY3JlYXRlQ29sb3JJbnB1dDogKGNvbG9yPzogQ09MT1IpID0+IEhUTUxMSUVsZW1lbnQ7XG4gIG9uQ29sb3JSZW1vdmU/OiAoY29sb3I6IHN0cmluZykgPT4gdm9pZCxcbiAgb25Db2xvckNoYW5nZT86IChjb2xvcjogc3RyaW5nKSA9PiB2b2lkLFxuICBvbk5hbWVDaGFuZ2U/OiAoY29sb3I6IHN0cmluZywgbmFtZTogc3RyaW5nKSA9PiB2b2lkXG59O1xuXG4vKipcbiAqIENyZWF0ZXMgZGl2IHRvIHByZXZpZXcgY29sb3IuXG4gKlxuICogQHBhcmFtIGNvbG9yIHN0cmluZ1xuICovXG5mdW5jdGlvbiBjcmVhdGVDb2xvclByZXZpZXcoY29sb3I6IHN0cmluZyA9IG51bGwpIHtcbiAgY29uc3QgY29sb3JQcmV2aWV3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbG9yUHJldmlldy5jbGFzc05hbWUgPSAnY29sb3ItcHJldmlldyc7XG5cbiAgaWYgKGNvbG9yKSB7XG4gICAgY29sb3JQcmV2aWV3LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGAjJHtjb2xvcn1gO1xuICB9XG5cbiAgcmV0dXJuIGNvbG9yUHJldmlldztcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGJ1dHRvbiB0byByZW1vdmUgbGkgZWxlbWVudFxuICovXG5mdW5jdGlvbiBjcmVhdGVDb2xvclJlbW92ZSgpIHtcbiAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGNvbnN0IGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG5cbiAgaS5jbGFzc05hbWUgPSAnY29kaWNvbiBjb2RpY29uLXRyYXNoJztcbiAgYnV0dG9uLmNsYXNzTmFtZSA9ICdjb2xvci1pY29uIGljb24nO1xuXG4gIGJ1dHRvbi5hcHBlbmRDaGlsZChpKTtcblxuICByZXR1cm4gYnV0dG9uO1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYnV0dG9uIHRvIGNvcHkgY29sb3IgdG8gY2xpcGJvYXJkXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUNvbG9yQ29weSgpIHtcbiAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGNvbnN0IGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG5cbiAgaS5jbGFzc05hbWUgPSAnY29kaWNvbiBjb2RpY29uLWNsaXBweSc7XG4gIGJ1dHRvbi5jbGFzc05hbWUgPSAnY29sb3ItaWNvbiBpY29uJztcblxuICBidXR0b24uYXBwZW5kQ2hpbGQoaSk7XG5cbiAgcmV0dXJuIGJ1dHRvbjtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGdyb3VwIGVsZW1lbnQgdG8gZGVmaW5lIGNvbG9yLlxuICogQHBhcmFtIGNvbG9yIENPTE9SXG4gKiBAcGFyYW0gbGlzdGVuZXJzXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUNvbG9ySW5wdXQoXG4gIGNvbG9yOiBDT0xPUiA9IG51bGwsXG4gIGxpc3RlbmVyczoge1xuICAgIG9uQ29sb3JSZW1vdmU/OiAoY29sb3I6IHN0cmluZykgPT4gdm9pZCxcbiAgICBvbkNvbG9yQ2hhbmdlPzogKGNvbG9yOiBzdHJpbmcpID0+IHZvaWQsXG4gICAgb25OYW1lQ2hhbmdlPzogKGNvbG9yOiBzdHJpbmcsIG5hbWU6IHN0cmluZykgPT4gdm9pZFxuICB9ID0ge31cbikge1xuICBjb25zdCBjb2xvckVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICBjb25zdCBjb2xvcklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgY29uc3QgY29sb3JOYW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBjb25zdCBjb2xvclByZXZpZXcgPSBjcmVhdGVDb2xvclByZXZpZXcoKTtcbiAgY29uc3QgY29sb3JSZW1vdmUgPSBjcmVhdGVDb2xvclJlbW92ZSgpO1xuICBjb25zdCBjb2xvckNsaXAgPSBjcmVhdGVDb2xvckNvcHkoKTtcbiAgbGV0IHRpbWVyID0gMDtcblxuICBjb2xvckVsZW1lbnQuY2xhc3NOYW1lID0gJ2NvbG9yLWVudHJ5JztcblxuICBjb2xvcklucHV0LmNsYXNzTmFtZSA9ICdjb2xvci1pbnB1dCc7XG4gIGNvbG9ySW5wdXQucGxhY2Vob2xkZXIgPSAnQ29sb3IgaGV4JztcbiAgY29sb3JOYW1lSW5wdXQuY2xhc3NOYW1lID0gJ2NvbG9yLWlucHV0JztcbiAgY29sb3JOYW1lSW5wdXQucGxhY2Vob2xkZXIgPSAnQ29sb3IgbmFtZSBvciBjc3MgdmFyJztcbiAgY29sb3JOYW1lSW5wdXQuZGlzYWJsZWQgPSB0cnVlO1xuXG4gIGlmIChjb2xvcikge1xuICAgIGNvbG9ySW5wdXQudmFsdWUgPSBjb2xvci52YWx1ZTtcbiAgICBjb2xvck5hbWVJbnB1dC52YWx1ZSA9IGNvbG9yLm5hbWU7XG4gICAgY29sb3JOYW1lSW5wdXQuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICBjb2xvclByZXZpZXcuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gYCMke2NvbG9yLnZhbHVlfWA7XG4gIH1cblxuICBjb2xvckVsZW1lbnQuYXBwZW5kQ2hpbGQoY29sb3JQcmV2aWV3KTtcbiAgY29sb3JFbGVtZW50LmFwcGVuZENoaWxkKGNvbG9ySW5wdXQpO1xuICBjb2xvckVsZW1lbnQuYXBwZW5kQ2hpbGQoY29sb3JOYW1lSW5wdXQpO1xuICBjb2xvckVsZW1lbnQuYXBwZW5kQ2hpbGQoY29sb3JDbGlwKTtcbiAgY29sb3JFbGVtZW50LmFwcGVuZENoaWxkKGNvbG9yUmVtb3ZlKTtcblxuICBjb2xvclJlbW92ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBsaXN0ZW5lcnMub25Db2xvclJlbW92ZShjb2xvcklucHV0LnZhbHVlKTtcbiAgICBjb2xvckVsZW1lbnQucmVtb3ZlKCk7XG4gIH0pO1xuXG4gIGNvbG9ySW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoZXZlbnQ6IGFueSkgPT4ge1xuICAgIGNsZWFyVGltZW91dCh0aW1lcik7XG5cbiAgICB0aW1lciA9IHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGNvbG9yUHJldmlldy5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBgIyR7ZXZlbnQudGFyZ2V0LnZhbHVlfWA7XG4gICAgICBjb2xvck5hbWVJbnB1dC5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgY29sb3JOYW1lSW5wdXQuZm9jdXMoKTtcblxuICAgICAgbGlzdGVuZXJzLm9uQ29sb3JDaGFuZ2UoZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICB9LCA4MDApO1xuICB9KTtcblxuICBjb2xvck5hbWVJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIChldmVudDogYW55KSA9PiB7XG4gICAgY2xlYXJUaW1lb3V0KHRpbWVyKTtcblxuICAgIHRpbWVyID0gd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgbGlzdGVuZXJzLm9uTmFtZUNoYW5nZShjb2xvcklucHV0LnZhbHVlLCBldmVudC50YXJnZXQudmFsdWUpO1xuICAgIH0sIDgwMCk7XG4gIH0pO1xuXG4gIGNvbG9yQ2xpcC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjb2xvck5hbWVJbnB1dC5zZWxlY3QoKTtcbiAgICBjb2xvck5hbWVJbnB1dC5zZXRTZWxlY3Rpb25SYW5nZSgwLCA5OTk5OSk7XG4gICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ2NvcHknKTtcbiAgfSk7XG5cbiAgcmV0dXJuIGNvbG9yRWxlbWVudDtcbn1cblxuY29uc3QgYXBpOiBBUEkgPSB7XG4gIGNyZWF0ZUNvbG9ySW5wdXQoY29sb3I6IENPTE9SID0gbnVsbCkge1xuICAgIHJldHVybiBjcmVhdGVDb2xvcklucHV0KGNvbG9yLCB7XG4gICAgICBvbkNvbG9yQ2hhbmdlOiB0aGlzLm9uQ29sb3JDaGFuZ2UsXG4gICAgICBvbkNvbG9yUmVtb3ZlOiB0aGlzLm9uQ29sb3JSZW1vdmUsXG4gICAgICBvbk5hbWVDaGFuZ2U6IHRoaXMub25OYW1lQ2hhbmdlXG4gICAgfSApO1xuICB9LFxuICBvbkNvbG9yUmVtb3ZlOiBub29wLFxuICBvbkNvbG9yQ2hhbmdlOiBub29wLFxuICBvbk5hbWVDaGFuZ2U6IG5vb3Bcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGFwaTtcbiIsInR5cGUgQVBJID0ge1xuICBjcmVhdGVHcm91cDogKCkgPT4gSFRNTFVMaXN0RWxlbWVudFxufTtcblxuZnVuY3Rpb24gY3JlYXRlQ29sb3JHcm91cCgpIHtcbiAgY29uc3QgdWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICB1bC5jbGFzc05hbWUgPSAnY29sb3ItbGlzdCc7XG4gIHJldHVybiB1bDtcbn1cblxuY29uc3QgYXBpOiBBUEkgPSB7XG4gIGNyZWF0ZUdyb3VwOiAoKSA9PiB7XG4gICAgcmV0dXJuIGNyZWF0ZUNvbG9yR3JvdXAoKTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICAuLi5hcGlcbn07IiwiLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1lbXB0eS1mdW5jdGlvblxuZXhwb3J0IGNvbnN0IG5vb3AgPSBmdW5jdGlvbiguLi5hcmdzOiBhbnkpOiB2b2lkIHt9OyIsImltcG9ydCBmaWVsZHNldEFwaSBmcm9tICcuL2xpYi9maWVsZHNldCc7XG5pbXBvcnQgdWxBcGkgZnJvbSAnLi9saWIvdWwnO1xuaW1wb3J0IGxpQXBpIGZyb20gJy4vbGliL2xpJztcblxuKGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgYXBwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpO1xuXG4gIGlmIChhcHApIHtcbiAgICBjb25zdCB2c2NvZGUgPSBhY3F1aXJlVnNDb2RlQXBpKCk7XG4gICAgY29uc3Qgc3RhdGUgPSB2c2NvZGUuZ2V0U3RhdGUoKSB8fCB7XG4gICAgICBuYW1lOiAnTmV3IFBhbGV0dGUgKGNsaWNrIHRvIGVkaXQpJyxcbiAgICAgIGNvbG9yczoge30sXG4gICAgfTtcbiAgICBjb25zb2xlLmRpcihzdGF0ZSk7XG4gICAgY29uc29sZS5kaXIodnNjb2RlKTtcbiAgICBjb25zdCBoYXNDb2xvcnMgPSAoKSA9PiAhIU9iamVjdC5rZXlzKHN0YXRlLmNvbG9ycykubGVuZ3RoO1xuXG4gICAgZmllbGRzZXRBcGkub25UaXRsZUNoYW5nZSA9ICh0aXRsZTogc3RyaW5nKSA9PiB7XG4gICAgICBjb25zb2xlLmRpcih0aXRsZSk7XG4gICAgICB2c2NvZGUuc2V0U3RhdGUoeyBuYW1lOiB0aXRsZSwgY29sb3JzOiBzdGF0ZS5jb2xvcnMgfSk7XG4gICAgfTtcblxuICAgIGxpQXBpLm9uQ29sb3JDaGFuZ2UgPSAoY29sb3IpID0+IHtcbiAgICAgIHN0YXRlLmNvbG9yc1tjb2xvcl0gPSAnJztcbiAgICAgIHZzY29kZS5zZXRTdGF0ZSh7IG5hbWU6IHN0YXRlLm5hbWUsIGNvbG9yczogc3RhdGUuY29sb3JzIH0pO1xuICAgIH07XG5cbiAgICBsaUFwaS5vbkNvbG9yUmVtb3ZlID0gKGNvbG9yKSA9PiB7XG4gICAgICBkZWxldGUgc3RhdGUuY29sb3JzW2NvbG9yXTtcbiAgICAgIHZzY29kZS5zZXRTdGF0ZSh7IG5hbWU6IHN0YXRlLm5hbWUsIGNvbG9yczogc3RhdGUuY29sb3JzIH0pO1xuICAgIH07XG5cbiAgICBsaUFwaS5vbk5hbWVDaGFuZ2UgPSAoY29sb3IsIG5hbWUpID0+IHtcbiAgICAgIHN0YXRlLmNvbG9yc1tjb2xvcl0gPSBuYW1lO1xuICAgICAgdnNjb2RlLnNldFN0YXRlKHsgbmFtZTogc3RhdGUubmFtZSwgY29sb3JzOiBzdGF0ZS5jb2xvcnMgfSk7XG4gICAgICBjb25zb2xlLmRpcihzdGF0ZSk7XG4gICAgfTtcblxuICAgIGNvbnN0IGZpZWxkc2V0ID0gZmllbGRzZXRBcGkuY3JlYXRlRmllbGRzZXQoc3RhdGUubmFtZSk7XG4gICAgY29uc3QgdWwgPSB1bEFwaS5jcmVhdGVHcm91cCgpO1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCAoZXZlbnQpID0+IHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBldmVudC5kYXRhOyAvLyBUaGUganNvbiBkYXRhIHRoYXQgdGhlIGV4dGVuc2lvbiBzZW50XG4gICAgICBzd2l0Y2ggKG1lc3NhZ2UudHlwZSkge1xuICAgICAgICBjYXNlICdhZGRDb2xvcic6IHtcbiAgICAgICAgICBjb25zdCBsaSA9IGxpQXBpLmNyZWF0ZUNvbG9ySW5wdXQoKTtcbiAgICAgICAgICB1bC5hcHBlbmRDaGlsZChsaSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSAnY2xlYXJDb2xvcnMnOiB7XG4gICAgICAgICAgdWwuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgICAgc3RhdGUuY29sb3JzID0ge307XG4gICAgICAgICAgdnNjb2RlLnNldFN0YXRlKHsgbmFtZTogc3RhdGUubmFtZSwgY29sb3JzOiBzdGF0ZS5jb2xvcnMgfSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChoYXNDb2xvcnMoKSkge1xuICAgICAgT2JqZWN0LmtleXMoc3RhdGUuY29sb3JzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgY29uc3QgbGkgPSBsaUFwaS5jcmVhdGVDb2xvcklucHV0KHsgdmFsdWU6IGtleSwgbmFtZTogc3RhdGUuY29sb3JzW2tleV0gfSk7XG4gICAgICAgIHVsLmFwcGVuZENoaWxkKGxpKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGZpZWxkc2V0LmFwcGVuZENoaWxkKHVsKTtcblxuICAgIGFwcC5hcHBlbmRDaGlsZChmaWVsZHNldCk7XG4gIH1cbn0pKCk7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHRpZihfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdKSB7XG5cdFx0cmV0dXJuIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0uZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIG1vZHVsZSBleHBvcnRzIG11c3QgYmUgcmV0dXJuZWQgZnJvbSBydW50aW1lIHNvIGVudHJ5IGlubGluaW5nIGlzIGRpc2FibGVkXG4vLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbnJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvbWFpbi50c1wiKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=