export default function IngredientsPopup({ ingredients, onClose }) {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 z-50 flex items-center justify-center">
      <div className="absolute bg-white rounded-lg p-8">
        <h2 className="text-xl font-bold mb-4">Ingredients:</h2>
        <ul className="list-disc ml-8">
          {ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
        <div className="flex justify-end mt-6">
          <button
            className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white font-bold py-2 px-4 rounded hover:shadow-xl hover:text-opacity-80"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
