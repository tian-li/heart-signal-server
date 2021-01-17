(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+km0":
/*!***************************************************!*\
  !*** ./src/app/components/room/room.component.ts ***!
  \***************************************************/
/*! exports provided: RoomComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoomComponent", function() { return RoomComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _store_message__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/message */ "lKX+");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! uuid */ "4USb");
/* harmony import */ var _services_socket_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/socket.service */ "5U9e");
/* harmony import */ var _services_message_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/message.service */ "tZre");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/scrolling */ "vxfF");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
























const _c0 = ["scrollViewport"];
function RoomComponent_div_1_th_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u73A9\u5BB6\u540D");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RoomComponent_div_1_td_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r24.username, " ");
} }
function RoomComponent_div_1_th_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u8FDE\u63A5\u72B6\u6001");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RoomComponent_div_1_td_10_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "link");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RoomComponent_div_1_td_10_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "link_off");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RoomComponent_div_1_td_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RoomComponent_div_1_td_10_div_1_Template, 3, 0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RoomComponent_div_1_td_10_div_2_Template, 3, 0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", element_r25.connected);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !element_r25.connected);
} }
function RoomComponent_div_1_th_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u6D88\u606F\u72B6\u6001");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RoomComponent_div_1_td_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r28 = ctx.$implicit;
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r14.messageStatusDisplay(element_r28.messageStatus), " ");
} }
function RoomComponent_div_1_tr_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 34);
} }
function RoomComponent_div_1_tr_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 35);
} }
function RoomComponent_div_1_th_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u89C2\u4F17\u540D");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RoomComponent_div_1_td_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r30 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r30.username, " ");
} }
function RoomComponent_div_1_th_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u8FDE\u63A5\u72B6\u6001");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RoomComponent_div_1_td_25_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "link");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RoomComponent_div_1_td_25_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "link_off");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RoomComponent_div_1_td_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RoomComponent_div_1_td_25_div_1_Template, 3, 0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RoomComponent_div_1_td_25_div_2_Template, 3, 0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r31 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", element_r31.connected);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !element_r31.connected);
} }
function RoomComponent_div_1_tr_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 34);
} }
function RoomComponent_div_1_tr_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 35);
} }
function RoomComponent_div_1_mat_option_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r35 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", user_r35.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", user_r35.username, " ");
} }
function RoomComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u73A9\u5BB6\u5217\u8868");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "table", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](5, 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, RoomComponent_div_1_th_6_Template, 2, 0, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, RoomComponent_div_1_td_7_Template, 2, 1, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](8, 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, RoomComponent_div_1_th_9_Template, 2, 0, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, RoomComponent_div_1_td_10_Template, 3, 2, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](11, 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, RoomComponent_div_1_th_12_Template, 2, 0, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, RoomComponent_div_1_td_13_Template, 2, 1, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, RoomComponent_div_1_tr_14_Template, 1, 0, "tr", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, RoomComponent_div_1_tr_15_Template, 1, 0, "tr", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\u89C2\u4F17\u5217\u8868");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "table", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](20, 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, RoomComponent_div_1_th_21_Template, 2, 0, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, RoomComponent_div_1_td_22_Template, 2, 1, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](23, 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, RoomComponent_div_1_th_24_Template, 2, 0, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, RoomComponent_div_1_td_25_Template, 3, 2, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, RoomComponent_div_1_tr_26_Template, 1, 0, "tr", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, RoomComponent_div_1_tr_27_Template, 1, 0, "tr", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "\u83B7\u5F97\u989D\u5916\u77ED\u4FE1\u673A\u4F1A");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-select", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, RoomComponent_div_1_mat_option_33_Template, 2, 2, "mat-option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RoomComponent_div_1_Template_button_click_34_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37); const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r36.giveExtraMessage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " \u989D\u5916\u77ED\u4FE1 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx_r0.playersInRoom);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx_r0.playerDisplayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx_r0.playerDisplayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx_r0.observersInRoom);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx_r0.observersDisplayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx_r0.observersDisplayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r0.extraMessageUserControl);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.playersInRoom);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r0.extraMessageUserControl.value);
} }
function RoomComponent_span_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u6E38\u620F\u5DF2\u7ED3\u675F");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RoomComponent_span_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u5F53\u524D\u662F\u7B2C ", ctx_r2.currentRound, " \u8F6E\u77ED\u4FE1");
} }
function RoomComponent_span_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u5C1A\u672A\u5F00\u59CB\u77ED\u4FE1\u8F6E\u6B21");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RoomComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "menu");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-menu", null, 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RoomComponent_div_16_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r40); const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r39.checkOnline(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-icon", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "online_prediction");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " \u68C0\u67E5\u5728\u7EBF ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RoomComponent_div_16_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r40); const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r41.closeRoom(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-icon", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " \u5173\u95ED\u623F\u95F4\u5E76\u7ED3\u675F\u6E38\u620F ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r38);
} }
function RoomComponent_ng_container_20_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const index_r43 = ctx_r60.index;
    const message_r42 = ctx_r60.$implicit;
    const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u7B2C ", ctx_r49.messages[index_r43 - 1] == null ? null : ctx_r49.messages[index_r43 - 1].roundIndex, " \u8F6E\u77ED\u4FE1\u7ED3\u675F");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u7B2C ", message_r42.roundIndex, " \u8F6E\u77ED\u4FE1\u5F00\u59CB");
} }
function RoomComponent_ng_container_20_mat_icon_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " check ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RoomComponent_ng_container_20_mat_icon_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " warning ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RoomComponent_ng_container_20_ng_container_8_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u6536\u5230\u7684\u6D88\u606F");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RoomComponent_ng_container_20_ng_container_8_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const message_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u6211\u53D1\u7ED9 ", message_r42.toName, " \u7684\u6D88\u606F");
} }
function RoomComponent_ng_container_20_ng_container_8_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const message_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", message_r42.fromName, " \u53D1\u7ED9 ", message_r42.toName, "");
} }
function RoomComponent_ng_container_20_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RoomComponent_ng_container_20_ng_container_8_span_1_Template, 2, 0, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RoomComponent_ng_container_20_ng_container_8_span_2_Template, 2, 1, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, RoomComponent_ng_container_20_ng_container_8_span_3_Template, 2, 2, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const message_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", message_r42.toName === ctx_r52.user.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", message_r42.fromName === ctx_r52.user.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r52.user.userRole !== "player");
} }
function RoomComponent_ng_container_20_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u7CFB\u7EDF\u6D88\u606F");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function RoomComponent_ng_container_20_mat_card_subtitle_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const message_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u6D88\u606F\u8F6E\u6B21\uFF1A ", message_r42.roundIndex, "");
} }
function RoomComponent_ng_container_20_button_15_Template(rf, ctx) { if (rf & 1) {
    const _r70 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RoomComponent_ng_container_20_button_15_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r70); const message_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r68.approve(message_r42); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u6279\u51C6 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RoomComponent_ng_container_20_button_16_Template(rf, ctx) { if (rf & 1) {
    const _r73 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RoomComponent_ng_container_20_button_16_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r73); const message_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r71.disapprove(message_r42); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u62D2\u7EDD ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RoomComponent_ng_container_20_button_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u5DF2\u6279\u51C6 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", true);
} }
function RoomComponent_ng_container_20_button_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u5DF2\u62D2\u7EDD ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", true);
} }
function RoomComponent_ng_container_20_button_19_Template(rf, ctx) { if (rf & 1) {
    const _r76 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RoomComponent_ng_container_20_button_19_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r76); const message_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r74.edit(message_r42); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u91CD\u65B0\u7F16\u8F91 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r59.canSendPlayerMessage);
} }
const _c1 = function (a0, a1) { return { "sent-message": a0, "to-me-message": a1 }; };
const _c2 = function (a0) { return { "system-message": a0 }; };
function RoomComponent_ng_container_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RoomComponent_ng_container_20_ng_container_1_Template, 6, 2, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, RoomComponent_ng_container_20_mat_icon_6_Template, 2, 0, "mat-icon", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, RoomComponent_ng_container_20_mat_icon_7_Template, 2, 0, "mat-icon", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, RoomComponent_ng_container_20_ng_container_8_Template, 4, 3, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, RoomComponent_ng_container_20_ng_container_9_Template, 3, 0, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, RoomComponent_ng_container_20_mat_card_subtitle_10_Template, 3, 1, "mat-card-subtitle", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-card-content", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-card-actions", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, RoomComponent_ng_container_20_button_15_Template, 2, 0, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, RoomComponent_ng_container_20_button_16_Template, 2, 0, "button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, RoomComponent_ng_container_20_button_17_Template, 2, 1, "button", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, RoomComponent_ng_container_20_button_18_Template, 2, 1, "button", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, RoomComponent_ng_container_20_button_19_Template, 2, 1, "button", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const message_r42 = ctx.$implicit;
    const index_r43 = ctx.index;
    const first_r45 = ctx.first;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.user.userRole !== "host" && !first_r45 && message_r42.roundIndex !== (ctx_r6.messages[index_r43 - 1] == null ? null : ctx_r6.messages[index_r43 - 1].roundIndex));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](14, _c1, message_r42.fromName === ctx_r6.user.username, message_r42.toName === ctx_r6.user.username));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](17, _c2, message_r42.type === "systemMessage"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.user.username === message_r42.fromName && message_r42.approvalStatus === "approved");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.user.username === message_r42.fromName && message_r42.approvalStatus === "disapproved");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", message_r42.type === "playerMessage");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", message_r42.type === "systemMessage");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", message_r42.type === "playerMessage");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", message_r42.content, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.user.userRole === "host" && message_r42.approvalStatus === "pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.user.userRole === "host" && message_r42.approvalStatus === "pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.user.userRole === "host" && message_r42.approvalStatus === "approved");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.user.userRole === "host" && message_r42.approvalStatus === "disapproved");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.user.username === message_r42.fromName && message_r42.approvalStatus === "disapproved");
} }
function RoomComponent_ng_container_22_mat_option_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r79 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", user_r79.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", user_r79.username, " ");
} }
function RoomComponent_ng_container_22_button_10_Template(rf, ctx) { if (rf & 1) {
    const _r81 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RoomComponent_ng_container_22_button_10_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r81); const ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r80.sendMessage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "send");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r78.isFormValid || !ctx_r78.canSendPlayerMessage);
} }
function RoomComponent_ng_container_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u53D1\u9001\u5BF9\u8C61");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-select", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, RoomComponent_ng_container_22_mat_option_5_Template, 2, 2, "mat-option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-form-field", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u6D88\u606F");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "textarea", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, RoomComponent_ng_container_22_button_10_Template, 3, 1, "button", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r7.toUserControl);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r7.otherPlayers);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r7.messageFormControl);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.user.userRole === "player");
} }
function RoomComponent_div_23_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r85 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RoomComponent_div_23_button_3_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r85); const ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r84.startNewRound(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u5F00\u59CB\u4E0B\u4E00\u8F6E\u77ED\u4FE1 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RoomComponent_div_23_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r87 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RoomComponent_div_23_button_4_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r87); const ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r86.endCurrentRound(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u7ED3\u675F\u5F53\u524D\u8F6E\u6B21 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r83.hasPendingApprovalMessage);
} }
function RoomComponent_div_23_Template(rf, ctx) { if (rf & 1) {
    const _r89 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RoomComponent_div_23_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r89); const ctx_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r88.publish(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " \u516C\u5E03\u6D88\u606F ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, RoomComponent_div_23_button_3_Template, 2, 0, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, RoomComponent_div_23_button_4_Template, 2, 1, "button", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r8.canSendPlayerMessage);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r8.canSendPlayerMessage);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.canSendPlayerMessage);
} }
class RoomComponent {
    constructor(socketService, messageService, store) {
        this.socketService = socketService;
        this.messageService = messageService;
        this.store = store;
        this.messages = [];
        this.usersInRoom = [];
        this.playersInRoom = [];
        this.observersInRoom = [];
        this.otherPlayers = [];
        this.playerDisplayedColumns = ['username', 'connected', 'messageStatus'];
        this.observersDisplayedColumns = ['username', 'connected'];
        this.roomClosed = false;
        this.userRoleDisplay = '';
        this.usersNotSendMessage = [];
    }
    useMockData() {
        this.user = {
            username: '1',
            userRole: 'host',
            roomNumber: '1',
            id: 'M8bmlezxCyL6z5uSAAAf',
            connected: true,
        };
        this.messages = [
            {
                id: '09c8d442-ba02-4f9a-8f47-c7ca43b10d87',
                fromName: '1',
                toName: '2',
                content: 'hi 2',
                timestamp: 1605585624931,
                published: false,
                approvalStatus: 'disapproved',
                type: 'playerMessage',
                roundIndex: 1,
            },
            {
                id: '09c8d442-ba02-4f9a-8f47-c7ca43b10d87',
                fromName: '1',
                toName: '2',
                content: 'hi 2',
                timestamp: 1605585624931,
                published: false,
                approvalStatus: 'approved',
                type: 'playerMessage',
                roundIndex: 2,
            },
            {
                id: 'vdf234143234',
                fromName: '1',
                toName: '2',
                content: 'hi 2',
                timestamp: 1605585624931,
                published: false,
                approvalStatus: 'approved',
                type: 'playerMessage',
                roundIndex: 3,
            },
            {
                id: 'asd123123',
                content: '阿里看得见我缺个人北纬科技房东不哦IP参与ISO阿哥，千万人委屈，恩情请问，去恩情，问去，问去，问去，问，且，前二废弃物的请问，，圈请问去',
                timestamp: 1605585624931,
                approvalStatus: 'pending',
                type: 'systemMessage',
                actionRequired: true,
            },
        ];
        this.observersInRoom = [
            {
                id: 'toId',
                username: '目标',
                userRole: 'observer',
                roomNumber: '123',
                connected: true,
            },
            {
                id: 'toId',
                username: '目标',
                userRole: 'observer',
                roomNumber: '123',
                connected: true,
            },
            {
                id: 'toId',
                username: '目标',
                userRole: 'observer',
                roomNumber: '123',
                connected: true,
            },
            {
                id: 'toId',
                username: '目标',
                userRole: 'observer',
                roomNumber: '123',
                connected: true,
            },
            {
                id: 'toId',
                username: '目标',
                userRole: 'observer',
                roomNumber: '123',
                connected: true,
            },
            {
                id: 'toId',
                username: '目标',
                userRole: 'observer',
                roomNumber: '123',
                connected: true,
            },
            {
                id: 'toId',
                username: '目标',
                userRole: 'observer',
                roomNumber: '123',
                connected: true,
            },
            {
                id: 'toId',
                username: '目标',
                userRole: 'observer',
                roomNumber: '123',
                connected: true,
            },
            {
                id: 'toId',
                username: '目标',
                userRole: 'observer',
                roomNumber: '123',
                connected: true,
            },
            {
                id: 'toId',
                username: '目标',
                userRole: 'observer',
                roomNumber: '123',
                connected: true,
            },
            {
                id: 'toId',
                username: '目标',
                userRole: 'observer',
                roomNumber: '123',
                connected: true,
            },
            {
                id: 'toId',
                username: '目标',
                userRole: 'observer',
                roomNumber: '123',
                connected: true,
            },
            {
                id: 'toId',
                username: '目标',
                userRole: 'observer',
                roomNumber: '123',
                connected: true,
            },
            {
                id: 'toId',
                username: '目标',
                userRole: 'observer',
                roomNumber: '123',
                connected: true,
            },
            {
                id: 'toId',
                username: '目标',
                userRole: 'observer',
                roomNumber: '123',
                connected: true,
            },
            {
                id: 'toId',
                username: '目标',
                userRole: 'observer',
                roomNumber: '123',
                connected: true,
            },
            {
                id: 'toId',
                username: '目标',
                userRole: 'observer',
                roomNumber: '123',
                connected: true,
            },
            {
                id: 'toId',
                username: '目标',
                userRole: 'observer',
                roomNumber: '123',
                connected: true,
            },
            {
                id: 'toId',
                username: '目标',
                userRole: 'observer',
                roomNumber: '123',
                connected: true,
            },
            {
                id: 'toId',
                username: '目标',
                userRole: 'observer',
                roomNumber: '123',
                connected: true,
            },
        ];
        this.playersInRoom = this.observersInRoom;
    }
    useRealData() {
        this.user = this.socketService.user;
        if (this.user.userRole === 'player') {
            this.userRoleDisplay = '玩家';
        }
        if (this.user.userRole === 'observer') {
            this.userRoleDisplay = '观众';
        }
        this.roomNumber = this.socketService.getRoomNumber();
        this.socketService.currentRound$.subscribe(currentRound => {
            this.currentRound = currentRound;
        });
        this.socketService.canSendPlayerMessage$.subscribe(canSendPlayerMessage => {
            this.canSendPlayerMessage = canSendPlayerMessage;
        });
        this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_store_message__WEBPACK_IMPORTED_MODULE_3__["selectAllMessagesByTime"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(messages => {
            if (this.user.userRole === 'host') {
                return messages;
            }
            else {
                return messages.filter(message => message.type === 'playerMessage');
            }
        })).subscribe((messages) => {
            this.messages = messages;
            this.hasPendingApprovalMessage = this.messages.some(m => m.approvalStatus === 'pending');
            if (this.canSendPlayerMessage) {
                this.findUsersNotSendMessage();
            }
        });
        this.socketService.usersInRoom$.subscribe((users) => {
            this.usersInRoom = users;
            this.observersInRoom = users.filter(user => user.userRole === 'observer');
            this.playersInRoom = users.filter(user => user.userRole === 'player');
            this.otherPlayers = this.playersInRoom.filter(user => user.username !== this.user.username);
        });
    }
    findUsersNotSendMessage() {
        this.usersNotSendMessage = [];
        const usersSentMessage = this.messages.filter((m) => {
            return m.type === 'playerMessage' && m.roundIndex === this.currentRound;
        }).map((m) => {
            return m.fromName;
        });
        this.playersInRoom.forEach(p => {
            if (!usersSentMessage.find(u => u === p.username)) {
                this.usersNotSendMessage.push(p.username);
            }
        });
    }
    ngOnInit() {
        this.socket = this.socketService.socket;
        // this.useMockData();
        this.useRealData();
        this.messageFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]();
        this.toUserControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]();
        this.extraMessageUserControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]();
        Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])([
            this.messageFormControl.valueChanges,
            this.toUserControl.valueChanges
        ]).subscribe(([message, toId]) => {
            this.isFormValid = !!message && !!toId;
        });
        this.socket.on('roomClosed', () => {
            this.roomClosed = true;
        });
    }
    disapprove(message) {
        if (message.type === 'playerMessage') {
            this.messageService.hostDisapprovePlayerMessage(Object.assign(Object.assign({}, message), { approvalStatus: 'disapproved' }));
        }
        else {
            this.messageService.disapproveAttemptToJoin(Object.assign(Object.assign({}, message), { approvalStatus: 'disapproved' }));
        }
    }
    approve(message) {
        if (message.type === 'playerMessage') {
            this.messageService.hostApprovePlayerMessage(Object.assign(Object.assign({}, message), { approvalStatus: 'approved' }));
        }
        else {
            this.messageService.approveAttemptToJoin(Object.assign(Object.assign({}, message), { approvalStatus: 'approved' }));
        }
    }
    publish() {
        this.messageService.hostPublishAllMessages();
    }
    edit(message) {
        this.messageFormControl.setValue(message.content);
        this.toUserControl.setValue(message.toName);
        this.disapprovedMessageId = message.id;
        // this.socketService.canSendPlayerMessage$.next(true);
    }
    sendMessage() {
        const toUser = this.usersInRoom.find(u => u.username === this.toUserControl.value);
        const message = {
            id: this.disapprovedMessageId || Object(uuid__WEBPACK_IMPORTED_MODULE_6__["v4"])(),
            fromName: this.user.username,
            toName: toUser.username,
            content: this.messageFormControl.value.trim(),
            timestamp: new Date().valueOf(),
            published: false,
            approvalStatus: 'pending',
            type: 'playerMessage',
            roundIndex: this.currentRound
        };
        this.messageService.playerSendMessageToHost(message);
        this.socketService.canSendPlayerMessage$.next(false);
        this.messageFormControl.reset();
        this.toUserControl.reset();
        this.disapprovedMessageId = undefined;
    }
    startNewRound() {
        this.messageService.startNewRound();
    }
    endCurrentRound() {
        this.messageService.endCurrentRound();
    }
    trackByFn(index, item) {
        return item.id;
    }
    checkOnline() {
        this.socketService.socket.emit('sendAlert', ({ message: '检查在线' }));
    }
    closeRoom() {
        this.socketService.socket.emit('closeRoom');
    }
    messageStatusDisplay(messageStatus) {
        switch (messageStatus) {
            case 'notStarted':
                return '未开始';
            case 'waiting':
                return '未发送';
            case 'sent':
                return '待审核';
            case 'approved':
                return '已通过';
            case 'disapproved':
                return '已拒绝';
        }
    }
    giveExtraMessage() {
        this.socketService.socket.emit('extraMessage', {
            username: this.extraMessageUserControl.value,
            roomNumber: this.roomNumber
        });
    }
}
RoomComponent.ɵfac = function RoomComponent_Factory(t) { return new (t || RoomComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_socket_service__WEBPACK_IMPORTED_MODULE_7__["SocketService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_message_service__WEBPACK_IMPORTED_MODULE_8__["MessageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"])); };
RoomComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RoomComponent, selectors: [["app-room"]], viewQuery: function RoomComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.scrollViewport = _t.first);
    } }, decls: 24, vars: 13, consts: [[1, "container"], ["class", "user-list", 4, "ngIf"], [1, "wrapper"], [1, "header"], [1, "title"], [1, "room-status"], ["style", "color: red;margin-left: 10px;font-weight: bold;", 4, "ngIf"], [4, "ngIf"], [2, "min-height", "18px"], ["class", "menu", 4, "ngIf"], [1, "msg-list"], ["itemSize", "1", 1, "example-viewport"], ["scrollViewport", ""], [4, "cdkVirtualFor", "cdkVirtualForOf", "cdkVirtualForTrackBy"], [1, "footer"], ["class", "footer-actions", 4, "ngIf"], [1, "user-list"], [1, "table-container"], ["mat-table", "", 3, "dataSource"], ["matColumnDef", "username"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "connected"], ["matColumnDef", "messageStatus"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [1, "extra-message"], [3, "formControl"], [3, "value", 4, "ngFor", "ngForOf"], ["mat-raised-button", "", "color", "primary", 3, "disabled", "click"], ["mat-header-cell", ""], ["mat-cell", ""], [2, "color", "green"], [2, "color", "red"], ["mat-header-row", ""], ["mat-row", ""], [3, "value"], [2, "color", "red", "margin-left", "10px", "font-weight", "bold"], [1, "menu"], ["mat-icon-button", "", "color", "accent", 3, "matMenuTriggerFor"], ["menu", "matMenu"], ["mat-menu-item", "", 3, "click"], ["color", "primary"], ["color", "warn"], [1, "item-container", 3, "ngClass"], [1, "message", "mat-elevation-z5", 3, "ngClass"], ["style", "color: green", 4, "ngIf"], ["color", "warn", 4, "ngIf"], [1, "content"], [1, "host-action"], ["mat-raised-button", "", "color", "primary", 3, "click", 4, "ngIf"], ["mat-raised-button", "", "color", "warn", 3, "click", 4, "ngIf"], ["mat-raised-button", "", 3, "disabled", 4, "ngIf"], ["mat-raised-button", "", "color", "primary", 3, "disabled", "click", 4, "ngIf"], [1, "divider-text"], ["mat-raised-button", "", "color", "primary", 3, "click"], ["mat-raised-button", "", "color", "warn", 3, "click"], ["mat-raised-button", "", 3, "disabled"], ["appearance", "outline", 1, "amount"], ["matInput", "", "rows", "3", 3, "formControl"], ["class", "send-button", "mat-raised-button", "", "matSuffix", "", "mat-icon-button", "", "color", "primary", 3, "disabled", "click", 4, "ngIf"], ["mat-raised-button", "", "matSuffix", "", "mat-icon-button", "", "color", "primary", 1, "send-button", 3, "disabled", "click"], [1, "footer-actions"], ["mat-raised-button", "", "color", "accent", 3, "disabled", "click"], ["mat-raised-button", "", "color", "warn", 3, "disabled", "click", 4, "ngIf"], ["mat-raised-button", "", "color", "warn", 3, "disabled", "click"]], template: function RoomComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RoomComponent_div_1_Template, 36, 9, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, RoomComponent_span_9_Template, 2, 0, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, RoomComponent_span_11_Template, 2, 1, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, RoomComponent_span_12_Template, 2, 0, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, RoomComponent_div_16_Template, 15, 1, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "cdk-virtual-scroll-viewport", 11, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, RoomComponent_ng_container_20_Template, 20, 19, "ng-container", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, RoomComponent_ng_container_22_Template, 11, 4, "ng-container", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, RoomComponent_div_23_Template, 5, 3, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.user.userRole === "host");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx.userRoleDisplay, "", ctx.user.userRole === "host" ? "\u4E3B\u6301\u4EBA" : ctx.user.username, "\uFF0C\u6B22\u8FCE\u6765\u5230\u5FC3\u52A8\u7684\u4FE1\u53F7 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \u623F\u95F4\u540D\uFF1A", ctx.roomNumber, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.roomClosed);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentRound > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentRound === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.canSendPlayerMessage ? "\u73A9\u5BB6\u4EEC\u6B63\u5728\u53D1\u9001\u77ED\u4FE1..." : " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.user.userRole === "host");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cdkVirtualForOf", ctx.messages)("cdkVirtualForTrackBy", ctx.trackByFn);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.user.userRole === "player");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.user.userRole === "host");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_10__["CdkVirtualScrollViewport"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_10__["CdkFixedSizeVirtualScroll"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_10__["CdkVirtualForOf"], _angular_material_table__WEBPACK_IMPORTED_MODULE_11__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_11__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_11__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_11__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_11__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_11__["MatRowDef"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_13__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControlDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButton"], _angular_material_table__WEBPACK_IMPORTED_MODULE_11__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_11__["MatCell"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIcon"], _angular_material_table__WEBPACK_IMPORTED_MODULE_11__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_11__["MatRow"], _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["MatOption"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__["MatMenuTrigger"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__["MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__["MatMenuItem"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_18__["MatDivider"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgClass"], _angular_material_card__WEBPACK_IMPORTED_MODULE_19__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_19__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_19__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_19__["MatCardContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_19__["MatCardActions"], _angular_material_card__WEBPACK_IMPORTED_MODULE_19__["MatCardSubtitle"], _angular_material_input__WEBPACK_IMPORTED_MODULE_20__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatSuffix"]], styles: ["div[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.container[_ngcontent-%COMP%] {\n  flex-direction: row;\n  height: 100%;\n  width: 100%;\n  position: absolute;\n  padding: 1rem;\n  box-sizing: border-box;\n}\n\n.wrapper[_ngcontent-%COMP%] {\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n  box-sizing: border-box;\n}\n\n.header[_ngcontent-%COMP%] {\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n}\n\n.header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n}\n\n.header[_ngcontent-%COMP%]   .room-status[_ngcontent-%COMP%] {\n  opacity: 0.8;\n  width: 100%;\n  font-size: 0.8rem;\n  justify-content: center;\n}\n\n.header[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  top: 0;\n}\n\n.table-container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 260px;\n  overflow: auto;\n}\n\n.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.user-list[_ngcontent-%COMP%] {\n  min-width: 300px;\n  justify-content: space-evenly;\n  margin-right: 1rem;\n  flex-direction: column;\n}\n\n.user-list[_ngcontent-%COMP%]   .extra-message[_ngcontent-%COMP%] {\n  justify-content: space-between;\n}\n\n.msg-list[_ngcontent-%COMP%] {\n  margin: 1rem 0;\n  flex-grow: 1;\n  justify-content: center;\n}\n\n.msg-list[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%] {\n  width: 65%;\n}\n\n.msg-list[_ngcontent-%COMP%]   .divider-text[_ngcontent-%COMP%] {\n  justify-content: center;\n  font-size: 0.8rem;\n  opacity: 0.7;\n}\n\n.msg-list[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%] {\n  justify-content: center;\n}\n\n.msg-list[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%] {\n  font-size: inherit;\n}\n\n.msg-list[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  word-wrap: break-word;\n}\n\n.msg-list[_ngcontent-%COMP%]   mat-card-actions[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n  display: flex;\n}\n\n.msg-list[_ngcontent-%COMP%]   mat-card-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin: 0 0.5rem;\n}\n\n.example-viewport[_ngcontent-%COMP%] {\n  min-height: 100%;\n  width: 100%;\n  border: 1px solid black;\n}\n\n.item-container[_ngcontent-%COMP%] {\n  justify-content: center;\n  margin: 1rem;\n}\n\n.item-container[_ngcontent-%COMP%]   .divider[_ngcontent-%COMP%] {\n  justify-content: center;\n  border-bottom: 1px solid black;\n  margin-bottom: 1rem;\n}\n\n.system-message[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.1);\n}\n\n.sent-message[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n}\n\n.sent-message[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%] {\n  background: #a9e87a;\n}\n\n.to-me-message[_ngcontent-%COMP%] {\n  justify-content: flex-start;\n}\n\n.footer[_ngcontent-%COMP%] {\n  flex-direction: column;\n  align-items: center;\n}\n\n.footer[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  width: 80%;\n}\n\ntextarea[_ngcontent-%COMP%] {\n  resize: none;\n}\n\n.footer-actions[_ngcontent-%COMP%] {\n  justify-content: space-between;\n  width: 100%;\n}\n\n.float-button[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 5rem;\n  right: 2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxyb29tLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxzQkFBQTtFQUNBLFlBQUE7RUFFQSxXQUFBO0VBQ0Esc0JBQUE7QUFBRjs7QUFHQTtFQUNFLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBQUY7O0FBRUU7RUFDRSxpQkFBQTtBQUFKOztBQUdFO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0FBREo7O0FBSUU7RUFDRSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0FBRko7O0FBTUE7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7QUFIRjs7QUFLRTtFQUNFLFdBQUE7QUFISjs7QUFPQTtFQUNFLGdCQUFBO0VBQ0EsNkJBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0FBSkY7O0FBTUU7RUFDRSw4QkFBQTtBQUpKOztBQVFBO0VBQ0UsY0FBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtBQUxGOztBQU9FO0VBQ0UsVUFBQTtBQUxKOztBQVFFO0VBQ0UsdUJBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUFOSjs7QUFTRTtFQUNFLHVCQUFBO0FBUEo7O0FBVUU7RUFDRSxrQkFBQTtBQVJKOztBQVVJO0VBQ0UscUJBQUE7QUFSTjs7QUFZRTtFQUNFLHlCQUFBO0VBQ0EsYUFBQTtBQVZKOztBQVlJO0VBQ0UsZ0JBQUE7QUFWTjs7QUFlQTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0FBWkY7O0FBZUE7RUFDRSx1QkFBQTtFQUNBLFlBQUE7QUFaRjs7QUFjRTtFQUNFLHVCQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQVpKOztBQWdCQTtFQUNFLDhCQUFBO0FBYkY7O0FBZ0JBO0VBQ0UseUJBQUE7QUFiRjs7QUFlRTtFQUNFLG1CQUFBO0FBYko7O0FBaUJBO0VBQ0UsMkJBQUE7QUFkRjs7QUFpQkE7RUFDRSxzQkFBQTtFQUNBLG1CQUFBO0FBZEY7O0FBZ0JFO0VBQ0UsVUFBQTtBQWRKOztBQWtCQTtFQUNFLFlBQUE7QUFmRjs7QUFrQkE7RUFDRSw4QkFBQTtFQUVBLFdBQUE7QUFoQkY7O0FBbUJBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtBQWhCRiIsImZpbGUiOiJyb29tLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcGFkZGluZzogMXJlbTtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG4ud3JhcHBlciB7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBoZWlnaHQ6IDEwMCU7XHJcblxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbi5oZWFkZXIge1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gIC50aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICB9XHJcblxyXG4gIC5yb29tLXN0YXR1cyB7XHJcbiAgICBvcGFjaXR5OiAwLjg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAubWVudSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gIH1cclxufVxyXG5cclxuLnRhYmxlLWNvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAyNjBweDtcclxuICBvdmVyZmxvdzogYXV0bztcclxuXHJcbiAgdGFibGUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG59XHJcblxyXG4udXNlci1saXN0IHtcclxuICBtaW4td2lkdGg6IDMwMHB4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gIG1hcmdpbi1yaWdodDogMXJlbTtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuICAuZXh0cmEtbWVzc2FnZSB7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgfVxyXG59XHJcblxyXG4ubXNnLWxpc3Qge1xyXG4gIG1hcmdpbjogMXJlbSAwO1xyXG4gIGZsZXgtZ3JvdzogMTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgLm1lc3NhZ2Uge1xyXG4gICAgd2lkdGg6IDY1JTtcclxuICB9XHJcblxyXG4gIC5kaXZpZGVyLXRleHQge1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICAgIG9wYWNpdHk6IDAuNztcclxuICB9XHJcblxyXG4gIG1hdC1jYXJkLWhlYWRlciB7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIG1hdC1jYXJkLWNvbnRlbnQge1xyXG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xyXG5cclxuICAgIHAge1xyXG4gICAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBtYXQtY2FyZC1hY3Rpb25zIHtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG5cclxuICAgIGJ1dHRvbiB7XHJcbiAgICAgIG1hcmdpbjogMCAwLjVyZW07XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uZXhhbXBsZS12aWV3cG9ydCB7XHJcbiAgbWluLWhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxufVxyXG5cclxuLml0ZW0tY29udGFpbmVyIHtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBtYXJnaW46IDFyZW07XHJcblxyXG4gIC5kaXZpZGVyIHtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICB9XHJcbn1cclxuXHJcbi5zeXN0ZW0tbWVzc2FnZSB7XHJcbiAgYmFja2dyb3VuZDogcmdiKDAgMCAwIC8gMTAlKTs7XHJcbn1cclxuXHJcbi5zZW50LW1lc3NhZ2Uge1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcblxyXG4gIG1hdC1jYXJkIHtcclxuICAgIGJhY2tncm91bmQ6ICNhOWU4N2E7XHJcbiAgfVxyXG59XHJcblxyXG4udG8tbWUtbWVzc2FnZSB7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG59XHJcblxyXG4uZm9vdGVyIHtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gIG1hdC1mb3JtLWZpZWxkIHtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgfVxyXG59XHJcblxyXG50ZXh0YXJlYSB7XHJcbiAgcmVzaXplOiBub25lO1xyXG59XHJcblxyXG4uZm9vdGVyLWFjdGlvbnMge1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAvL21hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5mbG9hdC1idXR0b24ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDVyZW07XHJcbiAgcmlnaHQ6IDJyZW07XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RoomComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-room',
                templateUrl: './room.component.html',
                styleUrls: ['./room.component.scss']
            }]
    }], function () { return [{ type: _services_socket_service__WEBPACK_IMPORTED_MODULE_7__["SocketService"] }, { type: _services_message_service__WEBPACK_IMPORTED_MODULE_8__["MessageService"] }, { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"] }]; }, { scrollViewport: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['scrollViewport']
        }] }); })();


