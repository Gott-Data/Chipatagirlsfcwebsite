import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Trophy, BookOpen, Users, Heart, Target, Star, GraduationCap, Globe } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ProgramsPageProps {
  onPageChange: (page: string) => void;
}

export default function ProgramsPage({ onPageChange }: ProgramsPageProps) {
  const programs = [
    {
      icon: Trophy,
      title: 'Competitive Football',
      image: 'https://images.unsplash.com/photo-1495143881214-47a7d7f2e7fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx8fDE3NTUwMDY3NzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      description: 'We play to win — and we win with purpose.',
      details: [
        'Eastern Women Provincial League 2024/25: 17 wins, 2 draws, 0 losses',
        'Playoff finish: 2nd out of 10 provincial teams',
        'Super League promotion: Back among Zambia\'s top teams'
      ],
      quote: '"When I scored my first goal in the Super League, I realised football could take me places I never imagined." — Ruth, team captain',
      impact: 'Through league matches and tournaments, our girls experience discipline, teamwork, and the pride of representing their community. Many of our players had never left their hometown before football gave them the chance to travel, compete, and dream.'
    },
    {
      icon: BookOpen,
      title: 'Education Support',
      image: 'https://images.unsplash.com/photo-1551241681-2aae145af5df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx8fDE3NTUwMDY0Nzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      description: 'We believe the game should never replace the classroom — it should lead girls back to it.',
      details: [
        'Teenage mothers return to school with their fees and materials covered',
        'School dropouts receive mentoring, tutoring, and encouragement to graduate',
        'Players are taught how to balance sports with studies — preparing them for future careers'
      ],
      quote: null,
      impact: 'For some girls, football is the reason they still wake up early for class. For others, it\'s the spark that reignites their love for learning.'
    },
    {
      icon: Users,
      title: 'Life Skills & Mentoring',
      image: 'https://images.unsplash.com/photo-1528612886355-2bba8bee41d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx8fDE3NTUwMDY1MTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      description: 'We prepare girls for more than the next match — we prepare them for life.',
      details: [
        'Leadership training turns shy players into confident role models',
        'Workshops on health, financial literacy, and goal-setting help them plan for their futures',
        'Faith-based guidance reinforces values like respect, integrity, and service'
      ],
      quote: null,
      impact: 'Every girl is paired with a mentor who sees her potential and holds her accountable to her goals.'
    },
    {
      icon: Heart,
      title: 'Community Impact',
      image: 'https://images.unsplash.com/photo-1501663888157-d13d2b51d954?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx8fDE3NTUwMDY0NzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      description: 'Our girls don\'t just benefit from the program — they give back.',
      details: [
        'Visiting schools to speak about education and sport',
        'Helping younger girls join football programs',
        'Supporting community clean-ups and outreach events'
      ],
      quote: null,
      impact: 'We\'re building not just players, but women who will change their communities for the better.'
    }
  ];

  const donationBreakdown = [
    { amount: '$25', impact: 'Buys a set of training bibs' },
    { amount: '$50', impact: 'Funds transport for an away match' },
    { amount: '$100', impact: 'Pays a term\'s school fees for a player' },
    { amount: '$250', impact: 'Equips an entire squad for the season' },
    { amount: '$500+', impact: 'Supports our life skills programs for a full year' }
  ];

  return (
    <div className="min-h-screen bg-off-white py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-montserrat font-bold text-5xl text-gray-800 mb-6">What We Do — Football Is Just the Beginning</h1>
          <p className="font-lato text-xl text-muted-foreground max-w-4xl mx-auto">
            At Chipata Girls FC, football is our tool — but transformation is our mission. Every pass, every goal, 
            every training session is part of a bigger plan: to give girls the skills, confidence, and opportunities 
            they need to shape their own futures.
          </p>
        </div>

        {/* We Build Champions */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="font-montserrat font-bold text-4xl text-gray-800 mb-6">We Build Champions On and Off the Field</h2>
            <p className="font-lato text-lg text-muted-foreground max-w-3xl mx-auto">
              Our work happens in four core areas:
            </p>
          </div>
        </section>

        {/* Programs */}
        {programs.map((program, index) => (
          <section key={index} className="mb-20">
            <Card className="border-none shadow-lg overflow-hidden">
              <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <ImageWithFallback 
                    src={program.image}
                    alt={program.title}
                    className="w-full h-80 lg:h-full object-cover"
                  />
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center bg-white">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-teal rounded-full flex items-center justify-center mr-4">
                      <program.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-montserrat font-bold text-3xl text-gray-800">{program.title}</h3>
                  </div>
                  
                  <p className="font-lato text-xl text-gray-700 mb-6">{program.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    {program.details.map((detail, idx) => (
                      <div key={idx} className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-warm-orange rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <Star className="w-3 h-3 text-white" />
                        </div>
                        <p className="font-lato text-gray-700">{detail}</p>
                      </div>
                    ))}
                  </div>

                  {program.quote && (
                    <blockquote className="border-l-4 border-teal pl-4 py-2 mb-6">
                      <p className="font-lato italic text-gray-600">{program.quote}</p>
                    </blockquote>
                  )}

                  <p className="font-lato text-gray-600">{program.impact}</p>
                </div>
              </div>
            </Card>
          </section>
        ))}

        {/* Why Your Support Matters */}
        <section className="mb-20">
          <Card className="bg-teal text-white border-none shadow-lg">
            <CardContent className="p-8 lg:p-12">
              <div className="text-center mb-12">
                <h2 className="font-montserrat font-bold text-4xl mb-6">Why Your Support Matters</h2>
                <p className="font-lato text-xl max-w-3xl mx-auto">
                  Without donor support, our training fields fall silent. Our school fees go unpaid. 
                  Our girls lose the only safe space they have to grow.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {donationBreakdown.map((item, index) => (
                  <Card key={index} className="bg-white text-gray-800">
                    <CardContent className="p-6 text-center">
                      <div className="text-3xl font-montserrat font-bold text-teal mb-2">{item.amount}</div>
                      <p className="font-lato">{item.impact}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="text-center">
                <Button 
                  onClick={() => onPageChange('donate')}
                  className="bg-warm-orange hover:bg-orange-600 text-white font-montserrat font-medium text-lg px-10 py-4"
                >
                  Donate Now — Build the Next Generation
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Summary for Less Emotional Version */}
        <section>
          <Card className="border-none shadow-lg">
            <CardContent className="p-8">
              <div className="text-center">
                <h2 className="font-montserrat font-bold text-3xl text-gray-800 mb-6">Our work goes beyond football training:</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-teal rounded-full flex items-center justify-center mx-auto mb-4">
                      <Trophy className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-montserrat font-medium text-lg mb-2">Competitive Football</h3>
                    <p className="font-lato text-sm text-muted-foreground">Playing in the Eastern Women Provincial League and the Super League</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-warm-orange rounded-full flex items-center justify-center mx-auto mb-4">
                      <BookOpen className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-montserrat font-medium text-lg mb-2">Education Support</h3>
                    <p className="font-lato text-sm text-muted-foreground">Helping teenage mothers and school dropouts return to school</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-teal rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-montserrat font-medium text-lg mb-2">Life Skills Training</h3>
                    <p className="font-lato text-sm text-muted-foreground">Building confidence, leadership, and teamwork skills</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-warm-orange rounded-full flex items-center justify-center mx-auto mb-4">
                      <Heart className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-montserrat font-medium text-lg mb-2">Community Role Models</h3>
                    <p className="font-lato text-sm text-muted-foreground">Encouraging girls to inspire others and give back</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}