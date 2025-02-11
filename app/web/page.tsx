import React from 'react'
import Image from 'next/image'
import Logo from '@/public/code_club_logo.jpg'
import webIntro from '@/public/web-intro.webp'
import webMore from '@/public/more-web.webp'

const webPage = () => {
  return (
    <div className="container bg-blue-50 mx-auto px-10 rounded-xl border-4 border-dashed border-opacity-10 border-blue-800">
      
      <main>
        <article className="container clear-both bg-lime-400 mx-auto my-4 px-4 py-4 rounded-xl border-dashed border-4 border-opacity-20 border-green-900">
        
        <Image src={Logo} alt="CodeClubLogo" className="h-12 w-12 rounded-xl float-left opacity-0 md:opacity-100"/>


          <header className="container bg-green-200 mx-auto mt-4 p-4 rounded-xl w-4/5 border-2 border-opacity-50 shadow-lg border-green-900">
            <h1 className="text-xl font-bold text-green-800">Web Design</h1>
            <p className="m-4 text-lg">Learn about Python, one of the world's most popular programming languages to create digital art, interactive maps, and models.</p>
          </header><br />

          <div id="panels" className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-4 w-4/5 mx-auto">
          <section className="p-4  bg-orange-200 rounded-md mx-2 border-solid border-2 border-opacity-40 shadow-lg border-orange-800">
            <Image src={webIntro} alt="webImage" />
                       
              <h2 className="font-bold text-orange-800 text-xl pt-2">Introduction to Web</h2>              

              <h3 className="italic text-lg text-orange-700 m-1">HTML, CSS & Animations</h3><br />
              <p className="m-2">In this introduction to Web Design for beginners, you will learn how to add structure and style webpages with images, lists, fonts, quotes, links and animation.</p>

            </section>

            <section className="p-4 bg-blue-100 rounded-md mx-2 border-solid border-2 border-opacity-40 shadow-lg border-blue-800">
              <Image src={webMore} alt="webMore" />
                <h2 className="font-bold text-blue-800 text-xl pt-2">More Web</h2>
                <h3 className="italic text-lg text-blue-700 m-1">HTML, CSS & JavaScript</h3>

                  <p className="m-2">More Web moves beyond the basics introduced in Introdction to Web. Modern Web Designhas turned websites from static and boring walls of information into ways of providing fun and engaging experiences to a user. Take users on a journey and transport them to somewhere completely new!</p><br />

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