package de.neuefische.backend.model;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.util.UUID;

@ToString
@Setter
@Getter
public class Todo {

    private final String id;
    private String description;
    private Status status;

    public Todo() {
        id = UUID.randomUUID().toString();
    }
}
