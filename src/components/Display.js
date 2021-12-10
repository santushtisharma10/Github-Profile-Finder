import React, { useState } from "react";

// styling 
// display repos
// 

export default function Display({ vis, info, repo }) {

    const conSrc = "http://ghchart.rshah.org/" + info.login
    const gitSrc = "https://github-readme-stats.vercel.app/api?username=" + info.login + "&show_icons=true&theme=chartreuse-dark"
    const repoUrl = "https://github.com/"+info.login+"?tab=repositories"
    console.log("checking", repo)
    return vis === 1 ? (
        <div>
            <br /><br />
            <div className="row">
                <div className="col-md-3" style={{ padding: "5px" }}>

                    <img src={info.avatar_url} height="80%" />

                    <h1> {info.login}</h1>
                    <h5>Followers : {info.followers}</h5>
                    <h5>Following : {info.following}</h5>
                  
                </div>
                <div className="col-md-3" style={{ padding: "5px" }}><h1> {info.name} </h1>
                    <p>{info.bio}</p>
                    <h1>Recent Repositories</h1>
                    {
                        repo.map((file)=> (
                            <div key={file.id}>
                                Santushti Shamra
                                <h1>{file.name}</h1>
                            </div>
                            
                        
                        ))
                    }
                    <a href={repoUrl} target="_blank"><button>Repositories</button></a>
                    </div>
                <div className="col-md-6" style={{ padding: "5px" }}><img src={gitSrc} />
                    <br /><br /><br /><br />
                    <img src={conSrc} height="100px" alt="2016rshah's Github chart" />
                </div>
            </div>
            <div className="row">

                {/*
                <div className="col-md-4">
                    <a href={info.html_url} target="__blank"> <button>Visit on Github</button>
                    </a>
                </div>
                <div className="col-md-8"></div>
                 */}
            </div>


        </div>
    )
        : (
            <div>
                <br/><br/><br/>
                <h1>Profile not found</h1>
            </div>
        )

}