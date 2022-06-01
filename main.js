/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/api.js":
/*!*******************************!*\
  !*** ./src/components/api.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"deleteCard\": () => (/* binding */ deleteCard),\n/* harmony export */   \"deleteLike\": () => (/* binding */ deleteLike),\n/* harmony export */   \"getInitialCards\": () => (/* binding */ getInitialCards),\n/* harmony export */   \"initUserInfo\": () => (/* binding */ initUserInfo),\n/* harmony export */   \"postCard\": () => (/* binding */ postCard),\n/* harmony export */   \"putLike\": () => (/* binding */ putLike),\n/* harmony export */   \"saveAvatar\": () => (/* binding */ saveAvatar),\n/* harmony export */   \"saveProfileInfo\": () => (/* binding */ saveProfileInfo)\n/* harmony export */ });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./src/components/constants.js\");\n/* harmony import */ var _userInfo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./userInfo */ \"./src/components/userInfo.js\");\n/* harmony import */ var _card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./card */ \"./src/components/card.js\");\n/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modal */ \"./src/components/modal.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils */ \"./src/components/utils.js\");\n\n\n\n\n\nvar initUserInfo = function initUserInfo() {\n  return fetch(\"\".concat(_constants__WEBPACK_IMPORTED_MODULE_0__.config.baseUrl, \"/users/me\"), {\n    headers: _constants__WEBPACK_IMPORTED_MODULE_0__.config.headers\n  }).then(function (res) {\n    if (res.ok) {\n      return res.json();\n    }\n\n    return Promise.reject(res.status);\n  }).then(function (res) {\n    (0,_userInfo__WEBPACK_IMPORTED_MODULE_1__.setUserInfo)(res.name, res.about);\n    (0,_userInfo__WEBPACK_IMPORTED_MODULE_1__.setAvatar)(res.avatar);\n    (0,_userInfo__WEBPACK_IMPORTED_MODULE_1__.setMyID)(res);\n  }).catch(function (err) {\n    \"\\u041E\\u0448\\u0438\\u0431\\u043A\\u0430: \".concat(err);\n  });\n};\nvar getInitialCards = function getInitialCards() {\n  return fetch(\"\".concat(_constants__WEBPACK_IMPORTED_MODULE_0__.config.baseUrl, \"/cards\"), {\n    headers: _constants__WEBPACK_IMPORTED_MODULE_0__.config.headers\n  }).then(function (res) {\n    if (res.ok) {\n      return res.json();\n    }\n\n    return Promise.reject(\"\\u041E\\u0448\\u0438\\u0431\\u043A\\u0430: \".concat(res.status));\n  }).then(function (res) {\n    (0,_card__WEBPACK_IMPORTED_MODULE_2__.addCards)(res);\n  }).catch(function (err) {\n    \"\\u041E\\u0448\\u0438\\u0431\\u043A\\u0430: \".concat(err);\n  });\n};\nvar saveProfileInfo = function saveProfileInfo(name, about) {\n  return fetch(\"\".concat(_constants__WEBPACK_IMPORTED_MODULE_0__.config.baseUrl, \"/users/me\"), {\n    method: \"PATCH\",\n    headers: _constants__WEBPACK_IMPORTED_MODULE_0__.config.headers,\n    body: JSON.stringify({\n      name: \"\".concat(name),\n      about: \"\".concat(about)\n    })\n  }).then(function (res) {\n    if (res.ok) {\n      return res.json();\n    }\n\n    return Promise.reject(\"\\u041E\\u0448\\u0438\\u0431\\u043A\\u0430: \".concat(res.status, \" - \").concat(res.statusText));\n  }).catch(function (err) {\n    \"\\u041E\\u0448\\u0438\\u0431\\u043A\\u0430: \".concat(err);\n  }).finally(function () {\n    (0,_utils__WEBPACK_IMPORTED_MODULE_4__.renderLoading)(_modal__WEBPACK_IMPORTED_MODULE_3__.profileSubmitBtn, \"Сохранить\", false);\n  });\n};\nvar postCard = function postCard(name, link) {\n  return fetch(\"\".concat(_constants__WEBPACK_IMPORTED_MODULE_0__.config.baseUrl, \"/cards\"), {\n    method: \"POST\",\n    headers: _constants__WEBPACK_IMPORTED_MODULE_0__.config.headers,\n    body: JSON.stringify({\n      name: \"\".concat(name),\n      link: \"\".concat(link)\n    })\n  }).then(function (res) {\n    if (res.ok) {\n      return res.json();\n    }\n\n    return Promise.reject(\"\\u041E\\u0448\\u0438\\u0431\\u043A\\u0430: \".concat(res.status, \" - \").concat(res.statusText));\n  }).then(function (res) {\n    (0,_utils__WEBPACK_IMPORTED_MODULE_4__.addCard)(res);\n  }).catch(function (err) {\n    \"\\u041E\\u0448\\u0438\\u0431\\u043A\\u0430: \".concat(err);\n  }).finally(function () {\n    (0,_utils__WEBPACK_IMPORTED_MODULE_4__.renderLoading)(_modal__WEBPACK_IMPORTED_MODULE_3__.cardSubmitBtn, \"Создать\", false);\n  });\n};\nvar saveAvatar = function saveAvatar(link) {\n  return fetch(\"\".concat(_constants__WEBPACK_IMPORTED_MODULE_0__.config.baseUrl, \"/users/me/avatar\"), {\n    method: \"PATCH\",\n    headers: _constants__WEBPACK_IMPORTED_MODULE_0__.config.headers,\n    body: JSON.stringify({\n      avatar: \"\".concat(link)\n    })\n  }).then(function (res) {\n    if (res.ok) {\n      return res.json();\n    }\n\n    return Promise.reject(\"\\u041E\\u0448\\u0438\\u0431\\u043A\\u0430: \".concat(res.status, \" - \").concat(res.statusText));\n  }).catch(function (err) {\n    \"\\u041E\\u0448\\u0438\\u0431\\u043A\\u0430: \".concat(err);\n  }).finally(function () {\n    (0,_utils__WEBPACK_IMPORTED_MODULE_4__.renderLoading)(_modal__WEBPACK_IMPORTED_MODULE_3__.avatarSubmitBtn, \"Сохранить\", false);\n  });\n};\nvar deleteCard = function deleteCard(cardId) {\n  return fetch(\"\".concat(_constants__WEBPACK_IMPORTED_MODULE_0__.config.baseUrl, \"/cards/\").concat(cardId), {\n    method: \"DELETE\",\n    headers: _constants__WEBPACK_IMPORTED_MODULE_0__.config.headers\n  }).then(function (res) {\n    if (res.ok) {\n      return res.json();\n    }\n\n    return Promise.reject(\"\\u041E\\u0448\\u0438\\u0431\\u043A\\u0430: \".concat(res.status, \" - \").concat(res.statusText));\n  }).catch(function (err) {\n    \"\\u041E\\u0448\\u0438\\u0431\\u043A\\u0430: \".concat(err);\n  });\n};\nvar putLike = function putLike(heart, counter, cardId) {\n  return fetch(\"\".concat(_constants__WEBPACK_IMPORTED_MODULE_0__.config.baseUrl, \"/cards/likes/\").concat(cardId), {\n    method: \"PUT\",\n    headers: _constants__WEBPACK_IMPORTED_MODULE_0__.config.headers\n  }).then(function (res) {\n    if (res.ok) {\n      return res.json();\n    }\n\n    return Promise.reject(\"\\u041E\\u0448\\u0438\\u0431\\u043A\\u0430: \".concat(res.status, \" - \").concat(res.statusText));\n  }).then(function (res) {\n    (0,_card__WEBPACK_IMPORTED_MODULE_2__.addLike)(heart);\n    (0,_card__WEBPACK_IMPORTED_MODULE_2__.countLikes)(counter, res.likes.length);\n  }).catch(function (err) {\n    \"\\u041E\\u0448\\u0438\\u0431\\u043A\\u0430: \".concat(err);\n  });\n};\nvar deleteLike = function deleteLike(heart, counter, cardId) {\n  return fetch(\"\".concat(_constants__WEBPACK_IMPORTED_MODULE_0__.config.baseUrl, \"/cards/likes/\").concat(cardId), {\n    method: \"DELETE\",\n    headers: _constants__WEBPACK_IMPORTED_MODULE_0__.config.headers\n  }).then(function (res) {\n    if (res.ok) {\n      return res.json();\n    }\n\n    return Promise.reject(\"\\u041E\\u0448\\u0438\\u0431\\u043A\\u0430: \".concat(res.status, \" - \").concat(res.statusText));\n  }).then(function (res) {\n    (0,_card__WEBPACK_IMPORTED_MODULE_2__.removeLike)(heart);\n    (0,_card__WEBPACK_IMPORTED_MODULE_2__.countLikes)(counter, res.likes.length);\n  }).catch(function (err) {\n    \"\\u041E\\u0448\\u0438\\u0431\\u043A\\u0430: \".concat(err);\n  });\n};\n\n//# sourceURL=webpack://mesto-project/./src/components/api.js?");

