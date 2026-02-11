const Products = () => {
  const products = [
    { id: 1, name: "Nike Running Shoes" },
    { id: 2, name: "Cricket Bat" },
    { id: 3, name: "Football" },
  ];

  return (
    <div className="p-10 grid grid-cols-3 gap-6">
      {products.map((p) => (
        <div key={p.id} className="border p-4 rounded-lg shadow">
          <h2 className="font-bold">{p.name}</h2>
        </div>
      ))}
    </div>
  );
};

export default Products;
