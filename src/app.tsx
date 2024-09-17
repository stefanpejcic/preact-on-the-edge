export default function handler(req, res) {
  const ip = (req.headers['x-forwarded-for'] ?? req.connection.remoteAddress ?? '127.0.0.1').split(',')[0];
  
  // Set the content type to text/plain and send the IP
  res.setHeader('Content-Type', 'text/plain');
  res.status(200).send(ip);
}
