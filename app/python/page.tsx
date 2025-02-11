import React from 'react'
import Image from 'next/image'
import Logo from '@/public/code_club_logo.jpg'
import pythonIntro from '@/public/python.png'
import pythonMore from '@/public/python-intro.webp'

const webPage = () => {
  return (
    <div className="container bg-blue-50 mx-auto px-10 rounded-xl border-4 border-dashed border-opacity-10 border-blue-800">
      
      <main>
        <article className="container clear-both bg-lime-400 mx-auto my-4 px-4 py-4 rounded-xl border-dashed border-4 border-opacity-20 border-green-900">
        
        <Image src={Logo} alt="CodeClubLogo" className="h-12 w-12 rounded-xl float-left opacity-0 md:opacity-100"/>


          <header className="container bg-green-200 mx-auto mt-4 p-4 rounded-xl w-4/5 border-2 border-opacity-50 shadow-lg border-green-900">
            <h1 className="text-xl font-bold text-green-800">Python</h1>
            <p className="m-4 text-lg">Learn about Python, one of the world's most popular programming languages to create digital art, interactive maps, and models.</p>
          </header><br />

          <div id="panels" className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-4 w-4/5 mx-auto">
          <section className="p-4  bg-orange-200 rounded-md mx-2 border-solid border-2 border-opacity-40 shadow-lg border-orange-800">
            <Image src={pythonIntro} alt="webImage" />
                       
              <h2 className="font-bold text-orange-800 text-xl pt-2">Introduction to Python</h2>              
              <p className="m-2">variables, functions and loops</p>

            </section>

            <section className="p-4 bg-blue-100 rounded-md mx-2 border-solid border-2 border-opacity-40 shadow-lg border-blue-800">
              <Image src={pythonMore} alt="webMore" />
                <h2 className="font-bold text-blue-800 text-xl pt-2">More Python lists,, dictionaries, and data</h2>

                  <p className="m-2">More Python moves beyond the basics introduced in Introduction to Python. You will learn how to use lists, dictionaries, and files to create charts, models and artwork</p><br />

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