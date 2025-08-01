import React from 'react'

// Componentes das sections
export const Hero = () => (
  <div className="text-center py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg">
    <h1 className="text-5xl font-bold mb-4">Bem-vindo ao nosso site</h1>
    <p className="text-xl">Descubra soluções incríveis para o seu negócio</p>
  </div>
)

export const About = () => (
  <div className="py-16 bg-gray-50 rounded-lg">
    <h2 className="text-3xl font-bold text-center mb-8">Sobre Nós</h2>
    <p className="text-center text-lg max-w-3xl mx-auto">
      Somos uma empresa dedicada a fornecer as melhores soluções para nossos
      clientes. Com anos de experiência no mercado, oferecemos qualidade e
      inovação.
    </p>
  </div>
)

export const Services = () => (
  <div className="py-16">
    <h2 className="text-3xl font-bold text-center mb-8">Nossos Serviços</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="text-center p-6 bg-white rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-2">Consultoria</h3>
        <p>Orientação especializada para seu negócio</p>
      </div>
      <div className="text-center p-6 bg-white rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-2">Desenvolvimento</h3>
        <p>Soluções tecnológicas personalizadas</p>
      </div>
      <div className="text-center p-6 bg-white rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-2">Suporte</h3>
        <p>Atendimento 24/7 para nossos clientes</p>
      </div>
    </div>
  </div>
)

export const Portfolio = () => (
  <div className="py-16 bg-gray-50 rounded-lg">
    <h2 className="text-3xl font-bold text-center mb-8">Portfólio</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[1, 2, 3, 4, 5, 6].map((item) => (
        <div
          key={item}
          className="bg-white rounded-lg shadow-md overflow-hidden"
        >
          <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500"></div>
          <div className="p-4">
            <h3 className="font-semibold mb-2">Projeto {item}</h3>
            <p className="text-sm text-gray-600">
              Descrição do projeto realizado
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
)

export const Team = () => (
  <div className="py-16">
    <h2 className="text-3xl font-bold text-center mb-8">Nossa Equipe</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {['João Silva', 'Maria Santos', 'Pedro Costa'].map((name) => (
        <div key={name} className="text-center">
          <div className="w-32 h-32 bg-gradient-to-br from-gray-300 to-gray-400 rounded-full mx-auto mb-4"></div>
          <h3 className="text-xl font-semibold mb-2">{name}</h3>
          <p className="text-gray-600">Especialista em tecnologia</p>
        </div>
      ))}
    </div>
  </div>
)

export const Testimonials = () => (
  <div className="py-16 bg-gray-50 rounded-lg">
    <h2 className="text-3xl font-bold text-center mb-8">Depoimentos</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {[
        { name: 'Ana Oliveira', text: 'Serviço excelente! Recomendo a todos.' },
        {
          name: 'Carlos Mendes',
          text: 'Profissionais muito competentes e atenciosos.'
        },
        { name: 'Lucia Ferreira', text: 'Resultado além das expectativas.' },
        { name: 'Ricardo Lima', text: 'Equipe dedicada e soluções eficientes.' }
      ].map((testimonial, index) => (
        <div key={index} className="bg-white p-6 rounded-lg shadow-md">
          <p className="italic mb-4">"{testimonial.text}"</p>
          <p className="font-semibold text-right">- {testimonial.name}</p>
        </div>
      ))}
    </div>
  </div>
)

export const Pricing = () => (
  <div className="py-16">
    <h2 className="text-3xl font-bold text-center mb-8">Preços</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {[
        {
          plan: 'Básico',
          price: 'R$ 99',
          features: ['Recurso A', 'Recurso B', 'Suporte Email']
        },
        {
          plan: 'Pro',
          price: 'R$ 199',
          features: ['Recurso A', 'Recurso B', 'Recurso C', 'Suporte Chat']
        },
        {
          plan: 'Premium',
          price: 'R$ 299',
          features: ['Todos os recursos', 'Suporte 24/7', 'Consultoria']
        }
      ].map((plan, index) => (
        <div
          key={index}
          className="bg-white p-6 rounded-lg shadow-md border-2 border-gray-200 hover:border-blue-500 transition-colors"
        >
          <h3 className="text-2xl font-bold text-center mb-2">{plan.plan}</h3>
          <p className="text-3xl font-bold text-center text-blue-600 mb-4">
            {plan.price}
          </p>
          <ul className="space-y-2">
            {plan.features.map((feature, i) => (
              <li key={i} className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                {feature}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </div>
)

export const Blog = () => (
  <div className="py-16 bg-gray-50 rounded-lg">
    <h2 className="text-3xl font-bold text-center mb-8">Blog</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[
        { title: 'Como melhorar sua produtividade', date: '15 Jul 2025' },
        { title: 'Tendências de tecnologia para 2025', date: '12 Jul 2025' },
        { title: 'Dicas para crescer seu negócio', date: '10 Jul 2025' },
        {
          title: 'A importância da transformação digital',
          date: '08 Jul 2025'
        },
        { title: 'Estratégias de marketing eficazes', date: '05 Jul 2025' },
        { title: 'Como otimizar processos internos', date: '03 Jul 2025' }
      ].map((post, index) => (
        <div
          key={index}
          className="bg-white rounded-lg shadow-md overflow-hidden"
        >
          <div className="h-40 bg-gradient-to-br from-green-400 to-blue-500"></div>
          <div className="p-4">
            <h3 className="font-semibold mb-2">{post.title}</h3>
            <p className="text-sm text-gray-600">{post.date}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
)

export const Contact = () => (
  <div className="py-16">
    <h2 className="text-3xl font-bold text-center mb-8">Contato</h2>
    <div className="max-w-2xl mx-auto">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Entre em contato</h3>
            <div className="space-y-3">
              <p className="flex items-center">
                <span className="font-semibold mr-2">📧</span>
                contato@exemplo.com
              </p>
              <p className="flex items-center">
                <span className="font-semibold mr-2">📱</span>
                (11) 99999-9999
              </p>
              <p className="flex items-center">
                <span className="font-semibold mr-2">📍</span>
                São Paulo, SP
              </p>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Horário de atendimento
            </h3>
            <div className="space-y-2">
              <p>Segunda à Sexta: 9h às 18h</p>
              <p>Sábado: 9h às 13h</p>
              <p>Domingo: Fechado</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)
