import React, { useState } from "react";
import Display from "./Display";


export default function Profile() {

    const [info, setInfo] = useState([])
    const [user, setName] = useState("")
    const [repo, setRepo] = useState([])
    const [vis, setVis] = useState(0)
    

    const changeHandle = (e) => {

        setName(e.target.value)
    }

    const submitHandler = async e => {


        e.preventDefault();

        const profileJson = await fetch("https://api.github.com/users/" + user).then((res) => {
            console.log(res.status)
            if (res.ok) return res.json()
        })


        if (profileJson) {
            const reposJson = await fetch(profileJson.repos_url).then((res) => res.json())

            console.log(profileJson)
            console.log(reposJson)

            setInfo(profileJson)
            setRepo(reposJson)
            setVis(1)
            
        }
        else {

            console.log("Profile Not found")
            setVis(-1)
        }
    }

    return (
        <div>
            <form action="">
                <input type="text" name="user" placeholder="Search UserName" value={user} onChange={changeHandle} required/>
                <button type="submit" onClick={submitHandler}>Submit</button>
            </form>
            {console.log(vis)}

            {vis > 0 && <Display vis={vis} info={info} repo={repo} />}
        </div>
    )
}