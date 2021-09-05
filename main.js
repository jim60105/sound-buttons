(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/runner/work/sound-buttons/sound-buttons/src/main.ts */"zUnb");


/***/ }),

/***/ "4y7E":
/*!*******************************************!*\
  !*** ./src/app/services/color.service.ts ***!
  \*******************************************/
/*! exports provided: ColorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorService", function() { return ColorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class ColorService {
    constructor() {
        this.defaultColor = {
            primary: '#000000',
            secondary: '#777777'
        };
        // tslint:disable-next-line: variable-name
        this._color = this.defaultColor;
    }
    set color(v) {
        this._color = v;
        // 套用config中的顏色設定
        for (const colorKey in this.color) {
            if (Object.prototype.hasOwnProperty.call(this.color, colorKey)) {
                const color = this.color;
                const colorValue = color[colorKey];
                document.documentElement.style.setProperty('--bs-' + colorKey, colorValue);
            }
        }
    }
    get color() {
        return this._color;
    }
    resetColor() {
        this.color = this.defaultColor;
    }
}
ColorService.ɵfac = function ColorService_Factory(t) { return new (t || ColorService)(); };
ColorService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ColorService, factory: ColorService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "7m8B":
/*!**********************************************************!*\
  !*** ./src/app/audio-control/audio-control.component.ts ***!
  \**********************************************************/
/*! exports provided: AudioControlComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AudioControlComponent", function() { return AudioControlComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_audio_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../services/audio.service */ "jHbz");


class AudioControlComponent {
    constructor(audioService) {
        this.audioService = audioService;
        this.volume = 0.5;
    }
    ngOnInit() {
        this.audioService.volume(this.volume);
    }
    OnStopClick() {
        this.audioService.stop();
    }
    OnFastClick() {
        this.audioService.faster();
    }
    OnSlowClick() {
        this.audioService.slower();
    }
    OnRecover() {
        this.audioService.recover();
    }
    OnVolumeChange($event) {
        this.audioService.volume(+$event.target.value);
    }
}
AudioControlComponent.ɵfac = function AudioControlComponent_Factory(t) { return new (t || AudioControlComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_audio_service__WEBPACK_IMPORTED_MODULE_1__["AudioService"])); };
AudioControlComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AudioControlComponent, selectors: [["app-audio-control"]], decls: 7, vars: 1, consts: [[1, "control-container"], [1, "bi", "bi-stop-fill", "clickable", 3, "click"], [1, "bi", "bi-skip-forward-fill", "clickable", 3, "click"], [1, "bi", "bi-arrow-repeat", "clickable", 3, "click"], [1, "bi", "bi-skip-backward-fill", "clickable", 3, "click"], [1, "bi", "bi-volume-up"], ["type", "range", "min", "0", "max", "1", "step", "0.01", 3, "value", "change"]], template: function AudioControlComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AudioControlComponent_Template_i_click_1_listener() { return ctx.OnStopClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AudioControlComponent_Template_i_click_2_listener() { return ctx.OnFastClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AudioControlComponent_Template_i_click_3_listener() { return ctx.OnRecover(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AudioControlComponent_Template_i_click_4_listener() { return ctx.OnSlowClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AudioControlComponent_Template_input_change_6_listener($event) { return ctx.OnVolumeChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.volume);
    } }, styles: [".control-container[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: calc(3rem - 1px);\n  left: 0;\n  width: 80px;\n  height: 200px;\n  background-color: #fff;\n  border-width: thick;\n  border-top-style: double;\n  border-right-style: double;\n  border-color: var(--bs-primary);\n  border-radius: 0 20px 0 0;\n  text-align: center;\n  display: grid;\n  grid-auto-flow: column;\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: repeat(4, 1fr);\n}\n\ni[_ngcontent-%COMP%] {\n  font-size: 30px;\n  color: var(--bs-primary);\n  border-width: 2px;\n  padding: 0 3px;\n  align-self: center;\n  cursor: pointer;\n}\n\ni.clickable[_ngcontent-%COMP%]:active {\n  transform: translateY(0.1em);\n}\n\ninput[_ngcontent-%COMP%] {\n  grid-row: auto/span 3;\n  width: 130px;\n  height: 15px;\n  margin: 0px 10px 10px -110px;\n  transform: rotate(270deg);\n  transform-origin: right;\n}\n\n@media only screen and (max-width: 767px) {\n  .control-container[_ngcontent-%COMP%] {\n    bottom: 0;\n    height: 6rem;\n    width: 100%;\n    border-right: none;\n    border-radius: 0;\n    grid-template-columns: repeat(4, 1fr);\n    grid-template-rows: repeat(2, 1fr);\n    grid-auto-flow: row;\n  }\n\n  input[_ngcontent-%COMP%] {\n    margin: 10px;\n    transform: rotate(0deg);\n    grid-column: auto/span 3;\n    grid-row: auto;\n    width: calc(100% - 20px);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2F1ZGlvLWNvbnRyb2wuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi8uLi9hc3NldHMvc3R5bGUvX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsZUFBQTtFQUNBLHdCQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0Esc0JDRFM7RURHVCxtQkFBQTtFQUNBLHdCQUFBO0VBQ0EsMEJBQUE7RUFDQSwrQkFBQTtFQUNBLHlCQUFBO0VBRUEsa0JBQUE7RUFFQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtFQUNBLGtDQUFBO0FBSkY7O0FBT0E7RUFDRSxlQUFBO0VBQ0Esd0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFKRjs7QUFNRTtFQUNFLDRCQUFBO0FBSko7O0FBUUE7RUFDRSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsNEJBQUE7RUFDQSx5QkFBQTtFQUNBLHVCQUFBO0FBTEY7O0FBUUE7RUFDRTtJQUNFLFNBQUE7SUFDQSxZQUFBO0lBQ0EsV0FBQTtJQUNBLGtCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxxQ0FBQTtJQUNBLGtDQUFBO0lBQ0EsbUJBQUE7RUFMRjs7RUFRQTtJQUNFLFlBQUE7SUFDQSx1QkFBQTtJQUNBLHdCQUFBO0lBQ0EsY0FBQTtJQUNBLHdCQUFBO0VBTEY7QUFDRiIsImZpbGUiOiJhdWRpby1jb250cm9sLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAndmFyaWFibGVzJztcblxuLmNvbnRyb2wtY29udGFpbmVyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IGNhbGMoM3JlbSAtIDFweCk7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiA4MHB4O1xuICBoZWlnaHQ6IDIwMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGU7XG5cbiAgYm9yZGVyLXdpZHRoOiB0aGljaztcbiAgYm9yZGVyLXRvcC1zdHlsZTogZG91YmxlO1xuICBib3JkZXItcmlnaHQtc3R5bGU6IGRvdWJsZTtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1icy1wcmltYXJ5KTtcbiAgYm9yZGVyLXJhZGl1czogMCAyMHB4IDAgMDtcblxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg0LCAxZnIpO1xufVxuXG5pIHtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBjb2xvcjogdmFyKC0tYnMtcHJpbWFyeSk7XG4gIGJvcmRlci13aWR0aDogMnB4O1xuICBwYWRkaW5nOiAwIDNweDtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgJi5jbGlja2FibGU6YWN0aXZlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLjFlbSk7XG4gIH1cbn1cblxuaW5wdXQge1xuICBncmlkLXJvdzogYXV0byAvIHNwYW4gMztcbiAgd2lkdGg6IDEzMHB4O1xuICBoZWlnaHQ6IDE1cHg7XG4gIG1hcmdpbjogMHB4IDEwcHggMTBweCAtMTEwcHg7XG4gIHRyYW5zZm9ybTogcm90YXRlKDI3MGRlZyk7XG4gIHRyYW5zZm9ybS1vcmlnaW46IHJpZ2h0O1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5jb250cm9sLWNvbnRhaW5lciB7XG4gICAgYm90dG9tOiAwO1xuICAgIGhlaWdodDogJGZvb3Rlci1oZWlnaHQgKiAyO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlci1yaWdodDogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMiwgMWZyKTtcbiAgICBncmlkLWF1dG8tZmxvdzogcm93O1xuICB9XG5cbiAgaW5wdXQge1xuICAgIG1hcmdpbjogMTBweDtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgICBncmlkLWNvbHVtbjogYXV0byAvIHNwYW4gMztcbiAgICBncmlkLXJvdzogYXV0bztcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMjBweCk7XG4gIH1cbn1cbiIsIi8vIFB1bHNlIDQuNi4wXG4vLyBCb290c3dhdGNoXG5cbi8vXG4vLyBDb2xvciBzeXN0ZW1cbi8vXG5cbiR3aGl0ZTogICAgI2ZmZiAhZGVmYXVsdDtcbiRncmF5LTEwMDogI2ZhZmFmYSAhZGVmYXVsdDtcbiRncmF5LTIwMDogI2Y5ZjhmYyAhZGVmYXVsdDtcbiRncmF5LTMwMDogI2VkZWRlZCAhZGVmYXVsdDtcbiRncmF5LTQwMDogI2NiYzhkMCAhZGVmYXVsdDtcbiRncmF5LTUwMDogI2FkYjViZCAhZGVmYXVsdDtcbiRncmF5LTYwMDogIzg2OGU5NiAhZGVmYXVsdDtcbiRncmF5LTcwMDogIzQ0NCAhZGVmYXVsdDtcbiRncmF5LTgwMDogIzM0M2E0MCAhZGVmYXVsdDtcbiRncmF5LTkwMDogIzE3MTQxZiAhZGVmYXVsdDtcbiRibGFjazogICAgIzAwMCAhZGVmYXVsdDtcblxuJGJsdWU6ICAgICMwMDdiZmYgIWRlZmF1bHQ7XG4kaW5kaWdvOiAgIzY2MTBmMiAhZGVmYXVsdDtcbiRwdXJwbGU6ICAjNTkzMTk2ICFkZWZhdWx0O1xuJHBpbms6ICAgICNlODNlOGMgIWRlZmF1bHQ7XG4kcmVkOiAgICAgI2ZjMzkzOSAhZGVmYXVsdDtcbiRvcmFuZ2U6ICAjZmQ3ZTE0ICFkZWZhdWx0O1xuJHllbGxvdzogICNlZmEzMWQgIWRlZmF1bHQ7XG4kZ3JlZW46ICAgIzEzYjk1NSAhZGVmYXVsdDtcbiR0ZWFsOiAgICAjMjBjOTk3ICFkZWZhdWx0O1xuJGN5YW46ICAgICMwMDljZGMgIWRlZmF1bHQ7XG4kbGlnaHQtYmx1ZTogIzNEQUNERDtcblxuJHByaW1hcnk6ICAgICAgICMwMDAwMDAgIWRlZmF1bHQ7XG4kc2Vjb25kYXJ5OiAgICAgIzc3Nzc3NyAhZGVmYXVsdDtcbiRzdWNjZXNzOiAgICAgICAkZ3JlZW4gIWRlZmF1bHQ7XG4kaW5mbzogICAgICAgICAgJGN5YW4gIWRlZmF1bHQ7XG4kd2FybmluZzogICAgICAgJHllbGxvdyAhZGVmYXVsdDtcbiRkYW5nZXI6ICAgICAgICAkcmVkICFkZWZhdWx0O1xuJGxpZ2h0OiAgICAgICAgICRncmF5LTIwMCAhZGVmYXVsdDtcbiRkYXJrOiAgICAgICAgICAkZ3JheS05MDAgIWRlZmF1bHQ7XG5cbi8vIE9wdGlvbnNcblxuJGVuYWJsZS1yb3VuZGVkOiBmYWxzZSAhZGVmYXVsdDtcblxuLy8gQm9keVxuXG4kYm9keS1jb2xvcjogICAgICAgICAgICAgICAgJGdyYXktNzAwICFkZWZhdWx0O1xuXG4vLyBMaW5rc1xuXG4kbGluay1ob3Zlci1jb2xvcjogICAgICAgICAgJHByaW1hcnkgIWRlZmF1bHQ7XG5cbi8vIEZvbnRzXG5cbiRmb250LXNpemUtYmFzZTogICAgICAgICAgICAgIC44NzVyZW0gIWRlZmF1bHQ7XG5cbi8vIFRhYmxlc1xuXG4kdGFibGUtYm9yZGVyLWNvbG9yOiAgICAgICAgICByZ2JhKDAsIDAsIDAsIC4wNSkgIWRlZmF1bHQ7XG5cbi8vIEZvcm1zXG5cbiRpbnB1dC1mb2N1cy1ib3JkZXItY29sb3I6ICAgICAgICAgICAgICAkcHJpbWFyeSAhZGVmYXVsdDtcblxuLy8gRHJvcGRvd25zXG5cbiRkcm9wZG93bi1saW5rLWNvbG9yOiAgICAgICAgICAgICAgICRncmF5LTcwMCAhZGVmYXVsdDtcbiRkcm9wZG93bi1saW5rLWhvdmVyLWNvbG9yOiAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcbiRkcm9wZG93bi1saW5rLWhvdmVyLWJnOiAgICAgICAgICAgICRwcmltYXJ5ICFkZWZhdWx0O1xuXG4vLyBOYXZzXG5cbiRuYXYtdGFicy1ib3JkZXItY29sb3I6ICAgICAgICAgICAgICRncmF5LTMwMCAhZGVmYXVsdDtcbiRuYXYtdGFicy1saW5rLWhvdmVyLWJvcmRlci1jb2xvcjogICRwcmltYXJ5ICFkZWZhdWx0O1xuXG4vLyBOYXZiYXJcblxuJG5hdmJhci1wYWRkaW5nLXk6ICAgICAgICAgICAgICAgICAgMC41cmVtIDFyZW0gIWRlZmF1bHQ7XG4kbmF2YmFyLWRhcmstaG92ZXItY29sb3I6ICAgICAgICAgICByZ2JhKCR3aGl0ZSwgLjkpICFkZWZhdWx0O1xuJG5hdmJhci1kYXJrLWFjdGl2ZS1jb2xvcjogICAgICAgICAgcmdiYSgkd2hpdGUsIC45KSAhZGVmYXVsdDtcbiRuYXZiYXItbGlnaHQtY29sb3I6ICAgICAgICAgICAgICAgIHJnYmEoJGJsYWNrLCAuNCkgIWRlZmF1bHQ7XG4kbmF2YmFyLWxpZ2h0LWFjdGl2ZS1jb2xvcjogICAgICAgICByZ2JhKCRibGFjaywgLjcpICFkZWZhdWx0O1xuJG5hdmJhci1saWdodC1kaXNhYmxlZC1jb2xvcjogICAgICAgcmdiYSgkYmxhY2ssIC4yKSAhZGVmYXVsdDtcblxuLy8gUHJvZ3Jlc3MgYmFyc1xuXG4kcHJvZ3Jlc3MtYmc6ICAgICAgICAgICAgICAgICAgICAgICAkZ3JheS0zMDAgIWRlZmF1bHQ7XG4kcHJvZ3Jlc3MtYmFyLWJnOiAgICAgICAgICAgICAgICAgICAkcHJpbWFyeSAhZGVmYXVsdDtcblxuLy8gTGlzdCBncm91cFxuXG4kbGlzdC1ncm91cC1iZzogICAgICAgICAgICAgICAgICAgICAkZ3JheS05MDAgIWRlZmF1bHQ7XG4kbGlzdC1ncm91cC1ib3JkZXItY29sb3I6ICAgICAgICAgICB0cmFuc3BhcmVudCAhZGVmYXVsdDtcbiRsaXN0LWdyb3VwLWhvdmVyLWJnOiAgICAgICAgICAgICAgIGxpZ2h0ZW4oJGxpc3QtZ3JvdXAtYmcsIDEwJSkgIWRlZmF1bHQ7XG4kbGlzdC1ncm91cC1hY3RpdmUtY29sb3I6ICAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XG4kbGlzdC1ncm91cC1hY3RpdmUtYmc6ICAgICAgICAgICAgICAkbGlzdC1ncm91cC1iZyAhZGVmYXVsdDtcbiRsaXN0LWdyb3VwLWRpc2FibGVkLWNvbG9yOiAgICAgICAgIGxpZ2h0ZW4oJGxpc3QtZ3JvdXAtYmcsIDMwJSkgIWRlZmF1bHQ7XG5cblxuLy8gRm9vdGVyXG4kZm9vdGVyLWhlaWdodDogM3JlbTtcblxuQGltcG9ydCAnL25vZGVfbW9kdWxlcy9ib290c3RyYXAvc2Nzcy9mdW5jdGlvbnMnO1xuQGltcG9ydCAnL25vZGVfbW9kdWxlcy9ib290c3RyYXAvc2Nzcy92YXJpYWJsZXMnO1xuQGltcG9ydCAnL25vZGVfbW9kdWxlcy9ib290c3RyYXAvc2Nzcy9taXhpbnMnO1xuIl19 */"] });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "CzQJ":
/*!********************************************!*\
  !*** ./src/app/services/dialog.service.ts ***!
  \********************************************/
/*! exports provided: DialogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogService", function() { return DialogService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-toastr */ "5eHb");



