    // Cursor personalizado
    const cursor = document.querySelector('.cursor');
    let mouseX = 0, mouseY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        cursor.style.left = mouseX + 'px';
        cursor.style.top = mouseY + 'px';
    });

    // Activar cursor en elementos interactivos
    document.querySelectorAll('.hover-effect, .close-btn').forEach(el => {
        el.addEventListener('mouseenter', () => cursor.classList.add('active'));
        el.addEventListener('mouseleave', () => cursor.classList.remove('active'));
    });

    // Secuencia de boot
    setTimeout(() => {
        document.getElementById('bootScreen').style.opacity = '0';
        setTimeout(() => {
            document.getElementById('bootScreen').style.display = 'none';
            document.getElementById('mainInterface').classList.add('active');
        }, 1000);
    }, 3500);

    // Generar partículas
    function createParticles() {
        const particles = document.getElementById('particles');
        for (let i = 0; i < 50; i++) {
            const particle = document.createElement('div');
            particle.classList.add('particle');
            particle.style.left = Math.random() * 100 + '%';
            particle.style.top = Math.random() * 100 + '%';
            particle.style.animationDelay = Math.random() * 6 + 's';
            particle.style.animationDuration = (Math.random() * 3 + 3) + 's';
            particles.appendChild(particle);
        }
    }

    // Generar líneas conectoras
    function createConnectors() {
        const nodeSystem = document.querySelector('.node-system');
        const centralNode = document.getElementById('centralNode');
        const satellites = document.querySelectorAll('.satellite-node');

        satellites.forEach((satellite, index) => {
            const connector = document.createElement('div');
            connector.classList.add('connector');
            
            // Calcular posición y rotación
            const centralRect = centralNode.getBoundingClientRect();
            const satelliteRect = satellite.getBoundingClientRect();
            
            const deltaX = satelliteRect.left - centralRect.left;
            const deltaY = satelliteRect.top - centralRect.top;
            const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
            const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
            
            connector.style.width = distance + 'px';
            connector.style.transform = `rotate(${angle}deg)`;
            connector.style.left = '50%';
            connector.style.top = '50%';
            connector.style.transformOrigin = 'left center';
            
            nodeSystem.appendChild(connector);
        });
    }

    // Contenido de las secciones
    const sectionContent = {
        perfil: {
            title: "PERFIL PROFESIONAL",
            content: `
                <div class="profile-container">
                    <div class="profile-main">
                        <p class="profile-description">Desarrolladora junior fullstack interesada por la tecnología y el desarrollo de software. Con habilidades autodidactas y una fuerte motivación para aprender y crecer en el ámbito de la programación, destacando por una capacidad de análisis, creatividad y enfoque en la resolución de problemas comprometida con contribuir en proyectos que impulsen la innovación y la eficiencia, adquiriendo experiencia y conocimientos para crecer profesionalmente en el área de software.</p>
                    </div>
                    <div class="profile-skills">
                        <h3>Competencias Clave</h3>
                        <div class="skills-grid">
                            <div class="skill-item">Liderazgo</div>
                            <div class="skill-item">Pensamiento estratégico</div>
                            <div class="skill-item">Comunicador</div>
                            <div class="skill-item">Gestión del tiempo</div>
                            <div class="skill-item">Innovador</div>
                            <div class="skill-item">Pensamiento Ágil</div>
                        </div>
                    </div>
                </div>
            `
        },
        proyectos: {
            title: "EXPERIMENTOS DIGITALES",
            content: `
                <div class="projects-container">
                    <div class="project-card">
                        <div class="project-header">
                            <h3>Sistema de Gestión Académica</h3>
                            <span class="project-date">Febrero 2024</span>
                        </div>
                        <p class="project-description">Desarrollo de un programa que permite llevar el seguimiento académico de todos los campers que ingresan matriculados en el programa intensivo de programación contando con diferentes roles con sus respectivos permisos y organizaciones.</p>
                        <div class="project-tech">
                            <span class="tech-tag">JavaScript</span>
                            <span class="tech-tag">MongoDB</span>
                            <span class="tech-tag">Html</span>
                            <span class="tech-tag">CSS</span>
                        </div>
                    </div>
                    
                    <div class="project-card">
                        <div class="project-header">
                            <h3>Kario Media - Panel de Gestión</h3>
                            <span class="project-date">Abril 2024</span>
                        </div>
                        <p class="project-description">Desarrollo de un aplicativo web que muestra el panel de gestionamiento de proyectos y sus módulos necesarios para la empresa "Kario Media", que realiza licitaciones públicas y privadas de varios nichos de negocio.</p>
                        <div class="project-tech">
                            <span class="tech-tag">JavaScript</span>
                            <span class="tech-tag">Html</span>
                            <span class="tech-tag">CSS</span>
                        </div>
                    </div>
                    
                    <div class="project-card">
                        <div class="project-header">
                            <h3>Simulador Fórmula 1</h3>
                            <span class="project-date">Mayo 2024</span>
                        </div>
                        <p class="project-description">Desarrollo de una página de simulación interactiva de Fórmula 1 basada en tecnologías web modernas, permitiendo a los usuarios gestionar y personalizar su experiencia de carrera a través de un sistema dinámico de administración de circuitos, pilotos y vehículos.</p>
                        <div class="project-tech">
                            <span class="tech-tag">JavaScript</span>
                            <span class="tech-tag">Html</span>
                            <span class="tech-tag">CSS</span>
                        </div>
                    </div>
                </div>
            `
        },
        skills: {
            title: "ARSENAL TECNOLÓGICO",
            content: `
                <div class="skills-container">
                    <div class="tech-section">
                        <h3>Lenguajes & Frameworks</h3>
                        <div class="tech-grid">
                            <div class="tech-card">
                                <div class="tech-icon">🐍</div>
                                <span>Python</span>
                            </div>
                            <div class="tech-card">
                                <div class="tech-icon">💛</div>
                                <span>JavaScript</span>
                            </div>
                            <div class="tech-card">
                                <div class="tech-icon">🍃</div>
                                <span>MongoDB</span>
                            </div>
                            <div class="tech-card">
                                <div class="tech-icon">🏗️</div>
                                <span>HTML</span>
                            </div>
                            <div class="tech-card">
                                <div class="tech-icon">🎨</div>
                                <span>CSS</span>
                            </div>
                            <div class="tech-card">
                                <div class="tech-icon">🗄️</div>
                                <span>MySQL</span>
                            </div>
                        </div>
                    </div>
                    
                    <div class="languages-section">
                        <h3>Idiomas</h3>
                        <div class="language-item">
                            <span class="language-name">Inglés</span>
                            <span class="language-level">B1 - Intermedio</span>
                        </div>
                        <div class="language-item">
                            <span class="language-name">Español</span>
                            <span class="language-level">Nativo</span>
                        </div>
                    </div>
                </div>
            `
        },
        contacto: {
            title: "ESTABLECER CONEXIÓN",
            content: `
                <div class="contact-container">
                    <div class="contact-intro">
                        <p>¿Listo para colaborar en el siguiente experimento digital?</p>
                        <p class="contact-philosophy">Prefiero conversaciones que comiencen con una pregunta interesante o un desafío técnico.</p>
                    </div>
                    
                    <div class="contact-links">
                        <div class="contact-item">
                            <div class="contact-icon">💼</div>
                            <div class="contact-info">
                                <h4>LinkedIn</h4>
                                <a href="#" class="contact-link">Conectar profesionalmente</a>
                            </div>
                        </div>
                        
                        <div class="contact-item">
                            <div class="contact-icon">🚀</div>
                            <div class="contact-info">
                                <h4>GitHub</h4>
                                <a href="#" class="contact-link">Explorar repositorios</a>
                            </div>
                        </div>
                        
                        <div class="contact-item">
                            <div class="contact-icon">📁</div>
                            <div class="contact-info">
                                <h4>Portfolio</h4>
                                <a href="#" class="contact-link">Ver proyectos completos</a>
                            </div>
                        </div>
                    </div>
                    
                    <div class="contact-footer">
                        <p><em>"Las mejores ideas nacen en la intersección de mentes curiosas."</em></p>
                        <p>Respondo dentro de 24 horas. Si no lo hago, es porque estoy debuggeando algún problema fascinante.</p>
                    </div>
                </div>
            `
        },
        experiencia: {
            title: "HISTORIAL DE EJECUCIÓN",
            content: `
                <div class="timeline-container">
                    <div class="timeline-item">
                        <div class="timeline-date">2024</div>
                        <div class="timeline-content">
                            <h3>Bachiller</h3>
                            <p class="timeline-institution">Colegio Cooperativo Comfenalco</p>
                            <p class="timeline-description">Graduación con enfoque en ciencias exactas y preparación para estudios superiores en tecnología.</p>
                        </div>
                    </div>
                    
                    <div class="timeline-item">
                        <div class="timeline-date">2025</div>
                        <div class="timeline-content">
                            <h3>Junior Fullstack</h3>
                            <p class="timeline-institution">Campuslands</p>
                            <p class="timeline-description">Programa intensivo de desarrollo fullstack con enfoque en tecnologías modernas y metodologías ágiles.</p>
                        </div>
                    </div>
                    
                    <div class="experience-note">
                        <p><strong>Estado actual:</strong> En proceso de consolidación de conocimientos y búsqueda de oportunidades profesionales.</p>
                        <p><strong>Enfoque:</strong> Desarrollo web fullstack con especialización en JavaScript y bases de datos.</p>
                    </div>
                </div>
            `
        },
        vision: {
            title: "VISIÓN SISTÉMICA",
            content: `
                <p><strong>Misión:</strong> Crear tecnología que amplifique el potencial humano</p>
                <br>
                <p><strong>Visión:</strong> Un futuro donde la tecnología sea invisible, intuitiva y empoderador</p>
                <br>
                <p><strong>Valores:</strong></p>
                <p>• Innovación consciente</p>
                <p>• Simplicidad elegante</p>
                <p>• Impacto sostenible</p>
                <p>• Colaboración auténtica</p>
                <br>
                <p><strong>Filosofía:</strong> "La innovación nace del caos estructurado"</p>
                <br>
                <p>Cada línea de código es una oportunidad para mejorar la experiencia humana con la tecnología.</p>
            `
        }
    };

    // Funcionalidad de nodos
    document.querySelectorAll('.satellite-node').forEach(node => {
        node.addEventListener('click', () => {
            const section = node.dataset.section;
            const content = sectionContent[section];
            
            if (content) {
                document.getElementById('contentHeader').textContent = content.title;
                document.getElementById('contentBody').innerHTML = content.content;
                document.getElementById('contentPanel').classList.add('active');
            }
        });
    });

    // Cerrar panel
    document.getElementById('closeBtn').addEventListener('click', () => {
        document.getElementById('contentPanel').classList.remove('active');
    });

    // Nodo central interactivo
    document.getElementById('centralNode').addEventListener('click', () => {
        const nodes = document.querySelectorAll('.satellite-node');
        nodes.forEach((node, index) => {
            setTimeout(() => {
                node.style.animation = 'pulse 0.5s ease-in-out';
            }, index * 100);
        });
    });

    // Inicializar
    createParticles();
    setTimeout(createConnectors, 1000);

    function changeProfileImage(imageSrc) {
        const profileImage = document.getElementById('profileImage');
        profileImage.src = imageSrc;
    }
