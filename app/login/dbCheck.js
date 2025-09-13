import { testDbConnection  } from "../lib/db";
import { redirect } from "next/navigation";

export default async function LoginPage() {
  const dbOk = await testDbConnection();

  console.log(dbOk);

  if (!dbOk) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="p-6 rounded-xl bg-red-100 text-red-700 shadow-lg text-center">
          ❌ Database cannot be reached.<br />
          Please try again later.
        </div>
      </div>
    );
  }

  return (
    redirect('/login')
  );
}
