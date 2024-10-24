import React, { useState } from "react";

const WorkShiftForm = () => {
  // State to manage which day is expanded
  const [expandedDays, setExpandedDays] = useState<{ [key: string]: boolean }>({
    Monday: false,
    Tuesday: false,
    Wednesday: false,
    Thursday: false,
    Friday: false,
    Saturday: false,
    Sunday: false,
  });

  // State to store selected start and end shifts for each day
  const [shiftTimes, setShiftTimes] = useState<{
    [key: string]: { startShift: string; endShift: string };
  }>({
    Monday: { startShift: "", endShift: "" },
    Tuesday: { startShift: "", endShift: "" },
    Wednesday: { startShift: "", endShift: "" },
    Thursday: { startShift: "", endShift: "" },
    Friday: { startShift: "", endShift: "" },
    Saturday: { startShift: "", endShift: "" },
    Sunday: { startShift: "", endShift: "" },
  });

  // Toggle expand/collapse for a specific day
  const toggleDay = (day: string) => {
    setExpandedDays((prev) => ({
      ...prev,
      [day]: !prev[day],
    }));
  };

  // Handle change in shift times
  const handleShiftChange = (
    day: string,
    shiftType: "startShift" | "endShift",
    value: string
  ) => {
    setShiftTimes((prev) => ({
      ...prev,
      [day]: { ...prev[day], [shiftType]: value },
    }));
  };

  // Check if all start and end shifts are selected
  const isShiftSelected = () => {
    return Object.values(shiftTimes).some(
      (times) => times.startShift && times.endShift
    );
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-xl font-semibold text-center mb-4">
          Customize Employee Work Shifts
        </h2>
        <p className="text-gray-600 text-center mb-6">
          Set up default work days and shift times for your employees
        </p>

        <div>
          {Object.keys(expandedDays).map((day) => (
            <div key={day} className="mb-4">
              <div className="flex justify-between items-center">
                <span className="text-lg">{day}</span>
                <button
                  className="text-xl focus:outline-none"
                  onClick={() => toggleDay(day)}
                >
                  {expandedDays[day] ? "-" : "+"}
                </button>
              </div>
              {expandedDays[day] && (
                <div className="mt-2 p-2 bg-gray-50 rounded-md">
                  {/* Flexbox to arrange Start Shift and End Shift in a row */}
                  <div className="flex items-center gap-4">
                    <div className="w-1/2">
                      <label className="block mb-2 text-sm">Start Shift</label>
                      <select
                        className="w-full p-2 border border-gray-300 rounded"
                        value={shiftTimes[day].startShift}
                        onChange={(e) =>
                          handleShiftChange(day, "startShift", e.target.value)
                        }
                      >
                        <option value="">08:00 AM</option>
                        <option>09:00 AM</option>
                        <option>10:00 AM</option>
                      </select>
                    </div>

                    <div className="w-1/2">
                      <label className="block mb-2 text-sm">End Shift</label>
                      <select
                        className="w-full p-2 border border-gray-300 rounded"
                        value={shiftTimes[day].endShift}
                        onChange={(e) =>
                          handleShiftChange(day, "endShift", e.target.value)
                        }
                      >
                        <option value="">04:00 PM</option>
                        <option>05:00 PM</option>
                        <option>06:00 PM</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <button
          className={`w-full mt-6 p-3 rounded-lg ${
            isShiftSelected()
              ? "bg-[#6200EE] text-white"
              : "bg-[#EFE6FD] text-[#CEB0FA]"
          }`}
          disabled={!isShiftSelected()} // Disable button if no shifts are selected
        >
          Save and Proceed
        </button>
      </div>
    </div>
  );
};

export default WorkShiftForm;
