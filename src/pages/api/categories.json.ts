import { db } from '@/db/client';
import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
    const categories = await db.execute("SELECT * FROM Categories")
    return new Response(
        JSON.stringify(categories),
        { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
};
