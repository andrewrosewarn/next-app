import RegisterForm from "@/components/RegisterForm";

export default function MyStaff() {
  return (
    <>
      <h1>My Staff</h1>
      <div className="mt-5">
        <p>This is the my staff page which is a server component with a client component</p>
      </div>
      <RegisterForm />
    </>
  );
}