/***/ }),

/***/ "./src/components/card.js":
/*!********************************!*\
  !*** ./src/components/card.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addCards\": () => (/* binding */ addCards),\n/* harmony export */   \"addLike\": () => (/* binding */ addLike),\n/* harmony export */   \"cardContainer\": () => (/* binding */ cardContainer),\n/* harmony export */   \"countLikes\": () => (/* binding */ countLikes),\n/* harmony export */   \"createCard\": () => (/* binding */ createCard),\n/* harmony export */   \"removeLike\": () => (/* binding */ removeLike)\n/* harmony export */ });\n/* harmony import */ var _modal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal.js */ \"./src/components/modal.js\");\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils.js */ \"./src/components/utils.js\");\n/* harmony import */ var _userInfo_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./userInfo.js */ \"./src/components/userInfo.js\");\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api.js */ \"./src/components/api.js\");\n\n\n\n\nvar cardContainer = document.querySelector(\".cards\");\nvar cardTemplate = document.querySelector(\"#card-template\").content;\n\nfunction toggleLike(heart, counter, id) {\n  if (heart.classList.contains(\"card__heart_active\")) {\n    (0,_api_js__WEBPACK_IMPORTED_MODULE_3__.deleteLike)(heart, counter, id);\n  } else {\n    (0,_api_js__WEBPACK_IMPORTED_MODULE_3__.putLike)(heart, counter, id);\n  }\n}\n\nfunction countLikes(elem, quantity) {\n  elem.textContent = quantity;\n}\nfunction addLike(elem) {\n  elem.classList.add(\"card__heart_active\");\n}\nfunction removeLike(elem) {\n  elem.classList.remove(\"card__heart_active\");\n}\n\nfunction removeCard(cardElement, id) {\n  cardElement.remove();\n  (0,_api_js__WEBPACK_IMPORTED_MODULE_3__.deleteCard)(id);\n}\n\nfunction createCard(cardObject) {\n  var cardElement = cardTemplate.querySelector(\".card\").cloneNode(true);\n  cardElement.querySelector(\".card__title\").textContent = cardObject.name;\n  var cardPic = cardElement.querySelector(\".card__image\");\n  cardPic.src = cardObject.link;\n  cardPic.alt = cardObject.name;\n  cardPic.addEventListener(\"click\", function (evt) {\n    (0,_modal_js__WEBPACK_IMPORTED_MODULE_0__.openImagePopup)(cardObject.name, cardObject.link);\n  }); //для лайка\n\n  var counter = cardElement.querySelector(\".card__like-counter\");\n  var heart = cardElement.querySelector(\".card__heart\");\n  countLikes(counter, cardObject.likes.length);\n  cardObject.likes.forEach(function (like) {\n    if (like._id === _userInfo_js__WEBPACK_IMPORTED_MODULE_2__.myProfile._id) {\n      addLike(heart);\n      return;\n    }\n  });\n  heart.addEventListener(\"click\", function () {\n    toggleLike(heart, counter, cardObject._id);\n  }); //для удаления карточки\n\n  if (!(_userInfo_js__WEBPACK_IMPORTED_MODULE_2__.myProfile._id === cardObject.owner._id)) {\n    cardElement.querySelector(\".card__trash\").remove();\n  } else {\n    cardElement.querySelector(\".card__trash\").addEventListener(\"click\", function () {\n      removeCard(cardElement, cardObject._id);\n    });\n  }\n\n  return cardElement;\n}\nfunction addCards(cards) {\n  cards.forEach(function (element) {\n    (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.addCard)(element);\n  });\n}\n\n//# sourceURL=webpack://mesto-project/./src/components/card.js?");

