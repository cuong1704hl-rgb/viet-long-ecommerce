export default function Home() {
  return (
    <main>
      <h1>Viet Long E-commerce API</h1>
      <p>Backend API for the Viet Long e-commerce platform</p>
      <p>Powered by Next.js + Firebase + Gemini AI</p>
      <h2>Available Endpoints:</h2>
      <ul>
        <li>GET /api/products/list - Get all products</li>
        <li>POST /api/orders/create - Create a new order</li>
        <li>POST /api/auth/set-role - Set user role</li>
      </ul>
    </main>
  );
}
