package de.neuefische.backend.service;


import de.neuefische.backend.model.Status;
import de.neuefische.backend.model.Todo;
import de.neuefische.backend.repo.TodoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

import static org.springframework.util.Assert.hasText;
import static org.springframework.util.Assert.notNull;

@Service
public class TodoService {

    private final TodoRepository todoRepository;

    @Autowired
    public TodoService(TodoRepository todoRepository) {
        this.todoRepository = todoRepository;
    }

    public List<Todo> getAll() {
        return todoRepository.findAll();
    }

    public Todo create(Todo todo) {
        // check if all business requirements are met
        notNull(todo, "Todo must not be null to be created");
        hasText(todo.getDescription(), "Todo must have a valid description to be created");

        // set user input to "creation" default status OPEN
        todo.setStatus(Status.OPEN);

        return todoRepository.create(todo);
    }
}
