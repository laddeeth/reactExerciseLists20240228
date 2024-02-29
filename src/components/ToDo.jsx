const ToDo = ({ task, method, index, deleteMethod, id }) => {
  return (
    <li className={!(index % 2) && 'odd'}>
      {task}
      <button onClick={method}>Done</button>
      <button onClick={() => deleteMethod(id)}>Delete</button>
    </li>
  );
};

export default ToDo;
