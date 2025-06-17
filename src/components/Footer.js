export default function Footer() {
  return (
    <footer className="text-center text-gray-500 text-sm p-4 mt-8">
      &copy; {new Date().getFullYear()} NewsFlash. All rights reserved.
    </footer>
  );
}