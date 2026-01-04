"use client"

import * as React from "react"
import {
    ChevronRight,
    FileText,
    LayoutDashboard,
    ChevronDown,
    Search,
    Settings,
    HelpCircle,
    PanelLeftClose,
    PanelLeftOpen,
    Flame,
    ImageIcon,
    FileImage,
    ArrowRightLeft,
    RefreshCw,
    ShieldCheck,
    Wrench,
    Files
} from "lucide-react"

const categoryIconMap: Record<string, { icon: React.ElementType, color: string }> = {
    "PDF HOT TOOLS": { icon: Flame, color: "text-orange-500" },
    "PDF TO IMAGE": { icon: ImageIcon, color: "text-blue-500" },
    "IMAGE TO PDF": { icon: FileImage, color: "text-green-500" },
    "CONVERT TO PDF": { icon: ArrowRightLeft, color: "text-indigo-500" },
    "PDF CONVERT": { icon: RefreshCw, color: "text-purple-500" },
    "PDF SECURITY": { icon: ShieldCheck, color: "text-red-500" },
    "PDF TOOLS": { icon: Wrench, color: "text-slate-500" },
};
import { cn } from "@/lib/utils"
import { toolCategories } from "@/lib/tool-categories"
import { toolIcons } from "@/lib/tool-icons"
import { Button } from "@/components/ui/button"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

export function AppSidebar() {
    const [isCollapsed, setIsCollapsed] = React.useState(false)

    return (
        <aside
            className={cn(
                "hidden lg:flex flex-col h-screen sticky top-0 border-r border-primary/5 bg-background/20 backdrop-blur-[100px] transition-all duration-500 ease-in-out z-50",
                isCollapsed ? "w-[80px]" : "w-[280px]"
            )}
        >
            {/* Sidebar Header - Logo */}
            <div className="h-16 flex items-center px-6 border-b border-primary/5">
                <a href="/" className="flex items-center gap-3 group">
                    <div className="bg-primary rounded-xl p-2 shadow-lg shadow-primary/20 group-hover:rotate-6 transition-transform">
                        <FileText className="h-5 w-5 text-white" />
                    </div>
                    {!isCollapsed && (
                        <span className="font-black text-xl tracking-tighter text-foreground whitespace-nowrap opacity-100 transition-opacity duration-300">
                            PDF<span className="text-primary">BOSS</span>
                        </span>
                    )}
                </a>
            </div>

            {/* Sidebar Content */}
            <div className="flex-1 overflow-y-auto overflow-x-hidden py-6 px-4 custom-scrollbar">
                <div className="space-y-6">
                    {/* Dashboard Link */}
                    <div className="space-y-1">
                        <a
                            href="/"
                            className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-bold text-primary bg-primary/5 hover:bg-primary/10 transition-all"
                        >
                            <LayoutDashboard className="h-5 w-5 shrink-0" />
                            {!isCollapsed && <span>Dashboard</span>}
                        </a>
                    </div>

                    {/* Tool Categories */}
                    <div className="space-y-1">
                        {!isCollapsed && (
                            <p className="px-3 text-[10px] font-black text-muted-foreground/60 uppercase tracking-[0.2em] mb-3">
                                Toolbox Category
                            </p>
                        )}

                        <Accordion type="multiple" defaultValue={["item-0"]} className="w-full space-y-1">
                            {toolCategories.map((category, idx) => (
                                <AccordionItem key={idx} value={`item-${idx}`} className="border-none">
                                    <AccordionTrigger
                                        className={cn(
                                            "flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-bold text-muted-foreground hover:text-foreground hover:bg-primary/5 transition-all !transition-none outline-none",
                                            isCollapsed && "justify-center"
                                        )}
                                        showChevron={!isCollapsed}
                                    >
                                        <div className="flex items-center gap-3 min-w-0 flex-1">
                                            {(() => {
                                                const mapping = categoryIconMap[category.label.toUpperCase()];
                                                const Icon = mapping?.icon || Files;
                                                return <Icon className={cn("h-5 w-5 shrink-0 transition-colors", mapping?.color)} />;
                                            })()}
                                            {!isCollapsed && <span className="truncate">{category.label}</span>}
                                        </div>
                                    </AccordionTrigger>
                                    {!isCollapsed && (
                                        <AccordionContent className="pt-1 pb-2 px-2 space-y-0.5 animate-none">
                                            {category.tools.map((tool, toolIdx) => {
                                                // @ts-ignore
                                                const Icon = toolIcons[tool.href]
                                                return (
                                                    <a
                                                        key={toolIdx}
                                                        href={tool.href}
                                                        className="flex items-center gap-3 px-3 py-2 rounded-lg text-[13px] font-bold text-muted-foreground hover:text-foreground hover:bg-primary/5 transition-all group"
                                                    >
                                                        <div className={cn(
                                                            "p-1.5 rounded-lg transition-all duration-300 group-hover:scale-110",
                                                            idx % 5 === 0 ? "bg-blue-500/10 text-blue-500" :
                                                                idx % 5 === 1 ? "bg-orange-500/10 text-orange-500" :
                                                                    idx % 5 === 2 ? "bg-green-500/10 text-green-500" :
                                                                        idx % 5 === 3 ? "bg-indigo-500/10 text-indigo-500" :
                                                                            "bg-purple-500/10 text-purple-500"
                                                        )}>
                                                            {Icon && <Icon className="h-4 w-4" />}
                                                        </div>
                                                        <span className="flex-1 truncate">{tool.name}</span>
                                                        <ChevronRight className="h-3 w-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-primary" />
                                                    </a>
                                                )
                                            })}
                                        </AccordionContent>
                                    )}
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </div>
            </div>

            {/* Sidebar Footer */}
            <div className="p-4 border-t border-primary/5 space-y-2">


                <Button
                    variant="ghost"
                    className={cn(
                        "w-full h-12 rounded-xl text-muted-foreground hover:text-foreground hover:bg-primary/5 transition-all text-sm font-bold gap-3 px-3",
                        isCollapsed && "justify-center"
                    )}
                    onClick={() => setIsCollapsed(!isCollapsed)}
                >
                    {isCollapsed ? <PanelLeftOpen className="h-5 w-5" /> : <PanelLeftClose className="h-5 w-5" />}
                    {!isCollapsed && <span className="flex-1 text-left">Collapse Sidebar</span>}
                </Button>
            </div>
        </aside>
    )
}
