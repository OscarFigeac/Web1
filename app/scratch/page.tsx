import React from 'react'
import Image from 'next/image'
import Logo from '@/public/code_club_logo.jpg'
import scratchIntro from '@/public/scratch.png'
import scratchMore from '@/public/more-scratch.webp'
import further from '@/public/further-scratch.webp'

const webPage = () => {
  return (
    <div className="container bg-blue-50 mx-auto px-10 rounded-xl border-4 border-dashed border-opacity-10 border-blue-800">
      
      <main>
        <article className="container clear-both bg-lime-400 mx-auto my-4 px-4 py-4 rounded-xl border-dashed border-4 border-opacity-20 border-green-900">
        
        <Image src={Logo} alt="CodeClubLogo" className="h-12 w-12 rounded-xl float-left opacity-0 md:opacity-100"/>


          <header className="container bg-green-200 mx-auto mt-4 p-4 rounded-xl w-4/5 border-2 border-opacity-50 shadow-lg border-green-900">
            <h1 className="text-xl font-bold text-green-800">Scratch</h1>
            <p className="m-4 text-lg">Begin your adventure in digital making, by learning to code animations, stories, and games in Scratch ..</p>
          </header><br />

          <div id="panels" className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-4 w-4/5 mx-auto">
          <section className="p-4  bg-orange-200 rounded-md mx-2 border-solid border-2 border-opacity-40 shadow-lg border-orange-800">
            <Image src={scratchIntro} alt="webImage" />
                       
              <h2 className="font-bold text-orange-800 text-xl pt-2">Introduction to Scratch sprites, scripts and loops</h2>              

              <p className="m-2">In this introduction to coding in Scratch for beginners, you will leam how to add code, costumes, and sounds to sprites as you make animations, a game , an app, and a book</p>

            </section>

            <section className="p-4 bg-blue-100 rounded-md mx-2 border-solid border-2 border-opacity-40 shadow-lg border-blue-800">
              <Image src={scratchMore} alt="webMore" />
                <h2 className="font-bold text-blue-800 text-xl pt-2">More Scratch broadcast,decisions and variables</h2>

                  <p className="m-2">More Scratch moves beyond the basics introduced in Introduction to Scratch. You will make apps, games,and samulations using messages broodcasting. if.then. and if. then ... else decisions and variables</p><br />

            </section>

            <section className="p-4 bg-blue-100 rounded-md mx-2 border-solid border-2 border-opacity-40 shadow-lg border-blue-800">
              <Image src={further} alt="webMore" />
                <h2 className="font-bold text-blue-800 text-xl pt-2">Further Scratch clones, my blocks, and Boolean Logic</h2>

                  <p className="m-2">Further Scratch moves beyond the skills introduced in Introductions to Scratch and Moce Scratch. You will make apps.games,computer- generated act, and simulatioos using Boelean Logic, functions, clones , and more</p><br />

            </section>

          </div>
        </article>
      </main>

      <footer className="align-bottom italic">
        Dublin Road, Dundalk
      </footer>
    </div>
  )
}

export default webPage