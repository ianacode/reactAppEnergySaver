import * as React from "react";
import "./Footer.css";
import Btn from "./components/Btn";
import Menu from "./components/Menu";
import home from "./assets/home.svg";
import otherstrendTwo from "./assets/otherstrendTwo.svg";
import document from "./assets/document.svg";

function Footer() {

    const propsData = {

        btnBack: {
            label: "Back",
        },
        menuRanking: {
            label: "Ranking",
            svg: otherstrendTwo,
            link: '/ranking'
        },
        menuHome: {
            label: "Home",
            svg: home,
            link: '/'
        },
        menuRooms: {
            label: "Rooms",
            svg: document,
            link: '/rooms'
        },
    };
    return (
        <div className="footer">
            <Btn className="footer-btn-instance-1" {...propsData.btnBack} />
            <div className="footer-flex-container-3">
                <Menu className="footer-menu-1-instance-1" {...propsData.menuRanking} />
                <Menu className="footer-menu-instance-1" {...propsData.menuHome} />
                <Menu className="footer-menu-2-instance-1" {...propsData.menuRooms} />
            </div>
        </div>
    );
}


export default Footer;

