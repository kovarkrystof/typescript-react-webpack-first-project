const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // Režim: 'development' pro vývoj, 'production' pro produkci
  mode: 'development', // nebo 'production'

  // Vstupní bod aplikace
  entry: './src/index.tsx', // Začneme od tohoto souboru

  // Výstupní bod pro bundled soubory
  output: {
    filename: 'bundle.js', // Název výstupního souboru
    path: path.resolve(__dirname, 'dist'), // Kam umístit výstup (slozka dist)
    clean: true, // Smazat obsah složky dist před novým buildem
  },

  // Jak Webpack řeší moduly
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'], // Rozšíření souborů, která Webpack automaticky zkusí
  },

  // Pravidla pro zpracování různých typů souborů
  module: {
    rules: [
      {
        // Pravidlo pro .ts a .tsx soubory
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/, // Vyloučit složku node_modules
        use: {
          // Použijeme babel-loader s presetem pro React a TypeScript
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env', // Pro moderní JS funkce
              '@babel/preset-react', // Pro JSX
              '@babel/preset-typescript', // Pro TypeScript
            ],
          },
        },
        // Alternativně by šlo použít jen ts-loader:
        // use: 'ts-loader',
        // Nebo zřetězit ts-loader a babel-loader:
        // use: ['babel-loader', 'ts-loader'], // TS projde prvni, pak Babel
      },
      {
        // Pravidlo pro .css soubory
        test: /\.css$/,
        use: ['style-loader', 'css-loader'], // style-loader injektuje CSS do DOMu, css-loader parsuje CSS
      },
      // Můžeš přidat pravidla pro obrázky, fonty atd.
    ],
  },

  // Pluginy
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html', // Použij tento HTML soubor jako šablonu
      filename: 'index.html', // Název výstupního HTML souboru
    }),
  ],

  // Konfigurace vývojového serveru
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'), // Složka, ze které se bude servírovat obsah
    },
    compress: true, // Zapnout gzip kompresi
    port: 3000, // Port, na kterém poběží server
    open: true, // Automaticky otevřít prohlížeč
    hot: true, // Zapnout Hot Module Replacement (živé načítání změn bez obnovení stránky)
  },
};