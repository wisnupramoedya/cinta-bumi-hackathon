import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBullhorn, faMessage } from "@fortawesome/free-solid-svg-icons";

export default function SearchBar() {
  return (
    <>
      <section className="bg-blibli fixed top-0 inset-x-0">
        <div className="bg-white rounded-t-2xl p-3 flex items-center h-14">
          <input
            className="bg-gray-200 rounded-lg w-10/12 px-3 py-1 mr-2 focus:outline-none placeholder:text-gray-500"
            placeholder="Lemonilo"
          />
          <FontAwesomeIcon
            icon={faMessage}
            className="text-gray-500 text-xl mx-1 w-1/12"
          />
          <FontAwesomeIcon
            icon={faBullhorn}
            className="text-gray-500 text-xl mx-1 w-1/12"
          />
        </div>
      </section>
    </>
  );
}
