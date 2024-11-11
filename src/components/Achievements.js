import Image from 'next/image';

const Achievements = () => {
  return (
    <section id="achievements" className="mb-12 fade-in">
      <h2 className="text-3xl font-extrabold text-center mb-6" style={{ color: '#996232' }}>
        Achievement
      </h2>
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