/***/ }),

/***/ "/Sl2":
/*!*********************************************************!*\
  !*** ./src/app/components/landing/landing.component.ts ***!
  \*********************************************************/
/*! exports provided: LandingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingComponent", function() { return LandingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _read_me_read_me_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../read-me/read-me.component */ "SfgH");
/* harmony import */ var _shared_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/utils */ "9uVP");
/* harmony import */ var _services_socket_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/socket.service */ "5U9e");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/progress-bar */ "bv9b");
















function LandingComponent_mat_error_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u5FC5\u586B");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LandingComponent_mat_option_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const userRole_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", userRole_r6.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", userRole_r6.display, " ");
} }
function LandingComponent_mat_error_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u5FC5\u586B");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LandingComponent_mat_form_field_26_mat_error_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u5FC5\u586B");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LandingComponent_mat_form_field_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u540D\u79F0\uFF08\u8BF7\u4F7F\u7528\u5FAE\u4FE1\u6635\u79F0\uFF09");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, LandingComponent_mat_form_field_26_mat_error_4_Template, 2, 0, "mat-error", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.form.controls["username"].hasError("required"));
} }
function LandingComponent_button_28_mat_progress_bar_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-progress-bar", 12);
} }
function LandingComponent_button_28_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingComponent_button_28_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.joinRoom(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, LandingComponent_button_28_mat_progress_bar_2_Template, 1, 0, "mat-progress-bar", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r4.form.invalid || ctx_r4.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r4.loading ? "\u8BF7\u7A0D\u5019..." : "\u52A0\u5165\u623F\u95F4", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.loading);
} }
function LandingComponent_button_29_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingComponent_button_29_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.createRoom(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u521B\u5EFA\u623F\u95F4 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r5.form.invalid);
} }
class LandingComponent {
    constructor(socketService, formBuilder, dialog) {
        this.socketService = socketService;
        this.formBuilder = formBuilder;
        this.dialog = dialog;
        this.title = 'heart-signal-client';
        this.loading = false;
        this.userTypes = [
            { value: 'player', display: '玩家' },
            { value: 'observer', display: '观众' },
            { value: 'host', display: '主持人' },
        ];
    }
    ngOnInit() {
        const hasReadNotice = localStorage.getItem('hasReadNotice');
        if (!hasReadNotice) {
            this.dialog.open(_read_me_read_me_component__WEBPACK_IMPORTED_MODULE_2__["ReadMeComponent"], {
                disableClose: true,
            });
        }
        this.form = this.formBuilder.group({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            roomNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            userRole: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
        });
        const localStorageUser = Object(_shared_utils__WEBPACK_IMPORTED_MODULE_3__["getUserFromLocalStorage"])();
        if (!!localStorageUser) {
            this.isHost = localStorageUser.userRole === 'host';
            this.isPlayer = localStorageUser.userRole === 'player';
            this.isObserver = localStorageUser.userRole === 'observer';
            this.form.get('username').setValue(localStorageUser.username);
            this.form.get('userRole').setValue(localStorageUser.userRole);
            this.form.get('roomNumber').setValue(localStorageUser.roomNumber);
        }
        this.form.get('userRole').valueChanges.subscribe(selectedRole => {
            this.isHost = selectedRole === 'host';
            this.isPlayer = selectedRole === 'player';
            this.isObserver = selectedRole === 'observer';
            if (!this.isHost) {
                this.form.get('username').reset();
            }
            else {
                this.form.get('username').setValue('other player');
            }
        });
        this.socketService.socket.on('approveAttemptToJoin', () => {
            this.loading = false;
        });
        this.socketService.socket.on('alert', () => {
            this.loading = false;
        });
        this.socketService.socket.on('disapproveAttemptToJoin', () => {
            this.loading = false;
        });
    }
    joinRoom() {
        this.loading = true;
        this.socketService.attemptToJoin({
            username: this.formValue.username.trim(),
            userRole: this.formValue.userRole,
            roomNumber: this.formValue.roomNumber.trim(),
        });
    }
    createRoom() {
        this.socketService.createRoom({
            username: this.formValue.username.trim(),
            roomNumber: this.formValue.roomNumber.trim(),
        });
    }
    get formValue() {
        return this.form.value;
    }
}
LandingComponent.ɵfac = function LandingComponent_Factory(t) { return new (t || LandingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_socket_service__WEBPACK_IMPORTED_MODULE_4__["SocketService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"])); };
LandingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LandingComponent, selectors: [["app-landing"]], decls: 30, vars: 7, consts: [[1, "wrapper"], ["href", "https://github.com/tian-li/heart-signal-client", "target", "_blank"], [3, "formGroup"], ["matInput", "", "formControlName", "roomNumber"], [4, "ngIf"], ["formControlName", "userRole"], [3, "value", 4, "ngFor", "ngForOf"], ["mat-raised-button", "", "color", "primary", 3, "disabled", "click", 4, "ngIf"], [3, "value"], ["matInput", "", "formControlName", "username"], ["mat-raised-button", "", "color", "primary", 3, "disabled", "click"], ["mode", "indeterminate", 4, "ngIf"], ["mode", "indeterminate"]], template: function LandingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " \u6B22\u8FCE\u6765\u5230\u5FC3\u52A8\u7684\u4FE1\u53F7 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Made with \u2764\uFE0F by \u6298\u767D");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Coded with \u2615\uFE0F by\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " BoBoTea");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\u623F\u95F4\u540D");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, LandingComponent_mat_error_19_Template, 2, 0, "mat-error", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "\u52A0\u5165\u8EAB\u4EFD");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-select", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, LandingComponent_mat_option_24_Template, 2, 2, "mat-option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, LandingComponent_mat_error_25_Template, 2, 0, "mat-error", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, LandingComponent_mat_form_field_26_Template, 5, 1, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-card-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, LandingComponent_button_28_Template, 3, 3, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, LandingComponent_button_29_Template, 2, 1, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.controls["roomNumber"].hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.userTypes);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.controls["userRole"].hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isPlayer || ctx.isObserver);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isHost);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isHost);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardActions"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatError"], _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatOption"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButton"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_13__["MatProgressBar"]], styles: ["div[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.wrapper[_ngcontent-%COMP%] {\n  flex-direction: column;\n  height: 100%;\n  justify-content: center;\n  margin: 0 1rem;\n}\n\n.header[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  justify-content: center;\n  margin-bottom: 3rem;\n}\n\nmat-card-header[_ngcontent-%COMP%] {\n  justify-content: center;\n}\n\nmat-card-subtitle[_ngcontent-%COMP%], mat-card-title[_ngcontent-%COMP%] {\n  justify-content: center;\n  display: flex;\n}\n\nmat-card-subtitle[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], mat-card-title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: inherit;\n}\n\nmat-card-content[_ngcontent-%COMP%] {\n  font-size: inherit;\n}\n\nmat-card-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n}\n\nmat-card-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   mat-progress-bar[_ngcontent-%COMP%] {\n  -webkit-clip-path: border-box;\n          clip-path: border-box;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  border-bottom-left-radius: 4px;\n  border-bottom-right-radius: 4px;\n}\n\nform[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxsYW5kaW5nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtBQUNGOztBQUVBO0VBQ0Usc0JBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsdUJBQUE7QUFDRjs7QUFFQTtFQUNFLHVCQUFBO0VBQ0EsYUFBQTtBQUNGOztBQUNFO0VBQ0UscUJBQUE7RUFDQSxjQUFBO0FBQ0o7O0FBR0E7RUFDRSxrQkFBQTtBQUFGOztBQUdBO0VBQ0UsYUFBQTtFQUNBLHlCQUFBO0FBQUY7O0FBR0k7RUFDRSw2QkFBQTtVQUFBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLDhCQUFBO0VBQ0EsK0JBQUE7QUFETjs7QUFNQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtBQUhGIiwiZmlsZSI6ImxhbmRpbmcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXYge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi53cmFwcGVyIHtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBtYXJnaW46IDAgMXJlbTtcclxufVxyXG5cclxuLmhlYWRlciB7XHJcbiAgZm9udC1zaXplOiAycmVtO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIG1hcmdpbi1ib3R0b206IDNyZW07XHJcbn1cclxuXHJcbm1hdC1jYXJkLWhlYWRlciB7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbm1hdC1jYXJkLXN1YnRpdGxlLCBtYXQtY2FyZC10aXRsZSB7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuXHJcbiAgYSB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjb2xvcjogaW5oZXJpdDtcclxuICB9XHJcbn1cclxuXHJcbm1hdC1jYXJkLWNvbnRlbnQge1xyXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcclxufVxyXG5cclxubWF0LWNhcmQtYWN0aW9ucyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG5cclxuICBidXR0b24ge1xyXG4gICAgbWF0LXByb2dyZXNzLWJhciB7XHJcbiAgICAgIGNsaXAtcGF0aDogYm9yZGVyLWJveDtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBib3R0b206IDA7XHJcbiAgICAgIGxlZnQ6IDA7XHJcbiAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDRweDtcclxuICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDRweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmZvcm0ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LandingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-landing',
                templateUrl: './landing.component.html',
                styleUrls: ['./landing.component.scss']
            }]
    }], function () { return [{ type: _services_socket_service__WEBPACK_IMPORTED_MODULE_4__["SocketService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] }]; }, null); })();


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\workspace\heart-signal\heart-signal-client\src\main.ts */"zUnb");


/***/ }),

/***/ "5U9e":
/*!********************************************!*\
  !*** ./src/app/services/socket.service.ts ***!
  \********************************************/
/*! exports provided: SocketService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocketService", function() { return SocketService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! socket.io-client */ "jifJ");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "AytR");
/* harmony import */ var _shared_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/utils */ "9uVP");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");