/***/ }),

/***/ "./src/components/constants.js":
/*!*************************************!*\
  !*** ./src/components/constants.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"config\": () => (/* binding */ config)\n/* harmony export */ });\nvar config = {\n  baseUrl: \"https://nomoreparties.co/v1/plus-cohort-10\",\n  headers: {\n    authorization: \"78934802-087a-46b7-9dd2-2151d51fe105\",\n    \"Content-Type\": \"application/json\"\n  }\n};\n\n//# sourceURL=webpack://mesto-project/./src/components/constants.js?");

/***/ }),

/***/ "./src/components/index.js":
/*!*********************************!*\
  !*** ./src/components/index.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index.css */ \"./src/index.css\");\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api */ \"./src/components/api.js\");\n/* harmony import */ var _modal_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal.js */ \"./src/components/modal.js\");\n/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./validate.js */ \"./src/components/validate.js\");\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils.js */ \"./src/components/utils.js\");\n\n\n\n\n\n_modal_js__WEBPACK_IMPORTED_MODULE_2__.profileEditBtn.addEventListener(\"click\", function () {\n  (0,_modal_js__WEBPACK_IMPORTED_MODULE_2__.openProfilePopup)();\n  (0,_utils_js__WEBPACK_IMPORTED_MODULE_4__.openPopup)(_modal_js__WEBPACK_IMPORTED_MODULE_2__.profilePopup);\n});\n_modal_js__WEBPACK_IMPORTED_MODULE_2__.profileAddBtn.addEventListener(\"click\", function () {\n  (0,_utils_js__WEBPACK_IMPORTED_MODULE_4__.openPopup)(_modal_js__WEBPACK_IMPORTED_MODULE_2__.cardPopup);\n});\n_modal_js__WEBPACK_IMPORTED_MODULE_2__.profileAvatarEditBtn.addEventListener(\"click\", function () {\n  (0,_utils_js__WEBPACK_IMPORTED_MODULE_4__.openPopup)(_modal_js__WEBPACK_IMPORTED_MODULE_2__.avatarPopup);\n});\n_modal_js__WEBPACK_IMPORTED_MODULE_2__.profileCloseBtn.addEventListener(\"click\", function () {\n  (0,_utils_js__WEBPACK_IMPORTED_MODULE_4__.closePopup)(_modal_js__WEBPACK_IMPORTED_MODULE_2__.profilePopup);\n});\n_modal_js__WEBPACK_IMPORTED_MODULE_2__.cardCloseBtn.addEventListener(\"click\", function () {\n  (0,_utils_js__WEBPACK_IMPORTED_MODULE_4__.closePopup)(_modal_js__WEBPACK_IMPORTED_MODULE_2__.cardPopup);\n});\n_modal_js__WEBPACK_IMPORTED_MODULE_2__.avatarCloseBtn.addEventListener(\"click\", function () {\n  (0,_utils_js__WEBPACK_IMPORTED_MODULE_4__.closePopup)(_modal_js__WEBPACK_IMPORTED_MODULE_2__.avatarPopup);\n});\n_modal_js__WEBPACK_IMPORTED_MODULE_2__.imageCloseBtn.addEventListener(\"click\", function () {\n  (0,_utils_js__WEBPACK_IMPORTED_MODULE_4__.closePopup)(_modal_js__WEBPACK_IMPORTED_MODULE_2__.imagePopup);\n});\n_modal_js__WEBPACK_IMPORTED_MODULE_2__.formProfileEdit.addEventListener(\"submit\", _modal_js__WEBPACK_IMPORTED_MODULE_2__.handleProfileFormSubmit);\n_modal_js__WEBPACK_IMPORTED_MODULE_2__.formAddCard.addEventListener(\"submit\", _modal_js__WEBPACK_IMPORTED_MODULE_2__.handleCardFormSubmit);\n_modal_js__WEBPACK_IMPORTED_MODULE_2__.formAvatarEdit.addEventListener(\"submit\", _modal_js__WEBPACK_IMPORTED_MODULE_2__.handleAvatarFormSubmit);\n(0,_validate_js__WEBPACK_IMPORTED_MODULE_3__.enableValidation)({\n  formSelector: \".popup__form\",\n  inputSelector: \".popup__text\",\n  submitButtonSelector: \".popup__button\",\n  inactiveButtonClass: \"popup__button_inactive\",\n  inputErrorClass: \"popup__text_type_error\",\n  errorClass: \"popup__text-error_active\"\n});\n(0,_api__WEBPACK_IMPORTED_MODULE_1__.initUserInfo)();\n(0,_api__WEBPACK_IMPORTED_MODULE_1__.getInitialCards)();\n\n//# sourceURL=webpack://mesto-project/./src/components/index.js?");

