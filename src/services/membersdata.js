function membersdata(){


fetch('http://localhost:3001/users')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
    })
};




export default membersdata;