"use client";

import { Download, RefreshCcw, Text } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ComapreDate } from "@/components/CompareSensorDate";
import { Component } from "@/components/StatsSensor";
import { PieChartSensor } from "@/components/PieChart";

export default function Home() {
  return (
    <main className="flex flex-col items-start p-10 gap-4 pb-20">
      <h1 className="text-2xl font-semibold">Datele senzorului de deformare</h1>
      <Card className="text-sm font-medium p-4 text-muted-foreground w-full">
        ID senzor: <span className="text-primary">12did12sf3</span>
        <br />
        Data: <span className="text-primary">12/12/2022</span>
        <br />
        Ultima actualizare:{" "}
        <span className="text-primary">12/12/2022 12:30</span>
        <div>
          Status activitate:{" "}
          <span className="text-green-700 bg-green-500/20 rounded-lg text-xs py-1 px-4">
            Inregistrare date
          </span>
        </div>
      </Card>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
        <div className="flex-1">
          <Component />
        </div>
        <div className="flex-1">
          <ComapreDate />
        </div>
        <div className="flex-1">
          <PieChartSensor />
        </div>
      </div>
      <div className="flex fixed bottom-0 left-0 items-center justify-center md:justify-between px-6 bg-primary h-14 w-full">
        <div className=" justify-center items-center hidden md:flex text-white text-sm font-medium">
          Doctorat © 2025
        </div>
        <div className="flex items-center gap-4">
          <Button className="rounded-xl" variant={"secondary"}>
            <Download />
            Exporta datele
          </Button>
          <Button className="rounded-xl" variant={"secondary"}>
            <Text />
            Rapoarte
          </Button>
          <Button className="rounded-xl" variant={"secondary"}>
            <RefreshCcw />
            Actualizeaza
          </Button>
        </div>
      </div>
    </main>
  );
}
