async function Home() {
  const res = await fetch('https://dummyjson.com/recipes');
  if (!res.ok) throw new Error("Failed to fetch album");

  const recipes = await res.json();
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols">
      {recipes.map((recipe: { id: number; title: string }) => (
        <div
          key={recipe.id}
          className="bg-white shadow-md rounded-lg p-4 transition"
        >
          <h2 className="text-2xl font-bold mb-2">{recipe.title}</h2>
          <p className="text-gray-600">Album ID: {recipe.id}</p>
        </div>
      ))}
    </div>
  );
}

export default Home;
