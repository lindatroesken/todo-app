package de.neuefische.backend.repo;

import de.neuefische.backend.model.Todo;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;

@Repository
public class TodoRepository {

    // key == todo.id
    private final Map<String, Todo> todosMap = new HashMap<>();

    public List<Todo> findAll() {
        return new ArrayList<>(todosMap.values());
    }

    public Todo create(Todo todo) {
        // all persistence related issues are handled by the repo

        todo.setId(UUID.randomUUID().toString());
        todosMap.put(todo.getId(), todo);

        return todo;
    }
}
