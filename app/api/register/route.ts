import { NextResponse } from 'next/server';
import { sql } from '@vercel/postgres';

export async function POST(request: Request) {
  try {
    console.log('Starting database connection test...');
    console.log('POSTGRES_URL:', process.env.POSTGRES_URL);

    // 1. Test basic connection
    await sql`SELECT 1`;
    console.log('Basic connection test successful.');

    // 2. Check table existence and write
    try {
      await sql`
        INSERT INTO users (username, email, password, role, created_at)
        VALUES ('testuser', 'test@example.com', 'testpass', 'user', NOW())
      `;
      console.log('Table write test successful.');
    } catch (tableError: any) {
      console.error('Table write test failed:', tableError);
      // Check for specific table/column errors
      if (tableError.message.includes('relation "users" does not exist')) {
        return new NextResponse(
          "Table 'users' does not exist.  Please create the table.",
          { status: 500 }
        );
      } else if (tableError.message.includes('column')) {
         return new NextResponse(
          "A column is missing or the column name is incorrect.  Check your table schema.",
          { status: 500 }
        );
      } else if (tableError.message.includes('duplicate key value violates unique constraint')) {
        return new NextResponse(
          "Duplicate username or email.  Change 'testuser' and 'test@example.com'.",
          {status: 500}
        );
      }
      return new NextResponse(
        `Table write test failed: ${tableError.message}`,
        { status: 500 }
      );
    }

    // 3. Check data retrieval after write
    try {
      const result = await sql`
        SELECT username, email FROM users WHERE username = 'testuser'
      `;
      if (result.rows.length > 0) {
        console.log('Data retrieval test after write successful:', result.rows[0]);
      } else {
        console.error('Data retrieval test after write failed: No data found.');
        return new NextResponse(
          'Data retrieval test after write failed: No data found after insert.',
          { status: 500 }
        );
      }
    } catch (retrieveError: any) {
        console.error('Data retrieval after write failed', retrieveError);
        return new NextResponse(
            `Data retrieval after write failed: ${retrieveError.message}`,
            {status: 500}
        );
    }

    return NextResponse.json(
      { message: 'All tests successful: Database connection, table write, and data retrieval are working!' },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Database connection test failed:', error);
    return new NextResponse(
      `Database connection test failed: ${error.message}`,
      { status: 500 }
    );
  }
}