class DialogService {
    constructor(toastr) {
        this.toastr = toastr;
        this.showModal = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    // confirmModal = new EventEmitter();
    disablePending(toastId) {
        if (toastId > 0) {
            this.toastr.clear(toastId);
        }
    }
    toastPending(message, title) {
        return this.toastr.info(message, title, {
        // tapToDismiss: false
        }).toastId;
    }
    toastError(message, title) {
        this.toastr.error(message, title);
    }
    toastWarning(message, title) {
        this.toastr.warning(message, title);
    }
    toastSuccess(message, title) {
        this.toastr.success(message, title);
    }
    clearPending() {
        this.toastr.clear();
    }
}
DialogService.ɵfac = function DialogService_Factory(t) { return new (t || DialogService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastrService"])); };
DialogService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DialogService, factory: DialogService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "F1my":
/*!**************************************************!*\
  !*** ./src/app/home-page/home-page.component.ts ***!
  \**************************************************/
/*! exports provided: HomePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageComponent", function() { return HomePageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/config.service */ "r4Kj");
/* harmony import */ var _services_color_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/color.service */ "4y7E");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");





function HomePageComponent_div_3_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 7);
} if (rf & 2) {
    const config_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", config_r1.color["secondary"]);
} }
const _c0 = function (a1) { return ["/", a1]; };
function HomePageComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function HomePageComponent_div_3_Template_div_mouseenter_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const config_r1 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.OnMouseEnter($event, config_r1); })("mouseleave", function HomePageComponent_div_3_Template_div_mouseleave_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.OnMouseLeave($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, HomePageComponent_div_3_div_5_Template, 1, 2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const config_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, config_r1.name));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", config_r1.imgSrc, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](config_r1.fullName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", config_r1.color);
} }
class HomePageComponent {
    constructor(configService, colorService) {
        this.configService = configService;
        this.colorService = colorService;
    }
    ngOnInit() {
        this.configs$ = this.configService.getBriefConfig();
        this.configService.resetConfig();
    }
    OnMouseEnter($event, config) {
        if (!config)
            return;
        if (config.color) {
            this.colorService.color = config.color;
        }
    }
    OnMouseLeave($event) {
        this.colorService.color = this.colorService.defaultColor;
    }
}
HomePageComponent.ɵfac = function HomePageComponent_Factory(t) { return new (t || HomePageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_config_service__WEBPACK_IMPORTED_MODULE_1__["ConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_color_service__WEBPACK_IMPORTED_MODULE_2__["ColorService"])); };
HomePageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomePageComponent, selectors: [["app-home-page"]], decls: 11, vars: 5, consts: [[1, "outer"], [1, "inner"], [1, "container"], ["class", "chara-card", 3, "routerLink", "mouseenter", "mouseleave", 4, "ngFor", "ngForOf"], ["href", "https://github.com/jim60105/sound-buttons_configs/discussions/2", "target", "_blank", "rel", "noopener noreferrer", 2, "color", "#444"], [1, "chara-card", 3, "mouseenter", "mouseleave"], [1, "details"], [1, "background"], [1, "chara-card", 3, "routerLink", "mouseenter", "mouseleave"], [3, "src"], ["class", "background", 3, "backgroundColor", 4, "ngIf"]], template: function HomePageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, HomePageComponent_div_3_Template, 6, 6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function HomePageComponent_Template_div_mouseenter_6_listener($event) { return ctx.OnMouseEnter($event); })("mouseleave", function HomePageComponent_Template_div_mouseleave_6_listener($event) { return ctx.OnMouseLeave($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\uFF1F\uFF1F\uFF1F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 3, ctx.configs$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", "#777");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["AsyncPipe"]], styles: ["h2[_ngcontent-%COMP%], img[_ngcontent-%COMP%] {\n  z-index: 4;\n  margin: auto;\n}\n\nh2[_ngcontent-%COMP%] {\n  position: absolute;\n  text-align: center;\n  width: 100%;\n  bottom: 10%;\n  left: 0;\n  line-height: 140%;\n  transition-property: font-size;\n  transition-duration: 0.3s;\n  z-index: 5;\n  text-shadow: 1px 1px 1px #fff, 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 40px #fff, 0 0 70px #fff;\n}\n\nimg[_ngcontent-%COMP%] {\n  width: 80%;\n  transition-property: width;\n  transition-duration: 0.3s;\n}\n\n.outer[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n}\n\n.inner[_ngcontent-%COMP%] {\n  overflow-y: scroll;\n  \n  padding-right: 17px;\n  \n  box-sizing: content-box;\n  width: 100%;\n  display: grid;\n  justify-content: center;\n  align-items: center;\n}\n\n.container[_ngcontent-%COMP%] {\n  height: calc(100vh - 2.6rem);\n  display: grid;\n  grid-template-columns: repeat(1, 1fr);\n  transform-origin: top right;\n}\n\n@media (min-width: 768px) {\n  .container[_ngcontent-%COMP%] {\n    height: calc(100vh - 5.5rem);\n    transform: skewY(-4.398705355deg);\n    grid-template-columns: repeat(2, 1fr);\n    grid-column-gap: 3vw;\n    margin: 0 3.9vw 0 15vw;\n  }\n}\n\n@media (min-width: 992px) {\n  .container[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(3, 1fr);\n    grid-column-gap: 2vw;\n    margin: 0 2.8vw 0 10vw;\n  }\n}\n\n@media (min-width: 1200px) {\n  .container[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(4, 1fr);\n    grid-column-gap: 1.5vw;\n    margin: 0 2.2vw 0 8vw;\n  }\n}\n\n@media (min-width: 1400px) {\n  .container[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(5, 1fr);\n    grid-column-gap: 1vw;\n    margin: 0 1.8vw 0 6.5vw;\n  }\n}\n\n.chara-card[_ngcontent-%COMP%] {\n  transform-origin: top left;\n  z-index: 1;\n  transition-property: z-index, top;\n  transition-duration: 0.3s;\n  padding: 5%;\n  cursor: pointer;\n}\n\n.chara-card[_ngcontent-%COMP%]:hover {\n  z-index: 4;\n  top: 64%;\n}\n\n@media (min-width: 768px) {\n  .chara-card[_ngcontent-%COMP%]:hover   .details[_ngcontent-%COMP%] {\n    transform: rotate(-14.03624deg) translate(5.5%, 15%) scale(1.5);\n  }\n}\n\n.chara-card[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.chara-card[_ngcontent-%COMP%]:hover   h2[_ngcontent-%COMP%] {\n  font-size: 2.4rem;\n}\n\n@media (min-width: 768px) {\n  .chara-card[_ngcontent-%COMP%] {\n    transform: skewY(4.398705355deg) rotatez(14.03624deg);\n    margin: 0;\n    padding: 0 0 10% 0;\n  }\n}\n\n.details[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n  width: 95%;\n  height: 50vh;\n  top: 0;\n  border-radius: 2vw;\n  box-shadow: inset 0px 0px 0px 0.2vw #ffffffb2;\n  box-sizing: border-box;\n  filter: drop-shadow(2px 6px 3px rgba(0, 0, 0, 0.4));\n  transform: rotate(0deg) translate(0, 0);\n  transition-property: transform;\n  transition-duration: 0.3s;\n  overflow: hidden;\n  display: grid;\n  justify-content: center;\n  align-items: center;\n  margin-left: auto;\n}\n\n@media (min-width: 768px) {\n  .details[_ngcontent-%COMP%] {\n    margin-left: unset;\n  }\n}\n\n.details[_ngcontent-%COMP%]   .background[_ngcontent-%COMP%] {\n  background-color: var(--bs-secondary);\n  opacity: 0.1;\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2hvbWUtcGFnZS5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9ib290c3RyYXAvc2Nzcy9taXhpbnMvX2JyZWFrcG9pbnRzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7O0VBRUUsVUFBQTtFQUNBLFlBQUE7QUFERjs7QUFJQTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLE9BQUE7RUFDQSxpQkFBQTtFQUNBLDhCQUFBO0VBQ0EseUJBQUE7RUFDQSxVQUFBO0VBQ0EsdUdBQ0U7QUFGSjs7QUFVQTtFQUNFLFVBQUE7RUFDQSwwQkFBQTtFQUNBLHlCQUFBO0FBUEY7O0FBVUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBUEY7O0FBVUE7RUFDRSxrQkFBQTtFQUNBLGlFQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQ0FBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBUEY7O0FBVUE7RUFDRSw0QkFBQTtFQUNBLGFBQUE7RUFDQSxxQ0FBQTtFQUNBLDJCQUFBO0FBUEY7O0FDZUk7RURaSjtJQVFJLDRCQUFBO0lBQ0EsaUNBQUE7SUFDQSxxQ0FBQTtJQUNBLG9CQUFBO0lBQ0Esc0JBQUE7RUFQRjtBQUNGOztBQ01JO0VEWko7SUFnQkkscUNBQUE7SUFDQSxvQkFBQTtJQUNBLHNCQUFBO0VBTkY7QUFDRjs7QUNESTtFRFpKO0lBc0JJLHFDQUFBO0lBQ0Esc0JBQUE7SUFDQSxxQkFBQTtFQUxGO0FBQ0Y7O0FDUkk7RURaSjtJQTRCSSxxQ0FBQTtJQUNBLG9CQUFBO0lBQ0EsdUJBQUE7RUFKRjtBQUNGOztBQWNBO0VBQ0UsMEJBQUE7RUFDQSxVQUFBO0VBQ0EsaUNBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FBWEY7O0FBYUU7RUFDRSxVQUFBO0VBQ0EsUUFBQTtBQVhKOztBQzVCSTtFRDBDRjtJQUVJLCtEQUFBO0VBWko7QUFDRjs7QUFlRTtFQUNFLFdBQUE7QUFiSjs7QUFnQkU7RUFDRSxpQkFBQTtBQWRKOztBQ3ZDSTtFRDZCSjtJQTRCSSxxREFBQTtJQUNBLFNBQUE7SUFDQSxrQkFBQTtFQWRGO0FBQ0Y7O0FBa0JBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxNQUFBO0VBQ0Esa0JBQUE7RUFDQSw2Q0FBQTtFQUNBLHNCQUFBO0VBQ0EsbURBQUE7RUFDQSx1Q0FBQTtFQUNBLDhCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBRUEsaUJBQUE7QUFoQkY7O0FDbEVJO0VEZ0VKO0lBcUJJLGtCQUFBO0VBZkY7QUFDRjs7QUFpQkU7RUFDRSxxQ0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBZkoiLCJmaWxlIjoiaG9tZS1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAndmFyaWFibGVzJztcblxuaDIsXG5pbWcge1xuICB6LWluZGV4OiA0O1xuICBtYXJnaW46IGF1dG87XG59XG5cbmgyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBib3R0b206IDEwJTtcbiAgbGVmdDogMDtcbiAgbGluZS1oZWlnaHQ6IDE0MCU7XG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IGZvbnQtc2l6ZTtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogLjNzO1xuICB6LWluZGV4OiA1O1xuICB0ZXh0LXNoYWRvdzpcbiAgICAxcHggMXB4IDFweCAkd2hpdGUsXG4gICAgMCAwIDVweCAkd2hpdGUsXG4gICAgMCAwIDEwcHggJHdoaXRlLFxuICAgIDAgMCAxNXB4ICR3aGl0ZSxcbiAgICAwIDAgNDBweCAkd2hpdGUsXG4gICAgMCAwIDcwcHggJHdoaXRlO1xufVxuXG5pbWcge1xuICB3aWR0aDogODAlO1xuICB0cmFuc2l0aW9uLXByb3BlcnR5OiB3aWR0aDtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogLjNzO1xufVxuXG4ub3V0ZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uaW5uZXIge1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gIC8qIEluY3JlYXNlL2RlY3JlYXNlIHRoaXMgdmFsdWUgZm9yIGNyb3NzLWJyb3dzZXIgY29tcGF0aWJpbGl0eSAqL1xuICBwYWRkaW5nLXJpZ2h0OiAxN3B4O1xuICAvKiBTbyB0aGUgd2lkdGggd2lsbCBiZSAxMDAlICsgMTdweCAqL1xuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uY29udGFpbmVyIHtcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMi42cmVtKTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMSwgMWZyKTtcbiAgdHJhbnNmb3JtLW9yaWdpbjogdG9wIHJpZ2h0O1xuICAvLyBtYXJnaW46IDAgNi40dncgMCAyOCU7XG5cbiAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cChtZCkge1xuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDUuNXJlbSk7XG4gICAgdHJhbnNmb3JtOiBza2V3WSgtNC4zOTg3MDUzNTVkZWcpO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XG4gICAgZ3JpZC1jb2x1bW4tZ2FwOiAzdnc7XG4gICAgbWFyZ2luOiAwIDMuOXZ3IDAgMTV2dztcbiAgfVxuXG4gIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAobGcpIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xuICAgIGdyaWQtY29sdW1uLWdhcDogMnZ3O1xuICAgIG1hcmdpbjogMCAyLjh2dyAwIDEwdnc7XG4gIH1cblxuICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKHhsKSB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcbiAgICBncmlkLWNvbHVtbi1nYXA6IDEuNXZ3O1xuICAgIG1hcmdpbjogMCAyLjJ2dyAwIDh2dztcbiAgfVxuXG4gIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAoeHhsKSB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNSwgMWZyKTtcbiAgICBncmlkLWNvbHVtbi1nYXA6IDF2dztcbiAgICBtYXJnaW46IDAgMS44dncgMCA2LjV2dztcbiAgfVxuXG4gIC8vIEBtZWRpYSAobWluLXdpZHRoOjE2MDBweCkge1xuICAvLyAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDYsIDFmcik7XG4gIC8vICAgZ3JpZC1jb2x1bW4tZ2FwOiAxdnc7XG4gIC8vICAgbWFyZ2luOiAwIDEuNXZ3IDAgNS41dnc7XG4gIC8vIH1cblxufVxuXG4uY2hhcmEtY2FyZCB7XG4gIHRyYW5zZm9ybS1vcmlnaW46IHRvcCBsZWZ0O1xuICB6LWluZGV4OiAxO1xuICB0cmFuc2l0aW9uLXByb3BlcnR5OiB6LWluZGV4LCB0b3A7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IC4zcztcbiAgcGFkZGluZzogNSU7XG4gIGN1cnNvcjogcG9pbnRlcjtcblxuICAmOmhvdmVyIHtcbiAgICB6LWluZGV4OiA0O1xuICAgIHRvcDogNjQlO1xuICB9XG5cbiAgJjpob3ZlciAuZGV0YWlscyB7XG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cChtZCkge1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTE0LjAzNjI0ZGVnKSB0cmFuc2xhdGUoNS41JSwgMTUlKSBzY2FsZSgxLjUpO1xuICAgIH1cbiAgfVxuXG4gICY6aG92ZXIgaW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gICY6aG92ZXIgaDIge1xuICAgIGZvbnQtc2l6ZTogMi40cmVtO1xuICB9XG5cbiAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cChtZCkge1xuICAgIHRyYW5zZm9ybTogc2tld1koNC4zOTg3MDUzNTVkZWcpIHJvdGF0ZXooMTQuMDM2MjRkZWcpO1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwIDAgMTAlIDA7XG4gIH1cblxufVxuXG4uZGV0YWlscyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMjtcbiAgd2lkdGg6IDk1JTtcbiAgaGVpZ2h0OiA1MHZoO1xuICB0b3A6IDA7XG4gIGJvcmRlci1yYWRpdXM6IDJ2dztcbiAgYm94LXNoYWRvdzogaW5zZXQgMHB4IDBweCAwcHggMC4ydncgI2ZmZmZmZmIyO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBmaWx0ZXI6IGRyb3Atc2hhZG93KDJweCA2cHggM3B4IHJnYmEoMCwgMCwgMCwgMC40KSk7XG4gIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpIHRyYW5zbGF0ZSgwLCAwKTtcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAuM3M7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuXG4gIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAobWQpIHtcbiAgICBtYXJnaW4tbGVmdDogdW5zZXQ7XG4gIH1cblxuICAuYmFja2dyb3VuZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnMtc2Vjb25kYXJ5KTtcbiAgICBvcGFjaXR5OiAwLjE7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICB9XG59XG4iLCIvLyBCcmVha3BvaW50IHZpZXdwb3J0IHNpemVzIGFuZCBtZWRpYSBxdWVyaWVzLlxuLy9cbi8vIEJyZWFrcG9pbnRzIGFyZSBkZWZpbmVkIGFzIGEgbWFwIG9mIChuYW1lOiBtaW5pbXVtIHdpZHRoKSwgb3JkZXIgZnJvbSBzbWFsbCB0byBsYXJnZTpcbi8vXG4vLyAgICAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpXG4vL1xuLy8gVGhlIG1hcCBkZWZpbmVkIGluIHRoZSBgJGdyaWQtYnJlYWtwb2ludHNgIGdsb2JhbCB2YXJpYWJsZSBpcyB1c2VkIGFzIHRoZSBgJGJyZWFrcG9pbnRzYCBhcmd1bWVudCBieSBkZWZhdWx0LlxuXG4vLyBOYW1lIG9mIHRoZSBuZXh0IGJyZWFrcG9pbnQsIG9yIG51bGwgZm9yIHRoZSBsYXN0IGJyZWFrcG9pbnQuXG4vL1xuLy8gICAgPj4gYnJlYWtwb2ludC1uZXh0KHNtKVxuLy8gICAgbWRcbi8vICAgID4+IGJyZWFrcG9pbnQtbmV4dChzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIG1kXG4vLyAgICA+PiBicmVha3BvaW50LW5leHQoc20sICRicmVha3BvaW50LW5hbWVzOiAoeHMgc20gbWQgbGcgeGwpKVxuLy8gICAgbWRcbkBmdW5jdGlvbiBicmVha3BvaW50LW5leHQoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMsICRicmVha3BvaW50LW5hbWVzOiBtYXAta2V5cygkYnJlYWtwb2ludHMpKSB7XG4gICRuOiBpbmRleCgkYnJlYWtwb2ludC1uYW1lcywgJG5hbWUpO1xuICBAaWYgbm90ICRuIHtcbiAgICBAZXJyb3IgXCJicmVha3BvaW50IGAjeyRuYW1lfWAgbm90IGZvdW5kIGluIGAjeyRicmVha3BvaW50c31gXCI7XG4gIH1cbiAgQHJldHVybiBpZigkbiA8IGxlbmd0aCgkYnJlYWtwb2ludC1uYW1lcyksIG50aCgkYnJlYWtwb2ludC1uYW1lcywgJG4gKyAxKSwgbnVsbCk7XG59XG5cbi8vIE1pbmltdW0gYnJlYWtwb2ludCB3aWR0aC4gTnVsbCBmb3IgdGhlIHNtYWxsZXN0IChmaXJzdCkgYnJlYWtwb2ludC5cbi8vXG4vLyAgICA+PiBicmVha3BvaW50LW1pbihzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIDU3NnB4XG5AZnVuY3Rpb24gYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1pbjogbWFwLWdldCgkYnJlYWtwb2ludHMsICRuYW1lKTtcbiAgQHJldHVybiBpZigkbWluICE9IDAsICRtaW4sIG51bGwpO1xufVxuXG4vLyBNYXhpbXVtIGJyZWFrcG9pbnQgd2lkdGguXG4vLyBUaGUgbWF4aW11bSB2YWx1ZSBpcyByZWR1Y2VkIGJ5IDAuMDJweCB0byB3b3JrIGFyb3VuZCB0aGUgbGltaXRhdGlvbnMgb2Zcbi8vIGBtaW4tYCBhbmQgYG1heC1gIHByZWZpeGVzIGFuZCB2aWV3cG9ydHMgd2l0aCBmcmFjdGlvbmFsIHdpZHRocy5cbi8vIFNlZSBodHRwczovL3d3dy53My5vcmcvVFIvbWVkaWFxdWVyaWVzLTQvI21xLW1pbi1tYXhcbi8vIFVzZXMgMC4wMnB4IHJhdGhlciB0aGFuIDAuMDFweCB0byB3b3JrIGFyb3VuZCBhIGN1cnJlbnQgcm91bmRpbmcgYnVnIGluIFNhZmFyaS5cbi8vIFNlZSBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTc4MjYxXG4vL1xuLy8gICAgPj4gYnJlYWtwb2ludC1tYXgobWQsICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICA3NjcuOThweFxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtbWF4KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtYXg6IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAkbmFtZSk7XG4gIEByZXR1cm4gaWYoJG1heCBhbmQgJG1heCA+IDAsICRtYXggLSAuMDIsIG51bGwpO1xufVxuXG4vLyBSZXR1cm5zIGEgYmxhbmsgc3RyaW5nIGlmIHNtYWxsZXN0IGJyZWFrcG9pbnQsIG90aGVyd2lzZSByZXR1cm5zIHRoZSBuYW1lIHdpdGggYSBkYXNoIGluIGZyb250LlxuLy8gVXNlZnVsIGZvciBtYWtpbmcgcmVzcG9uc2l2ZSB1dGlsaXRpZXMuXG4vL1xuLy8gICAgPj4gYnJlYWtwb2ludC1pbmZpeCh4cywgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIFwiXCIgIChSZXR1cm5zIGEgYmxhbmsgc3RyaW5nKVxuLy8gICAgPj4gYnJlYWtwb2ludC1pbmZpeChzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIFwiLXNtXCJcbkBmdW5jdGlvbiBicmVha3BvaW50LWluZml4KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gIEByZXR1cm4gaWYoYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50cykgPT0gbnVsbCwgXCJcIiwgXCItI3skbmFtZX1cIik7XG59XG5cbi8vIE1lZGlhIG9mIGF0IGxlYXN0IHRoZSBtaW5pbXVtIGJyZWFrcG9pbnQgd2lkdGguIE5vIHF1ZXJ5IGZvciB0aGUgc21hbGxlc3QgYnJlYWtwb2ludC5cbi8vIE1ha2VzIHRoZSBAY29udGVudCBhcHBseSB0byB0aGUgZ2l2ZW4gYnJlYWtwb2ludCBhbmQgd2lkZXIuXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC11cCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWluOiBicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgQGlmICRtaW4ge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkbWluKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbi8vIE1lZGlhIG9mIGF0IG1vc3QgdGhlIG1heGltdW0gYnJlYWtwb2ludCB3aWR0aC4gTm8gcXVlcnkgZm9yIHRoZSBsYXJnZXN0IGJyZWFrcG9pbnQuXG4vLyBNYWtlcyB0aGUgQGNvbnRlbnQgYXBwbHkgdG8gdGhlIGdpdmVuIGJyZWFrcG9pbnQgYW5kIG5hcnJvd2VyLlxuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtZG93bigkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWF4OiBicmVha3BvaW50LW1heCgkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgQGlmICRtYXgge1xuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkbWF4KSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbi8vIE1lZGlhIHRoYXQgc3BhbnMgbXVsdGlwbGUgYnJlYWtwb2ludCB3aWR0aHMuXG4vLyBNYWtlcyB0aGUgQGNvbnRlbnQgYXBwbHkgYmV0d2VlbiB0aGUgbWluIGFuZCBtYXggYnJlYWtwb2ludHNcbkBtaXhpbiBtZWRpYS1icmVha3BvaW50LWJldHdlZW4oJGxvd2VyLCAkdXBwZXIsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1pbjogYnJlYWtwb2ludC1taW4oJGxvd2VyLCAkYnJlYWtwb2ludHMpO1xuICAkbWF4OiBicmVha3BvaW50LW1heCgkdXBwZXIsICRicmVha3BvaW50cyk7XG5cbiAgQGlmICRtaW4gIT0gbnVsbCBhbmQgJG1heCAhPSBudWxsIHtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogJG1pbikgYW5kIChtYXgtd2lkdGg6ICRtYXgpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSBpZiAkbWF4ID09IG51bGwge1xuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAoJGxvd2VyLCAkYnJlYWtwb2ludHMpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSBpZiAkbWluID09IG51bGwge1xuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtZG93bigkdXBwZXIsICRicmVha3BvaW50cykge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9XG59XG5cbi8vIE1lZGlhIGJldHdlZW4gdGhlIGJyZWFrcG9pbnQncyBtaW5pbXVtIGFuZCBtYXhpbXVtIHdpZHRocy5cbi8vIE5vIG1pbmltdW0gZm9yIHRoZSBzbWFsbGVzdCBicmVha3BvaW50LCBhbmQgbm8gbWF4aW11bSBmb3IgdGhlIGxhcmdlc3Qgb25lLlxuLy8gTWFrZXMgdGhlIEBjb250ZW50IGFwcGx5IG9ubHkgdG8gdGhlIGdpdmVuIGJyZWFrcG9pbnQsIG5vdCB2aWV3cG9ydHMgYW55IHdpZGVyIG9yIG5hcnJvd2VyLlxuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtb25seSgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWluOiAgYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50cyk7XG4gICRuZXh0OiBicmVha3BvaW50LW5leHQoJG5hbWUsICRicmVha3BvaW50cyk7XG4gICRtYXg6ICBicmVha3BvaW50LW1heCgkbmV4dCk7XG5cbiAgQGlmICRtaW4gIT0gbnVsbCBhbmQgJG1heCAhPSBudWxsIHtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogJG1pbikgYW5kIChtYXgtd2lkdGg6ICRtYXgpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSBpZiAkbWF4ID09IG51bGwge1xuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAoJG5hbWUsICRicmVha3BvaW50cykge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIGlmICRtaW4gPT0gbnVsbCB7XG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC1kb3duKCRuZXh0LCAkYnJlYWtwb2ludHMpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfVxufVxuIl19 */"] });


/***/ }),

/***/ "GSEy":
/*!********************************************************!*\
  !*** ./src/app/introduction/introduction.component.ts ***!
  \********************************************************/
/*! exports provided: IntroductionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroductionComponent", function() { return IntroductionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../services/config.service */ "r4Kj");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");





function IntroductionComponent_div_1_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx_r4.link.youtube, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function IntroductionComponent_div_1_a_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx_r5.link.twitter, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function IntroductionComponent_div_1_a_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx_r6.link.facebook, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function IntroductionComponent_div_1_a_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx_r7.link.other, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function IntroductionComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, IntroductionComponent_div_1_a_1_Template, 2, 1, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, IntroductionComponent_div_1_a_2_Template, 2, 1, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, IntroductionComponent_div_1_a_3_Template, 2, 1, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, IntroductionComponent_div_1_a_4_Template, 2, 1, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.link.youtube);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.link.twitter);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.link.facebook);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.link.other);
} }
function IntroductionComponent_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IntroductionComponent_button_4_Template_button_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.button == null ? null : ctx_r8.button.click($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.button == null ? null : ctx_r1.button.text, " ");
} }
function IntroductionComponent_p_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "p", 15);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r2.intro, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function IntroductionComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Github discussion");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IntroductionComponent_div_6_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.reloadConfig(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 3, "previewMessage"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 5, "\u91CD\u65B0\u6574\u7406\u672C\u9801\u5167\u5BB9"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](13, 7, ctx_r3.initTime, "yyyy/MM/dd hh:mm:ss"), " ");
} }
class IntroductionComponent {
    constructor(route, configService) {
        this.route = route;
        this.configService = configService;
        // tslint:disable-next-line: variable-name
        this._imgSrc = '';
        this.initTime = Date.now();
        this.intro = '';
        this.isLiveUpdate = false;
    }
    get imgSrc() {
        let url = this._imgSrc;
        if (url.includes('file.core.windows.net')) {
            url += '&timestamp=' + this.initTime;
        }
        return url;
    }
    set imgSrc(v) {
        this._imgSrc = v;
    }
    ngOnInit() {
        this.route.queryParamMap.subscribe(m => {
            this.isLiveUpdate = m.get('liveUpdate') === '1';
        });
    }
    reloadConfig() {
        this.configService.reloadConfig(() => this.initTime = Date.now());
    }
}
IntroductionComponent.ɵfac = function IntroductionComponent_Factory(t) { return new (t || IntroductionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"])); };
IntroductionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: IntroductionComponent, selectors: [["app-introduction"]], inputs: { imgSrc: "imgSrc", intro: "intro", link: "link", button: "button" }, decls: 7, vars: 5, consts: [[1, "container", "h-100", "position-relative"], ["id", "linkIcon-container", 4, "ngIf"], ["id", "chara", "alt", "intro image", 1, "mx-auto", "d-block", 3, "src"], [1, "position-relative", "info"], ["type", "button", "class", "btn btn-secondary", 3, "click", 4, "ngIf"], [3, "innerHTML", 4, "ngIf"], ["class", "notice", 4, "ngIf"], ["id", "linkIcon-container"], ["class", "linkIcon", "target", "_blank", 3, "href", 4, "ngIf"], ["target", "_blank", 1, "linkIcon", 3, "href"], ["src", "assets/img/youtube.svg", "alt", "youtube"], ["src", "assets/img/twitter.svg", "alt", "twitter"], ["src", "assets/img/facebook.svg", "alt", "facebook"], ["src", "assets/img/other.svg", "alt", "other"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], [3, "innerHTML"], [1, "notice"], ["href", "https://github.com/jim60105/sound-buttons_configs/discussions/3", "target", "_blank"], ["type", "button", 1, "btn", "btn-primary", 3, "click"]], template: function IntroductionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, IntroductionComponent_div_1_Template, 5, 4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, IntroductionComponent_button_4_Template, 2, 1, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, IntroductionComponent_p_5_Template, 1, 1, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, IntroductionComponent_div_6_Template, 14, 10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.link);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.imgSrc, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.button && !ctx.isLiveUpdate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLiveUpdate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLiveUpdate);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]], styles: ["#chara[_ngcontent-%COMP%] {\n  max-height: 70%;\n  max-width: 100%;\n  filter: drop-shadow(2px 6px 3px rgba(0, 0, 0, 0.4));\n}\n\n#linkIcon-container[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  width: 15%;\n  margin: 0 auto;\n  text-align: center;\n}\n\n#linkIcon-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-height: 100%;\n  max-width: 100%;\n  margin-top: 10%;\n  margin-bottom: 10%;\n  width: 80%;\n  transition-property: margin, width;\n  transition-duration: 0.3s;\n}\n\n#linkIcon-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover {\n  width: 100%;\n  margin: unset;\n}\n\n.btn[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -2.5em;\n  cursor: pointer;\n  border-radius: 0.3rem;\n  border-color: var(--bs-primary);\n  border-width: 1px;\n}\n\n.btn[_ngcontent-%COMP%]:active {\n  transform: translateY(0.3em);\n}\n\n.notice[_ngcontent-%COMP%] {\n  display: block;\n  width: 60vh;\n  max-width: 100%;\n  padding: 3vh;\n  margin: 2vh auto;\n  background: var(--bs-secondary);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: large;\n  color: #fff;\n  text-align: center;\n}\n\n.notice[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  position: unset;\n  top: unset;\n  margin-top: 2vh;\n}\n\n.info[_ngcontent-%COMP%] {\n  padding: 0 1rem;\n}\n\np[_ngcontent-%COMP%] {\n  white-space: pre-wrap;\n  padding-top: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2ludHJvZHVjdGlvbi5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9zdHlsZS9fdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxlQUFBO0VBQ0EsZUFBQTtFQUNBLG1EQUFBO0FBREY7O0FBSUE7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBREY7O0FBR0U7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0Esa0NBQUE7RUFDQSx5QkFBQTtBQURKOztBQUdJO0VBQ0UsV0FBQTtFQUNBLGFBQUE7QUFETjs7QUFNQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUVBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLCtCQUFBO0VBQ0EsaUJBQUE7QUFKRjs7QUFNRTtFQUVFLDRCQUFBO0FBTEo7O0FBU0E7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSwrQkFBQTtFQUVBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQ25EUztFRG9EVCxrQkFBQTtBQVBGOztBQVNFO0VBQ0UsZUFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0FBUEo7O0FBV0E7RUFDRSxlQUFBO0FBUkY7O0FBV0E7RUFDRSxxQkFBQTtFQUNBLGlCQUFBO0FBUkYiLCJmaWxlIjoiaW50cm9kdWN0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAndmFyaWFibGVzJztcblxuI2NoYXJhIHtcbiAgbWF4LWhlaWdodDogNzAlO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGZpbHRlcjogZHJvcC1zaGFkb3coMnB4IDZweCAzcHggcmdiYSgwLCAwLCAwLCAwLjQpKTtcbn1cblxuI2xpbmtJY29uLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIHdpZHRoOiAxNSU7XG4gIG1hcmdpbjogMCBhdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgaW1nIHtcbiAgICBtYXgtaGVpZ2h0OiAxMDAlO1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tdG9wOiAxMCU7XG4gICAgbWFyZ2luLWJvdHRvbTogMTAlO1xuICAgIHdpZHRoOiA4MCU7XG4gICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogbWFyZ2luLCB3aWR0aDtcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAuM3M7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgbWFyZ2luOiB1bnNldDtcbiAgICB9XG4gIH1cbn1cblxuLmJ0biB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtMi41ZW07XG5cbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXItcmFkaXVzOiAuM3JlbTtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1icy1wcmltYXJ5KTtcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XG5cbiAgJjphY3RpdmUge1xuICAgIC8vIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJzLXNlY29uZGFyeSk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC4zZW0pO1xuICB9XG59XG5cbi5ub3RpY2V7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogNjB2aDtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAzdmg7XG4gIG1hcmdpbjogMnZoIGF1dG87XG4gIGJhY2tncm91bmQ6IHZhcigtLWJzLXNlY29uZGFyeSk7XG5cbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogbGFyZ2U7XG4gIGNvbG9yOiAkd2hpdGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAuYnRue1xuICAgIHBvc2l0aW9uOiB1bnNldDtcbiAgICB0b3A6IHVuc2V0O1xuICAgIG1hcmdpbi10b3A6IDJ2aDtcbiAgfVxufVxuXG4uaW5mb3tcbiAgcGFkZGluZzogMCAxcmVtO1xufVxuXG5we1xuICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XG4gIHBhZGRpbmctdG9wOiAxcmVtO1xufVxuIiwiLy8gUHVsc2UgNC42LjBcbi8vIEJvb3Rzd2F0Y2hcblxuLy9cbi8vIENvbG9yIHN5c3RlbVxuLy9cblxuJHdoaXRlOiAgICAjZmZmICFkZWZhdWx0O1xuJGdyYXktMTAwOiAjZmFmYWZhICFkZWZhdWx0O1xuJGdyYXktMjAwOiAjZjlmOGZjICFkZWZhdWx0O1xuJGdyYXktMzAwOiAjZWRlZGVkICFkZWZhdWx0O1xuJGdyYXktNDAwOiAjY2JjOGQwICFkZWZhdWx0O1xuJGdyYXktNTAwOiAjYWRiNWJkICFkZWZhdWx0O1xuJGdyYXktNjAwOiAjODY4ZTk2ICFkZWZhdWx0O1xuJGdyYXktNzAwOiAjNDQ0ICFkZWZhdWx0O1xuJGdyYXktODAwOiAjMzQzYTQwICFkZWZhdWx0O1xuJGdyYXktOTAwOiAjMTcxNDFmICFkZWZhdWx0O1xuJGJsYWNrOiAgICAjMDAwICFkZWZhdWx0O1xuXG4kYmx1ZTogICAgIzAwN2JmZiAhZGVmYXVsdDtcbiRpbmRpZ286ICAjNjYxMGYyICFkZWZhdWx0O1xuJHB1cnBsZTogICM1OTMxOTYgIWRlZmF1bHQ7XG4kcGluazogICAgI2U4M2U4YyAhZGVmYXVsdDtcbiRyZWQ6ICAgICAjZmMzOTM5ICFkZWZhdWx0O1xuJG9yYW5nZTogICNmZDdlMTQgIWRlZmF1bHQ7XG4keWVsbG93OiAgI2VmYTMxZCAhZGVmYXVsdDtcbiRncmVlbjogICAjMTNiOTU1ICFkZWZhdWx0O1xuJHRlYWw6ICAgICMyMGM5OTcgIWRlZmF1bHQ7XG4kY3lhbjogICAgIzAwOWNkYyAhZGVmYXVsdDtcbiRsaWdodC1ibHVlOiAjM0RBQ0REO1xuXG4kcHJpbWFyeTogICAgICAgIzAwMDAwMCAhZGVmYXVsdDtcbiRzZWNvbmRhcnk6ICAgICAjNzc3Nzc3ICFkZWZhdWx0O1xuJHN1Y2Nlc3M6ICAgICAgICRncmVlbiAhZGVmYXVsdDtcbiRpbmZvOiAgICAgICAgICAkY3lhbiAhZGVmYXVsdDtcbiR3YXJuaW5nOiAgICAgICAkeWVsbG93ICFkZWZhdWx0O1xuJGRhbmdlcjogICAgICAgICRyZWQgIWRlZmF1bHQ7XG4kbGlnaHQ6ICAgICAgICAgJGdyYXktMjAwICFkZWZhdWx0O1xuJGRhcms6ICAgICAgICAgICRncmF5LTkwMCAhZGVmYXVsdDtcblxuLy8gT3B0aW9uc1xuXG4kZW5hYmxlLXJvdW5kZWQ6IGZhbHNlICFkZWZhdWx0O1xuXG4vLyBCb2R5XG5cbiRib2R5LWNvbG9yOiAgICAgICAgICAgICAgICAkZ3JheS03MDAgIWRlZmF1bHQ7XG5cbi8vIExpbmtzXG5cbiRsaW5rLWhvdmVyLWNvbG9yOiAgICAgICAgICAkcHJpbWFyeSAhZGVmYXVsdDtcblxuLy8gRm9udHNcblxuJGZvbnQtc2l6ZS1iYXNlOiAgICAgICAgICAgICAgLjg3NXJlbSAhZGVmYXVsdDtcblxuLy8gVGFibGVzXG5cbiR0YWJsZS1ib3JkZXItY29sb3I6ICAgICAgICAgIHJnYmEoMCwgMCwgMCwgLjA1KSAhZGVmYXVsdDtcblxuLy8gRm9ybXNcblxuJGlucHV0LWZvY3VzLWJvcmRlci1jb2xvcjogICAgICAgICAgICAgICRwcmltYXJ5ICFkZWZhdWx0O1xuXG4vLyBEcm9wZG93bnNcblxuJGRyb3Bkb3duLWxpbmstY29sb3I6ICAgICAgICAgICAgICAgJGdyYXktNzAwICFkZWZhdWx0O1xuJGRyb3Bkb3duLWxpbmstaG92ZXItY29sb3I6ICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xuJGRyb3Bkb3duLWxpbmstaG92ZXItYmc6ICAgICAgICAgICAgJHByaW1hcnkgIWRlZmF1bHQ7XG5cbi8vIE5hdnNcblxuJG5hdi10YWJzLWJvcmRlci1jb2xvcjogICAgICAgICAgICAgJGdyYXktMzAwICFkZWZhdWx0O1xuJG5hdi10YWJzLWxpbmstaG92ZXItYm9yZGVyLWNvbG9yOiAgJHByaW1hcnkgIWRlZmF1bHQ7XG5cbi8vIE5hdmJhclxuXG4kbmF2YmFyLXBhZGRpbmcteTogICAgICAgICAgICAgICAgICAwLjVyZW0gMXJlbSAhZGVmYXVsdDtcbiRuYXZiYXItZGFyay1ob3Zlci1jb2xvcjogICAgICAgICAgIHJnYmEoJHdoaXRlLCAuOSkgIWRlZmF1bHQ7XG4kbmF2YmFyLWRhcmstYWN0aXZlLWNvbG9yOiAgICAgICAgICByZ2JhKCR3aGl0ZSwgLjkpICFkZWZhdWx0O1xuJG5hdmJhci1saWdodC1jb2xvcjogICAgICAgICAgICAgICAgcmdiYSgkYmxhY2ssIC40KSAhZGVmYXVsdDtcbiRuYXZiYXItbGlnaHQtYWN0aXZlLWNvbG9yOiAgICAgICAgIHJnYmEoJGJsYWNrLCAuNykgIWRlZmF1bHQ7XG4kbmF2YmFyLWxpZ2h0LWRpc2FibGVkLWNvbG9yOiAgICAgICByZ2JhKCRibGFjaywgLjIpICFkZWZhdWx0O1xuXG4vLyBQcm9ncmVzcyBiYXJzXG5cbiRwcm9ncmVzcy1iZzogICAgICAgICAgICAgICAgICAgICAgICRncmF5LTMwMCAhZGVmYXVsdDtcbiRwcm9ncmVzcy1iYXItYmc6ICAgICAgICAgICAgICAgICAgICRwcmltYXJ5ICFkZWZhdWx0O1xuXG4vLyBMaXN0IGdyb3VwXG5cbiRsaXN0LWdyb3VwLWJnOiAgICAgICAgICAgICAgICAgICAgICRncmF5LTkwMCAhZGVmYXVsdDtcbiRsaXN0LWdyb3VwLWJvcmRlci1jb2xvcjogICAgICAgICAgIHRyYW5zcGFyZW50ICFkZWZhdWx0O1xuJGxpc3QtZ3JvdXAtaG92ZXItYmc6ICAgICAgICAgICAgICAgbGlnaHRlbigkbGlzdC1ncm91cC1iZywgMTAlKSAhZGVmYXVsdDtcbiRsaXN0LWdyb3VwLWFjdGl2ZS1jb2xvcjogICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcbiRsaXN0LWdyb3VwLWFjdGl2ZS1iZzogICAgICAgICAgICAgICRsaXN0LWdyb3VwLWJnICFkZWZhdWx0O1xuJGxpc3QtZ3JvdXAtZGlzYWJsZWQtY29sb3I6ICAgICAgICAgbGlnaHRlbigkbGlzdC1ncm91cC1iZywgMzAlKSAhZGVmYXVsdDtcblxuXG4vLyBGb290ZXJcbiRmb290ZXItaGVpZ2h0OiAzcmVtO1xuXG5AaW1wb3J0ICcvbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9zY3NzL2Z1bmN0aW9ucyc7XG5AaW1wb3J0ICcvbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9zY3NzL3ZhcmlhYmxlcyc7XG5AaW1wb3J0ICcvbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9zY3NzL21peGlucyc7XG4iXX0= */"] });


