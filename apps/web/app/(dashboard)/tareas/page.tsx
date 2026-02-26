import { getTasks } from "@/app/actions/tasks"
import { TasksClientPage } from "@/components/tasks/tasks-client-page"

export default async function TasksPage() {
    const tasks = await getTasks()

    return <TasksClientPage initialTasks={tasks} />
}
