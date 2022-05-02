import React from "react";
import '../styles/BodyApp.scss'
import imgprofil from "../../assets/icon.png"

export default class BodyApp extends React.Component {

    render() {
        return (
            <div className="bodyApp">

                <div className="sendposts">
                    <input type="text" className="postcomment" />
                    <button type="Submit">Envoyer</button>
                    <div className="post">
                        <div className="post-card">
                            <div className="profil">
                                <img className="img-profil-post" src={imgprofil} alt="" />
                                <h1 className="pseudo">dijeont edwin</h1>
                            </div>
                            <span className="date"> 23./03.2022 </span>
                            <div className="img-post">
                            <img className="img-content" src={imgprofil} alt="" />
                            </div>
                            <p className="content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias voluptatem, esse quos nulla architecto dicta ullam praesentium, aliquam debitis dignissimos, maxime libero culpa eaque minus exercitationem ipsam enim eveniet officiis?</p>
                            .
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}