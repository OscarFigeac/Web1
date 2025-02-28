import React from 'react'
import Image from 'next/image'
import Logo from '@/public/code_club_logo.jpg'
import scratch from '@/public/scratch.png'
import python from '@/public/python.png'
import web from '@/public/web.png'
// import RevenueChart from '@/app/ui/dashboard/revenue-chart';
// import LatestInvoices from '@/app/ui/dashboard/latest-invoices';

const webPage = () => {
  return (
    <div className="container bg-blue-50 mx-auto px-10 rounded-xl border-4 border-dashed border-opacity-10 border-blue-800">
      
      <main>
        <article className="container clear-both bg-lime-400 mx-auto my-4 px-4 py-4 rounded-xl border-dashed border-4 border-opacity-20 border-green-900">
        
        <Image src={Logo} alt="CodeClubLogo" className="h-12 w-12 rounded-xl float-left opacity-0 md:opacity-100"/>


          <header className="container bg-green-200 mx-auto mt-4 p-4 rounded-xl w-4/5 border-2 border-opacity-50 shadow-lg border-green-900">
            <h1 className="text-xl font-bold text-green-800">Learn To Code With CodeClub</h1>
            <p className="m-4 text-lg">Our projects have step-by-step instructions to teach you how to create games, animations, and much more. Choose from hundreds of options, in up to 30 languages.</p>
          </header><br />

          <div id="panels" className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-4 w-4/5 mx-auto">
          <section className="p-4  bg-orange-200 rounded-md mx-2 border-solid border-2 border-opacity-40 shadow-lg border-orange-800">
            <Image src={scratch} alt="webImage" />
                       
              <h2 className="font-bold text-orange-800 text-xl pt-2">Scratch</h2>              
              <p className="m-2">Create animations, apps, and interactive stories by adding code, costumes, and sounds</p>

            </section>

            <section className="p-4 bg-blue-100 rounded-md mx-2 border-solid border-2 border-opacity-40 shadow-lg border-blue-800">
              <Image src={python} alt="webMore" />
                <h2 className="font-bold text-blue-800 text-xl pt-2">Python</h2>
                  <p className="m-2">Make digital art, games, and more while exploring one of the world's most popular programming languages.</p><br />

            </section>

            <section className="p-4 bg-blue-100 rounded-md mx-2 border-solid border-2 border-opacity-40 shadow-lg border-blue-800">
              <Image src={web} alt="webMore" />
                <h2 className="font-bold text-blue-800 text-xl pt-2">Web design</h2>
                  <p className="m-2">Build websites and apps by learning HTML, CSS, and JavaScript.</p><br />

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