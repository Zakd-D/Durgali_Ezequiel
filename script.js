/**
 * SYNAPSE & ÁRBOLES ANCESTRALES - CORE ENGINE
 * Conexión Arbórea, Bio-Gimbal Somático & Purificación Ramificada
 */

document.addEventListener('DOMContentLoaded', () => {

  /* ==========================================================================
     GLOBAL DATA DEFINITIONS: LOS 8 ÁRBOLES ANCESTRALES
     ========================================================================== */

  const TREES_DATA = [
    {
      id: 'roble',
      name: 'Roble Ancestral',
      botanical: 'Quercus robur (La Fuerza de la Raíz)',
      benefit: 'Enraizamiento somático profundo, sostén ante crisis y resiliencia ante vendavales emocionales.',
      icon: 'fa-shield-halved',
      color: '#d97706',
      grounding: 96,
      purification: 65,
      damping: 92,
      crown: 55,
      interactions: ['Abrazo de Tronco', 'Descanso en Raíces', 'Corteza en Temazcal'],
      prescription: 'Abrazo de tronco de 15 minutos. Su corteza rugosa descarga la hipervigilancia pélvica y restaura el sentido de hogar interior.'
    },
    {
      id: 'sauce',
      name: 'Sauce de Río',
      botanical: 'Salix babylonica (La Fluidez del Agua)',
      benefit: 'Flexibilidad neuromuscular, liberación del llanto retenido y descompresión de articulaciones rígidas.',
      icon: 'fa-water',
      color: '#10b981',
      grounding: 60,
      purification: 70,
      damping: 98,
      crown: 75,
      interactions: ['Sombra Llorona', 'Respiración de Río', 'Compresas de Hojas'],
      prescription: 'Meditar bajo sus ramas caídas. El sauce no se quiebra con el viento; enseña al sistema nervioso a doblarse sin romperse.'
    },
    {
      id: 'eucalipto',
      name: 'Eucalipto de Montaña',
      botanical: 'Eucalyptus globulus (El Aliento Libre)',
      benefit: 'Apertura torácica instantánea, eliminación de fitoncidas antibacteriales y desahogo de penas guardadas en el pecho.',
      icon: 'fa-wind',
      color: '#52b788',
      grounding: 55,
      purification: 98,
      damping: 68,
      crown: 90,
      interactions: ['Inhalación de Fitoncidas', 'Vapor de Temazcal', 'Paseo Olfativo'],
      prescription: 'Inhalación profunda de sus hojas en vapor de temazcal. Limpia las ramificaciones bronquiales y alivia la sensación de opresión.'
    },
    {
      id: 'pino',
      name: 'Pino Silvestre & Cedro',
      botanical: 'Pinus sylvestris (El Centinela de la Sangre)',
      benefit: 'Depuración sanguínea por bio-terpenos, vitalidad límpida y elevación de la energía vital en estados de decaimiento.',
      icon: 'fa-tree',
      color: '#2d6a4f',
      grounding: 78,
      purification: 94,
      damping: 76,
      crown: 85,
      interactions: ['Pisar Acículas', 'Resina Protectora', 'Baño de Bosque'],
      prescription: 'Caminar descalzo sobre el lecho de acículas de pino. La resina y el aroma a bosque puro reinician el sistema inmunológico.'
    },
    {
      id: 'abedul',
      name: 'Abedul Blanco',
      botanical: 'Betula alba (La Linfa Serena)',
      benefit: 'Drenaje linfático, eliminación de edemas por sobrecarga y renovación de la microflora dérmica.',
      icon: 'fa-feather',
      color: '#38bdf8',
      grounding: 52,
      purification: 88,
      damping: 70,
      crown: 86,
      interactions: ['Tacto de Corteza Plateada', 'Savia Purificante', 'Ritual Dérmico'],
      prescription: 'Acariciar suavemente su corteza suave y blanca. Conecta con la suavidad perdida y drena el cansancio de la piel.'
    },
    {
      id: 'ceiba',
      name: 'Ceiba Sagrada Madre',
      botanical: 'Ceiba pentandra (El Eje Cósmico)',
      benefit: 'Apertura de la corona, perspectiva espiritual sobre problemas cotidianos y sensación de cobijo maternal.',
      icon: 'fa-sun',
      color: '#e0aa6a',
      grounding: 88,
      purification: 72,
      damping: 85,
      crown: 98,
      interactions: ['Contemplación de Copa', 'Silencio de Raíces Tabulares', 'Meditación'],
      prescription: 'Sentarse entre sus gigantescas raíces tabulares. La escala de su copa recuerda la pequeñez de las prisas humanas.'
    },
    {
      id: 'olivo',
      name: 'Olivo Centenario',
      botanical: 'Olea europaea (La Paz Celular)',
      benefit: 'Desinflamación a nivel mitocondrial, quietud ancestral y fortalecimiento de la longevidad del nervio vago.',
      icon: 'fa-leaf',
      color: '#a3b18a',
      grounding: 92,
      purification: 80,
      damping: 95,
      crown: 82,
      interactions: ['Oleoterapia', 'Sombra Nutricia', 'Cata de Aceite Vivo'],
      prescription: 'Reposo en silencio bajo su sombra nudosa. Transmite la serenidad de quien ha sobrevivido siglos de sequías y tormentas.'
    },
    {
      id: 'higuera',
      name: 'Higuera Sagrada',
      botanical: 'Ficus carica (El Corazón Sosiego)',
      benefit: 'Regulación del ritmo cardíaco, liberación de la angustia estomacal y reconexión con la dulzura de vivir.',
      icon: 'fa-heart',
      color: '#c084fc',
      grounding: 82,
      purification: 68,
      damping: 88,
      crown: 80,
      interactions: ['Aroma Dulce de Hoja', 'Descanso Torácico', 'Infusión Serena'],
      prescription: 'Colocar la palma de la mano sobre el tronco y respirar hacia el plexo solar. Calma el nudo del estómago de inmediato.'
    }
  ];

  /* BIOMAS FORESTALES */
  const BIOMES_DATA = [
    {
      id: 'robles',
      title: 'Bosque Ancestral de Robles & Quebradas',
      desc: 'Altitud serena, aire puro cargado de humedad viva, aguas termales y cuevas de sal. Silencio mineral para un reseteo profundo.',
      icon: 'fa-tree',
      price: 550,
      vibe: 'Enraizamiento & Fuerza',
      defaultReelIndex: 0
    },
    {
      id: 'eucaliptos',
      title: 'Selva Nubosa de Eucaliptos & Cedros',
      desc: 'Niebla medicinal matutina saturada de fitoncidas. El sonido de cascadas y el bosque primario disuelven la fatiga mental.',
      icon: 'fa-cloud-meatball',
      price: 620,
      vibe: 'Oxigenación 528Hz',
      defaultReelIndex: 1
    },
    {
      id: 'sauces',
      title: 'Valle Fluvial de Sauces & Olivos',
      desc: 'Senderos llanos junto a ríos cristalinos, dunas de cuarzo y huertos centenarios. Brisa sedante que alivia las tensiones del cuerpo.',
      icon: 'fa-water',
      price: 580,
      vibe: 'Fluidez & Descompresión',
      defaultReelIndex: 2
    }
  ];

  /* MOVILIDAD SUAVE */
  const MOBILITY_DATA = [
    {
      id: 'bike',
      title: 'Bicicleta Gravel / E-Bike Especializada',
      desc: 'Pedaleo suave asistido por senderos ecológicos entre bosques. Soporte para respirar al ritmo natural de tus pulsaciones.',
      icon: 'fa-person-biking',
      price: 180,
      vibe: 'Silencio Somático'
    },
    {
      id: 'car',
      title: 'Auto Eléctrico / SUV con Suspensión Gimbal',
      desc: 'Vehículo cero emisiones con amortiguación hidroneumática que filtra cada irregularidad del camino para un confort sin sacudidas.',
      icon: 'fa-car-side',
      price: 340,
      vibe: 'Amortiguación Total'
    }
  ];

  /* TRATAMIENTOS DE BOSQUE */
  const TREATMENTS_DATA = [
    {
      id: 'temazcal',
      title: 'Temazcal con Leña & Hojas de tu Alianza',
      desc: 'Baño de vapor medicinal con piedras volcánicas infusionadas con ramas de eucalipto, roble o pino de tu selección.',
      icon: 'fa-fire-burner',
      price: 140,
      vibe: 'Purificación Ramificada'
    },
    {
      id: 'massage',
      title: 'Masaje Neuro-Sedante con Resinas y Aceite',
      desc: 'Descompresión fascial y del nervio vago con aceites prensados de olivo y extractos balsámicos de cedro.',
      icon: 'fa-hands-holding-circle',
      price: 130,
      vibe: 'Paz Muscular'
    },
    {
      id: 'facial',
      title: 'Tratamiento Facial con Savia & Arcillas',
      desc: 'Mascarilla regenerativa de savia de abedul y barros termales para restaurar la barrera dérmica agotada por el estrés.',
      icon: 'fa-spa',
      price: 110,
      vibe: 'Regeneración Viva'
    },
    {
      id: 'haircut',
      title: 'Corte Ritual & Terapia Capilar Botánica',
      desc: 'Corte ceremonial que simboliza soltar patrones de sobrecarga pasados, con tónico capilar de hojas de sauce y romero.',
      icon: 'fa-scissors',
      price: 90,
      vibe: 'Cierre de Ciclos'
    }
  ];

  /* DEGUSTACIONES Y EMPRENDEDORES */
  const TASTINGS_DATA = [
    {
      id: 'miel',
      title: 'Cata de Mieles Melipona de Flores de Bosque',
      desc: 'Degustación de miel pura de abejas nativas que liban en los bosques de eucalipto y roble con apicultores regenerativos.',
      icon: 'fa-jar',
      price: 55,
      vibe: 'Bio-Inmunidad'
    },
    {
      id: 'cacao',
      title: 'Cata de Cacao de Sombra con Cooperativa',
      desc: 'Cacao criollo fino cultivado bajo el dosel de árboles centenarios por una cooperativa familiar de mujeres campesinas.',
      icon: 'fa-mug-hot',
      price: 65,
      vibe: 'Anandamida de Bosque'
    },
    {
      id: 'resinas',
      title: 'Taller de Extracción de Resinas & Fitoncidas',
      desc: 'Aprende con maestros boticarios a destilar hidrolatos y esencias puras de ramas caídas sin dañar los árboles.',
      icon: 'fa-flask-vial',
      price: 75,
      vibe: 'Alquimia Viva'
    },
    {
      id: 'pan-queso',
      title: 'Maridaje de Masa Madre & Queso de Pastoreo',
      desc: 'Pan horneado en leña de poda y quesos artesanales elaborados con leche de vacas que pastan en praderas boscosas.',
      icon: 'fa-bread-slice',
      price: 60,
      vibe: 'Salud Intestinal'
    }
  ];

  /* LIBROS CURADOS */
  const BOOKS_DATA = [
    {
      id: 'vida-arboles',
      title: 'La Vida Secreta de los Árboles',
      author: 'Peter Wohlleben',
      purpose: 'La comunicación vegetal por micorrizas, empatía arbórea y redes de apoyo subterráneas.'
    },
    {
      id: 'cuerpo-cuenta',
      title: 'El Cuerpo Lleva la Cuenta',
      author: 'Bessel van der Kolk',
      purpose: 'Sanación somática, neurobiología del trauma y cómo el organismo retiene y libera el dolor.'
    },
    {
      id: 'shinrin-yoku',
      title: 'Shinrin-Yoku: El Arte del Baño de Bosque',
      author: 'Dr. Qing Li',
      purpose: 'Evidencia científica de los fitoncidas y la reducción del cortisol en la naturaleza.'
    },
    {
      id: 'mente-serena',
      title: 'La Mente Serena & Neuroplasticidad',
      author: 'Dra. Sharon Begley',
      purpose: 'Nuevas conexiones neuronales y re-alambrado de sinapsis hacia la calma perdurable.'
    }
  ];

  /* REELS DE CLIENTES REALES (Superación de Turbulencia) */
  const REELS_DATA = [
    {
      clientName: 'Valentina Morales',
      routeTitle: 'Bosque de Robles & Temazcal Ritual',
      image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=800&q=80',
      quote: '"Venía de una separación muy dura y con el cuerpo en alerta constante. Abrazar el roble centenario y entrar al temazcal con vapor de hojas medicinales me devolvió un eje que creía perdido."',
      hrv: 'HRV: 32 → 81 ms (+153%)',
      mobility: 'SUV Eléctrico con Suspensión Suave',
      book: 'Libro: "El Cuerpo Lleva la Cuenta"',
      dossierTitle: 'Caso Valentina M. — De la Turbulencia a la Paz',
      before: [
        'Sistema simpático disparado (duelo y ansiedad)',
        'Frecuencia en reposo: 86 bpm con palpitaciones',
        'Espasmos cervicales e insomnio crónico'
      ],
      after: [
        'Amortiguación somática plena (eje restaurado)',
        'Frecuencia en reposo: 57 bpm estable',
        'Sueño reparador de 8h y respiración diafragmática'
      ],
      pills: ['Baño de Bosque de Robles', 'Temazcal con Hojas de Eucalipto', 'Masaje Craneosacral', 'Filmmaker Ronin 4K'],
      packBiome: 'robles',
      packMobility: 'car',
      packTreatments: ['temazcal', 'massage', 'facial'],
      packTastings: ['miel', 'cacao'],
      packBook: 'cuerpo-cuenta',
      packFilmmaker: true
    },
    {
      clientName: 'Martín Gómez',
      routeTitle: 'Ruta Gravel Bike & Eucaliptos de Altura',
      image: 'https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&w=800&q=80',
      quote: '"En plena crisis vocacional, pedalear por los senderos de eucalipto sintiendo cómo el aire desatascaba mi pecho me aclaró las ideas. El filmmaker captó momentos de verdad profunda sin estorbar."',
      hrv: 'HRV: 44 → 88 ms (+100%)',
      mobility: 'Gravel E-Bike Asistida',
      book: 'Libro: "Shinrin-Yoku: El Arte del Baño de Bosque"',
      dossierTitle: 'Caso Martín G. — Bosque Nuboso',
      before: [
        'Crisis de ansiedad laboral y fatiga adrenal',
        'Presión arterial 138/92 mmHg por sobrecarga',
        'Incapacidad para parar los pensamientos'
      ],
      after: [
        'Claridad mental cristalina y dopamina sana',
        'Presión arterial estabilizada en 116/74 mmHg',
        'Renovación del propósito y serenidad'
      ],
      pills: ['Gravel Bike', 'Taller de Resinas', 'Corte Ritual', 'Masaje con Aceites'],
      packBiome: 'eucaliptos',
      packMobility: 'bike',
      packTreatments: ['massage', 'haircut'],
      packTastings: ['resinas', 'pan-queso'],
      packBook: 'shinrin-yoku',
      packFilmmaker: true
    },
    {
      clientName: 'Sofía & David',
      routeTitle: 'Ruta Sauces Fluviales & Corte Ritual',
      image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80',
      quote: '"Atravesamos un año turbulento como pareja. Sentarnos junto a los sauces llorones, compartir la cata de cacao campesino y hacernos el corte ceremonial nos permitió soltar el resentimiento y abrazarnos de nuevo."',
      hrv: 'Sincronía Cardíaca Pareja: 96%',
      mobility: 'SUV Eléctrico Panorámico',
      book: 'Libro: "La Vida Secreta de los Árboles"',
      dossierTitle: 'Caso Sofía & David — Valle Fluvial',
      before: [
        'Distanciamiento afectivo por agotamiento mutuo',
        'Respiración corta y reactividad irritable',
        'Dificultad para descansar juntos'
      ],
      after: [
        'Coherencia cardíaca compartida profunda',
        'Reconexión con la dulzura y el descanso',
        'Nuevos acuerdos de vida enraizados'
      ],
      pills: ['Sauces Fluviales', 'Cata Cacao de Sombra', 'Corte Ritual', 'Facial con Savia'],
      packBiome: 'sauces',
      packMobility: 'car',
      packTreatments: ['facial', 'haircut', 'temazcal'],
      packTastings: ['cacao', 'miel', 'pan-queso'],
      packBook: 'vida-arboles',
      packFilmmaker: true
    }
  ];

  /* State Stores */
  const treeAllianceState = {
    selectedTrees: ['roble', 'sauce'],
    customName: 'Alianza Roble & Sauce de Río',
    code: 'SANACIÓN #TR-2026',
    grounding: 0,
    purification: 0,
    damping: 0,
    crown: 0
  };

  const travelState = {
    biome: 'robles',
    mobility: 'bike',
    treatments: ['temazcal', 'massage'],
    tastings: ['cacao', 'miel'],
    book: 'cuerpo-cuenta',
    includeFilmmaker: true,
    linkedTreeAlliance: {
      name: 'Alianza Roble & Sauce de Río',
      trees: ['roble', 'sauce']
    }
  };

  const gimbalState = {
    sensitivity: 1.0,
    pitch: 0,
    roll: 0,
    yaw: 0,
    targetPitch: 0,
    targetRoll: 0,
    targetYaw: 0,
    preset: 'cinematic',
    isLocked: false
  };

  const turbulenceState = {
    isTurbulent: false,
    wavePhase: 0,
    turbulenceIntensity: 0
  };

  const reelState = {
    currentIndex: 0,
    isPlaying: true,
    progress: 0,
    timer: null,
    isLiked: false,
    likesCount: 1620
  };

  /* ==========================================================================
     AUDIO SYNTHESIS ENGINE (Web Audio API - Forest Harmonics)
     ========================================================================== */
  let audioCtx = null;
  let oscForest1 = null;
  let oscForest2 = null;
  let gainForest = null;
  let isAudioActive = false;

  function initAudioContext() {
    if (!audioCtx) {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      audioCtx = new AudioContextClass();
    }
    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
  }

  function toggleForestAudio() {
    initAudioContext();
    if (!isAudioActive) {
      // 432 Hz Natural Earth Tuning & 216 Hz sub-harmonic
      oscForest1 = audioCtx.createOscillator();
      oscForest2 = audioCtx.createOscillator();
      gainForest = audioCtx.createGain();

      oscForest1.type = 'sine';
      oscForest1.frequency.setValueAtTime(432, audioCtx.currentTime); // 432 Hz Earth Grounding

      oscForest2.type = 'triangle';
      oscForest2.frequency.setValueAtTime(216, audioCtx.currentTime); // 216 Hz Warm Root Resonance

      gainForest.gain.setValueAtTime(0.001, audioCtx.currentTime);
      gainForest.gain.exponentialRampToValueAtTime(0.08, audioCtx.currentTime + 2.5);

      oscForest1.connect(gainForest);
      oscForest2.connect(gainForest);
      gainForest.connect(audioCtx.destination);

      oscForest1.start();
      oscForest2.start();

      isAudioActive = true;
      document.getElementById('audio-icon').className = 'fa-solid fa-volume-high';
      document.getElementById('audio-label').textContent = '432 Hz Bosque';
      showToast('Frecuencia de enraizamiento arbóreo 432 Hz activada');
    } else {
      if (gainForest) {
        gainForest.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 1.2);
        setTimeout(() => {
          if (oscForest1) oscForest1.stop();
          if (oscForest2) oscForest2.stop();
        }, 1300);
      }
      isAudioActive = false;
      document.getElementById('audio-icon').className = 'fa-solid fa-volume-xmark';
      document.getElementById('audio-label').textContent = 'Sonido Bosque';
      showToast('Audio de bosque en pausa');
    }
  }

  function playChime(freq = 528) {
    if (!audioCtx || audioCtx.state !== 'running') return;
    try {
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
      gain.gain.setValueAtTime(0.04, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 0.85);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.9);
    } catch (e) {
      // Audio fallback silent
    }
  }

  document.getElementById('toggle-audio-btn').addEventListener('click', toggleForestAudio);
  document.getElementById('reel-sound-toggle').addEventListener('click', toggleForestAudio);

  /* ==========================================================================
     BIO-GIMBAL SOMATIC TURBULENCE & STABILIZATION SIMULATOR
     ========================================================================== */
  const waveCanvas = document.getElementById('neural-wave-canvas');
  const waveCtx = waveCanvas.getContext('2d');
  const btnTriggerTurbulence = document.getElementById('btn-trigger-turbulence');
  const btnTriggerStabilize = document.getElementById('btn-trigger-stabilize');
  const hudStatus = document.getElementById('hud-stabilization-status');
  const virtualHorizon = document.getElementById('virtual-horizon-line');
  const sensitivitySlider = document.getElementById('gimbal-sensitivity-slider');
  const presetLabel = document.getElementById('gimbal-preset-name');
  const presetBtns = document.querySelectorAll('.preset-btn');
  const gimbalFeedbackText = document.getElementById('gimbal-feedback-text');

  // Trigger personal turbulence simulation
  btnTriggerTurbulence.addEventListener('click', () => {
    turbulenceState.isTurbulent = true;
    hudStatus.textContent = 'TURBULENCIA SOMÁTICA DETECTADA (ALERTA)';
    hudStatus.style.color = 'var(--color-danger)';
    gimbalFeedbackText.textContent = 'Organismo sometido a vibración desordenada por estrés agudo';
    showToast('Simulando sacudida somática (estrés/turbulencia personal)...');
    playChime(320);
  });

  // Trigger tree bio-gimbal stabilization
  btnTriggerStabilize.addEventListener('click', () => {
    turbulenceState.isTurbulent = false;
    hudStatus.textContent = 'EQUILIBRIO ANTE TURBULENCIA ACTIVO';
    hudStatus.style.color = 'var(--color-gold)';
    gimbalFeedbackText.textContent = 'Bio-gimbal de los árboles activado: vibración neutralizada y eje en paz';
    showToast('🌿 Soporte arbóreo activado: el organismo recupera su eje suave');
    playChime(528);
  });

  // Real-time Neural Wave Animation
  function renderNeuralWave() {
    waveCtx.clearRect(0, 0, waveCanvas.width, waveCanvas.height);
    const centerY = waveCanvas.height / 2;

    // Smoothly transition turbulence intensity
    const targetIntensity = turbulenceState.isTurbulent ? 1.0 : 0.0;
    turbulenceState.turbulenceIntensity += (targetIntensity - turbulenceState.turbulenceIntensity) * 0.05;

    turbulenceState.wavePhase += 0.05;

    // Draw grid background
    waveCtx.strokeStyle = 'rgba(255, 255, 255, 0.04)';
    waveCtx.lineWidth = 1;
    for (let x = 0; x < waveCanvas.width; x += 40) {
      waveCtx.beginPath();
      waveCtx.moveTo(x, 0);
      waveCtx.lineTo(x, waveCanvas.height);
      waveCtx.stroke();
    }

    // Draw Wave
    waveCtx.beginPath();
    waveCtx.lineWidth = 2.5;

    const isHighTurb = turbulenceState.turbulenceIntensity > 0.4;
    waveCtx.strokeStyle = isHighTurb ? '#f87171' : '#52b788';
    waveCtx.shadowColor = isHighTurb ? '#f87171' : '#52b788';
    waveCtx.shadowBlur = 8;

    for (let x = 0; x < waveCanvas.width; x++) {
      const normalSine = Math.sin(x * 0.02 + turbulenceState.wavePhase) * 28;
      // High frequency erratic noise for turbulence
      const noise = (Math.sin(x * 0.15 + turbulenceState.wavePhase * 3) + Math.cos(x * 0.28)) * 32 * turbulenceState.turbulenceIntensity;
      const y = centerY + normalSine * (1 - turbulenceState.turbulenceIntensity * 0.6) + noise;

      if (x === 0) waveCtx.moveTo(x, y);
      else waveCtx.lineTo(x, y);
    }

    waveCtx.stroke();
    waveCtx.shadowBlur = 0;

    requestAnimationFrame(renderNeuralWave);
  }
  renderNeuralWave();

  // Mouse movement listener with gimbal counter-balance physics
  window.addEventListener('mousemove', (e) => {
    if (gimbalState.isLocked) return;

    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    const normX = (e.clientX - centerX) / centerX;
    const normY = (e.clientY - centerY) / centerY;

    gimbalState.targetRoll = normX * 8 * gimbalState.sensitivity;
    gimbalState.targetPitch = -normY * 6 * gimbalState.sensitivity;
    gimbalState.targetYaw = normX * 12 * gimbalState.sensitivity;
  });

  // Gimbal physics interpolation loop
  function gimbalPhysicsLoop() {
    const damping = gimbalState.preset === 'zen' ? 0.03 : (gimbalState.preset === 'sport' ? 0.12 : 0.06);

    if (!gimbalState.isLocked) {
      gimbalState.pitch += (gimbalState.targetPitch - gimbalState.pitch) * damping;
      gimbalState.roll += (gimbalState.targetRoll - gimbalState.roll) * damping;
      gimbalState.yaw += (gimbalState.targetYaw - gimbalState.yaw) * damping;
    } else {
      gimbalState.pitch += (0 - gimbalState.pitch) * 0.1;
      gimbalState.roll += (0 - gimbalState.roll) * 0.1;
      gimbalState.yaw += (0 - gimbalState.yaw) * 0.1;
    }

    document.documentElement.style.setProperty('--gimbal-pitch', `${gimbalState.pitch.toFixed(1)}deg`);
    document.documentElement.style.setProperty('--gimbal-roll', `${gimbalState.roll.toFixed(1)}deg`);
    document.documentElement.style.setProperty('--gimbal-yaw', `${gimbalState.yaw.toFixed(1)}deg`);

    document.getElementById('hud-roll').textContent = `${gimbalState.roll >= 0 ? '+' : ''}${gimbalState.roll.toFixed(1)}°`;
    document.getElementById('hud-pitch').textContent = `${gimbalState.pitch >= 0 ? '+' : ''}${gimbalState.pitch.toFixed(1)}°`;
    document.getElementById('hud-yaw').textContent = `${gimbalState.yaw >= 0 ? '+' : ''}${gimbalState.yaw.toFixed(1)}°`;

    if (virtualHorizon) {
      virtualHorizon.style.transform = `rotate(${gimbalState.roll}deg) translateY(${gimbalState.pitch * 0.8}px)`;
    }

    requestAnimationFrame(gimbalPhysicsLoop);
  }
  gimbalPhysicsLoop();

  // Slider controls
  sensitivitySlider.addEventListener('input', (e) => {
    gimbalState.sensitivity = parseFloat(e.target.value);
    presetLabel.textContent = `Personalizado (${gimbalState.sensitivity.toFixed(1)}x)`;
    presetBtns.forEach(btn => btn.classList.remove('active'));
  });

  // Preset buttons
  presetBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      presetBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const preset = btn.dataset.preset;
      gimbalState.preset = preset;

      if (preset === 'cinematic') {
        gimbalState.sensitivity = 1.0;
        gimbalState.isLocked = false;
        presetLabel.textContent = 'Suavidad Óptima (1.0x)';
        gimbalFeedbackText.textContent = 'Tus ejes nerviosos se nivelan con la serenidad del bosque';
      } else if (preset === 'sport') {
        gimbalState.sensitivity = 1.8;
        gimbalState.isLocked = false;
        presetLabel.textContent = 'Firmeza Dinámica (1.8x)';
        gimbalFeedbackText.textContent = 'Respuesta ágil ante caminos difíciles y senderos de montaña';
      } else if (preset === 'zen') {
        gimbalState.sensitivity = 0.4;
        gimbalState.isLocked = false;
        presetLabel.textContent = 'Paz Profunda Zen (0.4x)';
        gimbalFeedbackText.textContent = 'Máxima amortiguación para estados de alta vulnerabilidad emocional';
      } else if (preset === 'lock') {
        gimbalState.sensitivity = 0.0;
        gimbalState.isLocked = true;
        presetLabel.textContent = 'Enraizamiento Fijo (Horizon Lock)';
        gimbalFeedbackText.textContent = 'El horizonte somático queda fijado como roca inmóvil';
      }

      sensitivitySlider.value = gimbalState.sensitivity;
      playChime(640);
      showToast(`Amortiguación ajustada a: ${presetLabel.textContent}`);
    });
  });

  // Parallax 3D tilt
  document.querySelectorAll('.tilt-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      const factor = 12 / (rect.width / 2);
      card.style.transform = `perspective(1000px) rotateY(${x * factor}deg) rotateX(${-y * factor}deg) translateY(-5px)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg) translateY(0px)';
    });
  });

  /* ==========================================================================
     SIMULADOR DE CONEXIÓN CON ÁRBOLES ANCESTRALES
     ========================================================================== */
  const treesGrid = document.getElementById('trees-grid');
  const activeTreesCount = document.getElementById('active-trees-count');
  const selectedTreesTags = document.getElementById('selected-trees-tags');
  const treeNameInput = document.getElementById('tree-custom-name');
  const allianceCodeDisplay = document.getElementById('alliance-code');

  const fillGrounding = document.getElementById('fill-grounding');
  const fillPurification = document.getElementById('fill-purification');
  const fillDamping = document.getElementById('fill-damping');
  const fillCrown = document.getElementById('fill-crown');

  const metricGrounding = document.getElementById('metric-grounding');
  const metricPurification = document.getElementById('metric-purification');
  const metricDamping = document.getElementById('metric-damping');
  const metricCrown = document.getElementById('metric-crown');

  const healingPrescriptionText = document.getElementById('healing-prescription-text');
  const bindTreeAllianceBtn = document.getElementById('bind-tree-alliance-btn');
  const downloadTreeCertBtn = document.getElementById('download-tree-cert-btn');
  const suggestedTreeAllianceBtn = document.getElementById('suggested-tree-alliance-btn');
  const resetTreesBtn = document.getElementById('reset-trees-btn');

  // Render Trees Cards
  function renderTrees() {
    treesGrid.innerHTML = '';
    TREES_DATA.forEach(tree => {
      const isSelected = treeAllianceState.selectedTrees.includes(tree.id);
      const card = document.createElement('div');
      card.className = `tree-card ${isSelected ? 'selected' : ''}`;
      card.dataset.id = tree.id;

      card.innerHTML = `
        <div class="tree-icon-box"><i class="fa-solid ${tree.icon}"></i></div>
        <div class="tree-name">${tree.name}</div>
        <div class="tree-botanical">${tree.botanical}</div>
        <div class="tree-benefit">${tree.benefit}</div>
        <div class="tree-interactions-list">
          ${tree.interactions.map(inter => `<span class="tree-action-pill">${inter}</span>`).join('')}
        </div>
      `;

      card.addEventListener('click', () => {
        toggleTree(tree.id);
      });

      treesGrid.appendChild(card);
    });
  }

  function toggleTree(treeId) {
    if (treeAllianceState.selectedTrees.includes(treeId)) {
      if (treeAllianceState.selectedTrees.length > 1) {
        treeAllianceState.selectedTrees = treeAllianceState.selectedTrees.filter(id => id !== treeId);
      } else {
        showToast('Debes conservar al menos 1 árbol en tu alianza');
        return;
      }
    } else {
      if (treeAllianceState.selectedTrees.length >= 4) {
        showToast('Máximo 4 árboles por alianza para evitar sobreestimulación');
        return;
      }
      treeAllianceState.selectedTrees.push(treeId);
    }

    renderTrees();
    updateTreeMetrics();
    playChime(560 + treeAllianceState.selectedTrees.length * 40);
  }

  // Update Biometrics and Prescription based on Trees
  function updateTreeMetrics() {
    const selectedObjs = treeAllianceState.selectedTrees.map(id => TREES_DATA.find(t => t.id === id)).filter(Boolean);

    let sumG = 0, sumP = 0, sumD = 0, sumC = 0;
    selectedObjs.forEach(t => {
      sumG += t.grounding;
      sumP += t.purification;
      sumD += t.damping;
      sumC += t.crown;
    });

    const count = selectedObjs.length;
    treeAllianceState.grounding = Math.round(sumG / count);
    treeAllianceState.purification = Math.round(sumP / count);
    treeAllianceState.damping = Math.round(sumD / count);
    treeAllianceState.crown = Math.round(sumC / count);

    // Update displays
    activeTreesCount.textContent = `${count} ${count === 1 ? 'Árbol' : 'Árboles'}`;
    metricGrounding.textContent = `${treeAllianceState.grounding}%`;
    metricPurification.textContent = `${treeAllianceState.purification}%`;
    metricDamping.textContent = `${treeAllianceState.damping}%`;
    metricCrown.textContent = `${treeAllianceState.crown}%`;

    fillGrounding.style.width = `${treeAllianceState.grounding}%`;
    fillPurification.style.width = `${treeAllianceState.purification}%`;
    fillDamping.style.width = `${treeAllianceState.damping}%`;
    fillCrown.style.width = `${treeAllianceState.crown}%`;

    // Render tags
    selectedTreesTags.innerHTML = '';
    selectedObjs.forEach(t => {
      const tag = document.createElement('span');
      tag.className = 'tree-tag-badge';
      tag.innerHTML = `<i class="fa-solid fa-tree"></i> ${t.name}`;
      selectedTreesTags.appendChild(tag);
    });

    // Auto-update naming
    if (selectedObjs.length > 0) {
      treeNameInput.value = `Alianza ${selectedObjs.map(t => t.name.split(' ')[0]).join(' & ')}`;
    }

    // Prescription Text
    let pres = selectedObjs.map(t => `• ${t.name}: ${t.prescription}`).join(' ');
    if (treeAllianceState.damping >= 90) {
      pres += ' [Alta protección somática contra momentos de crisis personal].';
    }
    healingPrescriptionText.textContent = pres;
  }

  // Mandala pulse canvas
  const mandalaCanvas = document.getElementById('mandala-pulse-canvas');
  const mandalaCtx = mandalaCanvas.getContext('2d');
  let pulseRadius = 20;

  function renderMandalaPulse() {
    mandalaCtx.clearRect(0, 0, mandalaCanvas.width, mandalaCanvas.height);
    pulseRadius += 0.4;
    if (pulseRadius > 140) pulseRadius = 30;

    const centerX = mandalaCanvas.width / 2;
    const centerY = mandalaCanvas.height / 2;

    mandalaCtx.beginPath();
    mandalaCtx.arc(centerX, centerY, pulseRadius, 0, Math.PI * 2);
    mandalaCtx.strokeStyle = 'rgba(216, 159, 85, 0.35)';
    mandalaCtx.lineWidth = 1.5;
    mandalaCtx.stroke();

    mandalaCtx.beginPath();
    mandalaCtx.arc(centerX, centerY, (pulseRadius * 0.7) % 140, 0, Math.PI * 2);
    mandalaCtx.strokeStyle = 'rgba(82, 183, 136, 0.25)';
    mandalaCtx.lineWidth = 1;
    mandalaCtx.stroke();

    requestAnimationFrame(renderMandalaPulse);
  }
  renderMandalaPulse();

  // Suggested Alliance for Turbulence
  suggestedTreeAllianceBtn.addEventListener('click', () => {
    treeAllianceState.selectedTrees = ['roble', 'sauce', 'eucalipto'];
    treeNameInput.value = 'Tríada de Enraizamiento & Desahogo';
    allianceCodeDisplay.textContent = `SANACIÓN #TR-${Math.floor(100 + Math.random() * 900)}`;
    renderTrees();
    updateTreeMetrics();
    playChime(680);
    showToast('¡Tríada "Roble, Sauce & Eucalipto" cargada para calmar turbulencias!');
  });

  // Reset trees
  resetTreesBtn.addEventListener('click', () => {
    treeAllianceState.selectedTrees = ['roble'];
    renderTrees();
    updateTreeMetrics();
    playChime(420);
    showToast('Selección restablecida a Roble Ancestral');
  });

  // Bind tree alliance to trip package
  bindTreeAllianceBtn.addEventListener('click', () => {
    const name = treeNameInput.value.trim() || 'Alianza de Sanación Arbórea';
    travelState.linkedTreeAlliance = {
      name: name,
      trees: [...treeAllianceState.selectedTrees],
      grounding: treeAllianceState.grounding,
      purification: treeAllianceState.purification,
      damping: treeAllianceState.damping,
      crown: treeAllianceState.crown
    };

    updateTripSidebar();
    playChime(840);
    showToast(`🌿 ¡"${name}" vinculada como eje protector de tu viaje!`);
  });

  // Certificate Modal
  const certModal = document.getElementById('certificate-modal');
  const closeCertBtn = document.getElementById('close-certificate-btn');
  const printCertBtn = document.getElementById('print-certificate-btn');
  const certName = document.getElementById('cert-name');
  const certList = document.getElementById('cert-ingredients-list');

  downloadTreeCertBtn.addEventListener('click', () => {
    certName.textContent = treeNameInput.value.trim() || 'Alianza Arbórea de Sanación';
    certList.innerHTML = '';

    treeAllianceState.selectedTrees.forEach(id => {
      const t = TREES_DATA.find(x => x.id === id);
      if (t) {
        const div = document.createElement('div');
        div.textContent = `🌳 ${t.name} (${t.botanical}) — ${t.benefit}`;
        certList.appendChild(div);
      }
    });

    certModal.classList.add('active');
  });

  closeCertBtn.addEventListener('click', () => certModal.classList.remove('active'));
  certModal.addEventListener('click', (e) => {
    if (e.target === certModal) certModal.classList.remove('active');
  });
  printCertBtn.addEventListener('click', () => window.print());

  /* ==========================================================================
     SIMULADOR DE VIAJES & RUTAS ALL-INCLUSIVE
     ========================================================================== */
  const biomeGrid = document.getElementById('biome-options-grid');
  const mobilityGrid = document.getElementById('mobility-options-grid');
  const treatmentsGrid = document.getElementById('treatments-options-grid');
  const tastingsGrid = document.getElementById('tastings-options-grid');
  const booksGrid = document.getElementById('books-options-grid');
  const filmmakerContainer = document.getElementById('filmmaker-card-container');

  const stepPanels = document.querySelectorAll('.step-panel');
  const stepNavBtns = document.querySelectorAll('.step-btn');
  const prevStepBtn = document.getElementById('prev-step-btn');
  const nextStepBtn = document.getElementById('next-step-btn');
  const stepCounterLabel = document.getElementById('step-counter-label');

  let currentStep = 1;
  const totalSteps = 5;

  function renderBiomes() {
    biomeGrid.innerHTML = '';
    BIOMES_DATA.forEach(b => {
      const isSelected = travelState.biome === b.id;
      const card = document.createElement('div');
      card.className = `option-card ${isSelected ? 'selected' : ''}`;
      card.innerHTML = `
        <div class="option-icon-box"><i class="fa-solid ${b.icon}"></i></div>
        <div class="option-title">${b.title}</div>
        <div class="option-desc">${b.desc}</div>
        <div class="option-footer">
          <span class="option-price">$${b.price} USD</span>
          <span class="option-vibe">${b.vibe}</span>
        </div>
      `;
      card.addEventListener('click', () => {
        travelState.biome = b.id;
        renderBiomes();
        updateTripSidebar();
        switchReel(b.defaultReelIndex);
        playChime(600);
      });
      biomeGrid.appendChild(card);
    });
  }

  function renderMobility() {
    mobilityGrid.innerHTML = '';
    MOBILITY_DATA.forEach(m => {
      const isSelected = travelState.mobility === m.id;
      const card = document.createElement('div');
      card.className = `option-card ${isSelected ? 'selected' : ''}`;
      card.innerHTML = `
        <div class="option-icon-box"><i class="fa-solid ${m.icon}"></i></div>
        <div class="option-title">${m.title}</div>
        <div class="option-desc">${m.desc}</div>
        <div class="option-footer">
          <span class="option-price">+$${m.price} USD</span>
          <span class="option-vibe">${m.vibe}</span>
        </div>
      `;
      card.addEventListener('click', () => {
        travelState.mobility = m.id;
        renderMobility();
        updateTripSidebar();
        playChime(620);
      });
      mobilityGrid.appendChild(card);
    });
  }

  function renderTreatments() {
    treatmentsGrid.innerHTML = '';
    TREATMENTS_DATA.forEach(t => {
      const isSelected = travelState.treatments.includes(t.id);
      const card = document.createElement('div');
      card.className = `option-card ${isSelected ? 'selected' : ''}`;
      card.innerHTML = `
        <div class="option-icon-box"><i class="fa-solid ${t.icon}"></i></div>
        <div class="option-title">${t.title}</div>
        <div class="option-desc">${t.desc}</div>
        <div class="option-footer">
          <span class="option-price">+$${t.price} USD</span>
          <span class="option-vibe">${t.vibe}</span>
        </div>
      `;
      card.addEventListener('click', () => {
        if (travelState.treatments.includes(t.id)) {
          if (travelState.treatments.length > 1) {
            travelState.treatments = travelState.treatments.filter(id => id !== t.id);
          } else {
            showToast('Conserva al menos 1 tratamiento de bosque');
            return;
          }
        } else {
          travelState.treatments.push(t.id);
        }
        renderTreatments();
        updateTripSidebar();
        playChime(640);
      });
      treatmentsGrid.appendChild(card);
    });
  }

  function renderTastings() {
    tastingsGrid.innerHTML = '';
    TASTINGS_DATA.forEach(item => {
      const isSelected = travelState.tastings.includes(item.id);
      const card = document.createElement('div');
      card.className = `option-card ${isSelected ? 'selected' : ''}`;
      card.innerHTML = `
        <div class="option-icon-box"><i class="fa-solid ${item.icon}"></i></div>
        <div class="option-title">${item.title}</div>
        <div class="option-desc">${item.desc}</div>
        <div class="option-footer">
          <span class="option-price">+$${item.price} USD</span>
          <span class="option-vibe">${item.vibe}</span>
        </div>
      `;
      card.addEventListener('click', () => {
        if (travelState.tastings.includes(item.id)) {
          if (travelState.tastings.length > 1) {
            travelState.tastings = travelState.tastings.filter(id => id !== item.id);
          } else {
            showToast('Conserva al menos 1 degustación con emprendedores');
            return;
          }
        } else {
          travelState.tastings.push(item.id);
        }
        renderTastings();
        updateTripSidebar();
        playChime(660);
      });
      tastingsGrid.appendChild(card);
    });
  }

  function renderStep5() {
    booksGrid.innerHTML = '';
    BOOKS_DATA.forEach(b => {
      const isSelected = travelState.book === b.id;
      const card = document.createElement('div');
      card.className = `book-card ${isSelected ? 'selected' : ''}`;
      card.innerHTML = `
        <div class="book-title">📖 ${b.title}</div>
        <div class="book-author">Por ${b.author}</div>
        <div class="book-purpose">${b.purpose}</div>
      `;
      card.addEventListener('click', () => {
        travelState.book = b.id;
        renderStep5();
        updateTripSidebar();
        playChime(680);
      });
      booksGrid.appendChild(card);
    });

    const isFilmmakerSelected = travelState.includeFilmmaker;
    filmmakerContainer.className = `filmmaker-card ${isFilmmakerSelected ? 'selected' : ''}`;
    filmmakerContainer.innerHTML = `
      <div class="filmmaker-header">
        <h5>Filmmaker / Fotógrafo Personal (Gimbal 3-Ejes)</h5>
        <span class="option-price">${isFilmmakerSelected ? '+$350 USD' : 'No incluido'}</span>
      </div>
      <p class="option-desc">
        Un documentalista discreto te acompaña con un gimbal motorizado DJI Ronin 4K / óptica 35mm para capturar la transformación y serenidad de tu viaje sin perturbar tu introspección.
      </p>
      <ul class="filmmaker-specs-list">
        <li><i class="fa-solid fa-check"></i> Estabilización 3-Ejes Gimbal ultra-fluida (60 FPS)</li>
        <li><i class="fa-solid fa-check"></i> Reel documental editado en formato vertical (9:16) con audio masterizado</li>
        <li><i class="fa-solid fa-check"></i> 50 fotografías analógicas/digitales en alta resolución</li>
      </ul>
      <button class="btn btn-sm ${isFilmmakerSelected ? 'btn-gold' : 'btn-ghost'} w-full">
        <i class="fa-solid ${isFilmmakerSelected ? 'fa-check' : 'fa-plus'}"></i>
        ${isFilmmakerSelected ? 'Filmmaker Incluido en el Paquete' : 'Añadir Filmmaker Personal (+$350 USD)'}
      </button>
    `;

    filmmakerContainer.onclick = () => {
      travelState.includeFilmmaker = !travelState.includeFilmmaker;
      renderStep5();
      updateTripSidebar();
      playChime(travelState.includeFilmmaker ? 750 : 450);
    };
  }

  function goToStep(stepNum) {
    if (stepNum < 1 || stepNum > totalSteps) return;
    currentStep = stepNum;

    stepPanels.forEach((p, idx) => {
      p.classList.toggle('active', idx + 1 === currentStep);
    });

    stepNavBtns.forEach((btn, idx) => {
      btn.classList.toggle('active', idx + 1 === currentStep);
      btn.classList.toggle('completed', idx + 1 < currentStep);
    });

    stepCounterLabel.textContent = `Paso ${currentStep} de ${totalSteps}`;
    prevStepBtn.disabled = currentStep === 1;

    if (currentStep === totalSteps) {
      nextStepBtn.innerHTML = '<i class="fa-solid fa-calendar-check"></i> Ver Resumen Final';
    } else {
      nextStepBtn.innerHTML = 'Siguiente <i class="fa-solid fa-arrow-right"></i>';
    }
  }

  stepNavBtns.forEach(btn => {
    btn.addEventListener('click', () => goToStep(parseInt(btn.dataset.step)));
  });

  prevStepBtn.addEventListener('click', () => goToStep(currentStep - 1));
  nextStepBtn.addEventListener('click', () => {
    if (currentStep < totalSteps) goToStep(currentStep + 1);
    else openItineraryDrawer();
  });

  // Sidebar Updater
  const summaryLinkedTree = document.getElementById('summary-tree-name');
  const summaryItemsList = document.getElementById('summary-items-list');
  const summaryStabilizationIndex = document.getElementById('summary-stabilization-index');
  const summaryEntrepreneurCount = document.getElementById('summary-entrepreneur-count');
  const summaryGimbalProfile = document.getElementById('summary-gimbal-profile');
  const summaryTotalPrice = document.getElementById('summary-total-price');
  const itineraryBadgeCount = document.getElementById('itinerary-count-badge');

  function updateTripSidebar() {
    let total = 0;
    summaryItemsList.innerHTML = '';

    if (travelState.linkedTreeAlliance) {
      summaryLinkedTree.textContent = travelState.linkedTreeAlliance.name;
    }

    const biomeObj = BIOMES_DATA.find(b => b.id === travelState.biome);
    if (biomeObj) {
      total += biomeObj.price;
      addItemRow(biomeObj.title, `$${biomeObj.price}`);
    }

    const mobilityObj = MOBILITY_DATA.find(m => m.id === travelState.mobility);
    if (mobilityObj) {
      total += mobilityObj.price;
      addItemRow(mobilityObj.title, `$${mobilityObj.price}`);
    }

    travelState.treatments.forEach(tId => {
      const t = TREATMENTS_DATA.find(x => x.id === tId);
      if (t) {
        total += t.price;
        addItemRow(`Ritual: ${t.title}`, `$${t.price}`);
      }
    });

    travelState.tastings.forEach(tId => {
      const taste = TASTINGS_DATA.find(x => x.id === tId);
      if (taste) {
        total += taste.price;
        addItemRow(`Cata: ${taste.title}`, `$${taste.price}`);
      }
    });

    const bookObj = BOOKS_DATA.find(b => b.id === travelState.book);
    if (bookObj) {
      addItemRow(`Libro: ${bookObj.title}`, 'Cortesía');
    }

    if (travelState.includeFilmmaker) {
      total += 350;
      addItemRow('Filmmaker Gimbal 4K 60fps', '$350');
    }

    const stabilizationScore = 84 + (travelState.treatments.length * 3) + (travelState.linkedTreeAlliance ? 7 : 0);
    summaryStabilizationIndex.textContent = `${Math.min(99, stabilizationScore)}% (Protección Alta)`;
    summaryEntrepreneurCount.textContent = `${travelState.tastings.length + 2} Proyectos Locales`;

    if (travelState.mobility === 'bike') {
      summaryGimbalProfile.textContent = 'Gimbal Dinámico (1.8x)';
    } else {
      summaryGimbalProfile.textContent = 'Gimbal Suave (1.0x)';
    }

    summaryTotalPrice.textContent = `$${total.toLocaleString()} USD`;
    document.getElementById('drawer-total-price').textContent = `$${total.toLocaleString()} USD`;

    const totalItems = 2 + travelState.treatments.length + travelState.tastings.length + (travelState.includeFilmmaker ? 1 : 0);
    itineraryBadgeCount.textContent = totalItems;
  }

  function addItemRow(name, price) {
    const row = document.createElement('div');
    row.className = 'summary-item-row';
    row.innerHTML = `
      <span class="summary-item-name">${name}</span>
      <span class="summary-item-price">${price}</span>
    `;
    summaryItemsList.appendChild(row);
  }

  /* ==========================================================================
     REELS DE CLIENTES REALES (Superación de Turbulencia)
     ========================================================================== */
  const reelTabs = document.querySelectorAll('.reel-tab-btn');
  const reelBgImg = document.getElementById('reel-bg-image');
  const reelProgressFill = document.getElementById('reel-progress-fill');
  const reelClientName = document.getElementById('reel-client-name');
  const reelClientQuote = document.getElementById('reel-client-quote');
  const reelLikeBtn = document.getElementById('reel-like-btn');
  const reelLikesCounter = document.getElementById('reel-likes-counter');
  const reelPlayPauseBtn = document.getElementById('reel-play-pause-btn');
  const reelPlayIcon = document.getElementById('reel-play-icon');
  const cloneCasePackBtn = document.getElementById('clone-case-pack-btn');
  const reelApplyPackBtn = document.getElementById('reel-apply-pack-btn');

  const dossierTitle = document.getElementById('dossier-title');
  const dossierPills = document.getElementById('dossier-pills');

  function switchReel(index) {
    reelState.currentIndex = index;
    const data = REELS_DATA[index];

    reelTabs.forEach((tab, i) => {
      tab.classList.toggle('active', i === index);
    });

    reelBgImg.style.opacity = '0.4';
    setTimeout(() => {
      reelBgImg.src = data.image;
      reelBgImg.style.opacity = '1';
    }, 200);

    reelClientName.textContent = `${data.clientName} • ${data.routeTitle}`;
    reelClientQuote.textContent = data.quote;

    dossierTitle.textContent = data.dossierTitle;
    dossierPills.innerHTML = '';
    data.pills.forEach(pill => {
      const span = document.createElement('span');
      span.className = 'd-pill';
      span.innerHTML = `<i class="fa-solid fa-tree"></i> ${pill}`;
      dossierPills.appendChild(span);
    });

    reelState.progress = 0;
    reelProgressFill.style.width = '0%';
  }

  function startReelTimer() {
    clearInterval(reelState.timer);
    reelState.timer = setInterval(() => {
      if (!reelState.isPlaying) return;

      reelState.progress += 1.4;
      if (reelState.progress >= 100) {
        reelState.progress = 0;
        const nextIndex = (reelState.currentIndex + 1) % REELS_DATA.length;
        switchReel(nextIndex);
      }
      reelProgressFill.style.width = `${reelState.progress}%`;
    }, 100);
  }
  startReelTimer();

  reelTabs.forEach((tab, i) => {
    tab.addEventListener('click', () => {
      switchReel(i);
      playChime(580);
    });
  });

  reelPlayPauseBtn.addEventListener('click', () => {
    reelState.isPlaying = !reelState.isPlaying;
    reelPlayIcon.className = reelState.isPlaying ? 'fa-solid fa-pause' : 'fa-solid fa-play';
    showToast(reelState.isPlaying ? 'Reel reanudado' : 'Reel pausado');
  });

  reelLikeBtn.addEventListener('click', () => {
    reelState.isLiked = !reelState.isLiked;
    if (reelState.isLiked) {
      reelLikeBtn.classList.add('liked');
      reelState.likesCount++;
      playChime(800);
      showToast('¡Añadido a tus inspiraciones de sanación!');
    } else {
      reelLikeBtn.classList.remove('liked');
      reelState.likesCount--;
    }
    reelLikesCounter.textContent = `${(reelState.likesCount / 1000).toFixed(1)}k`;
  });

  function cloneCasePackage(index) {
    const data = REELS_DATA[index];
    travelState.biome = data.packBiome;
    travelState.mobility = data.packMobility;
    travelState.treatments = [...data.packTreatments];
    travelState.tastings = [...data.packTastings];
    travelState.book = data.packBook;
    travelState.includeFilmmaker = data.packFilmmaker;

    renderBiomes();
    renderMobility();
    renderTreatments();
    renderTastings();
    renderStep5();
    updateTripSidebar();

    playChime(850);
    showToast(`¡Paquete de sanación de "${data.clientName}" cargado en el simulador!`);
    document.getElementById('trip-simulator').scrollIntoView({ behavior: 'smooth' });
  }

  cloneCasePackBtn.addEventListener('click', () => cloneCasePackage(reelState.currentIndex));
  reelApplyPackBtn.addEventListener('click', () => cloneCasePackage(reelState.currentIndex));

  document.getElementById('preview-custom-reel-btn').addEventListener('click', () => {
    document.getElementById('reels-showcase').scrollIntoView({ behavior: 'smooth' });
  });

  /* ==========================================================================
     DRAWER & BOOKING FLOW
     ========================================================================== */
  const itineraryDrawer = document.getElementById('itinerary-drawer');
  const itineraryBackdrop = document.getElementById('itinerary-backdrop');
  const openItineraryBtn = document.getElementById('open-itinerary-btn');
  const closeItineraryBtn = document.getElementById('close-itinerary-btn');
  const mobileItineraryBtn = document.getElementById('mobile-itinerary-btn');
  const bookExpeditionBtn = document.getElementById('book-expedition-btn');

  const drawerSpiceDetail = document.getElementById('drawer-spice-detail');
  const drawerTripDetails = document.getElementById('drawer-trip-details');
  const bookingForm = document.getElementById('expedition-booking-form');

  function openItineraryDrawer() {
    if (travelState.linkedTreeAlliance) {
      drawerSpiceDetail.innerHTML = `
        <strong class="text-gold">${travelState.linkedTreeAlliance.name}</strong><br>
        <span>Enraizamiento: ${treeAllianceState.grounding}% | Amortiguación: ${treeAllianceState.damping}% | Purificación: ${treeAllianceState.purification}%</span><br>
        <span class="text-muted">Árboles protectores integrados en tus rituales de temazcal y descanso somático.</span>
      `;
    }

    const biome = BIOMES_DATA.find(b => b.id === travelState.biome);
    const mobility = MOBILITY_DATA.find(m => m.id === travelState.mobility);
    const book = BOOKS_DATA.find(b => b.id === travelState.book);

    let html = `<strong>Santuario:</strong> ${biome ? biome.title : ''}<br>`;
    html += `<strong>Movilidad:</strong> ${mobility ? mobility.title : ''}<br>`;
    html += `<strong>Tratamientos de Bosque (${travelState.treatments.length}):</strong> ${travelState.treatments.map(tId => TREATMENTS_DATA.find(x => x.id === tId)?.title).join(', ')}<br>`;
    html += `<strong>Catas Locales (${travelState.tastings.length}):</strong> ${travelState.tastings.map(cId => TASTINGS_DATA.find(x => x.id === cId)?.title).join(', ')}<br>`;
    html += `<strong>Libro de Bienvenida:</strong> "${book ? book.title : ''}" (${book ? book.author : ''})<br>`;
    html += `<strong>Filmmaker Gimbal 4K:</strong> ${travelState.includeFilmmaker ? 'Sí, contratado' : 'No incluido'}<br>`;

    drawerTripDetails.innerHTML = html;

    itineraryDrawer.classList.add('open');
    itineraryBackdrop.classList.add('active');
  }

  function closeItineraryDrawer() {
    itineraryDrawer.classList.remove('open');
    itineraryBackdrop.classList.remove('active');
  }

  openItineraryBtn.addEventListener('click', openItineraryDrawer);
  mobileItineraryBtn.addEventListener('click', () => {
    mobileMenuDrawer.classList.remove('open');
    openItineraryDrawer();
  });
  bookExpeditionBtn.addEventListener('click', openItineraryDrawer);
  closeItineraryBtn.addEventListener('click', closeItineraryDrawer);
  itineraryBackdrop.addEventListener('click', closeItineraryDrawer);

  bookingForm.addEventListener('submit', () => {
    const name = document.getElementById('client-name').value;
    const email = document.getElementById('client-email').value;
    const date = document.getElementById('client-date').value;

    if (!name || !email || !date) {
      showToast('Por favor completa todos los campos requeridos');
      return;
    }

    playChime(900);
    closeItineraryDrawer();

    showToast(`🌿 ¡Gracias ${name}! Tu expedición de sanación con árboles ha sido reservada.`);
    setTimeout(() => {
      showToast('Te enviamos la guía somática de preparación a tu correo.');
    }, 2500);

    bookingForm.reset();
  });

  /* ==========================================================================
     MOBILE NAVIGATION DRAWER
     ========================================================================== */
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const closeMenuBtn = document.getElementById('close-menu-btn');
  const mobileMenuDrawer = document.getElementById('mobile-menu-drawer');

  mobileMenuBtn.addEventListener('click', () => mobileMenuDrawer.classList.add('open'));
  closeMenuBtn.addEventListener('click', () => mobileMenuDrawer.classList.remove('open'));

  document.querySelectorAll('.mobile-link').forEach(link => {
    link.addEventListener('click', () => mobileMenuDrawer.classList.remove('open'));
  });

  /* ==========================================================================
     TOAST NOTIFICATION UTILITY
     ========================================================================== */
  const toastContainer = document.getElementById('toast-container');
  function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<i class="fa-solid fa-tree text-gold"></i> <span>${message}</span>`;
    toastContainer.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(100%)';
      setTimeout(() => toast.remove(), 400);
    }, 3800);
  }

  /* ==========================================================================
     INITIALIZATION CALLS
     ========================================================================== */
  renderTrees();
  updateTreeMetrics();
  renderBiomes();
  renderMobility();
  renderTreatments();
  renderTastings();
  renderStep5();
  updateTripSidebar();
  switchReel(0);
});
