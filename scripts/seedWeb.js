const { connection } = require('next/server');
const {Client} = require ('pg');
require('dotenv').config();

const db = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnathorised: false
    }
});

async function seed() {
    try{
        await db.connect();

        await db.query(`
            INSERT INTO web_page (
                title, description, intro_title, intro_description, intro_image_url,
                more_title, more_description, more_image_url, background_color
            ) VALUES (
                $1, $2, $3, $4, $5, $6, $7, $8, $9
            );
        `, [
            'Web Design',
            'Learn about Python, one of the world\'s most popular programming languages to create digital art, interactive maps, and models.',
            'Introduction to Web',
            'In this introduction to Web Design for beginners, you will learn how to add structure and style webpages with images, lists, fonts, quotes, links and animation.',
            '/web-intro.webp',
            'More Web',
            'More Web moves beyond the basics introduced in Introdction to Web. Modern Web Designhas turned websites from static and boring walls of information into ways of providing fun and engaging experiences to a user. Take users on a journey and transport them to somewhere completely new!',
            '/more-web.webp',
            'bg-blue-50'
        ]);

    console.log(
        'Database seeded successfully'
    )
    }catch (error){
        console.error('Error seeding the database', error);
    }finally{
        await db.end();
    }
}

seed();