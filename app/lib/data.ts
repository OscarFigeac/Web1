import postgres from 'postgres';

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

// export async function fetchTechnologies() {
//   const { connection } = require('next/server');
//   const {Client} = require ('pg');
//   require('dotenv').config();
//   const db = new Client({
//     connectionString: process.env.DATABASE_URL,
//     ssl: {
//         rejectUnathorised: false
//     }
//   });   
//   try{
//     await db.connect();
//         const result = await db.query('SELECT * FROM scratch_page LIMIT 1;');
//         await db.end();

//         if (result.rows.length > 0){
//           return result.rows[0];
//         }else{
//           return null;
//         }
//   }catch (error) {
//     console.error('Database Error -> ', error);
//     return null;
//   }
//   // try{
//   //   const tech = await sql`SELECT * FROM technologies`;
//   //   return tech;
//   // } catch (error){
//   //   console.error('Database Error -> ', error)
//   //   throw new Error('Failed to connect to the technologies table. Couldnt fecth data.')
// //}  
// }

// export async function fetchTechnologyById(id: number) {
//   const { connection } = require('next/server');
//   const {Client} = require ('pg');
//   require('dotenv').config();
//   const db = new Client({
//     connectionString: process.env.DATABASE_URL,
//     ssl: {
//         rejectUnathorised: false
//     }
//   });   
//   try{
//     await db.connect();
//         const result = await db.query('SELECT * FROM technologies WHERE id = ${id};');
//         await db.end();

//         if (result.rows.length > 0){
//           return result.rows[0];
//         }else{
//           return null;
//         }
//   }catch (error) {
//     console.error('Database Error -> ', error);
//     return null;
//   }
//   // try{
//   //   const tech = await sql`SELECT * FROM technologies WHERE id = ${id}`;
//   //   return tech[0];
//   // } catch (error){
//   //   console.error('Database Error -> ', error)
//   //   throw new Error('Failed to connect to the technologies table. Couldnt fecth data.')
//   // }
// }

// export async function fetchTechnologyDetailsById(id: number) {
//   const { connection } = require('next/server');
//   const {Client} = require ('pg');
//   require('dotenv').config();
//   const db = new Client({
//     connectionString: process.env.DATABASE_URL,
//     ssl: {
//         rejectUnathorised: false
//     }
//   });   
//   try{
//     await db.connect();
//         const result = await db.query('SELECT * FROM technologies WHERE id = ${id};');
//         await db.end();

//         if (result.rows.length > 0){
//           return result.rows[0];
//         }else{
//           return null;
//         }
//   }catch (error) {
//     console.error('Database Error -> ', error);
//     return null;
//   }
//   // try{
//   //   const tech = await sql`SELECT * FROM technologies_details WHERE technology_id = ${id}`;
//   //   return tech;
//   // } catch (error){
//   //   console.error('Database Error -> ', error)
//   //   throw new Error('Failed to connect to the technologies table. Couldnt fecth data.')
//   // }
// }
interface Technology {
  id: number;
  title: string;
  description: string;
  link: string;
  image_url: string;
  background_color: string;
  // Add any other columns from your 'technologies' table
}

export async function fetchTechnologies(): Promise<Technology[]> {
  try {
    const technologies = await sql<Technology[]>`SELECT id, title, description, link, image_url, background_color FROM technologies`;
    return technologies;
  } catch (error) {
    console.error('Database Error -> ', error);
    throw new Error('Failed to fetch technologies from the database.');
  }
}

export async function fetchTechnologyById(id: number): Promise<Technology | null> {
  try {
    const technology = await sql<Technology[]>`SELECT id, title, description, link, image_url, background_color FROM technologies WHERE id = ${id}`;
    return technology.length > 0 ? technology[0] : null;
  } catch (error) {
    console.error('Database Error -> ', error);
    return null;
  }
}

export async function fetchTechnologyDetailsById(id: number): Promise<any | null> {
  // Assuming 'technologies' table has the details for now, adjust if needed
  try {
    const technologyDetails = await sql<any[]>`SELECT * FROM technologies WHERE id = ${id}`;
    return technologyDetails.length > 0 ? technologyDetails[0] : null;
  } catch (error) {
    console.error('Database Error -> ', error);
    return null;
  }
}

