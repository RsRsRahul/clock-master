import React,{useState,useEffect} from 'react'
import { Navigate,useParams } from 'react-router-dom';
import axios from 'axios';
import Header3 from './Header3';

const Indprofile2 = () => {
    const {id}=  useParams()
    const [message,setMessage] = useState("");
    const [messageSender,setMessageSender] = useState(null);
    const [iprofile,setIprofile] = useState(null)
    

    useEffect(()=>{
        
        axios.get(`http://localhost:5000/indprofilee2/${id}`).then(
            res => setIprofile(res.data)
        )
        console.log(id)

        axios.get('http://localhost:5000/myprofile',{
            headers : {
                'x-token' : localStorage.getItem('token')
            }
        }).then(res => setMessageSender(res.data.email))

    },[])


    const submitHandler = e =>{
        e.preventDefault();

        let review = {
            messageSender,
            messageReceiver:id,
            message,
        }
        
        if(message){
        axios.post('http://localhost:5000/addreview',review,{
                headers : {
                    'x-token' : localStorage.getItem('token')
                }
            }).then(res => alert(res.data))

        }
        else{
            alert("please enter some message")
        }
        setMessage("")
    }

    if(!localStorage.getItem('token')){
        return <Navigate to='/login' />
    }
    

 
    return (
        <div>
             <Header3 />
             { iprofile && <div>
            
            <div className="profile bg-light card " style={{"margin":"10px"}}>
                <center>
                        <img 
                            className="round-img"
                            src="https://cdn.pixabay.com/photo/2016/03/23/22/26/user-1275780_960_720.png"
                            height="250" width="450"
                            alt="pix"
                        />
                        <div>
                            <h2 style={{"color":"springgreen"}}>{iprofile.fullname}</h2>
                            <h3>{iprofile.email}</h3>
                            <h4>{iprofile.collegeId}</h4>
                            <h5><b>branch : </b>{iprofile.branch}</h5>
                            <p><b>Mobile : </b>{iprofile.mobile}</p>
                            {iprofile.pg ? <div><b>Post Graduation : </b>{iprofile.pg}<br /><br /></div> : null}
                            {iprofile.job ? <div><b>Job : </b>{iprofile.job}</div> : null}
                            {iprofile.currentcompany ? <div><b>current Company : </b>{iprofile.currentcompany}</div> : null}
                            {iprofile.currentjoblocation ? <div><b>Current Job Location : </b>{iprofile.currentjoblocation}</div> : null}
                        </div><br />
                        
                        {iprofile.github ? <div><b>Github : </b><a href={iprofile.github} target="_blank">{iprofile.github}</a></div> : null}
                        {iprofile.linkedin ? <div><b>Linkedin : </b><a href={iprofile.linkedin} target="_blank">{iprofile.linkedin}</a></div> : null}
                            
                          
                            <p>VJIT - Student</p>
                            <h4><u>Skills</u>:-</h4>

                            <ul>
                                {iprofile.skill.split(",").map(skills => {
                                    return <li className="text-primary" style={{ listStyleType: "none", marginLeft: "-30px" }}>{skills}</li>;
                                }
                                    )}

                            </ul>


                            <div className="card" style={{"width":"59%"}}><br />
                            <h1>Experience:-</h1>
                                <center>
                                    <div className="card" style={{"width":"85%"}}><br />
                                        {iprofile.experience ? <div>
                                            <ul>
                                                {iprofile.experience.split(",").map(skills => {
                                                    return <li className="text-primary" style={{ listStyleType: "none", marginLeft: "-30px",color:"black" }}>{skills}</li>;
                                                }
                                                    )}
                                            </ul>
                                            </div>
                                            :
                                            <h4>Experience Yet Not Added </h4>
                                        }
                                    </div>
                                    <br />
                                </center>
                            </div>
                            <br />
                            
                        
                            <div className="card" style={{"width":"59%"}}><br />
                            <h1>Projects:-</h1>
                                <center>
                                    <div className="card" style={{"width":"85%"}}><br />
                                        {iprofile.project ? <div>
                                            <ul>
                                                {iprofile.project.split(",").map(skills => {
                                                    return <li className="text-primary" style={{ listStyleType: "none", marginLeft: "-30px",color:"black" }}>{skills}</li>;
                                                }
                                                    )}
                                            </ul>
                                            </div>
                                            :
                                            <h4>Projects Yet Not Added</h4>
                                        }
                                    </div>
                                    <br />
                                </center>
                            </div>
                            <br />
                            
                        
                            <div className="card" style={{"width":"59%"}}><br />
                            <h1>Bio:-</h1>
                                <center>
                                    <div className="card" style={{"width":"85%"}}><br />
                                    {iprofile.bio ?
                                        <div>
                                            <p>{iprofile.bio}</p>
                                        </div>
                                        :
                                        <h4>Bio Yet Not Added</h4>
                                    }
                                        
                                    </div>
                                    <br />
                                </center>
                            </div>

                            <br />

                            {iprofile.quote ? 
                            <div className="card" style={{"width":"59%"}}><br />
                            <h1>Quote:-</h1>
                                <center>
                                    <div className="card" style={{"width":"85%"}}><br />
                                    
                                        <p>{iprofile.quote}</p>
                                       
                                        
                                    </div>
                                    <br />
                                </center>
                            </div>

                            :
                            null}

                            <br />

                            <center>
                                        <div className="  card" style={{"width":"30rem",textAlign:"center"}}><br />
                                            <h4>Enter Your Message:</h4>
                                            <form onSubmit={submitHandler}>
                                                <input size="50" type="text" onChange={e => setMessage(e.target.value)} placeholder="Message to this profile holder" /><br /><br />
                                                <input type="submit" className="btn btn-primary" value="send message" /><br /><br />
                                            </form>
                                        </div>
                                        <br />
                            </center>
                        
                </center>
                
            </div>
            

</div>}
        </div>
    )
}

export default Indprofile2
