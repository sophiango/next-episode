import './App.css'

function App() {

    return (
        <>
            <div className="relative full-width">
                <div
                    className="sticky top-0 h-screen flex flex-col items-center justify-center bg-gradient-to-b from-green-200 to-blue-200">
                    <div
                        className="full-width flex min-h-screen items-center bg-gradient-to-tr to-blue-700 from-indigo-900 p-10">
                        <div className="w-max">
                            <h3 className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 text-5xl text-white font-bold">
                                👋 Hello, I'm Sophia Ngo
                            </h3>
                            {/*<h3 className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 text-5xl text-white font-bold">*/}
                            {/*    👋 你好, 我是 Sophia Ngo*/}
                            {/*</h3>*/}
                            {/*<h3 className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 text-5xl text-white font-bold">*/}
                            {/*    👋 Xin chào, tôi là Sophia Ngo*/}
                            {/*</h3>*/}
                        </div>
                    </div>
                </div>
                <div
                    className="sticky top-0 h-screen flex flex-col items-center justify-center bg-gradient-to-b from-indigo-800 to-purple-800 text-white">
                    <div className="grid grid-cols-1 md:grid-cols-3">
                        <div className="container mx-auto">
                            <img
                                className="transition duration-1000 ease-in-out opacity-25 hover:opacity-100 cursor-pointer"
                                src="https://images.unsplash.com/photo-1594720872243-05e790c91d04?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1350&amp;q=80"/>

                        </div>
                        <div className="container mx-auto">
                            <img
                                className="transition duration-1000 ease-in-out opacity-25 hover:opacity-100 cursor-pointer"
                                src="https://images.unsplash.com/photo-1594720872243-05e790c91d04?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1350&amp;q=80"/>

                        </div>
                        <div className="container mx-auto">
                            <img
                                className="transition duration-1000 ease-in-out opacity-25 hover:opacity-100 cursor-pointer"
                                src="https://images.unsplash.com/photo-1594720872243-05e790c91d04?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1350&amp;q=80"/>

                        </div>
                    </div>
                </div>
                <div
                    className="sticky top-0 h-screen flex flex-col items-center justify-center bg-gradient-to-b from-purple-800 to-pink-800 text-white">
                    <ul className="timeline">
                        <li>
                            <div className="timeline-start timeline-box">First Macintosh computer</div>
                            <hr/>
                        </li>
                        <li>
                            <hr/>
                            <div className="timeline-end timeline-box">iMac</div>
                            <hr/>
                        </li>
                        <li>
                            <hr/>
                            <div className="timeline-start timeline-box">iPod</div>
                            <hr/>
                        </li>
                        <li>
                            <hr/>
                            <div className="timeline-end timeline-box">iPhone</div>
                            <hr/>
                        </li>
                        <li>
                            <hr/>
                            <div className="timeline-start timeline-box">Apple Watch</div>
                        </li>
                    </ul>
                </div>
                <div
                    className="sticky top-0 h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-200 to-indigo-100 text-black">
                    <h2 className="text-4xl font-bold">The Fourth slide</h2>
                </div>
            </div>
        </>
    )
}

export default App
