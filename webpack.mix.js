const mix = require("laravel-mix");

// ===================
// Configurações
// ===================
const resourcesPath = "assets/";
const themePath = "deploy/";

//Local onde estão os JS para serem compilados
const jsGeral = resourcesPath + "js/general.js";


//Local onde estão os Sass  para serem compilados
const sassMain = resourcesPath + "sass/main.scss";




//Local onde irão os JS Compilados
const jsOutput = themePath + "js";
//Local onde irão os css compilados
const sassOutput = themePath + "css";

// ===================
// Você não precisa mexer em mais nada apartir daqui
// ===================

mix.setPublicPath(themePath);
mix.disableNotifications();

mix.options({
  autoprefixer: { remove: false },
  terser: {
    extractComments: (astNode, comment) => false
  },
});
mix.webpackConfig({
  externals: {
    jquery: "jQuery",
  },
});
mix.autoload({
  jquery: ["$", "window.jQuery"],
});


mix.sass(sassMain, sassOutput)
  .options({
    processCssUrls: false,
  }).version();



mix.js(jsGeral, jsOutput).version();