class SocketService {
    constructor(router, snackBar) {
        this.router = router;
        this.snackBar = snackBar;
        this._usersInRoom = [];
        this.currentRound$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](0);
        this.canSendPlayerMessage$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
        this.usersInRoom$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this.setupSocketConnection();
        const localStorageUser = Object(_shared_utils__WEBPACK_IMPORTED_MODULE_4__["getUserFromLocalStorage"])();
        if (!!localStorageUser) {
            this.autoJoin(Object.assign({}, localStorageUser));
        }
        this.socket.on('roomClosed', () => {
            this.socket.disconnect();
            Object(_shared_utils__WEBPACK_IMPORTED_MODULE_4__["clearLocalUser"])();
        });
        this.socket.on('extraMessage', () => {
            this.canSendPlayerMessage$.next(true);
        });
        this.socket.on('alert', (error) => {
            this.snackBar.open(error.message, '好的', {
                duration: 2000,
            });
        });
        this.socket.on('approveAttemptToJoin', (user) => {
            this.joinRoom(user);
        });
        this.socket.on('disapproveAttemptToJoin', () => {
            this.snackBar.open('主持人拒绝了你的加入请求', '好的', {
                duration: 2000,
            });
        });
        this.socket.on('joinSuccess', ({ user, roomInfo }) => {
            this.user = user;
            this.setRoomNumber(user.roomNumber);
            this.router.navigate(['./room']);
            Object(_shared_utils__WEBPACK_IMPORTED_MODULE_4__["saveUserToLocalStorage"])(user);
            if (!!roomInfo) {
                this.currentRound$.next(roomInfo.roundIndex);
                this.canSendPlayerMessage$.next(roomInfo.isSendingMessage);
            }
        });
        this.socket.on('listUserInRoom', ({ roomNumber, users }) => {
            this.updateUsersInRoom(users);
        });
        // 短信轮次
        this.socket.on('startNewRound', (roundIndex) => {
            this.currentRound$.next(roundIndex);
            this.canSendPlayerMessage$.next(true);
        });
        this.socket.on('endCurrentRound', () => {
            this.canSendPlayerMessage$.next(false);
        });
    }
    addUserToRoom(user) {
        this._usersInRoom.push(user);
        this.usersInRoom$.next(this._usersInRoom);
    }
    updateUsersInRoom(users) {
        this._usersInRoom = users;
        this.usersInRoom$.next(this._usersInRoom);
    }
    joinRoom(user) {
        this.socket.emit('join', user);
    }
    autoJoin(user) {
        if (user.userRole === 'host') {
            this.socket.emit('reconnectHost', user);
        }
        else {
            this.socket.emit('autoJoin', user);
        }
    }
    attemptToJoin(user) {
        this.socket.emit('attemptToJoin', Object.assign({ id: this.socket.id }, user));
        this.snackBar.open('等待主持人批准', '好的', {
            duration: 2000,
        });
    }
    createRoom({ username, roomNumber }) {
        this.socket.emit('create', {
            username,
            roomNumber
        });
    }
    setRoomNumber(roomNumber) {
        this._roomNumber = roomNumber;
    }
    getRoomNumber() {
        return this._roomNumber;
    }
    setupSocketConnection() {
        if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
            this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_1__["io"]();
        }
        else {
            this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_1__["io"]('http://192.168.56.1:3000', {
                transports: ['websocket']
            });
        }
    }
}
SocketService.ɵfac = function SocketService_Factory(t) { return new (t || SocketService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"])); };
SocketService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SocketService, factory: SocketService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SocketService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"] }]; }, null); })();


/***/ }),

