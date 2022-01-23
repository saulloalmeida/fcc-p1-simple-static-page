import Footer from "./Footer";

export default function StaticPage() {
    return (
        <div className="h-screen bg-slate-800 flex flex-col justify-start items-center">
            <h1 className="text-4xl text-white font-semibold text-center p-4">Fun facts about React</h1>
            <ul className="list-disc marker:text-cyan-400 marker:text-xl text-white font-medium">
                <li className="p-2">Was first released in 2013</li>
                <li className="p-2">Was originally created by Jordan Walke</li>
                <li className="p-2">Has well over 100k stars  on Github</li>
                <li className="p-2">Is maintained by Facebook</li>
                <li className="p-2">Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
            <Footer/>
        </div>
    )
}