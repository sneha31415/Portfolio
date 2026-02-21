import React from 'react'
import Card from '../components/Card'

const About = () => {
  return (
    <section className="c-space section-spacing"> 
        <h2 className='text-heading'>About me</h2>
        <div className='grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12'>
            {/* Grid 1 */}
            <div className='flex items-end grid-default-color grid-1'>
                <img src="assets/coding-pov.png" 
                alt="" 
                className='absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-[50px] md:inset-y-10 lg:scale-[2.5]'
                />
                <div className='z-10'>
                    <p className='headtext'>Hi, I'm Sneha Singh!</p>
                    <p className='subtext'>
                        I'm a third year IT student studying at VJTI, Mumbai.
                        I love problem solving and building scalable solutions. 
                    </p>
                </div>
                <div className='absolute inset-x-0 pointer-events-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo'></div>
            </div>
            {/* Grid 2 */}
            <div className='grid-default-color grid-2'>
                <div className='flex items-center justify-center w-full h-full'>
                    <p className='flex items-end text-5xl text-gray-500'>
                        CODE IS CRAFT
                    </p>
                    <Card 
                    style = {{ rotate : "30deg", top : "30%", left : "20%"}}
                    text = "JAVA"
                    />
                    <Card
                    style = {{ rotate : "19deg", top : "10%", left : "50%"}}
                    text = "PYTHON"
                    />
                    <Card 
                    style = {{ rotate : "7deg", top : "10%", left : "2%"}}
                    text = "C++"/>
                    <Card 
                    style = {{ rotate : "75deg", top : "30%", left : "70%"}}
                    text = "BACKEND"
                    />
                    <Card 
                    style = {{ rotate : "75deg", top : "60%", left : "50%"}}
                    text = "REACT"
                    />
                    <Card 
                    style = {{ rotate : "0deg", top : "70%", left : "20%"}}
                    text = "SYSTEM DESIGN"/>
                    <Card 
                    style = {{ rotate : "30deg", top : "70%", left : "70%"}}
                    image="assets/logos/csharp-pink.png"/>
                    <Card 
                    style = {{ rotate : "-30deg", top : "50%", left : "20%"}}
                    image="assets/logos/dotnet-pink.png"/>
                    <Card 
                    style = {{ rotate : "-30deg", top : "30%", left : "0%"}}
                    image="assets/logos/blazor-pink.png"/>
                    

                </div>
            </div>
            {/* Grid 3 */}
            <div className='grid-black-color grid-3'></div>
            {/* Grid 4  */}
            <div className='grid-special-color grid-4'></div>
            {/* Grid 5  */}
            <div className='grid-default-color grid-5'></div>
        </div>
    </section>
  )
}

export default About