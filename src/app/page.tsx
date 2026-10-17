export default function Home() {
  const name = process.env.NEXT_PUBLIC_APP_NAME ?? "Static Name";
  const apiKey = process.env.API_KEY;

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">{name}</h1>
      <h3 className="text-2xl mt-4">Fake Api Key: {apiKey}</h3>
      <img src="https://picsum.photos/400/300" alt="Show Pics" className="mt-8 w-1/2 rounded-lg shadow-lg" />
    </main>
  );
}