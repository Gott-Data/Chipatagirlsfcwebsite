import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Quote, Target, Users, GraduationCap, Trophy, MapPin } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface PresidentPageProps {
  onPageChange: (page: string) => void;
}

export default function PresidentPage({ onPageChange }: PresidentPageProps) {
  const visionGoals = [
    {
      icon: Users,
      title: 'Expand our reach to serve 300+ girls annually across Eastern Province',
      description: 'Growing our impact to touch more lives and communities'
    },
    {
      icon: MapPin,
      title: 'Establish a permanent training facility with proper pitches, classrooms, and community spaces',
      description: 'Creating a lasting home for our programs and activities'
    },
    {
      icon: GraduationCap,
      title: 'Develop a youth academy for girls as young as 8 years old',
      description: 'Starting early to build confidence and skills from childhood'
    },
    {
      icon: Target,
      title: 'Increase educational support, ensuring every player has the chance to finish school',
      description: 'Making education accessible and achievable for all our girls'
    },
    {
      icon: Trophy,
      title: 'Compete at the highest level in Zambia\'s Super League and qualify for international tournaments',
      description: 'Representing Zambia and inspiring girls across Africa'
    }
  ];

  return (
    <div className="min-h-screen bg-off-white py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-montserrat font-bold text-5xl text-gray-800 mb-6">From the President's Office — A Welcome from Chipangula Dube</h1>
        </div>

        {/* Personal Message */}
        <section className="mb-20">
          <Card className="border-none shadow-lg">
            <CardContent className="p-8">
              <div className="grid lg:grid-cols-3 gap-8 items-start">
                <div className="lg:col-span-2">
                  <div className="flex items-center mb-8">
                    <Quote className="w-12 h-12 text-teal mr-4" />
                    <h2 className="font-montserrat font-bold text-3xl text-gray-800">A Personal Message to You</h2>
                  </div>
                  
                  <div className="space-y-6 font-lato text-lg text-gray-700 leading-relaxed">
                    <p className="font-montserrat font-medium text-xl text-gray-800">Dear Friends and Supporters,</p>
                    
                    <p>
                      When I first stood at the Chipata College Education grounds in 2019, I saw a group of girls playing 
                      barefoot on dusty soil. They had no proper kits, no equipment, and no league to play in — but their 
                      determination was undeniable.
                    </p>
                    
                    <p>
                      I knew then that football could be more than a sport for them. It could be a safe place, a teacher of 
                      discipline, a source of confidence, and a doorway to opportunities they'd never imagined.
                    </p>
                    
                    <p>
                      That's why we built Chipata Girls FC. And thanks to the generosity of people like you, those girls now 
                      compete among the best in Zambia. They've gone from the streets to the Super League, from early marriage 
                      to finishing school, from quiet doubt to bold dreams.
                    </p>
                  </div>
                </div>
                
                <div className="text-center">
                  <ImageWithFallback 
                    src="https://images.unsplash.com/photo-1528612886355-2bba8bee41d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx8fDE3NTUwMDY1MTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Chipangula Dube, President"
                    className="w-64 h-64 object-cover rounded-full mx-auto mb-6 border-4 border-teal"
                  />
                  <h3 className="font-montserrat font-medium text-xl text-gray-800">Chipangula Dube</h3>
                  <p className="font-lato text-muted-foreground">Club President & Founder</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Our Vision */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="font-montserrat font-bold text-4xl text-gray-800 mb-6">Our Vision</h2>
            <p className="font-lato text-xl text-muted-foreground max-w-3xl mx-auto">
              Over the next five years, we aim to:
            </p>
          </div>

          <div className="space-y-8">
            {visionGoals.map((goal, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-6">
                    <div className="w-16 h-16 bg-teal rounded-full flex items-center justify-center flex-shrink-0">
                      <goal.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="font-montserrat font-medium text-xl text-gray-800 mb-3">{goal.title}</h3>
                      <p className="font-lato text-muted-foreground">{goal.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Why We Can't Do It Alone */}
        <section className="mb-20">
          <Card className="bg-light-gray border-none shadow-lg">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <h2 className="font-montserrat font-bold text-4xl text-gray-800 mb-6">Why We Can't Do It Alone</h2>
              </div>
              
              <div className="max-w-4xl mx-auto">
                <p className="font-lato text-xl text-gray-700 mb-6 text-center">
                  This vision is bigger than football — and bigger than us.
                </p>
                
                <p className="font-lato text-lg text-gray-700 mb-8 text-center">
                  To achieve it, we need partners, donors, and friends who believe, like we do, that every girl has 
                  the right to play, learn, and lead.
                </p>
                
                <div className="bg-white p-8 rounded-lg shadow-md">
                  <h3 className="font-montserrat font-medium text-2xl text-center text-gray-800 mb-6">Your support keeps our girls:</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-teal rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <Target className="w-3 h-3 text-white" />
                        </div>
                        <p className="font-lato text-gray-700">On the pitch and in the classroom</p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-teal rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <Target className="w-3 h-3 text-white" />
                        </div>
                        <p className="font-lato text-gray-700">Equipped with boots and schoolbooks</p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-warm-orange rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <Target className="w-3 h-3 text-white" />
                        </div>
                        <p className="font-lato text-gray-700">Traveling to matches that build dreams</p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-warm-orange rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <Target className="w-3 h-3 text-white" />
                        </div>
                        <p className="font-lato text-gray-700">Learning life skills that transform futures</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* President's Final Quote */}
        <section className="mb-20">
          <Card className="bg-teal text-white border-none shadow-lg">
            <CardContent className="p-8">
              <div className="text-center">
                <Quote className="w-16 h-16 text-warm-orange mx-auto mb-8" />
                <blockquote className="font-lato text-2xl italic mb-8 max-w-4xl mx-auto">
                  "I have seen firsthand how one act of generosity can change the entire course of a girl's life. 
                  I invite you to be that change."
                </blockquote>
                <p className="font-montserrat font-medium text-xl text-warm-orange mb-8">
                  — Chipangula Dube, President, Chipata Girls FC
                </p>
                
                <Button 
                  onClick={() => onPageChange('donate')}
                  className="bg-warm-orange hover:bg-orange-600 text-white font-montserrat font-medium text-xl px-12 py-4"
                >
                  Donate Now — Invest in Her Future
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Our Journey So Far */}
        <section>
          <Card className="border-none shadow-lg">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <h2 className="font-montserrat font-bold text-3xl text-gray-800 mb-6">Our Journey So Far</h2>
                <p className="font-lato text-lg text-muted-foreground max-w-3xl mx-auto">
                  From those dusty beginnings in 2019 to competing in Zambia's Super League, every step has been 
                  made possible by supporters who believe in our girls' potential.
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-teal rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-montserrat font-medium text-xl text-gray-800 mb-2">100+ Girls</h3>
                  <p className="font-lato text-muted-foreground">Currently enrolled and thriving in our programs</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-warm-orange rounded-full flex items-center justify-center mx-auto mb-4">
                    <Trophy className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-montserrat font-medium text-xl text-gray-800 mb-2">Super League</h3>
                  <p className="font-lato text-muted-foreground">Promoted to compete at Zambia's highest level</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-teal rounded-full flex items-center justify-center mx-auto mb-4">
                    <GraduationCap className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-montserrat font-medium text-xl text-gray-800 mb-2">Bright Futures</h3>
                  <p className="font-lato text-muted-foreground">Alumni in universities, teaching, and leadership roles</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}