import React, { useState } from "react";

export default function Display({ vis, info, repo }) {

    const conSrc = "http://ghchart.rshah.org/" + info.login
    const gitSrc = "https://github-readme-stats.vercel.app/api?username=" + info.login + "&show_icons=true&theme=chartreuse-dark"
    console.log("here in display")
    return vis === 1 ?  (
        <div>

            <div className="row">
                <div className="col-3-md">
                    <img src={info.avatar_url} />
                    <h1> {info.name} </h1>
                    <h3> {info.login}</h3>
                    <p>{info.bio}</p>
                </div>
                <div className="col-3-md">
                    <img src={gitSrc} />
                    <img src={conSrc} alt="2016rshah's Github chart" />
                </div>

            </div>
            
        </div>
    )
    :  (
        <div>
            <h1>Profile not found</h1>
        </div>
    )
    
}