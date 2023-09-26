import React from 'react';
import { useState } from 'react';
import visualizer from '../assets/visualizer.png'
import pending from '../assets/pending.png';
import shortly from '../assets/shortly.png'
import wordlens from '../assets/wordlens.png'
import grid from '../assets/grid.png'

const projectsArray = [
    {
    imageUrl: visualizer,
    liveUrl: 'https://iridescent-travesseiro-be0ec7.netlify.app/',
    repoUrl: 'https://github.com/doubara/sorting-algorithm-visualizer',
    },
    {
        imageUrl: shortly,
        liveUrl: 'https://sparkling-crisp-ad3cbf.netlify.app/',
        repoUrl: 'https://github.com/doubara/url-shortener-app',
    },
    {
        imageUrl: wordlens,
        liveUrl: 'https://wordlens-pi.vercel.app/',
        repoUrl: 'https://github.com/doubara/wordlens',
    },
    {
        imageUrl: grid,
        liveUrl: 'https://gird-selection.vercel.app/',
        repoUrl: 'https://github.com/doubara/gird-selection',
    },
]

const Projects = (props) =>{
    return <section id='projects' className="text-black px-6">
        <h2 className='text-2xl font-semibold my-3'>Projects</h2>
        <div className="customGrid gap-4">
            {projectsArray.map((value, index)=>{
                return <div key={(index+1)*Math.random()} className="">
                    <div className='h-h270 border'>
                        <img className='object-cover w-full h-full' src={value.imageUrl} alt="" />
                    </div>
                    <div className='flex justify-between'>
                        <a className='py-2 px-3 my-3 rounded-md bg-white color-black border border-black border-opacity-5' href={value.liveUrl}>Live Site</a>
                        <a className='py-2 px-3 my-3 rounded-md bg-white color-black border border-black border-opacity-5' href={value.repoUrl}>Repo</a>
                    </div>

                </div>
            })}
        </div>
    </section>
};

export default Projects;