/***/ }),

/***/ "./src/components/modal.js":
/*!*********************************!*\
  !*** ./src/components/modal.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"avatarCloseBtn\": () => (/* binding */ avatarCloseBtn),\n/* harmony export */   \"avatarInput\": () => (/* binding */ avatarInput),\n/* harmony export */   \"avatarPopup\": () => (/* binding */ avatarPopup),\n/* harmony export */   \"avatarSubmitBtn\": () => (/* binding */ avatarSubmitBtn),\n/* harmony export */   \"cardCloseBtn\": () => (/* binding */ cardCloseBtn),\n/* harmony export */   \"cardPopup\": () => (/* binding */ cardPopup),\n/* harmony export */   \"cardSubmitBtn\": () => (/* binding */ cardSubmitBtn),\n/* harmony export */   \"container\": () => (/* binding */ container),\n/* harmony export */   \"formAddCard\": () => (/* binding */ formAddCard),\n/* harmony export */   \"formAvatarEdit\": () => (/* binding */ formAvatarEdit),\n/* harmony export */   \"formProfileEdit\": () => (/* binding */ formProfileEdit),\n/* harmony export */   \"handleAvatarFormSubmit\": () => (/* binding */ handleAvatarFormSubmit),\n/* harmony export */   \"handleCardFormSubmit\": () => (/* binding */ handleCardFormSubmit),\n/* harmony export */   \"handleProfileFormSubmit\": () => (/* binding */ handleProfileFormSubmit),\n/* harmony export */   \"imageCloseBtn\": () => (/* binding */ imageCloseBtn),\n/* harmony export */   \"imagePopup\": () => (/* binding */ imagePopup),\n/* harmony export */   \"jobInput\": () => (/* binding */ jobInput),\n/* harmony export */   \"nameInput\": () => (/* binding */ nameInput),\n/* harmony export */   \"openImagePopup\": () => (/* binding */ openImagePopup),\n/* harmony export */   \"openProfilePopup\": () => (/* binding */ openProfilePopup),\n/* harmony export */   \"profileAddBtn\": () => (/* binding */ profileAddBtn),\n/* harmony export */   \"profileAvatar\": () => (/* binding */ profileAvatar),\n/* harmony export */   \"profileAvatarEditBtn\": () => (/* binding */ profileAvatarEditBtn),\n/* harmony export */   \"profileCloseBtn\": () => (/* binding */ profileCloseBtn),\n/* harmony export */   \"profileEditBtn\": () => (/* binding */ profileEditBtn),\n/* harmony export */   \"profilePopup\": () => (/* binding */ profilePopup),\n/* harmony export */   \"profileSubmitBtn\": () => (/* binding */ profileSubmitBtn),\n/* harmony export */   \"profileSubtitle\": () => (/* binding */ profileSubtitle),\n/* harmony export */   \"profileTitle\": () => (/* binding */ profileTitle)\n/* harmony export */ });\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ \"./src/components/utils.js\");\n/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./validate.js */ \"./src/components/validate.js\");\n/* harmony import */ var _userInfo_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./userInfo.js */ \"./src/components/userInfo.js\");\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api.js */ \"./src/components/api.js\");\n\n\n\n\n\nvar container = document.querySelector(\".page\");\nvar profile = container.querySelector(\".profile\");\nvar profilePopup = container.querySelector(\".profile-popup\");\nvar cardPopup = container.querySelector(\".card-popup\");\nvar imagePopup = container.querySelector(\".image-popup\");\nvar avatarPopup = container.querySelector(\".avatar-popup\");\nvar formAddCard = cardPopup.querySelector(\".popup__form\");\nvar picImgPopup = imagePopup.querySelector(\".popup__image\");\nvar formProfileEdit = profilePopup.querySelector(\".popup__form\");\nvar nameInput = formProfileEdit.querySelector(\"input[name=profile-title]\");\nvar jobInput = formProfileEdit.querySelector(\"input[name=profile-description]\");\nvar profileEditBtn = profile.querySelector(\".profile__edit-button\");\nvar profileAddBtn = profile.querySelector(\".profile__add-button\");\nvar profileTitle = profile.querySelector(\".profile__title\");\nvar profileSubtitle = profile.querySelector(\".profile__subtitle\");\nvar profileAvatarEditBtn = profile.querySelector(\".profile__avatar-btn\");\nvar profileAvatar = profile.querySelector(\".profile__avatar\");\nvar profileCloseBtn = profilePopup.querySelector(\".popup__cross\");\nvar profileSubmitBtn = profilePopup.querySelector(\".popup__button\");\nvar cardCloseBtn = cardPopup.querySelector(\".popup__cross\");\nvar cardSubmitBtn = cardPopup.querySelector(\".popup__button\");\nvar imageCloseBtn = imagePopup.querySelector(\".popup__cross\");\nvar formAvatarEdit = avatarPopup.querySelector(\".popup__form\");\nvar avatarCloseBtn = avatarPopup.querySelector(\".popup__cross\");\nvar avatarSubmitBtn = avatarPopup.querySelector(\".popup__button\");\nvar avatarInput = avatarPopup.querySelector(\"input[name = avatar-source]\");\nvar cardCaption = cardPopup.querySelector(\"input[name = card-title]\");\nvar cardImage = cardPopup.querySelector(\"input[name = img-source]\");\nvar imageCaption = imagePopup.querySelector(\".popup__caption\");\nfunction openProfilePopup() {\n  nameInput.value = profileTitle.textContent;\n  jobInput.value = profileSubtitle.textContent;\n}\nfunction handleProfileFormSubmit(evt) {\n  evt.preventDefault();\n  (0,_userInfo_js__WEBPACK_IMPORTED_MODULE_2__.setUserInfo)(nameInput.value, jobInput.value);\n  (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.renderLoading)(profileSubmitBtn, profileSubmitBtn.textContent, true);\n  (0,_api_js__WEBPACK_IMPORTED_MODULE_3__.saveProfileInfo)(nameInput.value, jobInput.value);\n  (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.closePopup)(profilePopup);\n}\nfunction handleCardFormSubmit(evt) {\n  evt.preventDefault(); // addCard(cardCaption.value, cardImage.value);\n\n  (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.renderLoading)(cardSubmitBtn, cardSubmitBtn.textContent, true);\n  (0,_api_js__WEBPACK_IMPORTED_MODULE_3__.postCard)(cardCaption.value, cardImage.value);\n  var inputList = Array.from(formAddCard.querySelectorAll(\".popup__text\"));\n  var buttonElement = formAddCard.querySelector(\".popup__button\");\n  formAddCard.reset();\n  (0,_validate_js__WEBPACK_IMPORTED_MODULE_1__.toggleButtonState)(inputList, buttonElement, {\n    inactiveButtonClass: \"popup__button_inactive\"\n  });\n  (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.closePopup)(cardPopup);\n}\nfunction handleAvatarFormSubmit(evt) {\n  evt.preventDefault();\n  (0,_userInfo_js__WEBPACK_IMPORTED_MODULE_2__.setAvatar)(avatarInput.value);\n  (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.renderLoading)(avatarSubmitBtn, avatarSubmitBtn.textContent, true);\n  (0,_api_js__WEBPACK_IMPORTED_MODULE_3__.saveAvatar)(avatarInput.value);\n  (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.closePopup)(avatarPopup);\n}\nfunction openImagePopup(caption, link) {\n  picImgPopup.src = link;\n  picImgPopup.alt = caption;\n  imageCaption.textContent = caption;\n  (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.openPopup)(imagePopup);\n}\n\n//# sourceURL=webpack://mesto-project/./src/components/modal.js?");

