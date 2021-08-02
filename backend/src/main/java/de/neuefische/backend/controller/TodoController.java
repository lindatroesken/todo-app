package de.neuefische.backend.controller;

import de.neuefische.backend.model.Status;
import de.neuefische.backend.model.Todo;
import de.neuefische.backend.service.TodoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/todo")
public class TodoController {

    private TodoService todoService;

    @Autowired
    public TodoController(TodoService todoService) {
        this.todoService = todoService;
    }

    @GetMapping
    public List<Todo> getTodos() {
        return todoService.getAll();
    }

    @PostMapping
    public Todo addTodo(@RequestBody Todo todo) {
        return new Todo("1", "desc", Status.OPEN);
    }

    @PutMapping("{id}")
    public Todo moveTodo(@PathVariable("id") String todoId) {
        return new Todo("1", "desc", Status.IN_PROGRESS);
    }

    @DeleteMapping("{id}")
    public Todo deleteTodo(@PathVariable("id") String todoId) {
        return new Todo("1", "desc", Status.DONE);
    }
}
