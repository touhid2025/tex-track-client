import { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const ManageMCQs = () => {
  const [mcqs, setMcqs] = useState([]);
  const [editing, setEditing] = useState(null); // MCQ being edited

  useEffect(() => {
    axios.get("http://localhost:5000/api/mcqs").then(res => {
      setMcqs(res.data.data);
    });
  }, []);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "MCQ will be permanently deleted.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await axios.delete(`http://localhost:5000/api/mcqs/${id}`);
        setMcqs(mcqs.filter((q) => q._id !== id));
        Swal.fire("Deleted!", "MCQ has been deleted.", "success");
      }
    });
  };

  const handleEditSave = async () => {
    await axios.put(`http://localhost:5000/api/mcqs/${editing._id}`, editing);
    setEditing(null);
    Swal.fire("Updated!", "MCQ has been updated.", "success");
  };

  return (
    <div className="ml-64 p-6 max-w-4xl">
      <h2 className="text-2xl font-bold mb-4">Manage MCQs</h2>

      {mcqs.map((mcq) => (
        <div key={mcq._id} className="border p-4 rounded mb-4">
          {editing?._id === mcq._id ? (
            <>
              <input
                value={editing.question}
                onChange={(e) =>
                  setEditing({ ...editing, question: e.target.value })
                }
                className="border p-2 w-full mb-2"
              />
              {editing.options.map((opt, idx) => (
                <input
                  key={idx}
                  value={opt}
                  onChange={(e) => {
                    const newOpts = [...editing.options];
                    newOpts[idx] = e.target.value;
                    setEditing({ ...editing, options: newOpts });
                  }}
                  className="border p-2 w-full mb-1"
                />
              ))}
              <input
                value={editing.correctAnswer}
                onChange={(e) =>
                  setEditing({ ...editing, correctAnswer: e.target.value })
                }
                className="border p-2 w-full mb-2"
              />
              <input
                value={editing.category}
                onChange={(e) =>
                  setEditing({ ...editing, category: e.target.value })
                }
                className="border p-2 w-full mb-2"
              />
              <button
                onClick={handleEditSave}
                className="bg-green-500 text-white px-3 py-1 rounded mr-2"
              >
                Save
              </button>
              <button
                onClick={() => setEditing(null)}
                className="bg-gray-400 text-white px-3 py-1 rounded"
              >
                Cancel
              </button>
            </>
          ) : (
            <>
              <p className="font-semibold">{mcq.question}</p>
              <ul className="list-disc ml-6">
                {mcq.options.map((opt, i) => (
                  <li key={i}>{opt}</li>
                ))}
              </ul>
              <p>
                ✅ Correct: <strong>{mcq.correctAnswer}</strong>
              </p>
              <p>📚 Category: {mcq.category}</p>
              <div className="mt-2">
                <button
                  onClick={() => setEditing(mcq)}
                  className="bg-blue-500 text-white px-3 py-1 rounded mr-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(mcq._id)}
                  className="bg-red-500 text-white px-3 py-1 rounded"
                >
                  Delete
                </button>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default ManageMCQs;