/***/ }),

/***/ "./src/components/userInfo.js":
/*!************************************!*\
  !*** ./src/components/userInfo.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"myProfile\": () => (/* binding */ myProfile),\n/* harmony export */   \"setAvatar\": () => (/* binding */ setAvatar),\n/* harmony export */   \"setMyID\": () => (/* binding */ setMyID),\n/* harmony export */   \"setUserInfo\": () => (/* binding */ setUserInfo)\n/* harmony export */ });\n/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal */ \"./src/components/modal.js\");\n\nvar myProfile = {};\nfunction setUserInfo(name, about) {\n  _modal__WEBPACK_IMPORTED_MODULE_0__.profileTitle.textContent = name;\n  _modal__WEBPACK_IMPORTED_MODULE_0__.profileSubtitle.textContent = about;\n}\nfunction setAvatar(link) {\n  _modal__WEBPACK_IMPORTED_MODULE_0__.profileAvatar.src = link;\n}\nfunction setMyID(identificator) {\n  myProfile = identificator;\n}\n\n//# sourceURL=webpack://mesto-project/./src/components/userInfo.js?");

/***/ }),

/***/ "./src/components/utils.js":
/*!*********************************!*\
  !*** ./src/components/utils.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addCard\": () => (/* binding */ addCard),\n/* harmony export */   \"closePopup\": () => (/* binding */ closePopup),\n/* harmony export */   \"openPopup\": () => (/* binding */ openPopup),\n/* harmony export */   \"renderLoading\": () => (/* binding */ renderLoading)\n/* harmony export */ });\n/* harmony import */ var _card_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./card.js */ \"./src/components/card.js\");\n\nvar popups = document.querySelectorAll(\".popup\");\nfunction addCard(cardObject) {\n  var cardElement = (0,_card_js__WEBPACK_IMPORTED_MODULE_0__.createCard)(cardObject);\n  _card_js__WEBPACK_IMPORTED_MODULE_0__.cardContainer.append(cardElement);\n}\n\nfunction closeEscPopup(evt) {\n  if (evt.key === \"Escape\") {\n    closePopup(document.querySelector(\".popup_opened\"));\n  }\n}\n\nfunction openPopup(popup) {\n  popup.classList.add(\"popup_opened\");\n  document.addEventListener(\"keydown\", closeEscPopup);\n}\nfunction closePopup(popup) {\n  popup.classList.remove(\"popup_opened\");\n  document.removeEventListener(\"keydown\", closeEscPopup);\n}\nfunction renderLoading(element, btnText, onLoad) {\n  if (onLoad) {\n    element.textContent = \"Сохранение...\";\n  } else {\n    element.textContent = btnText;\n  }\n}\npopups.forEach(function (item) {\n  item.addEventListener(\"click\", function (evt) {\n    if (evt.target.classList.contains(\"popup\")) {\n      closePopup(evt.target);\n    }\n  });\n});\n\n//# sourceURL=webpack://mesto-project/./src/components/utils.js?");

