import React, {useState} from "react";

export default function Display({user, info, repo}) {

    const conSrc = "http://ghchart.rshah.org/" + info.login
    const gitSrc = "https://github-readme-stats.vercel.app/api?username="+info.login+"&show_icons=true&theme=tokyonight"

    return (
        <div>

            <div className="row">
                <div className="col-6-md">
                    <img src={info.avatar_url} />
                   <h1> {info.name} </h1>
                   <h3> {info.login}</h3>
                   <p>{info.bio}</p>
                </div>
                <div className="col-6-md"></div>
                <img src={gitSrc} />
                <img src={conSrc} alt="2016rshah's Github chart" />
            </div>
            {/*<img src="http://ghchart.rshah.org/santushtisharma10" alt="2016rshah's Github chart" />*/}
        </div>
    )
}