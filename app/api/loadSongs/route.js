import { NextResponse } from "next/server";
import prisma from "../../lib/prisma";

export async function POST(req, res) {
    const body = await req.json();
    const headers = body.shift();
    const change = headers.findIndex((header) => header === 'Date Added');
    const fieldsToConvert = ['Id', 'Year', 'Duo', 'Explicit']
    if (change !== -1) {
        headers.splice(change, 1, 'Date');
    }
    const formattedData = await body
        .slice(1)
        .map((row) => headers.reduce((acc, header, index) => {
            acc[header] = row[index];
            return acc;
        }, {}));

    formattedData.forEach((obj) => {
        fieldsToConvert.forEach((field) => {
            if (typeof obj[field] === 'string') {
                obj[field] = parseInt(obj[field], 10);
            }
        })
    })

    formattedData.forEach(async (data) => {
        try {
            await prisma.Songs.upsert({
                where: { Id: data.Id },
                update: data,
                create: data,
            });
        } catch (error) {
            console.error('Error during upser:', error);
        };
    });

    return NextResponse.json({ success: true })
}