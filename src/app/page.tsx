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
        <div className="container flex h-16 items-center justify-between">
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
          <div className="absolute inset-0 bg-black/60 z-10" />
          <div className="relative h-[70vh] bg-black">
            <Image
              src="/placeholder.svg?height=800&width=1600"
              alt="Beer Pong Battle Royale"
              fill
              className="object-cover opacity-80"
              priority
            />
            <div className="container relative z-20 flex h-full flex-col items-center justify-center text-center text-white">
              <div className="space-y-4 md:space-y-6">
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
                <div className="flex flex-wrap justify-center gap-4 text-sm">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>Coming Soon</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    <span>Helsinki, Finland</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    <span>128 Teams</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Trophy className="h-4 w-4" />
                    <span>Cash Prizes</span>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
                  <Button asChild size="lg" className="bg-red-600 hover:bg-red-700">
                    <Link href="#registration">Register Your Team</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                    <Link href="#tournament">Tournament Details</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 md:py-24">
          <div className="container">
            <div className="mx-auto max-w-[800px] text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                Finland's Ultimate Beer Pong Experience
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Organized by Aalto Beer Pong and Unilife, the Beer Pong Battle Royale brings together the best beer pong
                players from across Finland for an epic tournament of skill, strategy, and fun.
              </p>
            </div>

            <div className="mt-16 grid gap-8 md:grid-cols-3">
              <Card>
                <CardContent className="pt-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-100">
                    <Trophy className="h-6 w-6 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold">Epic Competition</h3>
                  <p className="mt-2 text-muted-foreground">
                    128 teams will battle through multiple rounds in a tournament designed to crown the ultimate beer
                    pong champions.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-100">
                    <Users className="h-6 w-6 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold">Community Event</h3>
                  <p className="mt-2 text-muted-foreground">
                    More than just a tournament, it's a celebration of student culture and community with music, food,
                    and entertainment.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-100">
                    <Clock className="h-6 w-6 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold">Unforgettable Experience</h3>
                  <p className="mt-2 text-muted-foreground">
                    A full day of excitement, competition, and memories that will last long after the final cup is sunk.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Tournament Section */}
        <section id="tournament" className="bg-slate-50 py-16 md:py-24">
          <div className="container">
            <div className="mx-auto max-w-[800px] text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Tournament Structure</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                A meticulously designed bracket system ensures fair play and maximum excitement.
              </p>
            </div>

            <div className="mt-12">
              <Tabs defaultValue="format" className="mx-auto max-w-[800px]">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="format">Format</TabsTrigger>
                  <TabsTrigger value="rules">Rules</TabsTrigger>
                  <TabsTrigger value="schedule">Schedule</TabsTrigger>
                </TabsList>
                <TabsContent value="format" className="mt-6 space-y-4">
                  <div className="rounded-lg border p-6">
                    <h3 className="text-xl font-bold">Battle Royale Format</h3>
                    <ul className="mt-4 space-y-3">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-red-600" />
                        <span>128 teams in a double-elimination bracket</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-red-600" />
                        <span>Group stage followed by knockout rounds</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-red-600" />
                        <span>Teams of 2 players each</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-red-600" />
                        <span>Seeding based on previous tournaments and qualifiers</span>
                      </li>
                    </ul>
                  </div>
                </TabsContent>
                <TabsContent value="rules" className="mt-6 space-y-4">
                  <div className="rounded-lg border p-6">
                    <h3 className="text-xl font-bold">Official Rules</h3>
                    <ul className="mt-4 space-y-3">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-red-600" />
                        <span>Standard 10-cup triangle formation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-red-600" />
                        <span>Re-racking allowed twice per game</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-red-600" />
                        <span>Bounce shots count as two cups</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-red-600" />
                        <span>Redemption round when all cups are eliminated</span>
                      </li>
                    </ul>
                  </div>
                </TabsContent>
                <TabsContent value="schedule" className="mt-6 space-y-4">
                  <div className="rounded-lg border p-6">
                    <h3 className="text-xl font-bold">Event Schedule</h3>
                    <ul className="mt-4 space-y-3">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-red-600" />
                        <span>9:00 AM - Registration and check-in</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-red-600" />
                        <span>10:00 AM - Group stages begin</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-red-600" />
                        <span>3:00 PM - Knockout rounds</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-red-600" />
                        <span>8:00 PM - Finals and award ceremony</span>
                      </li>
                    </ul>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>

        {/* Prizes Section */}
        <section id="prizes" className="py-16 md:py-24">
          <div className="container">
            <div className="mx-auto max-w-[800px] text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Massive Prize Pool</h2>
              <p className="mt-4 text-lg text-muted-foreground">Compete for glory and substantial cash prizes.</p>
            </div>

            <div className="mt-12 grid gap-8 md:grid-cols-3">
              <Card className="border-2 border-yellow-500 bg-gradient-to-b from-yellow-50 to-white">
                <CardContent className="pt-6 text-center">
                  <h3 className="text-2xl font-bold">1st Place</h3>
                  <div className="my-4 text-4xl font-extrabold text-yellow-600">€1,000</div>
                  <p className="text-muted-foreground">
                    Plus championship trophy and title of Finland's Beer Pong Champions
                  </p>
                </CardContent>
              </Card>
              <Card className="border-2 border-slate-400 bg-gradient-to-b from-slate-50 to-white">
                <CardContent className="pt-6 text-center">
                  <h3 className="text-2xl font-bold">2nd Place</h3>
                  <div className="my-4 text-4xl font-extrabold text-slate-600">€500</div>
                  <p className="text-muted-foreground">Plus runner-up medals and exclusive merchandise</p>
                </CardContent>
              </Card>
              <Card className="border-2 border-amber-700 bg-gradient-to-b from-amber-50 to-white">
                <CardContent className="pt-6 text-center">
                  <h3 className="text-2xl font-bold">3rd Place</h3>
                  <div className="my-4 text-4xl font-extrabold text-amber-700">€250</div>
                  <p className="text-muted-foreground">Plus bronze medals and sponsor gift packages</p>
                </CardContent>
              </Card>
            </div>

            <div className="mt-12 rounded-lg border bg-slate-50 p-6 text-center">
              <h3 className="text-xl font-bold">Additional Prizes</h3>
              <p className="mt-2 text-muted-foreground">
                Special awards for Best Costume, Most Spirited Team, Best Technique, and more!
              </p>
            </div>
          </div>
        </section>

        {/* Registration Section */}
        <section id="registration" className="bg-red-600 py-16 md:py-24 text-white">
          <div className="container">
            <div className="mx-auto max-w-[800px] text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Register Your Team</h2>
              <p className="mt-4 text-lg text-red-100">
                Secure your spot in Finland's biggest beer pong tournament before all slots are filled!
              </p>
            </div>

            <div className="mt-12 grid gap-8 md:grid-cols-2">
              <Card className="bg-white">
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-bold">Registration Details</h3>
                  <ul className="mt-4 space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-red-600" />
                      <span>€50 per team (2 players)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-red-600" />
                      <span>Limited to 128 teams - first come, first served</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-red-600" />
                      <span>Registration includes tournament entry, official t-shirts, and welcome package</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-red-600" />
                      <span>Registration deadline: One week before the event</span>
                    </li>
                  </ul>
                  <Button className="mt-6 w-full bg-red-600 hover:bg-red-700">Register Now</Button>
                </CardContent>
              </Card>
              <Card className="bg-white">
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-bold">What's Included</h3>
                  <ul className="mt-4 space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-red-600" />
                      <span>Full day tournament participation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-red-600" />
                      <span>Official Beer Pong Battle Royale t-shirts for both team members</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-red-600" />
                      <span>Welcome package with sponsor gifts and merchandise</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-red-600" />
                      <span>Access to after-party with special drink discounts</span>
                    </li>
                  </ul>
                  <div className="mt-6 rounded-md bg-red-50 p-4 text-red-800">
                    <p className="text-sm font-medium">
                      Only a few spots remaining! Register today to secure your place.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Organizers Section */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="mx-auto max-w-[800px] text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Organized By</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Finland's premier beer pong organizations have joined forces to create the ultimate tournament.
              </p>
            </div>

            <div className="mt-12 grid gap-8 md:grid-cols-2">
              <div className="flex flex-col items-center text-center">
                <div className="h-32 w-32 overflow-hidden rounded-full bg-slate-100">
                  <Image
                    src="/placeholder.svg?height=128&width=128"
                    alt="Aalto Beer Pong"
                    width={128}
                    height={128}
                    className="h-full w-full object-cover"
                  />
                </div>
                <h3 className="mt-4 text-xl font-bold">Aalto Beer Pong</h3>
                <p className="mt-2 max-w-md text-muted-foreground">
                  The original beer pong organization from Aalto University, organizing tournaments since 2015.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="h-32 w-32 overflow-hidden rounded-full bg-slate-100">
                  <Image
                    src="/placeholder.svg?height=128&width=128"
                    alt="Unilife"
                    width={128}
                    height={128}
                    className="h-full w-full object-cover"
                  />
                </div>
                <h3 className="mt-4 text-xl font-bold">Unilife</h3>
                <p className="mt-2 max-w-md text-muted-foreground">
                  Finland's largest student event organization, bringing professional event management to the
                  tournament.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="bg-slate-50 py-16 md:py-24">
          <div className="container">
            <div className="mx-auto max-w-[800px] text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Frequently Asked Questions</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Everything you need to know about the Beer Pong Battle Royale.
              </p>
            </div>

            <div className="mt-12 mx-auto max-w-[800px]">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Who can participate?</AccordionTrigger>
                  <AccordionContent>
                    The tournament is open to everyone 18 years and older. You don't need to be a student to
                    participate.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Do I need to bring my own equipment?</AccordionTrigger>
                  <AccordionContent>
                    No, all equipment will be provided, including cups, balls, and tables. Just bring your A-game!
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>What's the refund policy?</AccordionTrigger>
                  <AccordionContent>
                    Full refunds are available up to 2 weeks before the event. After that, you can transfer your
                    registration to another team but no refunds will be issued.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>Is there food available at the event?</AccordionTrigger>
                  <AccordionContent>
                    Yes, there will be food vendors on site offering a variety of options throughout the day.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <AccordionTrigger>Can we bring our own beverages?</AccordionTrigger>
                  <AccordionContent>
                    No outside beverages are allowed. Drinks will be available for purchase at the venue.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-6">
                  <AccordionTrigger>Is there parking available?</AccordionTrigger>
                  <AccordionContent>
                    Limited parking is available at the venue. We recommend using public transportation or carpooling.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-red-600 py-16 md:py-24 text-white">
          <div className="container text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Ready to Become a Champion?</h2>
            <p className="mt-4 mx-auto max-w-[600px] text-lg text-red-100">
              Don't miss your chance to compete in Finland's biggest beer pong tournament and win amazing prizes!
            </p>
            <Button asChild size="lg" className="mt-8 bg-white text-red-600 hover:bg-red-100">
              <Link href="#registration">Register Your Team Now</Link>
            </Button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t bg-slate-900 text-white py-12">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="flex items-center gap-2 font-bold text-xl">
                <span className="text-red-500">BEER PONG</span>
                <span className="bg-red-500 text-white px-2 py-1 rounded-md">BATTLE ROYALE</span>
              </div>
              <p className="mt-4 text-slate-300">
                Finland's biggest beer pong tournament, bringing together the best players for an epic competition.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
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
              <h3 className="text-lg font-bold mb-4">Contact</h3>
              <ul className="space-y-2">
                <li className="text-slate-300">Email: info@beerpongbattleroyale.fi</li>
                <li className="text-slate-300">Phone: +358 123 456 789</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Follow Us</h3>
              <div className="flex gap-4">
                <Link href="#" className="text-slate-300 hover:text-white">
                  <span className="sr-only">Facebook</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
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
                </Link>
                <Link href="#" className="text-slate-300 hover:text-white">
                  <span className="sr-only">Instagram</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
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
                <Link href="#" className="text-slate-300 hover:text-white">
                  <span className="sr-only">Twitter</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
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
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t border-slate-800 pt-8 text-center text-sm text-slate-400">
            <p>© {new Date().getFullYear()} Beer Pong Battle Royale. All rights reserved.</p>
            <p className="mt-2">Organized by Aalto Beer Pong and Unilife. Drink responsibly.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
