import { ImageResponse } from 'next/og'
import { NextRequest } from 'next/server'

export const runtime = 'edge'

export async function GET(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url)
   
        const title = searchParams.get("title")?.slice(0, 100) || "My website"
        const description = searchParams.get("description")?.slice(0, 200) || "Default description"
        const imageUrl = searchParams.get("image") || ""

        return new ImageResponse(
            (
                <div className="h-full w-full flex flex-col items-center justify-center bg-white">
                    <div className="flex flex-col items-center justify-center bg-gray-200 p-10 rounded-lg">
                        {imageUrl && (
                            <img
                                src={imageUrl}
                                alt="Post image"
                                className="w-75 h-50 object-cover mb-5 rounded"
                            />
                        )}
                        <h1 className="text-6xl font-bold text-gray-800 mb-5 text-center">{title}</h1>
                        <p className="text-3xl text-gray-600 text-center">{description}</p>
                    </div>
                </div>
            ),
            {
                width: 1200,
                height: 630,
            }
        )
    } catch (e: unknown) {
        console.error('Failed to generate OG image:', e)
        return new Response("Failed to generate OG image", { status: 500 })
    }
}
