package de.neuefische.backend.repo;

import de.neuefische.backend.model.Todo;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Repository
public class TodoRepository {

    private final Map<String, Todo> todosMap = new HashMap<>();

    public List<Todo> findAll() {
        return new ArrayList<>(todosMap.values());
    }
}
