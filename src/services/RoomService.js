class RoomService {

    getRooms(homeId) {
        return fetch(`http://localhost:3001/rooms?home_id=${homeId}`)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                return data;
            })
    };

    getRoom(id) {
        return fetch(`http://localhost:3001/rooms/${id}`)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                return data;
            })
    }

    addRoom(room) {
        return fetch('http://localhost:3001/rooms', {
            method: 'POST',
            body: JSON.stringify(room),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                return data;
            })
    }


    updateRoom(room) {
        return fetch(`http://localhost:3001/rooms/${room.id}`, {
            method: 'PUT',
            body: JSON.stringify(room),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                return data;
            })
    }


    deleteRoom(id) {
        return fetch(`http://localhost:3001/rooms/${id}`, {
          method: 'DELETE'
        })
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            return data;
          })
      }










}

export default new RoomService();
