import * as React from "react";
import {useEffect, useState} from "react";
import "./AddRoom.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import {useNavigate} from "react-router";
import loginService from "../../services/LoginService";
import homeService from "../../services/HomeService";
import {useDispatch, useSelector} from "react-redux";
import {addRoom, setHome, setRoom} from "../../store/home-slice";

function AddRoom() {

  const navigate = useNavigate();
  const home = useSelector((state) => state.home.home);
  const room = useSelector((state) => state.home.room);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!home.id) {
      homeService.getHome(loginService.userAuthenticated().home_id)
        .then((home) => {
          dispatch(setHome(home));
        })
    } else {
      dispatch(setHome(home));
    }
  }, []);


  useEffect(() => {
    if (room.id) {
      console.log('addRoom', room)
      homeService.updateHome(home).then(() => {
        navigate(`/rooms/`)
      })
    }
  }, [room]);

  const [hover, setHover] = useState('');

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  function submitForm(event) {
    // react will call this function when the form is submitted
    event.preventDefault();
    // set adult if dateOfBird is before 18 years ago
    dispatch(addRoom(room))
  }

  return (
    <>
      <Header />
      <Breadcrumb label="Rooms" link={"/rooms"} />
      <div className="addroom">

        <img src={room.img} className="imageRoom" />
        <label className="select-image">
          <input type="file"
             onChange={async (event) => {
               const file = event.target.files[0];
               const base64 = await convertBase64(file);
               dispatch(setRoom({ ...room, img: base64 }))
             }}
          />
          <span>Select image</span>
        </label>

        <input
          className="login-form-stroke"
          placeholder="Room name"
          type="text"
          value={room.name}
          onChange={(e) => dispatch(setRoom({ ...room, name: e.target.value }))}
        />

        <button className={`main-buttons main-buttons-instance-1 ${hover}`}
            onClick={submitForm}
        >
          <div className="vector"
            onMouseEnter={() => setHover('active')}
            onMouseLeave={() => setHover('')}
            onTouchStart={() => setHover('active')}
            onTouchEnd={() => setHover('')}>
            Add room</div>
        </button>

      </div>
      <Footer />
    </>
  );
}
export default AddRoom;
