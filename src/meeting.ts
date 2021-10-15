class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting;
    }

    arrangeRooms(meetings: number[][]): number[][][] {
        let rooms: number[][][] = [];

        for (const meeting of meetings) {
            // if has interference with other rooms' events, add new room
            const freeRoomId = this._hasFreeRoomForMeeting(meeting, rooms);            
            rooms = this._extendRoomMeetingTime(freeRoomId, rooms, meeting);
        }

        return rooms;
    }

    private _hasInterferenceWithMeeting(newMeeting: number[], refMeeting: number[]): boolean {
        if (newMeeting[0] >= refMeeting[1] || newMeeting[1] <= refMeeting[0]) {
            return false;
        }
        return true;
    }

    private _hasInterferenceWithRoom(meeting: number[], room: number[][]): boolean {
        for (const refMmeting of room) {
            if (this._hasInterferenceWithMeeting(meeting, refMmeting)) {
                return true;
            }
        }
        return false;
    }

    private _hasFreeRoomForMeeting(meeting: number[], rooms: number[][][]): (number | null) {
        let freeRoomId = 0;
        for (const room of rooms) {
            if (!this._hasInterferenceWithRoom(meeting, room)) {
                return freeRoomId;
            }
            freeRoomId++;
        }
        return null;
    }

    private _extendRoomMeetingTime(roomId: number | null, rooms: number[][][], meeting: number[]): number[][][] {
        if (roomId !== null) {
            rooms[roomId].push(meeting);
        } else {
            rooms.push([meeting]);
        }
        return rooms;
    }
}

let greeter = new Greeter("world");

// _.times(4, () => console.log(greeter.greet()));

let meetings = [[1, 3], [2, 4], [2, 5], [3, 4], [3, 6], [4, 5], [5, 6]];
let rooms = greeter.arrangeRooms(meetings);
console.log("\nMeetings: ", meetings, "\narranged rooms: ", rooms, "\nnumber of rooms: ", rooms.length);

meetings = [[2, 10], [3, 4], [6, 9]];
rooms = greeter.arrangeRooms(meetings);
console.log("\nMeetings: ", meetings, "\narranged rooms: ", rooms, "\nnumber of rooms: ", rooms.length);



