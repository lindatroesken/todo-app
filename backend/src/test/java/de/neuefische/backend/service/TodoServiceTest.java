package de.neuefische.backend.service;

import de.neuefische.backend.model.Status;
import de.neuefische.backend.model.Todo;
import de.neuefische.backend.repo.TodoRepository;
import org.junit.jupiter.api.Test;

import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;


class TodoServiceTest {

    @Test
    public void testRepoIsEmpty() {
        // given
        TodoService todoService = new TodoService(new TodoRepository());

        // when
        List<Todo> actual = todoService.getAll();

        //then
        assertTrue(actual.isEmpty());
    }

    @Test
    public void testRepoReturnsAValue() {
        // given
        TodoRepository todoRepositoryMock = mock(TodoRepository.class);
        when(todoRepositoryMock.findAll()).thenReturn(
                List.of(
                        new Todo("1", "description", Status.OPEN)
                )
        );
        TodoService todoService = new TodoService(todoRepositoryMock);

        // when
        List<Todo> actual = todoService.getAll();

        // then
        assertFalse(actual.isEmpty());

        Todo actualFirstTodo = actual.get(0);
        assertEquals("1", actualFirstTodo.getId());
        assertEquals("description", actualFirstTodo.getDescription());
    }

}
