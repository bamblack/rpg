/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/main.ts","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/game.ts":
/*!*********************!*\
  !*** ./src/game.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Game = void 0;
var Phaser = __importStar(__webpack_require__(/*! phaser */ "./node_modules/phaser/src/phaser.js"));
var scenes_1 = __webpack_require__(/*! ./scenes */ "./src/scenes/index.ts");
var Game = /** @class */ (function () {
    function Game() {
        var gameConfig = {
            title: 'Test',
            type: Phaser.WEBGL,
            scale: {
                mode: Phaser.Scale.ScaleModes.RESIZE,
                width: window.innerWidth,
                height: window.innerHeight
            },
            scene: [
                scenes_1.BootScene,
                scenes_1.MainMenuScene,
                scenes_1.DungeonScene,
                scenes_1.RoomScene
            ],
            physics: {
                default: 'arcade',
                arcade: {
                    gravity: { y: 0 },
                    debug: true
                }
            },
            parent: 'game',
            backgroundColor: 0x0d0711
        };
        this.game = new Phaser.Game(gameConfig);
    }
    return Game;
}());
exports.Game = Game;
;


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.rpg = void 0;
var game_1 = __webpack_require__(/*! ./game */ "./src/game.ts");
exports.rpg = new game_1.Game();


/***/ }),

/***/ "./src/models/Dungeon.ts":
/*!*******************************!*\
  !*** ./src/models/Dungeon.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Dungeon = void 0;
var Room_1 = __webpack_require__(/*! ./Room */ "./src/models/Room.ts");
var Dungeon = /** @class */ (function () {
    function Dungeon() {
        // 10x10 array of Rooms
        this.rooms = [
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null]
        ];
        // get a number 1-8 for both X and Y start coords
        // we don't want 0 or 9 because we want all 4 sides to be open for spawn
        var spawnX = Math.min(8, Math.max(1, Math.floor(Math.random() * 10)));
        var spawnY = Math.min(8, Math.max(1, Math.floor(Math.random() * 10)));
        // register spawn room
        var spawnRoom = new Room_1.Room({ x: spawnX, y: spawnY });
        spawnRoom.isSpawn = true;
        this.rooms[spawnY][spawnX] = spawnRoom;
        this.generateConnectedRooms(spawnRoom, 2);
    }
    /////////////////////
    // Private Methods //
    /////////////////////
    /**
     * Recursively create a path of rooms. forceDirections should only be used on the initial call of this (for spawnRoom)
     */
    Dungeon.prototype.generateConnectedRooms = function (sourceRoom, forceRoomConnections) {
        var _a;
        var roomMap = (_a = {},
            _a[Room_1.Direction.Left] = { x: sourceRoom.roomCoordinates.x - 1, y: sourceRoom.roomCoordinates.y },
            _a[Room_1.Direction.Right] = { x: sourceRoom.roomCoordinates.x + 1, y: sourceRoom.roomCoordinates.y },
            _a[Room_1.Direction.Above] = { x: sourceRoom.roomCoordinates.x, y: sourceRoom.roomCoordinates.y - 1 },
            _a[Room_1.Direction.Below] = { x: sourceRoom.roomCoordinates.x, y: sourceRoom.roomCoordinates.y + 1 },
            _a);
        var possibleConnections = [];
        if (roomMap[Room_1.Direction.Left].x >= 0 && this.rooms[roomMap[Room_1.Direction.Left].y][roomMap[Room_1.Direction.Left].x] === null) {
            possibleConnections.push(Room_1.Direction.Left);
        }
        if (roomMap[Room_1.Direction.Right].x <= 9 && this.rooms[roomMap[Room_1.Direction.Right].y][roomMap[Room_1.Direction.Right].x] === null) {
            possibleConnections.push(Room_1.Direction.Right);
        }
        if (roomMap[Room_1.Direction.Above].y >= 0 && this.rooms[roomMap[Room_1.Direction.Above].y][roomMap[Room_1.Direction.Above].x] === null) {
            possibleConnections.push(Room_1.Direction.Above);
        }
        if (roomMap[Room_1.Direction.Below].y <= 9 && this.rooms[roomMap[Room_1.Direction.Below].y][roomMap[Room_1.Direction.Below].x] === null) {
            possibleConnections.push(Room_1.Direction.Below);
        }
        var connectedRoomsToGenerate = Math.max(forceRoomConnections || 0, Math.floor(Math.random() * (possibleConnections.length + 1)));
        if (connectedRoomsToGenerate === 0) {
            sourceRoom.isDeadEnd = true;
            return;
        }
        var newRooms = [];
        for (var i = 0; i < connectedRoomsToGenerate; i++) {
            // get one of the directions randomly by index
            var directionToUse = possibleConnections.splice(Math.floor(Math.random() * possibleConnections.length), 1)[0];
            var newRoomCoordinates = roomMap[directionToUse];
            var newRoom = new Room_1.Room(newRoomCoordinates);
            var roomType = Math.floor(Math.random() * Object.keys(Room_1.RoomType).filter(function (x) { return !parseInt(x); }).length);
            newRoom.roomType = roomType;
            newRooms.push(newRoom);
            sourceRoom.connectedRooms[directionToUse] = newRoom; // let the source room know it has a connection to the new room in this direction
            newRoom.connectedRooms[Room_1.oppositeDirection[directionToUse]] = sourceRoom; // let the new room know it has a connection to the source room in the opposite direction
            this.rooms[newRoom.roomCoordinates.y][newRoom.roomCoordinates.x] = newRoom; // register the new room in the room map
        }
        for (var _i = 0, newRooms_1 = newRooms; _i < newRooms_1.length; _i++) {
            var newRoom = newRooms_1[_i];
            this.generateConnectedRooms(newRoom);
        }
    };
    return Dungeon;
}());
exports.Dungeon = Dungeon;


/***/ }),

/***/ "./src/models/Player.ts":
/*!******************************!*\
  !*** ./src/models/Player.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Player = void 0;
var baseSpeed = 300;
var Player = /** @class */ (function () {
    function Player() {
        // TODO
    }
    Player.prototype.destroy = function () {
        var _a;
        (_a = this.sprite) === null || _a === void 0 ? void 0 : _a.destroy();
    };
    Player.prototype.freeze = function () {
        var _a;
        ((_a = this.sprite) === null || _a === void 0 ? void 0 : _a.body).moves = false;
    };
    Player.prototype.registerNewScene = function (scene, startingX, startingY) {
        this.scene = scene;
        var anims = this.scene.anims;
        anims.create({
            key: 'player-walk',
            frames: anims.generateFrameNumbers('player', { start: 0, end: 2 }),
            frameRate: 8,
            repeat: -1
        });
        anims.create({
            key: 'player-walk-back',
            frames: anims.generateFrameNumbers('player', { start: 8, end: 10 }),
            frameRate: 8,
            repeat: -1
        });
        this.sprite = scene.physics.add
            .sprite(startingX, startingY, 'player', 0)
            .setSize(5, 5)
            .setOffset(15);
        this.keys = scene.input.keyboard.createCursorKeys();
    };
    Player.prototype.update = function () {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x;
        var body = (_a = this.sprite) === null || _a === void 0 ? void 0 : _a.body;
        if (body != null) {
            body.setVelocity(0);
            if ((_c = (_b = this.keys) === null || _b === void 0 ? void 0 : _b.left) === null || _c === void 0 ? void 0 : _c.isDown) {
                body.setVelocityX(-baseSpeed);
                (_d = this.sprite) === null || _d === void 0 ? void 0 : _d.setFlipX(true);
            }
            else if ((_f = (_e = this.keys) === null || _e === void 0 ? void 0 : _e.right) === null || _f === void 0 ? void 0 : _f.isDown) {
                body.setVelocityX(baseSpeed);
                (_g = this.sprite) === null || _g === void 0 ? void 0 : _g.setFlipX(false);
            }
            if ((_j = (_h = this.keys) === null || _h === void 0 ? void 0 : _h.up) === null || _j === void 0 ? void 0 : _j.isDown) {
                body.setVelocityY(-baseSpeed);
            }
            else if ((_l = (_k = this.keys) === null || _k === void 0 ? void 0 : _k.down) === null || _l === void 0 ? void 0 : _l.isDown) {
                body.setVelocityY(baseSpeed);
            }
            // normalize and scale the velocity so that sprite can't move faster along a diagonal
            body.velocity.normalize().scale(baseSpeed);
            if (((_o = (_m = this.keys) === null || _m === void 0 ? void 0 : _m.left) === null || _o === void 0 ? void 0 : _o.isDown) || ((_q = (_p = this.keys) === null || _p === void 0 ? void 0 : _p.right) === null || _q === void 0 ? void 0 : _q.isDown) || ((_s = (_r = this.keys) === null || _r === void 0 ? void 0 : _r.down) === null || _s === void 0 ? void 0 : _s.isDown)) {
                (_t = this.sprite) === null || _t === void 0 ? void 0 : _t.anims.play('player-walk', true);
            }
            else if ((_v = (_u = this.keys) === null || _u === void 0 ? void 0 : _u.up) === null || _v === void 0 ? void 0 : _v.isDown) {
                (_w = this.sprite) === null || _w === void 0 ? void 0 : _w.anims.play('player-walk-back', true);
            }
            else {
                (_x = this.sprite) === null || _x === void 0 ? void 0 : _x.anims.stop();
            }
        }
    };
    return Player;
}());
exports.Player = Player;


/***/ }),

/***/ "./src/models/Room.ts":
/*!****************************!*\
  !*** ./src/models/Room.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Room = exports.RoomType = exports.oppositeDirection = exports.Direction = void 0;
var Direction;
(function (Direction) {
    Direction["Left"] = "Left";
    Direction["Right"] = "Right";
    Direction["Above"] = "Above";
    Direction["Below"] = "Below";
})(Direction = exports.Direction || (exports.Direction = {}));
exports.oppositeDirection = (_a = {},
    _a[Direction.Left] = Direction.Right,
    _a[Direction.Right] = Direction.Left,
    _a[Direction.Above] = Direction.Below,
    _a[Direction.Below] = Direction.Above,
    _a);
var RoomType;
(function (RoomType) {
    RoomType[RoomType["Normal"] = 0] = "Normal";
    RoomType[RoomType["Pillar"] = 1] = "Pillar";
    RoomType[RoomType["Divided"] = 2] = "Divided";
    RoomType[RoomType["Hole"] = 3] = "Hole";
    RoomType[RoomType["Chest"] = 4] = "Chest";
})(RoomType = exports.RoomType || (exports.RoomType = {}));
var Room = /** @class */ (function () {
    function Room(roomCoordinates) {
        var _a;
        this.roomCoordinates = roomCoordinates;
        this.connectedRooms = (_a = {},
            _a[Direction.Left] = null,
            _a[Direction.Right] = null,
            _a[Direction.Above] = null,
            _a[Direction.Below] = null,
            _a);
        this.isDeadEnd = false;
        this.isSpawn = false;
        this.roomType = RoomType.Normal;
        this.layers = {};
    }
    return Room;
}());
exports.Room = Room;


/***/ }),