/***/ }),

/***/ "StNR":
/*!********************************************!*\
  !*** ./src/app/upload/upload.component.ts ***!
  \********************************************/
/*! exports provided: UploadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadComponent", function() { return UploadComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/config.service */ "r4Kj");
/* harmony import */ var _services_color_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/color.service */ "4y7E");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _services_dialog_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../services/dialog.service */ "CzQJ");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ngx_bootstrap_typeahead__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-bootstrap/typeahead */ "qCdp");














function UploadComponent_div_0_div_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](14, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("\u300C", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 6, "\u6A94\u6848\u4E0A\u50B3"), "\u300D\u3001\u300C", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 8, "Youtube\u4F86\u6E90"), "\u300D");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](6, 10, "\u81F3\u5C11\u9078\u64C7\u4E00\u7A2E\uFF0C\u4E5F\u53EF\u540C\u6642\u586B\u5BEB"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"](" \u300C", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](10, 12, "Youtube\u4F86\u6E90"), "\u300D", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](11, 14, "\u7D04\u97003~5\u5206\u9418\u8F49\u6A94"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](14, 16, "\u82E55\u5206\u9418\u5F8C\u9810\u89A7\u672A\u51FA\u73FE\uFF0C\u8ACB\u6539\u7528\u300C\u6A94\u6848\u4E0A\u50B3\u300D\u529F\u80FD"), "");
} }
function UploadComponent_div_0_iframe_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "iframe", 31);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", ctx_r2.youtubeEmbedLink, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeResourceUrl"]);
} }
function UploadComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "form", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function UploadComponent_div_0_Template_form_ngSubmit_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r3.OnSubmit($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "label", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function UploadComponent_div_0_Template_input_change_15_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r5.OnYoutubeLinkChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](16, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](19, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function UploadComponent_div_0_Template_input_change_20_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r6.OnYoutubeLinkChange($event, false); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](23, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function UploadComponent_div_0_Template_input_change_24_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r7.OnYoutubeLinkChange($event, false); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function UploadComponent_div_0_Template_button_click_25_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r8.OnYoutubeLinkChange($event, false); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](26, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](30, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](32, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](35, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](36, UploadComponent_div_0_div_36_Template, 15, 18, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](37, UploadComponent_div_0_iframe_37_Template, 1, 1, "iframe", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](42, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](43, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](44, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "label", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](48, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](49, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](50, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "label", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](53);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](54, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](55, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](56, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](57, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](58, "label", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](59);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](60, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](61, "input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function UploadComponent_div_0_Template_input_change_61_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r9.OnFileUpload($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](62, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](63);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](64, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](65, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](66);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](67, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](68, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](69);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](70, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("", ctx_r0.config.fullName, " ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 43, "\u4E0A\u50B3\u8868\u55AE"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx_r0.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](11, 45, "Youtube\u4F86\u6E90"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("text-danger", !ctx_r0.cacheExists)("text-success", ctx_r0.cacheExists);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](16, 47, "Youtube\u5F71\u7247\u7DB2\u5740\uFF0C\u53EF\u5E36t\u79D2\u6578"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](19, 49, "\u8D77\u59CB\u79D2\u6578"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("is-invalid", ctx_r0.getFormControl("start").invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](23, 51, "\u7D50\u675F\u79D2\u6578"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("is-invalid", ctx_r0.getFormControl("end").invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("text-danger", ctx_r0.getFormControl("end").invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](30, 53, "\u97F3\u6A94\u4E0A\u9650180\u79D2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("\uFF1B", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](32, 55, "\u7D04\u97003~5\u5206\u9418\u8F49\u6A94"), "\uFF1B ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](35, 57, "\u4F3A\u670D\u5668\u6703\u5728\u904B\u7B97\u8D85\u904E5\u5206\u9418\u6642\u5224\u5B9A\u8D85\u6642 (\u8F49\u6A94\u5931\u6557)"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r0.youtubeEmbedLink);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.youtubeEmbedLink);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](42, 59, "\u4E2D\u6587\u540D"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("is-invalid", ctx_r0.getFormControl("nameZH").touched && ctx_r0.getFormControl("nameZH").invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](44, 61, "\u986F\u793A\u5728\u6309\u9215\u4E0A\u7684\u6587\u5B57"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](48, 63, "\u65E5\u6587\u540D"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](50, 65, "\u986F\u793A\u5728\u6309\u9215\u4E0A\u7684\u65E5\u6587\u7248\u6587\u5B57"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](54, 67, "\u5206\u7D44"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("typeahead", ctx_r0.groupNames())("typeaheadScrollable", true)("typeaheadOptionsInScrollableView", 7)("typeaheadMinLength", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](56, 69, "\u5206\u7D44\u540D\u7A31"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](60, 71, "\u6A94\u6848\u4E0A\u50B3"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("is-invalid", ctx_r0.getFormControl("file").touched && ctx_r0.getFormControl("file").invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](64, 73, "\u76F4\u63A5\u4E0A\u50B3\u97F3\u6A94\u53EF\u4EE5\u7BC0\u7701\u4F3A\u670D\u5668\u652F\u51FA\uFF0C"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("text-danger", ctx_r0.getFormControl("file").dirty && ctx_r0.getFormControl("file").invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](67, 75, "\u4E0A\u965030MB"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx_r0.form.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](70, 77, "\u9001\u51FA"));
} }
class UploadComponent {
    constructor(route, router, configService, colorService, fb, http, sanitizer, dialogService, translate) {
        this.route = route;
        this.router = router;
        this.configService = configService;
        this.colorService = colorService;
        this.fb = fb;
        this.http = http;
        this.sanitizer = sanitizer;
        this.dialogService = dialogService;
        this.translate = translate;
        this.api = 'https://soundbuttons.azure-api.net/sound-buttons';
        this.apiWake = 'https://soundbuttons.azure-api.net/wake';
        this.apiExist = 'https://soundbuttons.azure-api.net/cache-exists';
        this.form = this.fb.group({
            nameZH: this.fb.control('', {
                validators: _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required,
                updateOn: 'blur'
            }),
            nameJP: '',
            group: '',
            videoId: this.fb.control(null, {
                validators: [(c) => {
                        var _a, _b;
                        return ((_b = (_a = c.parent) === null || _a === void 0 ? void 0 : _a.get('file')) === null || _b === void 0 ? void 0 : _b.pristine) && !!_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required(c)
                            ? { videoId: true }
                            : null;
                    }
                ]
            }),
            start: this.fb.control('', {
                validators: [(c) => {
                        var _a, _b;
                        return (((_b = (_a = c.parent) === null || _a === void 0 ? void 0 : _a.get('videoId')) === null || _b === void 0 ? void 0 : _b.dirty) && c.value < 0) ? { start: true }
                            : null;
                    }
                ]
            }),
            end: this.fb.control('', {
                validators: [(c) => {
                        var _a, _b, _c, _d, _e, _f, _g, _h;
                        return (((_b = (_a = c.parent) === null || _a === void 0 ? void 0 : _a.get('videoId')) === null || _b === void 0 ? void 0 : _b.dirty) && (((_e = (_d = (_c = c.parent) === null || _c === void 0 ? void 0 : _c.get('start')) === null || _d === void 0 ? void 0 : _d.value) !== null && _e !== void 0 ? _e : 0) >= c.value
                            || c.value - ((_h = (_g = (_f = c.parent) === null || _f === void 0 ? void 0 : _f.get('start')) === null || _g === void 0 ? void 0 : _g.value) !== null && _h !== void 0 ? _h : 0) > 180)) ? { end: true }
                            : null;
                    }
                ]
            }),
            file: this.fb.control(null, {
                validators: [(c) => {
                        var _a, _b;
                        return ((_b = (_a = c.parent) === null || _a === void 0 ? void 0 : _a.get('videoId')) === null || _b === void 0 ? void 0 : _b.pristine) && !!_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required(c)
                            ? { file: true }
                            : null;
                    }
                ]
            })
        });
        this.duration = 0;
        this.youtubeEmbedLink = '';
        this.cacheExists = false;
        this.getFormControl = (name) => this.form.get(name);
        this.groupNames = () => this.configService.groupNames;
    }
    ngOnInit() {
        var _a;
        const name = (_a = this.route.snapshot.paramMap.get('name')) !== null && _a !== void 0 ? _a : 'template';
        this.configService.name = name;
        this.routerSubscription = this.configService.OnConfigChanged.subscribe(config => {
            var _a;
            if (config) {
                this.colorService.color = (_a = config.color) !== null && _a !== void 0 ? _a : this.colorService.defaultColor;
                this.config = config;
            }
            else {
                this.router.navigate(['/']);
            }
        });
        // 因為cold start，在開啟上傳表單時直接送一個http get啟動azure function，而結果我不管它
        this.http.get(this.apiWake).subscribe();
    }
    OnFileUpload($event) {
        var _a, _b;
        const clearFile = (message) => {
            if (message) {
                this.dialogService.toastError(message);
                // alert(message);
            }
            this.file = undefined;
            this.getFormControl('file').reset();
        };
        // 檔案驗證
        this.file = (_a = $event.target.files) === null || _a === void 0 ? void 0 : _a.item(0);
        if (!this.file) {
            clearFile();
            return;
        }
        if ((this.file.size && ((_b = this.file) === null || _b === void 0 ? void 0 : _b.size) > 30000000)) {
            clearFile('音檔上限30MB!!');
            return;
        }
        if (!this.file.type.startsWith('audio')) {
            clearFile('僅限上傳音訊檔!!');
            return;
        }
        // 讀出音檔長度，用來計算end
        const reader = new FileReader();
        reader.onload = e => {
            // Create an instance of AudioContext
            const audioContext = new window.AudioContext();
            // Asynchronously decode audio file data contained in an ArrayBuffer.
            if (e.target && typeof e.target.result !== 'string') {
                audioContext.decodeAudioData(e.target.result, (buffer) => {
                    this.duration = buffer.duration;
                    this.patchEnd();
                });
            }
        };
        // In case that the file couldn't be read
        reader.onerror = (event) => {
            console.error('An error ocurred reading the file: ', event);
        };
        // Read file as an ArrayBuffer, important !
        reader.readAsArrayBuffer(this.file);
        // 重新計算video相關的三格驗證
        this.getFormControl('videoId').updateValueAndValidity();
        this.getFormControl('start').updateValueAndValidity();
        this.getFormControl('end').updateValueAndValidity();
    }
    OnYoutubeLinkChange($event, parseFromLink = true) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        // 自動帶入start、end
        const value = (_b = (_a = this.form.get('videoId')) === null || _a === void 0 ? void 0 : _a.value) !== null && _b !== void 0 ? _b : '';
        let videoId = value;
        if (videoId.startsWith('https://youtu.be/')) {
            videoId = (_d = (_c = value.match(/^.*\/([^?]*).*$/)) === null || _c === void 0 ? void 0 : _c.pop()) !== null && _d !== void 0 ? _d : '';
        }
        else if (videoId.startsWith('https://www.youtube.com/watch')) {
            videoId = (_f = (_e = value.match(/^.*[?&]v=([^&]*).*$/)) === null || _e === void 0 ? void 0 : _e.pop()) !== null && _f !== void 0 ? _f : '';
        }
        if ('' === videoId) {
            return;
        }
        let start;
        if (parseFromLink) {
            start = parseInt((_h = (_g = value.match(/^.*[?&]t=([^&smh]*).*$/)) === null || _g === void 0 ? void 0 : _g.pop()) !== null && _h !== void 0 ? _h : '0', 10);
            this.form.patchValue({ start });
            this.patchEnd();
        }
        // 拼youtube embed連結
        const url = new URL('https://www.youtube.com/embed/' + videoId);
        url.searchParams.append('start', `${(_j = this.getFormControl('start').value) !== null && _j !== void 0 ? _j : 0}`);
        url.searchParams.append('end', `${(_k = this.getFormControl('end').value) !== null && _k !== void 0 ? _k : 0}`);
        this.youtubeEmbedLink = this.sanitizer.bypassSecurityTrustResourceUrl(url.toString());
        // 重新計算驗證
        this.getFormControl('file').updateValueAndValidity();
        this.getFormControl('start').updateValueAndValidity();
        this.getFormControl('end').updateValueAndValidity();
        this.http.get(this.apiExist, { params: { id: videoId } }).subscribe((response) => {
            this.cacheExists = response;
        });
    }
    OnSubmit($event) {
        var _a;
        if (this.form.invalid) {
            this.dialogService.toastError('請填入必填欄位！');
            return;
        }
        // const formData: any = new FormData();
        const formData = new FormData();
        formData.append('nameZH', this.getFormControl('nameZH').value);
        formData.append('nameJP', this.getFormControl('nameJP').value);
        formData.append('group', this.getFormControl('group').value);
        formData.append('videoId', this.getFormControl('videoId').value);
        formData.append('file', (_a = this.file) !== null && _a !== void 0 ? _a : '');
        formData.append('directory', this.configService.name);
        formData.append('volume', '1');
        formData.append('start', this.getFormControl('start').value);
        formData.append('end', this.getFormControl('end').value);
        formData.append('toastId', this.dialogService.toastPending(`上傳${this.getFormControl('nameZH').value}運算中`).toString());
        // Long polling
        this.http.post(this.api, formData)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["concatMap"])(acceptResponse => {
            const uri = acceptResponse.statusQueryGetUri;
            if (!uri) {
                this.dialogService.clearPending();
                this.dialogService.toastError(`上傳失敗，伺服器未回應輪詢URI`);
                throw Error('No recall location.');
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["timer"])(10000, 20000).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(30), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(() => {
                return this.http.get(uri, { observe: 'response' });
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["skipWhile"])(response => response.status === 202), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1));
        })).subscribe(response => {
            var _a, _b, _c, _d;
            const toastId = (_b = (_a = response.body) === null || _a === void 0 ? void 0 : _a.input.toastId) !== null && _b !== void 0 ? _b : -1;
            this.dialogService.disablePending(+toastId);
            const name = (_c = response.body) === null || _c === void 0 ? void 0 : _c.input.nameZH;
            if ((_d = response.body) === null || _d === void 0 ? void 0 : _d.output) {
                this.dialogService.toastSuccess(`上傳${name}成功`);
            }
            else {
                this.dialogService.toastError(`上傳${name}失敗`);
            }
            this.configService.reloadConfig();
        }, response => {
            var _a, _b, _c;
            let name = '';
            try {
                const toastId = (_b = (_a = response.body) === null || _a === void 0 ? void 0 : _a.input.toastId) !== null && _b !== void 0 ? _b : -1;
                this.dialogService.disablePending(+toastId);
                name = (_c = response.body) === null || _c === void 0 ? void 0 : _c.input.nameZH;
            }
            catch (e) {
                /* 錯誤時不一定會正確回傳設定的結果，直接抓掉 */
                this.dialogService.clearPending();
            }
            switch (response.status) {
                case 400:
                    this.dialogService.toastError(`上傳${name}失敗，欄位錯誤!!`);
                    break;
                case 0: // 由瀏覧器timeout
                case 408:
                    this.dialogService.toastError(`上傳${name}回應超時!!`);
                    break;
                case 500:
                    this.dialogService.toastError(`上傳${name}失敗，伺服器錯誤!!`);
                    break;
                default:
                    this.dialogService.toastWarning(`上傳${name}回應異常!!`);
            }
        });
        this.youtubeEmbedLink = '';
        if (!this.file && !this.cacheExists) {
            this.dialogService.showModal.emit({
                title: '提醒',
                message: '此影片尚未建立快取，有可能在下載中逾時<br>請留意！'
            });
        }
        this.form.reset();
        this.router.navigate(['/', this.config.name], { queryParams: { liveUpdate: '1' } });
    }
    patchEnd() {
        var _a;
        this.form.patchValue({
            end: Math.ceil(parseFloat((_a = this.getFormControl('start').value) !== null && _a !== void 0 ? _a : '0') + this.duration)
        });
    }
    ngOnDestroy() {
        var _a;
        (_a = this.routerSubscription) === null || _a === void 0 ? void 0 : _a.unsubscribe();
    }
}
UploadComponent.ɵfac = function UploadComponent_Factory(t) { return new (t || UploadComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_config_service__WEBPACK_IMPORTED_MODULE_5__["ConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_color_service__WEBPACK_IMPORTED_MODULE_6__["ColorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_dialog_service__WEBPACK_IMPORTED_MODULE_9__["DialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateService"])); };
UploadComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: UploadComponent, selectors: [["app-upload"]], decls: 1, vars: 1, consts: [["class", "container", 4, "ngIf"], [1, "container"], [1, "form", 3, "formGroup", "ngSubmit"], [1, "row"], [1, "col-md-8", "col-12"], [1, "mb-3"], ["for", "videoId", 1, "form-label"], ["title", "Is video cached?"], [1, "bi", "bi-circle-fill"], [1, "mb-3", "input-group"], ["type", "text", "id", "videoId", "formControlName", "videoId", 1, "form-control", "w-25", "left-border", "left-border-green", 3, "change"], [1, "input-group-text"], ["type", "number", "id", "start", "formControlName", "start", 1, "form-control", 3, "change"], ["type", "number", "id", "end", "formControlName", "end", 1, "form-control", 3, "change"], ["type", "button", "tabindex", "-1", 1, "btn", "btn-primary", 3, "click"], [1, "bi", "bi-arrow-counterclockwise"], [1, "form-text"], [1, "text-nowrap"], ["class", "youtubeContainer mx-auto", 4, "ngIf"], ["title", "YouTube video player", "frameborder", "0", "allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture", "class", "youtubeContainer mx-auto", 3, "src", 4, "ngIf"], [1, "col-md-4", "col-12"], ["for", "nameZH", 1, "form-label"], ["type", "text", "id", "nameZH", "formControlName", "nameZH", 1, "form-control", "left-border", "left-border-red"], ["for", "nameJP", 1, "form-label"], ["type", "text", "id", "nameJP", "formControlName", "nameJP", 1, "form-control"], ["for", "group", 1, "form-label"], ["type", "text", "id", "group", "formControlName", "group", "autocomplete", "off", 1, "form-control", 3, "typeahead", "typeaheadScrollable", "typeaheadOptionsInScrollableView", "typeaheadMinLength"], ["for", "file", 1, "form-label"], ["type", "file", "accept", "audio/*", "id", "file", "formControlName", "file", 1, "form-control", "left-border", "left-border-green", 3, "change"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [1, "youtubeContainer", "mx-auto"], ["title", "YouTube video player", "frameborder", "0", "allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture", 1, "youtubeContainer", "mx-auto", 3, "src"]], template: function UploadComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, UploadComponent_div_0_Template, 71, 79, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.config);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NumberValueAccessor"], ngx_bootstrap_typeahead__WEBPACK_IMPORTED_MODULE_12__["TypeaheadDirective"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslatePipe"]], styles: [".container[_ngcontent-%COMP%] {\n  margin: 3vh auto;\n  height: calc(93vh - 100px);\n}\n\n.ng-invalid[_ngcontent-%COMP%] {\n  border-left-width: 5px;\n  border-left-color: #fc3939;\n}\n\n.youtubeContainer[_ngcontent-%COMP%] {\n  width: 60vw;\n  height: 33.75vw;\n  font-size: x-large;\n  max-height: calc(100vh - 20rem);\n}\n\n@media only screen and (max-width: 768px) {\n  .container[_ngcontent-%COMP%] {\n    height: unset;\n  }\n\n  .youtubeContainer[_ngcontent-%COMP%] {\n    width: 80vw;\n    height: 45vw;\n    font-size: medium;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3VwbG9hZC5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9zdHlsZS9fdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxnQkFBQTtFQUNBLDBCQUFBO0FBREY7O0FBSUE7RUFDRSxzQkFBQTtFQUNBLDBCQ2NRO0FEZlY7O0FBSUE7RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsK0JBQUE7QUFERjs7QUFJQTtFQUNFO0lBQ0UsYUFBQTtFQURGOztFQUlBO0lBQ0UsV0FBQTtJQUNBLFlBQUE7SUFDQSxpQkFBQTtFQURGO0FBQ0YiLCJmaWxlIjoidXBsb2FkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAndmFyaWFibGVzJztcblxuLmNvbnRhaW5lciB7XG4gIG1hcmdpbjogM3ZoIGF1dG87XG4gIGhlaWdodDogY2FsYyg5M3ZoIC0gMTAwcHgpO1xufVxuXG4ubmctaW52YWxpZCB7XG4gIGJvcmRlci1sZWZ0LXdpZHRoOiA1cHg7XG4gIGJvcmRlci1sZWZ0LWNvbG9yOiAkZGFuZ2VyO1xufVxuXG4ueW91dHViZUNvbnRhaW5lciB7XG4gIHdpZHRoOiA2MHZ3O1xuICBoZWlnaHQ6IDMzLjc1dnc7XG4gIGZvbnQtc2l6ZTogeC1sYXJnZTtcbiAgbWF4LWhlaWdodDogY2FsYygxMDB2aCAtIDIwcmVtKTtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuY29udGFpbmVyIHtcbiAgICBoZWlnaHQ6IHVuc2V0O1xuICB9XG5cbiAgLnlvdXR1YmVDb250YWluZXIge1xuICAgIHdpZHRoOiA4MHZ3O1xuICAgIGhlaWdodDogNDV2dztcbiAgICBmb250LXNpemU6IG1lZGl1bTtcbiAgfVxufVxuIiwiLy8gUHVsc2UgNC42LjBcbi8vIEJvb3Rzd2F0Y2hcblxuLy9cbi8vIENvbG9yIHN5c3RlbVxuLy9cblxuJHdoaXRlOiAgICAjZmZmICFkZWZhdWx0O1xuJGdyYXktMTAwOiAjZmFmYWZhICFkZWZhdWx0O1xuJGdyYXktMjAwOiAjZjlmOGZjICFkZWZhdWx0O1xuJGdyYXktMzAwOiAjZWRlZGVkICFkZWZhdWx0O1xuJGdyYXktNDAwOiAjY2JjOGQwICFkZWZhdWx0O1xuJGdyYXktNTAwOiAjYWRiNWJkICFkZWZhdWx0O1xuJGdyYXktNjAwOiAjODY4ZTk2ICFkZWZhdWx0O1xuJGdyYXktNzAwOiAjNDQ0ICFkZWZhdWx0O1xuJGdyYXktODAwOiAjMzQzYTQwICFkZWZhdWx0O1xuJGdyYXktOTAwOiAjMTcxNDFmICFkZWZhdWx0O1xuJGJsYWNrOiAgICAjMDAwICFkZWZhdWx0O1xuXG4kYmx1ZTogICAgIzAwN2JmZiAhZGVmYXVsdDtcbiRpbmRpZ286ICAjNjYxMGYyICFkZWZhdWx0O1xuJHB1cnBsZTogICM1OTMxOTYgIWRlZmF1bHQ7XG4kcGluazogICAgI2U4M2U4YyAhZGVmYXVsdDtcbiRyZWQ6ICAgICAjZmMzOTM5ICFkZWZhdWx0O1xuJG9yYW5nZTogICNmZDdlMTQgIWRlZmF1bHQ7XG4keWVsbG93OiAgI2VmYTMxZCAhZGVmYXVsdDtcbiRncmVlbjogICAjMTNiOTU1ICFkZWZhdWx0O1xuJHRlYWw6ICAgICMyMGM5OTcgIWRlZmF1bHQ7XG4kY3lhbjogICAgIzAwOWNkYyAhZGVmYXVsdDtcbiRsaWdodC1ibHVlOiAjM0RBQ0REO1xuXG4kcHJpbWFyeTogICAgICAgIzAwMDAwMCAhZGVmYXVsdDtcbiRzZWNvbmRhcnk6ICAgICAjNzc3Nzc3ICFkZWZhdWx0O1xuJHN1Y2Nlc3M6ICAgICAgICRncmVlbiAhZGVmYXVsdDtcbiRpbmZvOiAgICAgICAgICAkY3lhbiAhZGVmYXVsdDtcbiR3YXJuaW5nOiAgICAgICAkeWVsbG93ICFkZWZhdWx0O1xuJGRhbmdlcjogICAgICAgICRyZWQgIWRlZmF1bHQ7XG4kbGlnaHQ6ICAgICAgICAgJGdyYXktMjAwICFkZWZhdWx0O1xuJGRhcms6ICAgICAgICAgICRncmF5LTkwMCAhZGVmYXVsdDtcblxuLy8gT3B0aW9uc1xuXG4kZW5hYmxlLXJvdW5kZWQ6IGZhbHNlICFkZWZhdWx0O1xuXG4vLyBCb2R5XG5cbiRib2R5LWNvbG9yOiAgICAgICAgICAgICAgICAkZ3JheS03MDAgIWRlZmF1bHQ7XG5cbi8vIExpbmtzXG5cbiRsaW5rLWhvdmVyLWNvbG9yOiAgICAgICAgICAkcHJpbWFyeSAhZGVmYXVsdDtcblxuLy8gRm9udHNcblxuJGZvbnQtc2l6ZS1iYXNlOiAgICAgICAgICAgICAgLjg3NXJlbSAhZGVmYXVsdDtcblxuLy8gVGFibGVzXG5cbiR0YWJsZS1ib3JkZXItY29sb3I6ICAgICAgICAgIHJnYmEoMCwgMCwgMCwgLjA1KSAhZGVmYXVsdDtcblxuLy8gRm9ybXNcblxuJGlucHV0LWZvY3VzLWJvcmRlci1jb2xvcjogICAgICAgICAgICAgICRwcmltYXJ5ICFkZWZhdWx0O1xuXG4vLyBEcm9wZG93bnNcblxuJGRyb3Bkb3duLWxpbmstY29sb3I6ICAgICAgICAgICAgICAgJGdyYXktNzAwICFkZWZhdWx0O1xuJGRyb3Bkb3duLWxpbmstaG92ZXItY29sb3I6ICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xuJGRyb3Bkb3duLWxpbmstaG92ZXItYmc6ICAgICAgICAgICAgJHByaW1hcnkgIWRlZmF1bHQ7XG5cbi8vIE5hdnNcblxuJG5hdi10YWJzLWJvcmRlci1jb2xvcjogICAgICAgICAgICAgJGdyYXktMzAwICFkZWZhdWx0O1xuJG5hdi10YWJzLWxpbmstaG92ZXItYm9yZGVyLWNvbG9yOiAgJHByaW1hcnkgIWRlZmF1bHQ7XG5cbi8vIE5hdmJhclxuXG4kbmF2YmFyLXBhZGRpbmcteTogICAgICAgICAgICAgICAgICAwLjVyZW0gMXJlbSAhZGVmYXVsdDtcbiRuYXZiYXItZGFyay1ob3Zlci1jb2xvcjogICAgICAgICAgIHJnYmEoJHdoaXRlLCAuOSkgIWRlZmF1bHQ7XG4kbmF2YmFyLWRhcmstYWN0aXZlLWNvbG9yOiAgICAgICAgICByZ2JhKCR3aGl0ZSwgLjkpICFkZWZhdWx0O1xuJG5hdmJhci1saWdodC1jb2xvcjogICAgICAgICAgICAgICAgcmdiYSgkYmxhY2ssIC40KSAhZGVmYXVsdDtcbiRuYXZiYXItbGlnaHQtYWN0aXZlLWNvbG9yOiAgICAgICAgIHJnYmEoJGJsYWNrLCAuNykgIWRlZmF1bHQ7XG4kbmF2YmFyLWxpZ2h0LWRpc2FibGVkLWNvbG9yOiAgICAgICByZ2JhKCRibGFjaywgLjIpICFkZWZhdWx0O1xuXG4vLyBQcm9ncmVzcyBiYXJzXG5cbiRwcm9ncmVzcy1iZzogICAgICAgICAgICAgICAgICAgICAgICRncmF5LTMwMCAhZGVmYXVsdDtcbiRwcm9ncmVzcy1iYXItYmc6ICAgICAgICAgICAgICAgICAgICRwcmltYXJ5ICFkZWZhdWx0O1xuXG4vLyBMaXN0IGdyb3VwXG5cbiRsaXN0LWdyb3VwLWJnOiAgICAgICAgICAgICAgICAgICAgICRncmF5LTkwMCAhZGVmYXVsdDtcbiRsaXN0LWdyb3VwLWJvcmRlci1jb2xvcjogICAgICAgICAgIHRyYW5zcGFyZW50ICFkZWZhdWx0O1xuJGxpc3QtZ3JvdXAtaG92ZXItYmc6ICAgICAgICAgICAgICAgbGlnaHRlbigkbGlzdC1ncm91cC1iZywgMTAlKSAhZGVmYXVsdDtcbiRsaXN0LWdyb3VwLWFjdGl2ZS1jb2xvcjogICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcbiRsaXN0LWdyb3VwLWFjdGl2ZS1iZzogICAgICAgICAgICAgICRsaXN0LWdyb3VwLWJnICFkZWZhdWx0O1xuJGxpc3QtZ3JvdXAtZGlzYWJsZWQtY29sb3I6ICAgICAgICAgbGlnaHRlbigkbGlzdC1ncm91cC1iZywgMzAlKSAhZGVmYXVsdDtcblxuXG4vLyBGb290ZXJcbiRmb290ZXItaGVpZ2h0OiAzcmVtO1xuXG5AaW1wb3J0ICcvbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9zY3NzL2Z1bmN0aW9ucyc7XG5AaW1wb3J0ICcvbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9zY3NzL3ZhcmlhYmxlcyc7XG5AaW1wb3J0ICcvbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9zY3NzL21peGlucyc7XG4iXX0= */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _services_language_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/language.service */ "kyOO");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header/header.component */ "fECr");
/* harmony import */ var _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dialog/dialog.component */ "ZYp2");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./footer/footer.component */ "fp1T");







