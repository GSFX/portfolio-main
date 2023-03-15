import React from 'react'
import './About.css'
export default function About() {

  const CustomHr = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: 1,
            marginTop: 20, 
            marginBottom: 10 
        }}
      />);

  return (
    <>
        <div className="About-MainBlock">
            <div className='About-Container'>
                <div className='About-GeneralInfo'>
                    <div>
                        <h2 className='About-Objective-Title'>
                        <CustomHr color="gray" />
                            Objective:
                        </h2>
                        <p className='About-Objective-Text'>
                        I'm interested in working in a team and constantly strive to develop and keep up with industry trends. I'm looking for a company where I can grow as a professional and specialist, using my skills and knowledge to assist the company in creating high-quality and functional web applications. I'm ready to participate in teamwork and exchange ideas and experience with colleagues.
                        </p>
                    </div>
                    <div>
                    <CustomHr color="gray" />
                        <ul className='About-persInfo'>
                            <li><p><span>Based:</span>Russia</p></li>
                            <li><p><span>Real Name:</span>Arseniy</p></li>
                            <li><p><span>Email:</span>beaver.dev01@gmail.com</p></li>
                            <li><p><span>Study:</span>Self-study</p></li>
                            <li><p><span>Relative exp:</span>More then six month</p></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
      </>
  )
}
