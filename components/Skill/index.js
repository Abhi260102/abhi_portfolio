import React from 'react'
import Skkill from '../../public/skills.json'
const Skill = () => {
    return (
        <>
            <section className="skills" id="skills">
                <h2 className="heading"><i className="fas fa-laptop-code" /> Skills &amp; <span>Abilities</span></h2>
                <div className="container">
                    <div className="row">
                    {Skkill?.map((resp,i)=>{return(<div class="bar" key={i}>
                       <div class="info">
                                <img src={resp?.icon} alt="skill" height={40} width={40} style={{objectFit:'contain'}} />
                                <span>{resp?.name}</span>
                            </div>
                        </div>)})}

                    </div>
                </div>
            </section>
        </>
    )
}

export default Skill