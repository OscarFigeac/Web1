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
            INSERT INTO technologies (title, description, image_url, link, background_color, border_color, text_color) VALUES
            ('Scratch', 'Create animations, apps, and interactive stories.', '/scratch.png', '/technologies/1', 'bg-orange-200', 'border-orange-800', 'text-orange-800'),
            ('Python', 'Make digital art, games, and more.', '/python.png', '/technologies/2', 'bg-blue-100', 'border-blue-800', 'text-blue-800'),
            ('Web Design', 'Build websites and apps.', '/web.png', '/technologies/3', 'bg-blue-100', 'border-blue-800', 'text-blue-800');

            INSERT INTO technology_details (technology_id, content, additional_image_url) VALUES
            (1, 'Scratch is a block-based visual programming language and online community.', '/scratch_details.png'),
            (2, 'Python is a high-level, interpreted programming language.', '/python_details.png'),
            (3, 'Web design encompasses many different skills and disciplines.', '/web_details.png');
        `);

        console.log(
            'Database seeded successfully.'
        );
    }catch (error){
        console.error('Error seeding the database', error);
    }finally{
        await db.end();
    }

}  

seed();