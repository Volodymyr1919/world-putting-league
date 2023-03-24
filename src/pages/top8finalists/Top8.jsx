import React from "react";
import graybeal from "../../assets/team/graybeal.png";
import hester from "../../assets/team/hester.png";
import newport from "../../assets/team/newport.png";
import reeves from "../../assets/team/reeves.png";
import mccaslin from "../../assets/team/mccaslin.png";
import prokopova from "../../assets/team/prokopova.png";
import alessi from "../../assets/team/alessi.png";
import inabenit from "../../assets/team/inabenit.png";
// eslint-disable-next-line no-unused-vars
import top from "./top.scss";

export default function Top8() {

    let top = [
        {src: graybeal, name: "Joey Graybeal", position: "Top Seed"},
        {src: hester, name: "Gary Hester", position: "2nd Seed"},
        {src: newport, name: "Greg Newport", position: "3rd Seed"},
        {src: reeves, name: "Randy Reevs", position: "4th Seed"},
        {src: mccaslin, name: "Matt McCaslin", position: "5th Seed"},
        {src: prokopova, name: "Olivia Prokopova", position: "6th Seed"},
        {src: alessi, name: "Rick Alessi", position: "7th Seed"},
        {src: inabenit, name: "Jeremy Inabenit", position: "8th Seed"}
    ]

    return(
        <main className="players">
            <section className="breadcrumb">
                <h1>Top 8 Quarterfinals Field</h1>
            </section>
            <section className="topPlayers">
                {top.map(player => <div key={player.src} className="player__person">
                    <figure className="person__photo">
                        <img src={player.src} alt="" />
                    </figure>
                    <div className="person__description">
                        <h4>{player.name}</h4>
                        <span>{player.position}</span>
                    </div>
                </div>)}
                {/* <div className="player__person">
                    <figure className="person__photo">
                        <img src={graybeal} alt="" />
                    </figure>
                    <div className="person__description">
                        <h4>Joey Graybeal</h4>
                        <span>Top Seed</span>
                    </div>
                </div> */}
            </section>
        </main>
    );
}