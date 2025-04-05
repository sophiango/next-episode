function ProjectDetail() {
    return (
        <div className="flex flex-col gap-6 bg-base-200 rounded-box p-6 max-w-xl">
            <div className="flex justify-between items-center">
        <span className="text-sm">
            Courses and MOOCs
        </span>

                <span className="badge badge-primary badge-lg">Psychology</span>
            </div>
            <div className="flex flex-col gap-2">
                <h1 className="font-bold text-xl">Psychology - Course 5: Health and Behavior</h1>

                <span>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio eligendi similique
            exercitationem optio libero vitae accusamus cupiditate laborum eos
        </span>

                <span className="text-sm">
            Visit on
            <a className="link link-accent">edx.org</a>
            or
            <a className="link link-accent">classNamecentral.com</a>
        </span>
            </div>
            <div className="flex gap-2">
                <a className="btn btn-ghost btn-circle btn-sm text-lg">
                    <i className="fa-brands fa-twitter"></i>
                </a>

                <a className="btn btn-ghost btn-circle btn-sm text-lg">
                    <i className="fa-brands fa-facebook"></i>
                </a>

                <a className="btn btn-ghost btn-circle btn-sm text-lg">
                    <i className="fa-solid fa-link"></i>
                </a>
            </div>
        </div>
    )
}

export default ProjectDetail;