import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Quote, Heart, Users, Trophy, BookOpen, Shield, Target, Zap } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface AboutPageProps {
  onPageChange: (page: string) => void;
}

export default function AboutPage({ onPageChange }: AboutPageProps) {
  const missionPoints = [
    'Keep girls off the streets and away from risky behavior.',
    'Empower them through sport, education, and life skills.',
    'Help them see that their value is limitless — on and off the pitch.'
  ];

  const approachItems = [
    {
      icon: Trophy,
      title: 'Sport teaches discipline, teamwork, and resilience',
      description: 'Through structured training and competitive play, girls learn valuable life skills.'
    },
    {
      icon: BookOpen,
      title: 'Education support ensures girls return to class',
      description: 'Teenage mothers and school dropouts receive the support they need to continue learning.'
    },
    {
      icon: Users,
      title: 'Life skills workshops prepare for the future',
      description: 'Training in leadership, job readiness, and community engagement builds confident leaders.'
    },
    {
      icon: Heart,
      title: 'Faith and values guide our approach',
      description: 'Building character alongside skill, creating role models for the community.'
    }
  ];

  const challenges = [
    'Early marriage cutting education short',
    'Lack of safe spaces to gather and grow',
    'Peer pressure toward substance abuse and risky lifestyles'
  ];

  const solutions = [
    'Teenage mothers returning to school and graduating',
    'Players representing Eastern Province in national competitions',
    'Former players becoming coaches, teachers, and mentors'
  ];

  const visionGoals = [
    'Expand our reach to serve 300+ girls annually across Eastern Province',
    'Establish a permanent training facility with proper pitches, classrooms, and community spaces',
    'Develop a youth academy for girls as young as 8 years old',
    'Increase educational support, ensuring every player has the chance to finish school',
    'Compete at the highest level in Zambia\'s Super League and qualify for international tournaments'
  ];

  return (
    <div className="min-h-screen bg-off-white py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-montserrat font-bold text-5xl text-gray-800 mb-6">About Us — The Heart Behind the Game</h1>
        </div>

        {/* Our Beginning */}
        <section className="mb-20">
          <Card className="border-none shadow-lg">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="font-montserrat font-bold text-3xl text-gray-800 mb-6">Our Beginning</h2>
                  <p className="font-lato text-lg text-gray-700 mb-4">
                    We started in 2019 with nothing more than a dusty field, a few borrowed balls, and a vision that 
                    every girl in Chipata should have the chance to dream bigger.
                  </p>
                  <p className="font-lato text-lg text-gray-700 mb-4">
                    Mr. C. Dube and Mr. M. J. Phiri first met a group of girls playing barefoot at the Chipata College 
                    Education grounds. They saw determination in their eyes — but also the obstacles they faced: poverty, 
                    early marriages, street life, and a future that felt decided before it even began.
                  </p>
                  <p className="font-lato text-lg text-gray-700">
                    Instead of turning away, they stepped in. They became coaches, mentors, guardians, and sometimes even 
                    parents. Chipata Girls FC was born — not just as a football club, but as a lifeline.
                  </p>
                </div>
                <div>
                  <ImageWithFallback 
                    src="https://images.unsplash.com/photo-1501663888157-d13d2b51d954?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx8fDE3NTUwMDY0NzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Chipata Girls FC founding story"
                    className="w-full h-80 object-cover rounded-lg shadow-md"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Our Mission */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="font-montserrat font-bold text-4xl text-gray-800 mb-6">Our Mission</h2>
            <div className="max-w-4xl mx-auto">
              <p className="font-lato text-xl text-gray-700 mb-6">We are more than a team.</p>
              <p className="font-lato text-xl text-gray-700 mb-6">We are a community where girls feel safe, seen, and valued.</p>
              <p className="font-lato text-xl text-gray-700 mb-8">We use football as the doorway — but the real goal is building stronger futures.</p>
              
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="font-montserrat font-medium text-2xl text-teal mb-6">Our mission is simple:</h3>
                <div className="space-y-4">
                  {missionPoints.map((point, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-warm-orange rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <Target className="w-3 h-3 text-white" />
                      </div>
                      <p className="font-lato text-lg text-gray-700 text-left">{point}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Approach */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="font-montserrat font-bold text-4xl text-gray-800 mb-6">Our Approach</h2>
            <p className="font-lato text-xl text-gray-700 max-w-3xl mx-auto mb-8">
              We don't just train football players; we raise leaders.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {approachItems.map((item, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-teal rounded-full flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-montserrat font-medium text-lg text-gray-800 mb-2">{item.title}</h3>
                      <p className="font-lato text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-light-gray p-8 rounded-lg">
            <p className="font-lato text-lg text-gray-700 text-center">
              Every training session, every game, every conversation is a step toward helping our girls believe in themselves and their futures.
            </p>
          </div>
        </section>

        {/* Why It Matters */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="font-montserrat font-bold text-4xl text-gray-800 mb-6">Why It Matters</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-none shadow-lg">
              <CardHeader>
                <CardTitle className="font-montserrat font-medium text-2xl text-center">The Challenges Girls Face</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-lato text-lg text-gray-700 mb-6 text-center">
                  In our community, the challenges girls face are real and urgent:
                </p>
                <div className="space-y-4">
                  {challenges.map((challenge, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <Zap className="w-3 h-3 text-white" />
                      </div>
                      <p className="font-lato text-gray-700">{challenge}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardHeader>
                <CardTitle className="font-montserrat font-medium text-2xl text-center">What We've Achieved</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-lato text-lg text-gray-700 mb-6 text-center">
                  We've seen what happens when girls have a place like Chipata Girls FC:
                </p>
                <div className="space-y-4">
                  {solutions.map((solution, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-teal rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <Trophy className="w-3 h-3 text-white" />
                      </div>
                      <p className="font-lato text-gray-700">{solution}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Our Vision */}
        <section className="mb-20">
          <Card className="bg-teal text-white border-none shadow-lg">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <h2 className="font-montserrat font-bold text-4xl mb-6">Our Vision</h2>
                <p className="font-lato text-xl mb-8">
                  We dream of a day when every girl in Eastern Province — and beyond — knows she has a choice.
                </p>
                <p className="font-lato text-lg mb-8">
                  We aim to grow into one of the strongest women's football clubs in Zambia, Southern Africa, and eventually, 
                  the world. But more than trophies, we want to see thousands of girls living empowered, purpose-driven lives.
                </p>
              </div>

              <div className="max-w-4xl mx-auto">
                <h3 className="font-montserrat font-medium text-2xl mb-8 text-center">Over the next five years, we aim to:</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {visionGoals.map((goal, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-warm-orange rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <Target className="w-3 h-3 text-white" />
                      </div>
                      <p className="font-lato text-white">{goal}</p>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <Card className="border-none shadow-lg">
            <CardContent className="p-8">
              <h2 className="font-montserrat font-bold text-3xl text-gray-800 mb-6">Join us in making that vision real.</h2>
              <p className="font-lato text-xl text-gray-700 mb-8">
                When you donate, you're not funding a game — you're investing in a future leader.
              </p>
              <Button 
                onClick={() => onPageChange('donate')}
                className="bg-warm-orange hover:bg-orange-600 text-white font-montserrat font-medium text-lg px-10 py-4"
              >
                Donate Now — Be Part of Her Story
              </Button>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}