export async function fetchScratchPage() {
  const { connection } = require('next/server');
  const {Client} = require ('pg');
  require('dotenv').config();
  const db = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnathorised: false
    }
  });   
  try{
    await db.connect();
        const result = await db.query('SELECT * FROM scratch_page LIMIT 1;');
        await db.end();

        if (result.rows.length > 0){
          return result.rows[0];
        }else{
          return null;
        }
  }catch (error) {
    console.error('Database Error -> ', error);
    return null;
  }
}

export async function fetchWebPage() {
  const { connection } = require('next/server');
  const {Client} = require ('pg');
  require('dotenv').config();
  const db = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnathorised: false
    }
  });   
  try{
    await db.connect();
        const result = await db.query('SELECT * FROM web_page LIMIT 1;');
        await db.end();

        if (result.rows.length > 0){
          return result.rows[0];
        }else{
          return null;
        }
  }catch (error) {
    console.error('Database Error -> ', error);
    return null;
  }
}

export async function fetchPythonPage() {
  const { connection } = require('next/server');
  const {Client} = require ('pg');
  require('dotenv').config();
  const db = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnathorised: false
    }
  });   
  try{
    await db.connect();
        const result = await db.query('SELECT * FROM python_page LIMIT 1;');
        await db.end();

        if (result.rows.length > 0){
          return result.rows[0];
        }else{
          return null;
        }
  }catch (error) {
    console.error('Database Error -> ', error);
    return null;
  }
}

//added a comment to push onto git


// import { sql } from '@vercel/postgres';
// import {
//   CustomerField,
//   CustomersTableType,
//   InvoiceForm,
//   InvoicesTable,
//   LatestInvoiceRaw,
//   Revenue,
// } from './definitions';
// import { formatCurrency } from './utils';

// export async function fetchRevenue() {
//   try {
//     // Artificially delay a response for demo purposes.
//     // Don't do this in production :)

//     // console.log('Fetching revenue data...');
//     // await new Promise((resolve) => setTimeout(resolve, 3000));

//     const data = await sql<Revenue>`SELECT * FROM revenue`;

//     // console.log('Data fetch completed after 3 seconds.');

//     return data.rows;
//   } catch (error) {
//     console.error('Database Error:', error);
//     throw new Error('Failed to fetch revenue data.');
//   }
// }

// export async function fetchLatestInvoices() {
//   try {
//     const data = await sql<LatestInvoiceRaw>`
//       SELECT invoices.amount, customers.name, customers.image_url, customers.email, invoices.id
//       FROM invoices
//       JOIN customers ON invoices.customer_id = customers.id
//       ORDER BY invoices.date DESC
//       LIMIT 5`;

//     const latestInvoices = data.rows.map((invoice) => ({
//       ...invoice,
//       amount: formatCurrency(invoice.amount),
//     }));
//     return latestInvoices;
//   } catch (error) {
//     console.error('Database Error:', error);
//     throw new Error('Failed to fetch the latest invoices.');
//   }
// }

// export async function fetchCardData() {
//   try {
//     // You can probably combine these into a single SQL query
//     // However, we are intentionally splitting them to demonstrate
//     // how to initialize multiple queries in parallel with JS.
//     const invoiceCountPromise = sql`SELECT COUNT(*) FROM invoices`;
//     const customerCountPromise = sql`SELECT COUNT(*) FROM customers`;
//     const invoiceStatusPromise = sql`SELECT
//          SUM(CASE WHEN status = 'paid' THEN amount ELSE 0 END) AS "paid",
//          SUM(CASE WHEN status = 'pending' THEN amount ELSE 0 END) AS "pending"
//          FROM invoices`;

//     const data = await Promise.all([
//       invoiceCountPromise,
//       customerCountPromise,
//       invoiceStatusPromise,
//     ]);

//     const numberOfInvoices = Number(data[0].rows[0].count ?? '0');
//     const numberOfCustomers = Number(data[1].rows[0].count ?? '0');
//     const totalPaidInvoices = formatCurrency(data[2].rows[0].paid ?? '0');
//     const totalPendingInvoices = formatCurrency(data[2].rows[0].pending ?? '0');

//     return {
//       numberOfCustomers,
//       numberOfInvoices,
//       totalPaidInvoices,
//       totalPendingInvoices,
//     };
//   } catch (error) {
//     console.error('Database Error:', error);
//     throw new Error('Failed to fetch card data.');
//   }
// }