class AppComponent {
    constructor(translateService) {
        translateService.setDefaultLang('zh');
        translateService.use(_services_language_service__WEBPACK_IMPORTED_MODULE_0__["LanguageService"].BrowserLanguage);
        // translateService.use('ja');
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 4, vars: 1, consts: [[1, "h-100"], [3, "copyText"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-dialog");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "router-outlet", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "app-footer", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("copyText", "Website MIT Licensed; Voice copyright by source.");
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"], _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_4__["DialogComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterOutlet"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "TZYx":
/*!**********************************************!*\
  !*** ./src/app/sound-buttons/ButtonGroup.ts ***!
  \**********************************************/
/*! exports provided: ButtonGroup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonGroup", function() { return ButtonGroup; });
/* harmony import */ var _services_language_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/language.service */ "kyOO");
/* harmony import */ var _Buttons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Buttons */ "tLcZ");


class ButtonGroup {
    constructor(name, baseRoute, buttons) {
        this.name = name;
        this.baseRoute = baseRoute;
        this.buttons = buttons;
        if (!this.baseRoute) {
            this.baseRoute = _Buttons__WEBPACK_IMPORTED_MODULE_1__["defaultBaseRoute"];
        }
        this.buttons.forEach(btn => {
            if (!btn.baseRoute || btn.baseRoute === _Buttons__WEBPACK_IMPORTED_MODULE_1__["defaultBaseRoute"]) {
                btn.baseRoute = this.baseRoute;
            }
        });
        // 套用name的多語系
        if (typeof (this.name) !== 'string') {
            this.name = _services_language_service__WEBPACK_IMPORTED_MODULE_0__["LanguageService"].GetTextFromObject(this.name);
        }
    }
}


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: HttpLoaderFactory, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/collapse */ "+Cnu");
/* harmony import */ var ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/buttons */ "s3T5");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/modal */ "K3ix");
/* harmony import */ var ngx_bootstrap_typeahead__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/typeahead */ "qCdp");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./header/header.component */ "fECr");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./footer/footer.component */ "fp1T");
/* harmony import */ var _introduction_introduction_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./introduction/introduction.component */ "GSEy");
/* harmony import */ var _sound_buttons_sound_buttons_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./sound-buttons/sound-buttons.component */ "vxYK");
/* harmony import */ var _container_container_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./container/container.component */ "s7Ec");
/* harmony import */ var _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./home-page/home-page.component */ "F1my");
/* harmony import */ var _upload_upload_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./upload/upload.component */ "StNR");
/* harmony import */ var _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./dialog/dialog.component */ "ZYp2");
/* harmony import */ var _services_color_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./services/color.service */ "4y7E");
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./services/config.service */ "r4Kj");
/* harmony import */ var _services_language_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./services/language.service */ "kyOO");
/* harmony import */ var _services_audio_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./services/audio.service */ "jHbz");
/* harmony import */ var _services_dialog_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./services/dialog.service */ "CzQJ");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _audio_control_audio_control_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./audio-control/audio-control.component */ "7m8B");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @ngx-translate/http-loader */ "mqiu");
/* harmony import */ var _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @scullyio/ng-lib */ "sbAP");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/core */ "fXoL");



































