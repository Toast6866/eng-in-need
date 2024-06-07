import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [name, setName] = useState('Seth Gledhill');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const project = { title, body, name };

    fetch('http://localhost:8000/projects/', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(project)
    }).then(() => {
      // history.go(-1);
      navigate.push('/');
    })
  }

  return (
    <div className="create">
      <h2>Add a New Project</h2>
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input 
          type="text" 
          required 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Discription:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Blog author:</label>
        <select
          value={name}
          onChange={(e) => setName(e.target.value)}
        >
          <option value="Seth Gledhill">Seth Gedhill</option>
          <option value="Elizabeth Tremblay">Elizabeth Tremblay</option>
        </select>
        <button>Add Project</button>
      </form>
    </div>
  );
}
 
export default Create;