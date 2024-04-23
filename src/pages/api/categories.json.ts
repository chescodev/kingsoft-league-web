import categories from '@/data/categories.json';
import type { APIRoute } from 'astro';

export const GET: APIRoute = () => {
    return new Response(
        JSON.stringify(categories),
        { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
};
