export default function Projects() {
    return (
        <div className="projects-container min-h-screen py-12">
            <div className="max-w-7xl mx-auto px-4">
                <h1 className="text-4xl font-bold text-gray-900 mb-12">Projects</h1>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Project Card 1 */}
                    <div className="project-card p-6 bg-gray-800 rounded-lg shadow-lg text-white hover:shadow-xl transition-shadow duration-300">
                        <h2 className="text-2xl font-bold mb-4">Musix</h2>
                        <p className="text-gray-400 mb-4">AI generated music recommendation</p>
                        <button className="mt-4 px-4 py-2 bg-blue-600 rounded hover:bg-blue-700 transition">Learn More</button>
                    </div>

                    {/* Project Card 2 */}
                    <div className="project-card p-6 bg-gray-800 rounded-lg shadow-lg text-white hover:shadow-xl transition-shadow duration-300">
                        <h2 className="text-2xl font-bold mb-4">Movizzz</h2>
                        <p className="text-gray-400 mb-4">AI generated Movie recommendation</p>
                        <button className="mt-4 px-4 py-2 bg-blue-600 rounded hover:bg-blue-700 transition">Learn More</button>
                    </div>

                    {/* Project Card 3 */}
                    <div className="project-card p-6 bg-gray-800 rounded-lg shadow-lg text-white hover:shadow-xl transition-shadow duration-300">
                        <h2 className="text-2xl font-bold mb-4">Trends Analytics & Sentiment Mining</h2>
                        <p className="text-gray-400 mb-4">Gaming Applications sentiment analysis</p>
                        <button className="mt-4 px-4 py-2 bg-blue-600 rounded hover:bg-blue-700 transition">Learn More</button>
                    </div>

                    {/* Project Card 4 */}
                    <div className="project-card p-6 bg-gray-800 rounded-lg shadow-lg text-white hover:shadow-xl transition-shadow duration-300">
                        <h2 className="text-2xl font-bold mb-4">Smart Wildlife Monitoring</h2>
                        <p className="text-gray-400 mb-4">Real-time wildlife tracking system</p>
                        <button className="mt-4 px-4 py-2 bg-blue-600 rounded hover:bg-blue-700 transition">Learn More</button>
                    </div>

                    {/* Project Card 5 */}
                    <div className="project-card p-6 bg-gray-800 rounded-lg shadow-lg text-white hover:shadow-xl transition-shadow duration-300">
                        <h2 className="text-2xl font-bold mb-4">University Recruitment ERP System </h2>
                        <p className="text-gray-400 mb-4">Real-time wildlife tracking system</p>
                        <button className="mt-4 px-4 py-2 bg-blue-600 rounded hover:bg-blue-700 transition">Learn More</button>
                    </div>

                    
                </div>
            </div>
        </div>
    )
}