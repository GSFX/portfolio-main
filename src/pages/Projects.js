import React from 'react';
import './Projects.scss';

export default function Projects() {
  return (
    <>
      <div class="Projects-Title">Projects</div>
    <div class="Projects-Container">
    <div class="Projects-Grid-System">
      
      <div class="Projects-Card-Block">
        <div class="ProjCard--image"><img src="//source.unsplash.com/500x301" alt='Project-Img'/></div>
        <div class="ProjCard--content">
          <h3 className='Projects-Card-Title'>AirBqb</h3>
          <p className='Projects-Card-Description'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab incidunt aliquam cumque accusantium.</p>
        </div>
      </div>
      <div class="Projects-Card-Block">
        <div class="ProjCard--image"><img src="//source.unsplash.com/500x302" alt='Project-Img'/></div>
        <div class="ProjCard--content">
          <h3 className='Projects-Card-Title'>Rent Car</h3>
          <p className='Projects-Card-Description'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab incidunt aliquam cumque accusantium.</p>
        </div>
      </div>
      <div class="Projects-Card-Block">
        <div class="ProjCard--image"><img src="//source.unsplash.com/500x303" alt='Project-Img'/></div>
        <div class="ProjCard--content">
          <h3 className='Projects-Card-Title'>Green Rust</h3>
          <p className='Projects-Card-Description'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab incidunt aliquam cumque accusantium.</p>
        </div>
      </div>
      <div class="Projects-Card-Block">
        <div class="ProjCard--image"><img src="//source.unsplash.com/500x304" alt='Project-Img'/></div>
        <div class="ProjCard--content">
          <h3 className='Projects-Card-Title'>Card 4 Title</h3>
          <p className='Projects-Card-Description'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab incidunt aliquam cumque accusantium.</p>
        </div>
      </div>
      <div class="Projects-Card-Block">
        <div class="ProjCard--image"><img src="//source.unsplash.com/500x305" alt='Project-Img'/></div>
        <div class="ProjCard--content">
          <h3 className='Projects-Card-Title'>Card 5 Title</h3>
          <p className='Projects-Card-Description'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab incidunt aliquam cumque accusantium.</p>
        </div>
      </div>
      <div class="Projects-Card-Block">
        <div class="ProjCard--image"><img src="//source.unsplash.com/500x306" alt='Project-Img'/></div>
        <div class="ProjCard--content">
          <h3 className='Projects-Card-Title'>Card 6 Title</h3>
          <p className='Projects-Card-Description'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab incidunt aliquam cumque accusantium.</p>
        </div>
      </div>
    </div>
  </div>
  </>
  );
}
