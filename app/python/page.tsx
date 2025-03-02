import React from 'react';
import Image from 'next/image';
import { fetchScratchPage } from '../lib/data';

export default async function ScratchPage() {
    const scratchData = await fetchScratchPage();

    if (!scratchData) {
        return <div>Error loading data.</div>;
    }

    return (
        <div className={`container ${scratchData.background_color} mx-auto px-10 rounded-xl border-4 border-dashed border-opacity-10 border-blue-800`}>
            <div className="bg-gradient-to-r from-blue-200 to-blue-100 p-8 rounded-t-xl text-center">
                <h1 className="text-3xl font-bold text-orange-500">{scratchData.title}</h1>
                <p className="mt-2 text-lg text-gray-700">{scratchData.description}</p>
            </div>

            <main className="mt-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <section className="bg-white rounded-xl shadow-lg p-6">
                        <div className="relative">
                            <Image src={scratchData.intro_image_url} alt="Intro Image" width={500} height={300} className="rounded-t-xl" />
                        </div>
                        <h2 className="text-xl font-semibold mt-4 text-gray-800">{scratchData.intro_title}</h2>
                        <p className="mt-2 text-gray-700">{scratchData.intro_description}</p>
                    </section>

                    <section className="bg-white rounded-xl shadow-lg p-6">
                        <div className="relative">
                            <Image src={scratchData.more_image_url} alt="More Image" width={500} height={300} className="rounded-t-xl" />
                        </div>
                        <h2 className="text-xl font-semibold mt-4 text-gray-800">{scratchData.more_title}</h2>
                        <p className="mt-2 text-gray-700">{scratchData.more_description}</p>
                    </section>

                    <section className="bg-white rounded-xl shadow-lg p-6">
                        <div className="relative">
                            <Image src={scratchData.further_image_url} alt="Further Image" width={500} height={300} className="rounded-t-xl" />
                        </div>
                        <h2 className="text-xl font-semibold mt-4 text-gray-800">{scratchData.further_title}</h2>
                        <p className="mt-2 text-gray-700">{scratchData.further_description}</p>
                    </section>
                </div>
            </main>
            <br/>
        </div>
    );
}