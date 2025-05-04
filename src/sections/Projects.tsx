import Card from "../components/Card";

const Projects = () => {
    return (
        <div className="w-full flex flex-col items-center mt-4 bg-royal-blue-solid p-4 rounded-lg shadow-md">
            <h1 className="text-2xl font-bold mb-4">View My Projects:</h1>

            <Card 
                title="Coffee Spot"
                description="A full-stack application targeting young college students or remote workers in finding curated 'third places' or Study Spots in Bay Area."
                imageUrl="/CardImages/coffeeSpot.png"
                slug="coffee-spot"
            />
        </div>



    );
}

export default Projects;