// AoT requires an exported function for factories
function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_26__["TranslateHttpLoader"](http);
}
class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵdefineInjector"]({ providers: [
        _services_language_service__WEBPACK_IMPORTED_MODULE_20__["LanguageService"],
        _services_config_service__WEBPACK_IMPORTED_MODULE_19__["ConfigService"],
        _services_color_service__WEBPACK_IMPORTED_MODULE_18__["ColorService"],
        _services_audio_service__WEBPACK_IMPORTED_MODULE_21__["AudioService"],
        _services_dialog_service__WEBPACK_IMPORTED_MODULE_22__["DialogService"]
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_5__["ButtonsModule"].forRoot(),
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__["ModalModule"].forRoot(),
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
            ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_4__["CollapseModule"].forRoot(),
            ngx_toastr__WEBPACK_IMPORTED_MODULE_23__["ToastrModule"].forRoot({
                disableTimeOut: true,
                positionClass: 'toast-bottom-center',
            }),
            ngx_bootstrap_typeahead__WEBPACK_IMPORTED_MODULE_7__["TypeaheadModule"].forRoot(),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_25__["TranslateModule"].forRoot({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_25__["TranslateLoader"],
                    useFactory: HttpLoaderFactory,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]]
                },
                defaultLanguage: 'zh'
            }),
            _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_27__["ScullyLibModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
        _header_header_component__WEBPACK_IMPORTED_MODULE_10__["HeaderComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_11__["FooterComponent"],
        _introduction_introduction_component__WEBPACK_IMPORTED_MODULE_12__["IntroductionComponent"],
        _sound_buttons_sound_buttons_component__WEBPACK_IMPORTED_MODULE_13__["SoundButtonsComponent"],
        _container_container_component__WEBPACK_IMPORTED_MODULE_14__["ContainerComponent"],
        _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_15__["HomePageComponent"],
        _upload_upload_component__WEBPACK_IMPORTED_MODULE_16__["UploadComponent"],
        _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_17__["DialogComponent"],
        _audio_control_audio_control_component__WEBPACK_IMPORTED_MODULE_24__["AudioControlComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_5__["ButtonsModule"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__["ModalModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_4__["CollapseModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_23__["ToastrModule"], ngx_bootstrap_typeahead__WEBPACK_IMPORTED_MODULE_7__["TypeaheadModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_25__["TranslateModule"], _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_27__["ScullyLibModule"]] }); })();


