import React from 'react'
import Header3 from './Header3'
import Teach from "./Teachers.json"

const Teachers = () => {
    return (
        <div>
            <Header3 />


             
            <section className="container">
                <h1 className="large " style={{"color":"orange","marginTop":"20px"}}>Teachers Hub</h1>
                

            <nav className="navbar navbar-light">
                <div className="container-fluid">
                    <h3 className="navbar-brand">Browse and connect with Teachers <span style={{color:"blue"}}> 🤝 </span></h3>

                    {/* <form className="d-flex" onSubmit={searchHandler} >
                        <input className="form-control me-2" type="text" onChange={(e) => setSearch(e.target.value)} placeholder="clgId /email /skill /branch" aria-label="Search" />
                        <input className="btn btn-outline-success" type="submit" value="search" />
                    </form> */}
                    
                </div>
            </nav>


                <div className="profiles ">
                <div className = "row" >
                    {Teach.length>=1 ? 
                    Teach.map(profile => 
                        <div className='col-md-4'>
                        <div className="profile bg-light card " style={{"margin":"10px","width": "25.5rem"}}>
                        <center>
                            <img 
                                className="round-img"
                                src="https://cdn.pixabay.com/photo/2016/03/23/22/26/user-1275780_960_720.png"
                                height="200" width="300"
                                alt="user photo"
                            />
                            <div>
                                <h2 style={{"color":"green"}}>{profile.name}</h2>
                                <h3>{profile.department}</h3>
                                <h4>{profile.role}</h4>
                                <p><b>{profile.qualification}</b></p>
                                <p>{profile.mob}</p>
                                <p>{profile.email}</p>
                                
                               
                            </div>

                            <ul>
                                {profile.sub.split(",").map(skill => <li className="text-primary" style={{listStyleType:"none",marginLeft:"-30px"}}>{skill}</li>
                                    )}
                                
                            </ul>
                        </center>
                        </div>
                        </div>
                        )
                    : null}
                </div>
                </div>
                


            </section>

            


        </div>
    )
}

export default Teachers
