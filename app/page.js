import { redirect } from "next/navigation";

//redirect directly to login page for now()
export default async function LoginPage() {
  return (
    redirect('/login')
  );
}
