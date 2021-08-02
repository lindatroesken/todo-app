package de.neuefische.backend.controller;

import de.neuefische.backend.model.Todo;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;


@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
class TodoControllerTest {

    @LocalServerPort
    private int port;

    @Autowired
    private TestRestTemplate testRestTemplate;

    @Test
    public void testEmptyTodosControllerGET() {
        String url = String.format("http://localhost:%d/api/todo", port);
        ResponseEntity<Todo[]> actualTodoResponse = testRestTemplate.getForEntity(url, Todo[].class);

        HttpStatus actualStatus = actualTodoResponse.getStatusCode();
        assertEquals(HttpStatus.OK, actualStatus);

        Todo[] actualTodoResponseBody = actualTodoResponse.getBody();
        assertNotNull(actualTodoResponseBody);
        assertEquals(0, actualTodoResponseBody.length);
    }

}
