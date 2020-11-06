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
    const { onColorChange, onColorRemove, onNameChange } = listeners;
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
        onColorRemove(colorInput.value);
        colorElement.remove();
    });
    colorInput.addEventListener('input', (event) => {
        clearTimeout(timer);
        timer = window.setTimeout(() => {
            colorPreview.style.backgroundColor = `#${event.target.value}`;
            colorNameInput.disabled = false;
            colorNameInput.focus();
            console.dir(listeners.onColorChange);
            listeners.onColorChange(event.target.value);
        }, 800);
    });
    colorNameInput.addEventListener('input', (event) => {
        clearTimeout(timer);
        timer = window.setTimeout(() => {
            onNameChange(event.target.value, colorInput.value);
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
    createColorInput: (color = null) => {
        return createColorInput(color, { onColorChange: api.onColorChange, onColorRemove: api.onColorRemove, onNameChange: api.onNameChange });
    },
    onColorRemove: utils_1.noop,
    onColorChange: utils_1.noop,
    onNameChange: utils_1.noop
};
exports.default = {
    ...api
};


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
        const { createFieldset } = fieldset_1.default;
        const { createGroup } = ul_1.default;
        const { createColorInput } = li_1.default;
        fieldset_1.default.onTitleChange = (title) => {
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
        const fieldset = createFieldset(state.name);
        const ul = createGroup();
        window.addEventListener('message', (event) => {
            const message = event.data; // The json data that the extension sent
            switch (message.type) {
                case 'addColor': {
                    const li = createColorInput();
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
                const li = createColorInput({ value: key, name: state.colors[key] });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92cy1wYWxldHRlL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly92cy1wYWxldHRlLy4vc3JjL2xpYi9maWVsZHNldC50cyIsIndlYnBhY2s6Ly92cy1wYWxldHRlLy4vc3JjL2xpYi9saS50cyIsIndlYnBhY2s6Ly92cy1wYWxldHRlLy4vc3JjL2xpYi91bC50cyIsIndlYnBhY2s6Ly92cy1wYWxldHRlLy4vc3JjL2xpYi91dGlscy50cyIsIndlYnBhY2s6Ly92cy1wYWxldHRlLy4vc3JjL21haW4udHMiLCJ3ZWJwYWNrOi8vdnMtcGFsZXR0ZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly92cy1wYWxldHRlL3dlYnBhY2svc3RhcnR1cCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWQSx5RUFBK0I7QUFPL0IsU0FBUyxjQUFjLENBQUMsS0FBYSxFQUFFLFFBQWlDO0lBQ3RFLE1BQU0sUUFBUSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDcEQsTUFBTSxNQUFNLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNoRCxJQUFJLEtBQUssR0FBRyxDQUFDLENBQUM7SUFFZCxNQUFNLENBQUMsZUFBZSxHQUFHLE1BQU0sQ0FBQztJQUNoQyxNQUFNLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztJQUUzQixNQUFNLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLENBQUMsS0FBVSxFQUFFLEVBQUU7UUFDOUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRXBCLEtBQUssR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLEdBQUcsRUFBRTtZQUM3QixRQUFRLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxX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LENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBRXpCLEdBQUcsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7S0FDM0I7QUFDSCxDQUFDLENBQUMsRUFBRSxDQUFDOzs7Ozs7O1VDeEVMO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7VUNyQkE7VUFDQTtVQUNBO1VBQ0EiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSB7XG5cdFx0dmFyIGEgPSBmYWN0b3J5KCk7XG5cdFx0Zm9yKHZhciBpIGluIGEpICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgPyBleHBvcnRzIDogcm9vdClbaV0gPSBhW2ldO1xuXHR9XG59KShzZWxmLCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCJpbXBvcnQgeyBub29wIH0gZnJvbSAnLi91dGlscyc7XG5cbnR5cGUgQVBJID0ge1xuICBvblRpdGxlQ2hhbmdlPzogKHRpdGxlOiBzdHJpbmcpID0+IHZvaWQ7XG4gIGNyZWF0ZUZpZWxkc2V0OiAodGl0bGU6IHN0cmluZykgPT4gSFRNTEZpZWxkU2V0RWxlbWVudFxufTtcblxuZnVuY3Rpb24gY3JlYXRlRmllbGRzZXQodGl0bGU6IHN0cmluZywgbGlzdGVuZXI6ICh0aXRsZTogc3RyaW5nKSA9PiB2b2lkICkge1xuICBjb25zdCBmaWVsZHNldCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ZpZWxkc2V0Jyk7XG4gIGNvbnN0IGxlZ2VuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xlZ2VuZCcpO1xuICBsZXQgdGltZXIgPSAwO1xuXG4gIGxlZ2VuZC5jb250ZW50RWRpdGFibGUgPSAndHJ1ZSc7XG4gIGxlZ2VuZC50ZXh0Q29udGVudCA9IHRpdGxlO1xuXG4gIGxlZ2VuZC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIChldmVudDogYW55KSA9PiB7XG4gICAgY2xlYXJUaW1lb3V0KHRpbWVyKTtcblxuICAgIHRpbWVyID0gd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgbGlzdGVuZXIoZXZlbnQudGFyZ2V0LnRleHRDb250ZW50KTtcbiAgICB9LCA4MDApO1xuICB9KTtcblxuICBmaWVsZHNldC5hcHBlbmRDaGlsZChsZWdlbmQpO1xuXG4gIHJldHVybiBmaWVsZHNldDtcbn1cblxuY29uc3QgYXBpOiBBUEkgPSB7XG4gIGNyZWF0ZUZpZWxkc2V0KHRpdGxlOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gY3JlYXRlRmllbGRzZXQodGl0bGUsIHRoaXMub25UaXRsZUNoYW5nZSk7XG4gIH0sXG4gIG9uVGl0bGVDaGFuZ2U6IG5vb3Bcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGFwaTtcbiIsImltcG9ydCB7IG5vb3AgfSBmcm9tICcuL3V0aWxzJztcblxudHlwZSBDT0xPUiA9IHsgbmFtZTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nIH0gfCBudWxsO1xuXG50eXBlIEFQSSA9IHtcbiAgY3JlYXRlQ29sb3JJbnB1dDogKGNvbG9yPzogQ09MT1IpID0+IEhUTUxMSUVsZW1lbnQ7XG4gIG9uQ29sb3JSZW1vdmU/OiAoY29sb3I6IHN0cmluZykgPT4gdm9pZCxcbiAgb25Db2xvckNoYW5nZT86IChjb2xvcjogc3RyaW5nKSA9PiB2b2lkLFxuICBvbk5hbWVDaGFuZ2U/OiAoY29sb3I6IHN0cmluZywgbmFtZTogc3RyaW5nKSA9PiB2b2lkXG59O1xuXG4vKipcbiAqIENyZWF0ZXMgZGl2IHRvIHByZXZpZXcgY29sb3IuXG4gKiBcbiAqIEBwYXJhbSBjb2xvciBzdHJpbmdcbiAqL1xuZnVuY3Rpb24gY3JlYXRlQ29sb3JQcmV2aWV3KGNvbG9yOiBzdHJpbmcgPSBudWxsKSB7XG4gIGNvbnN0IGNvbG9yUHJldmlldyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb2xvclByZXZpZXcuY2xhc3NOYW1lID0gJ2NvbG9yLXByZXZpZXcnO1xuXG4gIGlmIChjb2xvcikge1xuICAgIGNvbG9yUHJldmlldy5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBgIyR7Y29sb3J9YDtcbiAgfVxuXG4gIHJldHVybiBjb2xvclByZXZpZXc7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBidXR0b24gdG8gcmVtb3ZlIGxpIGVsZW1lbnRcbiAqL1xuZnVuY3Rpb24gY3JlYXRlQ29sb3JSZW1vdmUoKSB7XG4gIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBjb25zdCBpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuXG4gIGkuY2xhc3NOYW1lID0gJ2NvZGljb24gY29kaWNvbi10cmFzaCc7XG4gIGJ1dHRvbi5jbGFzc05hbWUgPSAnY29sb3ItaWNvbiBpY29uJztcblxuICBidXR0b24uYXBwZW5kQ2hpbGQoaSk7XG5cbiAgcmV0dXJuIGJ1dHRvbjtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGJ1dHRvbiB0byBjb3B5IGNvbG9yIHRvIGNsaXBib2FyZFxuICovXG5mdW5jdGlvbiBjcmVhdGVDb2xvckNvcHkoKSB7XG4gIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBjb25zdCBpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuXG4gIGkuY2xhc3NOYW1lID0gJ2NvZGljb24gY29kaWNvbi1jbGlwcHknO1xuICBidXR0b24uY2xhc3NOYW1lID0gJ2NvbG9yLWljb24gaWNvbic7XG5cbiAgYnV0dG9uLmFwcGVuZENoaWxkKGkpO1xuXG4gIHJldHVybiBidXR0b247XG59XG5cbi8qKlxuICogQ3JlYXRlcyBncm91cCBlbGVtZW50IHRvIGRlZmluZSBjb2xvci5cbiAqIEBwYXJhbSBjb2xvciBDT0xPUlxuICogQHBhcmFtIGxpc3RlbmVycyBcbiAqL1xuZnVuY3Rpb24gY3JlYXRlQ29sb3JJbnB1dChcbiAgY29sb3I6IENPTE9SID0gbnVsbCxcbiAgbGlzdGVuZXJzOiB7XG4gICAgb25Db2xvclJlbW92ZT86IChjb2xvcjogc3RyaW5nKSA9PiB2b2lkLFxuICAgIG9uQ29sb3JDaGFuZ2U/OiAoY29sb3I6IHN0cmluZykgPT4gdm9pZCxcbiAgICBvbk5hbWVDaGFuZ2U/OiAoY29sb3I6IHN0cmluZywgbmFtZTogc3RyaW5nKSA9PiB2b2lkXG4gIH0gPSB7fVxuKSB7XG4gIGNvbnN0IGNvbG9yRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gIGNvbnN0IGNvbG9ySW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBjb25zdCBjb2xvck5hbWVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIGNvbnN0IGNvbG9yUHJldmlldyA9IGNyZWF0ZUNvbG9yUHJldmlldygpO1xuICBjb25zdCBjb2xvclJlbW92ZSA9IGNyZWF0ZUNvbG9yUmVtb3ZlKCk7XG4gIGNvbnN0IGNvbG9yQ2xpcCA9IGNyZWF0ZUNvbG9yQ29weSgpO1xuICBsZXQgdGltZXIgPSAwO1xuXG4gIGNvbnN0IHsgb25Db2xvckNoYW5nZSwgb25Db2xvclJlbW92ZSwgb25OYW1lQ2hhbmdlIH0gPSBsaXN0ZW5lcnM7XG5cbiAgY29sb3JFbGVtZW50LmNsYXNzTmFtZSA9ICdjb2xvci1lbnRyeSc7XG5cbiAgY29sb3JJbnB1dC5jbGFzc05hbWUgPSAnY29sb3ItaW5wdXQnO1xuICBjb2xvcklucHV0LnBsYWNlaG9sZGVyID0gJ0NvbG9yIGhleCc7XG4gIGNvbG9yTmFtZUlucHV0LmNsYXNzTmFtZSA9ICdjb2xvci1pbnB1dCc7XG4gIGNvbG9yTmFtZUlucHV0LnBsYWNlaG9sZGVyID0gJ0NvbG9yIG5hbWUgb3IgY3NzIHZhcic7XG4gIGNvbG9yTmFtZUlucHV0LmRpc2FibGVkID0gdHJ1ZTtcblxuICBpZiAoY29sb3IpIHtcbiAgICBjb2xvcklucHV0LnZhbHVlID0gY29sb3IudmFsdWU7XG4gICAgY29sb3JOYW1lSW5wdXQudmFsdWUgPSBjb2xvci5uYW1lO1xuICAgIGNvbG9yTmFtZUlucHV0LmRpc2FibGVkID0gZmFsc2U7XG4gICAgY29sb3JQcmV2aWV3LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGAjJHtjb2xvci52YWx1ZX1gO1xuICB9XG5cbiAgY29sb3JFbGVtZW50LmFwcGVuZENoaWxkKGNvbG9yUHJldmlldyk7XG4gIGNvbG9yRWxlbWVudC5hcHBlbmRDaGlsZChjb2xvcklucHV0KTtcbiAgY29sb3JFbGVtZW50LmFwcGVuZENoaWxkKGNvbG9yTmFtZUlucHV0KTtcbiAgY29sb3JFbGVtZW50LmFwcGVuZENoaWxkKGNvbG9yQ2xpcCk7XG4gIGNvbG9yRWxlbWVudC5hcHBlbmRDaGlsZChjb2xvclJlbW92ZSk7XG5cbiAgY29sb3JSZW1vdmUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgb25Db2xvclJlbW92ZShjb2xvcklucHV0LnZhbHVlKTtcbiAgICBjb2xvckVsZW1lbnQucmVtb3ZlKCk7XG4gIH0pO1xuXG4gIGNvbG9ySW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoZXZlbnQ6IGFueSkgPT4ge1xuICAgIGNsZWFyVGltZW91dCh0aW1lcik7XG5cbiAgICB0aW1lciA9IHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGNvbG9yUHJldmlldy5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBgIyR7ZXZlbnQudGFyZ2V0LnZhbHVlfWA7XG4gICAgICBjb2xvck5hbWVJbnB1dC5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgY29sb3JOYW1lSW5wdXQuZm9jdXMoKTtcbiAgICAgIGNvbnNvbGUuZGlyKGxpc3RlbmVycy5vbkNvbG9yQ2hhbmdlKTtcbiAgICAgIGxpc3RlbmVycy5vbkNvbG9yQ2hhbmdlKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gICAgfSwgODAwKTtcbiAgfSk7XG5cbiAgY29sb3JOYW1lSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoZXZlbnQ6IGFueSkgPT4ge1xuICAgIGNsZWFyVGltZW91dCh0aW1lcik7XG5cbiAgICB0aW1lciA9IHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIG9uTmFtZUNoYW5nZShldmVudC50YXJnZXQudmFsdWUsIGNvbG9ySW5wdXQudmFsdWUpO1xuICAgIH0sIDgwMCk7XG4gIH0pO1xuXG4gIGNvbG9yQ2xpcC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjb2xvck5hbWVJbnB1dC5zZWxlY3QoKTtcbiAgICBjb2xvck5hbWVJbnB1dC5zZXRTZWxlY3Rpb25SYW5nZSgwLCA5OTk5OSk7XG4gICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ2NvcHknKTtcbiAgfSk7XG5cbiAgcmV0dXJuIGNvbG9yRWxlbWVudDtcbn1cblxuY29uc3QgYXBpOiBBUEkgPSB7XG4gIGNyZWF0ZUNvbG9ySW5wdXQ6IChjb2xvcjogQ09MT1IgPSBudWxsKSA9PiB7XG4gICAgcmV0dXJuIGNyZWF0ZUNvbG9ySW5wdXQoY29sb3IsIHsgb25Db2xvckNoYW5nZTogYXBpLm9uQ29sb3JDaGFuZ2UsIG9uQ29sb3JSZW1vdmU6IGFwaS5vbkNvbG9yUmVtb3ZlLCBvbk5hbWVDaGFuZ2U6IGFwaS5vbk5hbWVDaGFuZ2UgfSApO1xuICB9LFxuICBvbkNvbG9yUmVtb3ZlOiBub29wLFxuICBvbkNvbG9yQ2hhbmdlOiBub29wLFxuICBvbk5hbWVDaGFuZ2U6IG5vb3Bcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgLi4uYXBpXG59O1xuIiwidHlwZSBBUEkgPSB7XG4gIGNyZWF0ZUdyb3VwOiAoKSA9PiBIVE1MVUxpc3RFbGVtZW50XG59O1xuXG5mdW5jdGlvbiBjcmVhdGVDb2xvckdyb3VwKCkge1xuICBjb25zdCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gIHVsLmNsYXNzTmFtZSA9ICdjb2xvci1saXN0JztcbiAgcmV0dXJuIHVsO1xufVxuXG5jb25zdCBhcGk6IEFQSSA9IHtcbiAgY3JlYXRlR3JvdXA6ICgpID0+IHtcbiAgICByZXR1cm4gY3JlYXRlQ29sb3JHcm91cCgpO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIC4uLmFwaVxufTsiLCIvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWVtcHR5LWZ1bmN0aW9uXG5leHBvcnQgY29uc3Qgbm9vcCA9IGZ1bmN0aW9uKC4uLmFyZ3M6IGFueSk6IHZvaWQge307IiwiaW1wb3J0IGZpZWxkc2V0QXBpIGZyb20gJy4vbGliL2ZpZWxkc2V0JztcbmltcG9ydCB1bEFwaSBmcm9tICcuL2xpYi91bCc7XG5pbXBvcnQgbGlBcGkgZnJvbSAnLi9saWIvbGknO1xuXG4oZnVuY3Rpb24gKCkge1xuICBjb25zdCBhcHAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJyk7XG5cbiAgaWYgKGFwcCkge1xuICAgIGNvbnN0IHZzY29kZSA9IGFjcXVpcmVWc0NvZGVBcGkoKTtcbiAgICBjb25zdCBzdGF0ZSA9IHZzY29kZS5nZXRTdGF0ZSgpIHx8IHtcbiAgICAgIG5hbWU6ICdOZXcgUGFsZXR0ZSAoY2xpY2sgdG8gZWRpdCknLFxuICAgICAgY29sb3JzOiB7fSxcbiAgICB9O1xuICAgIGNvbnNvbGUuZGlyKHN0YXRlKTtcbiAgICBjb25zb2xlLmRpcih2c2NvZGUpO1xuICAgIGNvbnN0IGhhc0NvbG9ycyA9ICgpID0+ICEhT2JqZWN0LmtleXMoc3RhdGUuY29sb3JzKS5sZW5ndGg7XG5cbiAgICBjb25zdCB7IGNyZWF0ZUZpZWxkc2V0IH0gPSBmaWVsZHNldEFwaTtcbiAgICBjb25zdCB7IGNyZWF0ZUdyb3VwIH0gPSB1bEFwaTtcbiAgICBjb25zdCB7IGNyZWF0ZUNvbG9ySW5wdXQgfSA9IGxpQXBpO1xuXG4gICAgZmllbGRzZXRBcGkub25UaXRsZUNoYW5nZSA9ICh0aXRsZTogc3RyaW5nKSA9PiB7XG4gICAgICB2c2NvZGUuc2V0U3RhdGUoeyBuYW1lOiB0aXRsZSwgY29sb3JzOiBzdGF0ZS5jb2xvcnMgfSk7XG4gICAgfTtcblxuICAgIGxpQXBpLm9uQ29sb3JDaGFuZ2UgPSAoY29sb3IpID0+IHtcbiAgICAgIHN0YXRlLmNvbG9yc1tjb2xvcl0gPSAnJztcbiAgICAgIHZzY29kZS5zZXRTdGF0ZSh7IG5hbWU6IHN0YXRlLm5hbWUsIGNvbG9yczogc3RhdGUuY29sb3JzIH0pO1xuICAgIH07XG5cbiAgICBsaUFwaS5vbkNvbG9yUmVtb3ZlID0gKGNvbG9yKSA9PiB7XG4gICAgICBkZWxldGUgc3RhdGUuY29sb3JzW2NvbG9yXTtcbiAgICAgIHZzY29kZS5zZXRTdGF0ZSh7IG5hbWU6IHN0YXRlLm5hbWUsIGNvbG9yczogc3RhdGUuY29sb3JzIH0pO1xuICAgIH07XG5cbiAgICBsaUFwaS5vbk5hbWVDaGFuZ2UgPSAoY29sb3IsIG5hbWUpID0+IHtcbiAgICAgIHN0YXRlLmNvbG9yc1tjb2xvcl0gPSBuYW1lO1xuICAgICAgdnNjb2RlLnNldFN0YXRlKHsgbmFtZTogc3RhdGUubmFtZSwgY29sb3JzOiBzdGF0ZS5jb2xvcnMgfSk7XG4gICAgICBjb25zb2xlLmRpcihzdGF0ZSk7XG4gICAgfTtcblxuICAgIGNvbnN0IGZpZWxkc2V0ID0gY3JlYXRlRmllbGRzZXQoc3RhdGUubmFtZSk7XG4gICAgY29uc3QgdWwgPSBjcmVhdGVHcm91cCgpO1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCAoZXZlbnQpID0+IHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBldmVudC5kYXRhOyAvLyBUaGUganNvbiBkYXRhIHRoYXQgdGhlIGV4dGVuc2lvbiBzZW50XG4gICAgICBzd2l0Y2ggKG1lc3NhZ2UudHlwZSkge1xuICAgICAgICBjYXNlICdhZGRDb2xvcic6IHtcbiAgICAgICAgICBjb25zdCBsaSA9IGNyZWF0ZUNvbG9ySW5wdXQoKTtcbiAgICAgICAgICB1bC5hcHBlbmRDaGlsZChsaSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSAnY2xlYXJDb2xvcnMnOiB7XG4gICAgICAgICAgdWwuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgICAgc3RhdGUuY29sb3JzID0ge307XG4gICAgICAgICAgdnNjb2RlLnNldFN0YXRlKHsgbmFtZTogc3RhdGUubmFtZSwgY29sb3JzOiBzdGF0ZS5jb2xvcnMgfSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChoYXNDb2xvcnMoKSkge1xuICAgICAgT2JqZWN0LmtleXMoc3RhdGUuY29sb3JzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgY29uc3QgbGkgPSBjcmVhdGVDb2xvcklucHV0KHsgdmFsdWU6IGtleSwgbmFtZTogc3RhdGUuY29sb3JzW2tleV0gfSk7XG4gICAgICAgIHVsLmFwcGVuZENoaWxkKGxpKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGZpZWxkc2V0LmFwcGVuZENoaWxkKHVsKTtcblxuICAgIGFwcC5hcHBlbmRDaGlsZChmaWVsZHNldCk7XG4gIH1cbn0pKCk7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHRpZihfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdKSB7XG5cdFx0cmV0dXJuIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0uZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIG1vZHVsZSBleHBvcnRzIG11c3QgYmUgcmV0dXJuZWQgZnJvbSBydW50aW1lIHNvIGVudHJ5IGlubGluaW5nIGlzIGRpc2FibGVkXG4vLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbnJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvbWFpbi50c1wiKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=