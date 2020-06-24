export interface IRoomCoordinates { x: number, y: number }
export enum Direction { Left = 'Left', Right = 'Right', Above = 'Above', Below = 'Below' }
export const oppositeDirection: { [key in Direction]: Direction } = {
    [Direction.Left]: Direction.Right,
    [Direction.Right]: Direction.Left,
    [Direction.Above]: Direction.Below,
    [Direction.Below]: Direction.Above
};
export enum RoomType {
    Normal = 0,
    Pillar= 1,
    Divided = 2,
    Hole = 3,
    Chest = 4
 }

export class Room {
    public connectedRooms: { [key in Direction]: Room | null } = {
        [Direction.Left]: null,
        [Direction.Right]: null,
        [Direction.Above]: null,
        [Direction.Below]: null
    };
    public isDeadEnd: boolean = false;
    public isSpawn: boolean = false;
    public roomType: RoomType = RoomType.Normal;
    public layers: { [key: string]: { tileIndex: number, x: number, y: number }[] } = {};

    constructor(
        public roomCoordinates: IRoomCoordinates
    ) { }
}
