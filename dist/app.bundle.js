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
     * Recursively create a path of rooms. forceRoomConnections should only be used on the initial call of this (for spawnRoom)
     */
    Dungeon.prototype.generateConnectedRooms = function (sourceRoom, forceRoomConnections) {
        var _a;
        var roomMap = (_a = {},
            _a[Room_1.RoomConnection.LEFT] = { x: sourceRoom.roomCoordinates.x - 1, y: sourceRoom.roomCoordinates.y },
            _a[Room_1.RoomConnection.RIGHT] = { x: sourceRoom.roomCoordinates.x + 1, y: sourceRoom.roomCoordinates.y },
            _a[Room_1.RoomConnection.ABOVE] = { x: sourceRoom.roomCoordinates.x, y: sourceRoom.roomCoordinates.y - 1 },
            _a[Room_1.RoomConnection.BELOW] = { x: sourceRoom.roomCoordinates.x, y: sourceRoom.roomCoordinates.y + 1 },
            _a);
        var possibleConnections = [];
        if (roomMap[Room_1.RoomConnection.LEFT].x >= 0 && this.rooms[roomMap[Room_1.RoomConnection.LEFT].y][roomMap[Room_1.RoomConnection.LEFT].x] === null) {
            possibleConnections.push(Room_1.RoomConnection.LEFT);
        }
        if (roomMap[Room_1.RoomConnection.RIGHT].x <= 9 && this.rooms[roomMap[Room_1.RoomConnection.RIGHT].y][roomMap[Room_1.RoomConnection.RIGHT].x] === null) {
            possibleConnections.push(Room_1.RoomConnection.RIGHT);
        }
        if (roomMap[Room_1.RoomConnection.ABOVE].y >= 0 && this.rooms[roomMap[Room_1.RoomConnection.ABOVE].y][roomMap[Room_1.RoomConnection.ABOVE].x] === null) {
            possibleConnections.push(Room_1.RoomConnection.ABOVE);
        }
        if (roomMap[Room_1.RoomConnection.BELOW].y <= 9 && this.rooms[roomMap[Room_1.RoomConnection.BELOW].y][roomMap[Room_1.RoomConnection.BELOW].x] === null) {
            possibleConnections.push(Room_1.RoomConnection.BELOW);
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
            newRooms.push(newRoom);
            sourceRoom.connectedRooms[directionToUse] = newRoom; // let the source room know it has a connection to the new room in this direction
            newRoom.connectedRooms[Room_1.oppositeRoomConnection[directionToUse]] = sourceRoom; // let the new room know it has a connection to the source room in the opposite direction
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
exports.Room = exports.oppositeRoomConnection = exports.RoomConnection = void 0;
var RoomConnection;
(function (RoomConnection) {
    RoomConnection["LEFT"] = "Left";
    RoomConnection["RIGHT"] = "Right";
    RoomConnection["ABOVE"] = "Above";
    RoomConnection["BELOW"] = "Below";
})(RoomConnection = exports.RoomConnection || (exports.RoomConnection = {}));
exports.oppositeRoomConnection = (_a = {},
    _a[RoomConnection.LEFT] = RoomConnection.RIGHT,
    _a[RoomConnection.RIGHT] = RoomConnection.LEFT,
    _a[RoomConnection.ABOVE] = RoomConnection.BELOW,
    _a[RoomConnection.BELOW] = RoomConnection.ABOVE,
    _a);
var Room = /** @class */ (function () {
    function Room(roomCoordinates) {
        var _a;
        this.roomCoordinates = roomCoordinates;
        this.connectedRooms = (_a = {},
            _a[RoomConnection.LEFT] = null,
            _a[RoomConnection.RIGHT] = null,
            _a[RoomConnection.ABOVE] = null,
            _a[RoomConnection.BELOW] = null,
            _a);
        this.isDeadEnd = false;
        this.isSpawn = false;
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
exports.Dungeon1TileSetIndex = void 0;
var Dungeon1TileSetIndex;
(function (Dungeon1TileSetIndex) {
    Dungeon1TileSetIndex[Dungeon1TileSetIndex["BottomNormalWall"] = 1] = "BottomNormalWall";
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
    Dungeon1TileSetIndex[Dungeon1TileSetIndex["TopNormalWall"] = 39] = "TopNormalWall";
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
    Dungeon1TileSetIndex[Dungeon1TileSetIndex["TexturedFloor28"] = 87] = "TexturedFloor28";
    Dungeon1TileSetIndex[Dungeon1TileSetIndex["TexturedFloor29"] = 88] = "TexturedFloor29";
    Dungeon1TileSetIndex[Dungeon1TileSetIndex["LeftTexturedWall2"] = 95] = "LeftTexturedWall2";
    Dungeon1TileSetIndex[Dungeon1TileSetIndex["RightTexturedWall2"] = 96] = "RightTexturedWall2";
    Dungeon1TileSetIndex[Dungeon1TileSetIndex["TopGateCap"] = 99] = "TopGateCap";
    Dungeon1TileSetIndex[Dungeon1TileSetIndex["TexturedFloor30"] = 107] = "TexturedFloor30";
    Dungeon1TileSetIndex[Dungeon1TileSetIndex["TexturedFloor31"] = 108] = "TexturedFloor31";
    Dungeon1TileSetIndex[Dungeon1TileSetIndex["LeftTexturedWall3"] = 114] = "LeftTexturedWall3";
    Dungeon1TileSetIndex[Dungeon1TileSetIndex["RightTexturedWall3"] = 115] = "RightTexturedWall3";
    Dungeon1TileSetIndex[Dungeon1TileSetIndex["TopGate"] = 118] = "TopGate";
    Dungeon1TileSetIndex[Dungeon1TileSetIndex["BottomGate"] = 139] = "BottomGate";
    Dungeon1TileSetIndex[Dungeon1TileSetIndex["TopGateLocked"] = 157] = "TopGateLocked";
    Dungeon1TileSetIndex[Dungeon1TileSetIndex["BottomGateCap"] = 158] = "BottomGateCap";
    Dungeon1TileSetIndex[Dungeon1TileSetIndex["BottomGateLocked"] = 177] = "BottomGateLocked";
    Dungeon1TileSetIndex[Dungeon1TileSetIndex["RightGate"] = 209] = "RightGate";
    Dungeon1TileSetIndex[Dungeon1TileSetIndex["RightGateCap"] = 210] = "RightGateCap";
    Dungeon1TileSetIndex[Dungeon1TileSetIndex["RightGateLocked"] = 213] = "RightGateLocked";
    Dungeon1TileSetIndex[Dungeon1TileSetIndex["LeftGateCap"] = 228] = "LeftGateCap";
    Dungeon1TileSetIndex[Dungeon1TileSetIndex["LeftGate"] = 229] = "LeftGate";
    Dungeon1TileSetIndex[Dungeon1TileSetIndex["LeftGateLocked"] = 233] = "LeftGateLocked";
})(Dungeon1TileSetIndex = exports.Dungeon1TileSetIndex || (exports.Dungeon1TileSetIndex = {}));
;


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
var roomTileWidth = 29;
var roomTileHeight = 15;
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
        this.load.image('tiles', '/assets/img/tilesheets/dungeon-1.png');
        this.load.spritesheet('player', '/assets/img/spritesheets/rogue.png', { frameWidth: 30, frameHeight: 30 });
        this.scale.on('resize', function (gameSize) {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
            var currentX = (_b = (_a = _this.groundLayer) === null || _a === void 0 ? void 0 : _a.x) !== null && _b !== void 0 ? _b : 0;
            var currentY = (_d = (_c = _this.groundLayer) === null || _c === void 0 ? void 0 : _c.y) !== null && _d !== void 0 ? _d : 0;
            var currentPlayerX = (_g = (_f = (_e = _this.player) === null || _e === void 0 ? void 0 : _e.sprite) === null || _f === void 0 ? void 0 : _f.x) !== null && _g !== void 0 ? _g : 0;
            var currentPlayerY = (_k = (_j = (_h = _this.player) === null || _h === void 0 ? void 0 : _h.sprite) === null || _j === void 0 ? void 0 : _j.y) !== null && _k !== void 0 ? _k : 0;
            var layerXY = _this.getScenePosition();
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
        var layerXY = this.getScenePosition();
        this.groundLayer = tileMap.createBlankDynamicLayer(groundLayerName, tileSet, layerXY.topLeft.x, layerXY.topLeft.y);
        this.stuffLayer = tileMap.createBlankDynamicLayer(stuffLayerName, tileSet, layerXY.topLeft.x, layerXY.topLeft.y);
        if (Object.keys(source.layers).length > 0) {
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
            this.groundLayer.weightedRandomize(2, 1, tileMap.width - 4, 1, [
                { index: models_1.Dungeon1TileSetIndex.TopNormalWall, weight: 4 },
                { index: [models_1.Dungeon1TileSetIndex.TopTexturedWall1, models_1.Dungeon1TileSetIndex.TopTexturedWall2, models_1.Dungeon1TileSetIndex.TopTexturedWall3], weight: 1 }
            ]);
            if (source.connectedRooms.Above) {
                this.groundLayer.putTileAt(models_1.Dungeon1TileSetIndex.TopGate, Math.floor(tileMap.width / 2), 1);
                this.groundLayer.putTileAt(models_1.Dungeon1TileSetIndex.TopGateCap, Math.floor(tileMap.width / 2), 0);
            }
            // right
            this.groundLayer.weightedRandomize(tileMap.width - 2, 2, 1, tileMap.height - 4, [
                { index: models_1.Dungeon1TileSetIndex.RightNormalWall, weight: 4 },
                { index: [models_1.Dungeon1TileSetIndex.RightTexturedWall1, models_1.Dungeon1TileSetIndex.RightTexturedWall2, models_1.Dungeon1TileSetIndex.RightTexturedWall3], weight: 1 }
            ]);
            if (source.connectedRooms.Right) {
                this.groundLayer.putTileAt(models_1.Dungeon1TileSetIndex.RightGate, tileMap.width - 2, Math.floor(tileMap.height / 2));
                this.groundLayer.putTileAt(models_1.Dungeon1TileSetIndex.RightGateCap, tileMap.width - 1, Math.floor(tileMap.height / 2));
            }
            // bottom
            this.groundLayer.weightedRandomize(2, tileMap.height - 2, tileMap.width - 4, 1, [
                { index: models_1.Dungeon1TileSetIndex.BottomNormalWall, weight: 4 },
                { index: [models_1.Dungeon1TileSetIndex.BottomTexturedWall1, models_1.Dungeon1TileSetIndex.BottomTexturedWall2, models_1.Dungeon1TileSetIndex.BottomTexturedWall3], weight: 1 }
            ]);
            if (source.connectedRooms.Below) {
                this.groundLayer.putTileAt(models_1.Dungeon1TileSetIndex.BottomGate, Math.floor(tileMap.width / 2), tileMap.height - 2);
                this.groundLayer.putTileAt(models_1.Dungeon1TileSetIndex.BottomGateCap, Math.floor(tileMap.width / 2), tileMap.height - 1);
            }
            // left
            this.groundLayer.weightedRandomize(1, 2, 1, tileMap.height - 4, [
                { index: models_1.Dungeon1TileSetIndex.LeftNormalWall, weight: 4 },
                { index: [models_1.Dungeon1TileSetIndex.LeftTexturedWall1, models_1.Dungeon1TileSetIndex.LeftTexturedWall2, models_1.Dungeon1TileSetIndex.LeftTexturedWall3], weight: 1 }
            ]);
            if (source.connectedRooms.Left) {
                this.groundLayer.putTileAt(models_1.Dungeon1TileSetIndex.LeftGate, 1, Math.floor(tileMap.height / 2));
                this.groundLayer.putTileAt(models_1.Dungeon1TileSetIndex.LeftGateCap, 0, Math.floor(tileMap.height / 2));
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
                _this.scene.restart({ source: source.connectedRooms.Above, player: _this.player, entranceDirection: models_1.RoomConnection.BELOW });
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
                _this.scene.restart({ source: source.connectedRooms.Right, player: _this.player, entranceDirection: models_1.RoomConnection.LEFT });
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
                _this.scene.restart({ source: source.connectedRooms.Below, player: _this.player, entranceDirection: models_1.RoomConnection.ABOVE });
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
                _this.scene.restart({ source: source.connectedRooms.Left, player: _this.player, entranceDirection: models_1.RoomConnection.RIGHT });
            });
        }, this);
        // TODO: player stuff
        var sceneDetails = this.getScenePosition();
        var playerStartingX = sceneDetails.topLeft.x + ((sceneDetails.topRight.x - sceneDetails.topLeft.x) / 2);
        var playerStartingY = sceneDetails.topLeft.y + ((sceneDetails.bottomLeft.y - sceneDetails.topLeft.y) / 2);
        if (entranceDirection != null) {
            switch (entranceDirection) {
                case models_1.RoomConnection.LEFT:
                    playerStartingX = sceneDetails.topLeft.x + 120;
                    break;
                case models_1.RoomConnection.RIGHT:
                    playerStartingX = sceneDetails.topRight.x - 120;
                    break;
                case models_1.RoomConnection.ABOVE:
                    playerStartingY = sceneDetails.topLeft.y + 120;
                    break;
                case models_1.RoomConnection.BELOW:
                    playerStartingY = sceneDetails.bottomLeft.y - 120;
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
    RoomScene.prototype.getScenePosition = function () {
        var roomWidth = roomTileWidth * tileSize;
        var roomHeight = roomTileHeight * tileSize;
        var gameHeight = utils_1.getGameHeight(this);
        var gameWidth = utils_1.getGameWidth(this);
        var halfGameHeight = gameHeight * 0.5;
        var halfGameWidth = gameWidth * 0.5;
        var halfRoomWidth = roomWidth * 0.5;
        var halfRoomHeight = roomHeight * 0.5;
        var layerX = Math.max(0, halfGameWidth - halfRoomWidth);
        var layerY = Math.max(0, halfGameHeight - halfRoomHeight);
        return {
            topLeft: { x: layerX, y: layerY },
            topRight: { x: layerX + roomWidth, y: layerY },
            bottomLeft: { x: layerX, y: layerY + roomHeight },
            bottomRight: { x: layerX + roomWidth, y: layerY + roomHeight }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZGVscy9EdW5nZW9uLnRzIiwid2VicGFjazovLy8uL3NyYy9tb2RlbHMvUGxheWVyLnRzIiwid2VicGFjazovLy8uL3NyYy9tb2RlbHMvUm9vbS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWxzL1RpbGVTZXRJbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWxzL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvYm9vdC5zY2VuZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL2R1bmdlb24uc2NlbmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lcy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL21haW4tbWVudS5zY2VuZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL3Jvb20uc2NlbmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL2J1dHRvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2hlbHBlcnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9ub29wLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLFFBQVEsb0JBQW9CO1FBQzVCO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsaUJBQWlCLDRCQUE0QjtRQUM3QztRQUNBO1FBQ0Esa0JBQWtC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QUMsSUFBSSxFQUFDLElBQUksRUFBQyxJQUFJLEVBQUMsSUFBSSxFQUFDLElBQUksQ0FBQztZQUNuRCxDQUFDLElBQUksRUFBQyxJQUFJLEVBQUMsSUFBSSxFQUFDLElBQUksRUFBQyxJQUFJLEVBQUMsSUFBSSxFQUFDLElBQUksRUFBQyxJQUFJLEVBQUMsSUFBSSxFQUFDLElBQUksQ0FBQztZQUNuRCxDQUFDLElBQUksRUFBQyxJQUFJLEVBQUMsSUFBSSxFQUFDLElBQUksRUFBQyxJQUFJLEVBQUMsSUFBSSxFQUFDLElBQUksRUFBQyxJQUFJLEVBQUMsSUFBSSxFQUFDLElBQUksQ0FBQztZQUNuRCxDQUFDLElBQUksRUFBQyxJQUFJLEVBQUMsSUFBSSxFQUFDLElBQUksRUFBQyxJQUFJLEVBQUMsSUFBSSxFQUFDLElBQUksRUFBQyxJQUFJLEVBQUMsSUFBSSxFQUFDLElBQUksQ0FBQztZQUNuRCxDQUFDLElBQUksRUFBQyxJQUFJLEVBQUMsSUFBSSxFQUFDLElBQUksRUFBQyxJQUFJLEVBQUMsSUFBSSxFQUFDLElBQUksRUFBQyxJQUFJLEVBQUMsSUFBSSxFQUFDLElBQUksQ0FBQztZQUNuRCxDQUFDLElBQUksRUFBQyxJQUFJLEVBQUMsSUFBSSxFQUFDLElBQUksRUFBQyxJQUFJLEVBQUMsSUFBSSxFQUFDLElBQUksRUFBQyxJQUFJLEVBQUMsSUFBSSxFQUFDLElBQUksQ0FBQztZQUNuRCxDQUFDLElBQUksRUFBQyxJQUFJLEVBQUMsSUFBSSxFQUFDLElBQUksRUFBQyxJQUFJLEVBQUMsSUFBSSxFQUFDLElBQUksRUFBQyxJQUFJLEVBQUMsSUFBSSxFQUFDLElBQUksQ0FBQztTQUN0RCxDQUFDO1FBR0UsaURBQWlEO1FBQ2pELHdFQUF3RTtRQUN4RSxJQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDeEUsSUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRXhFLHNCQUFzQjtRQUN0QixJQUFNLFNBQVMsR0FBRyxJQUFJLFdBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUM7UUFDckQsU0FBUyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDekIsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxTQUFTLENBQUM7UUFFdkMsSUFBSSxDQUFDLHNCQUFzQixDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBR0QscUJBQXFCO0lBQ3JCLHFCQUFxQjtJQUNyQixxQkFBcUI7SUFDckI7O09BRUc7SUFDSyx3Q0FBc0IsR0FBOUIsVUFBK0IsVUFBZ0IsRUFBRSxvQkFBNkI7O1FBQzFFLElBQU0sT0FBTztZQUNULEdBQUMscUJBQWMsQ0FBQyxJQUFJLElBQUcsRUFBRSxDQUFDLEVBQUUsVUFBVSxDQUFDLGVBQWUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxVQUFVLENBQUMsZUFBZSxDQUFDLENBQUMsRUFBRTtZQUMvRixHQUFDLHFCQUFjLENBQUMsS0FBSyxJQUFHLEVBQUUsQ0FBQyxFQUFFLFVBQVUsQ0FBQyxlQUFlLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsVUFBVSxDQUFDLGVBQWUsQ0FBQyxDQUFDLEVBQUU7WUFDaEcsR0FBQyxxQkFBYyxDQUFDLEtBQUssSUFBRyxFQUFFLENBQUMsRUFBRSxVQUFVLENBQUMsZUFBZSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsVUFBVSxDQUFDLGVBQWUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ2hHLEdBQUMscUJBQWMsQ0FBQyxLQUFLLElBQUcsRUFBRSxDQUFDLEVBQUUsVUFBVSxDQUFDLGVBQWUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLFVBQVUsQ0FBQyxlQUFlLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRTtlQUNuRyxDQUFDO1FBRUYsSUFBTSxtQkFBbUIsR0FBcUIsRUFBRSxDQUFDO1FBQ2pELElBQUksT0FBTyxDQUFDLHFCQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxxQkFBYyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxxQkFBYyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLElBQUksRUFBRTtZQUM1SCxtQkFBbUIsQ0FBQyxJQUFJLENBQUMscUJBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNqRDtRQUVELElBQUksT0FBTyxDQUFDLHFCQUFjLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxxQkFBYyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxxQkFBYyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLElBQUksRUFBRTtZQUMvSCxtQkFBbUIsQ0FBQyxJQUFJLENBQUMscUJBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNsRDtRQUVELElBQUksT0FBTyxDQUFDLHFCQUFjLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxxQkFBYyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxxQkFBYyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLElBQUksRUFBRTtZQUMvSCxtQkFBbUIsQ0FBQyxJQUFJLENBQUMscUJBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNsRDtRQUVELElBQUksT0FBTyxDQUFDLHFCQUFjLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxxQkFBYyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxxQkFBYyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLElBQUksRUFBRTtZQUMvSCxtQkFBbUIsQ0FBQyxJQUFJLENBQUMscUJBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNsRDtRQUVELElBQU0sd0JBQXdCLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsSUFBSSxDQUFDLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ25JLElBQUksd0JBQXdCLEtBQUssQ0FBQyxFQUFFO1lBQ2hDLFVBQVUsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1lBQzVCLE9BQU87U0FDVjtRQUVELElBQU0sUUFBUSxHQUFXLEVBQUUsQ0FBQztRQUM1QixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsd0JBQXdCLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDL0MsOENBQThDO1lBQzlDLElBQU0sY0FBYyxHQUFHLG1CQUFtQixDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxtQkFBbUIsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNoSCxJQUFNLGtCQUFrQixHQUFHLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUNuRCxJQUFNLE9BQU8sR0FBRyxJQUFJLFdBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1lBQzdDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDdkIsVUFBVSxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQUMsR0FBRyxPQUFPLENBQUMsQ0FBQyxpRkFBaUY7WUFDdEksT0FBTyxDQUFDLGNBQWMsQ0FBQyw2QkFBc0IsQ0FBQyxjQUFjLENBQUMsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxDQUFDLHlGQUF5RjtZQUV0SyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsR0FBRyxPQUFPLENBQUMsQ0FBQyx3Q0FBd0M7U0FDdkg7UUFFRCxLQUFzQixVQUFRLEVBQVIscUJBQVEsRUFBUixzQkFBUSxFQUFSLElBQVEsRUFBRTtZQUEzQixJQUFNLE9BQU87WUFDZCxJQUFJLENBQUMsc0JBQXNCLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDeEM7SUFDTCxDQUFDO0lBQ0wsY0FBQztBQUFELENBQUM7QUFwRlksMEJBQU87Ozs7Ozs7Ozs7Ozs7Ozs7QUNBcEIsSUFBTSxTQUFTLEdBQUcsR0FBRyxDQUFDO0FBRXRCO0lBTUk7UUFDSSxPQUFPO0lBQ1gsQ0FBQztJQUVNLHdCQUFPLEdBQWQ7O1FBQ0ksVUFBSSxDQUFDLE1BQU0sMENBQUUsT0FBTyxHQUFHO0lBQzNCLENBQUM7SUFFTSx1QkFBTSxHQUFiOztRQUNJLENBQUMsVUFBSSxDQUFDLE1BQU0sMENBQUUsSUFBbUMsRUFBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQ3BFLENBQUM7SUFFTSxpQ0FBZ0IsR0FBdkIsVUFBd0IsS0FBZ0IsRUFBRSxTQUFpQixFQUFFLFNBQWlCO1FBQzFFLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBRW5CLElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDO1FBRS9CLEtBQUssQ0FBQyxNQUFNLENBQUM7WUFDVCxHQUFHLEVBQUUsYUFBYTtZQUNsQixNQUFNLEVBQUUsS0FBSyxDQUFDLG9CQUFvQixDQUFDLFFBQVEsRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDO1lBQ2xFLFNBQVMsRUFBRSxDQUFDO1lBQ1osTUFBTSxFQUFFLENBQUMsQ0FBQztTQUNiLENBQUMsQ0FBQztRQUVILEtBQUssQ0FBQyxNQUFNLENBQUM7WUFDVCxHQUFHLEVBQUUsa0JBQWtCO1lBQ3ZCLE1BQU0sRUFBRSxLQUFLLENBQUMsb0JBQW9CLENBQUMsUUFBUSxFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLENBQUM7WUFDbkUsU0FBUyxFQUFFLENBQUM7WUFDWixNQUFNLEVBQUUsQ0FBQyxDQUFDO1NBQ2IsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUc7YUFDMUIsTUFBTSxDQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQzthQUN6QyxPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQzthQUNiLFNBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUVuQixJQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLGdCQUFnQixFQUFFLENBQUM7SUFDeEQsQ0FBQztJQUVNLHVCQUFNLEdBQWI7O1FBQ0ksSUFBTSxJQUFJLEdBQUcsVUFBSSxDQUFDLE1BQU0sMENBQUUsSUFBa0MsQ0FBQztRQUM3RCxJQUFJLElBQUksSUFBSSxJQUFJLEVBQUU7WUFDZCxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3BCLGdCQUFJLElBQUksQ0FBQyxJQUFJLDBDQUFFLElBQUksMENBQUUsTUFBTSxFQUFFO2dCQUN6QixJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBQzlCLFVBQUksQ0FBQyxNQUFNLDBDQUFFLFFBQVEsQ0FBQyxJQUFJLEVBQUU7YUFDL0I7aUJBQU0sZ0JBQUksSUFBSSxDQUFDLElBQUksMENBQUUsS0FBSywwQ0FBRSxNQUFNLEVBQUU7Z0JBQ2pDLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBQzdCLFVBQUksQ0FBQyxNQUFNLDBDQUFFLFFBQVEsQ0FBQyxLQUFLLEVBQUU7YUFDaEM7WUFFRCxnQkFBSSxJQUFJLENBQUMsSUFBSSwwQ0FBRSxFQUFFLDBDQUFFLE1BQU0sRUFBRTtnQkFDdkIsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDO2FBQ2pDO2lCQUFNLGdCQUFJLElBQUksQ0FBQyxJQUFJLDBDQUFFLElBQUksMENBQUUsTUFBTSxFQUFFO2dCQUNoQyxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDO2FBQ2hDO1lBRUQscUZBQXFGO1lBQ3JGLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxFQUFFLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBRTNDLElBQUksaUJBQUksQ0FBQyxJQUFJLDBDQUFFLElBQUksMENBQUUsTUFBTSxrQkFBSSxJQUFJLENBQUMsSUFBSSwwQ0FBRSxLQUFLLDBDQUFFLE1BQU0sa0JBQUksSUFBSSxDQUFDLElBQUksMENBQUUsSUFBSSwwQ0FBRSxNQUFNLEdBQUU7Z0JBQ2hGLFVBQUksQ0FBQyxNQUFNLDBDQUFFLEtBQUssQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLElBQUksRUFBRTthQUNoRDtpQkFBTSxnQkFBSSxJQUFJLENBQUMsSUFBSSwwQ0FBRSxFQUFFLDBDQUFFLE1BQU0sRUFBRTtnQkFDOUIsVUFBSSxDQUFDLE1BQU0sMENBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxJQUFJLEVBQUU7YUFDckQ7aUJBQU07Z0JBQ0gsVUFBSSxDQUFDLE1BQU0sMENBQUUsS0FBSyxDQUFDLElBQUksR0FBRzthQUM3QjtTQUNKO0lBQ0wsQ0FBQztJQUNMLGFBQUM7QUFBRCxDQUFDO0FBM0VZLHdCQUFNOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0FuQixJQUFZLGNBQW1GO0FBQS9GLFdBQVksY0FBYztJQUFHLCtCQUFhO0lBQUUsaUNBQWU7SUFBRSxpQ0FBZTtJQUFFLGlDQUFlO0FBQUMsQ0FBQyxFQUFuRixjQUFjLEdBQWQsc0JBQWMsS0FBZCxzQkFBYyxRQUFxRTtBQUNsRiw4QkFBc0I7SUFDL0IsR0FBQyxjQUFjLENBQUMsSUFBSSxJQUFHLGNBQWMsQ0FBQyxLQUFLO0lBQzNDLEdBQUMsY0FBYyxDQUFDLEtBQUssSUFBRyxjQUFjLENBQUMsSUFBSTtJQUMzQyxHQUFDLGNBQWMsQ0FBQyxLQUFLLElBQUcsY0FBYyxDQUFDLEtBQUs7SUFDNUMsR0FBQyxjQUFjLENBQUMsS0FBSyxJQUFHLGNBQWMsQ0FBQyxLQUFLO1FBQzlDO0FBRUY7SUFXSSxjQUNXLGVBQWlDOztRQUFqQyxvQkFBZSxHQUFmLGVBQWUsQ0FBa0I7UUFYckMsbUJBQWM7WUFDakIsR0FBQyxjQUFjLENBQUMsSUFBSSxJQUFHLElBQUk7WUFDM0IsR0FBQyxjQUFjLENBQUMsS0FBSyxJQUFHLElBQUk7WUFDNUIsR0FBQyxjQUFjLENBQUMsS0FBSyxJQUFHLElBQUk7WUFDNUIsR0FBQyxjQUFjLENBQUMsS0FBSyxJQUFHLElBQUk7Z0JBQzlCO1FBQ0ssY0FBUyxHQUFZLEtBQUssQ0FBQztRQUMzQixZQUFPLEdBQVksS0FBSyxDQUFDO1FBQ3pCLFdBQU0sR0FBcUUsRUFBRSxDQUFDO0lBTXJGLENBQUM7SUFDTCxXQUFDO0FBQUQsQ0FBQztBQWhCWSxvQkFBSTs7Ozs7Ozs7Ozs7Ozs7OztBQ1pqQixJQUFZLG9CQXVFWDtBQXZFRCxXQUFZLG9CQUFvQjtJQUM1Qix1RkFBb0I7SUFDcEIsaUZBQWlCO0lBQ2pCLG1GQUFrQjtJQUNsQiw2RUFBZTtJQUNmLG1GQUFrQjtJQUNsQixtRkFBa0I7SUFDbEIsbUZBQWtCO0lBQ2xCLG9GQUFtQjtJQUNuQixvRkFBbUI7SUFDbkIsb0ZBQW1CO0lBQ25CLDRFQUFlO0lBQ2YsNEVBQWU7SUFDZiw0RUFBZTtJQUNmLHNGQUFvQjtJQUNwQixvRkFBbUI7SUFDbkIsd0ZBQXFCO0lBQ3JCLDBGQUFzQjtJQUN0QixvRkFBbUI7SUFDbkIsb0ZBQW1CO0lBQ25CLG9GQUFtQjtJQUNuQixzRkFBb0I7SUFDcEIsc0ZBQW9CO0lBQ3BCLHNGQUFvQjtJQUNwQixzRkFBb0I7SUFDcEIsa0ZBQWtCO0lBQ2xCLHNGQUFvQjtJQUNwQixzRkFBb0I7SUFDcEIsc0ZBQW9CO0lBQ3BCLHNGQUFvQjtJQUNwQixzRkFBb0I7SUFDcEIsc0ZBQW9CO0lBQ3BCLHNGQUFvQjtJQUNwQiw4RUFBZ0I7SUFDaEIsOEVBQWdCO0lBQ2hCLDhFQUFnQjtJQUNoQix3RkFBcUI7SUFDckIsd0ZBQXFCO0lBQ3JCLHdGQUFxQjtJQUNyQixzRkFBb0I7SUFDcEIsc0ZBQW9CO0lBQ3BCLHNGQUFvQjtJQUNwQixzRkFBb0I7SUFDcEIsc0ZBQW9CO0lBQ3BCLHNGQUFvQjtJQUNwQixzRkFBb0I7SUFDcEIsMEZBQXNCO0lBQ3RCLDRGQUF1QjtJQUN2Qiw4RkFBd0I7SUFDeEIsOEZBQXdCO0lBQ3hCLDhGQUF3QjtJQUN4QixzRkFBb0I7SUFDcEIsc0ZBQW9CO0lBQ3BCLDBGQUFzQjtJQUN0Qiw0RkFBdUI7SUFDdkIsNEVBQWU7SUFDZix1RkFBcUI7SUFDckIsdUZBQXFCO0lBQ3JCLDJGQUF1QjtJQUN2Qiw2RkFBd0I7SUFDeEIsdUVBQWE7SUFDYiw2RUFBZ0I7SUFDaEIsbUZBQW1CO0lBQ25CLG1GQUFtQjtJQUNuQix5RkFBc0I7SUFDdEIsMkVBQWU7SUFDZixpRkFBa0I7SUFDbEIsdUZBQXFCO0lBQ3JCLCtFQUFpQjtJQUNqQix5RUFBYztJQUNkLHFGQUFvQjtBQUN4QixDQUFDLEVBdkVXLG9CQUFvQixHQUFwQiw0QkFBb0IsS0FBcEIsNEJBQW9CLFFBdUUvQjtBQUFBLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2RUYsdUZBQTBCO0FBQzFCLHFGQUF5QjtBQUN6QixpRkFBdUI7QUFDdkIsaUdBQStCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0gvQix3R0FBd0Q7QUFDeEQsMEVBQXVEO0FBRTFDLHNCQUFjLEdBQUcsTUFBTSxDQUFDO0FBRXJDLElBQU0sV0FBVyxHQUF1QztJQUNwRCxNQUFNLEVBQUUsS0FBSztJQUNiLE9BQU8sRUFBRSxLQUFLO0lBQ2QsR0FBRyxFQUFFLHNCQUFjO0NBQ3RCLENBQUM7QUFFRjtJQUErQiw2QkFBWTtJQUN2QztlQUNJLGtCQUFNLFdBQVcsQ0FBQztJQUN0QixDQUFDO0lBR0Qsb0JBQW9CO0lBQ3BCLG9CQUFvQjtJQUNwQixvQkFBb0I7SUFDYiwyQkFBTyxHQUFkO1FBQUEsaUJBMkJDO1FBMUJHLElBQU0sU0FBUyxHQUFHLG9CQUFZLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDO1FBQzNDLElBQU0sVUFBVSxHQUFHLHFCQUFhLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDO1FBRTdDLElBQU0sb0JBQW9CLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLFVBQVUsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQzNGLElBQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLFNBQVMsR0FBRyxFQUFFLEdBQUcsb0JBQW9CLENBQUMsS0FBSyxHQUFHLEdBQUcsRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLEdBQUcsR0FBRyxFQUFFLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDOUgsSUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLFVBQVUsR0FBRyxFQUFFLEVBQUUsWUFBWSxDQUFDLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQzVGLFdBQVcsQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsV0FBVyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3RELElBQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxVQUFVLEdBQUcsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUVsRixJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxVQUFVLEVBQUUsVUFBQyxhQUFxQjtZQUMzQyxXQUFXLENBQUMsS0FBSyxHQUFHLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxHQUFHLGFBQWEsQ0FBQztZQUMvQyxXQUFXLENBQUMsT0FBTyxDQUFJLGFBQWEsR0FBRyxHQUFHLE1BQUcsQ0FBQyxDQUFDO1lBQy9DLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxvQkFBWSxDQUFDLEtBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzNFLENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ3ZCLEtBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBRTFCLFdBQVcsQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUN0QixXQUFXLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDdEIsV0FBVyxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ3RCLG9CQUFvQixDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQy9CLEtBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLHFDQUFtQixDQUFDLENBQUM7UUFDMUMsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUVELHFCQUFxQjtJQUNyQixxQkFBcUI7SUFDckIscUJBQXFCO0lBQ2IsOEJBQVUsR0FBbEI7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUseUJBQXlCLENBQUMsQ0FBQztRQUNwRCxJQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFN0MsaURBQWlEO1FBQ2pELCtEQUErRDtRQUMvRCxxREFBcUQ7UUFFckQsOEJBQThCO1FBQzlCLDRCQUE0QjtRQUM1QixpQ0FBaUM7UUFDakMsaUNBQWlDO1FBQ2pDLGtDQUFrQztRQUNsQyxpQ0FBaUM7UUFDakMsMEJBQTBCO1FBQzFCLHlCQUF5QjtRQUN6Qiw0QkFBNEI7UUFDNUIsMEJBQTBCO1FBQzFCLHlCQUF5QjtRQUN6QiwyQkFBMkI7UUFDM0IsMEJBQTBCO1FBQzFCLHlCQUF5QjtRQUN6Qix1QkFBdUI7UUFDdkIsMEJBQTBCO1FBQzFCLHlCQUF5QjtRQUN6QixZQUFZO1FBQ1osUUFBUTtRQUNSLElBQUk7SUFDUixDQUFDO0lBRUwsZ0JBQUM7QUFBRCxDQUFDLENBdkU4QixNQUFNLENBQUMsS0FBSyxHQXVFMUM7QUF2RVksOEJBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWHRCLHdGQUE0QztBQUM1QyxvRkFBK0I7QUFDL0IsNkVBQXlDO0FBRzVCLHlCQUFpQixHQUFHLFNBQVMsQ0FBQztBQUUzQyxJQUFNLFdBQVcsR0FBdUM7SUFDcEQsTUFBTSxFQUFFLEtBQUs7SUFDYixPQUFPLEVBQUUsS0FBSztJQUNkLEdBQUcsRUFBRSx5QkFBaUI7Q0FDekIsQ0FBQztBQUVGO0lBQWtDLGdDQUFZO0lBSzFDO1FBQUEsWUFDSSxrQkFBTSxXQUFXLENBQUMsU0FJckI7UUFQTyxZQUFNLEdBQWdCLEVBQUUsQ0FBQztRQUs3QixLQUFJLENBQUMsT0FBTyxHQUFHLElBQUksaUJBQU8sRUFBRSxDQUFDO1FBQzdCLEtBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxlQUFNLEVBQUUsQ0FBQzs7SUFDL0IsQ0FBQztJQUVELDRCQUE0QjtJQUM1Qiw0QkFBNEI7SUFDNUIsNEJBQTRCO0lBQ3JCLDhCQUFPLEdBQWQ7UUFDSSxPQUFPO0lBQ1gsQ0FBQztJQUVNLDZCQUFNLEdBQWI7UUFDSSxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDakIsQ0FBQztJQUlELG9CQUFvQjtJQUNwQixvQkFBb0I7SUFDcEIsb0JBQW9CO0lBQ2IsNEJBQUssR0FBWixjQUF1QixDQUFDO0lBSXhCLHFCQUFxQjtJQUNyQixxQkFBcUI7SUFDckIscUJBQXFCO0lBQ2IsNEJBQUssR0FBYjtRQUNJLElBQU0sU0FBUyxHQUFHLGNBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQzthQUN0QyxPQUFPLEVBQUU7YUFDVCxJQUFJLENBQUMsY0FBSSxJQUFJLFdBQUksSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBNUIsQ0FBNEIsQ0FBQzthQUMxQyxPQUFPLEVBQUUsQ0FBQztRQUVmLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztJQUN6RyxDQUFDO0lBQ0wsbUJBQUM7QUFBRCxDQUFDLENBM0NpQyxNQUFNLENBQUMsS0FBSyxHQTJDN0M7QUEzQ1ksb0NBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNiekIsNkZBQTZCO0FBQzdCLHVHQUFrQztBQUNsQyxtR0FBZ0M7QUFDaEMsNkZBQTZCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0g3QixpRUFBK0I7QUFDL0Isa0dBQW9EO0FBRXZDLDJCQUFtQixHQUFHLFdBQVcsQ0FBQztBQUUvQyxJQUFNLFdBQVcsR0FBdUM7SUFDcEQsTUFBTSxFQUFFLEtBQUs7SUFDYixPQUFPLEVBQUUsS0FBSztJQUNkLEdBQUcsRUFBRSwyQkFBbUI7Q0FDM0IsQ0FBQztBQUVGO0lBQW1DLGlDQUFZO0lBQzNDO2VBQ0ksa0JBQU0sV0FBVyxDQUFDO0lBQ3RCLENBQUM7SUFFTSw4QkFBTSxHQUFiO1FBQUEsaUJBVUM7UUFURyxJQUFNLGVBQWUsR0FBRyxJQUFJLFdBQU0sQ0FBQztZQUMvQixLQUFLLEVBQUUsSUFBSTtZQUNYLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixJQUFJLEVBQUUsWUFBWTtZQUNsQixPQUFPLEVBQUU7Z0JBQ0wsS0FBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsaUNBQWlCLENBQUMsQ0FBQztZQUN4QyxDQUFDO1NBQ0osQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUNMLG9CQUFDO0FBQUQsQ0FBQyxDQWhCa0MsTUFBTSxDQUFDLEtBQUssR0FnQjlDO0FBaEJZLHNDQUFhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1gxQiw2RUFBd0Y7QUFDeEYsMEVBQXVEO0FBRzFDLHNCQUFjLEdBQUcsTUFBTSxDQUFDO0FBRXJDLElBQU0sV0FBVyxHQUF1QztJQUNwRCxNQUFNLEVBQUUsS0FBSztJQUNiLE9BQU8sRUFBRSxLQUFLO0lBQ2QsR0FBRyxFQUFFLHNCQUFjO0NBQ3RCLENBQUM7QUFDRixJQUFNLGFBQWEsR0FBRyxFQUFFLENBQUM7QUFDekIsSUFBTSxjQUFjLEdBQUcsRUFBRSxDQUFDO0FBQzFCLElBQU0sUUFBUSxHQUFHLEVBQUUsQ0FBQztBQUNwQixJQUFNLGVBQWUsR0FBRyxhQUFhLENBQUM7QUFDdEMsSUFBTSxjQUFjLEdBQUcsWUFBWSxDQUFDO0FBTW5DLENBQUM7QUFFRjtJQUErQiw2QkFBWTtJQU12QztlQUNJLGtCQUFNLFdBQVcsQ0FBQztJQUN0QixDQUFDO0lBRUQsNEJBQTRCO0lBQzVCLDRCQUE0QjtJQUM1Qiw0QkFBNEI7SUFDckIsd0JBQUksR0FBWDtRQUNJLE9BQU87SUFDWCxDQUFDO0lBRU0sMkJBQU8sR0FBZDtRQUFBLGlCQWNDO1FBYkcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLHNDQUFzQyxDQUFDLENBQUM7UUFDakUsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLG9DQUFvQyxFQUFFLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxXQUFXLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUUzRyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsVUFBQyxRQUFtRDs7WUFDeEUsSUFBTSxRQUFRLGVBQUcsS0FBSSxDQUFDLFdBQVcsMENBQUUsQ0FBQyxtQ0FBSSxDQUFDLENBQUM7WUFDMUMsSUFBTSxRQUFRLGVBQUcsS0FBSSxDQUFDLFdBQVcsMENBQUUsQ0FBQyxtQ0FBSSxDQUFDLENBQUM7WUFDMUMsSUFBTSxjQUFjLHFCQUFHLEtBQUksQ0FBQyxNQUFNLDBDQUFFLE1BQU0sMENBQUUsQ0FBQyxtQ0FBSSxDQUFDLENBQUM7WUFDbkQsSUFBTSxjQUFjLHFCQUFHLEtBQUksQ0FBQyxNQUFNLDBDQUFFLE1BQU0sMENBQUUsQ0FBQyxtQ0FBSSxDQUFDLENBQUM7WUFFbkQsSUFBTSxPQUFPLEdBQUcsS0FBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7WUFDeEMsV0FBSSxDQUFDLFdBQVcsMENBQUUsV0FBVyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFO1lBQ3BFLGlCQUFJLENBQUMsTUFBTSwwQ0FBRSxNQUFNLDBDQUFFLFdBQVcsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxDQUFDLGNBQWMsR0FBRyxRQUFRLENBQUMsRUFBRSxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxDQUFDLGNBQWMsR0FBRyxRQUFRLENBQUMsRUFBRTtRQUN2SSxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFTSwwQkFBTSxHQUFiLFVBQWMsRUFBdUQ7WUFBckQsTUFBTSxjQUFFLE1BQU0sY0FBRSxpQkFBaUI7UUFDN0MsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsaUJBQWlCLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBRU0sMEJBQU0sR0FBYjs7UUFDSSxVQUFJLENBQUMsTUFBTSwwQ0FBRSxNQUFNLEdBQUc7SUFDMUIsQ0FBQztJQUVELG9CQUFvQjtJQUNwQixvQkFBb0I7SUFDcEIsb0JBQW9CO0lBR3BCLHFCQUFxQjtJQUNyQixxQkFBcUI7SUFDckIscUJBQXFCO0lBQ2IsNkJBQVMsR0FBakIsVUFBa0IsTUFBWSxFQUFFLGlCQUFrQztRQUFsRSxpQkEySkM7O1FBMUpHLElBQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxhQUFhLEVBQUUsTUFBTSxFQUFFLGNBQWMsRUFBRSxDQUFDLENBQUM7UUFDL0gsSUFBTSxPQUFPLEdBQUcsT0FBTyxDQUFDLGVBQWUsQ0FBQyxPQUFPLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzFFLElBQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBQ3hDLElBQUksQ0FBQyxXQUFXLEdBQUcsT0FBTyxDQUFDLHVCQUF1QixDQUFDLGVBQWUsRUFBRSxPQUFPLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNuSCxJQUFJLENBQUMsVUFBVSxHQUFHLE9BQU8sQ0FBQyx1QkFBdUIsQ0FBQyxjQUFjLEVBQUUsT0FBTyxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFakgsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ3ZDLEtBQW1CLFVBQThCLEVBQTlCLFdBQU0sQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUFDLEVBQTlCLGNBQThCLEVBQTlCLElBQThCLEVBQUU7Z0JBQTlDLElBQU0sSUFBSTtnQkFDWCxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQzlEO1lBRUQsS0FBbUIsVUFBNkIsRUFBN0IsV0FBTSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsRUFBN0IsY0FBNkIsRUFBN0IsSUFBNkIsRUFBRTtnQkFBN0MsSUFBTSxJQUFJO2dCQUNYLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDN0Q7U0FDSjthQUFNO1lBQ0gsa0RBQWtEO1lBQ2xELElBQUksQ0FBQyxXQUFXLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxPQUFPLENBQUMsS0FBSyxHQUFHLENBQUMsRUFBRSxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtnQkFDNUUsRUFBRSxLQUFLLEVBQUUsNkJBQW9CLENBQUMsV0FBVyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7Z0JBQ3pELEVBQUUsS0FBSyxFQUFFLENBQUMsNkJBQW9CLENBQUMsY0FBYyxDQUFDLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTthQUNqRSxDQUFDLENBQUM7WUFFSCxvQkFBb0I7WUFDcEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsNkJBQW9CLENBQUMsYUFBYSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNyRSxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyw2QkFBb0IsQ0FBQyxjQUFjLEVBQUUsT0FBTyxDQUFDLEtBQUssR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDdEYsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsNkJBQW9CLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDekYsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsNkJBQW9CLENBQUMsaUJBQWlCLEVBQUUsT0FBTyxDQUFDLEtBQUssR0FBRyxDQUFDLEVBQUUsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztZQUUxRyx1RUFBdUU7WUFDdkUsTUFBTTtZQUNOLElBQUksQ0FBQyxXQUFXLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxPQUFPLENBQUMsS0FBSyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUU7Z0JBQzNELEVBQUUsS0FBSyxFQUFFLDZCQUFvQixDQUFDLGFBQWEsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFO2dCQUN4RCxFQUFFLEtBQUssRUFBRSxDQUFDLDZCQUFvQixDQUFDLGdCQUFnQixFQUFFLDZCQUFvQixDQUFDLGdCQUFnQixFQUFFLDZCQUFvQixDQUFDLGdCQUFnQixDQUFDLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRTthQUM5SSxDQUFDLENBQUM7WUFDSCxJQUFJLE1BQU0sQ0FBQyxjQUFjLENBQUMsS0FBSyxFQUFFO2dCQUM3QixJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyw2QkFBb0IsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUMzRixJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyw2QkFBb0IsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2FBQ2pHO1lBQ0QsUUFBUTtZQUNSLElBQUksQ0FBQyxXQUFXLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDLEtBQUssR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtnQkFDNUUsRUFBRSxLQUFLLEVBQUUsNkJBQW9CLENBQUMsZUFBZSxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUU7Z0JBQzFELEVBQUUsS0FBSyxFQUFFLENBQUMsNkJBQW9CLENBQUMsa0JBQWtCLEVBQUUsNkJBQW9CLENBQUMsa0JBQWtCLEVBQUUsNkJBQW9CLENBQUMsa0JBQWtCLENBQUMsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFO2FBQ3BKLENBQUMsQ0FBQztZQUNILElBQUksTUFBTSxDQUFDLGNBQWMsQ0FBQyxLQUFLLEVBQUU7Z0JBQzdCLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLDZCQUFvQixDQUFDLFNBQVMsRUFBRSxPQUFPLENBQUMsS0FBSyxHQUFHLENBQUMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDOUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsNkJBQW9CLENBQUMsWUFBWSxFQUFFLE9BQU8sQ0FBQyxLQUFLLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ3BIO1lBQ0QsU0FBUztZQUNULElBQUksQ0FBQyxXQUFXLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxLQUFLLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRTtnQkFDNUUsRUFBRSxLQUFLLEVBQUUsNkJBQW9CLENBQUMsZ0JBQWdCLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRTtnQkFDM0QsRUFBRSxLQUFLLEVBQUUsQ0FBQyw2QkFBb0IsQ0FBQyxtQkFBbUIsRUFBRSw2QkFBb0IsQ0FBQyxtQkFBbUIsRUFBRSw2QkFBb0IsQ0FBQyxtQkFBbUIsQ0FBQyxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUU7YUFDdkosQ0FBQyxDQUFDO1lBQ0gsSUFBSSxNQUFNLENBQUMsY0FBYyxDQUFDLEtBQUssRUFBRTtnQkFDN0IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsNkJBQW9CLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsRUFBRSxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUMvRyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyw2QkFBb0IsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7YUFDckg7WUFDRCxPQUFPO1lBQ1AsSUFBSSxDQUFDLFdBQVcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtnQkFDNUQsRUFBRSxLQUFLLEVBQUUsNkJBQW9CLENBQUMsY0FBYyxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUU7Z0JBQ3pELEVBQUUsS0FBSyxFQUFFLENBQUMsNkJBQW9CLENBQUMsaUJBQWlCLEVBQUUsNkJBQW9CLENBQUMsaUJBQWlCLEVBQUUsNkJBQW9CLENBQUMsaUJBQWlCLENBQUMsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFO2FBQ2pKLENBQUMsQ0FBQztZQUNILElBQUksTUFBTSxDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUU7Z0JBQzVCLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLDZCQUFvQixDQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzdGLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLDZCQUFvQixDQUFDLFdBQVcsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDbkc7WUFFRCwwQ0FBMEM7WUFDMUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUMsR0FBRyxFQUFFLENBQUM7WUFDcEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsVUFBQyxJQUFJO2dCQUM5QixNQUFNLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLFNBQVMsRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUN6RixDQUFDLENBQUMsQ0FBQztZQUVILE1BQU0sQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLEdBQUcsRUFBRSxDQUFDO1lBQ25DLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLFVBQUMsSUFBSTtnQkFDN0IsTUFBTSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxTQUFTLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDeEYsQ0FBQyxDQUFDLENBQUM7U0FDTjtRQUVELElBQUksQ0FBQyxXQUFXLENBQUMsb0JBQW9CLENBQUMsNkJBQW9CLENBQUMsT0FBTyxFQUFFOztZQUNoRSxXQUFJLENBQUMsTUFBTSwwQ0FBRSxNQUFNLEdBQUc7WUFFdEIsSUFBTSxNQUFNLEdBQUcsS0FBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7WUFDakMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUUxQixNQUFNLENBQUMsSUFBSSxDQUFDLHVCQUF1QixFQUFFOztnQkFDakMsV0FBSSxDQUFDLE1BQU0sMENBQUUsT0FBTyxHQUFHO2dCQUN2QixLQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxFQUFFLE1BQU0sRUFBRSxNQUFNLENBQUMsY0FBYyxDQUFDLEtBQUssRUFBRSxNQUFNLEVBQUUsS0FBSSxDQUFDLE1BQU0sRUFBRSxpQkFBaUIsRUFBRSx1QkFBYyxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQzdILENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBRVQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxvQkFBb0IsQ0FBQyw2QkFBb0IsQ0FBQyxTQUFTLEVBQUU7O1lBQ2xFLFdBQUksQ0FBQyxNQUFNLDBDQUFFLE1BQU0sR0FBRztZQUV0QixJQUFNLE1BQU0sR0FBRyxLQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQztZQUNqQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBRTFCLE1BQU0sQ0FBQyxJQUFJLENBQUMsdUJBQXVCLEVBQUU7O2dCQUNqQyxXQUFJLENBQUMsTUFBTSwwQ0FBRSxPQUFPLEdBQUc7Z0JBQ3ZCLEtBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEVBQUUsTUFBTSxFQUFFLE1BQU0sQ0FBQyxjQUFjLENBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRSxLQUFJLENBQUMsTUFBTSxFQUFFLGlCQUFpQixFQUFFLHVCQUFjLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDNUgsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFFVCxJQUFJLENBQUMsV0FBVyxDQUFDLG9CQUFvQixDQUFDLDZCQUFvQixDQUFDLFVBQVUsRUFBRTs7WUFDbkUsV0FBSSxDQUFDLE1BQU0sMENBQUUsTUFBTSxHQUFHO1lBRXRCLElBQU0sTUFBTSxHQUFHLEtBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDO1lBQ2pDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFFMUIsTUFBTSxDQUFDLElBQUksQ0FBQyx1QkFBdUIsRUFBRTs7Z0JBQ2pDLFdBQUksQ0FBQyxNQUFNLDBDQUFFLE9BQU8sR0FBRztnQkFDdkIsS0FBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsRUFBRSxNQUFNLEVBQUUsTUFBTSxDQUFDLGNBQWMsQ0FBQyxLQUFLLEVBQUUsTUFBTSxFQUFFLEtBQUksQ0FBQyxNQUFNLEVBQUUsaUJBQWlCLEVBQUUsdUJBQWMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUM3SCxDQUFDLENBQUMsQ0FBQztRQUNQLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUVULElBQUksQ0FBQyxXQUFXLENBQUMsb0JBQW9CLENBQUMsNkJBQW9CLENBQUMsUUFBUSxFQUFFOztZQUNqRSxXQUFJLENBQUMsTUFBTSwwQ0FBRSxNQUFNLEdBQUc7WUFFdEIsSUFBTSxNQUFNLEdBQUcsS0FBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7WUFDakMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUUxQixNQUFNLENBQUMsSUFBSSxDQUFDLHVCQUF1QixFQUFFOztnQkFDakMsV0FBSSxDQUFDLE1BQU0sMENBQUUsT0FBTyxHQUFHO2dCQUN2QixLQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxFQUFFLE1BQU0sRUFBRSxNQUFNLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsS0FBSSxDQUFDLE1BQU0sRUFBRSxpQkFBaUIsRUFBRSx1QkFBYyxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQzVILENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBRVQscUJBQXFCO1FBQ3JCLElBQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBQzdDLElBQUksZUFBZSxHQUFHLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3hHLElBQUksZUFBZSxHQUFHLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLENBQUMsR0FBRyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQzFHLElBQUksaUJBQWlCLElBQUksSUFBSSxFQUFFO1lBQzNCLFFBQVEsaUJBQWlCLEVBQUU7Z0JBQ3ZCLEtBQUssdUJBQWMsQ0FBQyxJQUFJO29CQUNwQixlQUFlLEdBQUcsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO29CQUMvQyxNQUFNO2dCQUNWLEtBQUssdUJBQWMsQ0FBQyxLQUFLO29CQUNyQixlQUFlLEdBQUcsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO29CQUNoRCxNQUFNO2dCQUNWLEtBQUssdUJBQWMsQ0FBQyxLQUFLO29CQUNyQixlQUFlLEdBQUcsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO29CQUMvQyxNQUFNO2dCQUNWLEtBQUssdUJBQWMsQ0FBQyxLQUFLO29CQUNyQixlQUFlLEdBQUcsWUFBWSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO29CQUNsRCxNQUFNO2FBQ2I7U0FDSjtRQUNELFVBQUksQ0FBQyxNQUFNLDBDQUFFLGdCQUFnQixDQUFDLElBQUksRUFBRSxlQUFlLEVBQUUsZUFBZSxFQUFFO1FBRXRFLGtHQUFrRztRQUNsRyxJQUFJLENBQUMsV0FBVyxDQUFDLHVCQUF1QixDQUFDO1lBQ3JDLENBQUMsQ0FBQztZQUNGLDZCQUFvQixDQUFDLFdBQVc7WUFDaEMsNkJBQW9CLENBQUMsY0FBYztTQUN0QyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsVUFBSSxDQUFDLE1BQU0sMENBQUUsTUFBdUMsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDdEcsQ0FBQztJQUVPLG9DQUFnQixHQUF4QjtRQU1JLElBQU0sU0FBUyxHQUFHLGFBQWEsR0FBRyxRQUFRLENBQUM7UUFDM0MsSUFBTSxVQUFVLEdBQUcsY0FBYyxHQUFHLFFBQVEsQ0FBQztRQUM3QyxJQUFNLFVBQVUsR0FBRyxxQkFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3ZDLElBQU0sU0FBUyxHQUFHLG9CQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDckMsSUFBTSxjQUFjLEdBQUcsVUFBVSxHQUFHLEdBQUcsQ0FBQztRQUN4QyxJQUFNLGFBQWEsR0FBRyxTQUFTLEdBQUcsR0FBRyxDQUFDO1FBQ3RDLElBQU0sYUFBYSxHQUFHLFNBQVMsR0FBRyxHQUFHLENBQUM7UUFDdEMsSUFBTSxjQUFjLEdBQUcsVUFBVSxHQUFHLEdBQUcsQ0FBQztRQUN4QyxJQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxhQUFhLEdBQUcsYUFBYSxDQUFDLENBQUM7UUFDMUQsSUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsY0FBYyxHQUFHLGNBQWMsQ0FBQyxDQUFDO1FBRTVELE9BQU87WUFDSCxPQUFPLEVBQUUsRUFBRSxDQUFDLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUU7WUFDakMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxFQUFFLE1BQU0sR0FBRyxTQUFTLEVBQUUsQ0FBQyxFQUFFLE1BQU0sRUFBRTtZQUM5QyxVQUFVLEVBQUUsRUFBRSxDQUFDLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRSxNQUFNLEdBQUcsVUFBVSxFQUFFO1lBQ2pELFdBQVcsRUFBRSxFQUFFLENBQUMsRUFBRSxNQUFNLEdBQUcsU0FBUyxFQUFFLENBQUMsRUFBRSxNQUFNLEdBQUcsVUFBVSxFQUFFO1NBQ2pFLENBQUM7SUFDTixDQUFDO0lBQ0wsZ0JBQUM7QUFBRCxDQUFDLENBdk84QixNQUFNLENBQUMsS0FBSyxHQXVPMUM7QUF2T1ksOEJBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkJ0QiwwRUFBZ0M7QUFhaEM7SUFBNEIsMEJBQTRCO0lBR3BELGdCQUFZLEVBQXVHO1lBQXJHLEtBQUssYUFBRSxDQUFDLFNBQUUsQ0FBQyxTQUFFLElBQUksWUFBRSxnQkFBYSxFQUFiLFFBQVEsbUJBQUcsRUFBRSxPQUFFLGVBQVksRUFBWixPQUFPLG1CQUFHLEVBQUUsT0FBRSxpQkFBb0IsRUFBcEIsU0FBUyxtQkFBRyxRQUFRLE9BQUUsZUFBYyxFQUFkLE9BQU8sbUJBQUcsWUFBSTtRQUFsRyxZQUNJLGtCQUFNLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLFNBaUJyQjtRQWhCRyxLQUFLLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxLQUFJLENBQUMsQ0FBQztRQUV6QixLQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUVyQixLQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxPQUFPLEVBQUUsQ0FBQyxHQUFHLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3RHLEtBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDOUMsS0FBSSxDQUFDLE1BQU0sR0FBRyxLQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUMsQ0FBQztRQUVoRCxLQUFJLENBQUMsY0FBYyxDQUFDLEVBQUUsYUFBYSxFQUFFLElBQUksRUFBRSxDQUFDO2FBQ3ZDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsS0FBSSxDQUFDLHFCQUFxQixDQUFDO2FBQzdDLEVBQUUsQ0FBQyxZQUFZLEVBQUUsS0FBSSxDQUFDLG9CQUFvQixDQUFDO2FBQzNDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsS0FBSSxDQUFDLHNCQUFzQixDQUFDO2FBQzlDLEVBQUUsQ0FBQyxXQUFXLEVBQUUsS0FBSSxDQUFDLHFCQUFxQixDQUFDO2FBQzNDLEVBQUUsQ0FBQyxXQUFXLEVBQUUsT0FBTyxDQUFDO1FBRTdCLEtBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDOztJQUNoQyxDQUFDO0lBRU8sdUNBQXNCLEdBQTlCO1FBQ0ksSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDL0IsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBRU8sc0NBQXFCLEdBQTdCO1FBQ0ksSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDL0IsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBRU8scUNBQW9CLEdBQTVCO1FBQ0ksSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDL0IsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBQ0wsYUFBQztBQUFELENBQUMsQ0FyQzJCLE1BQU0sQ0FBQyxXQUFXLENBQUMsU0FBUyxHQXFDdkQ7QUFyQ1ksd0JBQU07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNibkIsaUZBQXlCOzs7Ozs7Ozs7Ozs7Ozs7O0FDRVosb0JBQVksR0FBRyxVQUFDLEtBQW1CO0lBQzVDLE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDO0FBQ2xDLENBQUMsQ0FBQztBQUVXLHFCQUFhLEdBQUcsVUFBQyxLQUFtQjtJQUM3QyxPQUFPLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQztBQUNuQyxDQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNSRixzRkFBMEI7QUFDMUIsZ0ZBQXVCOzs7Ozs7Ozs7Ozs7Ozs7O0FDRHZCLHFDQUFxQztBQUN4QixZQUFJLEdBQUcsY0FBTyxDQUFDLENBQUMiLCJmaWxlIjoiYXBwLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJhcHBcIjogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbXCIuL3NyYy9tYWluLnRzXCIsXCJ2ZW5kb3JzXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwiaW1wb3J0ICogYXMgUGhhc2VyIGZyb20gJ3BoYXNlcic7XG5pbXBvcnQge1xuICAgIEJvb3RTY2VuZSxcbiAgICBNYWluTWVudVNjZW5lLFxuICAgIER1bmdlb25TY2VuZSxcbiAgICBSb29tU2NlbmVcbn0gZnJvbSAnLi9zY2VuZXMnO1xuXG5leHBvcnQgY2xhc3MgR2FtZSB7XG4gICAgcHVibGljIGdhbWU6IFBoYXNlci5HYW1lO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIGNvbnN0IGdhbWVDb25maWc6IFBoYXNlci5UeXBlcy5Db3JlLkdhbWVDb25maWcgPSB7XG4gICAgICAgICAgICB0aXRsZTogJ1Rlc3QnLFxuICAgICAgICAgICAgdHlwZTogUGhhc2VyLldFQkdMLFxuICAgICAgICAgICAgc2NhbGU6IHtcbiAgICAgICAgICAgICAgICBtb2RlOiBQaGFzZXIuU2NhbGUuU2NhbGVNb2Rlcy5SRVNJWkUsXG4gICAgICAgICAgICAgICAgd2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoLFxuICAgICAgICAgICAgICAgIGhlaWdodDogd2luZG93LmlubmVySGVpZ2h0XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2NlbmU6IFtcbiAgICAgICAgICAgICAgICBCb290U2NlbmUsICAvLyB0aGlzIG5lZWRzIHRvIGJlIGZpcnN0IHNvIGl0IGdldHMgbG9hZGVkIGZpcnN0LCB0aGUgb3JkZXIgb2YgdGhlIHJlc3QgZG9lc24ndCBtYXR0ZXJcbiAgICAgICAgICAgICAgICBNYWluTWVudVNjZW5lLFxuICAgICAgICAgICAgICAgIER1bmdlb25TY2VuZSxcbiAgICAgICAgICAgICAgICBSb29tU2NlbmVcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBwaHlzaWNzOiB7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDogJ2FyY2FkZScsXG4gICAgICAgICAgICAgICAgYXJjYWRlOiB7XG4gICAgICAgICAgICAgICAgICAgIGdyYXZpdHk6IHsgeTogMCB9LFxuICAgICAgICAgICAgICAgICAgICBkZWJ1ZzogdHJ1ZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwYXJlbnQ6ICdnYW1lJyxcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogMHgwZDA3MTFcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLmdhbWUgPSBuZXcgUGhhc2VyLkdhbWUoZ2FtZUNvbmZpZyk7XG4gICAgfVxufTtcbiIsImltcG9ydCB7IEdhbWUgfSBmcm9tICcuL2dhbWUnO1xuXG5leHBvcnQgY29uc3QgcnBnID0gbmV3IEdhbWUoKTtcbiIsImltcG9ydCB7IFJvb20sIElSb29tQ29vcmRpbmF0ZXMsIFJvb21Db25uZWN0aW9uLCBvcHBvc2l0ZVJvb21Db25uZWN0aW9uIH0gZnJvbSAnLi9Sb29tJztcblxuZXhwb3J0IGNsYXNzIER1bmdlb24ge1xuICAgIC8vIDEweDEwIGFycmF5IG9mIFJvb21zXG4gICAgcHVibGljIHJvb21zOiAoUm9vbSB8IG51bGwpW11bXSA9IFtcbiAgICAgICAgW251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLFxuICAgICAgICBbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sXG4gICAgICAgIFtudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSxcbiAgICAgICAgW251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLFxuICAgICAgICBbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sXG4gICAgICAgIFtudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSxcbiAgICAgICAgW251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLFxuICAgICAgICBbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sXG4gICAgICAgIFtudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSxcbiAgICAgICAgW251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdXG4gICAgXTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAvLyBnZXQgYSBudW1iZXIgMS04IGZvciBib3RoIFggYW5kIFkgc3RhcnQgY29vcmRzXG4gICAgICAgIC8vIHdlIGRvbid0IHdhbnQgMCBvciA5IGJlY2F1c2Ugd2Ugd2FudCBhbGwgNCBzaWRlcyB0byBiZSBvcGVuIGZvciBzcGF3blxuICAgICAgICBjb25zdCBzcGF3blggPSBNYXRoLm1pbig4LCBNYXRoLm1heCgxLCBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCkpKTtcbiAgICAgICAgY29uc3Qgc3Bhd25ZID0gTWF0aC5taW4oOCwgTWF0aC5tYXgoMSwgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApKSk7XG5cbiAgICAgICAgLy8gcmVnaXN0ZXIgc3Bhd24gcm9vbVxuICAgICAgICBjb25zdCBzcGF3blJvb20gPSBuZXcgUm9vbSh7IHg6IHNwYXduWCwgeTogc3Bhd25ZIH0pO1xuICAgICAgICBzcGF3blJvb20uaXNTcGF3biA9IHRydWU7XG4gICAgICAgIHRoaXMucm9vbXNbc3Bhd25ZXVtzcGF3blhdID0gc3Bhd25Sb29tO1xuXG4gICAgICAgIHRoaXMuZ2VuZXJhdGVDb25uZWN0ZWRSb29tcyhzcGF3blJvb20sIDIpO1xuICAgIH1cblxuXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgLy8gUHJpdmF0ZSBNZXRob2RzIC8vXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgLyoqXG4gICAgICogUmVjdXJzaXZlbHkgY3JlYXRlIGEgcGF0aCBvZiByb29tcy4gZm9yY2VSb29tQ29ubmVjdGlvbnMgc2hvdWxkIG9ubHkgYmUgdXNlZCBvbiB0aGUgaW5pdGlhbCBjYWxsIG9mIHRoaXMgKGZvciBzcGF3blJvb20pXG4gICAgICovXG4gICAgcHJpdmF0ZSBnZW5lcmF0ZUNvbm5lY3RlZFJvb21zKHNvdXJjZVJvb206IFJvb20sIGZvcmNlUm9vbUNvbm5lY3Rpb25zPzogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHJvb21NYXA6IHsgW2tleSBpbiBSb29tQ29ubmVjdGlvbl06IElSb29tQ29vcmRpbmF0ZXMgfSA9IHtcbiAgICAgICAgICAgIFtSb29tQ29ubmVjdGlvbi5MRUZUXTogeyB4OiBzb3VyY2VSb29tLnJvb21Db29yZGluYXRlcy54IC0gMSwgeTogc291cmNlUm9vbS5yb29tQ29vcmRpbmF0ZXMueSB9LFxuICAgICAgICAgICAgW1Jvb21Db25uZWN0aW9uLlJJR0hUXTogeyB4OiBzb3VyY2VSb29tLnJvb21Db29yZGluYXRlcy54ICsgMSwgeTogc291cmNlUm9vbS5yb29tQ29vcmRpbmF0ZXMueSB9LFxuICAgICAgICAgICAgW1Jvb21Db25uZWN0aW9uLkFCT1ZFXTogeyB4OiBzb3VyY2VSb29tLnJvb21Db29yZGluYXRlcy54LCB5OiBzb3VyY2VSb29tLnJvb21Db29yZGluYXRlcy55IC0gMSB9LFxuICAgICAgICAgICAgW1Jvb21Db25uZWN0aW9uLkJFTE9XXTogeyB4OiBzb3VyY2VSb29tLnJvb21Db29yZGluYXRlcy54LCB5OiBzb3VyY2VSb29tLnJvb21Db29yZGluYXRlcy55ICsgMSB9XG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgcG9zc2libGVDb25uZWN0aW9uczogUm9vbUNvbm5lY3Rpb25bXSA9IFtdO1xuICAgICAgICBpZiAocm9vbU1hcFtSb29tQ29ubmVjdGlvbi5MRUZUXS54ID49IDAgJiYgdGhpcy5yb29tc1tyb29tTWFwW1Jvb21Db25uZWN0aW9uLkxFRlRdLnldW3Jvb21NYXBbUm9vbUNvbm5lY3Rpb24uTEVGVF0ueF0gPT09IG51bGwpIHtcbiAgICAgICAgICAgIHBvc3NpYmxlQ29ubmVjdGlvbnMucHVzaChSb29tQ29ubmVjdGlvbi5MRUZUKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChyb29tTWFwW1Jvb21Db25uZWN0aW9uLlJJR0hUXS54IDw9IDkgJiYgdGhpcy5yb29tc1tyb29tTWFwW1Jvb21Db25uZWN0aW9uLlJJR0hUXS55XVtyb29tTWFwW1Jvb21Db25uZWN0aW9uLlJJR0hUXS54XSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcG9zc2libGVDb25uZWN0aW9ucy5wdXNoKFJvb21Db25uZWN0aW9uLlJJR0hUKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChyb29tTWFwW1Jvb21Db25uZWN0aW9uLkFCT1ZFXS55ID49IDAgJiYgdGhpcy5yb29tc1tyb29tTWFwW1Jvb21Db25uZWN0aW9uLkFCT1ZFXS55XVtyb29tTWFwW1Jvb21Db25uZWN0aW9uLkFCT1ZFXS54XSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcG9zc2libGVDb25uZWN0aW9ucy5wdXNoKFJvb21Db25uZWN0aW9uLkFCT1ZFKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChyb29tTWFwW1Jvb21Db25uZWN0aW9uLkJFTE9XXS55IDw9IDkgJiYgdGhpcy5yb29tc1tyb29tTWFwW1Jvb21Db25uZWN0aW9uLkJFTE9XXS55XVtyb29tTWFwW1Jvb21Db25uZWN0aW9uLkJFTE9XXS54XSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcG9zc2libGVDb25uZWN0aW9ucy5wdXNoKFJvb21Db25uZWN0aW9uLkJFTE9XKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNvbm5lY3RlZFJvb21zVG9HZW5lcmF0ZSA9IE1hdGgubWF4KGZvcmNlUm9vbUNvbm5lY3Rpb25zIHx8IDAsIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChwb3NzaWJsZUNvbm5lY3Rpb25zLmxlbmd0aCArIDEpKSk7XG4gICAgICAgIGlmIChjb25uZWN0ZWRSb29tc1RvR2VuZXJhdGUgPT09IDApIHtcbiAgICAgICAgICAgIHNvdXJjZVJvb20uaXNEZWFkRW5kID0gdHJ1ZTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG5ld1Jvb21zOiBSb29tW10gPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb25uZWN0ZWRSb29tc1RvR2VuZXJhdGU7IGkrKykge1xuICAgICAgICAgICAgLy8gZ2V0IG9uZSBvZiB0aGUgZGlyZWN0aW9ucyByYW5kb21seSBieSBpbmRleFxuICAgICAgICAgICAgY29uc3QgZGlyZWN0aW9uVG9Vc2UgPSBwb3NzaWJsZUNvbm5lY3Rpb25zLnNwbGljZShNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBwb3NzaWJsZUNvbm5lY3Rpb25zLmxlbmd0aCksIDEpWzBdO1xuICAgICAgICAgICAgY29uc3QgbmV3Um9vbUNvb3JkaW5hdGVzID0gcm9vbU1hcFtkaXJlY3Rpb25Ub1VzZV07XG4gICAgICAgICAgICBjb25zdCBuZXdSb29tID0gbmV3IFJvb20obmV3Um9vbUNvb3JkaW5hdGVzKTtcbiAgICAgICAgICAgIG5ld1Jvb21zLnB1c2gobmV3Um9vbSk7XG4gICAgICAgICAgICBzb3VyY2VSb29tLmNvbm5lY3RlZFJvb21zW2RpcmVjdGlvblRvVXNlXSA9IG5ld1Jvb207IC8vIGxldCB0aGUgc291cmNlIHJvb20ga25vdyBpdCBoYXMgYSBjb25uZWN0aW9uIHRvIHRoZSBuZXcgcm9vbSBpbiB0aGlzIGRpcmVjdGlvblxuICAgICAgICAgICAgbmV3Um9vbS5jb25uZWN0ZWRSb29tc1tvcHBvc2l0ZVJvb21Db25uZWN0aW9uW2RpcmVjdGlvblRvVXNlXV0gPSBzb3VyY2VSb29tOyAvLyBsZXQgdGhlIG5ldyByb29tIGtub3cgaXQgaGFzIGEgY29ubmVjdGlvbiB0byB0aGUgc291cmNlIHJvb20gaW4gdGhlIG9wcG9zaXRlIGRpcmVjdGlvblxuXG4gICAgICAgICAgICB0aGlzLnJvb21zW25ld1Jvb20ucm9vbUNvb3JkaW5hdGVzLnldW25ld1Jvb20ucm9vbUNvb3JkaW5hdGVzLnhdID0gbmV3Um9vbTsgLy8gcmVnaXN0ZXIgdGhlIG5ldyByb29tIGluIHRoZSByb29tIG1hcFxuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChjb25zdCBuZXdSb29tIG9mIG5ld1Jvb21zKSB7XG4gICAgICAgICAgICB0aGlzLmdlbmVyYXRlQ29ubmVjdGVkUm9vbXMobmV3Um9vbSk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQgeyBSb29tU2NlbmUgfSBmcm9tICcuLi9zY2VuZXMnO1xuXG5jb25zdCBiYXNlU3BlZWQgPSAzMDA7XG5cbmV4cG9ydCBjbGFzcyBQbGF5ZXIge1xuICAgIHB1YmxpYyBzcHJpdGU/OiBQaGFzZXIuR2FtZU9iamVjdHMuU3ByaXRlO1xuXG4gICAgcHJpdmF0ZSBrZXlzPzogUGhhc2VyLlR5cGVzLklucHV0LktleWJvYXJkLkN1cnNvcktleXM7XG4gICAgcHJpdmF0ZSBzY2VuZT86IFBoYXNlci5TY2VuZTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAvLyBUT0RPXG4gICAgfVxuXG4gICAgcHVibGljIGRlc3Ryb3koKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc3ByaXRlPy5kZXN0cm95KCk7XG4gICAgfVxuXG4gICAgcHVibGljIGZyZWV6ZSgpOiB2b2lkIHtcbiAgICAgICAgKHRoaXMuc3ByaXRlPy5ib2R5IGFzIFBoYXNlci5QaHlzaWNzLkFyY2FkZS5Cb2R5KS5tb3ZlcyA9IGZhbHNlO1xuICAgIH1cblxuICAgIHB1YmxpYyByZWdpc3Rlck5ld1NjZW5lKHNjZW5lOiBSb29tU2NlbmUsIHN0YXJ0aW5nWDogbnVtYmVyLCBzdGFydGluZ1k6IG51bWJlcikge1xuICAgICAgICB0aGlzLnNjZW5lID0gc2NlbmU7XG5cbiAgICAgICAgY29uc3QgYW5pbXMgPSB0aGlzLnNjZW5lLmFuaW1zO1xuXG4gICAgICAgIGFuaW1zLmNyZWF0ZSh7XG4gICAgICAgICAgICBrZXk6ICdwbGF5ZXItd2FsaycsXG4gICAgICAgICAgICBmcmFtZXM6IGFuaW1zLmdlbmVyYXRlRnJhbWVOdW1iZXJzKCdwbGF5ZXInLCB7IHN0YXJ0OiAwLCBlbmQ6IDIgfSksXG4gICAgICAgICAgICBmcmFtZVJhdGU6IDgsXG4gICAgICAgICAgICByZXBlYXQ6IC0xXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGFuaW1zLmNyZWF0ZSh7XG4gICAgICAgICAgICBrZXk6ICdwbGF5ZXItd2Fsay1iYWNrJyxcbiAgICAgICAgICAgIGZyYW1lczogYW5pbXMuZ2VuZXJhdGVGcmFtZU51bWJlcnMoJ3BsYXllcicsIHsgc3RhcnQ6IDgsIGVuZDogMTAgfSksXG4gICAgICAgICAgICBmcmFtZVJhdGU6IDgsXG4gICAgICAgICAgICByZXBlYXQ6IC0xXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuc3ByaXRlID0gc2NlbmUucGh5c2ljcy5hZGRcbiAgICAgICAgICAgIC5zcHJpdGUoc3RhcnRpbmdYLCBzdGFydGluZ1ksICdwbGF5ZXInLCAwKVxuICAgICAgICAgICAgLnNldFNpemUoNSwgNSlcbiAgICAgICAgICAgIC5zZXRPZmZzZXQoMTUpO1xuXG4gICAgICAgIHRoaXMua2V5cyA9IHNjZW5lLmlucHV0LmtleWJvYXJkLmNyZWF0ZUN1cnNvcktleXMoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdXBkYXRlKCk6IHZvaWQge1xuICAgICAgICBjb25zdCBib2R5ID0gdGhpcy5zcHJpdGU/LmJvZHkgYXMgUGhhc2VyLlBoeXNpY3MuQXJjYWRlLkJvZHk7XG4gICAgICAgIGlmIChib2R5ICE9IG51bGwpIHtcbiAgICAgICAgICAgIGJvZHkuc2V0VmVsb2NpdHkoMCk7XG4gICAgICAgICAgICBpZiAodGhpcy5rZXlzPy5sZWZ0Py5pc0Rvd24pIHtcbiAgICAgICAgICAgICAgICBib2R5LnNldFZlbG9jaXR5WCgtYmFzZVNwZWVkKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNwcml0ZT8uc2V0RmxpcFgodHJ1ZSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMua2V5cz8ucmlnaHQ/LmlzRG93bikge1xuICAgICAgICAgICAgICAgIGJvZHkuc2V0VmVsb2NpdHlYKGJhc2VTcGVlZCk7XG4gICAgICAgICAgICAgICAgdGhpcy5zcHJpdGU/LnNldEZsaXBYKGZhbHNlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMua2V5cz8udXA/LmlzRG93bikge1xuICAgICAgICAgICAgICAgIGJvZHkuc2V0VmVsb2NpdHlZKC1iYXNlU3BlZWQpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmtleXM/LmRvd24/LmlzRG93bikge1xuICAgICAgICAgICAgICAgIGJvZHkuc2V0VmVsb2NpdHlZKGJhc2VTcGVlZCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIG5vcm1hbGl6ZSBhbmQgc2NhbGUgdGhlIHZlbG9jaXR5IHNvIHRoYXQgc3ByaXRlIGNhbid0IG1vdmUgZmFzdGVyIGFsb25nIGEgZGlhZ29uYWxcbiAgICAgICAgICAgIGJvZHkudmVsb2NpdHkubm9ybWFsaXplKCkuc2NhbGUoYmFzZVNwZWVkKTtcblxuICAgICAgICAgICAgaWYgKHRoaXMua2V5cz8ubGVmdD8uaXNEb3duIHx8IHRoaXMua2V5cz8ucmlnaHQ/LmlzRG93biB8fCB0aGlzLmtleXM/LmRvd24/LmlzRG93bikge1xuICAgICAgICAgICAgICAgIHRoaXMuc3ByaXRlPy5hbmltcy5wbGF5KCdwbGF5ZXItd2FsaycsIHRydWUpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmtleXM/LnVwPy5pc0Rvd24pIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNwcml0ZT8uYW5pbXMucGxheSgncGxheWVyLXdhbGstYmFjaycsIHRydWUpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNwcml0ZT8uYW5pbXMuc3RvcCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgUm9vbVNjZW5lIH0gZnJvbSBcIi4uL3NjZW5lc1wiO1xuaW1wb3J0IHsgRHVuZ2VvbjFUaWxlU2V0SW5kZXggfSBmcm9tIFwiLi9UaWxlU2V0SW5kZXhcIjtcblxuZXhwb3J0IGludGVyZmFjZSBJUm9vbUNvb3JkaW5hdGVzIHsgeDogbnVtYmVyLCB5OiBudW1iZXIgfVxuZXhwb3J0IGVudW0gUm9vbUNvbm5lY3Rpb24geyBMRUZUID0gJ0xlZnQnLCBSSUdIVCA9ICdSaWdodCcsIEFCT1ZFID0gJ0Fib3ZlJywgQkVMT1cgPSAnQmVsb3cnIH1cbmV4cG9ydCBjb25zdCBvcHBvc2l0ZVJvb21Db25uZWN0aW9uOiB7IFtrZXkgaW4gUm9vbUNvbm5lY3Rpb25dOiBSb29tQ29ubmVjdGlvbiB9ID0ge1xuICAgIFtSb29tQ29ubmVjdGlvbi5MRUZUXTogUm9vbUNvbm5lY3Rpb24uUklHSFQsXG4gICAgW1Jvb21Db25uZWN0aW9uLlJJR0hUXTogUm9vbUNvbm5lY3Rpb24uTEVGVCxcbiAgICBbUm9vbUNvbm5lY3Rpb24uQUJPVkVdOiBSb29tQ29ubmVjdGlvbi5CRUxPVyxcbiAgICBbUm9vbUNvbm5lY3Rpb24uQkVMT1ddOiBSb29tQ29ubmVjdGlvbi5BQk9WRVxufTtcblxuZXhwb3J0IGNsYXNzIFJvb20ge1xuICAgIHB1YmxpYyBjb25uZWN0ZWRSb29tczogeyBba2V5IGluIFJvb21Db25uZWN0aW9uXTogUm9vbSB8IG51bGwgfSA9IHtcbiAgICAgICAgW1Jvb21Db25uZWN0aW9uLkxFRlRdOiBudWxsLFxuICAgICAgICBbUm9vbUNvbm5lY3Rpb24uUklHSFRdOiBudWxsLFxuICAgICAgICBbUm9vbUNvbm5lY3Rpb24uQUJPVkVdOiBudWxsLFxuICAgICAgICBbUm9vbUNvbm5lY3Rpb24uQkVMT1ddOiBudWxsXG4gICAgfTtcbiAgICBwdWJsaWMgaXNEZWFkRW5kOiBib29sZWFuID0gZmFsc2U7XG4gICAgcHVibGljIGlzU3Bhd246IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBwdWJsaWMgbGF5ZXJzOiB7IFtrZXk6IHN0cmluZ106IHsgdGlsZUluZGV4OiBudW1iZXIsIHg6IG51bWJlciwgeTogbnVtYmVyIH1bXSB9ID0ge307XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHVibGljIHJvb21Db29yZGluYXRlczogSVJvb21Db29yZGluYXRlc1xuICAgICkge1xuXG4gICAgfVxufVxuIiwiZXhwb3J0IGVudW0gRHVuZ2VvbjFUaWxlU2V0SW5kZXgge1xuICAgIEJvdHRvbU5vcm1hbFdhbGwgPSAxLFxuICAgIFRvcExlZnRDb3JuZXIgPSAzLFxuICAgIFRvcFJpZ2h0Q29ybmVyID0gNCxcbiAgICBOb3JtYWxGbG9vciA9IDYsXG4gICAgVGV4dHVyZWRGbG9vcjEgPSA3LFxuICAgIFRleHR1cmVkRmxvb3IyID0gOCxcbiAgICBUZXh0dXJlZEZsb29yMyA9IDksXG4gICAgVGV4dHVyZWRGbG9vcjQgPSAxMCxcbiAgICBUZXh0dXJlZEZsb29yNSA9IDExLFxuICAgIFRleHR1cmVkRmxvb3I2ID0gMTIsXG4gICAgRW1wdHlWYXNlMSA9IDEzLFxuICAgIEVtcHR5VmFzZTIgPSAxNCxcbiAgICBFbXB0eVZhc2UzID0gMTUsXG4gICAgUmlnaHROb3JtYWxXYWxsID0gMTksXG4gICAgTGVmdE5vcm1hbFdhbGwgPSAyMSxcbiAgICBCb3R0b21MZWZ0Q29ybmVyID0gMjIsXG4gICAgQm90dG9tUmlnaHRDb3JuZXIgPSAyMyxcbiAgICBUZXh0dXJlZEZsb29yNyA9IDI1LFxuICAgIFRleHR1cmVkRmxvb3I4ID0gMjYsXG4gICAgVGV4dHVyZWRGbG9vcjkgPSAyNyxcbiAgICBUZXh0dXJlZEZsb29yMTAgPSAyOCxcbiAgICBUZXh0dXJlZEZsb29yMTEgPSAyOSxcbiAgICBUZXh0dXJlZEZsb29yMTIgPSAzMCxcbiAgICBUZXh0dXJlZEZsb29yMTMgPSAzMSxcbiAgICBUb3BOb3JtYWxXYWxsID0gMzksXG4gICAgVGV4dHVyZWRGbG9vcjE0ID0gNDQsXG4gICAgVGV4dHVyZWRGbG9vcjE1ID0gNDUsXG4gICAgVGV4dHVyZWRGbG9vcjE2ID0gNDYsXG4gICAgVGV4dHVyZWRGbG9vcjE3ID0gNDcsXG4gICAgVGV4dHVyZWRGbG9vcjE4ID0gNDgsXG4gICAgVGV4dHVyZWRGbG9vcjE5ID0gNDksXG4gICAgVGV4dHVyZWRGbG9vcjIwID0gNTAsXG4gICAgQnJva2VuVmFzZTEgPSA0OSxcbiAgICBCcm9rZW5WYXNlMiA9IDUwLFxuICAgIEJyb2tlblZhc2UzID0gNTEsXG4gICAgVG9wVGV4dHVyZWRXYWxsMSA9IDU3LFxuICAgIFRvcFRleHR1cmVkV2FsbDIgPSA1OCxcbiAgICBUb3BUZXh0dXJlZFdhbGwzID0gNTksXG4gICAgVGV4dHVyZWRGbG9vcjIxID0gNjMsXG4gICAgVGV4dHVyZWRGbG9vcjIyID0gNjQsXG4gICAgVGV4dHVyZWRGbG9vcjIzID0gNjUsXG4gICAgVGV4dHVyZWRGbG9vcjI0ID0gNjYsXG4gICAgVGV4dHVyZWRGbG9vcjI1ID0gNjcsXG4gICAgVGV4dHVyZWRGbG9vcjI2ID0gNjgsXG4gICAgVGV4dHVyZWRGbG9vcjI3ID0gNjksXG4gICAgTGVmdFRleHR1cmVkV2FsbDEgPSA3NixcbiAgICBSaWdodFRleHR1cmVkV2FsbDEgPSA3NyxcbiAgICBCb3R0b21UZXh0dXJlZFdhbGwxID0gNzgsXG4gICAgQm90dG9tVGV4dHVyZWRXYWxsMiA9IDc5LFxuICAgIEJvdHRvbVRleHR1cmVkV2FsbDMgPSA4MCxcbiAgICBUZXh0dXJlZEZsb29yMjggPSA4NyxcbiAgICBUZXh0dXJlZEZsb29yMjkgPSA4OCxcbiAgICBMZWZ0VGV4dHVyZWRXYWxsMiA9IDk1LFxuICAgIFJpZ2h0VGV4dHVyZWRXYWxsMiA9IDk2LFxuICAgIFRvcEdhdGVDYXAgPSA5OSxcbiAgICBUZXh0dXJlZEZsb29yMzAgPSAxMDcsXG4gICAgVGV4dHVyZWRGbG9vcjMxID0gMTA4LFxuICAgIExlZnRUZXh0dXJlZFdhbGwzID0gMTE0LFxuICAgIFJpZ2h0VGV4dHVyZWRXYWxsMyA9IDExNSxcbiAgICBUb3BHYXRlID0gMTE4LFxuICAgIEJvdHRvbUdhdGUgPSAxMzksXG4gICAgVG9wR2F0ZUxvY2tlZCA9IDE1NyxcbiAgICBCb3R0b21HYXRlQ2FwID0gMTU4LFxuICAgIEJvdHRvbUdhdGVMb2NrZWQgPSAxNzcsXG4gICAgUmlnaHRHYXRlID0gMjA5LFxuICAgIFJpZ2h0R2F0ZUNhcCA9IDIxMCxcbiAgICBSaWdodEdhdGVMb2NrZWQgPSAyMTMsXG4gICAgTGVmdEdhdGVDYXAgPSAyMjgsXG4gICAgTGVmdEdhdGUgPSAyMjksXG4gICAgTGVmdEdhdGVMb2NrZWQgPSAyMzNcbn07XG4iLCJleHBvcnQgKiBmcm9tICcuL0R1bmdlb24nO1xuZXhwb3J0ICogZnJvbSAnLi9QbGF5ZXInO1xuZXhwb3J0ICogZnJvbSAnLi9Sb29tJztcbmV4cG9ydCAqIGZyb20gJy4vVGlsZVNldEluZGV4JztcbiIsImltcG9ydCB7IE1BSU5fTUVOVV9TQ0VORV9LRVkgfSBmcm9tICcuL21haW4tbWVudS5zY2VuZSc7XG5pbXBvcnQgeyBnZXRHYW1lV2lkdGgsIGdldEdhbWVIZWlnaHQgfSBmcm9tICcuLi91dGlscyc7XG5cbmV4cG9ydCBjb25zdCBCT09UX1NDRU5FX0tFWSA9ICdCT09UJztcblxuY29uc3Qgc2NlbmVDb25maWc6IFBoYXNlci5UeXBlcy5TY2VuZXMuU2V0dGluZ3NDb25maWcgPSB7XG4gICAgYWN0aXZlOiBmYWxzZSxcbiAgICB2aXNpYmxlOiBmYWxzZSxcbiAgICBrZXk6IEJPT1RfU0NFTkVfS0VZXG59O1xuXG5leHBvcnQgY2xhc3MgQm9vdFNjZW5lIGV4dGVuZHMgUGhhc2VyLlNjZW5lIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoc2NlbmVDb25maWcpO1xuICAgIH1cblxuXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAvLyBQdWJsaWMgTWV0aG9kcyAvL1xuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgcHVibGljIHByZWxvYWQoKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGhhbGZXaWR0aCA9IGdldEdhbWVXaWR0aCh0aGlzKSAqIDAuNTtcbiAgICAgICAgY29uc3QgaGFsZkhlaWdodCA9IGdldEdhbWVIZWlnaHQodGhpcykgKiAwLjU7XG5cbiAgICAgICAgY29uc3QgcHJvZ3Jlc3NCYXJDb250YWluZXIgPSB0aGlzLmFkZC5yZWN0YW5nbGUoaGFsZldpZHRoLCBoYWxmSGVpZ2h0LCA0MDAsIDEwMCwgMHhmZmZmZmYpO1xuICAgICAgICBjb25zdCBwcm9ncmVzc0JhciA9IHRoaXMuYWRkLnJlY3RhbmdsZShoYWxmV2lkdGggKyAyMCAtIHByb2dyZXNzQmFyQ29udGFpbmVyLndpZHRoICogMC41LCBoYWxmSGVpZ2h0LCAxMCwgMTAwIC0gMjAsIDB4YzFjMWMxKTtcbiAgICAgICAgY29uc3QgbG9hZGluZ1RleHQgPSB0aGlzLmFkZC50ZXh0KGhhbGZXaWR0aCwgaGFsZkhlaWdodCAtIDg1LCAnTG9hZGluZy4uLicpLnNldEZvbnRTaXplKDI0KTtcbiAgICAgICAgbG9hZGluZ1RleHQuc2V0WChoYWxmV2lkdGggLSAobG9hZGluZ1RleHQud2lkdGggLyAyKSk7XG4gICAgICAgIGNvbnN0IHBlcmNlbnRUZXh0ID0gdGhpcy5hZGQudGV4dChoYWxmV2lkdGgsIGhhbGZIZWlnaHQgKyA2MCwgJycpLnNldEZvbnRTaXplKDI0KTtcblxuICAgICAgICB0aGlzLmxvYWQub24oJ3Byb2dyZXNzJywgKHByb2dyZXNzVmFsdWU6IG51bWJlcikgPT4ge1xuICAgICAgICAgICAgcHJvZ3Jlc3NCYXIud2lkdGggPSAoNDAwIC0gMzApICogcHJvZ3Jlc3NWYWx1ZTtcbiAgICAgICAgICAgIHBlcmNlbnRUZXh0LnNldFRleHQoYCR7cHJvZ3Jlc3NWYWx1ZSAqIDEwMH0lYCk7XG4gICAgICAgICAgICBwZXJjZW50VGV4dC5zZXRYKChnZXRHYW1lV2lkdGgodGhpcykgKiAwLjUpIC0gKHBlcmNlbnRUZXh0LndpZHRoIC8gMikpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmxvYWQub25jZSgnY29tcGxldGUnLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmxvYWQub2ZmKCdwcm9ncmVzcycpO1xuXG4gICAgICAgICAgICBsb2FkaW5nVGV4dC5kZXN0cm95KCk7XG4gICAgICAgICAgICBwZXJjZW50VGV4dC5kZXN0cm95KCk7XG4gICAgICAgICAgICBwcm9ncmVzc0Jhci5kZXN0cm95KCk7XG4gICAgICAgICAgICBwcm9ncmVzc0JhckNvbnRhaW5lci5kZXN0cm95KCk7XG4gICAgICAgICAgICB0aGlzLnNjZW5lLnN0YXJ0KE1BSU5fTUVOVV9TQ0VORV9LRVkpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmxvYWRBc3NldHMoKTtcbiAgICB9XG5cbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAvLyBQcml2YXRlIE1ldGhvZHMgLy9cbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICBwcml2YXRlIGxvYWRBc3NldHMoKSB7XG4gICAgICAgIHRoaXMubG9hZC5qc29uKCdhc3NldHMnLCAnYXNzZXRzL2pzb24vYXNzZXRzLmpzb24nKTtcbiAgICAgICAgY29uc3QgYXNzZXRzID0gdGhpcy5jYWNoZS5qc29uLmdldCgnYXNzZXRzJyk7XG5cbiAgICAgICAgLy8gZm9yIChjb25zdCBhc3NldFR5cGUgb2YgT2JqZWN0LmtleXMoYXNzZXRzKSkge1xuICAgICAgICAvLyAgICAgZm9yIChjb25zdCBhc3NldEtleSBvZiBPYmplY3Qua2V5cyhhc3NldHNbYXNzZXRUeXBlXSkpIHtcbiAgICAgICAgLy8gICAgICAgICBjb25zdCBhc3NldCA9IGFzc2V0c1thc3NldFR5cGVdW2Fzc2V0S2V5XTtcblxuICAgICAgICAvLyAgICAgICAgIHN3aXRjaChhc3NldFR5cGUpIHtcbiAgICAgICAgLy8gICAgICAgICAgICAgY2FzZSAnYXRsYXMnOlxuICAgICAgICAvLyAgICAgICAgICAgICBjYXNlICd1bml0eUF0bGFzJzpcbiAgICAgICAgLy8gICAgICAgICAgICAgY2FzZSAnYml0bWFwRm9udCc6XG4gICAgICAgIC8vICAgICAgICAgICAgIGNhc2UgJ3Nwcml0ZXNoZWV0JzpcbiAgICAgICAgLy8gICAgICAgICAgICAgY2FzZSAnbXVsdGlhdGxhcyc6XG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAvLyBUT0RPXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgLy8gICAgICAgICAgICAgY2FzZSAnYXVkaW8nOlxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgLy8gVE9ET1xuICAgICAgICAvLyAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIC8vICAgICAgICAgICAgIGNhc2UgJ2h0bWwnOlxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgLy8gVE9ET1xuICAgICAgICAvLyAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIC8vICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAvLyBUT0RPXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgLy8gICAgICAgICB9XG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vIH1cbiAgICB9XG5cbn1cbiIsImltcG9ydCB7IER1bmdlb24gfSBmcm9tICcuLi9tb2RlbHMvRHVuZ2Vvbic7XG5pbXBvcnQgeyBjaGFpbiB9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgeyBQbGF5ZXIsIFJvb20gfSBmcm9tICcuLi9tb2RlbHMnO1xuaW1wb3J0IHsgUm9vbVNjZW5lIH0gZnJvbSAnLi9yb29tLnNjZW5lJztcblxuZXhwb3J0IGNvbnN0IERVTkdFT05fU0NFTkVfS0VZID0gJ0RVTkdFT04nO1xuXG5jb25zdCBzY2VuZUNvbmZpZzogUGhhc2VyLlR5cGVzLlNjZW5lcy5TZXR0aW5nc0NvbmZpZyA9IHtcbiAgICBhY3RpdmU6IGZhbHNlLFxuICAgIHZpc2libGU6IGZhbHNlLFxuICAgIGtleTogRFVOR0VPTl9TQ0VORV9LRVksXG59O1xuXG5leHBvcnQgY2xhc3MgRHVuZ2VvblNjZW5lIGV4dGVuZHMgUGhhc2VyLlNjZW5lIHtcbiAgICBwcml2YXRlIGR1bmdlb246IER1bmdlb247XG4gICAgcHJpdmF0ZSBwbGF5ZXI6IFBsYXllcjtcbiAgICBwcml2YXRlIHNjZW5lczogUm9vbVNjZW5lW10gPSBbXTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcihzY2VuZUNvbmZpZyk7XG5cbiAgICAgICAgdGhpcy5kdW5nZW9uID0gbmV3IER1bmdlb24oKTtcbiAgICAgICAgdGhpcy5wbGF5ZXIgPSBuZXcgUGxheWVyKCk7XG4gICAgfVxuXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIC8vIEJ1aWx0LWluIFNjZW5lIE1ldGhvZHMgLy9cbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgcHVibGljIHByZWxvYWQoKTogdm9pZCB7XG4gICAgICAgIC8vIFRPRE9cbiAgICB9XG5cbiAgICBwdWJsaWMgY3JlYXRlKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnJlc2V0KCk7XG4gICAgfVxuXG5cblxuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgLy8gUHVibGljIE1ldGhvZHMgLy9cbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIHB1YmxpYyBzdHVmZigpOiB2b2lkIHsgfVxuXG5cblxuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIC8vIFByaXZhdGUgTWV0aG9kcyAvL1xuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIHByaXZhdGUgcmVzZXQoKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHNwYXduUm9vbSA9IGNoYWluKHRoaXMuZHVuZ2Vvbi5yb29tcylcbiAgICAgICAgICAgIC5mbGF0TWFwKClcbiAgICAgICAgICAgIC5maW5kKHJvb20gPT4gcm9vbSAhPSBudWxsICYmIHJvb20uaXNTcGF3bilcbiAgICAgICAgICAgIC52YWx1ZU9mKCk7XG5cbiAgICAgICAgdGhpcy5zY2VuZS5sYXVuY2goJ1JPT00nLCB7IHNvdXJjZTogc3Bhd25Sb29tLCBwbGF5ZXI6IHRoaXMucGxheWVyLCBhY3RpdmU6IGZhbHNlLCB2aXNpYmxlOiBmYWxzZSB9KTtcbiAgICB9XG59XG4iLCJleHBvcnQgKiBmcm9tICcuL2Jvb3Quc2NlbmUnO1xuZXhwb3J0ICogZnJvbSAnLi9tYWluLW1lbnUuc2NlbmUnO1xuZXhwb3J0ICogZnJvbSAnLi9kdW5nZW9uLnNjZW5lJztcbmV4cG9ydCAqIGZyb20gJy4vcm9vbS5zY2VuZSc7XG4iLCJpbXBvcnQgeyBCdXR0b24gfSBmcm9tICcuLi91aSc7XG5pbXBvcnQgeyBEVU5HRU9OX1NDRU5FX0tFWSB9IGZyb20gJy4vZHVuZ2Vvbi5zY2VuZSc7XG5cbmV4cG9ydCBjb25zdCBNQUlOX01FTlVfU0NFTkVfS0VZID0gJ01BSU5fTUVOVSc7XG5cbmNvbnN0IHNjZW5lQ29uZmlnOiBQaGFzZXIuVHlwZXMuU2NlbmVzLlNldHRpbmdzQ29uZmlnID0ge1xuICAgIGFjdGl2ZTogZmFsc2UsXG4gICAgdmlzaWJsZTogZmFsc2UsXG4gICAga2V5OiBNQUlOX01FTlVfU0NFTkVfS0VZXG59O1xuXG5leHBvcnQgY2xhc3MgTWFpbk1lbnVTY2VuZSBleHRlbmRzIFBoYXNlci5TY2VuZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKHNjZW5lQ29uZmlnKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgY3JlYXRlKCkge1xuICAgICAgICBjb25zdCBzdGFydEdhbWVCdXR0b24gPSBuZXcgQnV0dG9uKHtcbiAgICAgICAgICAgIHNjZW5lOiB0aGlzLFxuICAgICAgICAgICAgeDogMTAwLFxuICAgICAgICAgICAgeTogMTUwLFxuICAgICAgICAgICAgdGV4dDogJ1N0YXJ0IEdhbWUnLFxuICAgICAgICAgICAgb25DbGljazogKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2NlbmUuc3RhcnQoRFVOR0VPTl9TQ0VORV9LRVkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBSb29tQ29ubmVjdGlvbiwgUm9vbSwgRHVuZ2VvbjFUaWxlU2V0SW5kZXgsIFBsYXllciwgRHVuZ2VvbiB9IGZyb20gJy4uL21vZGVscyc7XG5pbXBvcnQgeyBnZXRHYW1lSGVpZ2h0LCBnZXRHYW1lV2lkdGggfSBmcm9tICcuLi91dGlscyc7XG5pbXBvcnQgeyBQaHlzaWNzIH0gZnJvbSAncGhhc2VyJztcblxuZXhwb3J0IGNvbnN0IFJPT01fU0NFTkVfS0VZID0gJ1JPT00nO1xuXG5jb25zdCBzY2VuZUNvbmZpZzogUGhhc2VyLlR5cGVzLlNjZW5lcy5TZXR0aW5nc0NvbmZpZyA9IHtcbiAgICBhY3RpdmU6IGZhbHNlLFxuICAgIHZpc2libGU6IGZhbHNlLFxuICAgIGtleTogUk9PTV9TQ0VORV9LRVlcbn07XG5jb25zdCByb29tVGlsZVdpZHRoID0gMjk7XG5jb25zdCByb29tVGlsZUhlaWdodCA9IDE1O1xuY29uc3QgdGlsZVNpemUgPSA0ODtcbmNvbnN0IGdyb3VuZExheWVyTmFtZSA9ICdncm91bmRMYXllcic7XG5jb25zdCBzdHVmZkxheWVyTmFtZSA9ICdzdHVmZkxheWVyJztcblxuZXhwb3J0IGludGVyZmFjZSBJUm9vbVNjZW5lQ29uZmlnIHtcbiAgICBzb3VyY2U6IFJvb20sXG4gICAgcGxheWVyOiBQbGF5ZXIsXG4gICAgZW50cmFuY2VEaXJlY3Rpb24/OiBSb29tQ29ubmVjdGlvblxufTtcblxuZXhwb3J0IGNsYXNzIFJvb21TY2VuZSBleHRlbmRzIFBoYXNlci5TY2VuZSB7XG4gICAgcHJpdmF0ZSBlbnRyYW5jZURpcmVjdGlvbj86IFJvb21Db25uZWN0aW9uO1xuICAgIHByaXZhdGUgZ3JvdW5kTGF5ZXI/OiBQaGFzZXIuVGlsZW1hcHMuRHluYW1pY1RpbGVtYXBMYXllcjtcbiAgICBwcml2YXRlIHN0dWZmTGF5ZXI/OiBQaGFzZXIuVGlsZW1hcHMuRHluYW1pY1RpbGVtYXBMYXllcjtcbiAgICBwcml2YXRlIHBsYXllcj86IFBsYXllcjtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcihzY2VuZUNvbmZpZyk7XG4gICAgfVxuXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIC8vIEJ1aWx0LWluIFNjZW5lIE1ldGhvZHMgLy9cbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgcHVibGljIGluaXQoKTogdm9pZCB7XG4gICAgICAgIC8vIFRPRE9cbiAgICB9XG5cbiAgICBwdWJsaWMgcHJlbG9hZCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5sb2FkLmltYWdlKCd0aWxlcycsICcvYXNzZXRzL2ltZy90aWxlc2hlZXRzL2R1bmdlb24tMS5wbmcnKTtcbiAgICAgICAgdGhpcy5sb2FkLnNwcml0ZXNoZWV0KCdwbGF5ZXInLCAnL2Fzc2V0cy9pbWcvc3ByaXRlc2hlZXRzL3JvZ3VlLnBuZycsIHsgZnJhbWVXaWR0aDogMzAsIGZyYW1lSGVpZ2h0OiAzMCB9KTtcblxuICAgICAgICB0aGlzLnNjYWxlLm9uKCdyZXNpemUnLCAoZ2FtZVNpemU6IHsgZ2FtZVdpZHRoOiBudW1iZXIsIGdhbWVIZWlnaHQ6IG51bWJlciB9KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjdXJyZW50WCA9IHRoaXMuZ3JvdW5kTGF5ZXI/LnggPz8gMDtcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRZID0gdGhpcy5ncm91bmRMYXllcj8ueSA/PyAwO1xuICAgICAgICAgICAgY29uc3QgY3VycmVudFBsYXllclggPSB0aGlzLnBsYXllcj8uc3ByaXRlPy54ID8/IDA7XG4gICAgICAgICAgICBjb25zdCBjdXJyZW50UGxheWVyWSA9IHRoaXMucGxheWVyPy5zcHJpdGU/LnkgPz8gMDtcblxuICAgICAgICAgICAgY29uc3QgbGF5ZXJYWSA9IHRoaXMuZ2V0U2NlbmVQb3NpdGlvbigpO1xuICAgICAgICAgICAgdGhpcy5ncm91bmRMYXllcj8uc2V0UG9zaXRpb24obGF5ZXJYWS50b3BMZWZ0LngsIGxheWVyWFkudG9wTGVmdC55KTtcbiAgICAgICAgICAgIHRoaXMucGxheWVyPy5zcHJpdGU/LnNldFBvc2l0aW9uKGxheWVyWFkudG9wTGVmdC54ICsgKGN1cnJlbnRQbGF5ZXJYIC0gY3VycmVudFgpLCBsYXllclhZLnRvcExlZnQueSArIChjdXJyZW50UGxheWVyWSAtIGN1cnJlbnRZKSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBjcmVhdGUoeyBzb3VyY2UsIHBsYXllciwgZW50cmFuY2VEaXJlY3Rpb24gfTogSVJvb21TY2VuZUNvbmZpZyk6IHZvaWQge1xuICAgICAgICB0aGlzLnBsYXllciA9IHBsYXllcjtcbiAgICAgICAgdGhpcy5zZXRVcFJvb20oc291cmNlLCBlbnRyYW5jZURpcmVjdGlvbik7XG4gICAgfVxuXG4gICAgcHVibGljIHVwZGF0ZSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5wbGF5ZXI/LnVwZGF0ZSgpO1xuICAgIH1cblxuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgLy8gUHVibGljIE1ldGhvZHMgLy9cbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG5cbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAvLyBQcml2YXRlIE1ldGhvZHMgLy9cbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICBwcml2YXRlIHNldFVwUm9vbShzb3VyY2U6IFJvb20sIGVudHJhbmNlRGlyZWN0aW9uPzogUm9vbUNvbm5lY3Rpb24pOiB2b2lkIHtcbiAgICAgICAgY29uc3QgdGlsZU1hcCA9IHRoaXMubWFrZS50aWxlbWFwKHsgdGlsZVdpZHRoOiB0aWxlU2l6ZSwgdGlsZUhlaWdodDogdGlsZVNpemUsIHdpZHRoOiByb29tVGlsZVdpZHRoLCBoZWlnaHQ6IHJvb21UaWxlSGVpZ2h0IH0pO1xuICAgICAgICBjb25zdCB0aWxlU2V0ID0gdGlsZU1hcC5hZGRUaWxlc2V0SW1hZ2UoJ3RpbGVzJywgdW5kZWZpbmVkLCA0OCwgNDgsIDEsIDIpO1xuICAgICAgICBjb25zdCBsYXllclhZID0gdGhpcy5nZXRTY2VuZVBvc2l0aW9uKCk7XG4gICAgICAgIHRoaXMuZ3JvdW5kTGF5ZXIgPSB0aWxlTWFwLmNyZWF0ZUJsYW5rRHluYW1pY0xheWVyKGdyb3VuZExheWVyTmFtZSwgdGlsZVNldCwgbGF5ZXJYWS50b3BMZWZ0LngsIGxheWVyWFkudG9wTGVmdC55KTtcbiAgICAgICAgdGhpcy5zdHVmZkxheWVyID0gdGlsZU1hcC5jcmVhdGVCbGFua0R5bmFtaWNMYXllcihzdHVmZkxheWVyTmFtZSwgdGlsZVNldCwgbGF5ZXJYWS50b3BMZWZ0LngsIGxheWVyWFkudG9wTGVmdC55KTtcblxuICAgICAgICBpZiAoT2JqZWN0LmtleXMoc291cmNlLmxheWVycykubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCB0aWxlIG9mIHNvdXJjZS5sYXllcnNbZ3JvdW5kTGF5ZXJOYW1lXSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZ3JvdW5kTGF5ZXIucHV0VGlsZUF0KHRpbGUudGlsZUluZGV4LCB0aWxlLngsIHRpbGUueSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZvciAoY29uc3QgdGlsZSBvZiBzb3VyY2UubGF5ZXJzW3N0dWZmTGF5ZXJOYW1lXSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc3R1ZmZMYXllci5wdXRUaWxlQXQodGlsZS50aWxlSW5kZXgsIHRpbGUueCwgdGlsZS55KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIGZpbGwgaW4gbm9uLXdhbGwgZ3JvdW5kIGxheWVyIHdpdGggZmxvb3IgcGllY2VzXG4gICAgICAgICAgICB0aGlzLmdyb3VuZExheWVyLndlaWdodGVkUmFuZG9taXplKDIsIDIsIHRpbGVNYXAud2lkdGggLSA0LCB0aWxlTWFwLmhlaWdodCAtIDQsIFtcbiAgICAgICAgICAgICAgICB7IGluZGV4OiBEdW5nZW9uMVRpbGVTZXRJbmRleC5Ob3JtYWxGbG9vciwgd2VpZ2h0OiA5LjI1IH0sXG4gICAgICAgICAgICAgICAgeyBpbmRleDogW0R1bmdlb24xVGlsZVNldEluZGV4LlRleHR1cmVkRmxvb3IxXSwgd2VpZ2h0OiAwLjc1IH1cbiAgICAgICAgICAgIF0pO1xuXG4gICAgICAgICAgICAvLyBhZGQgY29ybmVyIHBpZWNlc1xuICAgICAgICAgICAgdGhpcy5ncm91bmRMYXllci5wdXRUaWxlQXQoRHVuZ2VvbjFUaWxlU2V0SW5kZXguVG9wTGVmdENvcm5lciwgMSwgMSk7XG4gICAgICAgICAgICB0aGlzLmdyb3VuZExheWVyLnB1dFRpbGVBdChEdW5nZW9uMVRpbGVTZXRJbmRleC5Ub3BSaWdodENvcm5lciwgdGlsZU1hcC53aWR0aCAtIDIsIDEpO1xuICAgICAgICAgICAgdGhpcy5ncm91bmRMYXllci5wdXRUaWxlQXQoRHVuZ2VvbjFUaWxlU2V0SW5kZXguQm90dG9tTGVmdENvcm5lciwgMSwgdGlsZU1hcC5oZWlnaHQgLSAyKTtcbiAgICAgICAgICAgIHRoaXMuZ3JvdW5kTGF5ZXIucHV0VGlsZUF0KER1bmdlb24xVGlsZVNldEluZGV4LkJvdHRvbVJpZ2h0Q29ybmVyLCB0aWxlTWFwLndpZHRoIC0gMiwgdGlsZU1hcC5oZWlnaHQgLSAyKTtcblxuICAgICAgICAgICAgLy8gYWRkIHJhbmRvbWl6ZWQgd2FsbCBwaWVjZXMgYW5kIGFsc28gZG9vcnMgaWYgdGhlcmUncyBjb25uZWN0ZWQgcm9vbXNcbiAgICAgICAgICAgIC8vIHRvcFxuICAgICAgICAgICAgdGhpcy5ncm91bmRMYXllci53ZWlnaHRlZFJhbmRvbWl6ZSgyLCAxLCB0aWxlTWFwLndpZHRoIC0gNCwgMSwgW1xuICAgICAgICAgICAgICAgIHsgaW5kZXg6IER1bmdlb24xVGlsZVNldEluZGV4LlRvcE5vcm1hbFdhbGwsIHdlaWdodDogNCB9LFxuICAgICAgICAgICAgICAgIHsgaW5kZXg6IFtEdW5nZW9uMVRpbGVTZXRJbmRleC5Ub3BUZXh0dXJlZFdhbGwxLCBEdW5nZW9uMVRpbGVTZXRJbmRleC5Ub3BUZXh0dXJlZFdhbGwyLCBEdW5nZW9uMVRpbGVTZXRJbmRleC5Ub3BUZXh0dXJlZFdhbGwzXSwgd2VpZ2h0OiAxIH1cbiAgICAgICAgICAgIF0pO1xuICAgICAgICAgICAgaWYgKHNvdXJjZS5jb25uZWN0ZWRSb29tcy5BYm92ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZ3JvdW5kTGF5ZXIucHV0VGlsZUF0KER1bmdlb24xVGlsZVNldEluZGV4LlRvcEdhdGUsIE1hdGguZmxvb3IodGlsZU1hcC53aWR0aCAvIDIpLCAxKTtcbiAgICAgICAgICAgICAgICB0aGlzLmdyb3VuZExheWVyLnB1dFRpbGVBdChEdW5nZW9uMVRpbGVTZXRJbmRleC5Ub3BHYXRlQ2FwLCBNYXRoLmZsb29yKHRpbGVNYXAud2lkdGggLyAyKSwgMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyByaWdodFxuICAgICAgICAgICAgdGhpcy5ncm91bmRMYXllci53ZWlnaHRlZFJhbmRvbWl6ZSh0aWxlTWFwLndpZHRoIC0gMiwgMiwgMSwgdGlsZU1hcC5oZWlnaHQgLSA0LCBbXG4gICAgICAgICAgICAgICAgeyBpbmRleDogRHVuZ2VvbjFUaWxlU2V0SW5kZXguUmlnaHROb3JtYWxXYWxsLCB3ZWlnaHQ6IDQgfSxcbiAgICAgICAgICAgICAgICB7IGluZGV4OiBbRHVuZ2VvbjFUaWxlU2V0SW5kZXguUmlnaHRUZXh0dXJlZFdhbGwxLCBEdW5nZW9uMVRpbGVTZXRJbmRleC5SaWdodFRleHR1cmVkV2FsbDIsIER1bmdlb24xVGlsZVNldEluZGV4LlJpZ2h0VGV4dHVyZWRXYWxsM10sIHdlaWdodDogMSB9XG4gICAgICAgICAgICBdKTtcbiAgICAgICAgICAgIGlmIChzb3VyY2UuY29ubmVjdGVkUm9vbXMuUmlnaHQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmdyb3VuZExheWVyLnB1dFRpbGVBdChEdW5nZW9uMVRpbGVTZXRJbmRleC5SaWdodEdhdGUsIHRpbGVNYXAud2lkdGggLSAyLCBNYXRoLmZsb29yKHRpbGVNYXAuaGVpZ2h0IC8gMikpO1xuICAgICAgICAgICAgICAgIHRoaXMuZ3JvdW5kTGF5ZXIucHV0VGlsZUF0KER1bmdlb24xVGlsZVNldEluZGV4LlJpZ2h0R2F0ZUNhcCwgdGlsZU1hcC53aWR0aCAtIDEsIE1hdGguZmxvb3IodGlsZU1hcC5oZWlnaHQgLyAyKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBib3R0b21cbiAgICAgICAgICAgIHRoaXMuZ3JvdW5kTGF5ZXIud2VpZ2h0ZWRSYW5kb21pemUoMiwgdGlsZU1hcC5oZWlnaHQgLSAyLCB0aWxlTWFwLndpZHRoIC0gNCwgMSwgW1xuICAgICAgICAgICAgICAgIHsgaW5kZXg6IER1bmdlb24xVGlsZVNldEluZGV4LkJvdHRvbU5vcm1hbFdhbGwsIHdlaWdodDogNCB9LFxuICAgICAgICAgICAgICAgIHsgaW5kZXg6IFtEdW5nZW9uMVRpbGVTZXRJbmRleC5Cb3R0b21UZXh0dXJlZFdhbGwxLCBEdW5nZW9uMVRpbGVTZXRJbmRleC5Cb3R0b21UZXh0dXJlZFdhbGwyLCBEdW5nZW9uMVRpbGVTZXRJbmRleC5Cb3R0b21UZXh0dXJlZFdhbGwzXSwgd2VpZ2h0OiAxIH1cbiAgICAgICAgICAgIF0pO1xuICAgICAgICAgICAgaWYgKHNvdXJjZS5jb25uZWN0ZWRSb29tcy5CZWxvdykge1xuICAgICAgICAgICAgICAgIHRoaXMuZ3JvdW5kTGF5ZXIucHV0VGlsZUF0KER1bmdlb24xVGlsZVNldEluZGV4LkJvdHRvbUdhdGUsIE1hdGguZmxvb3IodGlsZU1hcC53aWR0aCAvIDIpLCB0aWxlTWFwLmhlaWdodCAtIDIpO1xuICAgICAgICAgICAgICAgIHRoaXMuZ3JvdW5kTGF5ZXIucHV0VGlsZUF0KER1bmdlb24xVGlsZVNldEluZGV4LkJvdHRvbUdhdGVDYXAsIE1hdGguZmxvb3IodGlsZU1hcC53aWR0aCAvIDIpLCB0aWxlTWFwLmhlaWdodCAtIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gbGVmdFxuICAgICAgICAgICAgdGhpcy5ncm91bmRMYXllci53ZWlnaHRlZFJhbmRvbWl6ZSgxLCAyLCAxLCB0aWxlTWFwLmhlaWdodCAtIDQsIFtcbiAgICAgICAgICAgICAgICB7IGluZGV4OiBEdW5nZW9uMVRpbGVTZXRJbmRleC5MZWZ0Tm9ybWFsV2FsbCwgd2VpZ2h0OiA0IH0sXG4gICAgICAgICAgICAgICAgeyBpbmRleDogW0R1bmdlb24xVGlsZVNldEluZGV4LkxlZnRUZXh0dXJlZFdhbGwxLCBEdW5nZW9uMVRpbGVTZXRJbmRleC5MZWZ0VGV4dHVyZWRXYWxsMiwgRHVuZ2VvbjFUaWxlU2V0SW5kZXguTGVmdFRleHR1cmVkV2FsbDNdLCB3ZWlnaHQ6IDEgfVxuICAgICAgICAgICAgXSk7XG4gICAgICAgICAgICBpZiAoc291cmNlLmNvbm5lY3RlZFJvb21zLkxlZnQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmdyb3VuZExheWVyLnB1dFRpbGVBdChEdW5nZW9uMVRpbGVTZXRJbmRleC5MZWZ0R2F0ZSwgMSwgTWF0aC5mbG9vcih0aWxlTWFwLmhlaWdodCAvIDIpKTtcbiAgICAgICAgICAgICAgICB0aGlzLmdyb3VuZExheWVyLnB1dFRpbGVBdChEdW5nZW9uMVRpbGVTZXRJbmRleC5MZWZ0R2F0ZUNhcCwgMCwgTWF0aC5mbG9vcih0aWxlTWFwLmhlaWdodCAvIDIpKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gcGVyc2lzdCB0aGUgbGF5ZXJzIHdlIGJ1aWx0IHRvIHRoZSByb29tXG4gICAgICAgICAgICBzb3VyY2UubGF5ZXJzW2dyb3VuZExheWVyTmFtZV0gPSBbXTtcbiAgICAgICAgICAgIHRoaXMuZ3JvdW5kTGF5ZXIuZm9yRWFjaFRpbGUoKHRpbGUpID0+IHtcbiAgICAgICAgICAgICAgICBzb3VyY2UubGF5ZXJzW2dyb3VuZExheWVyTmFtZV0ucHVzaCh7IHRpbGVJbmRleDogdGlsZS5pbmRleCwgeDogdGlsZS54LCB5OiB0aWxlLnkgfSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgc291cmNlLmxheWVyc1tzdHVmZkxheWVyTmFtZV0gPSBbXTtcbiAgICAgICAgICAgIHRoaXMuc3R1ZmZMYXllci5mb3JFYWNoVGlsZSgodGlsZSkgPT4ge1xuICAgICAgICAgICAgICAgIHNvdXJjZS5sYXllcnNbc3R1ZmZMYXllck5hbWVdLnB1c2goeyB0aWxlSW5kZXg6IHRpbGUuaW5kZXgsIHg6IHRpbGUueCwgeTogdGlsZS55IH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmdyb3VuZExheWVyLnNldFRpbGVJbmRleENhbGxiYWNrKER1bmdlb24xVGlsZVNldEluZGV4LlRvcEdhdGUsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMucGxheWVyPy5mcmVlemUoKTtcblxuICAgICAgICAgICAgY29uc3QgY2FtZXJhID0gdGhpcy5jYW1lcmFzLm1haW47XG4gICAgICAgICAgICBjYW1lcmEuZmFkZSgyNTAsIDAsIDAsIDApO1xuXG4gICAgICAgICAgICBjYW1lcmEub25jZSgnY2FtZXJhZmFkZW91dGNvbXBsZXRlJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyPy5kZXN0cm95KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5zY2VuZS5yZXN0YXJ0KHsgc291cmNlOiBzb3VyY2UuY29ubmVjdGVkUm9vbXMuQWJvdmUsIHBsYXllcjogdGhpcy5wbGF5ZXIsIGVudHJhbmNlRGlyZWN0aW9uOiBSb29tQ29ubmVjdGlvbi5CRUxPVyB9KVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sIHRoaXMpO1xuXG4gICAgICAgIHRoaXMuZ3JvdW5kTGF5ZXIuc2V0VGlsZUluZGV4Q2FsbGJhY2soRHVuZ2VvbjFUaWxlU2V0SW5kZXguUmlnaHRHYXRlLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnBsYXllcj8uZnJlZXplKCk7XG5cbiAgICAgICAgICAgIGNvbnN0IGNhbWVyYSA9IHRoaXMuY2FtZXJhcy5tYWluO1xuICAgICAgICAgICAgY2FtZXJhLmZhZGUoMjUwLCAwLCAwLCAwKTtcblxuICAgICAgICAgICAgY2FtZXJhLm9uY2UoJ2NhbWVyYWZhZGVvdXRjb21wbGV0ZScsICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllcj8uZGVzdHJveSgpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2NlbmUucmVzdGFydCh7IHNvdXJjZTogc291cmNlLmNvbm5lY3RlZFJvb21zLlJpZ2h0LCBwbGF5ZXI6IHRoaXMucGxheWVyLCBlbnRyYW5jZURpcmVjdGlvbjogUm9vbUNvbm5lY3Rpb24uTEVGVCB9KVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sIHRoaXMpO1xuXG4gICAgICAgIHRoaXMuZ3JvdW5kTGF5ZXIuc2V0VGlsZUluZGV4Q2FsbGJhY2soRHVuZ2VvbjFUaWxlU2V0SW5kZXguQm90dG9tR2F0ZSwgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5wbGF5ZXI/LmZyZWV6ZSgpO1xuXG4gICAgICAgICAgICBjb25zdCBjYW1lcmEgPSB0aGlzLmNhbWVyYXMubWFpbjtcbiAgICAgICAgICAgIGNhbWVyYS5mYWRlKDI1MCwgMCwgMCwgMCk7XG5cbiAgICAgICAgICAgIGNhbWVyYS5vbmNlKCdjYW1lcmFmYWRlb3V0Y29tcGxldGUnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXI/LmRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNjZW5lLnJlc3RhcnQoeyBzb3VyY2U6IHNvdXJjZS5jb25uZWN0ZWRSb29tcy5CZWxvdywgcGxheWVyOiB0aGlzLnBsYXllciwgZW50cmFuY2VEaXJlY3Rpb246IFJvb21Db25uZWN0aW9uLkFCT1ZFIH0pXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSwgdGhpcyk7XG5cbiAgICAgICAgdGhpcy5ncm91bmRMYXllci5zZXRUaWxlSW5kZXhDYWxsYmFjayhEdW5nZW9uMVRpbGVTZXRJbmRleC5MZWZ0R2F0ZSwgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5wbGF5ZXI/LmZyZWV6ZSgpO1xuXG4gICAgICAgICAgICBjb25zdCBjYW1lcmEgPSB0aGlzLmNhbWVyYXMubWFpbjtcbiAgICAgICAgICAgIGNhbWVyYS5mYWRlKDI1MCwgMCwgMCwgMCk7XG5cbiAgICAgICAgICAgIGNhbWVyYS5vbmNlKCdjYW1lcmFmYWRlb3V0Y29tcGxldGUnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXI/LmRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNjZW5lLnJlc3RhcnQoeyBzb3VyY2U6IHNvdXJjZS5jb25uZWN0ZWRSb29tcy5MZWZ0LCBwbGF5ZXI6IHRoaXMucGxheWVyLCBlbnRyYW5jZURpcmVjdGlvbjogUm9vbUNvbm5lY3Rpb24uUklHSFQgfSlcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LCB0aGlzKTtcblxuICAgICAgICAvLyBUT0RPOiBwbGF5ZXIgc3R1ZmZcbiAgICAgICAgY29uc3Qgc2NlbmVEZXRhaWxzID0gdGhpcy5nZXRTY2VuZVBvc2l0aW9uKCk7XG4gICAgICAgIGxldCBwbGF5ZXJTdGFydGluZ1ggPSBzY2VuZURldGFpbHMudG9wTGVmdC54ICsgKChzY2VuZURldGFpbHMudG9wUmlnaHQueCAtIHNjZW5lRGV0YWlscy50b3BMZWZ0LngpIC8gMik7XG4gICAgICAgIGxldCBwbGF5ZXJTdGFydGluZ1kgPSBzY2VuZURldGFpbHMudG9wTGVmdC55ICsgKChzY2VuZURldGFpbHMuYm90dG9tTGVmdC55IC0gc2NlbmVEZXRhaWxzLnRvcExlZnQueSkgLyAyKTtcbiAgICAgICAgaWYgKGVudHJhbmNlRGlyZWN0aW9uICE9IG51bGwpIHtcbiAgICAgICAgICAgIHN3aXRjaCAoZW50cmFuY2VEaXJlY3Rpb24pIHtcbiAgICAgICAgICAgICAgICBjYXNlIFJvb21Db25uZWN0aW9uLkxFRlQ6XG4gICAgICAgICAgICAgICAgICAgIHBsYXllclN0YXJ0aW5nWCA9IHNjZW5lRGV0YWlscy50b3BMZWZ0LnggKyAxMjA7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgUm9vbUNvbm5lY3Rpb24uUklHSFQ6XG4gICAgICAgICAgICAgICAgICAgIHBsYXllclN0YXJ0aW5nWCA9IHNjZW5lRGV0YWlscy50b3BSaWdodC54IC0gMTIwO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFJvb21Db25uZWN0aW9uLkFCT1ZFOlxuICAgICAgICAgICAgICAgICAgICBwbGF5ZXJTdGFydGluZ1kgPSBzY2VuZURldGFpbHMudG9wTGVmdC55ICsgMTIwO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFJvb21Db25uZWN0aW9uLkJFTE9XOlxuICAgICAgICAgICAgICAgICAgICBwbGF5ZXJTdGFydGluZ1kgPSBzY2VuZURldGFpbHMuYm90dG9tTGVmdC55IC0gMTIwO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLnBsYXllcj8ucmVnaXN0ZXJOZXdTY2VuZSh0aGlzLCBwbGF5ZXJTdGFydGluZ1gsIHBsYXllclN0YXJ0aW5nWSk7XG5cbiAgICAgICAgLy8gbXVzdCB3YWl0IGZvciB0aGlzIHVudGlsIGFmdGVyIHJlZ2lzdGVyTmV3U2NlbmUsIGJlY2F1c2UgYSBuZXcgc3ByaXRlIGlzIHNwdW4gdXAgZm9yIGVhY2ggc2NlbmVcbiAgICAgICAgdGhpcy5ncm91bmRMYXllci5zZXRDb2xsaXNpb25CeUV4Y2x1c2lvbihbXG4gICAgICAgICAgICAtMSxcbiAgICAgICAgICAgIER1bmdlb24xVGlsZVNldEluZGV4Lk5vcm1hbEZsb29yLFxuICAgICAgICAgICAgRHVuZ2VvbjFUaWxlU2V0SW5kZXguVGV4dHVyZWRGbG9vcjFcbiAgICAgICAgXSk7XG4gICAgICAgIHRoaXMucGh5c2ljcy5hZGQuY29sbGlkZXIodGhpcy5wbGF5ZXI/LnNwcml0ZSBhcyBQaGFzZXIuR2FtZU9iamVjdHMuR2FtZU9iamVjdCwgdGhpcy5ncm91bmRMYXllcik7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXRTY2VuZVBvc2l0aW9uKCk6IHtcbiAgICAgICAgdG9wTGVmdDogeyB4OiBudW1iZXIsIHk6IG51bWJlciAgfSxcbiAgICAgICAgdG9wUmlnaHQ6IHsgeDogbnVtYmVyLCB5OiBudW1iZXIgIH0sXG4gICAgICAgIGJvdHRvbUxlZnQ6IHsgeDogbnVtYmVyLCB5OiBudW1iZXIgIH0sXG4gICAgICAgIGJvdHRvbVJpZ2h0OiB7IHg6IG51bWJlciwgeTogbnVtYmVyICB9XG4gICAgfSB7XG4gICAgICAgIGNvbnN0IHJvb21XaWR0aCA9IHJvb21UaWxlV2lkdGggKiB0aWxlU2l6ZTtcbiAgICAgICAgY29uc3Qgcm9vbUhlaWdodCA9IHJvb21UaWxlSGVpZ2h0ICogdGlsZVNpemU7XG4gICAgICAgIGNvbnN0IGdhbWVIZWlnaHQgPSBnZXRHYW1lSGVpZ2h0KHRoaXMpO1xuICAgICAgICBjb25zdCBnYW1lV2lkdGggPSBnZXRHYW1lV2lkdGgodGhpcyk7XG4gICAgICAgIGNvbnN0IGhhbGZHYW1lSGVpZ2h0ID0gZ2FtZUhlaWdodCAqIDAuNTtcbiAgICAgICAgY29uc3QgaGFsZkdhbWVXaWR0aCA9IGdhbWVXaWR0aCAqIDAuNTtcbiAgICAgICAgY29uc3QgaGFsZlJvb21XaWR0aCA9IHJvb21XaWR0aCAqIDAuNTtcbiAgICAgICAgY29uc3QgaGFsZlJvb21IZWlnaHQgPSByb29tSGVpZ2h0ICogMC41O1xuICAgICAgICBjb25zdCBsYXllclggPSBNYXRoLm1heCgwLCBoYWxmR2FtZVdpZHRoIC0gaGFsZlJvb21XaWR0aCk7XG4gICAgICAgIGNvbnN0IGxheWVyWSA9IE1hdGgubWF4KDAsIGhhbGZHYW1lSGVpZ2h0IC0gaGFsZlJvb21IZWlnaHQpO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0b3BMZWZ0OiB7IHg6IGxheWVyWCwgeTogbGF5ZXJZIH0sXG4gICAgICAgICAgICB0b3BSaWdodDogeyB4OiBsYXllclggKyByb29tV2lkdGgsIHk6IGxheWVyWSB9LFxuICAgICAgICAgICAgYm90dG9tTGVmdDogeyB4OiBsYXllclgsIHk6IGxheWVyWSArIHJvb21IZWlnaHQgfSxcbiAgICAgICAgICAgIGJvdHRvbVJpZ2h0OiB7IHg6IGxheWVyWCArIHJvb21XaWR0aCwgeTogbGF5ZXJZICsgcm9vbUhlaWdodCB9XG4gICAgICAgIH07XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgbm9vcCB9IGZyb20gJy4uL3V0aWxzJztcblxuZXhwb3J0IGludGVyZmFjZSBJQnV0dG9uQ29uZmlnIHtcbiAgICBzY2VuZTogUGhhc2VyLlNjZW5lXG4gICAgeDogbnVtYmVyXG4gICAgeTogbnVtYmVyLFxuICAgIHRleHQ6IHN0cmluZyxcbiAgICBmb250U2l6ZT86IG51bWJlcixcbiAgICBwYWRkaW5nPzogbnVtYmVyLFxuICAgIGFsaWdubWVudD86ICdsZWZ0JyB8ICdyaWdodCcgfCAnY2VudGVyJyB8ICdqdXN0aWZ5JyxcbiAgICBvbkNsaWNrPzogKCkgPT4gdm9pZFxufVxuXG5leHBvcnQgY2xhc3MgQnV0dG9uIGV4dGVuZHMgUGhhc2VyLkdhbWVPYmplY3RzLlJlY3RhbmdsZSB7XG4gICAgcHJpdmF0ZSBsYWJlbDogUGhhc2VyLkdhbWVPYmplY3RzLlRleHQ7XG5cbiAgICBjb25zdHJ1Y3Rvcih7IHNjZW5lLCB4LCB5LCB0ZXh0LCBmb250U2l6ZSA9IDE4LCBwYWRkaW5nID0gMTAsIGFsaWdubWVudCA9ICdjZW50ZXInLCBvbkNsaWNrID0gbm9vcCB9OiBJQnV0dG9uQ29uZmlnKSB7XG4gICAgICAgIHN1cGVyKHNjZW5lLCB4LCB5KTtcbiAgICAgICAgc2NlbmUuYWRkLmV4aXN0aW5nKHRoaXMpO1xuXG4gICAgICAgIHRoaXMuc2V0T3JpZ2luKDAsIDApO1xuXG4gICAgICAgIHRoaXMubGFiZWwgPSBzY2VuZS5hZGQudGV4dCh4ICsgcGFkZGluZywgeSArIHBhZGRpbmcsIHRleHQpLnNldEZvbnRTaXplKGZvbnRTaXplKS5zZXRBbGlnbihhbGlnbm1lbnQpO1xuICAgICAgICB0aGlzLndpZHRoID0gdGhpcy5sYWJlbC53aWR0aCArIChwYWRkaW5nICogMik7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gdGhpcy5sYWJlbC5oZWlnaHQgKyAocGFkZGluZyAqIDIpO1xuXG4gICAgICAgIHRoaXMuc2V0SW50ZXJhY3RpdmUoeyB1c2VIYW5kQ3Vyc29yOiB0cnVlIH0pXG4gICAgICAgICAgICAub24oJ3BvaW50ZXJvdmVyJywgdGhpcy5lbnRlckJ1dHRvbkhvdmVyU3RhdGUpXG4gICAgICAgICAgICAub24oJ3BvaW50ZXJvdXQnLCB0aGlzLmVudGVyQnV0dG9uUmVzdFN0YXRlKVxuICAgICAgICAgICAgLm9uKCdwb2ludGVyZG93bicsIHRoaXMuZW50ZXJCdXR0b25BY3RpdmVTdGF0ZSlcbiAgICAgICAgICAgIC5vbigncG9pbnRlcnVwJywgdGhpcy5lbnRlckJ1dHRvbkhvdmVyU3RhdGUpXG4gICAgICAgICAgICAub24oJ3BvaW50ZXJ1cCcsIG9uQ2xpY2spXG5cbiAgICAgICAgdGhpcy5lbnRlckJ1dHRvblJlc3RTdGF0ZSgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgZW50ZXJCdXR0b25BY3RpdmVTdGF0ZSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5sYWJlbC5zZXRDb2xvcignI0JCQkJCQicpO1xuICAgICAgICB0aGlzLnNldEZpbGxTdHlsZSgweDQ0NDQ0NCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBlbnRlckJ1dHRvbkhvdmVyU3RhdGUoKTogdm9pZCB7XG4gICAgICAgIHRoaXMubGFiZWwuc2V0Q29sb3IoJyMwMDAwMDAnKTtcbiAgICAgICAgdGhpcy5zZXRGaWxsU3R5bGUoMHg4ODg4ODgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgZW50ZXJCdXR0b25SZXN0U3RhdGUoKTogdm9pZCB7XG4gICAgICAgIHRoaXMubGFiZWwuc2V0Q29sb3IoJyNGRkZGRkYnKTtcbiAgICAgICAgdGhpcy5zZXRGaWxsU3R5bGUoMHg4ODg4ODgpO1xuICAgIH1cbn1cbiIsImV4cG9ydCAqIGZyb20gJy4vYnV0dG9uJztcbiIsImltcG9ydCAqIGFzIFBoYXNlciBmcm9tICdwaGFzZXInO1xuXG5leHBvcnQgY29uc3QgZ2V0R2FtZVdpZHRoID0gKHNjZW5lOiBQaGFzZXIuU2NlbmUpID0+IHtcbiAgICByZXR1cm4gc2NlbmUuZ2FtZS5zY2FsZS53aWR0aDtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRHYW1lSGVpZ2h0ID0gKHNjZW5lOiBQaGFzZXIuU2NlbmUpID0+IHtcbiAgICByZXR1cm4gc2NlbmUuZ2FtZS5zY2FsZS5oZWlnaHQ7XG59O1xuIiwiZXhwb3J0ICogZnJvbSAnLi9oZWxwZXJzJztcbmV4cG9ydCAqIGZyb20gJy4vbm9vcCc7XG4iLCIvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWVtcHR5XG5leHBvcnQgY29uc3Qgbm9vcCA9ICgpID0+IHt9O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==