/***/ "8Xrt":
/*!****************************************************!*\
  !*** ./src/app/store/message/message.selectors.ts ***!
  \****************************************************/
/*! exports provided: selectSelectedMessageId, selectMessageIds, selectMessageEntities, selectAllMessages, selectMessageTotal, selectAllMessagesByTime */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectSelectedMessageId", function() { return selectSelectedMessageId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectMessageIds", function() { return selectMessageIds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectMessageEntities", function() { return selectMessageEntities; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectAllMessages", function() { return selectAllMessages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectMessageTotal", function() { return selectMessageTotal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectAllMessagesByTime", function() { return selectAllMessagesByTime; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _message_reducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./message.reducers */ "Ecmg");


const selectMessageState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])(_message_reducers__WEBPACK_IMPORTED_MODULE_1__["messageFeatureKey"]);
const selectSelectedMessageId = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectMessageState, _message_reducers__WEBPACK_IMPORTED_MODULE_1__["getSelectedMessageId"]);
const { selectIds: selectMessageIds, selectEntities: selectMessageEntities, selectAll: selectAllMessages, selectTotal: selectMessageTotal, } = _message_reducers__WEBPACK_IMPORTED_MODULE_1__["adapter"].getSelectors(selectMessageState);
const selectAllMessagesByTime = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectAllMessages, (messages) => {
    return messages.sort((a, b) => a.timestamp - b.timestamp);
});