/***/ }),

/***/ "ZYp2":
/*!********************************************!*\
  !*** ./src/app/dialog/dialog.component.ts ***!
  \********************************************/
/*! exports provided: DialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogComponent", function() { return DialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/modal */ "K3ix");
/* harmony import */ var _services_dialog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../services/dialog.service */ "CzQJ");



const _c0 = ["tModel"];
function DialogComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DialogComponent_ng_template_0_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.modalRef.hide(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.modalData.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r1.modalData.message, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
class DialogComponent {
    constructor(modalService, dialogService) {
        this.modalService = modalService;
        this.dialogService = dialogService;
        this.modalData = {
            title: '',
            message: '',
            result: false
        };
    }
    ngAfterViewInit() {
        this.dialogService.showModal.subscribe(m => {
            this.modalData.title = m.title;
            this.modalData.message = m.message;
            this.modalRef = this.modalService.show(this.modal);
        });
    }
    // modalYes(): void{
    //   this.modalRef.hide();
    //   this.dialogService.confirmModal.emit(true);
    // }
    // modalNo(): void{
    //   this.modalRef.hide();
    //   this.dialogService.confirmModal.emit(false);
    // }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
DialogComponent.ɵfac = function DialogComponent_Factory(t) { return new (t || DialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__["BsModalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_dialog_service__WEBPACK_IMPORTED_MODULE_2__["DialogService"])); };
DialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DialogComponent, selectors: [["app-dialog"]], viewQuery: function DialogComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 3);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.modal = _t.first);
    } }, decls: 2, vars: 0, consts: [["tModel", ""], [1, "modal-content"], [1, "modal-header"], [1, "modal-title", "pull-left"], ["type", "button", "aria-label", "Close", 1, "close", "pull-right", "btn-close", 3, "click"], [1, "modal-body", 3, "innerHTML"]], template: function DialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DialogComponent_ng_template_0_Template, 6, 2, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkaWFsb2cuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "fECr":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../services/config.service */ "r4Kj");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/collapse */ "+Cnu");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");






