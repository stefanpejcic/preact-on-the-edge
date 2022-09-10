export default function App({ req, isCold }) {
  const parsedCity = decodeURIComponent(req.headers.get('x-vercel-ip-city'));
  // from vercel we get the string `null` when it can't decode the IP
  const city = parsedCity === 'null' ? null : parsedCity;
  const ip = (req.headers.get('x-forwarded-for') ?? '127.0.0.1').split(',')[0];

  return (
    <html lang="en">
      <Head />
      <body>
        <div style={{ height: '100%' }}>
          <Card />

          <main>
            <h1>
              <span></span>
            </h1>

            <div class="info">
              <div class="block">
                <div class="contents">
                  <h1>Vaša javna IP adresa je:               
                  <strong>{ip}</strong></h1>
                </div>
              </div>
            </div>
          </main>
          <div class="debug">
            Generated at {new Date().toISOString()} ({isCold ? 'cold' : 'hot'})
          </div>
        </div>

        <Footer />
      </body>
    </html>
  );
}

function Head() {
  return (
    <head>
      <title>{ip}</title>
      <meta charset="utf-8" />
      <link rel="icon" href="/static/favicon.ico" />
      <link rel="stylesheet" href="/static/app.css" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta
        name="description"
        content="HTML, dynamically rendered in a city near you"
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@vercel" />
      <meta name="twitter:creator" content="@vercel" />
      <meta name="twitter:title" content="Preact on the edge" />
      <meta
        name="twitter:description"
        content="HTML, dynamically rendered in a city near you"
      />
      <meta name="twitter:image" content="/static/og/card.png" />
      <meta name="twitter:image:alt" content="The Vercel and Preact logos" />
    </head>
  );
}

