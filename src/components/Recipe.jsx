export default function Recipe(props) {
  const { obj } = props;

  return (
    <div className="bg-white p-5 w-80 mx-auto my-5 justify-evenly shadow-lg rounded-lg">
      <div className="flex justify-center">
        <img src={obj.image} alt={obj.label} className="max-h-64 w-full" />
      </div>
      <h2 className="p-2 font-semibold">{obj.label}</h2>
      <button
        onClick={props.handleClick}
        className="w-full my-2 py-2 border-2 hover:border-green-600 hover:text-green-600 rounded-md border-green-500 text-green-500"
      >
        Ingredients
      </button>
      <button
        onClick={() => window.open(obj.url, "_blank")}
        className="w-full my-2 py-2 border-2 hover:border-red-600 hover:text-red-600 rounded-md border-red-400 text-red-400"
      >
        Complete Recipe
      </button>
    </div>
  );
}