/***/ }),

/***/ "9uVP":
/*!*********************************!*\
  !*** ./src/app/shared/utils.ts ***!
  \*********************************/
/*! exports provided: saveUserToLocalStorage, getUserFromLocalStorage, clearLocalUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveUserToLocalStorage", function() { return saveUserToLocalStorage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserFromLocalStorage", function() { return getUserFromLocalStorage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearLocalUser", function() { return clearLocalUser; });
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ "Wgwc");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);

function saveUserToLocalStorage({ username, userRole, roomNumber }) {
    const expireDate = dayjs__WEBPACK_IMPORTED_MODULE_0__().add(1, 'd').valueOf();
    localStorage.setItem('username', JSON.stringify({ value: username, expireDate }));
    localStorage.setItem('roomNumber', JSON.stringify({ value: roomNumber, expireDate }));
    localStorage.setItem('userRole', JSON.stringify({ value: userRole, expireDate }));
}
function getUserFromLocalStorage() {
    const now = dayjs__WEBPACK_IMPORTED_MODULE_0__();
    const prevUsernameInfo = localStorage.getItem('username');
    const prevUserRoleInfo = localStorage.getItem('userRole');
    const prevRoomNumberInfo = localStorage.getItem('roomNumber');
    if (!!prevUsernameInfo && !!prevUserRoleInfo && !!prevRoomNumberInfo) {
        const username = extractValue(JSON.parse(prevUsernameInfo), now);
        const userRole = extractValue(JSON.parse(prevUserRoleInfo), now);
        const roomNumber = extractValue(JSON.parse(prevRoomNumberInfo), now);
        if (!!username && !!userRole && !!roomNumber) {
            return {
                username,
                userRole,
                roomNumber
            };
        }
    }
    return null;
}
function clearLocalUser() {
    localStorage.removeItem('username');
    localStorage.removeItem('userRole');
    localStorage.removeItem('roomNumber');
}
function extractValue({ value, expireDate }, now) {
    if (dayjs__WEBPACK_IMPORTED_MODULE_0__(expireDate).isAfter(now)) {
        return value;
    }
    else {
        return null;
    }
}


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
    production: false,
    socketEndpoint: 'http://localhost:3000/socket'
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

/***/ "Ecmg":
/*!***************************************************!*\
  !*** ./src/app/store/message/message.reducers.ts ***!
  \***************************************************/
