document.addEventListener('DOMContentLoaded', () => {
    const timelineEvents = [
        { title: 'Inicio', description: 'Mi camino en el desarrollo multiplataforma (web y móvil) comenzó con una dedicación total, invirtiendo más de 15 horas diarias en mejorar mis habilidades de programación, arquitectura de software y resolución de problemas.' },
        { title: 'Primer Proyecto', description: 'Durante mi formación en Desarrollo de Aplicaciones Web y Móviles, trabajé en una aplicación para una protectora de animales. Fui responsable del desarrollo completo de una de las aplicaciones, contribuyendo con más del 50% del proyecto.' },
        { title: 'Mejoras', description: 'Identifiqué áreas clave de mejora y continué perfeccionando mis habilidades en desarrollo full-stack, abarcando tanto el frontend como el backend en entornos web y móviles.' },
        { title: 'Actualidad', description: 'Tras haber participado en diversos proyectos, sigo en constante evolución, explorando nuevas tecnologías y buscando oportunidades para desarrollar aplicaciones innovadoras en múltiples plataformas.' }
    ];

    const projects = [
        { 
            title: 'Aplicación para Protectora de Animales', 
            description: 'Desarrollo completo de una de las aplicaciones, participando en más del 50% del proyecto. Creación de interfaces en XML y desarrollo con Kotlin. Implementación de arquitectura MVVM y pruebas con Postman.',
            technologies: ['Kotlin', 'XML', 'MVVM', 'Postman']
        },
        { 
            title: 'Optimización y Seguridad en Aplicaciones Web', 
            description: 'Participé en la mejora de infraestructura y seguridad en dos aplicaciones web simultáneamente, desarrolladas en C# y .NET, optimizando el rendimiento y fortaleciendo la protección contra vulnerabilidades.',
            technologies: ['C#', '.NET', 'Security', 'Performance']
        },
        { 
            title: 'Migración de Aplicación de Transporte', 
            description: 'Lideré la migración de una aplicación de transporte de Java 6 a Kotlin, mejorando el código, modernizando la arquitectura y asegurando compatibilidad con versiones más recientes.',
            technologies: ['Java', 'Kotlin', 'Migration', 'Architecture']
        },
        { 
            title: 'Aplicación Móvil para un Hospital', 
            description: 'Desarrollo de módulos para una aplicación hospitalaria enfocada en mejorar la experiencia del usuario y gestión de datos. Cada módulo se incorporó de manera independiente, asegurando escalabilidad y eficiencia.',
            technologies: ['Kotlin', 'Jetpack Compose', 'Coroutines', 'Architecture', 'Testing']
        }
    ];

    const timelineContainer = document.getElementById('timeline-container');
    timelineEvents.forEach(event => {
        const eventDiv = document.createElement('div');
        eventDiv.classList.add('event');
        eventDiv.innerHTML = `<h3>${event.title}</h3><p>${event.description}</p>`;
        timelineContainer.appendChild(eventDiv);
    });

    const projectsContainer = document.getElementById('projects-container');
    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.classList.add('project-card');
        
        // Crear etiquetas de tecnología con Shields.io
        let techBadges = '';
        project.technologies.forEach(tech => {
            let techUrl = tech;
            if (tech === 'C#') {
                techUrl = 'csharp';
            }
            techBadges += `<img src="https://img.shields.io/badge/${techUrl.replace(/ /g, '%20')}-blue?style=for-the-badge" alt="${tech}" class="tech-badge" loading="lazy"> `;
        });

        projectCard.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <div class="tech-badges">${techBadges}</div>
        `;
        projectsContainer.appendChild(projectCard);
    });
});