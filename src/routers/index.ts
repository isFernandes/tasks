import taskRoutes from "./task.routes"

const router = [
  taskRoutes.createTaskRouter,
  taskRoutes.showTaskRouter,
  taskRoutes.listTaskRouter,
  taskRoutes.updateTaskRouter,
  taskRoutes.changeAllTaskRouter,
  taskRoutes.deleteTaskRouter
]

export = router