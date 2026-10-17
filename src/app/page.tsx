export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">Welcome to the Show Pics App!</h1>
      <img src="https://picsum.photos/400/300" alt="Show Pics" className="mt-8 w-1/2 rounded-lg shadow-lg" />
    </main>
  );
}