import React from 'react';
import Image from 'next/image';
import { fetchWebPage } from '../lib/data'; 

export default async function WebPage() {
    const webData = await fetchWebPage();

    if (!webData) {
        return <div>Error loading data.</div>;
    }

    return (
        <div className={`container ${webData.background_color} mx-auto px-10 rounded-xl border-4 border-dashed border-opacity-10 border-blue-800`}>
            <div className="bg-gradient-to-r from-blue-200 to-blue-100 p-8 rounded-t-xl text-center">
                <h1 className="text-3xl font-bold text-blue-500">{webData.title}</h1>
                <p className="mt-2 text-lg text-gray-700">{webData.description}</p>
            </div>

            <main className="mt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8"> 
                    <section className="bg-white rounded-xl shadow-lg p-6">
                        <div className="relative">
                            <Image src={webData.intro_image_url} alt="Intro Image" width={500} height={300} className="rounded-t-xl" />
                        </div>
                        <h2 className="text-xl font-semibold mt-4 text-gray-800">{webData.intro_title}</h2>
                        <p className="mt-2 text-gray-700">{webData.intro_description}</p>
                    </section>

                    <section className="bg-white rounded-xl shadow-lg p-6">
                        <div className="relative">
                            <Image src={webData.more_image_url} alt="More Image" width={500} height={300} className="rounded-t-xl" />
                        </div>
                        <h2 className="text-xl font-semibold mt-4 text-gray-800">{webData.more_title}</h2>
                        <p className="mt-2 text-gray-700">{webData.more_description}</p>
                    </section>
                </div>
            </main>
            <br />
        </div>
    );
}