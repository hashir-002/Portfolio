import React, { useState } from 'react';

const Form = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "8f2ab76b-d878-408f-8ae4-bed4f3994906");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: json,
        }).then((res) => res.json());

        if (res.success) {
            console.log("Success", res);
        }

        setFormData({
            name: '',
            email: '',
            phone: '',
            message: '',
        });

        alert('Submitted Successfully');
    };

    return (
        <div className="flex justify-center lg:w-2/3 w-96 p-4">
            <form
                onSubmit={onSubmit}
                className="w-full max-w-lg p-6 bg-gradient-to-r from-cyan-800 via-green-800 to-blue-950 shadow-lg rounded-2xl border-2 border-violet-100 space-y-6"
            >
                <h2 className="text-2xl font-bold text-center text-white">Let’s <span className='text-red-200'>Work</span> Together</h2>

                {/* Name Input */}
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-white">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Enter your name"
                        required
                    />
                </div>

                {/* Email Input */}
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-white">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Enter your email"
                        required
                    />
                </div>

                {/* Phone Input */}
                <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-white">
                        Phone
                    </label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Enter your phone number"
                        required
                    />
                </div>

                <div>
                    <label
                        htmlFor="message"
                        className="block text-sm font-medium text-white"
                    >
                        Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        placeholder="give a breif description of your requirements"
                        rows="4"
                        className="mt-1 block w-full px-4 py-2  border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    ></textarea>
                </div>




                {/* Submit Button */}
                <div className="flex justify-center">
                    <button
                        type="submit"
                        className="px-6 w-full transition duration-300 ease-in-out py-2 bg-gradient-to-r from-violet-800 via-sky-900 border-2 border-white to-cyan-600 text-white font-bold rounded-full hover:bg-violet-100 hover:border-violet-950 hover:border-2 hover:text-black focus:outline-none focus:ring-2 focus:ring-violet-500"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Form