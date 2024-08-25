import Swal from "sweetalert2";

const Form = () => {
  const handleAdmission = (event) => {
    event.preventDefault();
    console.log("target");

    const form = event.target;

    const name = form.firstName.value;
    const lastName = form.lastName.value;
    const birthday = form.birthday.value;
    const phone = form.phone.value;
    const address = form.address.value;
    const zip = form.zip.value;
    const city = form.city.value;
    const state = form.state.value;
    const parent_name = form.parent_name.value;
    const Last_Name = form.Last_Name.value;
    const parent_phone = form.parent_phone.value;
    const parent_occupation = form.parent_occupation.value;
    const readClass = form.readClass.value;
    const gender = form.gender.value;
    const schoolarship = form.schoolarship.value;
    const student = form.student.value;

    const candidates = {
      name,
      lastName,
      birthday,
      phone,
      address,
      zip,
      city,
      state,
      parent_name,
      Last_Name,
      parent_phone,
      parent_occupation,
      readClass,
      gender,
      schoolarship,
      student,
    };
    console.log("candidates", candidates);

    //post data to the server using fetch API
    fetch("https://admission-server-side.vercel.app/candidates", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(candidates),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("data", data);
        if (data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your form has been submitted successfully!",
            showConfirmButton: false,
            timer: 3000,
          });

          // clear the form after successful submission
          form.reset();
        }
      });
  };

  return (
    <form onSubmit={handleAdmission} className=" p-20">
      <div className="grid gap-6 mb-6 md:grid-cols-2 ">
        <div className="mt-10">
          <label className="block mb-2 text-xl font-medium mt-6 text-gray-900 dark:text-white">
            Full Name of Applicant
          </label>

          <input
            type="text"
            name="firstName"
            className=" border-b-2 border-[#BAA994] text-gray-900 text-sm rounded-lg hover:border-[#F18B1C] duration-300  block w-full p-2.5 "
            placeholder="your name"
            required
          />
        </div>

        <div className="mt-20">
          <input
            type="text"
            name="lastName"
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
            name="phone"
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
            name="address"
            className=" border-b-2 hover:border-[#F18B1C] duration-300 border-[#BAA994] text-gray-900 text-sm rounded-lg  block w-full p-2.5 "
            placeholder="Village"
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
            placeholder=" County"
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

      {/* class info */}
      <label className="block mb-2 text-xl font-medium mt-16 text-gray-900 dark:text-white">
        Student Summary
      </label>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center mb-6">
        {/* select 1 */}

        <div className="mt-8">
          <select
            name="readClass"
            className="border-b-2 hover:border-[#F18B1C] duration-300 border-[#BAA994] text-gray-900 text-sm rounded-lg  block  p-2.5  w-full "
          >
            <option value="" disabled>
              Select Class
            </option>
            <option value="6th">6th</option>
            <option value="7th">7th</option>
            <option value="8th">8th</option>
            <option value="9th">9th</option>
            <option value="10th">10th</option>
          </select>
        </div>
        {/* select  2 */}
        <div className="mt-8">
          <select
            name="gender"
            className="border-b-2 hover:border-[#F18B1C] duration-300 border-[#BAA994] text-gray-900 text-sm rounded-lg  block w-full p-2.5  w-full "
          >
            <option value="" disabled>
              Select Your Gender
            </option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        {/* select 3 */}
        <div className="mt-8">
          <select
            name="student"
            className="border-b-2 hover:border-[#F18B1C] duration-300 border-[#BAA994] text-gray-900 text-sm rounded-lg  block  p-2.5  w-full "
          >
            <option value="" disabled>
              Are you student?
            </option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <div className="mt-8">
          <select
            name="schoolarship"
            className="border-b-2 hover:border-[#F18B1C] duration-300 border-[#BAA994] text-gray-900 text-sm rounded-lg  block p-2.5  w-full "
          >
            <option value="" disabled>
              Interested on Scholarship?
            </option>
            <option value="yes">yes</option>
            <option value="no">No</option>
          </select>
        </div>
      </div>

      <button
        type="submit"
        className=" border-2 mt-16 border-[#BAA994] bg-gradient-to-r from-yellow-700 via-red-300 to-yellow-700 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2  block w-full p-2.5 "
      >
        Submit The College Admission Form
      </button>
    </form>
  );
};

export default Form;
