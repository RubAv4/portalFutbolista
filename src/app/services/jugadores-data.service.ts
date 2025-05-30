// src/app/services/jugadores-data.service.ts
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Jugador {
  id: number;
  nombre: string;
  apellido: string;
  posicion: string;
  dorsal: number;
  nacionalidad: string;
  edad: number;
  equipo: string;
  liga: string;
  imagen: string;
  estadisticas: {
    partidos: number;
    goles: number;
    asistencias: number;
    tarjetasAmarillas: number;
    tarjetasRojas: number;
  };
  biografia: string;
  logros: string[];
  valorMercado: string;
}

@Injectable({
  providedIn: 'root'
})
export class JugadoresDataService {

  private jugadores: Jugador[] = [
    {
      id: 1,
      nombre: 'Lionel',
      apellido: 'Messi',
      posicion: 'Delantero',
      dorsal: 10,
      nacionalidad: 'Argentina',
      edad: 36,
      equipo: 'Inter Miami',
      liga: 'MLS',
      imagen: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Lionel-Messi-Argentina-2022-FIFA-World-Cup_%28cropped%29.jpg/250px-Lionel-Messi-Argentina-2022-FIFA-World-Cup_%28cropped%29.jpg',
      estadisticas: {
        partidos: 850,
        goles: 720,
        asistencias: 350,
        tarjetasAmarillas: 90,
        tarjetasRojas: 3
      },
      biografia: 'Considerado uno de los mejores jugadores de todos los tiempos, Messi ha ganado múltiples Balones de Oro y llevó a Argentina a ganar la Copa del Mundo 2022.',
      logros: ['Copa del Mundo 2022', '7 Balones de Oro', '4 Champions League', 'Copa América 2021'],
      valorMercado: '€35M'
    },
    {
      id: 2,
      nombre: 'Kylian',
      apellido: 'Mbappé',
      posicion: 'Delantero',
      dorsal: 7,
      nacionalidad: 'Francia',
      edad: 25,
      equipo: 'Paris Saint-Germain',
      liga: 'Ligue 1',
      imagen: 'https://img.uefa.com/imgml/TP/players/1/2025/cutoff/250076574.webp',
      estadisticas: {
        partidos: 320,
        goles: 255,
        asistencias: 120,
        tarjetasAmarillas: 40,
        tarjetasRojas: 2
      },
      biografia: 'Joven estrella francesa, campeón del mundo en 2018. Conocido por su velocidad excepcional y capacidad goleadora.',
      logros: ['Copa del Mundo 2018', 'Nations League 2021', '5 Ligue 1', 'Bota de Oro Mundial 2022'],
      valorMercado: '€180M'
    },
    {
      id: 3,
      nombre: 'Erling',
      apellido: 'Haaland',
      posicion: 'Delantero',
      dorsal: 9,
      nacionalidad: 'Noruega',
      edad: 23,
      equipo: 'Manchester City',
      liga: 'Premier League',
      imagen: 'https://www.mancity.com/meta/media/edspvvtx/erling-haaland.png',
      estadisticas: {
        partidos: 180,
        goles: 170,
        asistencias: 35,
        tarjetasAmarillas: 25,
        tarjetasRojas: 0
      },
      biografia: 'Goleador noruego conocido por su físico imponente y eficacia frente al arco. Récord de goles en su primera temporada en Premier League.',
      logros: ['Champions League 2023', 'Premier League 2023', 'Bota de Oro Premier 2023', 'Triplete 2023'],
      valorMercado: '€170M'
    },
    {
      id: 4,
      nombre: 'Kevin',
      apellido: 'De Bruyne',
      posicion: 'Mediocampista',
      dorsal: 17,
      nacionalidad: 'Bélgica',
      edad: 32,
      equipo: 'Manchester City',
      liga: 'Premier League',
      imagen: 'https://www.mancity.com/meta/media/fbqjnjcq/kevin-de-bruyne.png?width=600',
      estadisticas: {
        partidos: 380,
        goles: 95,
        asistencias: 165,
        tarjetasAmarillas: 55,
        tarjetasRojas: 1
      },
      biografia: 'Mediocampista creativo belga, considerado uno de los mejores en su posición. Maestro en asistencias y pases decisivos.',
      logros: ['Champions League 2023', '5 Premier League', '2 PFA Jugador del Año', 'Triplete 2023'],
      valorMercado: '€75M'
    },
    {
      id: 5,
      nombre: 'Alexis',
      apellido: 'Sánchez',
      posicion: 'Delantero',
      dorsal: 7,
      nacionalidad: 'Chile',
      edad: 36,
      equipo: 'Unidece Calcio',
      liga: 'Serie A de Italia',
      imagen: 'https://s.hs-data.com/bilder/spieler/gross/50628.jpg?fallback=png',
      estadisticas: {
        partidos: 166,
        goles: 51,
        asistencias: 32,
        tarjetasAmarillas: 0,
        tarjetasRojas: 5
      },
      biografia: 'Es un futbolista chileno que juega como delantero en el Udinese Calcio de la Serie A de Italia.',
      logros: ['dos títulos de la Copa', 'América con la selección chilena (2015 y 2016)', ' varios títulos en clubes como el FC Barcelona', 'Arsenal y el Inter de Milán'],
      valorMercado: '€2M'
    },
    {
      id: 6,
      nombre: 'Christian Juan',
      apellido: 'Cueva Bravo',
      posicion: 'mediocentro ofensivo ',
      dorsal: 7,
      nacionalidad: 'Chile',
      edad: 36,
      equipo: 'Unidece Calcio',
      liga: 'Serie A de Italia',
      imagen: 'https://portal.andina.pe/EDPfotografia3/Thumbnail/2025/05/15/001169964W.jpg',
      estadisticas: {
        partidos: 166,
        goles: 51,
        asistencias: 32,
        tarjetasAmarillas: 0,
        tarjetasRojas: 5
      },
      biografia: 'Es un futbolista chileno que juega como delantero en el Udinese Calcio de la Serie A de Italia.',
      logros: ['dos títulos de la Copa', 'América con la selección chilena (2015 y 2016)', ' varios títulos en clubes como el FC Barcelona', 'Arsenal y el Inter de Milán'],
      valorMercado: '€2M'
    },
    {
      id: 8,
      nombre: 'Luka',
      apellido: 'Modrić',
      posicion: 'Centrocampista',
      dorsal: 10,
      nacionalidad: 'Croacia',
      edad: 38,
      equipo: 'Real Madrid',
      liga: 'LaLiga de España',
      imagen: 'https://img.uefa.com/imgml/TP/players/1/2025/cutoff/74699.webp',
      estadisticas: {
        partidos: 330,
        goles: 26,
        asistencias: 50,
        tarjetasAmarillas: 48,
        tarjetasRojas: 1
      },
      biografia: 'Es un futbolista croata que juega como centrocampista en el Real Madrid y es considerado uno de los mejores de su generación.',
      logros: ['Balón de Oro 2018', '5 Champions League con el Real Madrid', 'Subcampeón del Mundial 2018 con Croacia'],
      valorMercado: '€3M'
    },
    {
      id: 9,
      nombre: 'Heung-min',
      apellido: 'Son',
      posicion: 'Delantero',
      dorsal: 7,
      nacionalidad: 'Corea del Sur',
      edad: 31,
      equipo: 'Tottenham Hotspur',
      liga: 'Premier League de Inglaterra',
      imagen: 'https://www.tottenhamhotspur.com/media/ds3asinl/firstteam_profiles_heungminson_202425_1.png?anchor=center&mode=crop&quality=90&width=500',
      estadisticas: {
        partidos: 280,
        goles: 107,
        asistencias: 55,
        tarjetasAmarillas: 20,
        tarjetasRojas: 2
      },
      biografia: 'Delantero surcoreano conocido por su velocidad y precisión, figura destacada del Tottenham Hotspur.',
      logros: ['Máximo goleador asiático en la Premier League', 'Premio al mejor jugador asiático del año en múltiples ocasiones'],
      valorMercado: '€45M'
    },
    {
      id: 10,
      nombre: 'Jude',
      apellido: 'Bellingham',
      posicion: 'Centrocampista',
      dorsal: 5,
      nacionalidad: 'Inglaterra',
      edad: 21,
      equipo: 'Real Madrid',
      liga: 'LaLiga de España',
      imagen: 'https://s.hs-data.com/bilder/spieler/gross/392520.jpg?fallback=png',
      estadisticas: {
        partidos: 42,
        goles: 19,
        asistencias: 7,
        tarjetasAmarillas: 9,
        tarjetasRojas: 0
      },
      biografia: 'Es un joven mediocampista inglés que ha destacado por su madurez y calidad técnica en el Real Madrid.',
      logros: ['Premio Golden Boy 2023', 'Jugador del mes en LaLiga varias veces', 'Titular indiscutible en selección inglesa'],
      valorMercado: '€130M'
    }


  ];

  constructor() { }

  getJugadores(): Observable<Jugador[]> {
    return of(this.jugadores);
  }

  getJugadorPorId(id: number): Observable<Jugador | undefined> {
    const jugador = this.jugadores.find(j => j.id === id);
    return of(jugador);
  }

  getJugadoresPorPosicion(posicion: string): Observable<Jugador[]> {
    const jugadoresFiltrados = this.jugadores.filter(
      j => j.posicion.toLowerCase() === posicion.toLowerCase()
    );
    return of(jugadoresFiltrados);
  }

  buscarJugadores(termino: string): Observable<Jugador[]> {
    const terminoLower = termino.toLowerCase();
    const jugadoresFiltrados = this.jugadores.filter(j =>
      j.nombre.toLowerCase().includes(terminoLower) ||
      j.apellido.toLowerCase().includes(terminoLower)
    );
    return of(jugadoresFiltrados);
  }
}