import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const AddMCQ = () => {
  const [formData, setFormData] = useState({
    question: "",
    options: ["", "", "", ""],
    correctAnswer: "",
    category: "",
  });

  const handleOptionChange = (index, value) => {
    const newOptions = [...formData.options];
    newOptions[index] = value;
    setFormData({ ...formData, options: newOptions });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
         console.log(formData)
    try {
      const res = await axios.post("http://localhost:5000/api/mcqs", formData);

      if (res.data.success) {
        console.log('ami biddosto')
        Swal.fire({
          title: "✅ Success!",
          text: "MCQ added successfully!",
          icon: "success",
          confirmButtonColor: "#3085d6",
        });

        // Reset form
        setFormData({
          question: "",
          options: ["", "", "", ""],
          correctAnswer: "",
          category: "",
        });
      }
    } catch (err) {
      console.error(err);
      Swal.fire({
        title: "❌ Error",
        text: "Failed to add MCQ. Please try again.",
        icon: "error",
        confirmButtonColor: "#d33",
      });
    }
  };

  return (
    <div className="ml-64 p-6 max-w-2xl">
      <h2 className="text-2xl font-bold mb-4">Add New MCQ</h2>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow space-y-4"
      >
        <div>
          <label className="block font-medium">Question:</label>
          <input
            type="text"
            className="w-full p-2 border rounded"
            value={formData.question}
            onChange={(e) =>
              setFormData({ ...formData, question: e.target.value })
            }
            required
          />
        </div>

        {formData.options.map((opt, idx) => (
          <div key={idx}>
            <label className="block font-medium">Option {idx + 1}:</label>
            <input
              type="text"
              className="w-full p-2 border rounded"
              value={opt}
              onChange={(e) => handleOptionChange(idx, e.target.value)}
              required
            />
          </div>
        ))}

        <div>
          <label className="block font-medium">Correct Answer:</label>
          <select
            className="w-full p-2 border rounded"
            value={formData.correctAnswer}
            onChange={(e) =>
              setFormData({ ...formData, correctAnswer: e.target.value })
            }
            required
          >
            <option value="">Select correct option</option>
            {formData.options.map((opt, idx) => (
              <option key={idx} value={opt}>
                {opt || `Option ${idx + 1}`}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block font-medium">Category:</label>
          <input
            type="text"
            className="w-full p-2 border rounded"
            value={formData.category}
            onChange={(e) =>
              setFormData({ ...formData, category: e.target.value })
            }
            required
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 cursor-pointer text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Add MCQ
        </button>
      </form>
    </div>
  );
};

export default AddMCQ;
