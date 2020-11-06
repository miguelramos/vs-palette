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
    createFieldset: (title) => {
        return createFieldset(title, api.onTitleChange);
    },
    onTitleChange: utils_1.noop
};
exports.default = {
    ...api
};


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
            onColorChange(event.target.value);
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
        const { onColorChange, onColorRemove, onNameChange } = api;
        return createColorInput(color, { onColorChange, onColorRemove, onNameChange });
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
        let { colors } = state;
        const hasColors = () => !!Object.keys(colors).length;
        const { createFieldset } = fieldset_1.default;
        const { createGroup } = ul_1.default;
        const { createColorInput } = li_1.default;
        fieldset_1.default.onTitleChange = (title) => {
            vscode.setState({ name: title, colors });
        };
        li_1.default.onColorChange = (color) => {
            colors[color] = '';
            vscode.setState({ name: state.name, colors });
        };
        li_1.default.onColorRemove = (color) => {
            delete colors[color];
            vscode.setState({ name: state.name, colors });
        };
        li_1.default.onNameChange = (color, name) => {
            colors[color] = name;
            vscode.setState({ name: state.name, colors });
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
                    colors = {};
                    vscode.setState({ name: state.name, colors });
                    break;
                }
            }
        });
        if (hasColors()) {
            Object.keys(colors).forEach((key) => {
                const li = createColorInput({ value: key, name: colors[key] });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92cy1wYWxldHRlL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly92cy1wYWxldHRlLy4vc3JjL2xpYi9maWVsZHNldC50cyIsIndlYnBhY2s6Ly92cy1wYWxldHRlLy4vc3JjL2xpYi9saS50cyIsIndlYnBhY2s6Ly92cy1wYWxldHRlLy4vc3JjL2xpYi91bC50cyIsIndlYnBhY2s6Ly92cy1wYWxldHRlLy4vc3JjL2xpYi91dGlscy50cyIsIndlYnBhY2s6Ly92cy1wYWxldHRlLy4vc3JjL21haW4udHMiLCJ3ZWJwYWNrOi8vdnMtcGFsZXR0ZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly92cy1wYWxldHRlL3dlYnBhY2svc3RhcnR1cCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWQSx5RUFBK0I7QUFPL0IsU0FBUyxjQUFjLENBQUMsS0FBYSxFQUFFLFFBQWlDO0lBQ3RFLE1BQU0sUUFBUSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDcEQsTUFBTSxNQUFNLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNoRCxJQUFJLEtBQUssR0FBRyxDQUFDLENBQUM7SUFFZCxNQUFNLENBQUMsZUFBZSxHQUFHLE1BQU0sQ0FBQztJQUNoQyxNQUFNLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztJQUUzQixNQUFNLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLENBQUMsS0FBVSxFQUFFLEVBQUU7UUFDOUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRXBCLEtBQUssR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLEdBQUcsRUFBRTtZQUM3QixRQUFRLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxX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a1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2Uge1xuXHRcdHZhciBhID0gZmFjdG9yeSgpO1xuXHRcdGZvcih2YXIgaSBpbiBhKSAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnID8gZXhwb3J0cyA6IHJvb3QpW2ldID0gYVtpXTtcblx0fVxufSkoc2VsZiwgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiaW1wb3J0IHsgbm9vcCB9IGZyb20gJy4vdXRpbHMnO1xuXG50eXBlIEFQSSA9IHtcbiAgb25UaXRsZUNoYW5nZT86ICh0aXRsZTogc3RyaW5nKSA9PiB2b2lkO1xuICBjcmVhdGVGaWVsZHNldDogKHRpdGxlOiBzdHJpbmcpID0+IEhUTUxGaWVsZFNldEVsZW1lbnRcbn07XG5cbmZ1bmN0aW9uIGNyZWF0ZUZpZWxkc2V0KHRpdGxlOiBzdHJpbmcsIGxpc3RlbmVyOiAodGl0bGU6IHN0cmluZykgPT4gdm9pZCApIHtcbiAgY29uc3QgZmllbGRzZXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmaWVsZHNldCcpO1xuICBjb25zdCBsZWdlbmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsZWdlbmQnKTtcbiAgbGV0IHRpbWVyID0gMDtcblxuICBsZWdlbmQuY29udGVudEVkaXRhYmxlID0gJ3RydWUnO1xuICBsZWdlbmQudGV4dENvbnRlbnQgPSB0aXRsZTtcblxuICBsZWdlbmQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoZXZlbnQ6IGFueSkgPT4ge1xuICAgIGNsZWFyVGltZW91dCh0aW1lcik7XG5cbiAgICB0aW1lciA9IHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGxpc3RlbmVyKGV2ZW50LnRhcmdldC50ZXh0Q29udGVudCk7XG4gICAgfSwgODAwKTtcbiAgfSk7XG5cbiAgZmllbGRzZXQuYXBwZW5kQ2hpbGQobGVnZW5kKTtcblxuICByZXR1cm4gZmllbGRzZXQ7XG59XG5cbmNvbnN0IGFwaTogQVBJID0ge1xuICBjcmVhdGVGaWVsZHNldDogKHRpdGxlOiBzdHJpbmcpID0+IHtcbiAgICByZXR1cm4gY3JlYXRlRmllbGRzZXQodGl0bGUsIGFwaS5vblRpdGxlQ2hhbmdlKTtcbiAgfSxcbiAgb25UaXRsZUNoYW5nZTogbm9vcFxufTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICAuLi5hcGlcbn07XG4iLCJpbXBvcnQgeyBub29wIH0gZnJvbSAnLi91dGlscyc7XG5cbnR5cGUgQ09MT1IgPSB7IG5hbWU6IHN0cmluZywgdmFsdWU6IHN0cmluZyB9IHwgbnVsbDtcblxudHlwZSBBUEkgPSB7XG4gIGNyZWF0ZUNvbG9ySW5wdXQ6IChjb2xvcj86IENPTE9SKSA9PiBIVE1MTElFbGVtZW50O1xuICBvbkNvbG9yUmVtb3ZlPzogKGNvbG9yOiBzdHJpbmcpID0+IHZvaWQsXG4gIG9uQ29sb3JDaGFuZ2U/OiAoY29sb3I6IHN0cmluZykgPT4gdm9pZCxcbiAgb25OYW1lQ2hhbmdlPzogKGNvbG9yOiBzdHJpbmcsIG5hbWU6IHN0cmluZykgPT4gdm9pZFxufTtcblxuLyoqXG4gKiBDcmVhdGVzIGRpdiB0byBwcmV2aWV3IGNvbG9yLlxuICogXG4gKiBAcGFyYW0gY29sb3Igc3RyaW5nXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUNvbG9yUHJldmlldyhjb2xvcjogc3RyaW5nID0gbnVsbCkge1xuICBjb25zdCBjb2xvclByZXZpZXcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29sb3JQcmV2aWV3LmNsYXNzTmFtZSA9ICdjb2xvci1wcmV2aWV3JztcblxuICBpZiAoY29sb3IpIHtcbiAgICBjb2xvclByZXZpZXcuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gYCMke2NvbG9yfWA7XG4gIH1cblxuICByZXR1cm4gY29sb3JQcmV2aWV3O1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYnV0dG9uIHRvIHJlbW92ZSBsaSBlbGVtZW50XG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUNvbG9yUmVtb3ZlKCkge1xuICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgY29uc3QgaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcblxuICBpLmNsYXNzTmFtZSA9ICdjb2RpY29uIGNvZGljb24tdHJhc2gnO1xuICBidXR0b24uY2xhc3NOYW1lID0gJ2NvbG9yLWljb24gaWNvbic7XG5cbiAgYnV0dG9uLmFwcGVuZENoaWxkKGkpO1xuXG4gIHJldHVybiBidXR0b247XG59XG5cbi8qKlxuICogQ3JlYXRlcyBidXR0b24gdG8gY29weSBjb2xvciB0byBjbGlwYm9hcmRcbiAqL1xuZnVuY3Rpb24gY3JlYXRlQ29sb3JDb3B5KCkge1xuICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgY29uc3QgaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcblxuICBpLmNsYXNzTmFtZSA9ICdjb2RpY29uIGNvZGljb24tY2xpcHB5JztcbiAgYnV0dG9uLmNsYXNzTmFtZSA9ICdjb2xvci1pY29uIGljb24nO1xuXG4gIGJ1dHRvbi5hcHBlbmRDaGlsZChpKTtcblxuICByZXR1cm4gYnV0dG9uO1xufVxuXG4vKipcbiAqIENyZWF0ZXMgZ3JvdXAgZWxlbWVudCB0byBkZWZpbmUgY29sb3IuXG4gKiBAcGFyYW0gY29sb3IgQ09MT1JcbiAqIEBwYXJhbSBsaXN0ZW5lcnMgXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUNvbG9ySW5wdXQoXG4gIGNvbG9yOiBDT0xPUiA9IG51bGwsXG4gIGxpc3RlbmVyczoge1xuICAgIG9uQ29sb3JSZW1vdmU/OiAoY29sb3I6IHN0cmluZykgPT4gdm9pZCxcbiAgICBvbkNvbG9yQ2hhbmdlPzogKGNvbG9yOiBzdHJpbmcpID0+IHZvaWQsXG4gICAgb25OYW1lQ2hhbmdlPzogKGNvbG9yOiBzdHJpbmcsIG5hbWU6IHN0cmluZykgPT4gdm9pZFxuICB9ID0ge31cbikge1xuICBjb25zdCBjb2xvckVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICBjb25zdCBjb2xvcklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgY29uc3QgY29sb3JOYW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBjb25zdCBjb2xvclByZXZpZXcgPSBjcmVhdGVDb2xvclByZXZpZXcoKTtcbiAgY29uc3QgY29sb3JSZW1vdmUgPSBjcmVhdGVDb2xvclJlbW92ZSgpO1xuICBjb25zdCBjb2xvckNsaXAgPSBjcmVhdGVDb2xvckNvcHkoKTtcbiAgbGV0IHRpbWVyID0gMDtcblxuICBjb25zdCB7IG9uQ29sb3JDaGFuZ2UsIG9uQ29sb3JSZW1vdmUsIG9uTmFtZUNoYW5nZSB9ID0gbGlzdGVuZXJzO1xuXG4gIGNvbG9yRWxlbWVudC5jbGFzc05hbWUgPSAnY29sb3ItZW50cnknO1xuXG4gIGNvbG9ySW5wdXQuY2xhc3NOYW1lID0gJ2NvbG9yLWlucHV0JztcbiAgY29sb3JJbnB1dC5wbGFjZWhvbGRlciA9ICdDb2xvciBoZXgnO1xuICBjb2xvck5hbWVJbnB1dC5jbGFzc05hbWUgPSAnY29sb3ItaW5wdXQnO1xuICBjb2xvck5hbWVJbnB1dC5wbGFjZWhvbGRlciA9ICdDb2xvciBuYW1lIG9yIGNzcyB2YXInO1xuICBjb2xvck5hbWVJbnB1dC5kaXNhYmxlZCA9IHRydWU7XG5cbiAgaWYgKGNvbG9yKSB7XG4gICAgY29sb3JJbnB1dC52YWx1ZSA9IGNvbG9yLnZhbHVlO1xuICAgIGNvbG9yTmFtZUlucHV0LnZhbHVlID0gY29sb3IubmFtZTtcbiAgICBjb2xvck5hbWVJbnB1dC5kaXNhYmxlZCA9IGZhbHNlO1xuICAgIGNvbG9yUHJldmlldy5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBgIyR7Y29sb3IudmFsdWV9YDtcbiAgfVxuXG4gIGNvbG9yRWxlbWVudC5hcHBlbmRDaGlsZChjb2xvclByZXZpZXcpO1xuICBjb2xvckVsZW1lbnQuYXBwZW5kQ2hpbGQoY29sb3JJbnB1dCk7XG4gIGNvbG9yRWxlbWVudC5hcHBlbmRDaGlsZChjb2xvck5hbWVJbnB1dCk7XG4gIGNvbG9yRWxlbWVudC5hcHBlbmRDaGlsZChjb2xvckNsaXApO1xuICBjb2xvckVsZW1lbnQuYXBwZW5kQ2hpbGQoY29sb3JSZW1vdmUpO1xuXG4gIGNvbG9yUmVtb3ZlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIG9uQ29sb3JSZW1vdmUoY29sb3JJbnB1dC52YWx1ZSk7XG4gICAgY29sb3JFbGVtZW50LnJlbW92ZSgpO1xuICB9KTtcblxuICBjb2xvcklucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKGV2ZW50OiBhbnkpID0+IHtcbiAgICBjbGVhclRpbWVvdXQodGltZXIpO1xuXG4gICAgdGltZXIgPSB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBjb2xvclByZXZpZXcuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gYCMke2V2ZW50LnRhcmdldC52YWx1ZX1gO1xuICAgICAgY29sb3JOYW1lSW5wdXQuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgIGNvbG9yTmFtZUlucHV0LmZvY3VzKCk7XG4gICAgICBvbkNvbG9yQ2hhbmdlKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gICAgfSwgODAwKTtcbiAgfSk7XG5cbiAgY29sb3JOYW1lSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoZXZlbnQ6IGFueSkgPT4ge1xuICAgIGNsZWFyVGltZW91dCh0aW1lcik7XG5cbiAgICB0aW1lciA9IHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIG9uTmFtZUNoYW5nZShldmVudC50YXJnZXQudmFsdWUsIGNvbG9ySW5wdXQudmFsdWUpO1xuICAgIH0sIDgwMCk7XG4gIH0pO1xuXG4gIGNvbG9yQ2xpcC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjb2xvck5hbWVJbnB1dC5zZWxlY3QoKTtcbiAgICBjb2xvck5hbWVJbnB1dC5zZXRTZWxlY3Rpb25SYW5nZSgwLCA5OTk5OSk7XG4gICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ2NvcHknKTtcbiAgfSk7XG5cbiAgcmV0dXJuIGNvbG9yRWxlbWVudDtcbn1cblxuY29uc3QgYXBpOiBBUEkgPSB7XG4gIGNyZWF0ZUNvbG9ySW5wdXQ6IChjb2xvcjogQ09MT1IgPSBudWxsKSA9PiB7XG4gICAgY29uc3QgeyBvbkNvbG9yQ2hhbmdlLCBvbkNvbG9yUmVtb3ZlLCBvbk5hbWVDaGFuZ2UgfSA9IGFwaTtcbiAgICByZXR1cm4gY3JlYXRlQ29sb3JJbnB1dChjb2xvciwgeyBvbkNvbG9yQ2hhbmdlLCBvbkNvbG9yUmVtb3ZlLCBvbk5hbWVDaGFuZ2UgfSApO1xuICB9LFxuICBvbkNvbG9yUmVtb3ZlOiBub29wLFxuICBvbkNvbG9yQ2hhbmdlOiBub29wLFxuICBvbk5hbWVDaGFuZ2U6IG5vb3Bcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgLi4uYXBpXG59O1xuIiwidHlwZSBBUEkgPSB7XG4gIGNyZWF0ZUdyb3VwOiAoKSA9PiBIVE1MVUxpc3RFbGVtZW50XG59O1xuXG5mdW5jdGlvbiBjcmVhdGVDb2xvckdyb3VwKCkge1xuICBjb25zdCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gIHVsLmNsYXNzTmFtZSA9ICdjb2xvci1saXN0JztcbiAgcmV0dXJuIHVsO1xufVxuXG5jb25zdCBhcGk6IEFQSSA9IHtcbiAgY3JlYXRlR3JvdXA6ICgpID0+IHtcbiAgICByZXR1cm4gY3JlYXRlQ29sb3JHcm91cCgpO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIC4uLmFwaVxufTsiLCIvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWVtcHR5LWZ1bmN0aW9uXG5leHBvcnQgY29uc3Qgbm9vcCA9IGZ1bmN0aW9uKC4uLmFyZ3M6IGFueSk6IHZvaWQge307IiwiaW1wb3J0IGZpZWxkc2V0QXBpIGZyb20gJy4vbGliL2ZpZWxkc2V0JztcbmltcG9ydCB1bEFwaSBmcm9tICcuL2xpYi91bCc7XG5pbXBvcnQgbGlBcGkgZnJvbSAnLi9saWIvbGknO1xuXG4oZnVuY3Rpb24gKCkge1xuICBjb25zdCBhcHAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJyk7XG5cbiAgaWYgKGFwcCkge1xuICAgIGNvbnN0IHZzY29kZSA9IGFjcXVpcmVWc0NvZGVBcGkoKTtcbiAgICBjb25zdCBzdGF0ZSA9IHZzY29kZS5nZXRTdGF0ZSgpIHx8IHtcbiAgICAgIG5hbWU6ICdOZXcgUGFsZXR0ZSAoY2xpY2sgdG8gZWRpdCknLFxuICAgICAgY29sb3JzOiB7fSxcbiAgICB9O1xuICAgIGxldCB7IGNvbG9ycyB9ID0gc3RhdGU7XG5cbiAgICBjb25zdCBoYXNDb2xvcnMgPSAoKSA9PiAhIU9iamVjdC5rZXlzKGNvbG9ycykubGVuZ3RoO1xuXG4gICAgY29uc3QgeyBjcmVhdGVGaWVsZHNldCB9ID0gZmllbGRzZXRBcGk7XG4gICAgY29uc3QgeyBjcmVhdGVHcm91cCB9ID0gdWxBcGk7XG4gICAgY29uc3QgeyBjcmVhdGVDb2xvcklucHV0IH0gPSBsaUFwaTtcblxuICAgIGZpZWxkc2V0QXBpLm9uVGl0bGVDaGFuZ2UgPSAodGl0bGU6IHN0cmluZykgPT4ge1xuICAgICAgdnNjb2RlLnNldFN0YXRlKHsgbmFtZTogdGl0bGUsIGNvbG9ycyB9KTtcbiAgICB9O1xuXG4gICAgbGlBcGkub25Db2xvckNoYW5nZSA9IChjb2xvcikgPT4ge1xuICAgICAgY29sb3JzW2NvbG9yXSA9ICcnO1xuICAgICAgdnNjb2RlLnNldFN0YXRlKHsgbmFtZTogc3RhdGUubmFtZSwgY29sb3JzIH0pO1xuICAgIH07XG5cbiAgICBsaUFwaS5vbkNvbG9yUmVtb3ZlID0gKGNvbG9yKSA9PiB7XG4gICAgICBkZWxldGUgY29sb3JzW2NvbG9yXTtcbiAgICAgIHZzY29kZS5zZXRTdGF0ZSh7IG5hbWU6IHN0YXRlLm5hbWUsIGNvbG9ycyB9KTtcbiAgICB9O1xuXG4gICAgbGlBcGkub25OYW1lQ2hhbmdlID0gKGNvbG9yLCBuYW1lKSA9PiB7XG4gICAgICBjb2xvcnNbY29sb3JdID0gbmFtZTtcbiAgICAgIHZzY29kZS5zZXRTdGF0ZSh7IG5hbWU6IHN0YXRlLm5hbWUsIGNvbG9ycyB9KTtcbiAgICB9O1xuXG4gICAgY29uc3QgZmllbGRzZXQgPSBjcmVhdGVGaWVsZHNldChzdGF0ZS5uYW1lKTtcbiAgICBjb25zdCB1bCA9IGNyZWF0ZUdyb3VwKCk7XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIChldmVudCkgPT4ge1xuICAgICAgY29uc3QgbWVzc2FnZSA9IGV2ZW50LmRhdGE7IC8vIFRoZSBqc29uIGRhdGEgdGhhdCB0aGUgZXh0ZW5zaW9uIHNlbnRcbiAgICAgIHN3aXRjaCAobWVzc2FnZS50eXBlKSB7XG4gICAgICAgIGNhc2UgJ2FkZENvbG9yJzoge1xuICAgICAgICAgIGNvbnN0IGxpID0gY3JlYXRlQ29sb3JJbnB1dCgpO1xuICAgICAgICAgIHVsLmFwcGVuZENoaWxkKGxpKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBjYXNlICdjbGVhckNvbG9ycyc6IHtcbiAgICAgICAgICB1bC5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgICBjb2xvcnMgPSB7fTtcbiAgICAgICAgICB2c2NvZGUuc2V0U3RhdGUoeyBuYW1lOiBzdGF0ZS5uYW1lLCBjb2xvcnMgfSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChoYXNDb2xvcnMoKSkge1xuICAgICAgT2JqZWN0LmtleXMoY29sb3JzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgY29uc3QgbGkgPSBjcmVhdGVDb2xvcklucHV0KHsgdmFsdWU6IGtleSwgbmFtZTogY29sb3JzW2tleV0gfSk7XG4gICAgICAgIHVsLmFwcGVuZENoaWxkKGxpKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGZpZWxkc2V0LmFwcGVuZENoaWxkKHVsKTtcblxuICAgIGFwcC5hcHBlbmRDaGlsZChmaWVsZHNldCk7XG4gIH1cbn0pKCk7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHRpZihfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdKSB7XG5cdFx0cmV0dXJuIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0uZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIG1vZHVsZSBleHBvcnRzIG11c3QgYmUgcmV0dXJuZWQgZnJvbSBydW50aW1lIHNvIGVudHJ5IGlubGluaW5nIGlzIGRpc2FibGVkXG4vLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbnJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvbWFpbi50c1wiKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=