export default function AdminDashboard(){
    return(
        <main className="bg-white w-full h-screen grid grid-cols-[0.25fr_1.25fr] gap-0">
            <div id="sideBar" className="bg-white border-gray-300">

            </div>

            <div id="dashboard" className="bg-gray-100 px-4">
                <div id="title" className="p-4">
                    <h1 className="text-4xl font-mono font-semibold text-gray-700 my-4 mb-10">
                        Dashboard
                    </h1>
                </div>
                
                <div id="options" className="grid grid-cols-3 grid-rows-4 gap-4 

                                            [&>div]:p-4 [&>div]:m-4 [&>div]:rounded-md [&>div]:bg-emerald-200 [&>div]:shadow-lg
    
                                            [&>div]:text-emerald-500 [&>div]:text-xl [&>div]:font-mono 
                                            [&>div]:hover:bg-emerald-300 [&>div]:hover:text-white
                                            [&>div]:h-[7em]
                                            
                                            [&_p]:text-gray-600 [&_p]:align-bottom [&_p]:text-sm">

                    
                    <div id="g1">
                            Patient

                        <button className="bg-emerald-400 rounded shadow-lg text-sm text-white p-2">Add Patient</button>

                        <p>
                            Number of patients
                        </p>
                    </div>

                    <div id="g2">
                        <h2>
                            Provider
                        </h2>
                    </div>

                    <div id="g2">
                        <h2>
                            Nurses
                        </h2>
                    </div>

                    <div id="g2">
                        <h2>
                            Scheduling
                        </h2>
                    </div>

                    <div id="g2">
                        <h2>
                            Practices
                        </h2>
                    </div>

                    <div id="g2">
                        <h2>
                            Prescriptions
                        </h2>
                    </div>

                    <div id="g2">
                        <h2>
                            Labs
                        </h2>
                    </div>

                    <div id="g2">
                        <h2>
                            Accessibility
                        </h2>
                    </div>

                    <div id="g2">
                        <h2>
                            Insurance Claims
                        </h2>
                    </div>




                </div>
            </div>
        </main>
    )
}