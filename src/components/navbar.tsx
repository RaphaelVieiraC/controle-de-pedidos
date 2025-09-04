"use client"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Menu, Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export function Navbar() {
  const { setTheme } = useTheme()

  return (
    <header className="flex items-center justify-between px-6 py-4 border-b bg-background shadow-sm">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon">
            <Menu className="h-6 w-6" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-64">
          <nav className="flex flex-col gap-4 mt-6">
            <a href="#" className="hover:text-primary">Home</a>
            <a href="#" className="hover:text-primary">Serviços</a>
            <a href="#" className="hover:text-primary">Sobre</a>
            <a href="#" className="hover:text-primary">Contato</a>
          </nav>
        </SheetContent>
      </Sheet>

      <div className="text-xl font-bold">Controle de pedidos</div>

      <nav className="hidden md:flex gap-6 items-center">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon">
              <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => setTheme("light")}>
              Light
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("dark")}>
              Dark
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("system")}>
              System
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <a href="#" className="hover:text-primary">Home</a>
        <a href="#" className="hover:text-primary">Login</a>
      </nav>
    </header>
  )
}
