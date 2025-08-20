import { InputBasic, InputBasicRequired } from "../../components/InputFields";

export default function NewPatientForm() {
  return (
    <main id="form" className="min-h-screen bg-emerald-50 flex justify-center font-mono">
        <div className="flex items-center">
            <form className="p-6">
                <h2 className="text-sm md:text-2xl lg:text-4xl font-semibold text-emerald-700 mb-12">Create New Patient</h2>
                
                <p className="text-sm text-gray-500 mb-4">
                    Please fill out all the required patient information below. Fields marked with <span className="text-red-500 font-semibold">*</span> are mandatory.
                </p>

                <div className="flex justify-between mb-4 text-emerald-600">
                    <label name="patientId" className="p-0.5">Patient ID<input name="patientId" placeholder="##### - 00" disabled className="border ml-4 text-gray-800 border-gray-300 rounded-md bg-white p-2 focus:outline-none focus:border-emerald-300"/></label>
                    <label name="status" className="p-0.5">Status
                        <select name="gender" className="border bg-white ml-4 text-gray-800 border-gray-300 rounded-md focus:outline-none focus:border-emerald-300 p-2" required>
                            <option value="active">Active</option>
                            <option value="notActive">Not Active</option>
                            <option value="deceased">Deceased</option>
                        </select>
                    </label>
                </div>

                {/* Personal Info */}
                <p className="text-emerald-600 p-0.5 mb-2">Personal Information</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">

                    {/* First Name */}
                    <InputBasicRequired
                        name="firstName"
                        type="text"
                        placeHolder="First Name"
                        focusOutline="emerald-400"
                    />

                    {/* Last Name */}
                    <InputBasicRequired
                        name="lastName"
                        type="text"
                        placeHolder="Last Name"
                        focusOutline="emerald-400"
                    />

                    {/* DOB */}
                    <InputBasicRequired
                        name="doB"
                        type="date"
                        placeHolder="Date of Birth"
                        focusOutline="emerald-400"
                    />

                    <select name="gender" className="border text-gray-800 bg-white border-gray-300 rounded-md focus:outline-none focus:border-emerald-400 p-2" required>
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>

                    {/* Phone Number */}
                    <InputBasicRequired
                        name="phoneNumber"
                        type="tel"
                        placeHolder="Phone Number (###)-###-####"
                        focusOutline="emerald-400"
                    />

                    {/* E-Mail */}
                    <InputBasicRequired
                        name="eMail"
                        type="text"
                        placeHolder="e-Mail"
                        focusOutline="emerald-400"
                    />
                </div>

                {/* Address */}
                <p className="text-emerald-600 p-0.5 mb-2">Address</p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                    <input name="street" placeholder="Street Address" className="border bg-white text-gray-800 border-gray-300 rounded-md focus:outline-none focus:border-emerald-400 p-2" required />
                    <input name="unit"  placeholder="Unit" className="border bg-white text-gray-800 border-gray-300 rounded-md focus:outline-none focus:border-emerald-400 p-2" required />
                    <input name="postalCode" placeholder="Postal Code" className="border bg-white text-gray-800 border-gray-300 rounded-md focus:outline-none focus:border-emerald-400 p-2" required />
                    <input name="city" placeholder="City" className="border bg-white text-gray-800 border-gray-300 rounded-md focus:outline-none focus:border-emerald-400 p-2" required />
                    <select name="province" className="border bg-white text-gray-800 border-gray-300 rounded-md focus:outline-none focus:border-emerald-400 p-2" required>
                        <option value="">Select Province</option>
                        <option value="ON">Ontario</option>
                        <option value="QC">Quebec</option>
                        <option value="MN">Manitoba</option>
                    </select>
                    <select name="country" className="border bg-white text-gray-800 border-gray-300 rounded-md focus:outline-none focus:border-emerald-400 p-2" required>
                        <option value="">Select Country</option>
                        <option value="CA">Canada</option>
                        <option value="US">USA</option>
                        <option value="NA">Other</option>
                    </select>
                </div>

                {/* Emergency Contact */}
                <p className="text-emerald-600 p-0.5 mb-2">Emergency Contact</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                    <input name="emergencyContactName" placeholder="Emergency Contact Name" className="border bg-white text-gray-800 border-gray-300 rounded-md focus:outline-none focus:border-emerald-400 p-2"/>
                    <input name="emergencyContactPhone" placeholder="Emergency Contact Phone" className="border bg-white text-gray-800 border-gray-300 rounded-md focus:outline-none focus:border-emerald-400 p-2"/>
                </div>

                {/* Insurance */}
                <p className="text-emerald-600 p-0.5 mb-2">Insurance Provider</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                    <input name="insuranceProvider" placeholder="Insurance Provider" className="border bg-white text-gray-800 border-gray-300 rounded-md focus:outline-none focus:border-emerald-400 p-2" />
                    <input name="policyNumber" placeholder="Policy Number" className="border bg-white text-gray-800 border-gray-300 rounded-md focus:outline-none focus:border-emerald-400 p-2" />
                </div>

                {/* Consent */}
                <div className="mt-4">
                    <input type="checkbox" required className= "mr-2"/><label className="text-emerald-600 underline hover:cursor-pointer">I consent to storing my information securely.</label>
                </div>

                 <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                    <button type="clear" className="mt-6 w-full rounded bg-emerald-400 text-emerald-800 p-2 hover:bg-emerald-600 ">
                        Cancel
                    </button>

                    <button type="clear" className="mt-6 w-full rounded bg-emerald-400 text-emerald-800 p-2 hover:bg-emerald-600">
                        Clear
                    </button>

                    <button type="submit" className="mt-6 w-full rounded bg-emerald-700 text-white p-2 hover:hover:bg-emerald-900">
                        Add Patient
                    </button>
                 </div>
            </form>
        </div>
    </main>
  );
}
