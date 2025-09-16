"use client"

import { useRouter } from 'next/navigation';
import { AdminDashboardTile } from 'app/components/optionTilesn'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUsers, faCalendarCheck, faUserDoctor, faPrescription, faArrowRight, faArrowRightFromFile, faArrowUpRightFromSquare, faArrowUpRightDots, faSquareArrowUpRight} from '@fortawesome/free-solid-svg-icons';


export default function AdminDashboard(){
    const router = useRouter()

    const addNewPatient = () => {
        router.push('./new')
    }

    const addNewDoctor = () => {
        router.push('')
    }

    const addNewAppointment = () => {
        router.push('')
    }

    const addNewRx = () => {
        router.push('')
    }

    return(
        <main className="bg-white w-full h-screen grid grid-cols-[0.25fr_1.25fr] gap-0 font-mono">
            <div id="sideBar" className="bg-gray-200 ">

            </div>

            <div id="dashboard" className="bg-emerald-50 px-16">
                <div id="title" className="py-8 border">
                    <h1 className="text-sm md:text-2xl lg:text-4xl font-mono font-semibold text-emerald-700 mb-4">
                        Dashboard
                    </h1>
                    <div id="dashBoardSearch" className='flex mb-2 mt-12'>
                        <input className='text-gray-600 border border-gray-300 p-2 rounded-lg focus:outline-none focus:border-emerald-400' placeholder='Search options...'/>
                        <FontAwesomeIcon icon={faSquareArrowUpRight} className="text-3xl text-emerald-600"/> 
                    </div>
                </div>
                
                <div id="options" className='grid grid-cols-4 grid-rows-3 gap-10'>
                    <AdminDashboardTile
                        title="Patient"
                        icon={faUsers}
                        buttonText="Add Patient"
                        onClick={addNewPatient}
                        infoText="Total 213 patients"
                    />
        
                    <AdminDashboardTile 
                        title="Doctors"
                        icon={faUserDoctor}
                        buttonText="Providers"
                        infoText="Total 3 Providers"
                        onClick={addNewDoctor}
                    />

                    <AdminDashboardTile
                        title="Appointments"
                        icon={faCalendarCheck}
                        buttonText="Schedule"
                        infoText="25 upcoming appointments"
                        onClick={addNewAppointment}
                    />  

                    <AdminDashboardTile
                        title="Prescriptions"
                        icon={faPrescription}
                        buttonText="Check Prescription"
                        infoText="Total 135 Prescriptions"
                        onClick={addNewRx}
                    />
                </div>

            </div>
        </main>
    )
}