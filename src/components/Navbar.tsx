export default function Navbar() {
  return (
    <div className="p-5 bg-dark text-light flex justify-between items-center">
      <a href="/" className="text-2xl font-bold">
        Miraya
      </a>
      <a href="/auth/signin" className="px-5 py-2 bg-pink rounded-full">
        Signin
      </a>
    </div>
  );
}
