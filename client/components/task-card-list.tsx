"use client"

import { TaskCard, type Task } from "@/components/task-card"
import { Sparkles, Archive } from "lucide-react"

// TODO: Fetch tasks from API - these are placeholder tasks
const todaysTasks: Task[] = [
  {
    id: "1",
    name: "Review Q4 marketing strategy document",
    deadline: "2024-12-15",
    priority: "P1",
    completed: false,
  },
  {
    id: "2",
    name: "Prepare presentation slides for client meeting",
    deadline: "2024-12-16",
    priority: "P1",
    completed: false,
  },
  {
    id: "3",
    name: "Update project timeline with new milestones",
    deadline: "2024-12-17",
    priority: "P2",
    completed: true,
  },
]

const backlogTasks: Task[] = [
  {
    id: "4",
    name: "Research competitor pricing models",
    deadline: "2024-12-20",
    priority: "P2",
    completed: false,
  },
  {
    id: "5",
    name: "Draft blog post on industry trends",
    deadline: "2024-12-22",
    priority: "P3",
    completed: false,
  },
  {
    id: "6",
    name: "Organize team building event",
    deadline: "2024-12-25",
    priority: "P3",
    completed: false,
  },
]

export function TaskCardList() {
  const handleToggle = (id: string) => {
    // TODO: Implement actual toggle logic with API
    console.log("Toggle task:", id)
  }

  const handleEdit = (id: string) => {
    // TODO: Implement edit functionality
    console.log("Edit task:", id)
  }

  const handleDelete = (id: string) => {
    // TODO: Implement delete functionality
    console.log("Delete task:", id)
  }

  return (
    <div className="space-y-8">
      {/* Today's Focus Section */}
      <section className="animate-fade-in-up stagger-3">
        <div className="flex items-center gap-3 mb-4">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-primary" />
            <h2 className="text-lg font-semibold text-foreground">Today's Focus</h2>
          </div>
          <span className="text-xs font-medium px-2 py-1 rounded-full bg-primary/10 text-primary">AI Recommended</span>
          <div className="flex-1 h-px bg-gradient-to-r from-border to-transparent ml-2" />
        </div>

        <div className="space-y-3">
          {todaysTasks.map((task, index) => (
            <TaskCard
              key={task.id}
              task={task}
              onToggle={handleToggle}
              onEdit={handleEdit}
              onDelete={handleDelete}
              index={index}
            />
          ))}
        </div>
      </section>

      {/* Backlog Section */}
      <section className="animate-fade-in-up stagger-4">
        <div className="flex items-center gap-3 mb-4">
          <div className="flex items-center gap-2">
            <Archive className="w-5 h-5 text-muted-foreground" />
            <h2 className="text-lg font-semibold text-foreground">Backlog</h2>
          </div>
          <span className="text-xs font-medium px-2 py-1 rounded-full bg-secondary text-muted-foreground">
            {backlogTasks.length} tasks
          </span>
          <div className="flex-1 h-px bg-gradient-to-r from-border to-transparent ml-2" />
        </div>

        <div className="space-y-3">
          {backlogTasks.map((task, index) => (
            <TaskCard
              key={task.id}
              task={task}
              onToggle={handleToggle}
              onEdit={handleEdit}
              onDelete={handleDelete}
              index={index}
            />
          ))}
        </div>
      </section>
    </div>
  )
}
