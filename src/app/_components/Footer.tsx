import Link from "next/link"

export const Footer = () => {
  return (
    <footer className="border-t bg-slate-900 text-white py-16">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2 font-bold text-xl">
              <span className="text-red-500">BEER PONG</span>
              <span className="bg-red-500 text-white px-2 py-1 rounded-md">BATTLE ROYALE</span>
            </div>
            <p className="mt-6 text-slate-300">
              Finland's biggest beer pong tournament, bringing together the best players for an epic competition.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#about" className="text-slate-300 hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link href="#tournament" className="text-slate-300 hover:text-white">
                  Tournament
                </Link>
              </li>
              <li>
                <Link href="#prizes" className="text-slate-300 hover:text-white">
                  Prizes
                </Link>
              </li>
              <li>
                <Link href="#registration" className="text-slate-300 hover:text-white">
                  Registration
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-6">Contact</h3>
            <ul className="space-y-3">
              <li className="text-slate-300">Email: ville.strengell@pionblanc.fi</li>
              <li className="text-slate-300">Phone: +358 50 494 5684</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-6">Follow Us</h3>
            <div className="flex gap-6">
              {/* <Link href="#" className="text-slate-300 hover:text-white">
                <span className="sr-only">Facebook</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-facebook"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </Link> */}
              <Link href="www.instagram.com/aaltobeerpong" className="text-slate-300 hover:text-white">
                <span className="sr-only">Instagram</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-instagram"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </Link>
              {/* <Link href="#" className="text-slate-300 hover:text-white">
                <span className="sr-only">Twitter</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-twitter"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </Link> */}
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-slate-800 pt-8 text-center text-sm text-slate-400">
          <p>© {new Date().getFullYear()} Beer Pong Battle Royale. All rights reserved.</p>
          <p className="mt-3">Organized by Aalto Beer Pong and Unilife. Drink responsibly.</p>
        </div>
      </div>
    </footer>
  )
}