function HeaderComponent_button_7_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_button_7_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.isCollapsed = !ctx_r2.isCollapsed; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-expanded", !ctx_r0.isCollapsed);
} }
function HeaderComponent_div_8_a_7_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_div_8_a_7_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r6.setLiveUpdate(true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "\u5F85\u5BE9\u6838\u9810\u89A7"));
} }
function HeaderComponent_div_8_a_9_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_div_8_a_9_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r8.setLiveUpdate(false); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "\u56DE\u6B63\u5F0F\u7248"));
} }
function HeaderComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, HeaderComponent_div_8_a_7_Template, 3, 3, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, HeaderComponent_div_8_a_9_Template, 3, 3, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("collapse", ctx_r1.isCollapsed);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", ctx_r1.name + "/upload");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 5, "\u6295\u7A3F"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.router.url.includes("upload"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.router.url.includes("liveUpdate"));
} }
class HeaderComponent {
    constructor(configService, router) {
        this.configService = configService;
        this.router = router;
        this.title = 'Sound Buttons';
        this.name = '';
        this.fullName = '';
        this.isCollapsed = true;
    }
    ngOnInit() {
        this.configSubscription = this.configService.OnConfigChanged.subscribe(c => {
            var _a, _b;
            this.name = (_a = c === null || c === void 0 ? void 0 : c.name) !== null && _a !== void 0 ? _a : '';
            this.fullName = (_b = c === null || c === void 0 ? void 0 : c.fullName) !== null && _b !== void 0 ? _b : '';
        });
    }
    setLiveUpdate(flag) {
        this.configService.isLiveUpdate = flag;
        if (flag) {
            this.router.navigate(['/', this.name], { queryParams: { liveUpdate: '1' } });
        }
        else {
            this.router.navigate(['/', this.name]);
        }
    }
    ngOnDestroy() {
        var _a;
        (_a = this.configSubscription) === null || _a === void 0 ? void 0 : _a.unsubscribe();
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_config_service__WEBPACK_IMPORTED_MODULE_1__["ConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 9, vars: 4, consts: [[1, "navbar", "navbar-expand-lg", "navbar-dark", "bg-primary"], [1, "container-fluid"], ["routerLink", "/", 1, "navbar-brand"], ["src", "assets/img/favicon/icon-trim.png", "alt", "icon"], [1, "navbar-brand", "fullName", 3, "click"], ["class", "navbar-toggler", "type", "button", "aria-controls", "navbar", "aria-label", "Toggle navigation", 3, "click", 4, "ngIf"], ["class", "collapse navbar-collapse justify-content-end", 3, "collapse", 4, "ngIf"], ["type", "button", "aria-controls", "navbar", "aria-label", "Toggle navigation", 1, "navbar-toggler", 3, "click"], [1, "navbar-toggler-icon"], [1, "collapse", "navbar-collapse", "justify-content-end", 3, "collapse"], [1, "navbar-nav", "ml-auto"], [1, "nav-item"], [1, "nav-link", 3, "routerLink"], ["class", "nav-link text-white", 3, "click", 4, "ngIf"], [1, "nav-link", "text-white", 3, "click"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_5_listener() { return ctx.setLiveUpdate(false); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, HeaderComponent_button_7_Template, 2, 1, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, HeaderComponent_div_8_Template, 10, 7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \u00A0 ", ctx.title, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.fullName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.name);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_4__["CollapseDirective"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslatePipe"]], styles: [".navbar-brand[_ngcontent-%COMP%] {\n  padding: 0.5rem 1rem;\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  vertical-align: middle;\n}\n.navbar-brand[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 1.5rem;\n}\n@media only screen and (max-width: 425px) {\n  .navbar-brand[_ngcontent-%COMP%] {\n    padding: 0.2rem;\n  }\n}\n.fullName[_ngcontent-%COMP%] {\n  justify-content: center;\n  flex-grow: 4;\n  align-items: center;\n}\na[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.navbar-nav[_ngcontent-%COMP%] {\n  flex-direction: row-reverse;\n  padding-left: 0.75rem;\n  padding-right: 0.75rem;\n}\n.navbar-nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  padding-left: 0.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2hlYWRlci5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9zdHlsZS9fdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxvQkMwRWtDO0VEekVsQyxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7QUFERjtBQUdFO0VBQ0UsY0FBQTtBQURKO0FBSUU7RUFYRjtJQVlJLGVBQUE7RUFERjtBQUNGO0FBSUE7RUFDRSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQURGO0FBSUE7RUFDRSxlQUFBO0FBREY7QUFJQTtFQUNFLDJCQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtBQURGO0FBR0U7RUFDRSxvQkFBQTtBQURKIiwiZmlsZSI6ImhlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ3ZhcmlhYmxlcyc7XG5cbi5uYXZiYXItYnJhbmQge1xuICBwYWRkaW5nOiAkbmF2YmFyLXBhZGRpbmcteTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuXG4gIGltZyB7XG4gICAgaGVpZ2h0OiAxLjVyZW07XG4gIH1cblxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQyNXB4KSB7XG4gICAgcGFkZGluZzogMC4ycmVtO1xuICB9XG59XG5cbi5mdWxsTmFtZSB7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LWdyb3c6IDQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbmEge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5uYXZiYXItbmF2IHtcbiAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xuICBwYWRkaW5nLWxlZnQ6IDAuNzVyZW07XG4gIHBhZGRpbmctcmlnaHQ6IDAuNzVyZW07XG5cbiAgLm5hdi1saW5rIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDAuNXJlbTtcbiAgfVxufVxuIiwiLy8gUHVsc2UgNC42LjBcbi8vIEJvb3Rzd2F0Y2hcblxuLy9cbi8vIENvbG9yIHN5c3RlbVxuLy9cblxuJHdoaXRlOiAgICAjZmZmICFkZWZhdWx0O1xuJGdyYXktMTAwOiAjZmFmYWZhICFkZWZhdWx0O1xuJGdyYXktMjAwOiAjZjlmOGZjICFkZWZhdWx0O1xuJGdyYXktMzAwOiAjZWRlZGVkICFkZWZhdWx0O1xuJGdyYXktNDAwOiAjY2JjOGQwICFkZWZhdWx0O1xuJGdyYXktNTAwOiAjYWRiNWJkICFkZWZhdWx0O1xuJGdyYXktNjAwOiAjODY4ZTk2ICFkZWZhdWx0O1xuJGdyYXktNzAwOiAjNDQ0ICFkZWZhdWx0O1xuJGdyYXktODAwOiAjMzQzYTQwICFkZWZhdWx0O1xuJGdyYXktOTAwOiAjMTcxNDFmICFkZWZhdWx0O1xuJGJsYWNrOiAgICAjMDAwICFkZWZhdWx0O1xuXG4kYmx1ZTogICAgIzAwN2JmZiAhZGVmYXVsdDtcbiRpbmRpZ286ICAjNjYxMGYyICFkZWZhdWx0O1xuJHB1cnBsZTogICM1OTMxOTYgIWRlZmF1bHQ7XG4kcGluazogICAgI2U4M2U4YyAhZGVmYXVsdDtcbiRyZWQ6ICAgICAjZmMzOTM5ICFkZWZhdWx0O1xuJG9yYW5nZTogICNmZDdlMTQgIWRlZmF1bHQ7XG4keWVsbG93OiAgI2VmYTMxZCAhZGVmYXVsdDtcbiRncmVlbjogICAjMTNiOTU1ICFkZWZhdWx0O1xuJHRlYWw6ICAgICMyMGM5OTcgIWRlZmF1bHQ7XG4kY3lhbjogICAgIzAwOWNkYyAhZGVmYXVsdDtcbiRsaWdodC1ibHVlOiAjM0RBQ0REO1xuXG4kcHJpbWFyeTogICAgICAgIzAwMDAwMCAhZGVmYXVsdDtcbiRzZWNvbmRhcnk6ICAgICAjNzc3Nzc3ICFkZWZhdWx0O1xuJHN1Y2Nlc3M6ICAgICAgICRncmVlbiAhZGVmYXVsdDtcbiRpbmZvOiAgICAgICAgICAkY3lhbiAhZGVmYXVsdDtcbiR3YXJuaW5nOiAgICAgICAkeWVsbG93ICFkZWZhdWx0O1xuJGRhbmdlcjogICAgICAgICRyZWQgIWRlZmF1bHQ7XG4kbGlnaHQ6ICAgICAgICAgJGdyYXktMjAwICFkZWZhdWx0O1xuJGRhcms6ICAgICAgICAgICRncmF5LTkwMCAhZGVmYXVsdDtcblxuLy8gT3B0aW9uc1xuXG4kZW5hYmxlLXJvdW5kZWQ6IGZhbHNlICFkZWZhdWx0O1xuXG4vLyBCb2R5XG5cbiRib2R5LWNvbG9yOiAgICAgICAgICAgICAgICAkZ3JheS03MDAgIWRlZmF1bHQ7XG5cbi8vIExpbmtzXG5cbiRsaW5rLWhvdmVyLWNvbG9yOiAgICAgICAgICAkcHJpbWFyeSAhZGVmYXVsdDtcblxuLy8gRm9udHNcblxuJGZvbnQtc2l6ZS1iYXNlOiAgICAgICAgICAgICAgLjg3NXJlbSAhZGVmYXVsdDtcblxuLy8gVGFibGVzXG5cbiR0YWJsZS1ib3JkZXItY29sb3I6ICAgICAgICAgIHJnYmEoMCwgMCwgMCwgLjA1KSAhZGVmYXVsdDtcblxuLy8gRm9ybXNcblxuJGlucHV0LWZvY3VzLWJvcmRlci1jb2xvcjogICAgICAgICAgICAgICRwcmltYXJ5ICFkZWZhdWx0O1xuXG4vLyBEcm9wZG93bnNcblxuJGRyb3Bkb3duLWxpbmstY29sb3I6ICAgICAgICAgICAgICAgJGdyYXktNzAwICFkZWZhdWx0O1xuJGRyb3Bkb3duLWxpbmstaG92ZXItY29sb3I6ICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xuJGRyb3Bkb3duLWxpbmstaG92ZXItYmc6ICAgICAgICAgICAgJHByaW1hcnkgIWRlZmF1bHQ7XG5cbi8vIE5hdnNcblxuJG5hdi10YWJzLWJvcmRlci1jb2xvcjogICAgICAgICAgICAgJGdyYXktMzAwICFkZWZhdWx0O1xuJG5hdi10YWJzLWxpbmstaG92ZXItYm9yZGVyLWNvbG9yOiAgJHByaW1hcnkgIWRlZmF1bHQ7XG5cbi8vIE5hdmJhclxuXG4kbmF2YmFyLXBhZGRpbmcteTogICAgICAgICAgICAgICAgICAwLjVyZW0gMXJlbSAhZGVmYXVsdDtcbiRuYXZiYXItZGFyay1ob3Zlci1jb2xvcjogICAgICAgICAgIHJnYmEoJHdoaXRlLCAuOSkgIWRlZmF1bHQ7XG4kbmF2YmFyLWRhcmstYWN0aXZlLWNvbG9yOiAgICAgICAgICByZ2JhKCR3aGl0ZSwgLjkpICFkZWZhdWx0O1xuJG5hdmJhci1saWdodC1jb2xvcjogICAgICAgICAgICAgICAgcmdiYSgkYmxhY2ssIC40KSAhZGVmYXVsdDtcbiRuYXZiYXItbGlnaHQtYWN0aXZlLWNvbG9yOiAgICAgICAgIHJnYmEoJGJsYWNrLCAuNykgIWRlZmF1bHQ7XG4kbmF2YmFyLWxpZ2h0LWRpc2FibGVkLWNvbG9yOiAgICAgICByZ2JhKCRibGFjaywgLjIpICFkZWZhdWx0O1xuXG4vLyBQcm9ncmVzcyBiYXJzXG5cbiRwcm9ncmVzcy1iZzogICAgICAgICAgICAgICAgICAgICAgICRncmF5LTMwMCAhZGVmYXVsdDtcbiRwcm9ncmVzcy1iYXItYmc6ICAgICAgICAgICAgICAgICAgICRwcmltYXJ5ICFkZWZhdWx0O1xuXG4vLyBMaXN0IGdyb3VwXG5cbiRsaXN0LWdyb3VwLWJnOiAgICAgICAgICAgICAgICAgICAgICRncmF5LTkwMCAhZGVmYXVsdDtcbiRsaXN0LWdyb3VwLWJvcmRlci1jb2xvcjogICAgICAgICAgIHRyYW5zcGFyZW50ICFkZWZhdWx0O1xuJGxpc3QtZ3JvdXAtaG92ZXItYmc6ICAgICAgICAgICAgICAgbGlnaHRlbigkbGlzdC1ncm91cC1iZywgMTAlKSAhZGVmYXVsdDtcbiRsaXN0LWdyb3VwLWFjdGl2ZS1jb2xvcjogICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcbiRsaXN0LWdyb3VwLWFjdGl2ZS1iZzogICAgICAgICAgICAgICRsaXN0LWdyb3VwLWJnICFkZWZhdWx0O1xuJGxpc3QtZ3JvdXAtZGlzYWJsZWQtY29sb3I6ICAgICAgICAgbGlnaHRlbigkbGlzdC1ncm91cC1iZywgMzAlKSAhZGVmYXVsdDtcblxuXG4vLyBGb290ZXJcbiRmb290ZXItaGVpZ2h0OiAzcmVtO1xuXG5AaW1wb3J0ICcvbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9zY3NzL2Z1bmN0aW9ucyc7XG5AaW1wb3J0ICcvbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9zY3NzL3ZhcmlhYmxlcyc7XG5AaW1wb3J0ICcvbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9zY3NzL21peGlucyc7XG4iXX0= */"] });


/***/ }),

/***/ "fp1T":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class FooterComponent {
    constructor() {
        this.copyText = 'MIT License';
    }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], inputs: { copyText: "copyText" }, decls: 13, vars: 1, consts: [[1, "fixed-bottom"], [1, "copyright"], [1, "social"], ["href", "https://github.com/jim60105/sound-buttons", "target", "_blank", "rel", "noreferrer noopener", 1, "support"], ["href", "https://blog.maki0419.com/2021/05/soundbuttons.html", "target", "_blank", "rel", "noreferrer noopener", 1, "blogger"], ["href", "https://twitter.com/jim60105", "target", "_blank", "rel", "noreferrer noopener", 1, "tweet"], ["href", "https://www.facebook.com/jim60105", "target", "_blank", "rel", "noreferrer noopener", 1, "face"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Github");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Blogger");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "twitter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "facebook");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.copyText);
    } }, styles: ["*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nfooter[_ngcontent-%COMP%] {\n  width: 100%;\n  display: inline-block;\n  background-color: var(--bs-secondary);\n  line-height: 3rem;\n}\n\n@media only screen and (max-width: 767px) {\n  footer[_ngcontent-%COMP%] {\n    height: 0px;\n  }\n}\n\nfooter[_ngcontent-%COMP%]   .copyright[_ngcontent-%COMP%] {\n  width: 50%;\n  float: left;\n  max-height: 3rem;\n}\n\n@media (max-width: 600px) {\n  footer[_ngcontent-%COMP%]   .copyright[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n\nfooter[_ngcontent-%COMP%]   .copyright[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  padding-left: 10%;\n  color: #fff;\n  font-size: 0.7rem;\n  text-transform: capitalize;\n  letter-spacing: 1px;\n}\n\n@media (max-width: 600px) {\n  footer[_ngcontent-%COMP%]   .copyright[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    text-align: center;\n    padding: 0;\n  }\n}\n\nfooter[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%] {\n  width: 50%;\n  float: right;\n  font-size: 1.2em;\n}\n\n@media (max-width: 600px) {\n  footer[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n\nfooter[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  float: left;\n  text-decoration: none;\n  color: white;\n  text-align: center;\n  font-weight: bold;\n  transition: all 0.3s;\n}\n\nfooter[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background-color: var(--bs-primary);\n}\n\n.youtube[_ngcontent-%COMP%] {\n  background-color: #fc3939;\n  width: 20%;\n}\n\n.blogger[_ngcontent-%COMP%] {\n  background-color: #fd7e14;\n  width: 20%;\n}\n\n.face[_ngcontent-%COMP%] {\n  background-color: #007bff;\n  width: 20%;\n}\n\n.tweet[_ngcontent-%COMP%] {\n  background-color: #3DACDD;\n  width: 20%;\n}\n\n.support[_ngcontent-%COMP%] {\n  background-color: #17141f;\n  width: 40%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2Zvb3Rlci5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9zdHlsZS9fdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS0E7RUFDRSxTQUFBO0VBQ0EsVUFBQTtFQUNBLHNCQUFBO0FBSkY7O0FBT0E7RUFDRSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxxQ0FBQTtFQUNBLGlCQ3FGYztBRHpGaEI7O0FBTUU7RUFORjtJQU9JLFdBQUE7RUFIRjtBQUNGOztBQUtFO0VBQ0UsVUFBQTtFQUNBLFdBQUE7RUFDQSxnQkM0RVk7QUQvRWhCOztBQUtJO0VBTEY7SUFNSSxXQUFBO0VBRko7QUFDRjs7QUFJSTtFQUNFLGlCQUFBO0VBQ0EsV0N6Qks7RUQwQkwsaUJBQUE7RUFDQSwwQkFBQTtFQUNBLG1CQUFBO0FBRk47O0FBSU07RUFQRjtJQVFJLGtCQUFBO0lBQ0EsVUFBQTtFQUROO0FBQ0Y7O0FBS0U7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQTdDZTtBQTBDbkI7O0FBS0k7RUFMRjtJQU1JLFdBQUE7RUFGSjtBQUNGOztBQUlJO0VBQ0UsV0FBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtBQUZOOztBQUlNO0VBQ0UsbUNBQUE7QUFGUjs7QUFRQTtFQUNFLHlCQzlDUTtFRCtDUixVQW5FYTtBQThEZjs7QUFRQTtFQUNFLHlCQ2xEUTtFRG1EUixVQXhFYTtBQW1FZjs7QUFRQTtFQUNFLHlCQzVEUTtFRDZEUixVQTdFYTtBQXdFZjs7QUFRQTtFQUNFLHlCQ3ZEVztFRHdEWCxVQWxGYTtBQTZFZjs7QUFRQTtFQUNFLHlCQ3pFUztFRDBFVCxVQUFBO0FBTEYiLCJmaWxlIjoiZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAndmFyaWFibGVzJztcblxuJGZvb3Rlci1mb250LXNpemU6IDEuMmVtO1xuJHNvY2lhbC13aWR0aDogMjAlO1xuXG4qIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5mb290ZXIge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1icy1zZWNvbmRhcnkpO1xuICBsaW5lLWhlaWdodDogJGZvb3Rlci1oZWlnaHQ7XG5cbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAgIGhlaWdodDogMHB4O1xuICB9XG5cbiAgLmNvcHlyaWdodCB7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBtYXgtaGVpZ2h0OiAkZm9vdGVyLWhlaWdodDtcblxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuXG4gICAgcCB7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDEwJTtcbiAgICAgIGNvbG9yOiAkd2hpdGU7XG4gICAgICBmb250LXNpemU6IDAuN3JlbTtcbiAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcblxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuc29jaWFsIHtcbiAgICB3aWR0aDogNTAlO1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBmb250LXNpemU6ICRmb290ZXItZm9udC1zaXplO1xuXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG5cbiAgICBhIHtcbiAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcblxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJzLXByaW1hcnkpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4ueW91dHViZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRyZWQ7XG4gIHdpZHRoOiAkc29jaWFsLXdpZHRoO1xufVxuXG4uYmxvZ2dlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRvcmFuZ2U7XG4gIHdpZHRoOiAkc29jaWFsLXdpZHRoO1xufVxuXG4uZmFjZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRibHVlO1xuICB3aWR0aDogJHNvY2lhbC13aWR0aDtcbn1cblxuLnR3ZWV0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGxpZ2h0LWJsdWU7XG4gIHdpZHRoOiAkc29jaWFsLXdpZHRoO1xufVxuXG4uc3VwcG9ydCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRkYXJrO1xuICB3aWR0aDogJHNvY2lhbC13aWR0aCAqIDI7XG59XG4iLCIvLyBQdWxzZSA0LjYuMFxuLy8gQm9vdHN3YXRjaFxuXG4vL1xuLy8gQ29sb3Igc3lzdGVtXG4vL1xuXG4kd2hpdGU6ICAgICNmZmYgIWRlZmF1bHQ7XG4kZ3JheS0xMDA6ICNmYWZhZmEgIWRlZmF1bHQ7XG4kZ3JheS0yMDA6ICNmOWY4ZmMgIWRlZmF1bHQ7XG4kZ3JheS0zMDA6ICNlZGVkZWQgIWRlZmF1bHQ7XG4kZ3JheS00MDA6ICNjYmM4ZDAgIWRlZmF1bHQ7XG4kZ3JheS01MDA6ICNhZGI1YmQgIWRlZmF1bHQ7XG4kZ3JheS02MDA6ICM4NjhlOTYgIWRlZmF1bHQ7XG4kZ3JheS03MDA6ICM0NDQgIWRlZmF1bHQ7XG4kZ3JheS04MDA6ICMzNDNhNDAgIWRlZmF1bHQ7XG4kZ3JheS05MDA6ICMxNzE0MWYgIWRlZmF1bHQ7XG4kYmxhY2s6ICAgICMwMDAgIWRlZmF1bHQ7XG5cbiRibHVlOiAgICAjMDA3YmZmICFkZWZhdWx0O1xuJGluZGlnbzogICM2NjEwZjIgIWRlZmF1bHQ7XG4kcHVycGxlOiAgIzU5MzE5NiAhZGVmYXVsdDtcbiRwaW5rOiAgICAjZTgzZThjICFkZWZhdWx0O1xuJHJlZDogICAgICNmYzM5MzkgIWRlZmF1bHQ7XG4kb3JhbmdlOiAgI2ZkN2UxNCAhZGVmYXVsdDtcbiR5ZWxsb3c6ICAjZWZhMzFkICFkZWZhdWx0O1xuJGdyZWVuOiAgICMxM2I5NTUgIWRlZmF1bHQ7XG4kdGVhbDogICAgIzIwYzk5NyAhZGVmYXVsdDtcbiRjeWFuOiAgICAjMDA5Y2RjICFkZWZhdWx0O1xuJGxpZ2h0LWJsdWU6ICMzREFDREQ7XG5cbiRwcmltYXJ5OiAgICAgICAjMDAwMDAwICFkZWZhdWx0O1xuJHNlY29uZGFyeTogICAgICM3Nzc3NzcgIWRlZmF1bHQ7XG4kc3VjY2VzczogICAgICAgJGdyZWVuICFkZWZhdWx0O1xuJGluZm86ICAgICAgICAgICRjeWFuICFkZWZhdWx0O1xuJHdhcm5pbmc6ICAgICAgICR5ZWxsb3cgIWRlZmF1bHQ7XG4kZGFuZ2VyOiAgICAgICAgJHJlZCAhZGVmYXVsdDtcbiRsaWdodDogICAgICAgICAkZ3JheS0yMDAgIWRlZmF1bHQ7XG4kZGFyazogICAgICAgICAgJGdyYXktOTAwICFkZWZhdWx0O1xuXG4vLyBPcHRpb25zXG5cbiRlbmFibGUtcm91bmRlZDogZmFsc2UgIWRlZmF1bHQ7XG5cbi8vIEJvZHlcblxuJGJvZHktY29sb3I6ICAgICAgICAgICAgICAgICRncmF5LTcwMCAhZGVmYXVsdDtcblxuLy8gTGlua3NcblxuJGxpbmstaG92ZXItY29sb3I6ICAgICAgICAgICRwcmltYXJ5ICFkZWZhdWx0O1xuXG4vLyBGb250c1xuXG4kZm9udC1zaXplLWJhc2U6ICAgICAgICAgICAgICAuODc1cmVtICFkZWZhdWx0O1xuXG4vLyBUYWJsZXNcblxuJHRhYmxlLWJvcmRlci1jb2xvcjogICAgICAgICAgcmdiYSgwLCAwLCAwLCAuMDUpICFkZWZhdWx0O1xuXG4vLyBGb3Jtc1xuXG4kaW5wdXQtZm9jdXMtYm9yZGVyLWNvbG9yOiAgICAgICAgICAgICAgJHByaW1hcnkgIWRlZmF1bHQ7XG5cbi8vIERyb3Bkb3duc1xuXG4kZHJvcGRvd24tbGluay1jb2xvcjogICAgICAgICAgICAgICAkZ3JheS03MDAgIWRlZmF1bHQ7XG4kZHJvcGRvd24tbGluay1ob3Zlci1jb2xvcjogICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XG4kZHJvcGRvd24tbGluay1ob3Zlci1iZzogICAgICAgICAgICAkcHJpbWFyeSAhZGVmYXVsdDtcblxuLy8gTmF2c1xuXG4kbmF2LXRhYnMtYm9yZGVyLWNvbG9yOiAgICAgICAgICAgICAkZ3JheS0zMDAgIWRlZmF1bHQ7XG4kbmF2LXRhYnMtbGluay1ob3Zlci1ib3JkZXItY29sb3I6ICAkcHJpbWFyeSAhZGVmYXVsdDtcblxuLy8gTmF2YmFyXG5cbiRuYXZiYXItcGFkZGluZy15OiAgICAgICAgICAgICAgICAgIDAuNXJlbSAxcmVtICFkZWZhdWx0O1xuJG5hdmJhci1kYXJrLWhvdmVyLWNvbG9yOiAgICAgICAgICAgcmdiYSgkd2hpdGUsIC45KSAhZGVmYXVsdDtcbiRuYXZiYXItZGFyay1hY3RpdmUtY29sb3I6ICAgICAgICAgIHJnYmEoJHdoaXRlLCAuOSkgIWRlZmF1bHQ7XG4kbmF2YmFyLWxpZ2h0LWNvbG9yOiAgICAgICAgICAgICAgICByZ2JhKCRibGFjaywgLjQpICFkZWZhdWx0O1xuJG5hdmJhci1saWdodC1hY3RpdmUtY29sb3I6ICAgICAgICAgcmdiYSgkYmxhY2ssIC43KSAhZGVmYXVsdDtcbiRuYXZiYXItbGlnaHQtZGlzYWJsZWQtY29sb3I6ICAgICAgIHJnYmEoJGJsYWNrLCAuMikgIWRlZmF1bHQ7XG5cbi8vIFByb2dyZXNzIGJhcnNcblxuJHByb2dyZXNzLWJnOiAgICAgICAgICAgICAgICAgICAgICAgJGdyYXktMzAwICFkZWZhdWx0O1xuJHByb2dyZXNzLWJhci1iZzogICAgICAgICAgICAgICAgICAgJHByaW1hcnkgIWRlZmF1bHQ7XG5cbi8vIExpc3QgZ3JvdXBcblxuJGxpc3QtZ3JvdXAtYmc6ICAgICAgICAgICAgICAgICAgICAgJGdyYXktOTAwICFkZWZhdWx0O1xuJGxpc3QtZ3JvdXAtYm9yZGVyLWNvbG9yOiAgICAgICAgICAgdHJhbnNwYXJlbnQgIWRlZmF1bHQ7XG4kbGlzdC1ncm91cC1ob3Zlci1iZzogICAgICAgICAgICAgICBsaWdodGVuKCRsaXN0LWdyb3VwLWJnLCAxMCUpICFkZWZhdWx0O1xuJGxpc3QtZ3JvdXAtYWN0aXZlLWNvbG9yOiAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xuJGxpc3QtZ3JvdXAtYWN0aXZlLWJnOiAgICAgICAgICAgICAgJGxpc3QtZ3JvdXAtYmcgIWRlZmF1bHQ7XG4kbGlzdC1ncm91cC1kaXNhYmxlZC1jb2xvcjogICAgICAgICBsaWdodGVuKCRsaXN0LWdyb3VwLWJnLCAzMCUpICFkZWZhdWx0O1xuXG5cbi8vIEZvb3RlclxuJGZvb3Rlci1oZWlnaHQ6IDNyZW07XG5cbkBpbXBvcnQgJy9ub2RlX21vZHVsZXMvYm9vdHN0cmFwL3Njc3MvZnVuY3Rpb25zJztcbkBpbXBvcnQgJy9ub2RlX21vZHVsZXMvYm9vdHN0cmFwL3Njc3MvdmFyaWFibGVzJztcbkBpbXBvcnQgJy9ub2RlX21vZHVsZXMvYm9vdHN0cmFwL3Njc3MvbWl4aW5zJztcbiJdfQ== */"] });


/***/ }),

/***/ "jHbz":
/*!*******************************************!*\
  !*** ./src/app/services/audio.service.ts ***!
  \*******************************************/
/*! exports provided: AudioService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AudioService", function() { return AudioService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class AudioService {
    constructor() {
        this.audioQueue = [];
        this.lastSource = undefined;
        this.OnSourceChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.nowVolume = 1;
        this.nowSpeed = 1;
    }
    add(url, source, volume = 1) {
        const audio = new Audio(url);
        audio.volume = volume * this.nowVolume;
        audio.playbackRate = this.nowSpeed;
        audio.addEventListener('ended', (event) => {
            this.audioQueue.splice(this.audioQueue.indexOf(audio), 1);
        });
        this.audioQueue.push(audio);
        audio.play();
        this.lastSource = source;
        this.OnSourceChanged.emit(source);
    }
    stop() {
        this.audioQueue.forEach(audio => {
            audio.pause();
            audio.remove();
        });
        this.audioQueue = [];
    }
    faster() {
        if (this.nowSpeed < 4) {
            this.nowSpeed += 0.1;
            this.audioQueue.forEach(audio => {
                audio.playbackRate = this.nowSpeed;
            });
        }
    }
    slower() {
        if (this.nowSpeed > 0.5) {
            this.nowSpeed -= 0.1;
            this.audioQueue.forEach(audio => {
                audio.playbackRate = this.nowSpeed;
            });
        }
    }
    recover() {
        this.nowSpeed = 1;
        this.audioQueue.forEach(audio => {
            audio.playbackRate = 1;
        });
    }
    volume(volume) {
        // 使之不為0，乘上0原數值就回不來了
        if (volume === 0) {
            volume = 0.0001;
        }
        this.audioQueue.forEach(audio => {
            audio.volume /= this.nowVolume;
            audio.volume *= volume;
        });
        this.nowVolume = volume;
    }
}
AudioService.ɵfac = function AudioService_Factory(t) { return new (t || AudioService)(); };
AudioService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AudioService, factory: AudioService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "kyOO":
/*!**********************************************!*\
  !*** ./src/app/services/language.service.ts ***!
  \**********************************************/
