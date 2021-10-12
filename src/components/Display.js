import React, { useState } from "react";

// styling and more info needs to be added

export default function Display({ vis, info, repo }) {

    const conSrc = "http://ghchart.rshah.org/" + info.login
    const gitSrc = "https://github-readme-stats.vercel.app/api?username=" + info.login + "&show_icons=true&theme=chartreuse-dark"
    
    return vis === 1 ?  (
        <div>

            <div className="row">
                <div className="col-md-6" style={{backgroundColor: "red"}}>
                    
                    <h1> {info.name} </h1>
                    <h3> {info.login}</h3>
                    <p>{info.bio}</p>
                </div>
                <div className="col-md-6">
                <h1> {info.name} </h1>
                    <h3> {info.login}</h3>
                    <p>{info.bio}</p>{/*
                    <img src={gitSrc} />
                    <img src={conSrc} alt="2016rshah's Github chart" />*/}
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