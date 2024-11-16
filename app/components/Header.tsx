import Link from 'next/link'

export default function Header() {
    return (
        <header>
            <nav className="font-sans flex flex-col text-center sm:flex-row sm:text-left sm:justify-between py-4 px-6 bg-white shadow sm:items-baseline w-full">
                <div className="mb-2 sm:mb-0">
                    <Link
                        href="/"
                        className="text-2xl no-underline text-grey-darkest hover:text-blue-dark"
                    >
                        Home
                    </Link>
                </div>
                <div>
                    <Link
                        href="/services"
                        className="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2"
                    >
                        Services
                    </Link>
                    <Link
                        href="/contacts"
                        className="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2"
                    >
                        Contact Us
                    </Link>
                </div>
            </nav>
        </header>
    )
}
