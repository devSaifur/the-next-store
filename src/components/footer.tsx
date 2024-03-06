export default function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="mx-auto py-10">
        <p className="text-center text-xs text-black">
          &copy; {new Date().getFullYear()} The Next Store, Inc. All rights
          reserved.
        </p>
      </div>
    </footer>
  )
}
