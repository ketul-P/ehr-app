"use client"

import { useRouter } from 'next/navigation';
import { AdminDashboardTile } from '../../components/OptionTiles'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUsers, faCalendarCheck, faUserDoctor, faPrescription} from '@fortawesome/free-solid-svg-icons';


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
        <main className="bg-white w-full h-screen grid grid-cols-[0.25fr_1.25fr] gap-0">
            <div id="sideBar" className="bg-white border-gray-300">

            </div>

            <div id="dashboard" className="bg-gray-100 px-16">
                <div id="title" className="py-8 border-amber-400">
                    <h1 className="text-sm md:text-2xl lg:text-4xl font-mono font-semibold text-gray-700 mb-8">
                        Dashboard
                    </h1>
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