/***/ }),

/***/ "./src/components/validate.js":
/*!************************************!*\
  !*** ./src/components/validate.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"enableValidation\": () => (/* binding */ enableValidation),\n/* harmony export */   \"toggleButtonState\": () => (/* binding */ toggleButtonState)\n/* harmony export */ });\nvar showInputError = function showInputError(formElement, inputElement, errorMessage, obj) {\n  var errorElement = formElement.querySelector(\".\".concat(inputElement.id, \"-error\"));\n  inputElement.classList.add(obj.inputErrorClass);\n  errorElement.textContent = errorMessage;\n  errorElement.classList.add(obj.errorClass);\n};\n\nvar hideInputError = function hideInputError(formElement, inputElement, obj) {\n  var errorElement = formElement.querySelector(\".\".concat(inputElement.id, \"-error\"));\n  inputElement.classList.remove(obj.inputErrorClass);\n  errorElement.classList.remove(obj.errorClass);\n};\n\nvar hasInvalidInput = function hasInvalidInput(inputList) {\n  return inputList.some(function (inputElement) {\n    return !inputElement.validity.valid;\n  });\n};\n\nvar toggleButtonState = function toggleButtonState(inputList, buttonElement, obj) {\n  if (hasInvalidInput(inputList)) {\n    buttonElement.classList.add(obj.inactiveButtonClass);\n    buttonElement.setAttribute(\"disabled\", \"disabled\");\n  } else {\n    buttonElement.classList.remove(obj.inactiveButtonClass);\n    buttonElement.removeAttribute(\"disabled\");\n  }\n};\n\nvar checkInputValidity = function checkInputValidity(formElement, inputElement, obj) {\n  if (!inputElement.validity.valid) {\n    showInputError(formElement, inputElement, inputElement.validationMessage, obj);\n  } else {\n    hideInputError(formElement, inputElement, obj);\n  }\n};\n\nvar setEventListeners = function setEventListeners(formElement, obj) {\n  var inputList = Array.from(formElement.querySelectorAll(obj.inputSelector));\n  var buttonElement = formElement.querySelector(obj.submitButtonSelector);\n  toggleButtonState(inputList, buttonElement, obj);\n  inputList.forEach(function (inputElement) {\n    inputElement.addEventListener(\"input\", function () {\n      checkInputValidity(formElement, inputElement, obj);\n      toggleButtonState(inputList, buttonElement, obj);\n    });\n  });\n};\n\nvar enableValidation = function enableValidation(obj) {\n  var formList = Array.from(document.querySelectorAll(obj.formSelector));\n  formList.forEach(function (formElement) {\n    formElement.addEventListener(\"submit\", function (evt) {\n      evt.preventDefault();\n    });\n    setEventListeners(formElement, obj);\n  });\n};\n\n//# sourceURL=webpack://mesto-project/./src/components/validate.js?");

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://mesto-project/./src/index.css?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/components/index.js");
/******/ 	
/******/ })()
;