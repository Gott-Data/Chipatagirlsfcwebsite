import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Trophy, Users, Target, Calendar, Star, Shield, MapPin, Clock } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export default function TeamPage() {
  const seasonStats = [
    { label: 'Matches Played', value: '19', icon: Trophy },
    { label: 'Wins', value: '17', icon: Target },
    { label: 'Draws', value: '2', icon: Star },
    { label: 'Losses', value: '0', icon: Shield }
  ];

  const detailedStats = [
    { label: 'Goals Scored', value: '54' },
    { label: 'Goals Conceded', value: '7' },
    { label: 'Clean Sheets', value: '10' },
    { label: 'Playoff Finish', value: '2nd place out of 10 teams' }
  ];

  const players = [
    {
      name: 'Ruth Banda',
      position: 'Captain, Midfielder',
      image: 'https://images.unsplash.com/photo-1551241681-2aae145af5df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx8fDE3NTUwMDY0Nzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      bio: 'Leader on and off the pitch. Known for her composure under pressure and her mentorship of younger players.'
    },
    {
      name: 'Mary Zulu',
      position: 'Striker',
      image: 'https://images.unsplash.com/photo-1495143881214-47a7d7f2e7fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx8fDE3NTUwMDY3NzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      bio: 'Top scorer of the season with 18 goals. Her speed and precision make her a constant threat to defenders.'
    },
    {
      name: 'Chipo Lungu',
      position: 'Goalkeeper',
      image: 'https://images.unsplash.com/photo-1528612886355-2bba8bee41d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx8fDE3NTUwMDY1MTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      bio: 'Our wall at the back, with 10 clean sheets and countless match-saving moments.'
    }
  ];

  const memorableMoments = [
    'Beating the reigning champions 3-1 in a match that secured our Super League promotion',
    'Traveling outside Eastern Province for the first time for many players — showing them a world beyond their hometown',
    'A community welcome home celebration where families lined the streets to greet the team bus after playoff success'
  ];

  const upcomingMatches = [
    {
      date: 'September 14',
      opponent: 'Lusaka Queens',
      venue: 'Home',
      time: '15:00'
    },
    {
      date: 'September 21',
      opponent: 'Ndola Stars',
      venue: 'Away',
      time: '14:00'
    },
    {
      date: 'September 28',
      opponent: 'Kabwe Diamonds',
      venue: 'Home',
      time: '15:00'
    }
  ];

  return (
    <div className="min-h-screen bg-off-white py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-montserrat font-bold text-5xl text-gray-800 mb-6">Follow the Team — From Local Fields to the Super League</h1>
          <p className="font-lato text-xl text-muted-foreground max-w-4xl mx-auto">
            When you follow Chipata Girls FC, you're not just watching a football team — you're cheering for over 100 girls 
            fighting for their dreams. Every match we play is a step away from street life and a step closer to education, 
            opportunity, and empowerment.
          </p>
        </div>

        {/* Season at a Glance */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="font-montserrat font-bold text-4xl text-gray-800 mb-6">Season at a Glance — 2024/25 Eastern Women Provincial League</h2>
          </div>

          {/* Main Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            {seasonStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-teal rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="font-montserrat font-bold text-4xl text-gray-800">{stat.value}</div>
                <div className="font-lato text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Detailed Stats */}
          <Card className="border-none shadow-lg">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {detailedStats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="font-montserrat font-bold text-2xl text-teal mb-2">{stat.value}</div>
                    <div className="font-lato text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="text-center mt-8">
            <Badge className="bg-warm-orange text-white font-montserrat font-medium text-lg px-6 py-2">
              Promotion: Back in the Zambia Super League
            </Badge>
            <p className="font-lato text-lg text-gray-700 mt-4">
              This isn't just a season — it's a statement. We've shown that rural girls can compete at the highest level in the country.
            </p>
          </div>
        </section>

        {/* Player Highlights */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="font-montserrat font-bold text-4xl text-gray-800 mb-6">Player Highlights</h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {players.map((player, index) => (
              <Card key={index} className="text-center border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="w-32 h-32 mx-auto mb-4">
                    <ImageWithFallback 
                      src={player.image}
                      alt={player.name}
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <CardTitle className="font-montserrat font-medium text-xl">{player.name}</CardTitle>
                  <Badge className="bg-teal text-white font-lato">{player.position}</Badge>
                </CardHeader>
                <CardContent>
                  <p className="font-lato text-muted-foreground">{player.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Memorable Moments */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="font-montserrat font-bold text-4xl text-gray-800 mb-6">Memorable Moments This Season</h2>
          </div>

          <div className="space-y-6">
            {memorableMoments.map((moment, index) => (
              <Card key={index} className="border-none shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-warm-orange rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Star className="w-4 h-4 text-white" />
                    </div>
                    <p className="font-lato text-lg text-gray-700">{moment}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Why We Share Our Progress */}
        <section className="mb-20">
          <Card className="bg-light-gray border-none shadow-lg">
            <CardContent className="p-8 text-center">
              <h2 className="font-montserrat font-bold text-3xl text-gray-800 mb-6">Why We Share Our Progress</h2>
              <p className="font-lato text-lg text-gray-700 max-w-3xl mx-auto">
                Every stat you see here is proof of what your support makes possible. Without donors, there are no bus rides to matches, 
                no boots on feet, and no safe place for these girls to train. Your gift keeps the scoreboard moving — and keeps dreams alive.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Upcoming Matches */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="font-montserrat font-bold text-4xl text-gray-800 mb-6">Upcoming Matches — Super League 2025</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {upcomingMatches.map((match, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="text-center">
                  <div className="flex items-center justify-center mb-4">
                    <Calendar className="w-6 h-6 text-teal mr-2" />
                    <span className="font-montserrat font-medium text-lg">{match.date}</span>
                  </div>
                  <CardTitle className="font-montserrat font-medium text-xl">
                    {match.venue === 'Home' ? `Chipata Girls FC vs ${match.opponent}` : `${match.opponent} vs Chipata Girls FC`}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <MapPin className="w-4 h-4 text-muted-foreground mr-2" />
                    <Badge className={match.venue === 'Home' ? 'bg-teal text-white' : 'bg-warm-orange text-white'}>
                      {match.venue}
                    </Badge>
                  </div>
                  <div className="flex items-center justify-center">
                    <Clock className="w-4 h-4 text-muted-foreground mr-2" />
                    <span className="font-lato text-muted-foreground">{match.time}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button className="bg-teal hover:bg-teal/90 text-white font-montserrat font-medium">
              See Full Fixtures & Standings
            </Button>
          </div>
        </section>

        {/* Cheer from Anywhere */}
        <section>
          <Card className="bg-teal text-white border-none shadow-lg">
            <CardContent className="p-8 text-center">
              <h2 className="font-montserrat font-bold text-3xl mb-6">Cheer from Anywhere</h2>
              <p className="font-lato text-lg mb-8 max-w-3xl mx-auto">
                Follow us on social media for live updates, behind-the-scenes moments, and player interviews. 
                Your likes, comments, and shares mean the world to our girls.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-warm-orange hover:bg-orange-600 text-white font-montserrat font-medium">
                  Facebook
                </Button>
                <Button className="bg-warm-orange hover:bg-orange-600 text-white font-montserrat font-medium">
                  Instagram
                </Button>
                <Button className="bg-warm-orange hover:bg-orange-600 text-white font-montserrat font-medium">
                  Twitter
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}