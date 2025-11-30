import { DashboardLayout } from "@/components/dashboard-layout"
import { TaskInputForm } from "@/components/task-input-form"
import { TaskCardList } from "@/components/task-card-list"

export default function Home() {
  return (
    <DashboardLayout>
      <div className="flex flex-col gap-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground mb-2 animate-fade-in-up">
            Good morning, Alex
          </h1>
          <p className="text-muted-foreground animate-fade-in-up stagger-1">
            You have <span className="text-primary font-medium">5 tasks</span> to complete today
          </p>
        </div>

        <TaskInputForm />
        <TaskCardList />
      </div>
    </DashboardLayout>
  )
}
