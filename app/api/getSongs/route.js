import prisma from "../../lib/prisma";


export async function POST() {
    try {
        const result = await prisma.Songs.findMany({
        });
        let songInfo = [];
        result.map((data, idx) => {
            const { Date, ...songs } = result[idx];
            songInfo.push(songs);
        });        
        return new Response(JSON.stringify(songInfo));
    } catch (error) {
        console.error(error);
        if (error instanceof Error) {
            return new Response(JSON.stringify({ error: error.message }), { status: 500 });
        } else {
            console.error('Unexpected error type:', error);
            return new Response(JSON.stringify({ error: 'Unknown error' }), { status: 500 });
        }
    }
}