/*! exports provided: messageFeatureKey, adapter, initialState, messageReducer, getSelectedMessageId */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "messageFeatureKey", function() { return messageFeatureKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adapter", function() { return adapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "messageReducer", function() { return messageReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSelectedMessageId", function() { return getSelectedMessageId; });
/* harmony import */ var _ngrx_entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/entity */ "R0sL");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _message_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./message.actions */ "YRu1");



const messageFeatureKey = 'message';
const adapter = Object(_ngrx_entity__WEBPACK_IMPORTED_MODULE_0__["createEntityAdapter"])({
    selectId: (message) => message.id,
    sortComparer: false,
});
const initialState = adapter.getInitialState({
    selectedMessageId: null,
});
const reducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_message_actions__WEBPACK_IMPORTED_MODULE_2__["listPreviousMessages"], (state, { messages }) => {
    return adapter.setAll(messages, state);
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_message_actions__WEBPACK_IMPORTED_MODULE_2__["playerMessageCommand"], _message_actions__WEBPACK_IMPORTED_MODULE_2__["playerMessageEvent"], (state, { payload }) => {
    return adapter.upsertOne(payload, state);
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_message_actions__WEBPACK_IMPORTED_MODULE_2__["playerMessageApprovedByHostCommand"], _message_actions__WEBPACK_IMPORTED_MODULE_2__["playerMessageApprovedByHostEvent"], (state, { payload }) => {
    const updates = {
        id: payload.id,
        changes: Object.assign(Object.assign({}, payload), { approvalStatus: 'approved', published: false })
    };
    return adapter.updateOne(updates, state);
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_message_actions__WEBPACK_IMPORTED_MODULE_2__["playerMessageDisapprovedByHostCommand"], _message_actions__WEBPACK_IMPORTED_MODULE_2__["playerMessageDisapprovedByHostEvent"], (state, { payload }) => {
    const updates = {
        id: payload.id,
        changes: Object.assign(Object.assign({}, payload), { approvalStatus: 'disapproved', published: false })
    };
    return adapter.updateOne(updates, state);
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_message_actions__WEBPACK_IMPORTED_MODULE_2__["publishPendingMessagesEvent"], (state, { payload }) => {
    return adapter.upsertMany(payload, state);
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_message_actions__WEBPACK_IMPORTED_MODULE_2__["systemMessagedEvent"], (state, { payload }) => {
    return adapter.upsertOne(payload, state);
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_message_actions__WEBPACK_IMPORTED_MODULE_2__["systemMessageApprovedByHostCommand"], (state, { payload }) => {
    const updates = {
        id: payload.id,
        changes: Object.assign(Object.assign({}, payload), { approvalStatus: 'approved' })
    };
    return adapter.updateOne(updates, state);
}));
function messageReducer(state, action) {
    return reducer(state, action);
}
const getSelectedMessageId = (state) => state.selectedMessageId;


/***/ }),

/***/ "SfgH":
/*!*********************************************************!*\
  !*** ./src/app/components/read-me/read-me.component.ts ***!
  \*********************************************************/
/*! exports provided: ReadMeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReadMeComponent", function() { return ReadMeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "bTqV");





class ReadMeComponent {
    constructor() {
        this.canClose = false;
        this.countDown = 10;
    }
    ngOnInit() {
        const interval = setInterval(() => {
            this.countDown--;
        }, 1000);
        setTimeout(() => {
            this.canClose = true;
            clearInterval(interval);
        }, this.countDown * 1000);
    }
    ok() {
        localStorage.setItem('hasReadNotice', 'true');
    }
}
ReadMeComponent.ɵfac = function ReadMeComponent_Factory(t) { return new (t || ReadMeComponent)(); };
ReadMeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ReadMeComponent, selectors: [["app-read-me"]], decls: 14, vars: 2, consts: [["mat-dialog-title", ""], [1, "mat-typography"], ["align", "end"], ["mat-raised-button", "", "mat-dialog-close", "", "color", "primary", 3, "disabled", "click"]], template: function ReadMeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u6E38\u620F\u987B\u77E5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-dialog-content", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " \u6B64\u7F51\u7AD9\u53EA\u662F\u4E00\u4E2A\u4E3A\u672C\u5BC6\u5BA4\u5F00\u53D1\u7684\u7B80\u6613\u5DE5\u5177\uFF0C\u8BF7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u6309\u7167\u4E3B\u6301\u4EBA\u6307\u793A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u8FDB\u884C\u64CD\u4F5C\u3002\u5426\u5219\u6E38\u620F\u5C06\u65E0\u6CD5\u6B63\u5E38\u8FDB\u884C\u3002 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u6E38\u620F\u8FC7\u7A0B\u4E2D\uFF0C\u5982\u679C\u548C\u6B64\u7F51\u7AD9\u65AD\u5F00\u4E86\u94FE\u63A5\uFF0C\u76F4\u63A5\u5237\u65B0\u5373\u53EF");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-dialog-actions", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReadMeComponent_Template_button_click_12_listener() { return ctx.ok(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.canClose);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.canClose ? "\u597D\u7684" : ctx.countDown + "\u79D2", " ");
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_2__["MatDivider"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWFkLW1lLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReadMeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-read-me',
                templateUrl: './read-me.component.html',
                styleUrls: ['./read-me.component.scss']
            }]
    }], function () { return []; }, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_socket_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/socket.service */ "5U9e");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class AppComponent {
    constructor(socketService) {
        this.socketService = socketService;
    }
    ngOnInit() {
        // const prevUsername = localStorage.getItem('username');
        // const prevUserRole = localStorage.getItem('userRole');
        // const prevRoomNumber = localStorage.getItem('roomNumber');
        //
        // if(!!prevUsername&&!!prevUserRole&&!!prevRoomNumber) {
        //   this.socketService.joinRoom({
        //     username: prevUsername,
        //     userRole: prevUserRole,
        //     roomNumber: prevRoomNumber
        //   });
        // }
        // const localStorageUser = getUserFromLocalStorage();
        //
        // if(!!localStorageUser) {
        //   this.socketService.autoJoin({...localStorageUser});
        // }
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_socket_service__WEBPACK_IMPORTED_MODULE_1__["SocketService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return [{ type: _services_socket_service__WEBPACK_IMPORTED_MODULE_1__["SocketService"] }]; }, null); })();


/***/ }),

/***/ "YRu1":
/*!**************************************************!*\
  !*** ./src/app/store/message/message.actions.ts ***!
  \**************************************************/
/*! exports provided: listPreviousMessages, playerMessageCommand, playerMessageEvent, playerMessageApprovedByHostCommand, playerMessageApprovedByHostEvent, playerMessageDisapprovedByHostCommand, playerMessageDisapprovedByHostEvent, publishPendingMessagesCommand, publishPendingMessagesEvent, systemMessagedEvent, systemMessageApprovedByHostCommand, systemMessageApprovedByHostEvent, systemMessageDisapprovedByHostCommand, systemMessageDisapprovedByHostEvent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listPreviousMessages", function() { return listPreviousMessages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "playerMessageCommand", function() { return playerMessageCommand; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "playerMessageEvent", function() { return playerMessageEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "playerMessageApprovedByHostCommand", function() { return playerMessageApprovedByHostCommand; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "playerMessageApprovedByHostEvent", function() { return playerMessageApprovedByHostEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "playerMessageDisapprovedByHostCommand", function() { return playerMessageDisapprovedByHostCommand; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "playerMessageDisapprovedByHostEvent", function() { return playerMessageDisapprovedByHostEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "publishPendingMessagesCommand", function() { return publishPendingMessagesCommand; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "publishPendingMessagesEvent", function() { return publishPendingMessagesEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "systemMessagedEvent", function() { return systemMessagedEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "systemMessageApprovedByHostCommand", function() { return systemMessageApprovedByHostCommand; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "systemMessageApprovedByHostEvent", function() { return systemMessageApprovedByHostEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "systemMessageDisapprovedByHostCommand", function() { return systemMessageDisapprovedByHostCommand; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "systemMessageDisapprovedByHostEvent", function() { return systemMessageDisapprovedByHostEvent; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");

// import {socketMessageEvents} from '../../shared/constants';
const listPreviousMessages = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Message] List Previous Messages', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const playerMessageCommand = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Message] Player Message Command', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const playerMessageEvent = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Message] Player Message Event', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const playerMessageApprovedByHostCommand = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Message] playerMessageApprovedByHostCommand', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const playerMessageApprovedByHostEvent = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Message] playerMessageApprovedByHostEvent', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const playerMessageDisapprovedByHostCommand = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Message] playerMessageDisapprovedByHostCommand', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const playerMessageDisapprovedByHostEvent = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Message] playerMessageDisapprovedByHostEvent', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const publishPendingMessagesCommand = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Message] publishPendingMessagesCommand', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const publishPendingMessagesEvent = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Message] publishPendingMessagesEvent', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const systemMessagedEvent = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Message] System Message Event', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const systemMessageApprovedByHostCommand = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Message] systemMessageApprovedByHostCommand', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const systemMessageApprovedByHostEvent = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Message] systemMessageApprovedByHostEvent', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const systemMessageDisapprovedByHostCommand = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Message] systemMessageDisapprovedByHostCommand', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const systemMessageDisapprovedByHostEvent = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Message] systemMessageDisapprovedByHostEvent', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());


/***/ }),

