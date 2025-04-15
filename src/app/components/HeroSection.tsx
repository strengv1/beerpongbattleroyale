import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { Calendar, MapPin, Trophy, Users } from "lucide-react"

export const HeroSection = () => {
  return (
    <section className="relative">
      <div className="absolute inset-0 bg-black/80 z-10" />
      <div className="relative h-[80vh] bg-blue-800">
        <Image
          src="/abp_festarit.png?height=800&width=1600"
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
  )
}