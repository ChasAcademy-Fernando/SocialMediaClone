/** @type {import('next').NextConfig} */
const nextConfig = {
  images:{
    domains:[
      'cdn-icons-png.flaticon.com',
      'platform-lookaside.fbsbx.com',
      'links.papareact.com'
    ]
  },
  reactStrictMode: true,
}


module.exports = {...nextConfig,env:{
  GITHUB_CLIENT_ID: process.env.GITHUB_CLIENT_ID,
    GITHUB_CLIENT_SECRET: process.env.GITHUB_CLIENT_SECRET,
},}
