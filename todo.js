const todoList = () => {
<<<<<<< HEAD
  all = []
  const add = (todoItem) => {
    all.push(todoItem)
  }
  const markAsComplete = (index) => {
    all[index].completed = true
  }

  const overdue = () => {
    // Write the date check condition here and return the array of overdue items accordingly.
 
  return all.filter((item) => item.dueDate < new Date().toLocaleDateString("en-CA"));
  }

  const dueToday = () => {
      return all.filter((item) => item.dueDate === new Date().toLocaleDateString("en-CA"));

  }

  const dueLater = () => {
      return all.filter((item) => item.dueDate > new Date().toLocaleDateString("en-CA"));

  }

  const toDisplayableList = (list) => {
    // Format the To-Do list her
    return list.map(item => `${item.completed ? '[x]' : '[ ]'} ${item.title} ${item.dueDate === new Date().toLocaleDateString("en-CA") ? '' : item.dueDate}`).join("\n")
    
    
  }

  return { all, add, markAsComplete, overdue, dueToday, dueLater, toDisplayableList };
}

// ####################################### #
// DO NOT CHANGE ANYTHING BELOW THIS LINE. #
// ####################################### #

module.exports = todoList;
=======
    let dateToday = new Date();
    const today = formattedDate(dateToday);
    let all = [];
    const add = (todoItem) => {
      all.push(todoItem);
    };
    const markAsComplete = (index) => {
      all[index].completed = true;
    };
  
    const overdue = () => {
      return all.filter((todo) => {
        return todo.dueDate < today;
      });
    };
  
    const dueToday = () => {
      return all.filter((todo) => {
        return todo.dueDate === today;
      });
    };
  
    const dueLater = () => {
      return all.filter((todo) => {
        return todo.dueDate > today;
      });
    };
  
    // eslint-disable-next-line no-unused-vars
    const toDisplayableList = (list) => {
      return list
        .map((todo) => {
          return `[${todo.completed ? "x" : " "}] ${todo.title} ${
            todo.dueDate !== today ? todo.dueDate : " "
          }`.trim();
        })
        .join("\n");
    };
  
    return {
      all,
      add,
      markAsComplete,
      overdue,
      dueToday,
      dueLater,
    };
  };
  
  const formattedDate = (d) => {
    return d.toISOString().split("T")[0];
  };
  
  module.exports = todoList;
>>>>>>> 777f6eea61d6efeaf108ccd530db818930c2e22f
