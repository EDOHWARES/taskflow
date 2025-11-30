"use client"

import { useState } from "react"
import { Clock, Pencil, Trash2, Check } from "lucide-react"
import { cn } from "@/lib/utils"

export interface Task {
  id: string
  name: string
  deadline: string
  priority: "P1" | "P2" | "P3"
  completed: boolean
}

interface TaskCardProps {
  task: Task
  onToggle: (id: string) => void
  onEdit: (id: string) => void
  onDelete: (id: string) => void
  index: number
}

const priorityStyles = {
  P1: {
    badge: "bg-destructive/10 text-destructive ring-1 ring-destructive/20",
    label: "High",
  },
  P2: {
    badge: "bg-warning/10 text-warning ring-1 ring-warning/20",
    label: "Medium",
  },
  P3: {
    badge: "bg-primary/10 text-primary ring-1 ring-primary/20",
    label: "Low",
  },
}

export function TaskCard({ task, onToggle, onEdit, onDelete, index }: TaskCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [isChecked, setIsChecked] = useState(task.completed)

  const handleToggle = () => {
    setIsChecked(!isChecked)
    onToggle(task.id)
  }

  const formatDeadline = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    })
  }

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn(
        "group relative flex items-center gap-4 p-4 rounded-xl bg-card border border-border transition-all duration-300 ease-out opacity-0 animate-fade-in-up",
        isHovered && "bg-secondary/50 border-border/80 -translate-y-0.5 shadow-lg shadow-black/10",
        isChecked && "opacity-60",
      )}
      style={{ animationDelay: `${index * 0.08}s`, animationFillMode: "forwards" }}
    >
      {/* Custom Checkbox */}
      <button
        onClick={handleToggle}
        className={cn(
          "relative flex-shrink-0 w-5 h-5 rounded-md border-2 transition-all duration-300 ease-out",
          isChecked
            ? "bg-primary border-primary"
            : "border-muted-foreground/40 hover:border-primary/60 hover:bg-primary/10",
        )}
      >
        <Check
          className={cn(
            "absolute inset-0 w-full h-full p-0.5 text-primary-foreground transition-all duration-300",
            isChecked ? "opacity-100 scale-100" : "opacity-0 scale-50",
          )}
        />
      </button>

      {/* Task Content */}
      <div className="flex-1 min-w-0">
        <p
          className={cn(
            "text-sm font-medium text-card-foreground transition-all duration-300 truncate",
            isChecked && "line-through text-muted-foreground",
          )}
        >
          {task.name}
        </p>

        <div className="flex items-center gap-3 mt-1.5">
          {/* Deadline */}
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <Clock className="w-3 h-3" />
            <span>{formatDeadline(task.deadline)}</span>
          </div>

          {/* Priority Badge */}
          <span
            className={cn(
              "px-2 py-0.5 text-xs font-medium rounded-full transition-all duration-300",
              priorityStyles[task.priority].badge,
            )}
          >
            {priorityStyles[task.priority].label}
          </span>
        </div>
      </div>

      {/* Actions - Visible on hover */}
      <div
        className={cn(
          "flex items-center gap-1 transition-all duration-300 ease-out",
          isHovered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-2",
        )}
      >
        <button
          onClick={() => onEdit(task.id)}
          className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-all duration-200 hover:scale-110"
          aria-label="Edit task"
        >
          <Pencil className="w-4 h-4" />
        </button>
        <button
          onClick={() => onDelete(task.id)}
          className="p-2 rounded-lg text-muted-foreground hover:text-destructive hover:bg-destructive/10 transition-all duration-200 hover:scale-110"
          aria-label="Delete task"
        >
          <Trash2 className="w-4 h-4" />
        </button>
      </div>

      {/* Subtle glow effect on hover */}
      <div
        className={cn(
          "absolute inset-0 rounded-xl bg-gradient-to-r from-primary/5 via-transparent to-primary/5 opacity-0 transition-opacity duration-500 pointer-events-none",
          isHovered && "opacity-100",
        )}
      />
    </div>
  )
}
