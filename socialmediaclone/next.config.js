/** @type {import('next').NextConfig} */
const nextConfig = {
  images:{
    domains:[
      'cdn-icons-png.flaticon.com',
      'platform-lookaside.fbsbx.com',
      'links.papareact.com',
      'firebasestorage.googleapis.com',
      'images.unsplash.com'
      
    ]
  },
  reactStrictMode: true,
}


module.exports = {...nextConfig}