/***/ "./src/models/TileSetIndex.ts":
/*!************************************!*\
  !*** ./src/models/TileSetIndex.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Dungeon1TileSetIndexWallWeights = exports.Dungeon1TileSetIndex = void 0;
var Dungeon1TileSetIndex;
(function (Dungeon1TileSetIndex) {
    Dungeon1TileSetIndex[Dungeon1TileSetIndex["HoleTopLeftCorner"] = 0] = "HoleTopLeftCorner";
    Dungeon1TileSetIndex[Dungeon1TileSetIndex["BottomNormalWall"] = 1] = "BottomNormalWall";
    Dungeon1TileSetIndex[Dungeon1TileSetIndex["HoleTopRightCorner"] = 2] = "HoleTopRightCorner";
    Dungeon1TileSetIndex[Dungeon1TileSetIndex["TopLeftCorner"] = 3] = "TopLeftCorner";
    Dungeon1TileSetIndex[Dungeon1TileSetIndex["TopRightCorner"] = 4] = "TopRightCorner";
    Dungeon1TileSetIndex[Dungeon1TileSetIndex["NormalFloor"] = 6] = "NormalFloor";
    Dungeon1TileSetIndex[Dungeon1TileSetIndex["TexturedFloor1"] = 7] = "TexturedFloor1";
    Dungeon1TileSetIndex[Dungeon1TileSetIndex["TexturedFloor2"] = 8] = "TexturedFloor2";
    Dungeon1TileSetIndex[Dungeon1TileSetIndex["TexturedFloor3"] = 9] = "TexturedFloor3";
    Dungeon1TileSetIndex[Dungeon1TileSetIndex["TexturedFloor4"] = 10] = "TexturedFloor4";
    Dungeon1TileSetIndex[Dungeon1TileSetIndex["TexturedFloor5"] = 11] = "TexturedFloor5";
    Dungeon1TileSetIndex[Dungeon1TileSetIndex["TexturedFloor6"] = 12] = "TexturedFloor6";
    Dungeon1TileSetIndex[Dungeon1TileSetIndex["EmptyVase1"] = 13] = "EmptyVase1";
    Dungeon1TileSetIndex[Dungeon1TileSetIndex["EmptyVase2"] = 14] = "EmptyVase2";
    Dungeon1TileSetIndex[Dungeon1TileSetIndex["EmptyVase3"] = 15] = "EmptyVase3";
    Dungeon1TileSetIndex[Dungeon1TileSetIndex["RightNormalWall"] = 19] = "RightNormalWall";
    Dungeon1TileSetIndex[Dungeon1TileSetIndex["Empty"] = 20] = "Empty";
    Dungeon1TileSetIndex[Dungeon1TileSetIndex["LeftNormalWall"] = 21] = "LeftNormalWall";
    Dungeon1TileSetIndex[Dungeon1TileSetIndex["BottomLeftCorner"] = 22] = "BottomLeftCorner";
    Dungeon1TileSetIndex[Dungeon1TileSetIndex["BottomRightCorner"] = 23] = "BottomRightCorner";
    Dungeon1TileSetIndex[Dungeon1TileSetIndex["TexturedFloor7"] = 25] = "TexturedFloor7";
    Dungeon1TileSetIndex[Dungeon1TileSetIndex["TexturedFloor8"] = 26] = "TexturedFloor8";
    Dungeon1TileSetIndex[Dungeon1TileSetIndex["TexturedFloor9"] = 27] = "TexturedFloor9";
    Dungeon1TileSetIndex[Dungeon1TileSetIndex["TexturedFloor10"] = 28] = "TexturedFloor10";
    Dungeon1TileSetIndex[Dungeon1TileSetIndex["TexturedFloor11"] = 29] = "TexturedFloor11";
    Dungeon1TileSetIndex[Dungeon1TileSetIndex["TexturedFloor12"] = 30] = "TexturedFloor12";
    Dungeon1TileSetIndex[Dungeon1TileSetIndex["TexturedFloor13"] = 31] = "TexturedFloor13";
    Dungeon1TileSetIndex[Dungeon1TileSetIndex["HoleBottomLeftCorner"] = 38] = "HoleBottomLeftCorner";
    Dungeon1TileSetIndex[Dungeon1TileSetIndex["TopNormalWall"] = 39] = "TopNormalWall";
    Dungeon1TileSetIndex[Dungeon1TileSetIndex["HoleBottomRightCorner"] = 40] = "HoleBottomRightCorner";
    Dungeon1TileSetIndex[Dungeon1TileSetIndex["TexturedFloor14"] = 44] = "TexturedFloor14";
    Dungeon1TileSetIndex[Dungeon1TileSetIndex["TexturedFloor15"] = 45] = "TexturedFloor15";
    Dungeon1TileSetIndex[Dungeon1TileSetIndex["TexturedFloor16"] = 46] = "TexturedFloor16";
    Dungeon1TileSetIndex[Dungeon1TileSetIndex["TexturedFloor17"] = 47] = "TexturedFloor17";
    Dungeon1TileSetIndex[Dungeon1TileSetIndex["TexturedFloor18"] = 48] = "TexturedFloor18";
    Dungeon1TileSetIndex[Dungeon1TileSetIndex["TexturedFloor19"] = 49] = "TexturedFloor19";
    Dungeon1TileSetIndex[Dungeon1TileSetIndex["TexturedFloor20"] = 50] = "TexturedFloor20";
    Dungeon1TileSetIndex[Dungeon1TileSetIndex["BrokenVase1"] = 49] = "BrokenVase1";
    Dungeon1TileSetIndex[Dungeon1TileSetIndex["BrokenVase2"] = 50] = "BrokenVase2";
    Dungeon1TileSetIndex[Dungeon1TileSetIndex["BrokenVase3"] = 51] = "BrokenVase3";
    Dungeon1TileSetIndex[Dungeon1TileSetIndex["TopTexturedWall1"] = 57] = "TopTexturedWall1";
    Dungeon1TileSetIndex[Dungeon1TileSetIndex["TopTexturedWall2"] = 58] = "TopTexturedWall2";
    Dungeon1TileSetIndex[Dungeon1TileSetIndex["TopTexturedWall3"] = 59] = "TopTexturedWall3";
    Dungeon1TileSetIndex[Dungeon1TileSetIndex["TexturedFloor21"] = 63] = "TexturedFloor21";
    Dungeon1TileSetIndex[Dungeon1TileSetIndex["TexturedFloor22"] = 64] = "TexturedFloor22";
    Dungeon1TileSetIndex[Dungeon1TileSetIndex["TexturedFloor23"] = 65] = "TexturedFloor23";
    Dungeon1TileSetIndex[Dungeon1TileSetIndex["TexturedFloor24"] = 66] = "TexturedFloor24";
    Dungeon1TileSetIndex[Dungeon1TileSetIndex["TexturedFloor25"] = 67] = "TexturedFloor25";
    Dungeon1TileSetIndex[Dungeon1TileSetIndex["TexturedFloor26"] = 68] = "TexturedFloor26";
    Dungeon1TileSetIndex[Dungeon1TileSetIndex["TexturedFloor27"] = 69] = "TexturedFloor27";
    Dungeon1TileSetIndex[Dungeon1TileSetIndex["LeftTexturedWall1"] = 76] = "LeftTexturedWall1";
    Dungeon1TileSetIndex[Dungeon1TileSetIndex["RightTexturedWall1"] = 77] = "RightTexturedWall1";
    Dungeon1TileSetIndex[Dungeon1TileSetIndex["BottomTexturedWall1"] = 78] = "BottomTexturedWall1";
    Dungeon1TileSetIndex[Dungeon1TileSetIndex["BottomTexturedWall2"] = 79] = "BottomTexturedWall2";
    Dungeon1TileSetIndex[Dungeon1TileSetIndex["BottomTexturedWall3"] = 80] = "BottomTexturedWall3";
    Dungeon1TileSetIndex[Dungeon1TileSetIndex["DividerEndLeft"] = 82] = "DividerEndLeft";
    Dungeon1TileSetIndex[Dungeon1TileSetIndex["DividerHorizontal"] = 83] = "DividerHorizontal";
    Dungeon1TileSetIndex[Dungeon1TileSetIndex["DividerHorizontalTextured"] = 84] = "DividerHorizontalTextured";
    Dungeon1TileSetIndex[Dungeon1TileSetIndex["DividerEndRight"] = 85] = "DividerEndRight";
    Dungeon1TileSetIndex[Dungeon1TileSetIndex["DividerEndTop"] = 86] = "DividerEndTop";
    Dungeon1TileSetIndex[Dungeon1TileSetIndex["TexturedFloor28"] = 87] = "TexturedFloor28";
    Dungeon1TileSetIndex[Dungeon1TileSetIndex["TexturedFloor29"] = 88] = "TexturedFloor29";
    Dungeon1TileSetIndex[Dungeon1TileSetIndex["LeftTexturedWall2"] = 95] = "LeftTexturedWall2";
    Dungeon1TileSetIndex[Dungeon1TileSetIndex["RightTexturedWall2"] = 96] = "RightTexturedWall2";
    Dungeon1TileSetIndex[Dungeon1TileSetIndex["TopGateCap"] = 99] = "TopGateCap";
    Dungeon1TileSetIndex[Dungeon1TileSetIndex["DividerTopLeftCorner"] = 101] = "DividerTopLeftCorner";
    Dungeon1TileSetIndex[Dungeon1TileSetIndex["DividerTopRightCorner"] = 102] = "DividerTopRightCorner";
    Dungeon1TileSetIndex[Dungeon1TileSetIndex["DividerVerticalTextured"] = 105] = "DividerVerticalTextured";
    Dungeon1TileSetIndex[Dungeon1TileSetIndex["TexturedFloor30"] = 107] = "TexturedFloor30";
    Dungeon1TileSetIndex[Dungeon1TileSetIndex["TexturedFloor31"] = 108] = "TexturedFloor31";
    Dungeon1TileSetIndex[Dungeon1TileSetIndex["LeftTexturedWall3"] = 114] = "LeftTexturedWall3";
    Dungeon1TileSetIndex[Dungeon1TileSetIndex["RightTexturedWall3"] = 115] = "RightTexturedWall3";
    Dungeon1TileSetIndex[Dungeon1TileSetIndex["TopGate"] = 118] = "TopGate";
    Dungeon1TileSetIndex[Dungeon1TileSetIndex["DividerBottomLeftCorner"] = 120] = "DividerBottomLeftCorner";
    Dungeon1TileSetIndex[Dungeon1TileSetIndex["DividerBottomRightCorner"] = 121] = "DividerBottomRightCorner";
    Dungeon1TileSetIndex[Dungeon1TileSetIndex["DividerVertical"] = 124] = "DividerVertical";
    Dungeon1TileSetIndex[Dungeon1TileSetIndex["BottomGate"] = 139] = "BottomGate";
    Dungeon1TileSetIndex[Dungeon1TileSetIndex["DividerEndBottom"] = 143] = "DividerEndBottom";
    Dungeon1TileSetIndex[Dungeon1TileSetIndex["TopGateLocked"] = 157] = "TopGateLocked";
    Dungeon1TileSetIndex[Dungeon1TileSetIndex["BottomGateCap"] = 158] = "BottomGateCap";
    Dungeon1TileSetIndex[Dungeon1TileSetIndex["BottomGateLocked"] = 177] = "BottomGateLocked";
    Dungeon1TileSetIndex[Dungeon1TileSetIndex["PillarTop"] = 186] = "PillarTop";
    Dungeon1TileSetIndex[Dungeon1TileSetIndex["PillarBottom"] = 205] = "PillarBottom";
    Dungeon1TileSetIndex[Dungeon1TileSetIndex["RightGate"] = 209] = "RightGate";
    Dungeon1TileSetIndex[Dungeon1TileSetIndex["RightGateCap"] = 210] = "RightGateCap";
    Dungeon1TileSetIndex[Dungeon1TileSetIndex["RightGateLocked"] = 213] = "RightGateLocked";
    Dungeon1TileSetIndex[Dungeon1TileSetIndex["LeftGateCap"] = 228] = "LeftGateCap";
    Dungeon1TileSetIndex[Dungeon1TileSetIndex["LeftGate"] = 229] = "LeftGate";
    Dungeon1TileSetIndex[Dungeon1TileSetIndex["LeftGateLocked"] = 233] = "LeftGateLocked";
})(Dungeon1TileSetIndex = exports.Dungeon1TileSetIndex || (exports.Dungeon1TileSetIndex = {}));
;
exports.Dungeon1TileSetIndexWallWeights = {
    TopWall: [
        { index: Dungeon1TileSetIndex.TopNormalWall, weight: 4 },
        { index: [Dungeon1TileSetIndex.TopTexturedWall1, Dungeon1TileSetIndex.TopTexturedWall2, Dungeon1TileSetIndex.TopTexturedWall3], weight: 1 }
    ],
    RightWall: [
        { index: Dungeon1TileSetIndex.RightNormalWall, weight: 4 },
        { index: [Dungeon1TileSetIndex.RightTexturedWall1, Dungeon1TileSetIndex.RightTexturedWall2, Dungeon1TileSetIndex.RightTexturedWall3], weight: 1 }
    ],
    BottomWall: [
        { index: Dungeon1TileSetIndex.BottomNormalWall, weight: 4 },
        { index: [Dungeon1TileSetIndex.BottomTexturedWall1, Dungeon1TileSetIndex.BottomTexturedWall2, Dungeon1TileSetIndex.BottomTexturedWall3], weight: 1 }
    ],
    LeftWall: [
        { index: Dungeon1TileSetIndex.LeftNormalWall, weight: 4 },
        { index: [Dungeon1TileSetIndex.LeftTexturedWall1, Dungeon1TileSetIndex.LeftTexturedWall2, Dungeon1TileSetIndex.LeftTexturedWall3], weight: 1 }
    ]
};


/***/ }),

/***/ "./src/models/index.ts":
/*!*****************************!*\
  !*** ./src/models/index.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(/*! ./Dungeon */ "./src/models/Dungeon.ts"), exports);
__exportStar(__webpack_require__(/*! ./Player */ "./src/models/Player.ts"), exports);
__exportStar(__webpack_require__(/*! ./Room */ "./src/models/Room.ts"), exports);
__exportStar(__webpack_require__(/*! ./TileSetIndex */ "./src/models/TileSetIndex.ts"), exports);


/***/ }),

/***/ "./src/scenes/boot.scene.ts":
/*!**********************************!*\
  !*** ./src/scenes/boot.scene.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.BootScene = exports.BOOT_SCENE_KEY = void 0;
var main_menu_scene_1 = __webpack_require__(/*! ./main-menu.scene */ "./src/scenes/main-menu.scene.ts");
var utils_1 = __webpack_require__(/*! ../utils */ "./src/utils/index.ts");
exports.BOOT_SCENE_KEY = 'BOOT';
var sceneConfig = {
    active: false,
    visible: false,
    key: exports.BOOT_SCENE_KEY
};
var BootScene = /** @class */ (function (_super) {
    __extends(BootScene, _super);
    function BootScene() {
        return _super.call(this, sceneConfig) || this;
    }
    ////////////////////
    // Public Methods //
    ////////////////////
    BootScene.prototype.preload = function () {
        var _this = this;
        var halfWidth = utils_1.getGameWidth(this) * 0.5;
        var halfHeight = utils_1.getGameHeight(this) * 0.5;
        var progressBarContainer = this.add.rectangle(halfWidth, halfHeight, 400, 100, 0xffffff);
        var progressBar = this.add.rectangle(halfWidth + 20 - progressBarContainer.width * 0.5, halfHeight, 10, 100 - 20, 0xc1c1c1);
        var loadingText = this.add.text(halfWidth, halfHeight - 85, 'Loading...').setFontSize(24);
        loadingText.setX(halfWidth - (loadingText.width / 2));
        var percentText = this.add.text(halfWidth, halfHeight + 60, '').setFontSize(24);
        this.load.on('progress', function (progressValue) {
            progressBar.width = (400 - 30) * progressValue;
            percentText.setText(progressValue * 100 + "%");
            percentText.setX((utils_1.getGameWidth(_this) * 0.5) - (percentText.width / 2));
        });
        this.load.once('complete', function () {
            _this.load.off('progress');
            loadingText.destroy();
            percentText.destroy();
            progressBar.destroy();
            progressBarContainer.destroy();
            _this.scene.start(main_menu_scene_1.MAIN_MENU_SCENE_KEY);
        });
        this.loadAssets();
    };
    /////////////////////
    // Private Methods //
    /////////////////////
    BootScene.prototype.loadAssets = function () {
        this.load.json('assets', 'assets/json/assets.json');
        var assets = this.cache.json.get('assets');
        // for (const assetType of Object.keys(assets)) {
        //     for (const assetKey of Object.keys(assets[assetType])) {
        //         const asset = assets[assetType][assetKey];
        //         switch(assetType) {
        //             case 'atlas':
        //             case 'unityAtlas':
        //             case 'bitmapFont':
        //             case 'spritesheet':
        //             case 'multiatlas':
        //                 // TODO
        //                 break;
        //             case 'audio':
        //                 // TODO
        //                 break;
        //             case 'html':
        //                 // TODO
        //                 break;
        //             default:
        //                 // TODO
        //                 break;
        //         }
        //     }
        // }
    };
    return BootScene;
}(Phaser.Scene));
exports.BootScene = BootScene;


/***/ }),

/***/ "./src/scenes/dungeon.scene.ts":
/*!*************************************!*\
  !*** ./src/scenes/dungeon.scene.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.DungeonScene = exports.DUNGEON_SCENE_KEY = void 0;
var Dungeon_1 = __webpack_require__(/*! ../models/Dungeon */ "./src/models/Dungeon.ts");
var lodash_1 = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
var models_1 = __webpack_require__(/*! ../models */ "./src/models/index.ts");
exports.DUNGEON_SCENE_KEY = 'DUNGEON';
var sceneConfig = {
    active: false,
    visible: false,
    key: exports.DUNGEON_SCENE_KEY,
};
var DungeonScene = /** @class */ (function (_super) {
    __extends(DungeonScene, _super);
    function DungeonScene() {
        var _this = _super.call(this, sceneConfig) || this;
        _this.scenes = [];
        _this.dungeon = new Dungeon_1.Dungeon();
        _this.player = new models_1.Player();
        return _this;
    }
    ////////////////////////////
    // Built-in Scene Methods //
    ////////////////////////////
    DungeonScene.prototype.preload = function () {
        // TODO
    };
    DungeonScene.prototype.create = function () {
        this.reset();
    };
    ////////////////////
    // Public Methods //
    ////////////////////
    DungeonScene.prototype.stuff = function () { };
    /////////////////////
    // Private Methods //
    /////////////////////
    DungeonScene.prototype.reset = function () {
        var spawnRoom = lodash_1.chain(this.dungeon.rooms)
            .flatMap()
            .find(function (room) { return room != null && room.isSpawn; })
            .valueOf();
        this.scene.launch('ROOM', { source: spawnRoom, player: this.player, active: false, visible: false });
    };
    return DungeonScene;
}(Phaser.Scene));
exports.DungeonScene = DungeonScene;


/***/ }),

/***/ "./src/scenes/index.ts":
/*!*****************************!*\
  !*** ./src/scenes/index.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(/*! ./boot.scene */ "./src/scenes/boot.scene.ts"), exports);
__exportStar(__webpack_require__(/*! ./main-menu.scene */ "./src/scenes/main-menu.scene.ts"), exports);
__exportStar(__webpack_require__(/*! ./dungeon.scene */ "./src/scenes/dungeon.scene.ts"), exports);
__exportStar(__webpack_require__(/*! ./room.scene */ "./src/scenes/room.scene.ts"), exports);


/***/ }),

/***/ "./src/scenes/main-menu.scene.ts":
/*!***************************************!*\
  !*** ./src/scenes/main-menu.scene.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.MainMenuScene = exports.MAIN_MENU_SCENE_KEY = void 0;
var ui_1 = __webpack_require__(/*! ../ui */ "./src/ui/index.ts");
var dungeon_scene_1 = __webpack_require__(/*! ./dungeon.scene */ "./src/scenes/dungeon.scene.ts");
exports.MAIN_MENU_SCENE_KEY = 'MAIN_MENU';
var sceneConfig = {
    active: false,
    visible: false,
    key: exports.MAIN_MENU_SCENE_KEY
};
var MainMenuScene = /** @class */ (function (_super) {
    __extends(MainMenuScene, _super);
    function MainMenuScene() {
        return _super.call(this, sceneConfig) || this;
    }
    MainMenuScene.prototype.create = function () {
        var _this = this;
        var startGameButton = new ui_1.Button({
            scene: this,
            x: 100,
            y: 150,
            text: 'Start Game',
            onClick: function () {
                _this.scene.start(dungeon_scene_1.DUNGEON_SCENE_KEY);
            }
        });
    };
    return MainMenuScene;
}(Phaser.Scene));
exports.MainMenuScene = MainMenuScene;


/***/ }),

