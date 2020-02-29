//next.config.js
const withImages = require('next-images');
const withCSS = require('@zeit/next-css');
const fetch = require('isomorphic-unfetch');



module.exports = withImages(withCSS({
    exportTrailingSlash: true,
    exportPathMap: async function() {
        const paths = {
            '/': {page: '/'},
            '/rooms': {page: '/rooms'}
        };
        const res = await fetch('https://test-project-react.herokuapp.com/hotel-rooms');
        const data = await res.json();
        data.forEach(room => {
            paths[`/room/${room.slug}`] = {page: '/room/[name]', query: {name: room.slug}};
        })
        console.log(paths)
        return paths;
    }
}));