/***/ "YZbJ":
/*!********************************!*\
  !*** ./src/app/store/index.ts ***!
  \********************************/
/*! exports provided: fromMessage, ROOT_REDUCERS, logger, metaReducers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROOT_REDUCERS", function() { return ROOT_REDUCERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logger", function() { return logger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "metaReducers", function() { return metaReducers; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _message__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./message */ "lKX+");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "fromMessage", function() { return _message__WEBPACK_IMPORTED_MODULE_1__; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "AytR");




const ROOT_REDUCERS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('Root reducers token', {
    factory: () => ({
        [_message__WEBPACK_IMPORTED_MODULE_1__["messageFeatureKey"]]: _message__WEBPACK_IMPORTED_MODULE_1__["messageReducer"],
    }),
});
function logger(reducer) {
    return (state, action) => {
        const result = reducer(state, action);
        console.groupCollapsed(action.type);
        // console.log('prev state', state);
        // console.log('action', action);
        // console.log('next state', result);
        console.groupEnd();
        return result;
    };
}
const metaReducers = !_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].production
    ? [logger]
    : [];


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _components_room_room_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/room/room.component */ "+km0");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _components_landing_landing_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/landing/landing.component */ "/Sl2");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/cdk/scrolling */ "vxfF");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./store */ "YZbJ");
/* harmony import */ var _services_socket_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/socket.service */ "5U9e");
/* harmony import */ var _services_message_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./services/message.service */ "tZre");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/progress-bar */ "bv9b");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "5+WD");
/* harmony import */ var _components_read_me_read_me_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/read-me/read-me.component */ "SfgH");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/menu */ "STbY");





























