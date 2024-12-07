import { useState } from 'react';

const habitData: number[] = [0, 3, 2, 5, 3, 2, 1, 7, 0, 5, 1, 6, 1, 6, 1];

const HabitChart = () => {
  const weeksToShow = 7; // Fixed number of weeks to display
  const [currentIndex, setCurrentIndex] = useState(0); // Track starting index for visible weeks

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - weeksToShow);
    }
  };

  const handleNext = () => {
    if (currentIndex + weeksToShow < habitData.length) {
      setCurrentIndex(currentIndex + weeksToShow);
    }
  };

  const visibleData = habitData.slice(currentIndex, currentIndex + weeksToShow);

  return (
    <div>
      <table id="chart">
        <tbody>
          {Array(7)
            .fill(null)
            .map((_row, i) => {
              // Start from the bottom row by reversing the index
              const reverseIndex = 6 - i; // 6 because there are 7 rows (0 to 6)
              return (
                <tr key={i}>
                  {Array(7)
                    .fill(null)
                    .map((_col, j): any => {
                      // Highlight the cell if the habitData value matches the row condition
                      return visibleData[j] > 0 &&
                        visibleData[j] >= reverseIndex + 1 ? (
                        <td
                          key={j}
                          className="bg-green-700 border-2 p-2 border-slate-700 w-10 h-10"
                        ></td>
                      ) : (
                        <td
                          key={j}
                          className="border-2 p-2 border-slate-700 w-10 h-10"
                        ></td>
                      );
                    })}
                </tr>
              );
            })}
          <tr>
            {/* Render the week numbers */}
            {visibleData.map((_, k) => (
              <td key={k} className="text-center font-bold">
                {currentIndex + k + 1}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
      <div className="flex justify-between mt-4">
        <button
          id="navPrevBtn"
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className="p-2 bg-slate-700 rounded disabled:opacity-50 text-sm"
        >
          Previous
        </button>
        <button
          id="navNextBtn"
          onClick={handleNext}
          disabled={currentIndex + weeksToShow >= habitData.length}
          className="p-2 bg-slate-700 rounded disabled:opacity-50 text-sm"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default HabitChart;
