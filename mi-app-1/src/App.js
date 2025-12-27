import './App.css';
import Biografia from './components/Biografia';


function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Biografías de Actores en Strangers Sthings:</h1>
        <Biografia
          nombre='Sadie Sink'
          pais= 'EE.UU.'
          imagen='sadie'
          cargo='Actriz'
          empresa='Netflix'
          biografia='Sadie Sink (nacida el 16 de abril de 2002) es una actriz estadounidense. Es conocida por interpretar a Max Mayfield en la serie de Netflix Stranger Things (2016-presente). Sink comenzó su carrera en el teatro, apareciendo en producciones de Broadway como Annie y The Audience. Además de su trabajo en televisión, ha participado en películas como Fear Street Part One: 1994 (2021) y The Glass Castle (2017).'/>
        <Biografia
          nombre='Millie Bobby Brown'
          pais= 'Reino Unido'
          imagen='millie'
          cargo='Actriz'
          empresa='Netflix'
          biografia='Millie Bobby Brown (nacida el 19 de febrero de 2004) es una actriz y productora británica. Es conocida por interpretar a Eleven en la serie de Netflix Stranger Things (2016-presente), por la que ha recibido varias nominaciones a premios, incluyendo dos nominaciones a los Primetime Emmy Awards. Brown también ha protagonizado las películas Godzilla: King of the Monsters (2019) y Enola Holmes (2020).'/>
        <Biografia
          nombre='Joe Keery'
          pais= 'EE.UU.'
          imagen='joe'
          cargo='Actor y Músico'
          empresa='Netflix'
          biografia='Joseph David Keery (nacido el 24 de abril de 1992) es un actor y músico estadounidense. Es conocido por interpretar a Steve Harrington en la serie de Netflix Stranger Things (2016-presente), por la que ha recibido varios premios y nominaciones. Keery también es guitarrista y vocalista de la banda de rock Post Animal.'/> 
        <Biografia
          nombre='charlie Heaton'
          pais= 'Reino Unido'
          imagen='charlie'
          cargo='Actor y Músico'
          empresa='Netflix'
          biografia='Charlie Heaton (nacido el 6 de febrero de 1994) es un actor y músico inglés. Es conocido por interpretar a Jonathan Byers en la serie de Netflix Stranger Things (2016-presente). Heaton también ha aparecido en películas como Shut In (2016) y The New Mutants (2020). Además de su carrera actoral, Heaton es baterista de la banda de rock Comanechi.'/>
        <Biografia
          nombre='Natalia Dyer'
          pais= 'EE.UU.'
          imagen='natalia'
          cargo='Actriz'
          empresa='Netflix'
          biografia='Natalia Dyer (nacida el 13 de enero de 1995) es una actriz estadounidense. Es conocida por interpretar a Nancy Wheeler en la serie de Netflix Stranger Things (2016-presente). Dyer ha aparecido en varias películas independientes, incluyendo Hannah Montana: The Movie (2009) y I Believe in Unicorns (2014).'/>
        <Biografia
          nombre='Noah Schnapp'
          pais= 'Canadá'
          imagen='noah'
          cargo='Actor'
          empresa='Netflix'
          biografia='Noah Cameron Schnapp (nacido el 3 de octubre de 2004) es un actor canadiense-estadounidense. Es conocido por interpretar a Will Byers en la serie de Netflix Stranger Things (2016-presente). Schnapp también ha prestado su voz para el personaje de Charlie Brown en las películas animadas The Peanuts Movie (2015) y Snoopy in Space (2019).'/>
          
      </div>
    </div>
  );
}

export default App;
