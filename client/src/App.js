// import React, { useEffect, useState } from "react";
// import axios from "axios";

// import { MdDelete } from "react-icons/md";
// import { FaEdit } from "react-icons/fa";

// function App() {

//   const [todo, setTodo] = useState([]);
//   const [text, setText] = useState("");
//   const [isUpdating, setIsUpdating] = useState(false);
//   const [todoId, setTodoId] = useState("");

//   // GET TODO
//   useEffect(() => {
//     getAllTodo();
//   }, []);

//   const getAllTodo = () => {
//     axios
//       .get("http://localhost:5000/get-todo")
//       .then((res) => setTodo(res.data))
//       .catch((err) => console.log(err));
//   };

//   // ADD TODO
//   const addTodo = () => {
//     axios
//       .post("http://localhost:5000/save-todo", { text })
//       .then(() => {
//         setText("");
//         getAllTodo();
//       })
//       .catch((err) => console.log(err));
//   };

//   // DELETE TODO
//   const deleteTodo = (_id) => {
//     axios
//       .delete("http://localhost:5000/delete-todo", {
//         data: { _id },
//       })
//       .then(() => getAllTodo())
//       .catch((err) => console.log(err));
//   };

//   // UPDATE TODO
//   const updateTodo = () => {
//     axios
//       .put("http://localhost:5000/update-todo", {
//         _id: todoId,
//         text,
//       })
//       .then(() => {
//         setText("");
//         setIsUpdating(false);
//         getAllTodo();
//       })
//       .catch((err) => console.log(err));
//   };

//   // EDIT BUTTON
//   const handleEdit = (_id, text) => {
//     setIsUpdating(true);
//     setText(text);
//     setTodoId(_id);
//   };

//   return (
//     <div style={styles.container}>
//       <h1>Todo App</h1>

//       <div style={styles.inputContainer}>
//         <input
//           type="text"
//           placeholder="Enter Todo"
//           value={text}
//           onChange={(e) => setText(e.target.value)}
//           style={styles.input}
//         />

//         <button
//           onClick={isUpdating ? updateTodo : addTodo}
//           style={styles.button}
//         >
//           {isUpdating ? "Update" : "Add"}
//         </button>
//       </div>

//       <div>
//         {todo.map((item) => (
//           <div key={item._id} style={styles.todo}>
//             <p>{item.text}</p>

//             <div style={styles.icons}>
//               <FaEdit
//                 style={styles.icon}
//                 onClick={() => handleEdit(item._id, item.text)}
//               />

//               <MdDelete
//                 style={styles.icon}
//                 onClick={() => deleteTodo(item._id)}
//               />
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// const styles = {
//   container: {
//     width: "500px",
//     margin: "50px auto",
//     textAlign: "center",
//     fontFamily: "Arial",
//   },

//   inputContainer: {
//     display: "flex",
//     gap: "10px",
//     marginBottom: "20px",
//   },

//   input: {
//     flex: 1,
//     padding: "10px",
//     fontSize: "16px",
//   },

//   button: {
//     padding: "10px 20px",
//     cursor: "pointer",
//   },

//   todo: {
//     display: "flex",
//     justifyContent: "space-between",
//     alignItems: "center",
//     background: "#f1f1f1",
//     padding: "10px",
//     marginBottom: "10px",
//     borderRadius: "5px",
//   },

//   icons: {
//     display: "flex",
//     gap: "10px",
//   },

//   icon: {
//     cursor: "pointer",
//     fontSize: "20px",
//   },
// };

// export default App;







import React, { useEffect, useState } from "react";
import axios from "axios";

import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

function App() {

  const [todo, setTodo] = useState([]);
  const [text, setText] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);
  const [todoId, setTodoId] = useState("");

  const BASE_URL = "https://todo-app-myoe.onrender.com";

  // GET TODO
  useEffect(() => {
    getAllTodo();
  }, []);

  const getAllTodo = () => {
    axios
      .get(`${BASE_URL}/get-todo`)
      .then((res) => setTodo(res.data))
      .catch((err) => console.log(err));
  };

  // ADD TODO
  const addTodo = () => {
    axios
      .post(`${BASE_URL}/save-todo`, { text })
      .then(() => {
        setText("");
        getAllTodo();
      })
      .catch((err) => console.log(err));
  };

  // DELETE TODO
  const deleteTodo = (_id) => {
    axios
      .delete(`${BASE_URL}/delete-todo`, {
        data: { _id },
      })
      .then(() => getAllTodo())
      .catch((err) => console.log(err));
  };

  // UPDATE TODO
  const updateTodo = () => {
    axios
      .put(`${BASE_URL}/update-todo`, {
        _id: todoId,
        text,
      })
      .then(() => {
        setText("");
        setIsUpdating(false);
        getAllTodo();
      })
      .catch((err) => console.log(err));
  };

  // EDIT BUTTON
  const handleEdit = (_id, text) => {
    setIsUpdating(true);
    setText(text);
    setTodoId(_id);
  };

  return (
    <div style={styles.container}>
      <h1>Todo App</h1>

      <div style={styles.inputContainer}>
        <input
          type="text"
          placeholder="Enter Todo"
          value={text}
          onChange={(e) => setText(e.target.value)}
          style={styles.input}
        />

        <button
          onClick={isUpdating ? updateTodo : addTodo}
          style={styles.button}
        >
          {isUpdating ? "Update" : "Add"}
        </button>
      </div>

      <div>
        {todo.map((item) => (
          <div key={item._id} style={styles.todo}>
            <p>{item.text}</p>

            <div style={styles.icons}>
              <FaEdit
                style={styles.icon}
                onClick={() => handleEdit(item._id, item.text)}
              />

              <MdDelete
                style={styles.icon}
                onClick={() => deleteTodo(item._id)}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    width: "500px",
    margin: "50px auto",
    textAlign: "center",
    fontFamily: "Arial",
  },

  inputContainer: {
    display: "flex",
    gap: "10px",
    marginBottom: "20px",
  },

  input: {
    flex: 1,
    padding: "10px",
    fontSize: "16px",
  },

  button: {
    padding: "10px 20px",
    cursor: "pointer",
  },

  todo: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    background: "#f1f1f1",
    padding: "10px",
    marginBottom: "10px",
    borderRadius: "5px",
  },

  icons: {
    display: "flex",
    gap: "10px",
  },

  icon: {
    cursor: "pointer",
    fontSize: "20px",
  },
};

export default App;