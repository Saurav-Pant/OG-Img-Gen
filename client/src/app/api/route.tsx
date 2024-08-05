// import { ImageResponse } from 'next/og'
// import { NextRequest } from 'next/server'

// export const runtime = 'edge'

// export async function GET(request: NextRequest) {
//     try {
//         const { searchParams } = new URL(request.url)
   
//         const title = searchParams.get("title")?.slice(0, 100) || "My website"
//         const description = searchParams.get("description")?.slice(0, 200) || "Default description"
//         const imageUrl = searchParams.get("image") || ""

//         return new ImageResponse(
//             (
//                 <div
//                     style={{
//                         height: '100%',
//                         width: '100%',
//                         display: 'flex',
//                         flexDirection: 'column',
//                         alignItems: 'center',
//                         justifyContent: 'center',
//                         backgroundColor: 'white',
//                     }}
//                 >
//                     <div
//                         style={{
//                             display: 'flex',
//                             flexDirection: 'column',
//                             alignItems: 'center',
//                             justifyContent: 'center',
//                             backgroundColor: '#f3f4f6',
//                             padding: '40px',
//                             borderRadius: '10px',
//                         }}
//                     >
//                         {imageUrl && (
//                             <img
//                                 src={imageUrl}
//                                 alt="Post image"
//                                 style={{ width: '300px', height: '200px', objectFit: 'cover', marginBottom: '20px', borderRadius: '5px' }}
//                             />
//                         )}
//                         <h1 style={{ fontSize: '60px', fontWeight: 'bold', color: '#1F2937', marginBottom: '20px', textAlign: 'center' }}>{title}</h1>
//                         <p style={{ fontSize: '30px', color: '#4B5563', textAlign: 'center' }}>{description}</p>
//                     </div>
//                 </div>
//             ),
//             {
//                 width: 1200,
//                 height: 630,
//             }
//         )
//     } catch (e: unknown) {
//         console.error('Failed to generate OG image:', e)
//         return new Response("Failed to generate OG image", { status: 500 })
//     }
// }