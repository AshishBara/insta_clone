function MiniProfile() {
    return (
        <div className="flex items-center justify-between
        mt-14 ml-10">
            <img
                className="rounded-full border p-[2px] w-16 h-16"
                src="https://links.papareact.com/3ke"
                alt="user avatar" />
            <div className="flex-1 mx-4">
                <h2 className="font-bold">Ashish</h2>
                <h3 className="text-sm text-gray-400">welcome to instagram</h3>
            </div>
            <button className="text-blue-400 text-sm font-semibold">Sign Out</button>
        </div>
    )
}

export default MiniProfile