/*! exports provided: LanguageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LanguageService", function() { return LanguageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
var _a, _b;

class LanguageService {
    /**
     * 傳入一個物件，並回傳此物件中的語言字串。若無對應的語言，則傳回第一個語言字串。
     * @param obj \{ zh: "中文字", ja: "日文字" }
     * @returns 取得的語言字串
     */
    static GetTextFromObject(obj = {}) {
        let text;
        Object.keys(obj).forEach(key => {
            if (this.BrowserLanguage.toLowerCase().includes(key)) {
                text = obj[key];
            }
        });
        return text ? text : obj[Object.keys(obj)[0]];
    }
}
/**
 * 取得語系前兩碼
 */
LanguageService.BrowserLanguage = (_b = (_a = (navigator.language || navigator.languages[0]).match(/^([^-_]*)/)) === null || _a === void 0 ? void 0 : _a.pop()) !== null && _b !== void 0 ? _b : 'zh';
LanguageService.ɵfac = function LanguageService_Factory(t) { return new (t || LanguageService)(); };
LanguageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LanguageService, factory: LanguageService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "r4Kj":
/*!********************************************!*\
  !*** ./src/app/services/config.service.ts ***!
  \********************************************/
/*! exports provided: ConfigService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigService", function() { return ConfigService; });
/* harmony import */ var _language_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./language.service */ "kyOO");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _sound_buttons_ButtonGroup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../sound-buttons/ButtonGroup */ "TZYx");
/* harmony import */ var _sound_buttons_Buttons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../sound-buttons/Buttons */ "tLcZ");
/* harmony import */ var _color_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./color.service */ "4y7E");
/* harmony import */ var _audio_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./audio.service */ "jHbz");










class ConfigService {
    constructor(http, colorService, audioService) {
        this.http = http;
        this.colorService = colorService;
        this.audioService = audioService;
        this.url = 'assets/configs/main.json';
        this.groupNames = [];
        this.OnConfigChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        // tslint:disable-next-line: variable-name
        this._isLiveUpdate = false;
        // tslint:disable-next-line: variable-name
        this._name = '';
    }
    get isLiveUpdate() {
        return this._isLiveUpdate;
    }
    set isLiveUpdate(value) {
        this._isLiveUpdate = value;
        this.reloadConfig();
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
        this.reloadConfig();
    }
    setGroupNames(buttonGroups) {
        this.groupNames.length = 0;
        buttonGroups.forEach(group => {
            this.groupNames.push(group.name);
        });
    }
    getFullConfigUrl(name, configs) {
        let fullConfigURL = '';
        if (configs) {
            for (const c of configs) {
                if (name === c.name) {
                    fullConfigURL = this.isLiveUpdate
                        ? c.liveUpdateURL
                        : c.fullConfigURL;
                }
            }
        }
        return fullConfigURL;
    }
    getBriefConfig(url = this.url) {
        // IConfig下都是基本型別，直接用
        return this.http.get(url, { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Cache-Control': 'max-age=0' }) });
    }
    getConfig(name = this.name, configs) {
        const fullConfigURL = this.getFullConfigUrl(name, configs);
        if (!fullConfigURL) {
            // fullConfigURL = 'assets/configs/template.json';
            return undefined;
        }
        return this.http.get(fullConfigURL, { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Cache-Control': 'max-age=0' }) }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(source => {
            // tslint:disable-next-line: prefer-const
            let target = Object.assign({}, source);
            // 重新建立introButton
            if (source.introButton) {
                const b = source.introButton;
                target.introButton = new _sound_buttons_Buttons__WEBPACK_IMPORTED_MODULE_5__["Button"](this.audioService, b.filename, b.text, b.baseRoute, b.volume, b.source, b.SASToken);
            }
            // 重新建立buttonGroups
            if (source.buttonGroups) {
                // 重新new出來賦值，否則由json接進來的button object不會有自訂方法
                const buttonGroups = [];
                for (const bg of source.buttonGroups) {
                    const buttons = [];
                    for (const b of bg.buttons) {
                        // 重點在此處重建Button，這樣才會有click方法屬性
                        buttons.push(new _sound_buttons_Buttons__WEBPACK_IMPORTED_MODULE_5__["Button"](this.audioService, b.filename, b.text, b.baseRoute, b.volume, b.source, b.SASToken));
                    }
                    buttonGroups.push(new _sound_buttons_ButtonGroup__WEBPACK_IMPORTED_MODULE_4__["ButtonGroup"](bg.name, bg.baseRoute, buttons));
                }
                target.buttonGroups = buttonGroups;
                this.setGroupNames(buttonGroups);
            }
            if (source.color) {
                this.colorService.color = source.color;
            }
            // 套用text中的多語系
            if (typeof (source.intro) !== 'string') {
                // tslint:disable-next-line: variable-name
                source.intro = _language_service__WEBPACK_IMPORTED_MODULE_0__["LanguageService"].GetTextFromObject(source.intro);
            }
            return target;
        }));
    }
    resetConfig() {
        this.config = undefined;
        this._name = '';
        this._isLiveUpdate = false;
        this.colorService.resetColor();
        this.OnConfigChanged.emit(this.config);
    }
    reloadConfig(callback) {
        this.getBriefConfig().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(cs => {
            const config$ = this.getConfig(this._name, cs);
            if (config$) {
                return config$;
            }
            else {
                throw new Error("No config received.");
            }
        })).subscribe(config => {
            if (config) {
                this.config = config;
                this.OnConfigChanged.emit(this.config);
            }
            else {
                this.resetConfig();
            }
            if (callback) {
                callback(config);
            }
        });
    }
}
ConfigService.ɵfac = function ConfigService_Factory(t) { return new (t || ConfigService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_color_service__WEBPACK_IMPORTED_MODULE_6__["ColorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_audio_service__WEBPACK_IMPORTED_MODULE_7__["AudioService"])); };
ConfigService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: ConfigService, factory: ConfigService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "s7Ec":
/*!**************************************************!*\
  !*** ./src/app/container/container.component.ts ***!
  \**************************************************/
/*! exports provided: ContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContainerComponent", function() { return ContainerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/config.service */ "r4Kj");
/* harmony import */ var _services_audio_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/audio.service */ "jHbz");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _audio_control_audio_control_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../audio-control/audio-control.component */ "7m8B");
/* harmony import */ var _introduction_introduction_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../introduction/introduction.component */ "GSEy");
/* harmony import */ var _sound_buttons_sound_buttons_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../sound-buttons/sound-buttons.component */ "vxYK");








function ContainerComponent_div_1_app_sound_buttons_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-sound-buttons", 7);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("buttonGroups", ctx_r1.config.buttonGroups);
} }
function ContainerComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-introduction", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ContainerComponent_div_1_app_sound_buttons_4_Template, 1, 1, "app-sound-buttons", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("imgSrc", ctx_r0.config.imgSrc)("intro", ctx_r0.config.intro)("link", ctx_r0.config.link)("button", ctx_r0.config.introButton);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.config.buttonGroups);
} }
class ContainerComponent {
    constructor(route, configService, audioService) {
        this.route = route;
        this.configService = configService;
        this.audioService = audioService;
    }
    ngOnInit() {
        this.configSubscription = this.configService.OnConfigChanged.subscribe(config => {
            var _a, _b;
            if (config) {
                this.config = config;
                if ((_a = config.introButton) === null || _a === void 0 ? void 0 : _a.source) {
                    this.audioService.lastSource = (_b = config.introButton) === null || _b === void 0 ? void 0 : _b.source;
                }
                else {
                    this.audioService.lastSource = undefined;
                }
            }
        });
        this.route.paramMap.subscribe(p => {
            var _a;
            this.configService.name = (_a = p.get('name')) !== null && _a !== void 0 ? _a : 'template';
        });
        this.route.queryParamMap.subscribe(q => {
            this.configService.isLiveUpdate = q.has('liveUpdate');
        });
    }
    ngOnDestroy() {
        var _a;
        (_a = this.configSubscription) === null || _a === void 0 ? void 0 : _a.unsubscribe();
    }
}
ContainerComponent.ɵfac = function ContainerComponent_Factory(t) { return new (t || ContainerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_audio_service__WEBPACK_IMPORTED_MODULE_3__["AudioService"])); };
ContainerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContainerComponent, selectors: [["app-container"]], decls: 3, vars: 1, consts: [[1, "container"], ["class", "row h-100", 4, "ngIf"], [1, "row", "h-100"], [1, "col-12", "col-md-5", "h-100"], [1, "h-100", 3, "imgSrc", "intro", "link", "button"], [1, "col-12", "col-md-7", "h-100"], ["class", "h-100", 3, "buttonGroups", 4, "ngIf"], [1, "h-100", 3, "buttonGroups"]], template: function ContainerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ContainerComponent_div_1_Template, 5, 5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-audio-control");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.config);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _audio_control_audio_control_component__WEBPACK_IMPORTED_MODULE_5__["AudioControlComponent"], _introduction_introduction_component__WEBPACK_IMPORTED_MODULE_6__["IntroductionComponent"], _sound_buttons_sound_buttons_component__WEBPACK_IMPORTED_MODULE_7__["SoundButtonsComponent"]], styles: [".container[_ngcontent-%COMP%] {\n  margin: 3vh auto;\n  height: calc(96vh - 100px);\n  overflow: hidden;\n}\n@media only screen and (max-width: 767px) {\n  .container[_ngcontent-%COMP%] {\n    height: unset;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NvbnRhaW5lci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLGdCQUFBO0VBQ0EsMEJBQUE7RUFDQSxnQkFBQTtBQUFGO0FBRUU7RUFMRjtJQU1JLGFBQUE7RUFDRjtBQUNGIiwiZmlsZSI6ImNvbnRhaW5lci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ3ZhcmlhYmxlcyc7XG4uY29udGFpbmVyIHtcbiAgbWFyZ2luOiAzdmggYXV0bztcbiAgaGVpZ2h0OiBjYWxjKDk2dmggLSAxMDBweCk7XG4gIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAgIGhlaWdodDogdW5zZXQ7XG4gIH1cbn1cbiJdfQ== */"] });


/***/ }),

/***/ "tLcZ":
/*!******************************************!*\
  !*** ./src/app/sound-buttons/Buttons.ts ***!
  \******************************************/
/*! exports provided: defaultBaseRoute, Button */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultBaseRoute", function() { return defaultBaseRoute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return Button; });
/* harmony import */ var _services_language_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/language.service */ "kyOO");

const defaultBaseRoute = 'assets/sound/';
class Button {
    constructor(audioService, filename, text = filename, baseRoute = defaultBaseRoute, volume = 1, source, SASToken) {
        this.audioService = audioService;
        this.filename = filename;
        this.text = text;
        this.baseRoute = baseRoute;
        this.volume = volume;
        this.source = source;
        this.SASToken = SASToken;
        // tslint:disable-next-line: variable-name
        this.click = ($event) => {
            if (this.baseRoute.slice(-1) !== '/') {
                this.baseRoute += '/';
            }
            this.audioService.add(`${this.baseRoute}${this.filename}${this.SASToken}`, this.source, this.volume);
        };
        // 套用text中的多語系
        if (typeof (this.text) !== 'string') {
            // tslint:disable-next-line: variable-name
            this.text = _services_language_service__WEBPACK_IMPORTED_MODULE_0__["LanguageService"].GetTextFromObject(this.text);
        }
    }
}


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _upload_upload_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./upload/upload.component */ "StNR");
/* harmony import */ var _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home-page/home-page.component */ "F1my");
/* harmony import */ var _container_container_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./container/container.component */ "s7Ec");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");






const routes = [
    { path: '', component: _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_2__["HomePageComponent"], pathMatch: 'full' },
    {
        path: ':name',
        children: [
            { path: '', component: _container_container_component__WEBPACK_IMPORTED_MODULE_3__["ContainerComponent"], pathMatch: 'full' },
            { path: 'upload', component: _upload_upload_component__WEBPACK_IMPORTED_MODULE_1__["UploadComponent"] }
        ]
    },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "vxYK":
/*!**********************************************************!*\
  !*** ./src/app/sound-buttons/sound-buttons.component.ts ***!
  \**********************************************************/
/*! exports provided: SoundButtonsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SoundButtonsComponent", function() { return SoundButtonsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _services_audio_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../services/audio.service */ "jHbz");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");





function SoundButtonsComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u4F86\u6E90\u5F71\u7247\u9810\u89A7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SoundButtonsComponent_iframe_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "iframe", 5);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r1.youtubeEmbedLink, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeResourceUrl"]);
} }
function SoundButtonsComponent_div_3_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SoundButtonsComponent_div_3_button_4_Template_button_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const btn_r5 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r6.buttonClick($event, btn_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const btn_r5 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("grid-column", "auto/span " + ctx_r4.gridColumnLen(btn_r5.text));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", btn_r5.text, " ");
} }
function SoundButtonsComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SoundButtonsComponent_div_3_button_4_Template, 2, 3, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const buttonGroup_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](buttonGroup_r3.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", buttonGroup_r3.buttons);
} }
class SoundButtonsComponent {
    constructor(sanitizer, audioService) {
        this.sanitizer = sanitizer;
        this.audioService = audioService;
        this.buttonGroups = [];
        this.youtubeEmbedLink = '';
    }
    ngOnInit() {
        this.audioService.OnSourceChanged.subscribe((s) => this.changeYoutubeEmbed(s));
        if (this.audioService.lastSource) {
            this.changeYoutubeEmbed(this.audioService.lastSource);
        }
    }
    changeYoutubeEmbed(source) {
        if (source && (source === null || source === void 0 ? void 0 : source.videoId) && (source === null || source === void 0 ? void 0 : source.videoId) !== 'null') {
            const url = new URL('https://www.youtube.com/embed/' + source.videoId);
            url.searchParams.append('start', `${source.start}`);
            url.searchParams.append('end', `${source.end}`);
            // url.searchParams.append('autoplay', '1');
            this.youtubeEmbedLink = this.sanitizer.bypassSecurityTrustResourceUrl(url.toString());
        }
        else {
            this.youtubeEmbedLink = '';
        }
    }
    buttonClick($event, btn) {
        btn.click($event);
    }
    gridColumnLen(str) {
        let len = str.replace(/[^\x00-\xff]/g, "xx").length;
        len = Math.ceil(len / 2) + 5;
        len = len > 50 ? 50 : len;
        len = len < 10 ? 10 : len;
        return len;
    }
}
SoundButtonsComponent.ɵfac = function SoundButtonsComponent_Factory(t) { return new (t || SoundButtonsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_audio_service__WEBPACK_IMPORTED_MODULE_2__["AudioService"])); };
SoundButtonsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SoundButtonsComponent, selectors: [["app-sound-buttons"]], inputs: { buttonGroups: "buttonGroups" }, decls: 4, vars: 3, consts: [["class", "youtubeContainer mx-auto", "translate", "", 4, "ngIf"], ["title", "YouTube video player", "frameborder", "0", "allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture", "class", "youtubeContainer mx-auto", 3, "src", 4, "ngIf"], ["role", "main", 1, "container"], ["class", "card border-primary mb-3", 4, "ngFor", "ngForOf"], ["translate", "", 1, "youtubeContainer", "mx-auto"], ["title", "YouTube video player", "frameborder", "0", "allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture", 1, "youtubeContainer", "mx-auto", 3, "src"], [1, "card", "border-primary", "mb-3"], [1, "card-header"], [1, "card-body"], ["type", "button", "class", "btn btn-primary", 3, "gridColumn", "click", 4, "ngFor", "ngForOf"], ["type", "button", 1, "btn", "btn-primary", 3, "click"]], template: function SoundButtonsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SoundButtonsComponent_div_0_Template, 2, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SoundButtonsComponent_iframe_1_Template, 1, 1, "iframe", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SoundButtonsComponent_div_3_Template, 5, 2, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.youtubeEmbedLink);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.youtubeEmbedLink);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.buttonGroups);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateDirective"]], styles: [".container[_ngcontent-%COMP%] {\n  margin: 5px;\n  overflow-y: auto;\n  height: calc(100% - 34.75vh);\n}\n@media only screen and (max-width: 767px) {\n  .container[_ngcontent-%COMP%] {\n    margin-bottom: 4rem;\n  }\n}\n.btn[_ngcontent-%COMP%] {\n  cursor: pointer;\n  outline: none;\n  border-radius: 0.3rem;\n  border: none;\n  margin: 0.3em;\n}\n.btn[_ngcontent-%COMP%]:active {\n  background-color: var(--bs-primary);\n  transform: translateY(0.3em);\n}\n@media only screen and (min-width: 1023px) {\n  .card-body[_ngcontent-%COMP%] {\n    display: grid;\n    grid-auto-flow: row dense;\n    grid-template-columns: repeat(auto-fit, 1em);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NvdW5kLWJ1dHRvbnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSw0QkFBQTtBQURGO0FBR0U7RUFMRjtJQU1JLG1CQUFBO0VBQUY7QUFDRjtBQUdBO0VBQ0UsZUFBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FBQUY7QUFFRTtFQUNFLG1DQUFBO0VBQ0EsNEJBQUE7QUFBSjtBQUlBO0VBQ0U7SUFDRSxhQUFBO0lBQ0EseUJBQUE7SUFDQSw0Q0FBQTtFQURGO0FBQ0YiLCJmaWxlIjoic291bmQtYnV0dG9ucy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ3ZhcmlhYmxlcyc7XG5cbi5jb250YWluZXIge1xuICBtYXJnaW46IDVweDtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAzNC43NXZoKTtcblxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gICAgbWFyZ2luLWJvdHRvbTogJGZvb3Rlci1oZWlnaHQrMTtcbiAgfVxufVxuXG4uYnRuIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAuM3JlbTtcbiAgYm9yZGVyOiBub25lO1xuICBtYXJnaW46IDAuM2VtO1xuXG4gICY6YWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1icy1wcmltYXJ5KTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLjNlbSk7XG4gIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDIzcHgpIHtcbiAgLmNhcmQtYm9keSB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLWF1dG8tZmxvdzogcm93IGRlbnNlO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCAxZW0pO1xuICB9XG59XG4iXX0= */"] });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map