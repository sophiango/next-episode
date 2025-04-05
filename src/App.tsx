import './App.css'
import ContactFooter from "./ContactFooter.tsx";
import Timeline from "./Timeline.tsx";

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
                    className="sticky top-0 h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-200 to-indigo-100 text-black">
                    <div className="grid grid-cols-1 md:grid-cols-3">
                        <button className="btn btn-secondary">ASE</button>
                        <button className="btn btn-secondary">SWE</button>
                        <button className="btn btn-secondary">VPG</button>
                    </div>
                </div>
                <div
                    className="sticky top-0 h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-200 to-indigo-100 text-black">
                    <Timeline/>
                </div>
                <div
                    className="sticky top-0 h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-200 to-indigo-100 text-black">
                    <h2 className="text-4xl font-bold">The Fourth slide</h2>
                </div>
                <div
                    className="sticky">
                    <ContactFooter/>
                </div>
            </div>
        </>
    )
}

export default App
