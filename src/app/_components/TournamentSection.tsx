import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle } from "lucide-react"

export const TournamentSection = () => {
  return (
    <section id="tournament" className="bg-slate-50 py-20 md:py-28">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-[800px] text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Tournament Structure</h2>
          <p className="mt-6 text-lg text-muted-foreground">
            A meticulously designed bracket system ensures fair play and maximum excitement.
          </p>
        </div>

        <div className="mt-16">
          <Tabs defaultValue="format" className="mx-auto max-w-[800px]">
            <TabsList className="grid w-full grid-cols-3 mb-6">
              <TabsTrigger value="format">Format</TabsTrigger>
              <TabsTrigger value="rules">Rules</TabsTrigger>
              <TabsTrigger value="schedule">Schedule</TabsTrigger>
            </TabsList>
            <TabsContent value="format" className="mt-6 space-y-4">
              <div className="rounded-lg border p-8 shadow-sm">
                <h3 className="text-2xl font-bold">Swiss Tournament Format</h3>
                <div className="mt-6 bg-red-50 p-4 rounded-md text-red-800 font-medium mb-8">
                  Guaranteed minimum of 6 games for every team!
                </div>
                <ul className="mt-6 space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-red-600" />
                    <span>Swiss-system format with 6 preliminary rounds for all teams</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-red-600" />
                    <span>Top 32 teams advance to single-elimination playoff brackets</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-red-600" />
                    <span>Teams of 2 players each</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-red-600" />
                    <span>All games are best-of-1, with championship final being best-of-3</span>
                  </li>
                </ul>
                
                <div className="mt-8 pt-6 border-t border-slate-200">
                  <h4 className="text-xl font-semibold mb-4">How Swiss Format Works</h4>
                  <p className="text-muted-foreground mb-4">In the Swiss system, teams are paired in each round based on their current record:</p>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <div className="mt-1 h-5 w-5 flex-shrink-0 rounded-full bg-red-100 flex items-center justify-center text-red-600 font-bold text-xs">1</div>
                      <span>Round 1: Random pairings</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-1 h-5 w-5 flex-shrink-0 rounded-full bg-red-100 flex items-center justify-center text-red-600 font-bold text-xs">2</div>
                      <span>Subsequent rounds: Teams with similar records play each other</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-1 h-5 w-5 flex-shrink-0 rounded-full bg-red-100 flex items-center justify-center text-red-600 font-bold text-xs">3</div>
                      <span>No team plays the same opponent twice</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-1 h-5 w-5 flex-shrink-0 rounded-full bg-red-100 flex items-center justify-center text-red-600 font-bold text-xs">4</div>
                      <span>After 6 rounds, teams are ranked by their win-loss record</span>
                    </li>
                  </ul>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="rules" className="mt-6 space-y-4">
              <div className="rounded-lg border p-8 shadow-sm">
                <h3 className="text-2xl font-bold">Official Rules</h3>
                <ul className="mt-6 space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-red-600" />
                    <span>Standard 10-cup triangle formation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-red-600" />
                    <span>Re-racking into standard triangles is done automatically when 6 or 3 cups are left. Last cup is centered to the back row.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-red-600" />
                    <span>Bounce shots count as two cups and can be blocked.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-red-600" />
                    <span>Redemption round when all cups are eliminated.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-red-600" />
                    <span>Game length: 20 minutes maximum for Swiss rounds</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-red-600" />
                    <span>Tiebreakers determined by cup differential and swiss-format magic</span>
                  </li>
                </ul>
              </div>
            </TabsContent>
            <TabsContent value="schedule" className="mt-6 space-y-4">
              <div className="rounded-lg border p-8 shadow-sm">
                <h3 className="text-2xl font-bold">Event Schedule</h3>
                <ul className="mt-6 space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-red-600" />
                    <span>12:00 - Registration and check-in</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-red-600" />
                    <span>13:00 - Swiss rounds begin (6 rounds, approximately 40 minutes each)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-red-600" />
                    <span>17:15 - Top 32 teams announced</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-red-600" />
                    <span>18:00 - Single-elimination bracket begins</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-red-600" />
                    <span>21:00 - Championship finals (best-of-3) and award ceremony</span>
                  </li>
                </ul>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  )
}