function Card() {
  return (
    <svg className="card" viewBox="0 50 840 440">
      <defs>
        <linearGradient
          id="gradient-1"
          gradientUnits="userSpaceOnUse"
          x1={420}
          y1={275}
          x2={420}
          y2={167}
          gradientTransform="matrix(1 0 0 -1 0 442)"
        >
          <stop
            offset={0.464}
            style={{
              stopOpacity: 0.2,
            }}
          />
          <stop
            offset={0.9}
            style={{
              stopOpacity: 0,
            }}
          />
        </linearGradient>
        <linearGradient
          id="gradient-2"
          gradientUnits="userSpaceOnUse"
          x1={420}
          y1={325}
          x2={420}
          y2={117.001}
          gradientTransform="matrix(1 0 0 -1 0 442)"
        >
          <stop
            offset={0.464}
            style={{
              stopOpacity: 0.2,
            }}
          />
          <stop
            offset={1}
            style={{
              stopOpacity: 0,
            }}
          />
        </linearGradient>
        <linearGradient
          id="gradient-3"
          gradientUnits="userSpaceOnUse"
          x1={420}
          y1={382}
          x2={420}
          y2={60.001}
          gradientTransform="matrix(1 0 0 -1 0 442)"
        >
          <stop
            offset={0.464}
            style={{
              stopOpacity: 0.16,
            }}
          />
          <stop
            offset={0.9}
            style={{
              stopOpacity: 0,
            }}
          />
        </linearGradient>
        <linearGradient
          id="gradient-4"
          gradientUnits="userSpaceOnUse"
          x1={420}
          y1={488.788}
          x2={420}
          y2={-46.967}
          gradientTransform="matrix(1 0 0 -1 0 442)"
        >
          <stop
            offset={0.089}
            style={{
              stopOpacity: 0.1,
            }}
          />
          <stop
            offset={0.464}
            style={{
              stopOpacity: 0.27,
            }}
          />
          <stop
            offset={0.896}
            style={{
              stopOpacity: 0,
            }}
          />
        </linearGradient>
        <linearGradient
          id="gradient-5"
          gradientUnits="userSpaceOnUse"
          x1={420}
          y1={610}
          x2={420}
          y2={-168.179}
          gradientTransform="matrix(1 0 0 -1 0 442)"
        >
          <stop
            offset={0.172}
            style={{
              stopOpacity: 0,
            }}
          />
          <stop
            offset={0.464}
            style={{
              stopOpacity: 0.21,
            }}
          />
          <stop
            offset={0.771}
            style={{
              stopOpacity: 0,
            }}
          />
        </linearGradient>
        <linearGradient
          id="gradient-vercel"
          gradientUnits="objectBoundingBox"
          x1={0}
          y1={0}
          x2={1.5}
          y2={1}
        >
          <stop
            offset={0.3}
            style={{
              stopColor: 'var(--g1)',
            }}
          />
          <stop
            offset={0.5}
            style={{
              stopColor: 'var(--g2)',
            }}
          />
          <stop
            offset={0.8}
            style={{
              stopColor: 'var(--g1)',
            }}
          />
        </linearGradient>
        <linearGradient
          id="gradient-preact"
          gradientUnits="objectBoundingBox"
          x1={0}
          y1={0}
          x2={1.1}
          y2={1}
        >
          <stop
            offset={0.3}
            style={{
              stopColor: 'var(--preact)',
            }}
          />
          <stop
            offset={0.5}
            style={{
              stopColor: '#BBF0FF',
            }}
          />
          <stop
            offset={0.8}
            style={{
              stopColor: 'var(--preact)',
            }}
          />
        </linearGradient>
        <symbol id="preact-logo" viewBox="0 0 23 20.46348">
          <svg viewBox="-256 -256 512 512">
            <path d="M0,-256 221.7025033688164,-128 221.7025033688164,128 0,256 -221.7025033688164,128 -221.7025033688164,-128z" fill="#673ab8" stroke="white" stroke-width="4px" />
            <ellipse cx="0" cy="0" rx="75px" ry="196px" transform="rotate(52)" fill="none" stroke="white" stroke-width="16px" />
            <ellipse cx="0" cy="0" rx="75px" ry="196px" transform="rotate(-52)" fill="none" stroke="white" stroke-width="16px" />
            <circle cx="0" cy="0" r="34" fill="white" />
          </svg>
        </symbol>
        <linearGradient id="#mask-gradient">
          <stop offset="0" stop-color="black" />
          <stop offset="1" stop-color="white" />
        </linearGradient>
        <mask id="mask">
          <rect
            x="0"
            y="0"
            width="200"
            height="200"
            fill="url(#mask-gradient)"
          />
        </mask>
      </defs>
      <g className="orbits" transform="translate(420, 220)">
        <g>
          <circle
            className="orbit"
            style={{
              stroke: 'url(#gradient-1)',
              animationDelay: 0,
            }}
            r={53.4}
          />
        </g>
        <g>
          <circle
            className="orbit"
            style={{
              stroke: 'url(#gradient-2)',
              animationDelay: '0.03s',
            }}
            r={103.4}
          />
          <circle
            className="gray satellite"
            style={{
              animationDelay: '0.9s',
            }}
            cx={-69.6}
            cy={-76}
            r={5.8}
          />
        </g>
        <g>
          <circle
            className="orbit"
            style={{
              stroke: 'url(#gradient-3)',
              animationDelay: '0.06s',
            }}
            r={160.4}
          />
          <circle
            className="orange satellite"
            style={{
              animationDelay: '0.8s',
            }}
            cx={102.4}
            cy={-123}
            r={5.8}
          />
        </g>
        <g>
          <circle
            className="orbit"
            style={{
              stroke: 'url(#gradient-4)',
              animationDelay: '0.09s',
            }}
            r={267.3}
          />
          <circle
            className="orange satellite"
            style={{
              animationDelay: '0.6s',
            }}
            cx={-243.6}
            cy={111.4}
            r={5.8}
          />
          <circle
            className="gray satellite"
            style={{
              animationDelay: '1s',
            }}
            cx={250}
            cy={94.4}
            r={5.8}
          />
          <circle
            className="orange satellite"
            style={{
              animationDelay: '0.7s',
            }}
            cx={-236.6}
            cy={-123.6}
            r={5.8}
          />
        </g>
        <g>
          <circle
            className="orbit"
            style={{
              stroke: 'url(#gradient-5)',
              animationDelay: '0.12s',
            }}
            r={388.5}
          />
        </g>
      </g>

      <g id="center">
       <a target="_blank" href="https://ip.unlimited.rs">
         <img src="https://unlimited.rs/wp-content/themes/unlimited-RS/img/home-big-logo-over.png"></img>
       </a>
      </g>
      
    </svg>
  );
}

function Footer() {
  return (
    <footer>
      <p class="details">
        Hosted on{' '}
        <a target="_blank" href="https://unlimited.rs">
          UNLIMITED.RS
        </a>
      </p>

    </footer>
  );
}
