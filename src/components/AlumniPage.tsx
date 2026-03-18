import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { GraduationCap, Heart, Users, Trophy, Quote } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface AlumniPageProps {
  onPageChange: (page: string) => void;
}

export default function AlumniPage({ onPageChange }: AlumniPageProps) {
  const successStories = [
    {
      name: 'Martha',
      title: 'From Teenage Mother to Teacher',
      image: 'https://images.unsplash.com/photo-1551241681-2aae145af5df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx8fDE3NTUwMDY0Nzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      story: 'At 16, Martha thought her education was over. Through Chipata Girls FC, she returned to school, balanced studies with football, and discovered her passion for teaching. Today, she\'s a qualified teacher and mentors younger girls in her community.',
      quote: 'Football gave me discipline and courage. Teaching gives me a way to pass that on.',
      impact: 'Now mentoring 15+ young girls in her community',
      badge: 'Teacher'
    },
    {
      name: 'Grace',
      title: 'From Local Pitch to University Scholarship',
      image: 'https://images.unsplash.com/photo-1495143881214-47a7d7f2e7fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx8fDE3NTUwMDY3NzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      story: 'Grace joined us shy and unsure. Over the years, she grew into a fierce midfielder and a leader. Her dedication on the field and in the classroom earned her a sports scholarship to the University of Zambia. She now dreams of representing Zambia\'s women\'s national team.',
      quote: 'I learned that leadership is not about being the loudest voice — it\'s about lifting others up.',
      impact: 'University of Zambia scholarship recipient',
      badge: 'University Student'
    },
    {
      name: 'Lillian',
      title: 'The Coach Who Came Back',
      image: 'https://images.unsplash.com/photo-1528612886355-2bba8bee41d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx8fDE3NTUwMDY1MTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      story: 'After graduating from our program, Lillian returned to Chipata Girls FC — this time as a youth coach. She\'s building the confidence of 20+ young girls every week, proving that role models can come from within the community.',
      quote: 'When the younger girls see me, they know it\'s possible to follow the same path.',
      impact: 'Coaching 20+ young girls weekly',
      badge: 'Youth Coach'
    }
  ];

  const alumniImpacts = [
    'Once you\'re part of Chipata Girls FC, you\'re part of a family for life',
    'We keep in touch with our former players, offering guidance and networking opportunities',
    'Many return to volunteer, coach, or speak at our life skills workshops',
    'Alumni serve as living proof that the program creates lasting change'
  ];

  return (
    <div className="min-h-screen bg-off-white py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-montserrat font-bold text-5xl text-gray-800 mb-6">Chipata Girls FC Alumni — Where They Are Now</h1>
          <p className="font-lato text-xl text-muted-foreground max-w-4xl mx-auto">
            When a girl leaves Chipata Girls FC, she doesn't leave with just memories of matches — she carries skills, 
            confidence, and a belief in herself that changes her entire life. Our alumni are teachers, coaches, university students, 
            and community leaders. They are living proof that football is just the starting point.
          </p>
        </div>

        {/* More Than Football Players */}
        <section className="mb-20">
          <Card className="border-none shadow-lg bg-light-gray">
            <CardContent className="p-8 text-center">
              <h2 className="font-montserrat font-bold text-3xl text-gray-800 mb-6">More Than Football Players</h2>
              <p className="font-lato text-lg text-gray-700 max-w-3xl mx-auto">
                Our alumni are proof that this program changes lives. Every scholarship earned, every career started, 
                every girl who chooses school over the streets — it all begins with someone believing in her enough to invest in her journey.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Success Stories */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="font-montserrat font-bold text-4xl text-gray-800 mb-6">Success Stories</h2>
          </div>

          <div className="space-y-12">
            {successStories.map((story, index) => (
              <Card key={index} className="border-none shadow-lg overflow-hidden">
                <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                  <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <ImageWithFallback 
                      src={story.image}
                      alt={story.name}
                      className="w-full h-80 lg:h-full object-cover"
                    />
                  </div>
                  <div className="p-8 lg:p-12 flex flex-col justify-center bg-white">
                    <div className="mb-6">
                      <Badge className="bg-teal text-white font-lato mb-4">{story.badge}</Badge>
                      <h3 className="font-montserrat font-bold text-2xl text-gray-800 mb-2">{story.name}</h3>
                      <h4 className="font-montserrat font-medium text-xl text-teal mb-4">{story.title}</h4>
                    </div>
                    
                    <p className="font-lato text-gray-700 mb-6 leading-relaxed">{story.story}</p>
                    
                    <blockquote className="border-l-4 border-warm-orange pl-4 py-2 mb-6">
                      <p className="font-lato italic text-gray-600 mb-2">"{story.quote}"</p>
                    </blockquote>

                    <div className="bg-light-gray p-4 rounded-lg">
                      <p className="font-lato text-sm text-gray-600">
                        <strong>Current Impact:</strong> {story.impact}
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Our Alumni Network */}
        <section className="mb-20">
          <Card className="bg-teal text-white border-none shadow-lg">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <h2 className="font-montserrat font-bold text-4xl mb-6">Our Alumni Network</h2>
              </div>

              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="space-y-4">
                    {alumniImpacts.map((impact, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-warm-orange rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <Heart className="w-3 h-3 text-white" />
                        </div>
                        <p className="font-lato text-white">{impact}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="text-center">
                  <div className="bg-white p-8 rounded-lg text-gray-800">
                    <div className="w-16 h-16 bg-warm-orange rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-montserrat font-bold text-2xl mb-2">Alumni Impact</h3>
                    <p className="font-lato text-muted-foreground">
                      Building tomorrow's leaders, one graduate at a time
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Summary Stats */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="font-montserrat font-bold text-4xl text-gray-800 mb-6">Alumni by the Numbers</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center border-none shadow-lg">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-teal rounded-full flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="w-8 h-8 text-white" />
                </div>
                <div className="font-montserrat font-bold text-3xl text-gray-800 mb-2">Martha</div>
                <p className="font-lato text-muted-foreground">Returned to school after becoming a teenage mother; now a qualified teacher</p>
              </CardContent>
            </Card>

            <Card className="text-center border-none shadow-lg">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-warm-orange rounded-full flex items-center justify-center mx-auto mb-4">
                  <Trophy className="w-8 h-8 text-white" />
                </div>
                <div className="font-montserrat font-bold text-3xl text-gray-800 mb-2">Grace</div>
                <p className="font-lato text-muted-foreground">Earned a sports scholarship to study at the University of Zambia</p>
              </CardContent>
            </Card>

            <Card className="text-center border-none shadow-lg">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-teal rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <div className="font-montserrat font-bold text-3xl text-gray-800 mb-2">Lillian</div>
                <p className="font-lato text-muted-foreground">Coaching a youth girls' team, inspiring the next generation</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Why This Matters to Donors */}
        <section>
          <Card className="border-none shadow-lg">
            <CardContent className="p-8 text-center">
              <Quote className="w-12 h-12 text-teal mx-auto mb-6" />
              <h2 className="font-montserrat font-bold text-3xl text-gray-800 mb-6">Why This Matters</h2>
              <p className="font-lato text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
                These are the stories your donations make possible. Every scholarship earned, every career started, 
                every girl who chooses school over the streets — it all begins with someone believing in her enough to invest in her journey.
              </p>
              <p className="font-lato text-lg text-gray-600 mb-8">
                Your support doesn't just fund today's matches — it builds tomorrow's leaders. Every alum carries forward the lessons of discipline, 
                teamwork, and hope — showing younger girls that anything is possible.
              </p>
              <Button 
                onClick={() => onPageChange('donate')}
                className="bg-warm-orange hover:bg-orange-600 text-white font-montserrat font-medium text-lg px-10 py-4"
              >
                Donate Today — Be Part of the Next Success Story
              </Button>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}