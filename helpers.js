const fs = require('fs');

exports.moment = require('moment');

exports.dump = (obj) => JSON.stringify(obj, null, 2);

exports.icon = (name) => fs.readFileSync(`./public/images/icons/${name}.svg`);

exports.siteName = `NAKALAAFRICA`;

exports.menu = [
  { slug: '/store', title: 'Store', icon: 'store', },
  { slug: '/about', title: 'About', icon: 'about', },
  { slug: '/faq', title: 'FAQ', icon: 'faq', },
  { slug: '/admin', title: 'Dashboard', icon: 'dash', },
];
