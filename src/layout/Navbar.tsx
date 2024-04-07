
const Navbar = () => {
    return (
        <nav className="bg-white my-4 p-4 shadow-lg flex justify-between items-center ">
            <div className="w-2/3">
                <img />
                Image
            </div>

            <div className="hidden md:flex md:justify-evenly md:w-1/3">
                <div><a>Home</a></div>
                <div><a>Profile</a></div>
                <div><a>Settings</a></div>
            </div>
        </nav>
    )
}

export default Navbar