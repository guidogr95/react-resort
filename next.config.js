//next.config.js
const withImages = require('next-images');
const withCSS = require('@zeit/next-css');
const fetch = require('isomorphic-unfetch');



module.exports = withImages(withCSS({
    exportTrailingSlash: true,
    exportPathMap: async function() {
        const paths = {
            '/': {page: '/'},
            '/rooms/': {page: '/rooms'},
            '/chat/': {page: '/chat'}
        };
        // const res = await fetch('https://test-project-react.herokuapp.com/hotel-rooms');
        const res = await fetch('https://graphql.datocms.com/',{
            method: "POST",
            body: JSON.stringify({
                query: `{ allRooms {
                    slug
                  } }`
            }),
            headers: {
                'Content-Type': 'application/json', 'Accept': 'application/json', 'Authorization': 'Bearer f3341f2f85860e06446a5e86bfd392'
            }
        });
        const data = await res.json();
        const roomData = data.data.allRooms
        roomData.forEach(room => {
            paths[`/room/${room.slug}`] = {page: '/room/[name]', query: {name: room.slug}};
        })
        // console.log(paths)
        return paths;
    }
}));