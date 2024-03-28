import './Footer.css'
import { GlobeAltIcon } from '@heroicons/react/24/outline';
import appStore from '../../assets/app-store.png';
import googlePlay from '../../assets/google-play.png';

const sitemap = [
    {
        title: "Product",
        links: ["Pricing", "Overview", "Browse", "Accessibility", "Five"],
    },
    {
        title: "Solutions",
        links: ["Brainstorming", "Ideation", "Wireframing", "Research", "Design"],
    },
    {
        title: "Support",
        links: ["Contact Us", "Developers", "Documentation", "Integrations", "Reports"],
    },
    {
        title: "Get the App",
        links: ["App Store", "Google Play", "Follow Us", "Social Media Icons"],
    },
];

const footerNavigation = [
    {
        title: "Terms",
        globeIcon: false,
    },
    {
        title: "Privacy",
        globeIcon: false,
    },
    {
        title: "Contact",
        globeIcon: false,
    },
    {
        title: "EN",
        globeIcon: true,
    },
]

const currentYear = new Date().getFullYear();

const Footer = () => {
    return (
        <div className="footer relative w-full text-sm xs:text-center sm:text-start">
            <div className="mx-auto w-full max-w-7xl px-8">
                <div className="mx-auto grid w-full grid-cols-1 gap-8 py-12 md:grid-cols-2 lg:grid-cols-4">
                    {sitemap.map(({ title, links }, key) => (
                        <div key={key} className="w-full">
                            <h3 className="mb-4 text-white font-medium">
                                {title}
                            </h3>
                            <ul className="space-y-1">
                                {links.map((link, key) => (
                                    <li key={key} className="text-blue-gray font-light opacity-90">
                                        {
                                            (link !== "App Store")
                                                ? (link !== "Google Play")
                                                    ? (link === "Social Media Icons")
                                                        ? <>
                                                            <a
                                                                href="#"
                                                                className="inline-block py-1 pr-2 xs:pr-0 transition-transform hover:text-orange-400"
                                                            >
                                                                <i className="bi bi-youtube px-2"></i>
                                                            </a>
                                                            <a
                                                                href="#"
                                                                className="inline-block py-1 pr-2 xs:pr-0 transition-transform hover:text-orange-400"
                                                            >
                                                                <i className="bi bi-facebook px-2"></i>
                                                            </a>
                                                            <a
                                                                href="#"
                                                                className="inline-block py-1 pr-2 xs:pr-0 transition-transform hover:text-orange-400"
                                                            >
                                                                <i className="bi bi-twitter px-2"></i>
                                                            </a>
                                                            <a
                                                                href="#"
                                                                className="inline-block py-1 pr-2 xs:pr-0 transition-transform hover:text-orange-400"
                                                            >
                                                                <i className="bi bi-instagram px-2"></i>
                                                            </a>
                                                            <a
                                                                href="#"
                                                                className="inline-block py-1 pr-2 xs:pr-0 transition-transform hover:text-orange-400"
                                                            >
                                                                <i className="bi bi-linkedin px-2"></i>
                                                            </a>
                                                        </>
                                                        :
                                                        <a
                                                            href="#"
                                                            className="inline-block py-1 pr-2 xs:pr-0 transition-transform hover:text-orange-400"
                                                        >
                                                            {link}
                                                        </a>
                                                    :
                                                    <a
                                                        href="#"
                                                        className="inline-block py-1 pr-2 xs:pr-0 transition-transform hover:text-orange-400"
                                                    >
                                                        <img src={googlePlay} />
                                                    </a>
                                                :
                                                <a
                                                    href="#"
                                                    className="inline-block py-1 pr-2 xs:pr-0 transition-transform hover:text-orange-400"
                                                >
                                                    <img src={appStore} />
                                                </a>
                                        }
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
                <div className="flex w-full flex-col items-center justify-center border-t border-neutral-700 xs:mb-10 xs:py-12 sm:py-0 md:flex-row md:justify-between">
                    <p className="mb-4 text-center font-normal text-blue-gray-900 md:mb-0">
                        Collers &copy; {currentYear}. All rights reserved.
                    </p>
                    <div className="flex gap-4 text-blue-gray-900 sm:justify-center">
                        <ul className='footer-navigation flex'>
                            {
                                footerNavigation.map(({ title, globeIcon }, key) => (
                                    <a href="#" className="footer-navigation-item flex font-light transition-opacity hover:opacity-80" key={key}>
                                        <li className='flex items-center p-5'>
                                            {
                                                globeIcon
                                                    ? (<GlobeAltIcon className="footer-navigation-globe-icon block h-8 w-8 pe-2" aria-hidden="true" />)
                                                    : <></>
                                            }
                                            {title}
                                        </li>
                                    </a>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Footer