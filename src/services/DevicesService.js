class DevicesService {

    getDevices(roomId) {
        return fetch(`http://localhost:3001/devices?room_id=${roomId}`)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                return data;
            })
    };

    getDevice(id) {
        return fetch(`http://localhost:3001/devices/${id}`)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                return data;
            })
    }

    addDevice(device) {
        return fetch('http://localhost:3001/devices', {
            method: 'POST',
            body: JSON.stringify(device),
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


    updateDevice(device) {
        return fetch(`http://localhost:3001/devices/${device.id}`, {
            method: 'PUT',
            body: JSON.stringify(device),
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


    deleteDevice(id) {
        return fetch(`http://localhost:3001/devices/${id}`, {
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

export default new DevicesService();
