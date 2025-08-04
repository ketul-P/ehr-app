import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';


const appointments = {
  Room1: [
    { time: "09:00 AM", name: "John Doe", phone: "343-555-1234" },
    { time: "09:30 AM", name: "Jane Smith", phone: "123-555-5678" },
  ],
  Room2: [
    { time: "09:15 AM", name: "Sarah Lee", phone: "125-555-9999" },
    { time: "09:45 AM", name: "Peter Kim", phone: "124-555-2222" },
  ],
  Room3: [
    { time: "10:00 AM", name: "Mike Ross", phone: "343-555-1111" },
  ],

};

export default function AdminDashboard() {
  return (
    <main id="dash" className="bg-white w-full h-screen grid grid-cols-[0.25fr_1.25fr] gap-4 p-4">
      
      <div id="sidebar" className="bg-blue-100 border border-amber-500"></div>
      
      <div id="dashboard" className="bg-white grid grid-rows-[0.15fr_0.1fr_1fr_1fr] gap-4">
        <h2 id="title" className="text-indigo-500 text-5xl font-mono mb-8">Administrator Dashboard</h2>
        
        
        <div id="quickView" className="grid grid-cols-4 gap-4 font-mono mb-4">
            <section id="patientTotal" className="bg-indigo-200 rounded-xl text-indigo-600 p-2">
              <div className="flex items-center justify-evenly">
                <label id="counterLabel" className="text-xl">Total Patients</label>
                <label id="counter" className="text-6xl p-4">19</label>
              </div>
            </section>

            <section id="patientActive" className="bg-green-200 rounded-xl text-green-700 p-2">
              <div className="flex items-center justify-evenly">
                <label id="counterLabel" className="text-xl">Checked-In Patient</label>
                <label id="counter" className="text-6xl p-4">01</label>
              </div>
            </section>

            <section id="patientCounter" className="bg-amber-200 rounded-xl text-amber-600 p-2">
              <div className="flex items-center justify-evenly">
                <label id="counterLabel" className="text-xl">Scheduled & Waiting</label>
                <label id="counter" className="text-6xl p-4">20</label>
              </div>
            </section>

            <section id="patientCounter" className="bg-red-200 rounded-xl text-red-600 p-2">
              <div className="flex items-center justify-evenly">
                <label id="counterLabel" className="text-xl">Cancelled</label>
                <label id="counter" className="text-6xl p-4">00</label>
              </div>
            </section>
        </div>
        
        <div className="bg-white grid grid-cols-[0.75fr_0.25fr] gap-2">
          <div id="appointmentList" className="bg-white border rounded-xl p-5">
            <h1 className="text-3xl text-indigo-700 font-mono mb-4">Today's Appointments</h1>
            
            <div className="grid grid-rows-1 md:grid-row
            s-3 gap-4">
                {Object.entries(appointments).map(([room, list]) => {
                  const next = list[1] || null;
                  const inside = list[0] || null;
                  return (
                    <div key={room} className="bg-amber-500 shadow rounded p-4">
                      <h2 className="text-xl font-semibold mb-2">🦷 {room}</h2>
                      <ul className="text-sm mb-2">
                        {list.map((appt, i) => (
                          <li key={i}>
                            • {appt.time} — {appt.name} ({appt.phone})
                          </li>
                        ))}
                      </ul>
                      <div className="text-sm mt-2">
                        <p>➤<strong>Next:</strong> {next?.name || "N/A"} ({next?.phone || "N/A"})</p>
                        <p>🧍<strong>Inside:</strong> {inside?.name} (Counter: #{list.indexOf(inside) + 1})</p>
                      </div>
                    </div>
                  );
                })}
            </div>

          </div>
          <div id="quickSchedule" className="bg-indigo-200 border rounded-xl p-5">
            <Calendar id="Calendar">

            </Calendar>
          </div>
          
        </div>

        <div className="bg-indigo-400">

        </div>
      </div>
    
    </main>
  );
}
