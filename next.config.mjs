const repo = 'convaneo.github.io';          // <-- your repo name

export default {
  output: 'export',                         // tells Next "static export"
  basePath: '/' + repo,                     // ➊
  assetPrefix: '/' + repo + '/',            // ➋
  images: { unoptimized: true },            // skip Next/Image optimisation
};
