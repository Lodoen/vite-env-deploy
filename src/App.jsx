export default function App() {
  const secret = import.meta.env.VITE_HIDDEN_SECRET;
  console.log(secret);
  return (
    <section>
      <h1>Vite and env deployment</h1>
      <p>The hidden secret is: {secret}</p>
    </section>
  );
}
