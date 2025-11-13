import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CheckIcon, ChevronDownIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface DashboardHeaderProps {
  title: string;
  subtitle: string;
}

const useCases = [
  { value: "customer-support", label: "Customer Support Use Case" },
  { value: "sales-assistant", label: "Sales Assistant Use Case" },
  { value: "data-analysis", label: "Data Analysis Use Case" },
  { value: "content-generation", label: "Content Generation Use Case" },
  { value: "code-review", label: "Code Review Use Case" },
];

const dateRanges = [
  { value: "24h", label: "24 hours" },
  { value: "7d", label: "7 days" },
  { value: "30d", label: "30 days" },
  { value: "all", label: "All time" },
];

export function DashboardHeader({ title, subtitle }: DashboardHeaderProps) {
  const [useCaseOpen, setUseCaseOpen] = useState(false);
  const [selectedUseCase, setSelectedUseCase] = useState("customer-support");
  const [selectedDateRange, setSelectedDateRange] = useState("7d");

  const selectedUseCaseLabel =
    useCases.find((uc) => uc.value === selectedUseCase)?.label ||
    "Select use case";
  const selectedDateRangeLabel =
    dateRanges.find((dr) => dr.value === selectedDateRange)?.label ||
    "Select range";

  return (
    <div className="bg-muted/50 rounded-lg p-6 mb-6">
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <h1 className="text-3xl font-bold text-foreground mb-2">{title}</h1>
          <p className="text-muted-foreground text-sm">{subtitle}</p>
        </div>

        <div className="flex items-center gap-3">
          {/* Use Case Dropdown */}
          <Popover open={useCaseOpen} onOpenChange={setUseCaseOpen}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                role="combobox"
                aria-expanded={useCaseOpen}
                className="w-[280px] justify-between bg-background"
              >
                <span className="truncate">{selectedUseCaseLabel}</span>
                <ChevronDownIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[280px] p-0" align="end">
              <Command>
                <CommandInput placeholder="Search use case..." />

                <CommandList>
                  <CommandEmpty>No use case found.</CommandEmpty>
                  <CommandGroup>
                    {useCases.map((useCase) => (
                      <CommandItem
                        key={useCase.value}
                        value={useCase.value}
                        onSelect={(currentValue) => {
                          setSelectedUseCase(currentValue);
                          setUseCaseOpen(false);
                        }}
                      >
                        <CheckIcon
                          className={cn(
                            "mr-2 h-4 w-4",
                            selectedUseCase === useCase.value
                              ? "opacity-100"
                              : "opacity-0"
                          )}
                        />

                        {useCase.label}
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>

          {/* Date Range Picker */}
          <div className="flex items-center gap-1 bg-background rounded-md border border-border p-1">
            {dateRanges.map((range) => (
              <Button
                key={range.value}
                variant={
                  selectedDateRange === range.value ? "default" : "ghost"
                }
                size="sm"
                onClick={() => setSelectedDateRange(range.value)}
                className="h-8 px-3"
              >
                {range.label}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
