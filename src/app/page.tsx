import Link from "next/link"
import Image from "next/image"
import { Calendar, MapPin, Trophy, Users, Clock, CheckCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function BeerPongBattleRoyale() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto max-w-6xl px-4 flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl">
            <span className="text-red-600">BEER PONG</span>
            <span className="bg-red-600 text-white px-2 py-1 rounded-md">BATTLE ROYALE</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#about" className="text-sm font-medium hover:underline underline-offset-4">
              About
            </Link>
            <Link href="#tournament" className="text-sm font-medium hover:underline underline-offset-4">
              Tournament
            </Link>
            <Link href="#prizes" className="text-sm font-medium hover:underline underline-offset-4">
              Prizes
            </Link>
            <Link href="#registration" className="text-sm font-medium hover:underline underline-offset-4">
              Registration
            </Link>
            <Link href="#faq" className="text-sm font-medium hover:underline underline-offset-4">
              FAQ
            </Link>
          </nav>
          <Button asChild size="sm" className="bg-red-600 hover:bg-red-700">
            <Link href="#registration">Register Now</Link>
          </Button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0 bg-black/70 z-10" />
          <div className="relative h-[80vh] bg-black">
            <Image
              src="/placeholder.svg?height=800&width=1600"
              alt="Beer Pong Battle Royale"
              fill
              className="object-cover opacity-70"
              priority
            />
            <div className="container mx-auto max-w-6xl px-4 relative z-20 flex h-full flex-col items-center justify-center text-center text-white">
              <div className="space-y-6">
                <div className="inline-block rounded-md bg-red-600 px-3 py-1 text-sm font-semibold">
                  FINLAND'S BIGGEST BEER PONG TOURNAMENT
                </div>
                <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                  BEER PONG <br />
                  <span className="text-red-500">BATTLE ROYALE</span>
                </h1>
                <p className="mx-auto max-w-[700px] text-lg md:text-xl">
                  128 teams. One champion. Massive cash prizes.
                </p>
                <div className="flex flex-wrap justify-center gap-6 text-sm">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-5 w-5" />
                    <span>Coming Soon</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-5 w-5" />
                    <span>Helsinki, Finland</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-5 w-5" />
                    <span>128 Teams</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Trophy className="h-5 w-5" />
                    <span>Cash Prizes</span>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row justify-center gap-4 pt-6">
                  <Button asChild size="lg" className="bg-red-600 hover:bg-red-700">
                    <Link href="#registration">Register Your Team</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="border-white text-white bg-transparent">
                    <Link href="#tournament">Tournament Details</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 md:py-28">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="mx-auto max-w-[800px] text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                Finland's Ultimate Beer Pong Experience
              </h2>
              <p className="mt-6 text-lg text-muted-foreground">
                Organized by Aalto Beer Pong and Unilife, the Beer Pong Battle Royale brings together the best beer pong
                players from across Finland for an epic tournament of skill, strategy, and fun.
              </p>
            </div>

            <div className="mt-16 grid gap-8 md:grid-cols-3">
              <Card className="transform transition-transform hover:scale-105">
                <CardContent className="pt-8 pb-6 px-6">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-red-100">
                    <Trophy className="h-7 w-7 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold">Epic Competition</h3>
                  <p className="mt-3 text-muted-foreground">
                    128 teams will battle through multiple rounds in a tournament designed to crown the ultimate beer
                    pong champions.
                  </p>
                </CardContent>
              </Card>
              <Card className="transform transition-transform hover:scale-105">
                <CardContent className="pt-8 pb-6 px-6">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-red-100">
                    <Users className="h-7 w-7 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold">Community Event</h3>
                  <p className="mt-3 text-muted-foreground">
                    More than just a tournament, it's a celebration of student culture and community with music, food,
                    and entertainment.
                  </p>
                </CardContent>
              </Card>
              <Card className="transform transition-transform hover:scale-105">
                <CardContent className="pt-8 pb-6 px-6">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-red-100">
                    <Clock className="h-7 w-7 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold">Unforgettable Experience</h3>
                  <p className="mt-3 text-muted-foreground">
                    A full day of excitement, competition, and memories that will last long after the final cup is sunk.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Prizes Section */}
        <section id="prizes" className="py-20 md:py-28">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="mx-auto max-w-[800px] text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Massive Prize Pool</h2>
              <p className="mt-6 text-lg text-muted-foreground">Largest prize pool in the history of finnish Beer Pong!</p>
            </div>

            <div className="mt-16 grid gap-8 md:grid-cols-2">
              <Card className="border-2 border-yellow-500 bg-gradient-to-b from-yellow-50 to-white transform transition-transform hover:scale-105 shadow-lg">
                <CardContent className="pt-8 pb-6 px-6 text-center">
                  <h3 className="text-2xl font-bold">1st Place</h3>
                  <div className="my-6 text-5xl font-extrabold text-yellow-600">€500</div>
                  <p className="text-muted-foreground">
                    Plus championship trophy and title of Finland's Beer Pong Champions
                  </p>
                </CardContent>
              </Card>
              <Card className="border-2 border-slate-400 bg-gradient-to-b from-slate-50 to-white transform transition-transform hover:scale-105 shadow-md">
                <CardContent className="pt-8 pb-6 px-6 text-center">
                  <h3 className="text-2xl font-bold">2nd Place</h3>
                  <div className="my-6 text-5xl font-extrabold text-slate-600">€200</div>
                  <p className="text-muted-foreground">Plus sponsor gift packages</p>
                </CardContent>
              </Card>
              <Card className="border-2 border-amber-700 bg-gradient-to-b from-amber-50 to-white transform transition-transform hover:scale-105 shadow-md">
                <CardContent className="pt-8 pb-6 px-6 text-center">
                  <h3 className="text-2xl font-bold">3rd Place</h3>
                  <div className="my-6 text-5xl font-extrabold text-amber-700">€100</div>
                  <p className="text-muted-foreground">Plus sponsor gift packages</p>
                </CardContent>
              </Card>
              <Card className="border-2 border-amber-700 bg-gradient-to-b from-amber-50 to-white transform transition-transform hover:scale-105 shadow-md">
                <CardContent className="pt-8 pb-6 px-6 text-center">
                  <h3 className="text-2xl font-bold">4th-8th Place</h3>
                  <div className="my-6 text-5xl font-extrabold text-amber-700">€50</div>
                </CardContent>
              </Card>
            </div>

            
          </div>
        </section>

        {/* Tournament Section */}
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

        {/* Registration Section */}
        <section id="registration" className="bg-red-600 py-20 md:py-28 text-white">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="mx-auto max-w-[800px] text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Register Your Team</h2>
              <p className="mt-6 text-lg text-red-100">
                Secure your spot in Finland's biggest beer pong tournament before all slots are filled!
              </p>
            </div>

            <div className="mt-16 grid gap-8 md:grid-cols-2">
              <Card className="bg-white shadow-lg">
                <CardContent className="pt-8 pb-6 px-6">
                  <h3 className="text-2xl font-bold">Registration Details</h3>
                  <ul className="mt-6 space-y-4">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-red-600" />
                      <span>Students €20 per team (2 players)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-red-600" />
                      <span>Non-Students €25 per team (2 players)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-red-600" />
                      <span>Limited to 128 teams - first come, first served</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-red-600" />
                      <span>Registration includes tournament entry and a welcome package</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-red-600" />
                      <span>Registration deadline: One week before the event</span>
                    </li>
                  </ul>
                  <Button className="mt-8 w-full bg-red-600 hover:bg-red-700 text-lg py-6">Register Now</Button>
                </CardContent>
              </Card>
              <Card className="bg-white shadow-lg">
                <CardContent className="pt-8 pb-6 px-6">
                  <h3 className="text-2xl font-bold">What's Included</h3>
                  <ul className="mt-6 space-y-4">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-red-600" />
                      <span>Full day tournament participation</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-red-600" />
                      <span>Welcome package with sponsor gifts and merchandise</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-red-600" />
                      <span>Access to after-party with special drink discounts ??</span>
                    </li>
                  </ul>
                  {/* <div className="mt-8 rounded-md bg-red-50 p-6 text-red-800">
                    <p className="text-base font-medium">
                      Only a few spots remaining! Register today to secure your place.
                    </p>
                  </div> */}
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Organizers Section */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="mx-auto max-w-[800px] text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Organized By</h2>

            </div>

            <div className="mt-16 grid gap-12 md:grid-cols-2">
              <div className="flex flex-col items-center text-center">
                <div className="h-40 w-40 overflow-hidden rounded-full bg-slate-100 shadow-md">
                  <Image
                    src="/placeholder.svg?height=160&width=160"
                    alt="Aalto Beer Pong"
                    width={160}
                    height={160}
                    className="h-full w-full object-cover"
                  />
                </div>
                <h3 className="mt-6 text-2xl font-bold">Aalto Beer Pong</h3>
                <p className="mt-4 max-w-md text-lg text-muted-foreground">
                  The original beer pong organization from Aalto University, organizing tournaments since 2011.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="h-40 w-40 overflow-hidden rounded-full bg-slate-100 shadow-md">
                  <Image
                    src="/placeholder.svg?height=160&width=160"
                    alt="Unilife"
                    width={160}
                    height={160}
                    className="h-full w-full object-cover"
                  />
                </div>
                <h3 className="mt-6 text-2xl font-bold">Unilife</h3>
                <p className="mt-4 max-w-md text-lg text-muted-foreground">
                  Finland's largest student event organization, bringing professional event management to the
                  tournament.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="bg-slate-50 py-20 md:py-28">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="mx-auto max-w-[800px] text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Frequently Asked Questions</h2>
              <p className="mt-6 text-lg text-muted-foreground">
                Everything you need to know about the Beer Pong Battle Royale.
              </p>
            </div>

            <div className="mt-16 mx-auto max-w-[800px] bg-white p-8 rounded-lg shadow-sm">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-lg font-medium">Who can participate?</AccordionTrigger>
                  <AccordionContent className="text-base">
                    The tournament is open to everyone 18 years and older. You don't need to be a student to
                    participate.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-lg font-medium">Do I need to bring my own equipment?</AccordionTrigger>
                  <AccordionContent className="text-base">
                    No, all equipment will be provided, including cups, balls, and tables. Just bring your A-game! (Note! Drinks are not included. BYOB)
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-lg font-medium">What's the refund policy?</AccordionTrigger>
                  <AccordionContent className="text-base">
                    You can transfer your registration to another team but no refunds will be issued. Team name can be changed up to 1 week before the tournament date.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-lg font-medium">Is there food available at the event?</AccordionTrigger>
                  <AccordionContent className="text-base">
                    No food will be provided by the event organizers. However, there are a couple of fast food restaurants and student cafeterias nearby. Please note that student cafeteria opening hours may vary, especially since the event takes place on a Saturday.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <AccordionTrigger className="text-lg font-medium">Can we bring our own beverages?</AccordionTrigger>
                  <AccordionContent className="text-base">
                    Yes.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-6">
                  <AccordionTrigger className="text-lg font-medium">Is there parking available?</AccordionTrigger>
                  <AccordionContent className="text-base">
                    Limited parking is available <i>nearby</i>. We recommend using public transportation.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-red-600 py-20 md:py-24 text-white">
          <div className="container mx-auto max-w-6xl px-4 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Ready to Become a Champion?</h2>
            <p className="mt-6 mx-auto max-w-[600px] text-lg text-red-100">
              Don't miss your chance to compete in Finland's biggest beer pong tournament and win amazing prizes!
            </p>
            <Button asChild size="lg" className="mt-10 bg-white text-red-600 hover:bg-red-100 text-lg px-8 py-6">
              <Link href="#registration">Register Your Team Now</Link>
            </Button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t bg-slate-900 text-white py-16">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="flex items-center gap-2 font-bold text-xl">
                <span className="text-red-500">BEER PONG</span>
                <span className="bg-red-500 text-white px-2 py-1 rounded-md">BATTLE ROYALE</span>
              </div>
              <p className="mt-6 text-slate-300">
                Finland's biggest beer pong tournament, bringing together the best players for an epic competition.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-6">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="#about" className="text-slate-300 hover:text-white">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#tournament" className="text-slate-300 hover:text-white">
                    Tournament
                  </Link>
                </li>
                <li>
                  <Link href="#prizes" className="text-slate-300 hover:text-white">
                    Prizes
                  </Link>
                </li>
                <li>
                  <Link href="#registration" className="text-slate-300 hover:text-white">
                    Registration
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-6">Contact</h3>
              <ul className="space-y-3">
                <li className="text-slate-300">Email: ville.strengell@pionblanc.fi</li>
                <li className="text-slate-300">Phone: +358 50 494 5684</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-6">Follow Us</h3>
              <div className="flex gap-6">
                {/* <Link href="#" className="text-slate-300 hover:text-white">
                  <span className="sr-only">Facebook</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-facebook"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </Link> */}
                <Link href="www.instagram.com/aaltobeerpong" className="text-slate-300 hover:text-white">
                  <span className="sr-only">Instagram</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-instagram"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </Link>
                {/* <Link href="#" className="text-slate-300 hover:text-white">
                  <span className="sr-only">Twitter</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-twitter"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                  </svg>
                </Link> */}
              </div>
            </div>
          </div>
          <div className="mt-12 border-t border-slate-800 pt-8 text-center text-sm text-slate-400">
            <p>© {new Date().getFullYear()} Beer Pong Battle Royale. All rights reserved.</p>
            <p className="mt-3">Organized by Aalto Beer Pong and Unilife. Drink responsibly.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}