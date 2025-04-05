function ASEProjects() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2">
            <label htmlFor="my_modal_7">
                <div className="container mx-auto">
                    <img
                        className="transition duration-1000 ease-in-out opacity-25 hover:opacity-100 cursor-pointer"
                        src="https://images.unsplash.com/photo-1594720872243-05e790c91d04?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1350&amp;q=80"/>
                </div>
                <input type="checkbox" id="my_modal_7" className="modal-toggle"/>
                <div className="modal">
                    <div className="top-0 h-screen flex flex-col items-center justify-center">
                        <ASEProjects/>
                    </div>
                    <label className="modal-backdrop" htmlFor="my_modal_7">Close</label>
                </div>
            </label>
            <label htmlFor="my_modal_6">
                <div className="container mx-auto">
                    <img
                        className="transition duration-1000 ease-in-out opacity-25 hover:opacity-100 cursor-pointer"
                        src="https://images.unsplash.com/photo-1594720872243-05e790c91d04?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1350&amp;q=80"/>
                </div>
                <input type="checkbox" id="my_modal_6" className="modal-toggle"/>
                <div className="modal">
                    <div className="top-0 h-screen flex flex-col items-center justify-center">
                        <ASEProjects/>
                    </div>
                    <label className="modal-backdrop" htmlFor="my_modal_6">Close</label>
                </div>
            </label>
        </div>
    )
}

export default ASEProjects;