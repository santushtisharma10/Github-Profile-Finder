import React, {useState} from "react";

export default function Profile() {

    console.log("Not Working")
    const[info, setInfo] = useState([])
    const [user, setName] = useState("")
    const [repo, setRepo] = useState([])

    const changeHandle = (e) => {

        setName(e.target.value)
    }

    const submitHandler = async e => {

        console.log("Hello")
        e.preventDefault();
        console.log("HELOO")
        const profile = await fetch("https://api.github.com/users/"+user)
        const profileJson = await profile.json()
        const repos = await fetch(profileJson.repos_url)
        const reposJson = await repos.json()

        if(profileJson) {

            setInfo(profileJson)
            setRepo(reposJson)
        }
    }

    return (
        <div>
            <input type="text" placeholder="Search UserName" value={user} onChange={changeHandle} />
            <button type="submit" onClick={submitHandler}>Submit</button>
            <img src="http://ghchart.rshah.org/santushtisharma10" alt="2016rshah's Github chart" />
        </div>
    )
}