class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_services_socket_service__WEBPACK_IMPORTED_MODULE_16__["SocketService"], _services_message_service__WEBPACK_IMPORTED_MODULE_17__["MessageService"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_12__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelectModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__["MatIconModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_19__["MatSnackBarModule"],
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__["MatDividerModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_21__["MatProgressBarModule"],
            _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_22__["DragDropModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_25__["MatTableModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_26__["MatMenuModule"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_13__["StoreModule"].forRoot(_store__WEBPACK_IMPORTED_MODULE_15__["ROOT_REDUCERS"], {
                runtimeChecks: {
                    // strictStateImmutability and strictActionImmutability are enabled by default
                    strictStateSerializability: true,
                    strictActionSerializability: true,
                    strictActionWithinNgZone: true,
                }
            }),
            _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_14__["ScrollingModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_24__["MatDialogModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _components_room_room_component__WEBPACK_IMPORTED_MODULE_4__["RoomComponent"],
        _components_landing_landing_component__WEBPACK_IMPORTED_MODULE_11__["LandingComponent"],
        _components_read_me_read_me_component__WEBPACK_IMPORTED_MODULE_23__["ReadMeComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_12__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelectModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__["MatIconModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_19__["MatSnackBarModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__["MatDividerModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_21__["MatProgressBarModule"],
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_22__["DragDropModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_25__["MatTableModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_26__["MatMenuModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_13__["StoreRootModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_14__["ScrollingModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_24__["MatDialogModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                    _components_room_room_component__WEBPACK_IMPORTED_MODULE_4__["RoomComponent"],
                    _components_landing_landing_component__WEBPACK_IMPORTED_MODULE_11__["LandingComponent"],
                    _components_read_me_read_me_component__WEBPACK_IMPORTED_MODULE_23__["ReadMeComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_12__["AppRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelectModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__["MatIconModule"],
                    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_19__["MatSnackBarModule"],
                    _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__["MatDividerModule"],
                    _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_21__["MatProgressBarModule"],
                    _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_22__["DragDropModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_25__["MatTableModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_26__["MatMenuModule"],
                    _ngrx_store__WEBPACK_IMPORTED_MODULE_13__["StoreModule"].forRoot(_store__WEBPACK_IMPORTED_MODULE_15__["ROOT_REDUCERS"], {
                        runtimeChecks: {
                            // strictStateImmutability and strictActionImmutability are enabled by default
                            strictStateSerializability: true,
                            strictActionSerializability: true,
                            strictActionWithinNgZone: true,
                        }
                    }),
                    _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_14__["ScrollingModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_24__["MatDialogModule"],
                ],
                providers: [_services_socket_service__WEBPACK_IMPORTED_MODULE_16__["SocketService"], _services_message_service__WEBPACK_IMPORTED_MODULE_17__["MessageService"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "lKX+":
/*!****************************************!*\
  !*** ./src/app/store/message/index.ts ***!
  \****************************************/
/*! exports provided: listPreviousMessages, playerMessageCommand, playerMessageEvent, playerMessageApprovedByHostCommand, playerMessageApprovedByHostEvent, playerMessageDisapprovedByHostCommand, playerMessageDisapprovedByHostEvent, publishPendingMessagesCommand, publishPendingMessagesEvent, systemMessagedEvent, systemMessageApprovedByHostCommand, systemMessageApprovedByHostEvent, systemMessageDisapprovedByHostCommand, systemMessageDisapprovedByHostEvent, messageFeatureKey, adapter, initialState, messageReducer, getSelectedMessageId, selectSelectedMessageId, selectMessageIds, selectMessageEntities, selectAllMessages, selectMessageTotal, selectAllMessagesByTime */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _message_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./message.actions */ "YRu1");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "listPreviousMessages", function() { return _message_actions__WEBPACK_IMPORTED_MODULE_0__["listPreviousMessages"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "playerMessageCommand", function() { return _message_actions__WEBPACK_IMPORTED_MODULE_0__["playerMessageCommand"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "playerMessageEvent", function() { return _message_actions__WEBPACK_IMPORTED_MODULE_0__["playerMessageEvent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "playerMessageApprovedByHostCommand", function() { return _message_actions__WEBPACK_IMPORTED_MODULE_0__["playerMessageApprovedByHostCommand"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "playerMessageApprovedByHostEvent", function() { return _message_actions__WEBPACK_IMPORTED_MODULE_0__["playerMessageApprovedByHostEvent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "playerMessageDisapprovedByHostCommand", function() { return _message_actions__WEBPACK_IMPORTED_MODULE_0__["playerMessageDisapprovedByHostCommand"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "playerMessageDisapprovedByHostEvent", function() { return _message_actions__WEBPACK_IMPORTED_MODULE_0__["playerMessageDisapprovedByHostEvent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "publishPendingMessagesCommand", function() { return _message_actions__WEBPACK_IMPORTED_MODULE_0__["publishPendingMessagesCommand"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "publishPendingMessagesEvent", function() { return _message_actions__WEBPACK_IMPORTED_MODULE_0__["publishPendingMessagesEvent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "systemMessagedEvent", function() { return _message_actions__WEBPACK_IMPORTED_MODULE_0__["systemMessagedEvent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "systemMessageApprovedByHostCommand", function() { return _message_actions__WEBPACK_IMPORTED_MODULE_0__["systemMessageApprovedByHostCommand"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "systemMessageApprovedByHostEvent", function() { return _message_actions__WEBPACK_IMPORTED_MODULE_0__["systemMessageApprovedByHostEvent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "systemMessageDisapprovedByHostCommand", function() { return _message_actions__WEBPACK_IMPORTED_MODULE_0__["systemMessageDisapprovedByHostCommand"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "systemMessageDisapprovedByHostEvent", function() { return _message_actions__WEBPACK_IMPORTED_MODULE_0__["systemMessageDisapprovedByHostEvent"]; });

/* harmony import */ var _message_reducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./message.reducers */ "Ecmg");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "messageFeatureKey", function() { return _message_reducers__WEBPACK_IMPORTED_MODULE_1__["messageFeatureKey"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "adapter", function() { return _message_reducers__WEBPACK_IMPORTED_MODULE_1__["adapter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return _message_reducers__WEBPACK_IMPORTED_MODULE_1__["initialState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "messageReducer", function() { return _message_reducers__WEBPACK_IMPORTED_MODULE_1__["messageReducer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSelectedMessageId", function() { return _message_reducers__WEBPACK_IMPORTED_MODULE_1__["getSelectedMessageId"]; });

/* harmony import */ var _message_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./message.selectors */ "8Xrt");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectSelectedMessageId", function() { return _message_selectors__WEBPACK_IMPORTED_MODULE_2__["selectSelectedMessageId"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectMessageIds", function() { return _message_selectors__WEBPACK_IMPORTED_MODULE_2__["selectMessageIds"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectMessageEntities", function() { return _message_selectors__WEBPACK_IMPORTED_MODULE_2__["selectMessageEntities"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectAllMessages", function() { return _message_selectors__WEBPACK_IMPORTED_MODULE_2__["selectAllMessages"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectMessageTotal", function() { return _message_selectors__WEBPACK_IMPORTED_MODULE_2__["selectMessageTotal"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectAllMessagesByTime", function() { return _message_selectors__WEBPACK_IMPORTED_MODULE_2__["selectAllMessagesByTime"]; });






/***/ }),

/***/ "oT8k":
/*!****************************************!*\
  !*** ./src/app/services/room.guard.ts ***!
  \****************************************/
/*! exports provided: RoomGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoomGuard", function() { return RoomGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _socket_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./socket.service */ "5U9e");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class RoomGuard {
    constructor(socketService, router) {
        this.socketService = socketService;
        this.router = router;
    }
    canActivate(route, state) {
        if (!!this.socketService.user) {
            return true;
        }
        else {
            return this.router.parseUrl('/landing');
        }
    }
}
RoomGuard.ɵfac = function RoomGuard_Factory(t) { return new (t || RoomGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_socket_service__WEBPACK_IMPORTED_MODULE_1__["SocketService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
RoomGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: RoomGuard, factory: RoomGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RoomGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _socket_service__WEBPACK_IMPORTED_MODULE_1__["SocketService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "tZre":
/*!*********************************************!*\
  !*** ./src/app/services/message.service.ts ***!
  \*********************************************/
/*! exports provided: MessageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageService", function() { return MessageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _store_message__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store/message */ "lKX+");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! uuid */ "4USb");
/* harmony import */ var _socket_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./socket.service */ "5U9e");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");







class MessageService {
    constructor(socketService, store, snackBar) {
        this.socketService = socketService;
        this.store = store;
        this.snackBar = snackBar;
        this.socketService.socket.on('listPreviousMessages', ({ messages }) => {
            this.store.dispatch(Object(_store_message__WEBPACK_IMPORTED_MODULE_1__["listPreviousMessages"])({ messages }));
        });
        // 玩家短信
        this.socketService.socket.on('playerMessage', (message) => {
            this.store.dispatch(Object(_store_message__WEBPACK_IMPORTED_MODULE_1__["playerMessageEvent"])({ payload: message }));
        });
        this.socketService.socket.on('playerMessageApprovedByHost', (message) => {
            this.store.dispatch(Object(_store_message__WEBPACK_IMPORTED_MODULE_1__["playerMessageApprovedByHostEvent"])({ payload: message }));
        });
        this.socketService.socket.on('playerMessageDisapprovedByHost', (message) => {
            this.store.dispatch(Object(_store_message__WEBPACK_IMPORTED_MODULE_1__["playerMessageDisapprovedByHostEvent"])({ payload: message }));
            this.socketService.canSendPlayerMessage$.next(true);
        });
        this.socketService.socket.on('publishPendingMessages', (messages) => {
            if (this.socketService.user.userRole === 'host') {
                this.snackBar.open('已成功发布消息', '好的', {
                    duration: 2000,
                });
            }
            this.store.dispatch(Object(_store_message__WEBPACK_IMPORTED_MODULE_1__["publishPendingMessagesEvent"])({ payload: messages }));
        });
        // 有人要以玩家加入
        this.socketService.socket.on('attemptToJoin', ({ id, username, userRole, roomNumber }) => {
            const role = userRole === 'player' ? '玩家' : '观众';
            const message = {
                id: Object(uuid__WEBPACK_IMPORTED_MODULE_2__["v4"])(),
                type: 'systemMessage',
                content: `${username} 想要作为 ${role} 加入游戏`,
                timestamp: new Date().valueOf(),
                actionRequired: true,
                approvalStatus: 'pending',
                payload: { id, username, userRole, roomNumber }
            };
            this.store.dispatch(Object(_store_message__WEBPACK_IMPORTED_MODULE_1__["systemMessagedEvent"])({ payload: message }));
        });
    }
    startNewRound() {
        this.socketService.socket.emit('startNewRound', { roomNumber: this.socketService.getRoomNumber() });
    }
    endCurrentRound() {
        this.socketService.socket.emit('endCurrentRound', { roomNumber: this.socketService.getRoomNumber() });
    }
    // 玩家消息
    playerSendMessageToHost(message) {
        this.socketService.socket.emit('playerMessage', {
            message,
            roomNumber: this.socketService.getRoomNumber(),
        });
        this.store.dispatch(Object(_store_message__WEBPACK_IMPORTED_MODULE_1__["playerMessageCommand"])({ payload: message }));
    }
    hostApprovePlayerMessage(message) {
        this.socketService.socket.emit('playerMessageApprovedByHost', {
            message: Object.assign(Object.assign({}, message), { approvalStatus: 'approved' }),
            roomNumber: this.socketService.getRoomNumber(),
        });
        this.store.dispatch(Object(_store_message__WEBPACK_IMPORTED_MODULE_1__["playerMessageApprovedByHostCommand"])({ payload: message }));
    }
    hostDisapprovePlayerMessage(message) {
        this.socketService.socket.emit('playerMessageDisapprovedByHost', {
            message: Object.assign(Object.assign({}, message), { approvalStatus: 'disapproved' }),
            roomNumber: this.socketService.getRoomNumber(),
        });
        this.store.dispatch(Object(_store_message__WEBPACK_IMPORTED_MODULE_1__["playerMessageDisapprovedByHostCommand"])({ payload: message }));
    }
    // 批准以玩家加入
    approveAttemptToJoin(message) {
        this.socketService.socket.emit('approveAttemptToJoin', {
            user: message.payload,
            roomNumber: this.socketService.getRoomNumber(),
        });
        this.store.dispatch(Object(_store_message__WEBPACK_IMPORTED_MODULE_1__["systemMessageApprovedByHostCommand"])({ payload: message }));
    }
    disapproveAttemptToJoin(message) {
        this.socketService.socket.emit('disapproveAttemptToJoin', {
            user: message.payload,
            roomNumber: this.socketService.getRoomNumber(),
        });
        this.store.dispatch(Object(_store_message__WEBPACK_IMPORTED_MODULE_1__["systemMessageApprovedByHostCommand"])({ payload: message }));
    }
    hostPublishAllMessages() {
        this.socketService.socket.emit('publishPendingMessages', this.socketService.getRoomNumber());
    }
}
MessageService.ɵfac = function MessageService_Factory(t) { return new (t || MessageService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_socket_service__WEBPACK_IMPORTED_MODULE_3__["SocketService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"])); };
MessageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MessageService, factory: MessageService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MessageService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _socket_service__WEBPACK_IMPORTED_MODULE_3__["SocketService"] }, { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"] }]; }, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_landing_landing_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/landing/landing.component */ "/Sl2");
/* harmony import */ var _components_room_room_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/room/room.component */ "+km0");
/* harmony import */ var _services_room_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/room.guard */ "oT8k");







const routes = [
    {
        path: '',
        redirectTo: '/landing',
        pathMatch: 'full'
    },
    {
        path: 'landing',
        component: _components_landing_landing_component__WEBPACK_IMPORTED_MODULE_2__["LandingComponent"],
    },
    {
        path: 'room',
        component: _components_room_room_component__WEBPACK_IMPORTED_MODULE_3__["RoomComponent"],
        canActivate: [_services_room_guard__WEBPACK_IMPORTED_MODULE_4__["RoomGuard"]]
    },
    {
        path: '**',
        redirectTo: 'landing'
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
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