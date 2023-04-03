import * as React from "react";
import {useEffect, useState} from "react";
import "./AddRoom.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import {useNavigate} from "react-router";
import loginService from "../../services/LoginService";
import homeService from "../../services/HomeService";

function AddRoom() {

  const navigate = useNavigate()
  const [hover, setHover] = useState('');

  const [home, setHome] = useState({});
  const [room, setRoom] = useState({
    id: 0,
    name: "",
    img: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/Pgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDIwMDEwOTA0Ly9FTiIKICJodHRwOi8vd3d3LnczLm9yZy9UUi8yMDAxL1JFQy1TVkctMjAwMTA5MDQvRFREL3N2ZzEwLmR0ZCI+CjxzdmcgdmVyc2lvbj0iMS4wIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiB3aWR0aD0iMTI4MC4wMDAwMDBwdCIgaGVpZ2h0PSIxMTgxLjAwMDAwMHB0IiB2aWV3Qm94PSIwIDAgMTI4MC4wMDAwMDAgMTE4MS4wMDAwMDAiCiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWlkWU1pZCBtZWV0Ij4KPG1ldGFkYXRhPgpDcmVhdGVkIGJ5IHBvdHJhY2UgMS4xNSwgd3JpdHRlbiBieSBQZXRlciBTZWxpbmdlciAyMDAxLTIwMTcKPC9tZXRhZGF0YT4KPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4wMDAwMDAsMTE4MS4wMDAwMDApIHNjYWxlKDAuMTAwMDAwLC0wLjEwMDAwMCkiCmZpbGw9IiMwMDAwMDAiIHN0cm9rZT0ibm9uZSI+CjxwYXRoIGQ9Ik02MzE1IDExNzg1IGMtMzggLTEzIC0yNzUgLTg3IC01MjUgLTE2NSAtNDIwIC0xMzEgLTczNSAtMjI5IC0xNTI1Ci00NzUgLTE2NSAtNTEgLTQ3NSAtMTQ4IC02OTAgLTIxNSAtMjE0IC02NyAtNTI1IC0xNjQgLTY5MCAtMjE1IC0zMjkgLTEwMwotODI1IC0yNTcgLTE1MjUgLTQ3NSAtMjUwIC03OCAtNTM4IC0xNjggLTY0MCAtMjAwIC0xMDIgLTMxIC0zMDUgLTk1IC00NTIKLTE0MCBsLTI2OCAtODQgMCAtNDUyIDAgLTQ1MiAxODMgNTggYzEwMCAzMSAxOTIgNjAgMjA1IDY0IGwyMiA3IDAgLTQ1MjAgMAotNDUyMSAxMzAgMCAxMzAgMCAyIDQ1NjIgMyA0NTYxIDI2NSA4MyBjMzExIDk2IDE0ODggNDYzIDE5NDAgNjA0IDE3MyA1NCA2MjEKMTkzIDk5NSAzMTAgMzc0IDExNyA4MjIgMjU2IDk5NSAzMTAgNjI4IDE5NiAxMjI2IDM4MiAxMzc2IDQyOSBsMTUzIDQ4IDE2OAotNTMgYzkyIC0yOSAzNzMgLTExNiA2MjMgLTE5NCAyNTAgLTc4IDU5MSAtMTg0IDc1OCAtMjM2IDE2NiAtNTIgNDM5IC0xMzcKNjA3IC0xODkgMTY4IC01MiA0NDEgLTEzNyA2MDggLTE4OSAxMDA3IC0zMTQgMjMwMSAtNzE3IDI3OTAgLTg2OSBsMTk3IC02MiAwCi00NTU3IDAgLTQ1NTggMTMwIDAgMTMwIDAgMCA0NTE1IGMwIDI0ODMgMyA0NTE1IDggNDUxNSA0IDAgOTEgLTI3IDE5NSAtNTkKbDE4NyAtNTkgMCA0NTIgMCA0NTIgLTY3IDIxIGMtMzggMTIgLTI3MyA4NSAtNTIzIDE2MyAtMjUwIDc4IC02MjggMTk2IC04NDAKMjYyIC02OTkgMjE3IC05ODYgMzA3IC0xMjk1IDQwMyAtMTY4IDUyIC00NDEgMTM3IC02MDcgMTg5IC0xNjcgNTIgLTUxMiAxNjAKLTc2OCAyMzkgLTExNzYgMzY3IC0xNDA0IDQzOCAtMTgzNyA1NzMgLTI1NCA3OSAtNDY2IDE0NCAtNDcwIDE0MyAtNCAwIC0zOQotMTEgLTc4IC0yNHoiLz4KPHBhdGggZD0iTTIzNTcgNTk4MSBjLTE0MiAtNDcgLTIzNyAtMTQ3IC0yOTUgLTMxMCAtMTUgLTQyIC0xNyAtMjczIC0xOQotMjg1OCBsLTMgLTI4MTMgNDYwIDAgNDYwIDAgMCA3MTAgMCA3MTAgMzQ5MCAwIDM0OTAgMCAwIC03MDUgMCAtNzA1IDQ1MCAwCjQ1MCAwIC0yIDIxODggYy0zIDIxMDMgLTQgMjE4OSAtMjIgMjI0MiAtMjMgNjkgLTYxIDE0NSAtOTUgMTg5IC00MSA1NCAtMTM2CjExOSAtMjA4IDE0MSAtMjE1IDY2IC00MjkgLTM2IC01MjkgLTI1NCAtNTIgLTExNCAtNTMgLTE0MCAtNTQgLTEwODMgbDAgLTg3MwotMzQ5NSAwIC0zNDk0IDAgLTMgMTUyMyBjLTMgMTQ0NiAtNCAxNTI1IC0yMiAxNTc3IC00OCAxNDQgLTEzMyAyNDYgLTI1MiAzMDIKLTg3IDQxIC0yMTcgNDkgLTMwNyAxOXoiLz4KPHBhdGggZD0iTTM4NTUgNTM4MyBjLTQ2NCAtNDAgLTgwMyAtNDcyIC03NTQgLTk1OCA0NiAtNDYwIDQxOSAtNzk1IDg1OSAtNzcyCjEyMSA2IDIwOCAzMCAzMjEgODggMTU3IDgxIDI3NCAyMDQgMzU5IDM3NCAxMTAgMjIwIDEyNiA0NTYgNDkgNjkxIC04NiAyNTkKLTI4OSA0NjMgLTU0MCA1NDMgLTUzIDE3IC0yMzEgNDUgLTI0OSAzOSAtMyAtMSAtMjMgLTMgLTQ1IC01eiIvPgo8cGF0aCBkPSJNNTA3MSA0NzY0IGMtMTI4IC00NiAtMjE3IC0xNTEgLTI1NiAtMzAxIC0xMiAtNDYgLTE1IC0xMzggLTE1IC00ODAKbDAgLTQyMyAtNjYyIDAgYy03MDkgMCAtNzI3IC0xIC04MzQgLTUxIC03MiAtMzQgLTE0OSAtMTExIC0xODYgLTE4NyAtMzEgLTYzCi0zMyAtNzIgLTMzIC0xNzcgMCAtMTAzIDIgLTExNCAzMiAtMTc3IDU1IC0xMTcgMTY0IC0yMDAgMjk3IC0yMjggMzQgLTcgMzUyCi0xMCA5NjEgLTggbDkxMCAzIDU3IDI3IGM3MSAzMyAxNDYgMTAyIDE4MSAxNjYgNTcgMTA0IDU3IDEwOSA1NyA4MTMgMCAzOTgKLTQgNjY3IC0xMCA3MDAgLTI1IDEzMCAtMTA0IDI0MiAtMjEyIDMwMCAtNTYgMjkgLTczIDMzIC0xNTMgMzYgLTY0IDIgLTEwMwotMSAtMTM0IC0xM3oiLz4KPHBhdGggZD0iTTU2OTAgMzc1MCBsMCAtMTAxMCAyMDI1IDAgMjAyNiAwIC0zIDcxMyBjLTQgNzA0IC00IDcxMyAtMjYgNzg1Ci03MCAyMjggLTIwOSAzODQgLTQxNSA0NjYgLTE0NyA1OCAtNzAgNTYgLTE5MTMgNTYgbC0xNjk0IDAgMCAtMTAxMHoiLz4KPC9nPgo8L3N2Zz4K",
    devices: [],
  });

  useEffect(() => {
    homeService.getHome(loginService.userAuthenticated().home_id)
      .then((home) => {
        setHome(home);
        // get max room if from home
        const maxRoomId = home.rooms.reduce((max, room) => {
          return +room.id > max ? +room.id : max;
        }, []);
        setRoom({...room, id: +maxRoomId + 1});
      })
  }, []);

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
    home.rooms.push(room)
    homeService.updateHome(home).then(() => {
      navigate("/rooms");
    });
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
               setRoom({ ...room, img: base64 })
             }}
          />
          <span>Select image</span>
        </label>

        <input
          className="login-form-stroke"
          placeholder="Room name"
          type="text"
          value={room.name}
          onChange={(e) => setRoom({ ...room, name: e.target.value })}
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
