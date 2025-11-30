"use client"

import type React from "react"

import { useState } from "react"
import { Plus, Calendar, Flag } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

type Priority = "P1" | "P2" | "P3"

const priorityConfig = {
  P1: {
    label: "P1",
    bg: "bg-destructive/10",
    text: "text-destructive",
    activeBg: "bg-destructive",
    activeText: "text-destructive-foreground",
  },
  P2: {
    label: "P2",
    bg: "bg-warning/10",
    text: "text-warning",
    activeBg: "bg-warning",
    activeText: "text-primary-foreground",
  },
  P3: {
    label: "P3",
    bg: "bg-primary/10",
    text: "text-primary",
    activeBg: "bg-primary",
    activeText: "text-primary-foreground",
  },
}

export function TaskInputForm() {
  const [taskName, setTaskName] = useState("")
  const [deadline, setDeadline] = useState("")
  const [priority, setPriority] = useState<Priority>("P2")
  const [isFocused, setIsFocused] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement actual task creation logic
    console.log({ taskName, deadline, priority })
    setTaskName("")
    setDeadline("")
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={cn(
        "relative p-6 rounded-2xl bg-card border border-border transition-all duration-500 ease-out animate-fade-in-up stagger-2",
        isFocused
          ? "shadow-[0_8px_40px_-12px_var(--glow)] border-primary/30"
          : "shadow-lg shadow-black/10 hover:shadow-xl hover:shadow-black/20",
      )}
    >
      {/* Gradient accent line */}
      <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="flex flex-col gap-4">
        {/* Main Input Row */}
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Input
              type="text"
              placeholder="What needs to be done?"
              value={taskName}
              onChange={(e) => setTaskName(e.target.value)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              className={cn(
                "h-12 px-4 text-base bg-secondary/50 border-transparent rounded-xl transition-all duration-300",
                "placeholder:text-muted-foreground/60",
                "focus:bg-secondary focus:border-primary/50 focus:shadow-[0_0_0_3px_var(--glow)]",
              )}
            />
          </div>

          {/* Deadline Picker */}
          <div className="relative">
            <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
            <Input
              type="date"
              value={deadline}
              onChange={(e) => setDeadline(e.target.value)}
              className={cn(
                "h-12 pl-10 pr-4 w-full sm:w-44 bg-secondary/50 border-transparent rounded-xl transition-all duration-300",
                "focus:bg-secondary focus:border-primary/50",
                "[&::-webkit-calendar-picker-indicator]:opacity-50 [&::-webkit-calendar-picker-indicator]:hover:opacity-100 [&::-webkit-calendar-picker-indicator]:cursor-pointer",
              )}
            />
          </div>
        </div>

        {/* Bottom Row - Priority & Submit */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          {/* Priority Selector */}
          <div className="flex items-center gap-2">
            <Flag className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground mr-2">Priority:</span>
            <div className="flex gap-1.5 p-1 bg-secondary/50 rounded-lg">
              {(Object.keys(priorityConfig) as Priority[]).map((p) => {
                const config = priorityConfig[p]
                const isActive = priority === p
                return (
                  <button
                    key={p}
                    type="button"
                    onClick={() => setPriority(p)}
                    className={cn(
                      "px-3 py-1.5 text-xs font-semibold rounded-md transition-all duration-300 ease-out",
                      isActive
                        ? `${config.activeBg} ${config.activeText} shadow-sm scale-105`
                        : `${config.bg} ${config.text} hover:scale-105`,
                    )}
                  >
                    {config.label}
                  </button>
                )
              })}
            </div>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={!taskName.trim()}
            className={cn(
              "h-11 px-6 rounded-xl font-semibold transition-all duration-300 ease-out",
              "bg-gradient-to-r from-primary to-primary/80 text-primary-foreground",
              "hover:scale-105 hover:shadow-[0_8px_30px_-8px_var(--glow)]",
              "active:scale-100",
              "disabled:opacity-50 disabled:hover:scale-100 disabled:hover:shadow-none",
            )}
          >
            <Plus className="w-4 h-4 mr-2" />
            Add Task
          </Button>
        </div>
      </div>
    </form>
  )
}
