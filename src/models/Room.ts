import { RoomScene } from "../scenes";
import { Dungeon1TileSetIndex } from "./TileSetIndex";

export interface IRoomCoordinates { x: number, y: number }
export enum RoomConnection { LEFT = 'Left', RIGHT = 'Right', ABOVE = 'Above', BELOW = 'Below' }
export const oppositeRoomConnection: { [key in RoomConnection]: RoomConnection } = {
    [RoomConnection.LEFT]: RoomConnection.RIGHT,
    [RoomConnection.RIGHT]: RoomConnection.LEFT,
    [RoomConnection.ABOVE]: RoomConnection.BELOW,
    [RoomConnection.BELOW]: RoomConnection.ABOVE
};

export class Room {
    public connectedRooms: { [key in RoomConnection]: Room | null } = {
        [RoomConnection.LEFT]: null,
        [RoomConnection.RIGHT]: null,
        [RoomConnection.ABOVE]: null,
        [RoomConnection.BELOW]: null
    };
    public isDeadEnd: boolean = false;
    public isSpawn: boolean = false;
    public layers: { [key: string]: { tileIndex: number, x: number, y: number }[] } = {};

    constructor(
        public roomCoordinates: IRoomCoordinates
    ) {

    }
}
