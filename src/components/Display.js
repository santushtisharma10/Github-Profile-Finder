import React, { useState } from "react";

// styling and more info needs to be added

export default function Display({ vis, info, repo }) {

    const conSrc = "http://ghchart.rshah.org/" + info.login
    const gitSrc = "https://github-readme-stats.vercel.app/api?username=" + info.login + "&show_icons=true&theme=chartreuse-dark"

    return vis === 1 ? (
        <div>
            <div className="row">
                <div className="col-md-4" style={{backgroundColor: "pink"}}>
                    Hello my names is Santushti sharma
                    {/*<img src={info.avatar_url} />
                    <h1> {info.name} </h1>
                    <h3> {info.login}</h3>
                    <h5>Followers : {info.followers}</h5>
                    <h5>Following : {info.following}</h5>
                    <p>{info.bio}</p></div>
    */} 
    </div>
                <div className="col-md-4" style={{backgroundColor: "blue"}}>Testing the blue coloure{/*Repos SECTION*/}</div>
                <div className="col-md-4" style={{backgroundColor: "red"}}>Testing the red color{/*<img src={gitSrc} />*/}</div>
            </div>
            <div className="row">
                {/*
                <div className="col-md-4">
                    <a href={info.html_url} target="__blank"> <button>Visit on Github</button>
                    </a>
                </div>
                <div className="col-md-8"><img src={conSrc} alt="2016rshah's Github chart" /></div>
                 */}
            </div>
            

        </div>
    )
        : (
            <div>
                <h1>Profile not found</h1>
            </div>
        )

}