<<<<<<< HEAD
const todoList = require("../todo");
=======
/* eslint-disable no-undef */
const todoList = require("../todo");
const { all, markAsComplete, add, overdue, dueToday, dueLater } = todoList();
>>>>>>> 777f6eea61d6efeaf108ccd530db818930c2e22f

const {
  all,
  add,
  markAsComplete,
  overdue,
  dueToday,
  dueLater,
  toDisplayableList,
} = todoList();

describe("Todo list test suite", () => {
  beforeAll(() => {
    add({
        title: "test 0",
        dueDate: new Date().toLocaleDateString("en-CA"),
        completed: false,
      });
      add({
        title: "test 1",
        dueDate: new Date(new Date().setDate(new Date().getDate() - 1)),
        completed: false,
      });
      add({
        title: "test 2",
        dueDate: new Date(new Date().setDate(new Date().getDate() - 1)),
        completed: false,
      });
      add({
        title: "test 3",
        dueDate: new Date().toLocaleDateString("en-CA"),
        completed: false,
      });
      add({
        title: "test 4",
        dueDate: new Date(new Date().setDate(new Date().getDate() + 1)),
        completed: false,
      });
    
  });
  test("Should add new todo", () => {
    const length_before_adding = all.length;
    add({
      title: "test todo",
      dueDate: new Date().toLocaleDateString("en-CA"),
      completed: false,
    });
    expect(all.length).toBe(length_before_adding + 1);
  });
<<<<<<< HEAD
  test("should mark a todo as complete", () => {
    expect(all[0].completed).toBe(false);
    markAsComplete(0);
    expect(all[0].completed).toBe(true);
  });
  test('should retrive overdue items', () => { 
    overdue().forEach((e)=>{
        expect(e.dueDate< new Date().toLocaleDateString('en-CA')).toBe(true)
    });
   });
  test('should retrive due today items', () => { 
    dueToday().forEach((e)=>{
        expect(e.dueDate === new Date().toLocaleDateString('en-CA')).toBe(true)
    });
   });
  test('should retrive due later items', () => { 
    dueLater().forEach((e)=>{
        expect(e.dueDate > new Date().toLocaleDateString('en-CA')).toBe(true)
    });
   });
   
});
=======

  test("checks marking a todo as completed", () => {
    expect(all[0].completed).toEqual(false);
    markAsComplete(0);
    expect(all[0].completed).toEqual(true);
  });

  test("checks retrieval of overdue items", () => {
    expect(overdue().length).toEqual(0);
  });

  test("checks retrieval of due today items", () => {
    expect(dueToday().length).toEqual(3);
  });

  test("checks retrieval of due later items", () => {
    expect(dueLater().length).toEqual(0);
  });
});
>>>>>>> 777f6eea61d6efeaf108ccd530db818930c2e22f
