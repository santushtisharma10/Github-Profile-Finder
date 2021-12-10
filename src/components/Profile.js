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

        console.log("Form working")

        e.preventDefault();

        const profileJson = await fetch("https://api.github.com/users/" + user).then((res) => {
            console.log(res.status)
            if (res.ok) return res.json()
        })


        if (profileJson) {
            //let len = 30, num = 1
            //let repos = []
           //use a loop to store all the repositories and layout to show the results
            const reposJson = await fetch(profileJson.repos_url + "?per_page=10&sort=updated_at&order=desc").then((res) => res.json())
            console.log(reposJson)
                
             // for users having repositories less than or equal to 100

            console.log(profileJson)
            
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
            <form onSubmit={submitHandler}>
                <input type="text" name="user" placeholder="Search UserName" value={user} onChange={changeHandle} required/>
                <button type="submit">Submit</button>
            </form>
            {console.log(vis)}

            {vis && <Display vis={vis} info={info} repo={repo} />}
        </div>
    )
}