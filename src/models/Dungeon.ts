import { Room, IRoomCoordinates, Direction, oppositeDirection, RoomType } from './Room';

export class Dungeon {
    // 10x10 array of Rooms
    public rooms: (Room | null)[][] = [
        [null,null,null,null,null,null,null,null,null,null],
        [null,null,null,null,null,null,null,null,null,null],
        [null,null,null,null,null,null,null,null,null,null],
        [null,null,null,null,null,null,null,null,null,null],
        [null,null,null,null,null,null,null,null,null,null],
        [null,null,null,null,null,null,null,null,null,null],
        [null,null,null,null,null,null,null,null,null,null],
        [null,null,null,null,null,null,null,null,null,null],
        [null,null,null,null,null,null,null,null,null,null],
        [null,null,null,null,null,null,null,null,null,null]
    ];

    constructor() {
        // get a number 1-8 for both X and Y start coords
        // we don't want 0 or 9 because we want all 4 sides to be open for spawn
        const spawnX = Math.min(8, Math.max(1, Math.floor(Math.random() * 10)));
        const spawnY = Math.min(8, Math.max(1, Math.floor(Math.random() * 10)));

        // register spawn room
        const spawnRoom = new Room({ x: spawnX, y: spawnY });
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
    private generateConnectedRooms(sourceRoom: Room, forceRoomConnections?: number): void {
        const roomMap: { [key in Direction]: IRoomCoordinates } = {
            [Direction.Left]: { x: sourceRoom.roomCoordinates.x - 1, y: sourceRoom.roomCoordinates.y },
            [Direction.Right]: { x: sourceRoom.roomCoordinates.x + 1, y: sourceRoom.roomCoordinates.y },
            [Direction.Above]: { x: sourceRoom.roomCoordinates.x, y: sourceRoom.roomCoordinates.y - 1 },
            [Direction.Below]: { x: sourceRoom.roomCoordinates.x, y: sourceRoom.roomCoordinates.y + 1 }
        };

        const possibleConnections: Direction[] = [];
        if (roomMap[Direction.Left].x >= 0 && this.rooms[roomMap[Direction.Left].y][roomMap[Direction.Left].x] === null) {
            possibleConnections.push(Direction.Left);
        }

        if (roomMap[Direction.Right].x <= 9 && this.rooms[roomMap[Direction.Right].y][roomMap[Direction.Right].x] === null) {
            possibleConnections.push(Direction.Right);
        }

        if (roomMap[Direction.Above].y >= 0 && this.rooms[roomMap[Direction.Above].y][roomMap[Direction.Above].x] === null) {
            possibleConnections.push(Direction.Above);
        }

        if (roomMap[Direction.Below].y <= 9 && this.rooms[roomMap[Direction.Below].y][roomMap[Direction.Below].x] === null) {
            possibleConnections.push(Direction.Below);
        }

        const connectedRoomsToGenerate = Math.max(forceRoomConnections || 0, Math.floor(Math.random() * (possibleConnections.length + 1)));
        if (connectedRoomsToGenerate === 0) {
            sourceRoom.isDeadEnd = true;
            return;
        }

        const newRooms: Room[] = [];
        for (let i = 0; i < connectedRoomsToGenerate; i++) {
            // get one of the directions randomly by index
            const directionToUse = possibleConnections.splice(Math.floor(Math.random() * possibleConnections.length), 1)[0];
            const newRoomCoordinates = roomMap[directionToUse];
            const newRoom = new Room(newRoomCoordinates);

            const roomType = Math.floor(Math.random() * Object.keys(RoomType).filter(x => !parseInt(x)).length) as RoomType;
            newRoom.roomType = roomType;

            newRooms.push(newRoom);
            sourceRoom.connectedRooms[directionToUse] = newRoom; // let the source room know it has a connection to the new room in this direction
            newRoom.connectedRooms[oppositeDirection[directionToUse]] = sourceRoom; // let the new room know it has a connection to the source room in the opposite direction

            this.rooms[newRoom.roomCoordinates.y][newRoom.roomCoordinates.x] = newRoom; // register the new room in the room map
        }

        for (const newRoom of newRooms) {
            this.generateConnectedRooms(newRoom);
        }
    }
}
