import React from 'react';
import Image from 'next/image';
import { fetchPythonPage } from '../lib/data'; // Adjust the import path if needed

export default async function PythonPage() {
    const pythonData = await fetchPythonPage();

    if (!pythonData) {
        return <div>Error loading data.</div>;
    }

    return (
        <div className={`container ${pythonData.background_color} mx-auto px-10 rounded-xl border-4 border-dashed border-opacity-10 border-blue-800`}>
            <div className="bg-gradient-to-r from-blue-200 to-blue-100 p-8 rounded-t-xl text-center">
                <h1 className="text-3xl font-bold text-blue-500">{pythonData.title}</h1>
                <p className="mt-2 text-lg text-gray-700">{pythonData.description}</p>
            </div>

            <main className="mt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8"> 
                    <section className="bg-white rounded-xl shadow-lg p-6">
                        <div className="relative">
                            <Image src={pythonData.intro_image_url} alt="Intro Image" width={500} height={300} className="rounded-t-xl" />
                        </div>
                        <h2 className="text-xl font-semibold mt-4 text-gray-800">{pythonData.intro_title}</h2>
                        <p className="mt-2 text-gray-700">{pythonData.intro_description}</p>
                    </section>

                    <section className="bg-white rounded-xl shadow-lg p-6">
                        <div className="relative">
                            <Image src={pythonData.more_image_url} alt="More Image" width={500} height={300} className="rounded-t-xl" />
                        </div>
                        <h2 className="text-xl font-semibold mt-4 text-gray-800">{pythonData.more_title}</h2>
                        <p className="mt-2 text-gray-700">{pythonData.more_description}</p>
                    </section>
                </div>
            </main>
            <br />
        </div>
    );
}