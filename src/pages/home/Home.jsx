import React from "react";
import winners from "../../assets/img/WPL_winnercircle.png";
import shape from "../../assets/img/shape.png";
import poster from "../../assets/img/wpl_livestream.png";
import katrek from "../../assets/img/katrek.png";
import bogeybois from "../../assets/img/bogeybois.png";
import kaz from "../../assets/img/kaz.png";
import Hester from "../../assets/img/Hester-NC.png";
import shape2 from "../../assets/img/shape-2.png";
// eslint-disable-next-line no-unused-vars
import homeStyle from "./home.scss";

export default function Home() {

    let people = [
        {
            link: "https://www.siriusxm.com/channels/siriusxm-pga-tour-radio",
            src: katrek,
            name: "Brian Katrek",
            description: "Tournament Commentator and Host of PGA TOUR Radio"
        },
        {
            link: "https://www.youtube.com/channel/UCBb-m0PAMAVTnW0VGoerxQQ",
            src: bogeybois,
            name: "Bogey Bois",
            description: "Social Media Celebrities and Special Guests"
        },
        {
            link: "/",
            src: kaz,
            name: "Kaz Brown",
            description: "On-Air Host from Pro League Network"
        }
    ]

    return(
        <main>
            <section className="main__heroAria">
                <span className="heroAria__bg">
                    <div className="heroAria__wrapper">
                        <h2>Gary Hester Wins Inaugural WPL Championship</h2>
                        <p>Hester Defeats Matt McCaslin by Two Strokes in Final Round for First Place.</p>
                    </div>
                </span>
            </section>
            <section className="about">
                <span className="about__leftSide">
                    <h2>Event 1, World Putting League</h2>
                    <br />
                    <h4>Live from the Hawaii Rumble in Myrtle Beach, South Carolina, February 27-28th, 2023.</h4>
                    <div className="leftSide__message">
                        <div className="message__block">
                            <span className="message__head"><i className="bi bi-quote"></i></span>
                            <p>
                                These athletes devote countless hours to perfect their game and and finally had their chance to showcase their talents to the world.  There couldn't be a better inaugural champion than Gary Hester, a mainstay at USPMGA events for decades.
                            </p>
                            <span className="message__bottom"><i className="bi bi-quote"></i></span>
                            <h6>Bob Detwiler, USPMGA Commissioner</h6>
                        </div>
                    </div>
                    <p className="leftSide__mainText">
                        US National Mini Golf Team member Gary Hester (+550 field) won the inaugural World Putting League Championship at Hawaiian Rumble Minigolf in Myrtle Beach, S.C. after shooting a final round 31 for 5 under par to defeat Matt McCaslin (33, 3 under par; +190 pre-tournament to win) and take home the $5,000 championship purse.
                        <br /><br />
                        Hester finished the Day 1 qualifying rounds by shooting 32 (-4) and 31 (-5), respectively, to combine for 9 under par and the No. 2 seed heading into the Day 2 match play bracket. After Day 1, Hester's odds to win moved to +420.
                        <br /><br />
                        Hester defeated Rick Alessi with a 35 (-1) in the quarterfinals before squeaking by Joey Graybeal in the semifinals by one stroke, 32 (-4) to 33 (-3). Graybeal entered the Day 2 quarterfinals as the top seed (-350 to win after Day 1) after pacing the field with a combined -9 in the two qualifying rounds.
                    </p>
                </span>
                <span className="about__rightSide">
                    <span className="rightSide__top">
                        <figure className="top__mainImg">
                            <img src={winners} alt="winners" />
                        </figure>
                        <figure className="top__shape">
                            <img src={shape} alt="shape" />
                        </figure>
                    </span>
                    <span className="rightSide__bottom">
                        <figure className="bottom__poster">
                            <img src={poster} alt="poster" />
                        </figure>
                        <span className="bottom__play">
                            <a href="https://player.vimeo.com/video/804104059"><i className="bi bi-play-circle-fill"></i></a>
                        </span>
                    </span>
                </span>
            </section>
            <section className="club">
                {people.map(person => <figure key={person.src} className="club__person">
                    <a href={person.link}>
                        <img src={person.src} alt="person" />
                    </a>
                    <div className="person__who">
                        <span>{person.name}</span>
                        <div className="who__description">
                            <h4>{person.description}</h4>
                        </div>
                    </div>
                </figure>)}
            </section>
            <section className="testimonials">
                <div className="testimonials__leftSide">
                    <h2>Champion Player Profile</h2>
                    <h4>Gary Hester</h4>
                    <span>North Carolina</span>
                    <p>
                        Teeing off his Mini Golf career in 1969, Gary has over 50 years of experience in the sport. He started at the Arnold Palmer Mini Golf course in High Point, NC, where he took home four straight championships. In the USPMGA Masters, he has won multiple senior divisions and has registered 11 top ten and two second place finishes in the main draw. Gary has also represented the US National Mini Golf Team at the World Mini Golf Championships for the last few years. In Sweden he finished as the top American and finished third overall. 
                    </p>
                </div>
                <div className="testimonials__rightSide">
                    <figure className="rightSide__mainImg">
                        <img src={Hester} alt="" />
                    </figure>
                    <img src={shape2} alt="" className="rightSide__shape2" />
                </div>
            </section>
        </main>
    );
}