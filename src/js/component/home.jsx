import React, { useState } from "react";
import ElementsList from "./Elementslist.jsx";
import Input from "./input.jsx";
import ListCounter from "./listcounter.jsx";
import ListDefault from "./listdefault.jsx";
import List from "./list.jsx";
import Card from "./card.jsx";

const Home = () => {
  const [task, setTask] = useState("");
  const [list, setList] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    setList([...list, task]);
    setTask("");
  }
  console.log(task);
  console.log(list);

  function handleDelete(i) {
    const deleteTask = [...list];
    deleteTask.splice(i, 1);
    setList(deleteTask);
  }

  return (
    <Card>
      <Input handleSubmit={handleSubmit} task={task} setTask={setTask}/>
      <List>
        {list.length > 0 ? (
          list.map((task, i) => {
            return <ElementsList handleDelete={handleDelete} task={task} i={i}/>;
          })
        ) : (
          <ListDefault />
        )}
        <ListCounter list={list} />
      </List>
    </Card>
  );
};

export default Home;