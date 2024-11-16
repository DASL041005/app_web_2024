from django.shortcuts import render

# Create your views here.

def index(requets):
    return render(requets,'mainapp/index.html', {
        'title': 'Página Principal',
        'content' : '..:: ¡Bienvenido a mi Página Principal! ::..'
    })

def about (request):
    mensaje='Bienvenido mi Nombre es:Pablo...'
    return render (request, 'mainapp/about.html', {
        'title': 'Acerca de Nosotros',
        'content': 'Soy un estudiante de Tecnología de la Información apasionado por el aprendizaje y el desarrollo de habilidades técnicas que me permitan resolver problemas complejos en el mundo digital. Me especializo en áreas como programación, bases de datos, redes y seguridad informática, con el objetivo de construir una carrera profesional sólida y aportar valor a la industria tecnológica. Estoy comprometido con la innovación, el trabajo ético y el aprendizaje continuo, buscando siempre soluciones prácticas que generen un impacto positivo y significativo en la sociedad.',
        'mensaje': mensaje
    })

def mision (request):
    return render (request, 'mainapp/mision.html', {
        'title': 'Misión',
        'content': 'Ser un estudiante comprometido con el desarrollo de habilidades técnicas y de pensamiento crítico en el ámbito de la tecnología de la información, orientado a encontrar soluciones innovadoras y éticas que contribuyan al avance tecnológico y al bienestar social.',
    })

def vision (request):
    return render (request, 'mainapp/mision.html', {
        'title': 'Visión',
        'content': 'Convertirme en un profesional altamente capacitado en el campo de la tecnología de la información, reconocido por mi compromiso con el aprendizaje continuo, la adaptabilidad ante los avances tecnológicos y mi habilidad para liderar proyectos que generen un impacto positivo en la sociedad'
    })

def redirigir_inicio(request,exception):
    return render(request, 'mainapp/404.html')