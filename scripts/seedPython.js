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
        INSERT INTO python_page (
                title, description, intro_title, intro_description, intro_image_url,
                more_title, more_description, more_image_url, background_color
            ) VALUES (
                $1, $2, $3, $4, $5, $6, $7, $8, $9
            );
        `, [
            'Python',
            'Learn about Python, one of the world\'s most popular programming languages to create digital art, interactive maps, and models.',
            'Introduction to Python',
            'variables, functions and loops',
            '/python.png',
            'More Python lists, dictionaries, and data',
            'More Python moves beyond the basics introduced in Introduction to Python. You will learn how to use lists, dictionaries, and files to create charts, models and artwork',
            '/python-intro.webp',
            'bg-blue-200'
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