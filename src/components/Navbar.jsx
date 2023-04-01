import logo from "../assets/recipe-book.png";

export default function Navbar(props) {
  return (
    <nav className="flex items-center justify-between text-white mb-5 p-8 h-30 shadow-md bg-gradient-to-r from-black via-gray-900 to-gray-700">
      <div className="flex items-center h-full">
        <img src={logo} className="h-11 mr-2" alt="Recipe Finder Logo" />
        <h1 className="text-2xl font-medium">Recipe Finder</h1>
      </div>
      <input
        type="text"
        name="name"
        placeholder="Find recipes by name"
        className="search-bar rounded-md h-10 pl-12 w-5/12 outline-none text-white font-medium bg-white bg-opacity-25 placeholder-gray-200"
        onChange={props.handleChange}
      />
    </nav>
  );
}