/***/ "./src/scenes/room.scene.ts":
/*!**********************************!*\
  !*** ./src/scenes/room.scene.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoomScene = exports.ROOM_SCENE_KEY = void 0;
var models_1 = __webpack_require__(/*! ../models */ "./src/models/index.ts");
var utils_1 = __webpack_require__(/*! ../utils */ "./src/utils/index.ts");
exports.ROOM_SCENE_KEY = 'ROOM';
var sceneConfig = {
    active: false,
    visible: false,
    key: exports.ROOM_SCENE_KEY
};
var roomTileWidth = 23;
var roomTileHeight = 13;
var tileSize = 48;
var groundLayerName = 'groundLayer';
var stuffLayerName = 'stuffLayer';
;
var RoomScene = /** @class */ (function (_super) {
    __extends(RoomScene, _super);
    function RoomScene() {
        return _super.call(this, sceneConfig) || this;
    }
    ////////////////////////////
    // Built-in Scene Methods //
    ////////////////////////////
    RoomScene.prototype.init = function () {
        // TODO
    };
    RoomScene.prototype.preload = function () {
        var _this = this;
        this.load.image('tiles', 'assets/img/tilesheets/dungeon-1.png');
        this.load.spritesheet('player', 'assets/img/spritesheets/rogue.png', { frameWidth: 30, frameHeight: 30 });
        this.scale.on('resize', function (gameSize) {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
            var currentX = (_b = (_a = _this.groundLayer) === null || _a === void 0 ? void 0 : _a.x) !== null && _b !== void 0 ? _b : 0;
            var currentY = (_d = (_c = _this.groundLayer) === null || _c === void 0 ? void 0 : _c.y) !== null && _d !== void 0 ? _d : 0;
            var currentPlayerX = (_g = (_f = (_e = _this.player) === null || _e === void 0 ? void 0 : _e.sprite) === null || _f === void 0 ? void 0 : _f.x) !== null && _g !== void 0 ? _g : 0;
            var currentPlayerY = (_k = (_j = (_h = _this.player) === null || _h === void 0 ? void 0 : _h.sprite) === null || _j === void 0 ? void 0 : _j.y) !== null && _k !== void 0 ? _k : 0;
            var layerXY = _this.getRoomPosition();
            (_l = _this.groundLayer) === null || _l === void 0 ? void 0 : _l.setPosition(layerXY.topLeft.x, layerXY.topLeft.y);
            (_o = (_m = _this.player) === null || _m === void 0 ? void 0 : _m.sprite) === null || _o === void 0 ? void 0 : _o.setPosition(layerXY.topLeft.x + (currentPlayerX - currentX), layerXY.topLeft.y + (currentPlayerY - currentY));
        });
    };
    RoomScene.prototype.create = function (_a) {
        var source = _a.source, player = _a.player, entranceDirection = _a.entranceDirection;
        this.player = player;
        this.setUpRoom(source, entranceDirection);
    };
    RoomScene.prototype.update = function () {
        var _a;
        (_a = this.player) === null || _a === void 0 ? void 0 : _a.update();
    };
    ////////////////////
    // Public Methods //
    ////////////////////
    /////////////////////
    // Private Methods //
    /////////////////////
    RoomScene.prototype.setUpRoom = function (source, entranceDirection) {
        var _this = this;
        var _a, _b;
        var tileMap = this.make.tilemap({ tileWidth: tileSize, tileHeight: tileSize, width: roomTileWidth, height: roomTileHeight });
        var tileSet = tileMap.addTilesetImage('tiles', undefined, 48, 48, 1, 2);
        var roomPosition = this.getRoomPosition();
        this.groundLayer = tileMap.createBlankDynamicLayer(groundLayerName, tileSet, roomPosition.topLeft.x, roomPosition.topLeft.y);
        this.stuffLayer = tileMap.createBlankDynamicLayer(stuffLayerName, tileSet, roomPosition.topLeft.x, roomPosition.topLeft.y);
        if (Object.keys(source.layers).length > 0) {
            // if this room has already had layers generated for it, load them in instead of generating new ones
            for (var _i = 0, _c = source.layers[groundLayerName]; _i < _c.length; _i++) {
                var tile = _c[_i];
                this.groundLayer.putTileAt(tile.tileIndex, tile.x, tile.y);
            }
            for (var _d = 0, _e = source.layers[stuffLayerName]; _d < _e.length; _d++) {
                var tile = _e[_d];
                this.stuffLayer.putTileAt(tile.tileIndex, tile.x, tile.y);
            }
        }
        else {
            // fill in non-wall ground layer with floor pieces
            this.groundLayer.weightedRandomize(2, 2, tileMap.width - 4, tileMap.height - 4, [
                { index: models_1.Dungeon1TileSetIndex.NormalFloor, weight: 9.25 },
                { index: [models_1.Dungeon1TileSetIndex.TexturedFloor1], weight: 0.75 }
            ]);
            // add corner pieces
            this.groundLayer.putTileAt(models_1.Dungeon1TileSetIndex.TopLeftCorner, 1, 1);
            this.groundLayer.putTileAt(models_1.Dungeon1TileSetIndex.TopRightCorner, tileMap.width - 2, 1);
            this.groundLayer.putTileAt(models_1.Dungeon1TileSetIndex.BottomLeftCorner, 1, tileMap.height - 2);
            this.groundLayer.putTileAt(models_1.Dungeon1TileSetIndex.BottomRightCorner, tileMap.width - 2, tileMap.height - 2);
            // add randomized wall pieces and also doors if there's connected rooms
            // top
            this.groundLayer.weightedRandomize(2, 1, tileMap.width - 4, 1, models_1.Dungeon1TileSetIndexWallWeights.TopWall);
            if (source.connectedRooms.Above) {
                this.groundLayer.putTileAt(models_1.Dungeon1TileSetIndex.TopGate, Math.floor(tileMap.width / 2), 1);
                this.groundLayer.putTileAt(models_1.Dungeon1TileSetIndex.TopGateCap, Math.floor(tileMap.width / 2), 0);
            }
            // right
            this.groundLayer.weightedRandomize(tileMap.width - 2, 2, 1, tileMap.height - 4, models_1.Dungeon1TileSetIndexWallWeights.RightWall);
            if (source.connectedRooms.Right) {
                this.groundLayer.putTileAt(models_1.Dungeon1TileSetIndex.RightGate, tileMap.width - 2, Math.floor(tileMap.height / 2));
                this.groundLayer.putTileAt(models_1.Dungeon1TileSetIndex.RightGateCap, tileMap.width - 1, Math.floor(tileMap.height / 2));
            }
            // bottom
            this.groundLayer.weightedRandomize(2, tileMap.height - 2, tileMap.width - 4, 1, models_1.Dungeon1TileSetIndexWallWeights.BottomWall);
            if (source.connectedRooms.Below) {
                this.groundLayer.putTileAt(models_1.Dungeon1TileSetIndex.BottomGate, Math.floor(tileMap.width / 2), tileMap.height - 2);
                this.groundLayer.putTileAt(models_1.Dungeon1TileSetIndex.BottomGateCap, Math.floor(tileMap.width / 2), tileMap.height - 1);
            }
            // left
            this.groundLayer.weightedRandomize(1, 2, 1, tileMap.height - 4, models_1.Dungeon1TileSetIndexWallWeights.LeftWall);
            if (source.connectedRooms.Left) {
                this.groundLayer.putTileAt(models_1.Dungeon1TileSetIndex.LeftGate, 1, Math.floor(tileMap.height / 2));
                this.groundLayer.putTileAt(models_1.Dungeon1TileSetIndex.LeftGateCap, 0, Math.floor(tileMap.height / 2));
            }
            switch (source.roomType) {
                case models_1.RoomType.Normal:
                case models_1.RoomType.Pillar:
                case models_1.RoomType.Divided:
                case models_1.RoomType.Chest:
                case models_1.RoomType.Hole:
                    // hole corners
                    this.groundLayer.putTileAt(models_1.Dungeon1TileSetIndex.HoleTopLeftCorner, 4, 4);
                    this.groundLayer.putTileAt(models_1.Dungeon1TileSetIndex.HoleTopRightCorner, tileMap.width - 5, 4);
                    this.groundLayer.putTileAt(models_1.Dungeon1TileSetIndex.HoleBottomLeftCorner, 4, tileMap.height - 5);
                    this.groundLayer.putTileAt(models_1.Dungeon1TileSetIndex.HoleBottomRightCorner, tileMap.width - 5, tileMap.height - 5);
                    // top wall
                    this.groundLayer.weightedRandomize(5, 4, tileMap.width - 10, 1, models_1.Dungeon1TileSetIndexWallWeights.BottomWall);
                    // right wall
                    this.groundLayer.weightedRandomize(tileMap.width - 5, 5, 1, tileMap.height - 10, models_1.Dungeon1TileSetIndexWallWeights.LeftWall);
                    // bottom wall
                    this.groundLayer.weightedRandomize(5, tileMap.height - 5, tileMap.width - 10, 1, models_1.Dungeon1TileSetIndexWallWeights.TopWall);
                    // left wall
                    this.groundLayer.weightedRandomize(4, 5, 1, tileMap.height - 10, models_1.Dungeon1TileSetIndexWallWeights.RightWall);
                    // this.groundLayer.weightedRandomize
                    this.groundLayer.fill(models_1.Dungeon1TileSetIndex.Empty, 5, 5, tileMap.width - 10, tileMap.height - 10);
                    break;
            }
            // persist the layers we built to the room
            source.layers[groundLayerName] = [];
            this.groundLayer.forEachTile(function (tile) {
                source.layers[groundLayerName].push({ tileIndex: tile.index, x: tile.x, y: tile.y });
            });
            source.layers[stuffLayerName] = [];
            this.stuffLayer.forEachTile(function (tile) {
                source.layers[stuffLayerName].push({ tileIndex: tile.index, x: tile.x, y: tile.y });
            });
        }
        this.groundLayer.setTileIndexCallback(models_1.Dungeon1TileSetIndex.TopGate, function () {
            var _a;
            (_a = _this.player) === null || _a === void 0 ? void 0 : _a.freeze();
            var camera = _this.cameras.main;
            camera.fade(250, 0, 0, 0);
            camera.once('camerafadeoutcomplete', function () {
                var _a;
                (_a = _this.player) === null || _a === void 0 ? void 0 : _a.destroy();
                _this.scene.restart({ source: source.connectedRooms.Above, player: _this.player, entranceDirection: models_1.Direction.Below });
            });
        }, this);
        this.groundLayer.setTileIndexCallback(models_1.Dungeon1TileSetIndex.RightGate, function () {
            var _a;
            (_a = _this.player) === null || _a === void 0 ? void 0 : _a.freeze();
            var camera = _this.cameras.main;
            camera.fade(250, 0, 0, 0);
            camera.once('camerafadeoutcomplete', function () {
                var _a;
                (_a = _this.player) === null || _a === void 0 ? void 0 : _a.destroy();
                _this.scene.restart({ source: source.connectedRooms.Right, player: _this.player, entranceDirection: models_1.Direction.Left });
            });
        }, this);
        this.groundLayer.setTileIndexCallback(models_1.Dungeon1TileSetIndex.BottomGate, function () {
            var _a;
            (_a = _this.player) === null || _a === void 0 ? void 0 : _a.freeze();
            var camera = _this.cameras.main;
            camera.fade(250, 0, 0, 0);
            camera.once('camerafadeoutcomplete', function () {
                var _a;
                (_a = _this.player) === null || _a === void 0 ? void 0 : _a.destroy();
                _this.scene.restart({ source: source.connectedRooms.Below, player: _this.player, entranceDirection: models_1.Direction.Above });
            });
        }, this);
        this.groundLayer.setTileIndexCallback(models_1.Dungeon1TileSetIndex.LeftGate, function () {
            var _a;
            (_a = _this.player) === null || _a === void 0 ? void 0 : _a.freeze();
            var camera = _this.cameras.main;
            camera.fade(250, 0, 0, 0);
            camera.once('camerafadeoutcomplete', function () {
                var _a;
                (_a = _this.player) === null || _a === void 0 ? void 0 : _a.destroy();
                _this.scene.restart({ source: source.connectedRooms.Left, player: _this.player, entranceDirection: models_1.Direction.Right });
            });
        }, this);
        var playerStartingX = roomPosition.center.x;
        var playerStartingY = roomPosition.center.y;
        if (entranceDirection != null) {
            switch (entranceDirection) {
                case models_1.Direction.Left:
                    playerStartingX = roomPosition.topLeft.x + 120;
                    break;
                case models_1.Direction.Right:
                    playerStartingX = roomPosition.topRight.x - 120;
                    break;
                case models_1.Direction.Above:
                    playerStartingY = roomPosition.topLeft.y + 120;
                    break;
                case models_1.Direction.Below:
                    playerStartingY = roomPosition.bottomLeft.y - 120;
                    break;
            }
        }
        (_a = this.player) === null || _a === void 0 ? void 0 : _a.registerNewScene(this, playerStartingX, playerStartingY);
        // must wait for this until after registerNewScene, because a new sprite is spun up for each scene
        this.groundLayer.setCollisionByExclusion([
            -1,
            models_1.Dungeon1TileSetIndex.NormalFloor,
            models_1.Dungeon1TileSetIndex.TexturedFloor1
        ]);
        this.physics.add.collider((_b = this.player) === null || _b === void 0 ? void 0 : _b.sprite, this.groundLayer);
    };
    RoomScene.prototype.getRoomPosition = function () {
        var roomWidth = roomTileWidth * tileSize;
        var halfRoomWidth = roomWidth * 0.5;
        var roomHeight = roomTileHeight * tileSize;
        var halfRoomHeight = roomHeight * 0.5;
        var gameHeight = utils_1.getGameHeight(this);
        var halfGameHeight = gameHeight * 0.5;
        var gameWidth = utils_1.getGameWidth(this);
        var halfGameWidth = gameWidth * 0.5;
        var topY = Math.max(0, halfGameHeight - halfRoomHeight);
        var bottomY = halfGameHeight + halfRoomHeight;
        var leftX = Math.max(0, halfGameWidth - halfRoomWidth);
        var rightX = halfGameWidth + halfRoomWidth;
        var centerX = halfGameWidth;
        var centerY = halfGameHeight;
        return {
            center: { x: centerX, y: centerY },
            topLeft: { x: leftX, y: topY },
            topCenter: { x: centerX, y: topY },
            topRight: { x: rightX, y: topY },
            rightCenter: { x: rightX, y: centerY },
            bottomRight: { x: rightX, y: bottomY },
            bottomCenter: { x: centerX, y: bottomY },
            bottomLeft: { x: leftX, y: bottomY },
            leftCenter: { x: leftX, y: centerY }
        };
    };
    return RoomScene;
}(Phaser.Scene));
exports.RoomScene = RoomScene;


/***/ }),

/***/ "./src/ui/button.ts":
/*!**************************!*\
  !*** ./src/ui/button.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = void 0;
var utils_1 = __webpack_require__(/*! ../utils */ "./src/utils/index.ts");
var Button = /** @class */ (function (_super) {
    __extends(Button, _super);
    function Button(_a) {
        var scene = _a.scene, x = _a.x, y = _a.y, text = _a.text, _b = _a.fontSize, fontSize = _b === void 0 ? 18 : _b, _c = _a.padding, padding = _c === void 0 ? 10 : _c, _d = _a.alignment, alignment = _d === void 0 ? 'center' : _d, _e = _a.onClick, onClick = _e === void 0 ? utils_1.noop : _e;
        var _this = _super.call(this, scene, x, y) || this;
        scene.add.existing(_this);
        _this.setOrigin(0, 0);
        _this.label = scene.add.text(x + padding, y + padding, text).setFontSize(fontSize).setAlign(alignment);
        _this.width = _this.label.width + (padding * 2);
        _this.height = _this.label.height + (padding * 2);
        _this.setInteractive({ useHandCursor: true })
            .on('pointerover', _this.enterButtonHoverState)
            .on('pointerout', _this.enterButtonRestState)
            .on('pointerdown', _this.enterButtonActiveState)
            .on('pointerup', _this.enterButtonHoverState)
            .on('pointerup', onClick);
        _this.enterButtonRestState();
        return _this;
    }
    Button.prototype.enterButtonActiveState = function () {
        this.label.setColor('#BBBBBB');
        this.setFillStyle(0x444444);
    };
    Button.prototype.enterButtonHoverState = function () {
        this.label.setColor('#000000');
        this.setFillStyle(0x888888);
    };
    Button.prototype.enterButtonRestState = function () {
        this.label.setColor('#FFFFFF');
        this.setFillStyle(0x888888);
    };
    return Button;
}(Phaser.GameObjects.Rectangle));
exports.Button = Button;


/***/ }),

/***/ "./src/ui/index.ts":
/*!*************************!*\
  !*** ./src/ui/index.ts ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(/*! ./button */ "./src/ui/button.ts"), exports);


/***/ }),

/***/ "./src/utils/helpers.ts":
/*!******************************!*\
  !*** ./src/utils/helpers.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.getGameHeight = exports.getGameWidth = void 0;
exports.getGameWidth = function (scene) {
    return scene.game.scale.width;
};
exports.getGameHeight = function (scene) {
    return scene.game.scale.height;
};


/***/ }),

/***/ "./src/utils/index.ts":
/*!****************************!*\
  !*** ./src/utils/index.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(/*! ./helpers */ "./src/utils/helpers.ts"), exports);
__exportStar(__webpack_require__(/*! ./noop */ "./src/utils/noop.ts"), exports);


/***/ }),

