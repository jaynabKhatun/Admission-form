const Form = () => {
  return (
    <form className=" p-20">
      <div className="grid gap-6 mb-6 md:grid-cols-2 ">
        <div className="mt-10">
          <label className="block mb-2 text-xl font-medium mt-6 text-gray-900 dark:text-white">
            Full Name of Applicant
          </label>

          <input
            type="text"
            name="fisrtName"
            className=" border-b-2 border-[#BAA994] text-gray-900 text-sm rounded-lg hover:border-[#F18B1C] duration-300  block w-full p-2.5 "
            placeholder="your name"
            required
          />
        </div>
        <div className="mt-20">
          <input
            type="text"
            id="last_name"
            className=" border-b-2 border-[#BAA994] mt-6 hover:border-[#F18B1C] duration-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 "
            placeholder="your last name"
            required
          />
        </div>
        <div>
          <input
            type="date"
            name="birthday"
            className=" border-b-2 hover:border-[#F18B1C] duration-300 border-[#BAA994] text-gray-900 text-sm rounded-lg  block w-full p-2.5 "
            placeholder="Date of birth"
            required
          />
        </div>
        <div>
          <input
            type="number"
            name="Phone"
            className=" border-b-2 hover:border-[#F18B1C] duration-300 border-[#BAA994] text-gray-900 text-sm rounded-lg  block w-full p-2.5 "
            placeholder="123-45-678"
            pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
            required
          />
        </div>

        {/* address section */}

        <div>
          <label className="block mb-2 text-xl font-medium mt-6 text-gray-900 dark:text-white">
            Permanent Address
          </label>
          <input
            type="text"
            name="adress"
            className=" border-b-2 hover:border-[#F18B1C] duration-300 border-[#BAA994] text-gray-900 text-sm rounded-lg  block w-full p-2.5 "
            placeholder="street, number, city, state, zip code"
            required
          />
          <input
            type="text"
            name="zip"
            className=" border-b-2 mt-6 hover:border-[#F18B1C] duration-300 border-[#BAA994] text-gray-900 text-sm rounded-lg  block w-full p-2.5 "
            placeholder=" zip code"
            required
          />
        </div>

        <div>
          <input
            type="text"
            name="city"
            className=" border-b-2 mt-14 hover:border-[#F18B1C] duration-300 border-[#BAA994] text-gray-900 text-sm rounded-lg  block w-full p-2.5 "
            placeholder="city"
            required
          />
          <input
            type="text"
            name="state"
            className=" border-b-2 mt-6 hover:border-[#F18B1C] duration-300 border-[#BAA994] text-gray-900 text-sm rounded-lg  block w-full p-2.5 "
            placeholder="state"
            required
          />
        </div>

        {/* gardian information */}
        <div>
          <label className="block mb-2 text-xl font-medium mt-6 text-gray-900 dark:text-white">
            Parent / Guardian's Name
          </label>
          <input
            type="text"
            name="parent_name"
            className=" border-b-2 hover:border-[#F18B1C] duration-300 border-[#BAA994] text-gray-900 text-sm rounded-lg  block w-full p-2.5 "
            placeholder="Fisrt Name"
            required
          />
          <input
            type="number"
            name="parent_phone"
            className=" border-b-2 mt-6 hover:border-[#F18B1C] duration-300 border-[#BAA994] text-gray-900 text-sm rounded-lg  block w-full p-2.5 "
            placeholder="Parent / Guardian's Phone"
            required
          />
        </div>

        <div>
          <input
            type="text"
            name="Last_Name"
            className=" border-b-2 mt-14 hover:border-[#F18B1C] duration-300 border-[#BAA994] text-gray-900 text-sm rounded-lg  block w-full p-2.5 "
            placeholder="Last Name"
            required
          />
          <input
            type="text"
            name="parent_occupation"
            className=" border-b-2 mt-6 hover:border-[#F18B1C] duration-300 border-[#BAA994] text-gray-900 text-sm rounded-lg  block w-full p-2.5 "
            placeholder="Parent / Guardian's Occupation"
            required
          />
        </div>
      </div>

      <div className="grid  grid-cols-1 md:grid-cols-2 mb-6">
        

        {/* checkbox1 */}

        <div className="mt-8">
          <label>Class Applied for:</label>
          <ul className="w-48 text-sm font-medium text-gray-900  rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
            <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
              <div className="flex items-center ps-3">
                <input
                  id="vue-checkbox"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                />
                <label
                  for="vue-checkbox"
                  className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  6th
                </label>
              </div>
            </li>
            <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
              <div className="flex items-center ps-3">
                <input
                  id="react-checkbox"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                />
                <label
                  for="react-checkbox"
                  className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  7th
                </label>
              </div>
            </li>
            <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
              <div className="flex items-center ps-3">
                <input
                  id="angular-checkbox"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                />
                <label
                  for="angular-checkbox"
                  className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  8th
                </label>
              </div>
            </li>
            <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
              <div className="flex items-center ps-3">
                <input
                  id="laravel-checkbox"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                />
                <label
                  for="laravel-checkbox"
                  className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  9th
                </label>
              </div>
            </li>
          </ul>
        </div>
        {/* checkbox 2 */}
        <div className="mt-10">
          <label>Are you an international student?</label>
          <div className="flex items-center mt-4 mb-4">
            <input
              id="default-radio-1"
              type="radio"
              value=""
              name="default-radio"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              for="default-radio-1"
              className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Yes
            </label>
          </div>
          <div className="flex items-center">
            <input
              checked
              id="default-radio-2"
              type="radio"
              value=""
              name="default-radio"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              for="default-radio-2"
              className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              No
            </label>
          </div>
        </div>
      </div>

      <button
        type="submit"
        className=" border-2 mt-16 border-[#BAA994] text-gray-900 text-sm rounded-lg  block w-full p-2.5 "
      >
        Submit The College Admission Form
      </button>
    </form>
  );
};

export default Form;
