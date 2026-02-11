import { useParams } from "react-router-dom";

const CategoryPage = () => {
  const { name } = useParams();

  const data = {
    shoes: ["Nike Shoes", "Adidas Shoes", "Puma Shoes"],
    accessories: ["Cricket Bat", "Football", "Gloves"],
  };

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-6 capitalize">
        {name} Products
      </h1>

      <div className="grid grid-cols-3 gap-6">
        {data[name]?.map((item, i) => (
          <div key={i} className="border p-4 rounded shadow">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