/***/ "./src/utils/noop.ts":
/*!***************************!*\
  !*** ./src/utils/noop.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.noop = void 0;
// tslint:disable-next-line: no-empty
exports.noop = function () { };


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZGVscy9EdW5nZW9uLnRzIiwid2VicGFjazovLy8uL3NyYy9tb2RlbHMvUGxheWVyLnRzIiwid2VicGFjazovLy8uL3NyYy9tb2RlbHMvUm9vbS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWxzL1RpbGVTZXRJbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWxzL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvYm9vdC5zY2VuZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL2R1bmdlb24uc2NlbmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lcy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL21haW4tbWVudS5zY2VuZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL3Jvb20uc2NlbmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL2J1dHRvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2hlbHBlcnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9ub29wLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLFFBQVEsb0JBQW9CO1FBQzVCO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsaUJBQWlCLDRCQUE0QjtRQUM3QztRQUNBO1FBQ0Esa0JBQWtC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QUMsSUFBSSxFQUFDLElBQUksRUFBQyxJQUFJLEVBQUMsSUFBSSxFQUFDLElBQUksQ0FBQztZQUNuRCxDQUFDLElBQUksRUFBQyxJQUFJLEVBQUMsSUFBSSxFQUFDLElBQUksRUFBQyxJQUFJLEVBQUMsSUFBSSxFQUFDLElBQUksRUFBQyxJQUFJLEVBQUMsSUFBSSxFQUFDLElBQUksQ0FBQztZQUNuRCxDQUFDLElBQUksRUFBQyxJQUFJLEVBQUMsSUFBSSxFQUFDLElBQUksRUFBQyxJQUFJLEVBQUMsSUFBSSxFQUFDLElBQUksRUFBQyxJQUFJLEVBQUMsSUFBSSxFQUFDLElBQUksQ0FBQztZQUNuRCxDQUFDLElBQUksRUFBQyxJQUFJLEVBQUMsSUFBSSxFQUFDLElBQUksRUFBQyxJQUFJLEVBQUMsSUFBSSxFQUFDLElBQUksRUFBQyxJQUFJLEVBQUMsSUFBSSxFQUFDLElBQUksQ0FBQztZQUNuRCxDQUFDLElBQUksRUFBQyxJQUFJLEVBQUMsSUFBSSxFQUFDLElBQUksRUFBQyxJQUFJLEVBQUMsSUFBSSxFQUFDLElBQUksRUFBQyxJQUFJLEVBQUMsSUFBSSxFQUFDLElBQUksQ0FBQztZQUNuRCxDQUFDLElBQUksRUFBQyxJQUFJLEVBQUMsSUFBSSxFQUFDLElBQUksRUFBQyxJQUFJLEVBQUMsSUFBSSxFQUFDLElBQUksRUFBQyxJQUFJLEVBQUMsSUFBSSxFQUFDLElBQUksQ0FBQztZQUNuRCxDQUFDLElBQUksRUFBQyxJQUFJLEVBQUMsSUFBSSxFQUFDLElBQUksRUFBQyxJQUFJLEVBQUMsSUFBSSxFQUFDLElBQUksRUFBQyxJQUFJLEVBQUMsSUFBSSxFQUFDLElBQUksQ0FBQztTQUN0RCxDQUFDO1FBR0UsaURBQWlEO1FBQ2pELHdFQUF3RTtRQUN4RSxJQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFD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SSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDL0IsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBRU8scUNBQW9CLEdBQTVCO1FBQ0ksSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDL0IsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBQ0wsYUFBQztBQUFELENBQUMsQ0FyQzJCLE1BQU0sQ0FBQyxXQUFXLENBQUMsU0FBUyxHQXFDdkQ7QUFyQ1ksd0JBQU07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNibkIsaUZBQXlCOzs7Ozs7Ozs7Ozs7Ozs7O0FDRVosb0JBQVksR0FBRyxVQUFDLEtBQW1CO0lBQzVDLE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDO0FBQ2xDLENBQUMsQ0FBQztBQUVXLHFCQUFhLEdBQUcsVUFBQyxLQUFtQjtJQUM3QyxPQUFPLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQztBQUNuQyxDQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNSRixzRkFBMEI7QUFDMUIsZ0ZBQXVCOzs7Ozs7Ozs7Ozs7Ozs7O0FDRHZCLHFDQUFxQztBQUN4QixZQUFJLEdBQUcsY0FBTyxDQUFDLENBQUMiLCJmaWxlIjoiYXBwLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJhcHBcIjogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbXCIuL3NyYy9tYWluLnRzXCIsXCJ2ZW5kb3JzXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwiaW1wb3J0ICogYXMgUGhhc2VyIGZyb20gJ3BoYXNlcic7XG5pbXBvcnQge1xuICAgIEJvb3RTY2VuZSxcbiAgICBNYWluTWVudVNjZW5lLFxuICAgIER1bmdlb25TY2VuZSxcbiAgICBSb29tU2NlbmVcbn0gZnJvbSAnLi9zY2VuZXMnO1xuXG5leHBvcnQgY2xhc3MgR2FtZSB7XG4gICAgcHVibGljIGdhbWU6IFBoYXNlci5HYW1lO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIGNvbnN0IGdhbWVDb25maWc6IFBoYXNlci5UeXBlcy5Db3JlLkdhbWVDb25maWcgPSB7XG4gICAgICAgICAgICB0aXRsZTogJ1Rlc3QnLFxuICAgICAgICAgICAgdHlwZTogUGhhc2VyLldFQkdMLFxuICAgICAgICAgICAgc2NhbGU6IHtcbiAgICAgICAgICAgICAgICBtb2RlOiBQaGFzZXIuU2NhbGUuU2NhbGVNb2Rlcy5SRVNJWkUsXG4gICAgICAgICAgICAgICAgd2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoLFxuICAgICAgICAgICAgICAgIGhlaWdodDogd2luZG93LmlubmVySGVpZ2h0XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2NlbmU6IFtcbiAgICAgICAgICAgICAgICBCb290U2NlbmUsICAvLyB0aGlzIG5lZWRzIHRvIGJlIGZpcnN0IHNvIGl0IGdldHMgbG9hZGVkIGZpcnN0LCB0aGUgb3JkZXIgb2YgdGhlIHJlc3QgZG9lc24ndCBtYXR0ZXJcbiAgICAgICAgICAgICAgICBNYWluTWVudVNjZW5lLFxuICAgICAgICAgICAgICAgIER1bmdlb25TY2VuZSxcbiAgICAgICAgICAgICAgICBSb29tU2NlbmVcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBwaHlzaWNzOiB7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDogJ2FyY2FkZScsXG4gICAgICAgICAgICAgICAgYXJjYWRlOiB7XG4gICAgICAgICAgICAgICAgICAgIGdyYXZpdHk6IHsgeTogMCB9LFxuICAgICAgICAgICAgICAgICAgICBkZWJ1ZzogdHJ1ZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwYXJlbnQ6ICdnYW1lJyxcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogMHgwZDA3MTFcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLmdhbWUgPSBuZXcgUGhhc2VyLkdhbWUoZ2FtZUNvbmZpZyk7XG4gICAgfVxufTtcbiIsImltcG9ydCB7IEdhbWUgfSBmcm9tICcuL2dhbWUnO1xuXG5leHBvcnQgY29uc3QgcnBnID0gbmV3IEdhbWUoKTtcbiIsImltcG9ydCB7IFJvb20sIElSb29tQ29vcmRpbmF0ZXMsIERpcmVjdGlvbiwgb3Bwb3NpdGVEaXJlY3Rpb24sIFJvb21UeXBlIH0gZnJvbSAnLi9Sb29tJztcblxuZXhwb3J0IGNsYXNzIER1bmdlb24ge1xuICAgIC8vIDEweDEwIGFycmF5IG9mIFJvb21zXG4gICAgcHVibGljIHJvb21zOiAoUm9vbSB8IG51bGwpW11bXSA9IFtcbiAgICAgICAgW251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLFxuICAgICAgICBbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sXG4gICAgICAgIFtudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSxcbiAgICAgICAgW251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLFxuICAgICAgICBbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sXG4gICAgICAgIFtudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSxcbiAgICAgICAgW251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLFxuICAgICAgICBbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sXG4gICAgICAgIFtudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSxcbiAgICAgICAgW251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdXG4gICAgXTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAvLyBnZXQgYSBudW1iZXIgMS04IGZvciBib3RoIFggYW5kIFkgc3RhcnQgY29vcmRzXG4gICAgICAgIC8vIHdlIGRvbid0IHdhbnQgMCBvciA5IGJlY2F1c2Ugd2Ugd2FudCBhbGwgNCBzaWRlcyB0byBiZSBvcGVuIGZvciBzcGF3blxuICAgICAgICBjb25zdCBzcGF3blggPSBNYXRoLm1pbig4LCBNYXRoLm1heCgxLCBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCkpKTtcbiAgICAgICAgY29uc3Qgc3Bhd25ZID0gTWF0aC5taW4oOCwgTWF0aC5tYXgoMSwgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApKSk7XG5cbiAgICAgICAgLy8gcmVnaXN0ZXIgc3Bhd24gcm9vbVxuICAgICAgICBjb25zdCBzcGF3blJvb20gPSBuZXcgUm9vbSh7IHg6IHNwYXduWCwgeTogc3Bhd25ZIH0pO1xuICAgICAgICBzcGF3blJvb20uaXNTcGF3biA9IHRydWU7XG4gICAgICAgIHRoaXMucm9vbXNbc3Bhd25ZXVtzcGF3blhdID0gc3Bhd25Sb29tO1xuXG4gICAgICAgIHRoaXMuZ2VuZXJhdGVDb25uZWN0ZWRSb29tcyhzcGF3blJvb20sIDIpO1xuICAgIH1cblxuXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgLy8gUHJpdmF0ZSBNZXRob2RzIC8vXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgLyoqXG4gICAgICogUmVjdXJzaXZlbHkgY3JlYXRlIGEgcGF0aCBvZiByb29tcy4gZm9yY2VEaXJlY3Rpb25zIHNob3VsZCBvbmx5IGJlIHVzZWQgb24gdGhlIGluaXRpYWwgY2FsbCBvZiB0aGlzIChmb3Igc3Bhd25Sb29tKVxuICAgICAqL1xuICAgIHByaXZhdGUgZ2VuZXJhdGVDb25uZWN0ZWRSb29tcyhzb3VyY2VSb29tOiBSb29tLCBmb3JjZVJvb21Db25uZWN0aW9ucz86IG51bWJlcik6IHZvaWQge1xuICAgICAgICBjb25zdCByb29tTWFwOiB7IFtrZXkgaW4gRGlyZWN0aW9uXTogSVJvb21Db29yZGluYXRlcyB9ID0ge1xuICAgICAgICAgICAgW0RpcmVjdGlvbi5MZWZ0XTogeyB4OiBzb3VyY2VSb29tLnJvb21Db29yZGluYXRlcy54IC0gMSwgeTogc291cmNlUm9vbS5yb29tQ29vcmRpbmF0ZXMueSB9LFxuICAgICAgICAgICAgW0RpcmVjdGlvbi5SaWdodF06IHsgeDogc291cmNlUm9vbS5yb29tQ29vcmRpbmF0ZXMueCArIDEsIHk6IHNvdXJjZVJvb20ucm9vbUNvb3JkaW5hdGVzLnkgfSxcbiAgICAgICAgICAgIFtEaXJlY3Rpb24uQWJvdmVdOiB7IHg6IHNvdXJjZVJvb20ucm9vbUNvb3JkaW5hdGVzLngsIHk6IHNvdXJjZVJvb20ucm9vbUNvb3JkaW5hdGVzLnkgLSAxIH0sXG4gICAgICAgICAgICBbRGlyZWN0aW9uLkJlbG93XTogeyB4OiBzb3VyY2VSb29tLnJvb21Db29yZGluYXRlcy54LCB5OiBzb3VyY2VSb29tLnJvb21Db29yZGluYXRlcy55ICsgMSB9XG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgcG9zc2libGVDb25uZWN0aW9uczogRGlyZWN0aW9uW10gPSBbXTtcbiAgICAgICAgaWYgKHJvb21NYXBbRGlyZWN0aW9uLkxlZnRdLnggPj0gMCAmJiB0aGlzLnJvb21zW3Jvb21NYXBbRGlyZWN0aW9uLkxlZnRdLnldW3Jvb21NYXBbRGlyZWN0aW9uLkxlZnRdLnhdID09PSBudWxsKSB7XG4gICAgICAgICAgICBwb3NzaWJsZUNvbm5lY3Rpb25zLnB1c2goRGlyZWN0aW9uLkxlZnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHJvb21NYXBbRGlyZWN0aW9uLlJpZ2h0XS54IDw9IDkgJiYgdGhpcy5yb29tc1tyb29tTWFwW0RpcmVjdGlvbi5SaWdodF0ueV1bcm9vbU1hcFtEaXJlY3Rpb24uUmlnaHRdLnhdID09PSBudWxsKSB7XG4gICAgICAgICAgICBwb3NzaWJsZUNvbm5lY3Rpb25zLnB1c2goRGlyZWN0aW9uLlJpZ2h0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChyb29tTWFwW0RpcmVjdGlvbi5BYm92ZV0ueSA+PSAwICYmIHRoaXMucm9vbXNbcm9vbU1hcFtEaXJlY3Rpb24uQWJvdmVdLnldW3Jvb21NYXBbRGlyZWN0aW9uLkFib3ZlXS54XSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcG9zc2libGVDb25uZWN0aW9ucy5wdXNoKERpcmVjdGlvbi5BYm92ZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocm9vbU1hcFtEaXJlY3Rpb24uQmVsb3ddLnkgPD0gOSAmJiB0aGlzLnJvb21zW3Jvb21NYXBbRGlyZWN0aW9uLkJlbG93XS55XVtyb29tTWFwW0RpcmVjdGlvbi5CZWxvd10ueF0gPT09IG51bGwpIHtcbiAgICAgICAgICAgIHBvc3NpYmxlQ29ubmVjdGlvbnMucHVzaChEaXJlY3Rpb24uQmVsb3cpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY29ubmVjdGVkUm9vbXNUb0dlbmVyYXRlID0gTWF0aC5tYXgoZm9yY2VSb29tQ29ubmVjdGlvbnMgfHwgMCwgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKHBvc3NpYmxlQ29ubmVjdGlvbnMubGVuZ3RoICsgMSkpKTtcbiAgICAgICAgaWYgKGNvbm5lY3RlZFJvb21zVG9HZW5lcmF0ZSA9PT0gMCkge1xuICAgICAgICAgICAgc291cmNlUm9vbS5pc0RlYWRFbmQgPSB0cnVlO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbmV3Um9vbXM6IFJvb21bXSA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbm5lY3RlZFJvb21zVG9HZW5lcmF0ZTsgaSsrKSB7XG4gICAgICAgICAgICAvLyBnZXQgb25lIG9mIHRoZSBkaXJlY3Rpb25zIHJhbmRvbWx5IGJ5IGluZGV4XG4gICAgICAgICAgICBjb25zdCBkaXJlY3Rpb25Ub1VzZSA9IHBvc3NpYmxlQ29ubmVjdGlvbnMuc3BsaWNlKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHBvc3NpYmxlQ29ubmVjdGlvbnMubGVuZ3RoKSwgMSlbMF07XG4gICAgICAgICAgICBjb25zdCBuZXdSb29tQ29vcmRpbmF0ZXMgPSByb29tTWFwW2RpcmVjdGlvblRvVXNlXTtcbiAgICAgICAgICAgIGNvbnN0IG5ld1Jvb20gPSBuZXcgUm9vbShuZXdSb29tQ29vcmRpbmF0ZXMpO1xuXG4gICAgICAgICAgICBjb25zdCByb29tVHlwZSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIE9iamVjdC5rZXlzKFJvb21UeXBlKS5maWx0ZXIoeCA9PiAhcGFyc2VJbnQoeCkpLmxlbmd0aCkgYXMgUm9vbVR5cGU7XG4gICAgICAgICAgICBuZXdSb29tLnJvb21UeXBlID0gcm9vbVR5cGU7XG5cbiAgICAgICAgICAgIG5ld1Jvb21zLnB1c2gobmV3Um9vbSk7XG4gICAgICAgICAgICBzb3VyY2VSb29tLmNvbm5lY3RlZFJvb21zW2RpcmVjdGlvblRvVXNlXSA9IG5ld1Jvb207IC8vIGxldCB0aGUgc291cmNlIHJvb20ga25vdyBpdCBoYXMgYSBjb25uZWN0aW9uIHRvIHRoZSBuZXcgcm9vbSBpbiB0aGlzIGRpcmVjdGlvblxuICAgICAgICAgICAgbmV3Um9vbS5jb25uZWN0ZWRSb29tc1tvcHBvc2l0ZURpcmVjdGlvbltkaXJlY3Rpb25Ub1VzZV1dID0gc291cmNlUm9vbTsgLy8gbGV0IHRoZSBuZXcgcm9vbSBrbm93IGl0IGhhcyBhIGNvbm5lY3Rpb24gdG8gdGhlIHNvdXJjZSByb29tIGluIHRoZSBvcHBvc2l0ZSBkaXJlY3Rpb25cblxuICAgICAgICAgICAgdGhpcy5yb29tc1tuZXdSb29tLnJvb21Db29yZGluYXRlcy55XVtuZXdSb29tLnJvb21Db29yZGluYXRlcy54XSA9IG5ld1Jvb207IC8vIHJlZ2lzdGVyIHRoZSBuZXcgcm9vbSBpbiB0aGUgcm9vbSBtYXBcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAoY29uc3QgbmV3Um9vbSBvZiBuZXdSb29tcykge1xuICAgICAgICAgICAgdGhpcy5nZW5lcmF0ZUNvbm5lY3RlZFJvb21zKG5ld1Jvb20pO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgUm9vbVNjZW5lIH0gZnJvbSAnLi4vc2NlbmVzJztcblxuY29uc3QgYmFzZVNwZWVkID0gMzAwO1xuXG5leHBvcnQgY2xhc3MgUGxheWVyIHtcbiAgICBwdWJsaWMgc3ByaXRlPzogUGhhc2VyLkdhbWVPYmplY3RzLlNwcml0ZTtcblxuICAgIHByaXZhdGUga2V5cz86IFBoYXNlci5UeXBlcy5JbnB1dC5LZXlib2FyZC5DdXJzb3JLZXlzO1xuICAgIHByaXZhdGUgc2NlbmU/OiBQaGFzZXIuU2NlbmU7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgLy8gVE9ET1xuICAgIH1cblxuICAgIHB1YmxpYyBkZXN0cm95KCk6IHZvaWQge1xuICAgICAgICB0aGlzLnNwcml0ZT8uZGVzdHJveSgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBmcmVlemUoKTogdm9pZCB7XG4gICAgICAgICh0aGlzLnNwcml0ZT8uYm9keSBhcyBQaGFzZXIuUGh5c2ljcy5BcmNhZGUuQm9keSkubW92ZXMgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVnaXN0ZXJOZXdTY2VuZShzY2VuZTogUm9vbVNjZW5lLCBzdGFydGluZ1g6IG51bWJlciwgc3RhcnRpbmdZOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5zY2VuZSA9IHNjZW5lO1xuXG4gICAgICAgIGNvbnN0IGFuaW1zID0gdGhpcy5zY2VuZS5hbmltcztcblxuICAgICAgICBhbmltcy5jcmVhdGUoe1xuICAgICAgICAgICAga2V5OiAncGxheWVyLXdhbGsnLFxuICAgICAgICAgICAgZnJhbWVzOiBhbmltcy5nZW5lcmF0ZUZyYW1lTnVtYmVycygncGxheWVyJywgeyBzdGFydDogMCwgZW5kOiAyIH0pLFxuICAgICAgICAgICAgZnJhbWVSYXRlOiA4LFxuICAgICAgICAgICAgcmVwZWF0OiAtMVxuICAgICAgICB9KTtcblxuICAgICAgICBhbmltcy5jcmVhdGUoe1xuICAgICAgICAgICAga2V5OiAncGxheWVyLXdhbGstYmFjaycsXG4gICAgICAgICAgICBmcmFtZXM6IGFuaW1zLmdlbmVyYXRlRnJhbWVOdW1iZXJzKCdwbGF5ZXInLCB7IHN0YXJ0OiA4LCBlbmQ6IDEwIH0pLFxuICAgICAgICAgICAgZnJhbWVSYXRlOiA4LFxuICAgICAgICAgICAgcmVwZWF0OiAtMVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnNwcml0ZSA9IHNjZW5lLnBoeXNpY3MuYWRkXG4gICAgICAgICAgICAuc3ByaXRlKHN0YXJ0aW5nWCwgc3RhcnRpbmdZLCAncGxheWVyJywgMClcbiAgICAgICAgICAgIC5zZXRTaXplKDUsIDUpXG4gICAgICAgICAgICAuc2V0T2Zmc2V0KDE1KTtcblxuICAgICAgICB0aGlzLmtleXMgPSBzY2VuZS5pbnB1dC5rZXlib2FyZC5jcmVhdGVDdXJzb3JLZXlzKCk7XG4gICAgfVxuXG4gICAgcHVibGljIHVwZGF0ZSgpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgYm9keSA9IHRoaXMuc3ByaXRlPy5ib2R5IGFzIFBoYXNlci5QaHlzaWNzLkFyY2FkZS5Cb2R5O1xuICAgICAgICBpZiAoYm9keSAhPSBudWxsKSB7XG4gICAgICAgICAgICBib2R5LnNldFZlbG9jaXR5KDApO1xuICAgICAgICAgICAgaWYgKHRoaXMua2V5cz8ubGVmdD8uaXNEb3duKSB7XG4gICAgICAgICAgICAgICAgYm9keS5zZXRWZWxvY2l0eVgoLWJhc2VTcGVlZCk7XG4gICAgICAgICAgICAgICAgdGhpcy5zcHJpdGU/LnNldEZsaXBYKHRydWUpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmtleXM/LnJpZ2h0Py5pc0Rvd24pIHtcbiAgICAgICAgICAgICAgICBib2R5LnNldFZlbG9jaXR5WChiYXNlU3BlZWQpO1xuICAgICAgICAgICAgICAgIHRoaXMuc3ByaXRlPy5zZXRGbGlwWChmYWxzZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmtleXM/LnVwPy5pc0Rvd24pIHtcbiAgICAgICAgICAgICAgICBib2R5LnNldFZlbG9jaXR5WSgtYmFzZVNwZWVkKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5rZXlzPy5kb3duPy5pc0Rvd24pIHtcbiAgICAgICAgICAgICAgICBib2R5LnNldFZlbG9jaXR5WShiYXNlU3BlZWQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBub3JtYWxpemUgYW5kIHNjYWxlIHRoZSB2ZWxvY2l0eSBzbyB0aGF0IHNwcml0ZSBjYW4ndCBtb3ZlIGZhc3RlciBhbG9uZyBhIGRpYWdvbmFsXG4gICAgICAgICAgICBib2R5LnZlbG9jaXR5Lm5vcm1hbGl6ZSgpLnNjYWxlKGJhc2VTcGVlZCk7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmtleXM/LmxlZnQ/LmlzRG93biB8fCB0aGlzLmtleXM/LnJpZ2h0Py5pc0Rvd24gfHwgdGhpcy5rZXlzPy5kb3duPy5pc0Rvd24pIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNwcml0ZT8uYW5pbXMucGxheSgncGxheWVyLXdhbGsnLCB0cnVlKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5rZXlzPy51cD8uaXNEb3duKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zcHJpdGU/LmFuaW1zLnBsYXkoJ3BsYXllci13YWxrLWJhY2snLCB0cnVlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zcHJpdGU/LmFuaW1zLnN0b3AoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImV4cG9ydCBpbnRlcmZhY2UgSVJvb21Db29yZGluYXRlcyB7IHg6IG51bWJlciwgeTogbnVtYmVyIH1cbmV4cG9ydCBlbnVtIERpcmVjdGlvbiB7IExlZnQgPSAnTGVmdCcsIFJpZ2h0ID0gJ1JpZ2h0JywgQWJvdmUgPSAnQWJvdmUnLCBCZWxvdyA9ICdCZWxvdycgfVxuZXhwb3J0IGNvbnN0IG9wcG9zaXRlRGlyZWN0aW9uOiB7IFtrZXkgaW4gRGlyZWN0aW9uXTogRGlyZWN0aW9uIH0gPSB7XG4gICAgW0RpcmVjdGlvbi5MZWZ0XTogRGlyZWN0aW9uLlJpZ2h0LFxuICAgIFtEaXJlY3Rpb24uUmlnaHRdOiBEaXJlY3Rpb24uTGVmdCxcbiAgICBbRGlyZWN0aW9uLkFib3ZlXTogRGlyZWN0aW9uLkJlbG93LFxuICAgIFtEaXJlY3Rpb24uQmVsb3ddOiBEaXJlY3Rpb24uQWJvdmVcbn07XG5leHBvcnQgZW51bSBSb29tVHlwZSB7XG4gICAgTm9ybWFsID0gMCxcbiAgICBQaWxsYXI9IDEsXG4gICAgRGl2aWRlZCA9IDIsXG4gICAgSG9sZSA9IDMsXG4gICAgQ2hlc3QgPSA0XG4gfVxuXG5leHBvcnQgY2xhc3MgUm9vbSB7XG4gICAgcHVibGljIGNvbm5lY3RlZFJvb21zOiB7IFtrZXkgaW4gRGlyZWN0aW9uXTogUm9vbSB8IG51bGwgfSA9IHtcbiAgICAgICAgW0RpcmVjdGlvbi5MZWZ0XTogbnVsbCxcbiAgICAgICAgW0RpcmVjdGlvbi5SaWdodF06IG51bGwsXG4gICAgICAgIFtEaXJlY3Rpb24uQWJvdmVdOiBudWxsLFxuICAgICAgICBbRGlyZWN0aW9uLkJlbG93XTogbnVsbFxuICAgIH07XG4gICAgcHVibGljIGlzRGVhZEVuZDogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHB1YmxpYyBpc1NwYXduOiBib29sZWFuID0gZmFsc2U7XG4gICAgcHVibGljIHJvb21UeXBlOiBSb29tVHlwZSA9IFJvb21UeXBlLk5vcm1hbDtcbiAgICBwdWJsaWMgbGF5ZXJzOiB7IFtrZXk6IHN0cmluZ106IHsgdGlsZUluZGV4OiBudW1iZXIsIHg6IG51bWJlciwgeTogbnVtYmVyIH1bXSB9ID0ge307XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHVibGljIHJvb21Db29yZGluYXRlczogSVJvb21Db29yZGluYXRlc1xuICAgICkgeyB9XG59XG4iLCJleHBvcnQgZW51bSBEdW5nZW9uMVRpbGVTZXRJbmRleCB7XG4gICAgSG9sZVRvcExlZnRDb3JuZXIgPSAwLFxuICAgIEJvdHRvbU5vcm1hbFdhbGwgPSAxLFxuICAgIEhvbGVUb3BSaWdodENvcm5lciA9IDIsXG4gICAgVG9wTGVmdENvcm5lciA9IDMsXG4gICAgVG9wUmlnaHRDb3JuZXIgPSA0LFxuICAgIE5vcm1hbEZsb29yID0gNixcbiAgICBUZXh0dXJlZEZsb29yMSA9IDcsXG4gICAgVGV4dHVyZWRGbG9vcjIgPSA4LFxuICAgIFRleHR1cmVkRmxvb3IzID0gOSxcbiAgICBUZXh0dXJlZEZsb29yNCA9IDEwLFxuICAgIFRleHR1cmVkRmxvb3I1ID0gMTEsXG4gICAgVGV4dHVyZWRGbG9vcjYgPSAxMixcbiAgICBFbXB0eVZhc2UxID0gMTMsXG4gICAgRW1wdHlWYXNlMiA9IDE0LFxuICAgIEVtcHR5VmFzZTMgPSAxNSxcbiAgICBSaWdodE5vcm1hbFdhbGwgPSAxOSxcbiAgICBFbXB0eSA9IDIwLFxuICAgIExlZnROb3JtYWxXYWxsID0gMjEsXG4gICAgQm90dG9tTGVmdENvcm5lciA9IDIyLFxuICAgIEJvdHRvbVJpZ2h0Q29ybmVyID0gMjMsXG4gICAgVGV4dHVyZWRGbG9vcjcgPSAyNSxcbiAgICBUZXh0dXJlZEZsb29yOCA9IDI2LFxuICAgIFRleHR1cmVkRmxvb3I5ID0gMjcsXG4gICAgVGV4dHVyZWRGbG9vcjEwID0gMjgsXG4gICAgVGV4dHVyZWRGbG9vcjExID0gMjksXG4gICAgVGV4dHVyZWRGbG9vcjEyID0gMzAsXG4gICAgVGV4dHVyZWRGbG9vcjEzID0gMzEsXG4gICAgSG9sZUJvdHRvbUxlZnRDb3JuZXIgPSAzOCxcbiAgICBUb3BOb3JtYWxXYWxsID0gMzksXG4gICAgSG9sZUJvdHRvbVJpZ2h0Q29ybmVyID0gNDAsXG4gICAgVGV4dHVyZWRGbG9vcjE0ID0gNDQsXG4gICAgVGV4dHVyZWRGbG9vcjE1ID0gNDUsXG4gICAgVGV4dHVyZWRGbG9vcjE2ID0gNDYsXG4gICAgVGV4dHVyZWRGbG9vcjE3ID0gNDcsXG4gICAgVGV4dHVyZWRGbG9vcjE4ID0gNDgsXG4gICAgVGV4dHVyZWRGbG9vcjE5ID0gNDksXG4gICAgVGV4dHVyZWRGbG9vcjIwID0gNTAsXG4gICAgQnJva2VuVmFzZTEgPSA0OSxcbiAgICBCcm9rZW5WYXNlMiA9IDUwLFxuICAgIEJyb2tlblZhc2UzID0gNTEsXG4gICAgVG9wVGV4dHVyZWRXYWxsMSA9IDU3LFxuICAgIFRvcFRleHR1cmVkV2FsbDIgPSA1OCxcbiAgICBUb3BUZXh0dXJlZFdhbGwzID0gNTksXG4gICAgVGV4dHVyZWRGbG9vcjIxID0gNjMsXG4gICAgVGV4dHVyZWRGbG9vcjIyID0gNjQsXG4gICAgVGV4dHVyZWRGbG9vcjIzID0gNjUsXG4gICAgVGV4dHVyZWRGbG9vcjI0ID0gNjYsXG4gICAgVGV4dHVyZWRGbG9vcjI1ID0gNjcsXG4gICAgVGV4dHVyZWRGbG9vcjI2ID0gNjgsXG4gICAgVGV4dHVyZWRGbG9vcjI3ID0gNjksXG4gICAgTGVmdFRleHR1cmVkV2FsbDEgPSA3NixcbiAgICBSaWdodFRleHR1cmVkV2FsbDEgPSA3NyxcbiAgICBCb3R0b21UZXh0dXJlZFdhbGwxID0gNzgsXG4gICAgQm90dG9tVGV4dHVyZWRXYWxsMiA9IDc5LFxuICAgIEJvdHRvbVRleHR1cmVkV2FsbDMgPSA4MCxcbiAgICBEaXZpZGVyRW5kTGVmdCA9IDgyLFxuICAgIERpdmlkZXJIb3Jpem9udGFsID0gODMsXG4gICAgRGl2aWRlckhvcml6b250YWxUZXh0dXJlZCA9IDg0LFxuICAgIERpdmlkZXJFbmRSaWdodCA9IDg1LFxuICAgIERpdmlkZXJFbmRUb3AgPSA4NixcbiAgICBUZXh0dXJlZEZsb29yMjggPSA4NyxcbiAgICBUZXh0dXJlZEZsb29yMjkgPSA4OCxcbiAgICBMZWZ0VGV4dHVyZWRXYWxsMiA9IDk1LFxuICAgIFJpZ2h0VGV4dHVyZWRXYWxsMiA9IDk2LFxuICAgIFRvcEdhdGVDYXAgPSA5OSxcbiAgICBEaXZpZGVyVG9wTGVmdENvcm5lciA9IDEwMSxcbiAgICBEaXZpZGVyVG9wUmlnaHRDb3JuZXIgPSAxMDIsXG4gICAgRGl2aWRlclZlcnRpY2FsVGV4dHVyZWQgPSAxMDUsXG4gICAgVGV4dHVyZWRGbG9vcjMwID0gMTA3LFxuICAgIFRleHR1cmVkRmxvb3IzMSA9IDEwOCxcbiAgICBMZWZ0VGV4dHVyZWRXYWxsMyA9IDExNCxcbiAgICBSaWdodFRleHR1cmVkV2FsbDMgPSAxMTUsXG4gICAgVG9wR2F0ZSA9IDExOCxcbiAgICBEaXZpZGVyQm90dG9tTGVmdENvcm5lciA9IDEyMCxcbiAgICBEaXZpZGVyQm90dG9tUmlnaHRDb3JuZXIgPSAxMjEsXG4gICAgRGl2aWRlclZlcnRpY2FsID0gMTI0LFxuICAgIEJvdHRvbUdhdGUgPSAxMzksXG4gICAgRGl2aWRlckVuZEJvdHRvbSA9IDE0MyxcbiAgICBUb3BHYXRlTG9ja2VkID0gMTU3LFxuICAgIEJvdHRvbUdhdGVDYXAgPSAxNTgsXG4gICAgQm90dG9tR2F0ZUxvY2tlZCA9IDE3NyxcbiAgICBQaWxsYXJUb3AgPSAxODYsXG4gICAgUGlsbGFyQm90dG9tID0gMjA1LFxuICAgIFJpZ2h0R2F0ZSA9IDIwOSxcbiAgICBSaWdodEdhdGVDYXAgPSAyMTAsXG4gICAgUmlnaHRHYXRlTG9ja2VkID0gMjEzLFxuICAgIExlZnRHYXRlQ2FwID0gMjI4LFxuICAgIExlZnRHYXRlID0gMjI5LFxuICAgIExlZnRHYXRlTG9ja2VkID0gMjMzXG59O1xuXG5leHBvcnQgY29uc3QgRHVuZ2VvbjFUaWxlU2V0SW5kZXhXYWxsV2VpZ2h0czogeyBba2V5OiBzdHJpbmddOiB7IGluZGV4OiBudW1iZXIgfCBudW1iZXJbXSwgd2VpZ2h0OiBudW1iZXIgfVtdIH0gPSB7XG4gICAgVG9wV2FsbDogW1xuICAgICAgICB7IGluZGV4OiBEdW5nZW9uMVRpbGVTZXRJbmRleC5Ub3BOb3JtYWxXYWxsLCB3ZWlnaHQ6IDQgfSxcbiAgICAgICAgeyBpbmRleDogW0R1bmdlb24xVGlsZVNldEluZGV4LlRvcFRleHR1cmVkV2FsbDEsIER1bmdlb24xVGlsZVNldEluZGV4LlRvcFRleHR1cmVkV2FsbDIsIER1bmdlb24xVGlsZVNldEluZGV4LlRvcFRleHR1cmVkV2FsbDNdLCB3ZWlnaHQ6IDEgfVxuICAgIF0sXG4gICAgUmlnaHRXYWxsOiBbXG4gICAgICAgIHsgaW5kZXg6IER1bmdlb24xVGlsZVNldEluZGV4LlJpZ2h0Tm9ybWFsV2FsbCwgd2VpZ2h0OiA0IH0sXG4gICAgICAgIHsgaW5kZXg6IFtEdW5nZW9uMVRpbGVTZXRJbmRleC5SaWdodFRleHR1cmVkV2FsbDEsIER1bmdlb24xVGlsZVNldEluZGV4LlJpZ2h0VGV4dHVyZWRXYWxsMiwgRHVuZ2VvbjFUaWxlU2V0SW5kZXguUmlnaHRUZXh0dXJlZFdhbGwzXSwgd2VpZ2h0OiAxIH1cbiAgICBdLFxuICAgIEJvdHRvbVdhbGw6IFtcbiAgICAgICAgeyBpbmRleDogRHVuZ2VvbjFUaWxlU2V0SW5kZXguQm90dG9tTm9ybWFsV2FsbCwgd2VpZ2h0OiA0IH0sXG4gICAgICAgIHsgaW5kZXg6IFtEdW5nZW9uMVRpbGVTZXRJbmRleC5Cb3R0b21UZXh0dXJlZFdhbGwxLCBEdW5nZW9uMVRpbGVTZXRJbmRleC5Cb3R0b21UZXh0dXJlZFdhbGwyLCBEdW5nZW9uMVRpbGVTZXRJbmRleC5Cb3R0b21UZXh0dXJlZFdhbGwzXSwgd2VpZ2h0OiAxIH1cbiAgICBdLFxuICAgIExlZnRXYWxsOiBbXG4gICAgICAgIHsgaW5kZXg6IER1bmdlb24xVGlsZVNldEluZGV4LkxlZnROb3JtYWxXYWxsLCB3ZWlnaHQ6IDQgfSxcbiAgICAgICAgeyBpbmRleDogW0R1bmdlb24xVGlsZVNldEluZGV4LkxlZnRUZXh0dXJlZFdhbGwxLCBEdW5nZW9uMVRpbGVTZXRJbmRleC5MZWZ0VGV4dHVyZWRXYWxsMiwgRHVuZ2VvbjFUaWxlU2V0SW5kZXguTGVmdFRleHR1cmVkV2FsbDNdLCB3ZWlnaHQ6IDEgfVxuICAgIF1cbn1cbiIsImV4cG9ydCAqIGZyb20gJy4vRHVuZ2Vvbic7XG5leHBvcnQgKiBmcm9tICcuL1BsYXllcic7XG5leHBvcnQgKiBmcm9tICcuL1Jvb20nO1xuZXhwb3J0ICogZnJvbSAnLi9UaWxlU2V0SW5kZXgnO1xuIiwiaW1wb3J0IHsgTUFJTl9NRU5VX1NDRU5FX0tFWSB9IGZyb20gJy4vbWFpbi1tZW51LnNjZW5lJztcbmltcG9ydCB7IGdldEdhbWVXaWR0aCwgZ2V0R2FtZUhlaWdodCB9IGZyb20gJy4uL3V0aWxzJztcblxuZXhwb3J0IGNvbnN0IEJPT1RfU0NFTkVfS0VZID0gJ0JPT1QnO1xuXG5jb25zdCBzY2VuZUNvbmZpZzogUGhhc2VyLlR5cGVzLlNjZW5lcy5TZXR0aW5nc0NvbmZpZyA9IHtcbiAgICBhY3RpdmU6IGZhbHNlLFxuICAgIHZpc2libGU6IGZhbHNlLFxuICAgIGtleTogQk9PVF9TQ0VORV9LRVlcbn07XG5cbmV4cG9ydCBjbGFzcyBCb290U2NlbmUgZXh0ZW5kcyBQaGFzZXIuU2NlbmUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcihzY2VuZUNvbmZpZyk7XG4gICAgfVxuXG5cbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIC8vIFB1YmxpYyBNZXRob2RzIC8vXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICBwdWJsaWMgcHJlbG9hZCgpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgaGFsZldpZHRoID0gZ2V0R2FtZVdpZHRoKHRoaXMpICogMC41O1xuICAgICAgICBjb25zdCBoYWxmSGVpZ2h0ID0gZ2V0R2FtZUhlaWdodCh0aGlzKSAqIDAuNTtcblxuICAgICAgICBjb25zdCBwcm9ncmVzc0JhckNvbnRhaW5lciA9IHRoaXMuYWRkLnJlY3RhbmdsZShoYWxmV2lkdGgsIGhhbGZIZWlnaHQsIDQwMCwgMTAwLCAweGZmZmZmZik7XG4gICAgICAgIGNvbnN0IHByb2dyZXNzQmFyID0gdGhpcy5hZGQucmVjdGFuZ2xlKGhhbGZXaWR0aCArIDIwIC0gcHJvZ3Jlc3NCYXJDb250YWluZXIud2lkdGggKiAwLjUsIGhhbGZIZWlnaHQsIDEwLCAxMDAgLSAyMCwgMHhjMWMxYzEpO1xuICAgICAgICBjb25zdCBsb2FkaW5nVGV4dCA9IHRoaXMuYWRkLnRleHQoaGFsZldpZHRoLCBoYWxmSGVpZ2h0IC0gODUsICdMb2FkaW5nLi4uJykuc2V0Rm9udFNpemUoMjQpO1xuICAgICAgICBsb2FkaW5nVGV4dC5zZXRYKGhhbGZXaWR0aCAtIChsb2FkaW5nVGV4dC53aWR0aCAvIDIpKTtcbiAgICAgICAgY29uc3QgcGVyY2VudFRleHQgPSB0aGlzLmFkZC50ZXh0KGhhbGZXaWR0aCwgaGFsZkhlaWdodCArIDYwLCAnJykuc2V0Rm9udFNpemUoMjQpO1xuXG4gICAgICAgIHRoaXMubG9hZC5vbigncHJvZ3Jlc3MnLCAocHJvZ3Jlc3NWYWx1ZTogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgICBwcm9ncmVzc0Jhci53aWR0aCA9ICg0MDAgLSAzMCkgKiBwcm9ncmVzc1ZhbHVlO1xuICAgICAgICAgICAgcGVyY2VudFRleHQuc2V0VGV4dChgJHtwcm9ncmVzc1ZhbHVlICogMTAwfSVgKTtcbiAgICAgICAgICAgIHBlcmNlbnRUZXh0LnNldFgoKGdldEdhbWVXaWR0aCh0aGlzKSAqIDAuNSkgLSAocGVyY2VudFRleHQud2lkdGggLyAyKSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMubG9hZC5vbmNlKCdjb21wbGV0ZScsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMubG9hZC5vZmYoJ3Byb2dyZXNzJyk7XG5cbiAgICAgICAgICAgIGxvYWRpbmdUZXh0LmRlc3Ryb3koKTtcbiAgICAgICAgICAgIHBlcmNlbnRUZXh0LmRlc3Ryb3koKTtcbiAgICAgICAgICAgIHByb2dyZXNzQmFyLmRlc3Ryb3koKTtcbiAgICAgICAgICAgIHByb2dyZXNzQmFyQ29udGFpbmVyLmRlc3Ryb3koKTtcbiAgICAgICAgICAgIHRoaXMuc2NlbmUuc3RhcnQoTUFJTl9NRU5VX1NDRU5FX0tFWSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMubG9hZEFzc2V0cygpO1xuICAgIH1cblxuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIC8vIFByaXZhdGUgTWV0aG9kcyAvL1xuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIHByaXZhdGUgbG9hZEFzc2V0cygpIHtcbiAgICAgICAgdGhpcy5sb2FkLmpzb24oJ2Fzc2V0cycsICdhc3NldHMvanNvbi9hc3NldHMuanNvbicpO1xuICAgICAgICBjb25zdCBhc3NldHMgPSB0aGlzLmNhY2hlLmpzb24uZ2V0KCdhc3NldHMnKTtcblxuICAgICAgICAvLyBmb3IgKGNvbnN0IGFzc2V0VHlwZSBvZiBPYmplY3Qua2V5cyhhc3NldHMpKSB7XG4gICAgICAgIC8vICAgICBmb3IgKGNvbnN0IGFzc2V0S2V5IG9mIE9iamVjdC5rZXlzKGFzc2V0c1thc3NldFR5cGVdKSkge1xuICAgICAgICAvLyAgICAgICAgIGNvbnN0IGFzc2V0ID0gYXNzZXRzW2Fzc2V0VHlwZV1bYXNzZXRLZXldO1xuXG4gICAgICAgIC8vICAgICAgICAgc3dpdGNoKGFzc2V0VHlwZSkge1xuICAgICAgICAvLyAgICAgICAgICAgICBjYXNlICdhdGxhcyc6XG4gICAgICAgIC8vICAgICAgICAgICAgIGNhc2UgJ3VuaXR5QXRsYXMnOlxuICAgICAgICAvLyAgICAgICAgICAgICBjYXNlICdiaXRtYXBGb250JzpcbiAgICAgICAgLy8gICAgICAgICAgICAgY2FzZSAnc3ByaXRlc2hlZXQnOlxuICAgICAgICAvLyAgICAgICAgICAgICBjYXNlICdtdWx0aWF0bGFzJzpcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIC8vIFRPRE9cbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAvLyAgICAgICAgICAgICBjYXNlICdhdWRpbyc6XG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAvLyBUT0RPXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgLy8gICAgICAgICAgICAgY2FzZSAnaHRtbCc6XG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAvLyBUT0RPXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgLy8gICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIC8vIFRPRE9cbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAvLyAgICAgICAgIH1cbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgLy8gfVxuICAgIH1cblxufVxuIiwiaW1wb3J0IHsgRHVuZ2VvbiB9IGZyb20gJy4uL21vZGVscy9EdW5nZW9uJztcbmltcG9ydCB7IGNoYWluIH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7IFBsYXllciwgUm9vbSB9IGZyb20gJy4uL21vZGVscyc7XG5pbXBvcnQgeyBSb29tU2NlbmUgfSBmcm9tICcuL3Jvb20uc2NlbmUnO1xuXG5leHBvcnQgY29uc3QgRFVOR0VPTl9TQ0VORV9LRVkgPSAnRFVOR0VPTic7XG5cbmNvbnN0IHNjZW5lQ29uZmlnOiBQaGFzZXIuVHlwZXMuU2NlbmVzLlNldHRpbmdzQ29uZmlnID0ge1xuICAgIGFjdGl2ZTogZmFsc2UsXG4gICAgdmlzaWJsZTogZmFsc2UsXG4gICAga2V5OiBEVU5HRU9OX1NDRU5FX0tFWSxcbn07XG5cbmV4cG9ydCBjbGFzcyBEdW5nZW9uU2NlbmUgZXh0ZW5kcyBQaGFzZXIuU2NlbmUge1xuICAgIHByaXZhdGUgZHVuZ2VvbjogRHVuZ2VvbjtcbiAgICBwcml2YXRlIHBsYXllcjogUGxheWVyO1xuICAgIHByaXZhdGUgc2NlbmVzOiBSb29tU2NlbmVbXSA9IFtdO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKHNjZW5lQ29uZmlnKTtcblxuICAgICAgICB0aGlzLmR1bmdlb24gPSBuZXcgRHVuZ2VvbigpO1xuICAgICAgICB0aGlzLnBsYXllciA9IG5ldyBQbGF5ZXIoKTtcbiAgICB9XG5cbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgLy8gQnVpbHQtaW4gU2NlbmUgTWV0aG9kcyAvL1xuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICBwdWJsaWMgcHJlbG9hZCgpOiB2b2lkIHtcbiAgICAgICAgLy8gVE9ET1xuICAgIH1cblxuICAgIHB1YmxpYyBjcmVhdGUoKTogdm9pZCB7XG4gICAgICAgIHRoaXMucmVzZXQoKTtcbiAgICB9XG5cblxuXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAvLyBQdWJsaWMgTWV0aG9kcyAvL1xuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgcHVibGljIHN0dWZmKCk6IHZvaWQgeyB9XG5cblxuXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgLy8gUHJpdmF0ZSBNZXRob2RzIC8vXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgcHJpdmF0ZSByZXNldCgpOiB2b2lkIHtcbiAgICAgICAgY29uc3Qgc3Bhd25Sb29tID0gY2hhaW4odGhpcy5kdW5nZW9uLnJvb21zKVxuICAgICAgICAgICAgLmZsYXRNYXAoKVxuICAgICAgICAgICAgLmZpbmQocm9vbSA9PiByb29tICE9IG51bGwgJiYgcm9vbS5pc1NwYXduKVxuICAgICAgICAgICAgLnZhbHVlT2YoKTtcblxuICAgICAgICB0aGlzLnNjZW5lLmxhdW5jaCgnUk9PTScsIHsgc291cmNlOiBzcGF3blJvb20sIHBsYXllcjogdGhpcy5wbGF5ZXIsIGFjdGl2ZTogZmFsc2UsIHZpc2libGU6IGZhbHNlIH0pO1xuICAgIH1cbn1cbiIsImV4cG9ydCAqIGZyb20gJy4vYm9vdC5zY2VuZSc7XG5leHBvcnQgKiBmcm9tICcuL21haW4tbWVudS5zY2VuZSc7XG5leHBvcnQgKiBmcm9tICcuL2R1bmdlb24uc2NlbmUnO1xuZXhwb3J0ICogZnJvbSAnLi9yb29tLnNjZW5lJztcbiIsImltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJy4uL3VpJztcbmltcG9ydCB7IERVTkdFT05fU0NFTkVfS0VZIH0gZnJvbSAnLi9kdW5nZW9uLnNjZW5lJztcblxuZXhwb3J0IGNvbnN0IE1BSU5fTUVOVV9TQ0VORV9LRVkgPSAnTUFJTl9NRU5VJztcblxuY29uc3Qgc2NlbmVDb25maWc6IFBoYXNlci5UeXBlcy5TY2VuZXMuU2V0dGluZ3NDb25maWcgPSB7XG4gICAgYWN0aXZlOiBmYWxzZSxcbiAgICB2aXNpYmxlOiBmYWxzZSxcbiAgICBrZXk6IE1BSU5fTUVOVV9TQ0VORV9LRVlcbn07XG5cbmV4cG9ydCBjbGFzcyBNYWluTWVudVNjZW5lIGV4dGVuZHMgUGhhc2VyLlNjZW5lIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoc2NlbmVDb25maWcpO1xuICAgIH1cblxuICAgIHB1YmxpYyBjcmVhdGUoKSB7XG4gICAgICAgIGNvbnN0IHN0YXJ0R2FtZUJ1dHRvbiA9IG5ldyBCdXR0b24oe1xuICAgICAgICAgICAgc2NlbmU6IHRoaXMsXG4gICAgICAgICAgICB4OiAxMDAsXG4gICAgICAgICAgICB5OiAxNTAsXG4gICAgICAgICAgICB0ZXh0OiAnU3RhcnQgR2FtZScsXG4gICAgICAgICAgICBvbkNsaWNrOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zY2VuZS5zdGFydChEVU5HRU9OX1NDRU5FX0tFWSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IERpcmVjdGlvbiwgUm9vbSwgRHVuZ2VvbjFUaWxlU2V0SW5kZXgsIFBsYXllciwgUm9vbVR5cGUsIER1bmdlb24xVGlsZVNldEluZGV4V2FsbFdlaWdodHMgfSBmcm9tICcuLi9tb2RlbHMnO1xuaW1wb3J0IHsgZ2V0R2FtZUhlaWdodCwgZ2V0R2FtZVdpZHRoIH0gZnJvbSAnLi4vdXRpbHMnO1xuXG5leHBvcnQgY29uc3QgUk9PTV9TQ0VORV9LRVkgPSAnUk9PTSc7XG5cbmNvbnN0IHNjZW5lQ29uZmlnOiBQaGFzZXIuVHlwZXMuU2NlbmVzLlNldHRpbmdzQ29uZmlnID0ge1xuICAgIGFjdGl2ZTogZmFsc2UsXG4gICAgdmlzaWJsZTogZmFsc2UsXG4gICAga2V5OiBST09NX1NDRU5FX0tFWVxufTtcbmNvbnN0IHJvb21UaWxlV2lkdGggPSAyMztcbmNvbnN0IHJvb21UaWxlSGVpZ2h0ID0gMTM7XG5jb25zdCB0aWxlU2l6ZSA9IDQ4O1xuY29uc3QgZ3JvdW5kTGF5ZXJOYW1lID0gJ2dyb3VuZExheWVyJztcbmNvbnN0IHN0dWZmTGF5ZXJOYW1lID0gJ3N0dWZmTGF5ZXInO1xuXG5leHBvcnQgaW50ZXJmYWNlIElSb29tU2NlbmVDb25maWcge1xuICAgIHNvdXJjZTogUm9vbSxcbiAgICBwbGF5ZXI6IFBsYXllcixcbiAgICBlbnRyYW5jZURpcmVjdGlvbj86IERpcmVjdGlvblxufTtcblxuZXhwb3J0IGNsYXNzIFJvb21TY2VuZSBleHRlbmRzIFBoYXNlci5TY2VuZSB7XG4gICAgcHJpdmF0ZSBlbnRyYW5jZURpcmVjdGlvbj86IERpcmVjdGlvbjtcbiAgICBwcml2YXRlIGdyb3VuZExheWVyPzogUGhhc2VyLlRpbGVtYXBzLkR5bmFtaWNUaWxlbWFwTGF5ZXI7XG4gICAgcHJpdmF0ZSBzdHVmZkxheWVyPzogUGhhc2VyLlRpbGVtYXBzLkR5bmFtaWNUaWxlbWFwTGF5ZXI7XG4gICAgcHJpdmF0ZSBwbGF5ZXI/OiBQbGF5ZXI7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoc2NlbmVDb25maWcpO1xuICAgIH1cblxuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAvLyBCdWlsdC1pbiBTY2VuZSBNZXRob2RzIC8vXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIHB1YmxpYyBpbml0KCk6IHZvaWQge1xuICAgICAgICAvLyBUT0RPXG4gICAgfVxuXG4gICAgcHVibGljIHByZWxvYWQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMubG9hZC5pbWFnZSgndGlsZXMnLCAnYXNzZXRzL2ltZy90aWxlc2hlZXRzL2R1bmdlb24tMS5wbmcnKTtcbiAgICAgICAgdGhpcy5sb2FkLnNwcml0ZXNoZWV0KCdwbGF5ZXInLCAnYXNzZXRzL2ltZy9zcHJpdGVzaGVldHMvcm9ndWUucG5nJywgeyBmcmFtZVdpZHRoOiAzMCwgZnJhbWVIZWlnaHQ6IDMwIH0pO1xuXG4gICAgICAgIHRoaXMuc2NhbGUub24oJ3Jlc2l6ZScsIChnYW1lU2l6ZTogeyBnYW1lV2lkdGg6IG51bWJlciwgZ2FtZUhlaWdodDogbnVtYmVyIH0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRYID0gdGhpcy5ncm91bmRMYXllcj8ueCA/PyAwO1xuICAgICAgICAgICAgY29uc3QgY3VycmVudFkgPSB0aGlzLmdyb3VuZExheWVyPy55ID8/IDA7XG4gICAgICAgICAgICBjb25zdCBjdXJyZW50UGxheWVyWCA9IHRoaXMucGxheWVyPy5zcHJpdGU/LnggPz8gMDtcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRQbGF5ZXJZID0gdGhpcy5wbGF5ZXI/LnNwcml0ZT8ueSA/PyAwO1xuXG4gICAgICAgICAgICBjb25zdCBsYXllclhZID0gdGhpcy5nZXRSb29tUG9zaXRpb24oKTtcbiAgICAgICAgICAgIHRoaXMuZ3JvdW5kTGF5ZXI/LnNldFBvc2l0aW9uKGxheWVyWFkudG9wTGVmdC54LCBsYXllclhZLnRvcExlZnQueSk7XG4gICAgICAgICAgICB0aGlzLnBsYXllcj8uc3ByaXRlPy5zZXRQb3NpdGlvbihsYXllclhZLnRvcExlZnQueCArIChjdXJyZW50UGxheWVyWCAtIGN1cnJlbnRYKSwgbGF5ZXJYWS50b3BMZWZ0LnkgKyAoY3VycmVudFBsYXllclkgLSBjdXJyZW50WSkpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgY3JlYXRlKHsgc291cmNlLCBwbGF5ZXIsIGVudHJhbmNlRGlyZWN0aW9uIH06IElSb29tU2NlbmVDb25maWcpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5wbGF5ZXIgPSBwbGF5ZXI7XG4gICAgICAgIHRoaXMuc2V0VXBSb29tKHNvdXJjZSwgZW50cmFuY2VEaXJlY3Rpb24pO1xuICAgIH1cblxuICAgIHB1YmxpYyB1cGRhdGUoKTogdm9pZCB7XG4gICAgICAgIHRoaXMucGxheWVyPy51cGRhdGUoKTtcbiAgICB9XG5cbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIC8vIFB1YmxpYyBNZXRob2RzIC8vXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgLy8gUHJpdmF0ZSBNZXRob2RzIC8vXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgcHJpdmF0ZSBzZXRVcFJvb20oc291cmNlOiBSb29tLCBlbnRyYW5jZURpcmVjdGlvbj86IERpcmVjdGlvbik6IHZvaWQge1xuICAgICAgICBjb25zdCB0aWxlTWFwID0gdGhpcy5tYWtlLnRpbGVtYXAoeyB0aWxlV2lkdGg6IHRpbGVTaXplLCB0aWxlSGVpZ2h0OiB0aWxlU2l6ZSwgd2lkdGg6IHJvb21UaWxlV2lkdGgsIGhlaWdodDogcm9vbVRpbGVIZWlnaHQgfSk7XG4gICAgICAgIGNvbnN0IHRpbGVTZXQgPSB0aWxlTWFwLmFkZFRpbGVzZXRJbWFnZSgndGlsZXMnLCB1bmRlZmluZWQsIDQ4LCA0OCwgMSwgMik7XG4gICAgICAgIGNvbnN0IHJvb21Qb3NpdGlvbiA9IHRoaXMuZ2V0Um9vbVBvc2l0aW9uKCk7XG4gICAgICAgIHRoaXMuZ3JvdW5kTGF5ZXIgPSB0aWxlTWFwLmNyZWF0ZUJsYW5rRHluYW1pY0xheWVyKGdyb3VuZExheWVyTmFtZSwgdGlsZVNldCwgcm9vbVBvc2l0aW9uLnRvcExlZnQueCwgcm9vbVBvc2l0aW9uLnRvcExlZnQueSk7XG4gICAgICAgIHRoaXMuc3R1ZmZMYXllciA9IHRpbGVNYXAuY3JlYXRlQmxhbmtEeW5hbWljTGF5ZXIoc3R1ZmZMYXllck5hbWUsIHRpbGVTZXQsIHJvb21Qb3NpdGlvbi50b3BMZWZ0LngsIHJvb21Qb3NpdGlvbi50b3BMZWZ0LnkpO1xuXG4gICAgICAgIGlmIChPYmplY3Qua2V5cyhzb3VyY2UubGF5ZXJzKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAvLyBpZiB0aGlzIHJvb20gaGFzIGFscmVhZHkgaGFkIGxheWVycyBnZW5lcmF0ZWQgZm9yIGl0LCBsb2FkIHRoZW0gaW4gaW5zdGVhZCBvZiBnZW5lcmF0aW5nIG5ldyBvbmVzXG4gICAgICAgICAgICBmb3IgKGNvbnN0IHRpbGUgb2Ygc291cmNlLmxheWVyc1tncm91bmRMYXllck5hbWVdKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ncm91bmRMYXllci5wdXRUaWxlQXQodGlsZS50aWxlSW5kZXgsIHRpbGUueCwgdGlsZS55KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZm9yIChjb25zdCB0aWxlIG9mIHNvdXJjZS5sYXllcnNbc3R1ZmZMYXllck5hbWVdKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdHVmZkxheWVyLnB1dFRpbGVBdCh0aWxlLnRpbGVJbmRleCwgdGlsZS54LCB0aWxlLnkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gZmlsbCBpbiBub24td2FsbCBncm91bmQgbGF5ZXIgd2l0aCBmbG9vciBwaWVjZXNcbiAgICAgICAgICAgIHRoaXMuZ3JvdW5kTGF5ZXIud2VpZ2h0ZWRSYW5kb21pemUoMiwgMiwgdGlsZU1hcC53aWR0aCAtIDQsIHRpbGVNYXAuaGVpZ2h0IC0gNCwgW1xuICAgICAgICAgICAgICAgIHsgaW5kZXg6IER1bmdlb24xVGlsZVNldEluZGV4Lk5vcm1hbEZsb29yLCB3ZWlnaHQ6IDkuMjUgfSxcbiAgICAgICAgICAgICAgICB7IGluZGV4OiBbRHVuZ2VvbjFUaWxlU2V0SW5kZXguVGV4dHVyZWRGbG9vcjFdLCB3ZWlnaHQ6IDAuNzUgfVxuICAgICAgICAgICAgXSk7XG5cbiAgICAgICAgICAgIC8vIGFkZCBjb3JuZXIgcGllY2VzXG4gICAgICAgICAgICB0aGlzLmdyb3VuZExheWVyLnB1dFRpbGVBdChEdW5nZW9uMVRpbGVTZXRJbmRleC5Ub3BMZWZ0Q29ybmVyLCAxLCAxKTtcbiAgICAgICAgICAgIHRoaXMuZ3JvdW5kTGF5ZXIucHV0VGlsZUF0KER1bmdlb24xVGlsZVNldEluZGV4LlRvcFJpZ2h0Q29ybmVyLCB0aWxlTWFwLndpZHRoIC0gMiwgMSk7XG4gICAgICAgICAgICB0aGlzLmdyb3VuZExheWVyLnB1dFRpbGVBdChEdW5nZW9uMVRpbGVTZXRJbmRleC5Cb3R0b21MZWZ0Q29ybmVyLCAxLCB0aWxlTWFwLmhlaWdodCAtIDIpO1xuICAgICAgICAgICAgdGhpcy5ncm91bmRMYXllci5wdXRUaWxlQXQoRHVuZ2VvbjFUaWxlU2V0SW5kZXguQm90dG9tUmlnaHRDb3JuZXIsIHRpbGVNYXAud2lkdGggLSAyLCB0aWxlTWFwLmhlaWdodCAtIDIpO1xuXG4gICAgICAgICAgICAvLyBhZGQgcmFuZG9taXplZCB3YWxsIHBpZWNlcyBhbmQgYWxzbyBkb29ycyBpZiB0aGVyZSdzIGNvbm5lY3RlZCByb29tc1xuICAgICAgICAgICAgLy8gdG9wXG4gICAgICAgICAgICB0aGlzLmdyb3VuZExheWVyLndlaWdodGVkUmFuZG9taXplKDIsIDEsIHRpbGVNYXAud2lkdGggLSA0LCAxLCBEdW5nZW9uMVRpbGVTZXRJbmRleFdhbGxXZWlnaHRzLlRvcFdhbGwpO1xuICAgICAgICAgICAgaWYgKHNvdXJjZS5jb25uZWN0ZWRSb29tcy5BYm92ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZ3JvdW5kTGF5ZXIucHV0VGlsZUF0KER1bmdlb24xVGlsZVNldEluZGV4LlRvcEdhdGUsIE1hdGguZmxvb3IodGlsZU1hcC53aWR0aCAvIDIpLCAxKTtcbiAgICAgICAgICAgICAgICB0aGlzLmdyb3VuZExheWVyLnB1dFRpbGVBdChEdW5nZW9uMVRpbGVTZXRJbmRleC5Ub3BHYXRlQ2FwLCBNYXRoLmZsb29yKHRpbGVNYXAud2lkdGggLyAyKSwgMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyByaWdodFxuICAgICAgICAgICAgdGhpcy5ncm91bmRMYXllci53ZWlnaHRlZFJhbmRvbWl6ZSh0aWxlTWFwLndpZHRoIC0gMiwgMiwgMSwgdGlsZU1hcC5oZWlnaHQgLSA0LCBEdW5nZW9uMVRpbGVTZXRJbmRleFdhbGxXZWlnaHRzLlJpZ2h0V2FsbCk7XG4gICAgICAgICAgICBpZiAoc291cmNlLmNvbm5lY3RlZFJvb21zLlJpZ2h0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ncm91bmRMYXllci5wdXRUaWxlQXQoRHVuZ2VvbjFUaWxlU2V0SW5kZXguUmlnaHRHYXRlLCB0aWxlTWFwLndpZHRoIC0gMiwgTWF0aC5mbG9vcih0aWxlTWFwLmhlaWdodCAvIDIpKTtcbiAgICAgICAgICAgICAgICB0aGlzLmdyb3VuZExheWVyLnB1dFRpbGVBdChEdW5nZW9uMVRpbGVTZXRJbmRleC5SaWdodEdhdGVDYXAsIHRpbGVNYXAud2lkdGggLSAxLCBNYXRoLmZsb29yKHRpbGVNYXAuaGVpZ2h0IC8gMikpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gYm90dG9tXG4gICAgICAgICAgICB0aGlzLmdyb3VuZExheWVyLndlaWdodGVkUmFuZG9taXplKDIsIHRpbGVNYXAuaGVpZ2h0IC0gMiwgdGlsZU1hcC53aWR0aCAtIDQsIDEsIER1bmdlb24xVGlsZVNldEluZGV4V2FsbFdlaWdodHMuQm90dG9tV2FsbCk7XG4gICAgICAgICAgICBpZiAoc291cmNlLmNvbm5lY3RlZFJvb21zLkJlbG93KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ncm91bmRMYXllci5wdXRUaWxlQXQoRHVuZ2VvbjFUaWxlU2V0SW5kZXguQm90dG9tR2F0ZSwgTWF0aC5mbG9vcih0aWxlTWFwLndpZHRoIC8gMiksIHRpbGVNYXAuaGVpZ2h0IC0gMik7XG4gICAgICAgICAgICAgICAgdGhpcy5ncm91bmRMYXllci5wdXRUaWxlQXQoRHVuZ2VvbjFUaWxlU2V0SW5kZXguQm90dG9tR2F0ZUNhcCwgTWF0aC5mbG9vcih0aWxlTWFwLndpZHRoIC8gMiksIHRpbGVNYXAuaGVpZ2h0IC0gMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBsZWZ0XG4gICAgICAgICAgICB0aGlzLmdyb3VuZExheWVyLndlaWdodGVkUmFuZG9taXplKDEsIDIsIDEsIHRpbGVNYXAuaGVpZ2h0IC0gNCwgRHVuZ2VvbjFUaWxlU2V0SW5kZXhXYWxsV2VpZ2h0cy5MZWZ0V2FsbCk7XG4gICAgICAgICAgICBpZiAoc291cmNlLmNvbm5lY3RlZFJvb21zLkxlZnQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmdyb3VuZExheWVyLnB1dFRpbGVBdChEdW5nZW9uMVRpbGVTZXRJbmRleC5MZWZ0R2F0ZSwgMSwgTWF0aC5mbG9vcih0aWxlTWFwLmhlaWdodCAvIDIpKTtcbiAgICAgICAgICAgICAgICB0aGlzLmdyb3VuZExheWVyLnB1dFRpbGVBdChEdW5nZW9uMVRpbGVTZXRJbmRleC5MZWZ0R2F0ZUNhcCwgMCwgTWF0aC5mbG9vcih0aWxlTWFwLmhlaWdodCAvIDIpKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc3dpdGNoIChzb3VyY2Uucm9vbVR5cGUpIHtcbiAgICAgICAgICAgICAgICBjYXNlIFJvb21UeXBlLk5vcm1hbDpcbiAgICAgICAgICAgICAgICBjYXNlIFJvb21UeXBlLlBpbGxhcjpcbiAgICAgICAgICAgICAgICBjYXNlIFJvb21UeXBlLkRpdmlkZWQ6XG4gICAgICAgICAgICAgICAgY2FzZSBSb29tVHlwZS5DaGVzdDpcbiAgICAgICAgICAgICAgICBjYXNlIFJvb21UeXBlLkhvbGU6XG4gICAgICAgICAgICAgICAgICAgIC8vIGhvbGUgY29ybmVyc1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmdyb3VuZExheWVyLnB1dFRpbGVBdChEdW5nZW9uMVRpbGVTZXRJbmRleC5Ib2xlVG9wTGVmdENvcm5lciwgNCwgNCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ3JvdW5kTGF5ZXIucHV0VGlsZUF0KER1bmdlb24xVGlsZVNldEluZGV4LkhvbGVUb3BSaWdodENvcm5lciwgdGlsZU1hcC53aWR0aCAtIDUsIDQpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmdyb3VuZExheWVyLnB1dFRpbGVBdChEdW5nZW9uMVRpbGVTZXRJbmRleC5Ib2xlQm90dG9tTGVmdENvcm5lciwgNCwgdGlsZU1hcC5oZWlnaHQgLSA1KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ncm91bmRMYXllci5wdXRUaWxlQXQoRHVuZ2VvbjFUaWxlU2V0SW5kZXguSG9sZUJvdHRvbVJpZ2h0Q29ybmVyLCB0aWxlTWFwLndpZHRoIC0gNSwgdGlsZU1hcC5oZWlnaHQgLSA1KTtcblxuICAgICAgICAgICAgICAgICAgICAvLyB0b3Agd2FsbFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdyb3VuZExheWVyLndlaWdodGVkUmFuZG9taXplKDUsIDQsIHRpbGVNYXAud2lkdGggLSAxMCwgMSwgRHVuZ2VvbjFUaWxlU2V0SW5kZXhXYWxsV2VpZ2h0cy5Cb3R0b21XYWxsKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gcmlnaHQgd2FsbFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdyb3VuZExheWVyLndlaWdodGVkUmFuZG9taXplKHRpbGVNYXAud2lkdGggLSA1LCA1LCAxLCB0aWxlTWFwLmhlaWdodCAtIDEwLCBEdW5nZW9uMVRpbGVTZXRJbmRleFdhbGxXZWlnaHRzLkxlZnRXYWxsKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gYm90dG9tIHdhbGxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ncm91bmRMYXllci53ZWlnaHRlZFJhbmRvbWl6ZSg1LCB0aWxlTWFwLmhlaWdodCAtIDUsIHRpbGVNYXAud2lkdGggLSAxMCwgMSwgRHVuZ2VvbjFUaWxlU2V0SW5kZXhXYWxsV2VpZ2h0cy5Ub3BXYWxsKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gbGVmdCB3YWxsXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ3JvdW5kTGF5ZXIud2VpZ2h0ZWRSYW5kb21pemUoNCwgNSwgMSwgdGlsZU1hcC5oZWlnaHQgLSAxMCwgRHVuZ2VvbjFUaWxlU2V0SW5kZXhXYWxsV2VpZ2h0cy5SaWdodFdhbGwpO1xuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLmdyb3VuZExheWVyLndlaWdodGVkUmFuZG9taXplXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ3JvdW5kTGF5ZXIuZmlsbChEdW5nZW9uMVRpbGVTZXRJbmRleC5FbXB0eSwgNSwgNSwgdGlsZU1hcC53aWR0aCAtIDEwLCB0aWxlTWFwLmhlaWdodCAtIDEwKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIHBlcnNpc3QgdGhlIGxheWVycyB3ZSBidWlsdCB0byB0aGUgcm9vbVxuICAgICAgICAgICAgc291cmNlLmxheWVyc1tncm91bmRMYXllck5hbWVdID0gW107XG4gICAgICAgICAgICB0aGlzLmdyb3VuZExheWVyLmZvckVhY2hUaWxlKCh0aWxlKSA9PiB7XG4gICAgICAgICAgICAgICAgc291cmNlLmxheWVyc1tncm91bmRMYXllck5hbWVdLnB1c2goeyB0aWxlSW5kZXg6IHRpbGUuaW5kZXgsIHg6IHRpbGUueCwgeTogdGlsZS55IH0pO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHNvdXJjZS5sYXllcnNbc3R1ZmZMYXllck5hbWVdID0gW107XG4gICAgICAgICAgICB0aGlzLnN0dWZmTGF5ZXIuZm9yRWFjaFRpbGUoKHRpbGUpID0+IHtcbiAgICAgICAgICAgICAgICBzb3VyY2UubGF5ZXJzW3N0dWZmTGF5ZXJOYW1lXS5wdXNoKHsgdGlsZUluZGV4OiB0aWxlLmluZGV4LCB4OiB0aWxlLngsIHk6IHRpbGUueSB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5ncm91bmRMYXllci5zZXRUaWxlSW5kZXhDYWxsYmFjayhEdW5nZW9uMVRpbGVTZXRJbmRleC5Ub3BHYXRlLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnBsYXllcj8uZnJlZXplKCk7XG5cbiAgICAgICAgICAgIGNvbnN0IGNhbWVyYSA9IHRoaXMuY2FtZXJhcy5tYWluO1xuICAgICAgICAgICAgY2FtZXJhLmZhZGUoMjUwLCAwLCAwLCAwKTtcblxuICAgICAgICAgICAgY2FtZXJhLm9uY2UoJ2NhbWVyYWZhZGVvdXRjb21wbGV0ZScsICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllcj8uZGVzdHJveSgpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2NlbmUucmVzdGFydCh7IHNvdXJjZTogc291cmNlLmNvbm5lY3RlZFJvb21zLkFib3ZlLCBwbGF5ZXI6IHRoaXMucGxheWVyLCBlbnRyYW5jZURpcmVjdGlvbjogRGlyZWN0aW9uLkJlbG93IH0pXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSwgdGhpcyk7XG5cbiAgICAgICAgdGhpcy5ncm91bmRMYXllci5zZXRUaWxlSW5kZXhDYWxsYmFjayhEdW5nZW9uMVRpbGVTZXRJbmRleC5SaWdodEdhdGUsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMucGxheWVyPy5mcmVlemUoKTtcblxuICAgICAgICAgICAgY29uc3QgY2FtZXJhID0gdGhpcy5jYW1lcmFzLm1haW47XG4gICAgICAgICAgICBjYW1lcmEuZmFkZSgyNTAsIDAsIDAsIDApO1xuXG4gICAgICAgICAgICBjYW1lcmEub25jZSgnY2FtZXJhZmFkZW91dGNvbXBsZXRlJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyPy5kZXN0cm95KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5zY2VuZS5yZXN0YXJ0KHsgc291cmNlOiBzb3VyY2UuY29ubmVjdGVkUm9vbXMuUmlnaHQsIHBsYXllcjogdGhpcy5wbGF5ZXIsIGVudHJhbmNlRGlyZWN0aW9uOiBEaXJlY3Rpb24uTGVmdCB9KVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sIHRoaXMpO1xuXG4gICAgICAgIHRoaXMuZ3JvdW5kTGF5ZXIuc2V0VGlsZUluZGV4Q2FsbGJhY2soRHVuZ2VvbjFUaWxlU2V0SW5kZXguQm90dG9tR2F0ZSwgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5wbGF5ZXI/LmZyZWV6ZSgpO1xuXG4gICAgICAgICAgICBjb25zdCBjYW1lcmEgPSB0aGlzLmNhbWVyYXMubWFpbjtcbiAgICAgICAgICAgIGNhbWVyYS5mYWRlKDI1MCwgMCwgMCwgMCk7XG5cbiAgICAgICAgICAgIGNhbWVyYS5vbmNlKCdjYW1lcmFmYWRlb3V0Y29tcGxldGUnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXI/LmRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNjZW5lLnJlc3RhcnQoeyBzb3VyY2U6IHNvdXJjZS5jb25uZWN0ZWRSb29tcy5CZWxvdywgcGxheWVyOiB0aGlzLnBsYXllciwgZW50cmFuY2VEaXJlY3Rpb246IERpcmVjdGlvbi5BYm92ZSB9KVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sIHRoaXMpO1xuXG4gICAgICAgIHRoaXMuZ3JvdW5kTGF5ZXIuc2V0VGlsZUluZGV4Q2FsbGJhY2soRHVuZ2VvbjFUaWxlU2V0SW5kZXguTGVmdEdhdGUsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMucGxheWVyPy5mcmVlemUoKTtcblxuICAgICAgICAgICAgY29uc3QgY2FtZXJhID0gdGhpcy5jYW1lcmFzLm1haW47XG4gICAgICAgICAgICBjYW1lcmEuZmFkZSgyNTAsIDAsIDAsIDApO1xuXG4gICAgICAgICAgICBjYW1lcmEub25jZSgnY2FtZXJhZmFkZW91dGNvbXBsZXRlJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyPy5kZXN0cm95KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5zY2VuZS5yZXN0YXJ0KHsgc291cmNlOiBzb3VyY2UuY29ubmVjdGVkUm9vbXMuTGVmdCwgcGxheWVyOiB0aGlzLnBsYXllciwgZW50cmFuY2VEaXJlY3Rpb246IERpcmVjdGlvbi5SaWdodCB9KVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sIHRoaXMpO1xuXG4gICAgICAgIGxldCBwbGF5ZXJTdGFydGluZ1ggPSByb29tUG9zaXRpb24uY2VudGVyLnhcbiAgICAgICAgbGV0IHBsYXllclN0YXJ0aW5nWSA9IHJvb21Qb3NpdGlvbi5jZW50ZXIueTtcbiAgICAgICAgaWYgKGVudHJhbmNlRGlyZWN0aW9uICE9IG51bGwpIHtcbiAgICAgICAgICAgIHN3aXRjaCAoZW50cmFuY2VEaXJlY3Rpb24pIHtcbiAgICAgICAgICAgICAgICBjYXNlIERpcmVjdGlvbi5MZWZ0OlxuICAgICAgICAgICAgICAgICAgICBwbGF5ZXJTdGFydGluZ1ggPSByb29tUG9zaXRpb24udG9wTGVmdC54ICsgMTIwO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIERpcmVjdGlvbi5SaWdodDpcbiAgICAgICAgICAgICAgICAgICAgcGxheWVyU3RhcnRpbmdYID0gcm9vbVBvc2l0aW9uLnRvcFJpZ2h0LnggLSAxMjA7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgRGlyZWN0aW9uLkFib3ZlOlxuICAgICAgICAgICAgICAgICAgICBwbGF5ZXJTdGFydGluZ1kgPSByb29tUG9zaXRpb24udG9wTGVmdC55ICsgMTIwO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIERpcmVjdGlvbi5CZWxvdzpcbiAgICAgICAgICAgICAgICAgICAgcGxheWVyU3RhcnRpbmdZID0gcm9vbVBvc2l0aW9uLmJvdHRvbUxlZnQueSAtIDEyMDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wbGF5ZXI/LnJlZ2lzdGVyTmV3U2NlbmUodGhpcywgcGxheWVyU3RhcnRpbmdYLCBwbGF5ZXJTdGFydGluZ1kpO1xuXG4gICAgICAgIC8vIG11c3Qgd2FpdCBmb3IgdGhpcyB1bnRpbCBhZnRlciByZWdpc3Rlck5ld1NjZW5lLCBiZWNhdXNlIGEgbmV3IHNwcml0ZSBpcyBzcHVuIHVwIGZvciBlYWNoIHNjZW5lXG4gICAgICAgIHRoaXMuZ3JvdW5kTGF5ZXIuc2V0Q29sbGlzaW9uQnlFeGNsdXNpb24oW1xuICAgICAgICAgICAgLTEsXG4gICAgICAgICAgICBEdW5nZW9uMVRpbGVTZXRJbmRleC5Ob3JtYWxGbG9vcixcbiAgICAgICAgICAgIER1bmdlb24xVGlsZVNldEluZGV4LlRleHR1cmVkRmxvb3IxXG4gICAgICAgIF0pO1xuICAgICAgICB0aGlzLnBoeXNpY3MuYWRkLmNvbGxpZGVyKHRoaXMucGxheWVyPy5zcHJpdGUgYXMgUGhhc2VyLkdhbWVPYmplY3RzLkdhbWVPYmplY3QsIHRoaXMuZ3JvdW5kTGF5ZXIpO1xuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0Um9vbVBvc2l0aW9uKCk6IHtcbiAgICAgICAgY2VudGVyOiB7IHg6IG51bWJlciwgeTogbnVtYmVyIH0sXG4gICAgICAgIHRvcExlZnQ6IHsgeDogbnVtYmVyLCB5OiBudW1iZXIgIH0sXG4gICAgICAgIHRvcFJpZ2h0OiB7IHg6IG51bWJlciwgeTogbnVtYmVyICB9LFxuICAgICAgICB0b3BDZW50ZXI6IHsgeDogbnVtYmVyLCB5OiBudW1iZXIgfSxcbiAgICAgICAgcmlnaHRDZW50ZXI6IHsgeDogbnVtYmVyLCB5OiBudW1iZXIgfSxcbiAgICAgICAgYm90dG9tTGVmdDogeyB4OiBudW1iZXIsIHk6IG51bWJlciAgfSxcbiAgICAgICAgYm90dG9tUmlnaHQ6IHsgeDogbnVtYmVyLCB5OiBudW1iZXIgIH0sXG4gICAgICAgIGJvdHRvbUNlbnRlcjogeyB4OiBudW1iZXIsIHk6IG51bWJlciB9LFxuICAgICAgICBsZWZ0Q2VudGVyOiB7IHg6IG51bWJlciwgeTogbnVtYmVyIH1cbiAgICB9IHtcbiAgICAgICAgY29uc3Qgcm9vbVdpZHRoID0gcm9vbVRpbGVXaWR0aCAqIHRpbGVTaXplO1xuICAgICAgICBjb25zdCBoYWxmUm9vbVdpZHRoID0gcm9vbVdpZHRoICogMC41O1xuICAgICAgICBjb25zdCByb29tSGVpZ2h0ID0gcm9vbVRpbGVIZWlnaHQgKiB0aWxlU2l6ZTtcbiAgICAgICAgY29uc3QgaGFsZlJvb21IZWlnaHQgPSByb29tSGVpZ2h0ICogMC41O1xuXG4gICAgICAgIGNvbnN0IGdhbWVIZWlnaHQgPSBnZXRHYW1lSGVpZ2h0KHRoaXMpO1xuICAgICAgICBjb25zdCBoYWxmR2FtZUhlaWdodCA9IGdhbWVIZWlnaHQgKiAwLjU7XG4gICAgICAgIGNvbnN0IGdhbWVXaWR0aCA9IGdldEdhbWVXaWR0aCh0aGlzKTtcbiAgICAgICAgY29uc3QgaGFsZkdhbWVXaWR0aCA9IGdhbWVXaWR0aCAqIDAuNTtcblxuICAgICAgICBjb25zdCB0b3BZID0gTWF0aC5tYXgoMCwgaGFsZkdhbWVIZWlnaHQgLSBoYWxmUm9vbUhlaWdodCk7XG4gICAgICAgIGNvbnN0IGJvdHRvbVkgPSBoYWxmR2FtZUhlaWdodCArIGhhbGZSb29tSGVpZ2h0O1xuICAgICAgICBjb25zdCBsZWZ0WCA9IE1hdGgubWF4KDAsIGhhbGZHYW1lV2lkdGggLSBoYWxmUm9vbVdpZHRoKTtcbiAgICAgICAgY29uc3QgcmlnaHRYID0gaGFsZkdhbWVXaWR0aCArIGhhbGZSb29tV2lkdGg7XG4gICAgICAgIGNvbnN0IGNlbnRlclggPSBoYWxmR2FtZVdpZHRoO1xuICAgICAgICBjb25zdCBjZW50ZXJZID0gaGFsZkdhbWVIZWlnaHQ7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGNlbnRlcjogeyB4OiBjZW50ZXJYLCB5OiBjZW50ZXJZIH0sXG4gICAgICAgICAgICB0b3BMZWZ0OiB7IHg6IGxlZnRYLCB5OiB0b3BZIH0sXG4gICAgICAgICAgICB0b3BDZW50ZXI6IHsgeDogY2VudGVyWCwgeTogdG9wWSB9LFxuICAgICAgICAgICAgdG9wUmlnaHQ6IHsgeDogcmlnaHRYLCB5OiB0b3BZIH0sXG4gICAgICAgICAgICByaWdodENlbnRlcjogeyB4OiByaWdodFgsIHk6IGNlbnRlclkgfSxcbiAgICAgICAgICAgIGJvdHRvbVJpZ2h0OiB7IHg6IHJpZ2h0WCwgeTogYm90dG9tWSB9LFxuICAgICAgICAgICAgYm90dG9tQ2VudGVyOiB7IHg6IGNlbnRlclgsIHk6IGJvdHRvbVkgfSxcbiAgICAgICAgICAgIGJvdHRvbUxlZnQ6IHsgeDogbGVmdFgsIHk6IGJvdHRvbVkgfSxcbiAgICAgICAgICAgIGxlZnRDZW50ZXI6IHsgeDogbGVmdFgsIHk6IGNlbnRlclkgfVxuICAgICAgICB9O1xuICAgIH1cbn1cbiIsImltcG9ydCB7IG5vb3AgfSBmcm9tICcuLi91dGlscyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUJ1dHRvbkNvbmZpZyB7XG4gICAgc2NlbmU6IFBoYXNlci5TY2VuZVxuICAgIHg6IG51bWJlclxuICAgIHk6IG51bWJlcixcbiAgICB0ZXh0OiBzdHJpbmcsXG4gICAgZm9udFNpemU/OiBudW1iZXIsXG4gICAgcGFkZGluZz86IG51bWJlcixcbiAgICBhbGlnbm1lbnQ/OiAnbGVmdCcgfCAncmlnaHQnIHwgJ2NlbnRlcicgfCAnanVzdGlmeScsXG4gICAgb25DbGljaz86ICgpID0+IHZvaWRcbn1cblxuZXhwb3J0IGNsYXNzIEJ1dHRvbiBleHRlbmRzIFBoYXNlci5HYW1lT2JqZWN0cy5SZWN0YW5nbGUge1xuICAgIHByaXZhdGUgbGFiZWw6IFBoYXNlci5HYW1lT2JqZWN0cy5UZXh0O1xuXG4gICAgY29uc3RydWN0b3IoeyBzY2VuZSwgeCwgeSwgdGV4dCwgZm9udFNpemUgPSAxOCwgcGFkZGluZyA9IDEwLCBhbGlnbm1lbnQgPSAnY2VudGVyJywgb25DbGljayA9IG5vb3AgfTogSUJ1dHRvbkNvbmZpZykge1xuICAgICAgICBzdXBlcihzY2VuZSwgeCwgeSk7XG4gICAgICAgIHNjZW5lLmFkZC5leGlzdGluZyh0aGlzKTtcblxuICAgICAgICB0aGlzLnNldE9yaWdpbigwLCAwKTtcblxuICAgICAgICB0aGlzLmxhYmVsID0gc2NlbmUuYWRkLnRleHQoeCArIHBhZGRpbmcsIHkgKyBwYWRkaW5nLCB0ZXh0KS5zZXRGb250U2l6ZShmb250U2l6ZSkuc2V0QWxpZ24oYWxpZ25tZW50KTtcbiAgICAgICAgdGhpcy53aWR0aCA9IHRoaXMubGFiZWwud2lkdGggKyAocGFkZGluZyAqIDIpO1xuICAgICAgICB0aGlzLmhlaWdodCA9IHRoaXMubGFiZWwuaGVpZ2h0ICsgKHBhZGRpbmcgKiAyKTtcblxuICAgICAgICB0aGlzLnNldEludGVyYWN0aXZlKHsgdXNlSGFuZEN1cnNvcjogdHJ1ZSB9KVxuICAgICAgICAgICAgLm9uKCdwb2ludGVyb3ZlcicsIHRoaXMuZW50ZXJCdXR0b25Ib3ZlclN0YXRlKVxuICAgICAgICAgICAgLm9uKCdwb2ludGVyb3V0JywgdGhpcy5lbnRlckJ1dHRvblJlc3RTdGF0ZSlcbiAgICAgICAgICAgIC5vbigncG9pbnRlcmRvd24nLCB0aGlzLmVudGVyQnV0dG9uQWN0aXZlU3RhdGUpXG4gICAgICAgICAgICAub24oJ3BvaW50ZXJ1cCcsIHRoaXMuZW50ZXJCdXR0b25Ib3ZlclN0YXRlKVxuICAgICAgICAgICAgLm9uKCdwb2ludGVydXAnLCBvbkNsaWNrKVxuXG4gICAgICAgIHRoaXMuZW50ZXJCdXR0b25SZXN0U3RhdGUoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGVudGVyQnV0dG9uQWN0aXZlU3RhdGUoKTogdm9pZCB7XG4gICAgICAgIHRoaXMubGFiZWwuc2V0Q29sb3IoJyNCQkJCQkInKTtcbiAgICAgICAgdGhpcy5zZXRGaWxsU3R5bGUoMHg0NDQ0NDQpO1xuICAgIH1cblxuICAgIHByaXZhdGUgZW50ZXJCdXR0b25Ib3ZlclN0YXRlKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmxhYmVsLnNldENvbG9yKCcjMDAwMDAwJyk7XG4gICAgICAgIHRoaXMuc2V0RmlsbFN0eWxlKDB4ODg4ODg4KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGVudGVyQnV0dG9uUmVzdFN0YXRlKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmxhYmVsLnNldENvbG9yKCcjRkZGRkZGJyk7XG4gICAgICAgIHRoaXMuc2V0RmlsbFN0eWxlKDB4ODg4ODg4KTtcbiAgICB9XG59XG4iLCJleHBvcnQgKiBmcm9tICcuL2J1dHRvbic7XG4iLCJpbXBvcnQgKiBhcyBQaGFzZXIgZnJvbSAncGhhc2VyJztcblxuZXhwb3J0IGNvbnN0IGdldEdhbWVXaWR0aCA9IChzY2VuZTogUGhhc2VyLlNjZW5lKSA9PiB7XG4gICAgcmV0dXJuIHNjZW5lLmdhbWUuc2NhbGUud2lkdGg7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0R2FtZUhlaWdodCA9IChzY2VuZTogUGhhc2VyLlNjZW5lKSA9PiB7XG4gICAgcmV0dXJuIHNjZW5lLmdhbWUuc2NhbGUuaGVpZ2h0O1xufTtcbiIsImV4cG9ydCAqIGZyb20gJy4vaGVscGVycyc7XG5leHBvcnQgKiBmcm9tICcuL25vb3AnO1xuIiwiLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1lbXB0eVxuZXhwb3J0IGNvbnN0IG5vb3AgPSAoKSA9PiB7fTtcbiJdLCJzb3VyY2VSb290IjoiIn0=