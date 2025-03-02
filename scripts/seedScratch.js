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
        INSERT INTO scratch_page (
            title, description, intro_title, intro_description, intro_image_url,
            more_title, more_description, more_image_url, further_title,
            further_description, further_image_url, background_color
        ) VALUES (
            'Scratch', 
            'Begin your adventure in digital making, by learning to code animations, stories, and games in Scratch ..', 
            'Introduction to Scratch sprites, scripts and loops', 
            'In this introduction to coding in Scratch for beginners, you will leam how to add code, costumes, and sounds to sprites as you make animations, a game , an app, and a book',
            '/scratch.png',
            'More Scratch broadcast,decisions and variables', 
            'More Scratch moves beyond the basics introduced in Introduction to Scratch. You will make apps, games,and samulations using messages broodcasting. if.then. and if. then ... else decisions and variables', 
            '/more-scratch.webp', 
            'Further Scratch clones, my blocks, and Boolean Logic', 
            'Further Scratch moves beyond the skills introduced in Introductions to Scratch and Moce Scratch. You will make apps.games,computer- generated act, and simulatioos using Boelean Logic, functions, clones , and more',
            '/further-scratch.webp', 
            'bg-orange-200' 
        );
    `);

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