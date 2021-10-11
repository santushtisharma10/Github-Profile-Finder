import React, {useState} from "react";
import Display from "./Display";

export default function Profile() {

    const[info, setInfo] = useState([])
    const [user, setName] = useState("")
    const [repo, setRepo] = useState([])

    const changeHandle = (e) => {

        setName(e.target.value)
    }

    const submitHandler = async e => {

    
        e.preventDefault();
    
        const profile = await fetch("https://api.github.com/users/"+user)
        const profileJson = await profile.json()
        const repos = await fetch(profileJson.repos_url)
        const reposJson = await repos.json()

        if(profileJson) {

            setInfo(profileJson)
            setRepo(reposJson)
        }
        else {

            <h1>Profile Not Found</h1>
        }
    }

    return (
        <div>
            <input type="text" placeholder="Search UserName" value={user} onChange={changeHandle} />
            <button type="submit" onClick={submitHandler}>Submit</button>
            
            <Display user={user} info={info} repo={repo} />
        </div>
    )
}