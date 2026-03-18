import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Users, BookOpen, Heart, Trophy, Target, Award, Globe, Shield, Star, GraduationCap } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface HomePageProps {
  onPageChange: (page: string) => void;
}

export default function HomePage({ onPageChange }: HomePageProps) {
  const impactStats = [
    { label: 'Girls Currently Enrolled', value: '100+', icon: Users },
    { label: 'Wins in 2024 Season', value: '17', icon: Trophy },
    { label: 'Draws', value: '2', icon: Award },
    { label: 'Losses', value: '0', icon: Star }
  ];

  const whyWeExist = [
    {
      icon: Shield,
      title: 'Keep girls on the field and off the streets',
      description: 'Providing a safe space away from dangerous street life and negative influences.'
    },
    {
      icon: Heart,
      title: 'Replace fear with confidence',
      description: 'Building self-esteem and leadership skills through sport and mentorship.'
    },
    {
      icon: Trophy,
      title: 'Turn wasted potential into championship dreams',
      description: 'Transforming raw talent into competitive excellence and life success.'
    }
  ];

  const successStories = [
    {
      title: 'From Teenage Mother to Graduate',
      story: 'Martha thought her education ended at 16. Through our program\'s support, she returned to school, passed her exams, and is now training as a teacher — inspiring her younger teammates every day.',
      linkText: 'Read Martha\'s Full Story',
      page: 'alumni'
    },
    {
      title: 'The Captain Who Never Gave Up',
      story: 'Ruth Banda started football barefoot, playing with plastic-bag balls. Today, she\'s the team captain, leading on the pitch and mentoring younger girls off it.',
      linkText: 'Meet Our Team Captain',
      page: 'team'
    },
    {
      title: 'Our Keeper, Our Wall',
      story: 'Chipo Lungu\'s hands have saved more than just goals — they\'ve kept her team\'s Super League dreams alive with ten clean sheets this season.',
      linkText: 'Follow Our Journey',
      page: 'team'
    }
  ];

  const donationImpacts = [
    'Puts boots on feet and uniforms on backs',
    'Funds travel to matches that keep dreams alive',
    'Sends girls back to school with books, tuition, and hope',
    'Equips them with life skills that last a lifetime'
  ];

  return (
    <div className="min-h-screen bg-off-white">
      {/* Hero Banner */}
      <section className="relative h-screen flex items-center justify-center text-center text-white">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1501663888157-d13d2b51d954?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx8fDE3NTUwMDY0NzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Chipata Girls FC team celebrating"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-4">
          <h1 className="font-montserrat font-bold text-4xl md:text-6xl mb-6">
            They came to the field with bare feet. They left with big dreams.
          </h1>
          <p className="font-lato text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            We are Chipata Girls FC — and we believe football can change a girl's life forever.
          </p>
          <Button 
            onClick={() => onPageChange('donate')}
            className="bg-warm-orange hover:bg-orange-600 text-white font-montserrat font-medium text-lg px-10 py-4 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            Donate Now
          </Button>
        </div>
      </section>

      {/* Opening Story */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="max-w-4xl mx-auto">
            <p className="font-lato text-xl text-gray-700 mb-8 leading-relaxed">
              Our girls aren't just playing a game. They're escaping the dangers of the street, reclaiming their education, 
              and learning what it means to believe in themselves.
            </p>
            <p className="font-lato text-lg text-gray-600 leading-relaxed">
              When a girl joins Chipata Girls FC, she gains more than a jersey and a spot on the pitch — she gains a family, 
              a purpose, and a future. We've seen teenage mothers return to school, shy girls step into leadership, and athletes 
              rise from dusty community fields to compete among Zambia's best.
            </p>
          </div>
        </div>
      </section>

      {/* Our Impact — in Their Words */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-montserrat font-bold text-4xl text-gray-800 mb-6">Our Impact — in Their Words</h2>
          </div>

          {/* Featured Quote */}
          <Card className="max-w-4xl mx-auto border-none shadow-lg mb-16">
            <CardContent className="p-8">
              <div className="text-center">
                <blockquote className="font-lato text-2xl italic text-gray-700 mb-6">
                  "Before football, I thought my future was already decided. Now, I want to be a teacher — and my team taught me I can."
                </blockquote>
                <p className="font-montserrat font-medium text-teal text-lg">— Martha, former player, now in teacher training</p>
              </div>
            </CardContent>
          </Card>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {impactStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-teal rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="font-montserrat font-bold text-3xl text-gray-800">{stat.value}</div>
                <div className="font-lato text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto text-left">
              <div className="bg-light-gray p-6 rounded-lg">
                <p className="font-lato text-gray-700">
                  <strong>Teenage mothers and school dropouts</strong> back in classrooms and thriving.
                </p>
              </div>
              <div className="bg-light-gray p-6 rounded-lg">
                <p className="font-lato text-gray-700">
                  <strong>Top 2 finish</strong> in the provincial playoffs and promotion to the Super League.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why We Exist */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-4xl text-gray-800 mb-6">Why We Exist</h2>
          <p className="font-lato text-xl text-gray-700 max-w-3xl mx-auto mb-8">
            Too many girls in our community grow up believing their choices are limited. Poverty, early marriage, 
            and lack of safe spaces rob them of their potential.
          </p>
          <p className="font-montserrat font-medium text-2xl text-teal">We change that.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {whyWeExist.map((item, index) => (
            <Card key={index} className="text-center border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-warm-orange rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="font-montserrat font-medium text-xl">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-lato text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Stories of Change */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-montserrat font-bold text-4xl text-gray-800 mb-6">Stories of Change</h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="font-montserrat font-medium text-xl text-teal">{story.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-lato text-gray-700 mb-4">{story.story}</p>
                  <Button 
                    onClick={() => onPageChange(story.page)}
                    variant="outline"
                    className="border-teal text-teal hover:bg-teal hover:text-white font-montserrat font-medium"
                  >
                    {story.linkText}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How You Can Help */}
      <section className="bg-teal py-20 px-4 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="font-montserrat font-bold text-4xl mb-8">How You Can Help</h2>
          <p className="font-lato text-xl mb-12 max-w-3xl mx-auto">
            Every ball, every bus ride, every school fee paid — it's possible because of donors like you.
          </p>
          
          <div className="mb-12">
            <h3 className="font-montserrat font-medium text-2xl mb-8">Your donation:</h3>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {donationImpacts.map((impact, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-warm-orange rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Target className="w-3 h-3 text-white" />
                  </div>
                  <p className="font-lato text-left">{impact}</p>
                </div>
              ))}
            </div>
          </div>

          <Button 
            onClick={() => onPageChange('donate')}
            className="bg-warm-orange hover:bg-orange-600 text-white font-montserrat font-medium text-xl px-10 py-4"
          >
            Donate Now — Be Part of Her Story
          </Button>
        </div>
      </section>

      {/* Call to Explore */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-montserrat font-bold text-4xl text-gray-800 mb-6">Explore Our Impact</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="text-center border-none shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer" onClick={() => onPageChange('team')}>
            <CardContent className="p-6">
              <Users className="w-12 h-12 text-teal mx-auto mb-4" />
              <h3 className="font-montserrat font-medium text-lg mb-2">Our Girls</h3>
              <p className="font-lato text-sm text-muted-foreground">See the faces and hear the voices behind the program.</p>
            </CardContent>
          </Card>

          <Card className="text-center border-none shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer" onClick={() => onPageChange('team')}>
            <CardContent className="p-6">
              <Trophy className="w-12 h-12 text-warm-orange mx-auto mb-4" />
              <h3 className="font-montserrat font-medium text-lg mb-2">Follow the Team</h3>
              <p className="font-lato text-sm text-muted-foreground">Track our league progress and upcoming matches.</p>
            </CardContent>
          </Card>

          <Card className="text-center border-none shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer" onClick={() => onPageChange('alumni')}>
            <CardContent className="p-6">
              <GraduationCap className="w-12 h-12 text-teal mx-auto mb-4" />
              <h3 className="font-montserrat font-medium text-lg mb-2">Alumni Stories</h3>
              <p className="font-lato text-sm text-muted-foreground">Discover where our former players are now.</p>
            </CardContent>
          </Card>

          <Card className="text-center border-none shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer" onClick={() => onPageChange('about')}>
            <CardContent className="p-6">
              <Heart className="w-12 h-12 text-warm-orange mx-auto mb-4" />
              <h3 className="font-montserrat font-medium text-lg mb-2">About Us</h3>
              <p className="font-lato text-sm text-muted-foreground">Learn how it all started and why we'll never stop.</p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}