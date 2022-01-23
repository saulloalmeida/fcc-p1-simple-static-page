const logo = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png"

export default function Header() {
    return (
        <header>
            <nav className="flex justify-between bg-slate-900">
                <div className="flex items-center">
                    <img className="w-30 h-28" src={logo} alt="" />
                    <span className="text-3xl font-bold text-cyan-400">ReactFacts</span>
                </div>
                <span className="flex items-center text-xl font-semibold text-white mr-10">React Course - Project  1</span>
            </nav>
        </header>
    )
}

//export default Header