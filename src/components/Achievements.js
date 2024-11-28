import Image from 'next/image';

const Achievements = () => {
  return (
    <section id="achievements" className="mb-12 fade-in">
               {/* Header */}
               <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold mb-4">
                        <span className="bg-gradient-to-r from-yellow-600 to-yellow-800 bg-clip-text text-transparent">
                       Achievements
                        </span>
                    </h2>
                    <div className="w-24 h-1 bg-yellow-600 mx-auto rounded-full"></div>
                </div>
      <div className="flex justify-center items-center space-x-6">
        
        {/* LeetCode 100 Days Badge */}
        <div className="text-center">
          <a href="https://leetcode.com/u/Eclipsewolf28/" target="_blank" rel="noopener noreferrer">
            <Image
              src="https://assets.leetcode.com/static_assets/marketing/2024-100-new.gif"
              alt="100 Days LeetCode Badge"
              width={160} // Adjust width and height as needed
              height={160}
              className="mb-2"
            />
          </a>
          <p className="text-sm text-gray-600">100 Days of LeetCode</p>
        </div>

        {/* LeetCode 50 Days Badge */}
        <div className="text-center">
          <a href="https://leetcode.com/u/Eclipsewolf28/" target="_blank" rel="noopener noreferrer">
            <Image
              src="https://assets.leetcode.com/static_assets/marketing/2024-50.gif"
              alt="50 Days LeetCode Badge"
              width={160}
              height={160}
              className="mb-2"
            />
          </a>
          <p className="text-sm text-gray-600">50 Days of LeetCode</p>
        </div>

        {/* March Challenge Badge */}
        <div className="text-center">
          <a href="https://leetcode.com/u/Eclipsewolf28/" target="_blank" rel="noopener noreferrer">
            <Image
              src="https://leetcode.com/static/images/badges/2024/gif/2024-03.gif"
              alt="March Challenge Badge"
              width={160}
              height={160}
              className="mb-2"
            />
          </a>
          <p className="text-sm text-gray-600">March Challenge</p>
        </div>

        {/* September Challenge Badge */}
        <div className="text-center">
          <a href="https://leetcode.com/u/Eclipsewolf28/" target="_blank" rel="noopener noreferrer">
            <Image
              src="https://leetcode.com/static/images/badges/2024/gif/2024-09.gif"
              alt="September Challenge Badge"
              width={160}
              height={160}
              className="mb-2"
            />
          </a>
          <p className="text-sm text-gray-600">September Challenge</p>
        </div>

      </div>
    </section>
  );
};

export default Achievements;
