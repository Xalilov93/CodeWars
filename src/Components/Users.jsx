import React, { useEffect, useState } from 'react'

function Users() {
    let [user, setUser] = useState({});
    let [userName, setUserName] = useState('');

    let inputValue = userName;
    const handleInput = (e) => {
        inputValue = e.target.value;
    };

    const handleGetUser = () => {
        setUserName(inputValue);
    }
    useEffect(()=> {
        ;(
            async () => {
                const res = await fetch(`https://www.codewars.com/api/v1/users/${userName}`);
                let data = await res.json();
                if (res.ok){
                    setUser(data);
                    console.log(data); 
                }
                else {
                    alert(`Xato user!`);
                }
            }
        ) ()
    }, [userName])
    let userRanks = user.ranks
  return (
    <div className='container'>
        <h1 className='mt-3'>CodeWars users App</h1>
        <div className='d-flex justify-content-between w-75 flex-wrap'>
            <input onChange={handleInput} className='form-control w-50 mt-5 mb-3 me-3 ' type="text" placeholder='username' />
            <button onClick={handleGetUser} className='btn btn-success mt-5 mb-3 px-5'>Click</button>
        </div>
        <div className="card w-75">
            <h2 className="card-header card-title">Username: {user.username}</h2>
            <p className="card-header">Name: {user.name}</p>
            <p className="card-header">Honor: {user.honor}</p>
            <p className="card-header">LeaderboardPosition: {user.leaderboardPosition}</p>
            <p className="card-header">ID: {user.id}</p>
            <p className="card-header">Clan: {user.clan} </p>
            {userRanks && <ul className="list-group list-group-flush">
               <li className="list-group-item">
               Language:  {" "}
                {Object.keys(userRanks.languages).filter(() => (
                   {}
                )).join(', ') }
                </li> 
            </ul>}
            {user.skills && <ul className="list-group list-group-flush">
               <li className="list-group-item">
               Skills:  {" "}
                {Object.values(user.skills).filter(() => (
                   {}
                )).join(', ')}
                </li> 
            </ul>}
            {user.codeChallenges && <ul className="list-group list-group-flush">
               <li className="list-group-item">
               TotalCompleted:  {" "}
                {Object.values(user.codeChallenges).filter(() => (
                   {}
                )).slice(1)}
                </li> 
            </ul>}
        </div>
    </div>
  )
}

export default Users