// const ITEMS_PER_PAGE = 6;
// export async function fetchFilteredInvoices(
//   query: string,
//   currentPage: number,
// ) {
//   const offset = (currentPage - 1) * ITEMS_PER_PAGE;

//   try {
//     const invoices = await sql<InvoicesTable>`
//       SELECT
//         invoices.id,
//         invoices.amount,
//         invoices.date,
//         invoices.status,
//         customers.name,
//         customers.email,
//         customers.image_url
//       FROM invoices
//       JOIN customers ON invoices.customer_id = customers.id
//       WHERE
//         customers.name ILIKE ${`%${query}%`} OR
//         customers.email ILIKE ${`%${query}%`} OR
//         invoices.amount::text ILIKE ${`%${query}%`} OR
//         invoices.date::text ILIKE ${`%${query}%`} OR
//         invoices.status ILIKE ${`%${query}%`}
//       ORDER BY invoices.date DESC
//       LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}
//     `;

//     return invoices.rows;
//   } catch (error) {
//     console.error('Database Error:', error);
//     throw new Error('Failed to fetch invoices.');
//   }
// }

// export async function fetchInvoicesPages(query: string) {
//   try {
//     const count = await sql`SELECT COUNT(*)
//     FROM invoices
//     JOIN customers ON invoices.customer_id = customers.id
//     WHERE
//       customers.name ILIKE ${`%${query}%`} OR
//       customers.email ILIKE ${`%${query}%`} OR
//       invoices.amount::text ILIKE ${`%${query}%`} OR
//       invoices.date::text ILIKE ${`%${query}%`} OR
//       invoices.status ILIKE ${`%${query}%`}
//   `;

//     const totalPages = Math.ceil(Number(count.rows[0].count) / ITEMS_PER_PAGE);
//     return totalPages;
//   } catch (error) {
//     console.error('Database Error:', error);
//     throw new Error('Failed to fetch total number of invoices.');
//   }
// }

// export async function fetchInvoiceById(id: string) {
//   try {
//     const data = await sql<InvoiceForm>`
//       SELECT
//         invoices.id,
//         invoices.customer_id,
//         invoices.amount,
//         invoices.status
//       FROM invoices
//       WHERE invoices.id = ${id};
//     `;

//     const invoice = data.rows.map((invoice) => ({
//       ...invoice,
//       // Convert amount from cents to dollars
//       amount: invoice.amount / 100,
//     }));

//     return invoice[0];
//   } catch (error) {
//     console.error('Database Error:', error);
//     throw new Error('Failed to fetch invoice.');
//   }
// }

// export async function fetchCustomers() {
//   try {
//     const data = await sql<CustomerField>`
//       SELECT
//         id,
//         name
//       FROM customers
//       ORDER BY name ASC
//     `;

//     const customers = data.rows;
//     return customers;
//   } catch (err) {
//     console.error('Database Error:', err);
//     throw new Error('Failed to fetch all customers.');
//   }
// }

// export async function fetchFilteredCustomers(query: string) {
//   try {
//     const data = await sql<CustomersTableType>`
// 		SELECT
// 		  customers.id,
// 		  customers.name,
// 		  customers.email,
// 		  customers.image_url,
// 		  COUNT(invoices.id) AS total_invoices,
// 		  SUM(CASE WHEN invoices.status = 'pending' THEN invoices.amount ELSE 0 END) AS total_pending,
// 		  SUM(CASE WHEN invoices.status = 'paid' THEN invoices.amount ELSE 0 END) AS total_paid
// 		FROM customers
// 		LEFT JOIN invoices ON customers.id = invoices.customer_id
// 		WHERE
// 		  customers.name ILIKE ${`%${query}%`} OR
//         customers.email ILIKE ${`%${query}%`}
// 		GROUP BY customers.id, customers.name, customers.email, customers.image_url
// 		ORDER BY customers.name ASC
// 	  `;

//     const customers = data.rows.map((customer) => ({
//       ...customer,
//       total_pending: formatCurrency(customer.total_pending),
//       total_paid: formatCurrency(customer.total_paid),
//     }));

//     return customers;
//   } catch (err) {
//     console.error('Database Error:', err);
//     throw new Error('Failed to fetch customer table.');
//   }
// }
  //}

