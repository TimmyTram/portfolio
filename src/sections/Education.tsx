const Education = () => {
    return (
        <div className="w-full flex flex-col items-center mt-4 bg-royal-blue-solid p-4 rounded-lg shadow-lg">
            
            <h1 className="text-3xl font-bold">Education:</h1>
            <div className="w-full md:w-[50%] flex flex-col items-center mt-4 bg-black p-4 rounded-lg">
                <h2 className="text-2xl font-bold">San Francisco State University</h2>
                <p className="text-lg">Bachelor of Science in Computer Science</p>
                <p className="text-lg">Minor in Video Game Studies</p>
                <p className="text-lg">Graduated: December 2024</p>
                <p className="text-lg">GPA: 3.96</p>
            </div>
        </div>
    );
}

export default Education;