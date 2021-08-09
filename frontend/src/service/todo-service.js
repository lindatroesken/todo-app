const nextTodoStatus = {
  OPEN: 'IN_PROGRESS',
  IN_PROGRESS: 'DONE',
}

export const nextStatus = status => nextTodoStatus[status]
