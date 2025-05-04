const Education = () => {
    return (
        <>
            {/* Header */}
            <div id="Education" className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-lg shadow-lg p-6 mb-8 border-6 border-royal-gold-solid">
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Education</h1>
                <p className="text-blue-100 text-lg">My academic journey and achievements.</p>
            </div>

            {/* Education Details */}
            <div className="bg-gradient-to-tr from-regal-gray-opacity via-royal-blue-opacity to-black rounded-lg shadow-md overflow-hidden border-6 border-royal-gold-solid">
                <div className="p-6 md:p-8">
                    <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                        <span className="inline-block w-1 h-6 bg-blue-600 mr-3"></span>
                        San Francisco State University
                    </h2>
                    <p className="text-white text-lg mb-2">Bachelor of Science in Computer Science</p>
                    <p className="text-white text-lg mb-2">Minor in Video Game Studies</p>
                    <p className="text-white text-lg mb-2">Graduated: December 2024</p>
                    <p className="text-white text-lg">GPA: 3.96</p>
                </div>
            </div>
        </>
    );
};

export default Education;