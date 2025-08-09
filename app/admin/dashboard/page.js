import { AdminDashboardTile } from 'app/components/OptionTiles'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUsers, faCalendarCheck, faNotesMedical } from '@fortawesome/free-solid-svg-icons';


export default function AdminDashboard(){
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
                
                <AdminDashboardTile
                    title="Patient"
                    icon={faUsers}
                    buttonText="Add Patient"
                    infoText="Total 23 patients"
                />
      
                <AdminDashboardTile
                    title="Appointments"
                    icon={faCalendarCheck}
                    buttonText="Schedule"
                    infoText="5 upcoming appointments"
                />  
            </div>
        </main>
    )
}