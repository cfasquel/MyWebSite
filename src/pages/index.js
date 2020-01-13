import React from 'react';

import Layout from '../components/Layout';
//import { Link } from 'gatsby';
import Sidebar from '../components/Sidebar';
import config from '../../config';

const IndexPage = () => (
  <Layout>
    <Sidebar />
    <div className="container-fluid p-0">
      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="about"
      >
        <div className="w-100">
          <h1 className="mb-0">
            {config.firstName}{' '}
            <span className="text-primary">{config.lastName}</span>
          </h1>
          <div className="subheading mb-5">
            {config.address} · {config.phone} ·
            <a href={`mailto:${config.email}`}>{config.email}</a>
          </div>
          <p className="lead mb-5">
            Passionné depuis tout petit par le développement et le monde du web,
            j'exerce le métier de développeur web depuis 9 ans.
          </p>
          <p className="lead mb-5">
            Actuellement à plein temps chez Getlink Eurotunnel, j'ai également
            la chance d'enseigner un module gravitant autour des services web
            dans le cadre d'un contrat vacataire avec l'Université du Littoral
            Côte d'Opale depuis 4 ans.
          </p>
          <p className="lead mb-5">
            Ce site est en cours de construction. Vous trouverez néanmoins sur
            ce site les différents moyens de prendre contact avec moi.
            <br /> Si vous souhaitez accéder à mes informations de carrière à
            jour, rendez-vous sur{' '}
            <a href="https://www.linkedin.com/in/clementfasquel/">
              ma page LinkedIn
            </a>
            .
          </p>
          <div className="social-icons">
            {config.socialLinks.map(social => {
              const { icon, url } = social;
              return (
                <a key={url} href={url}>
                  <i className={`fab ${icon}`}></i>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex justify-content-center"
        id="experience"
      >
        <div className="w-100">
          <h2 className="mb-5">Expériences</h2>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">
                Développeur Web Angular / C#.Core / Azure
              </h3>
              <div className="subheading mb-3">
                CDI - GetLink/Eurotunnel à Coquelles
              </div>
              <p>Description du poste...</p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">Juillet 2015 à aujourd'hui</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">
                Interventions sur les technologies des services web
              </h3>
              <div className="subheading mb-3">
                Enseignant vacataire - Université du Littoral Côte d'Opale à
                Calais
              </div>
              <p>Description du poste...</p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">Mars 2016 à aujourd'hui</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Développeur Web ASP.NET MVC / C#</h3>
              <div className="subheading mb-3">
                CDD - GetLink/Eurotunnel à Coquelles
              </div>
              <p>Description du poste...</p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">Octobre 2015 à Juillet 2015</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">
                Développeur Web ASP.NET MVC / C# &amp; Chef de projet
              </h3>
              <div className="subheading mb-3">
                Alternance - GetLink/Eurotunnel à Coquelles &amp; Université du
                Littoral Côte d'Opale à Calais
              </div>
              <p>
                Réalisation d'un progiciel responsive. Il permet de gérer les
                documents confidentiels dans l'entreprise et de les faire passer
                par une suite de validations. C'est sous forme d'un plug-in
                JQuery que les workflow se dessinent, et sont entièrement
                responsive (utilise un canvas 2D). J'ai pu occuper le rôle de
                chef de projet dans le cadre de mon master en apprentissage. Un
                autre développeur, stagiaire, m'a été assigné en tant que
                ressource pour réaliser à bien mes missions.
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">
                Septembre 2013 à Septembre 2014
              </span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Développeur Web PHP &amp; MySQL</h3>
              <div className="subheading mb-3">
                Stagiaire - ArcelorMittal Atlantique à Dunkerque
              </div>
              <p>
                Réalisation d'un ensemble de classes en PHP permettant
                d'utiliser une base de données structurée par des métadonnées.
                Ces nouvelles classes et méthodes permettent d'améliorer la
                sécurité des appels à la base et d’historiser les valeurs
                souhaitées.
                <br />
                Développement d'un module de reporting sur des indicateurs de
                résultat.
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">Avril 2013 à Août 2013</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Développeur Web ASP.NET &amp; VB.NET</h3>
              <div className="subheading mb-3">
                Stagiaire - Huntsman Tioxide
              </div>
              <p>
                Réalisation d'un progiciel validant les accueils sécurité des
                individus présents dans l’usine.
                <br />
                J'ai également formé et sensibilisé de futurs développeurs de
                l’application aux technologies .NET.
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">Mai 2012 à Août 2012</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Développeur Web ASP.NET &amp; VB.NET</h3>
              <div className="subheading mb-3">
                Stagiaire - Huntsman Tioxide
              </div>
              <p>
                Conceptualisation et réalisation d'un progiciel de suivi et
                d’aide à la maintenance des équipements de l’usine.
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">Avril 2011 à Juillet 2011</span>
            </div>
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="education"
      >
        <div className="w-100">
          <h2 className="mb-5">Formations</h2>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">
                Master Ingénierie par les Logiciels Libres
              </h3>
              <div className="subheading mb-3">
                Université du Littoral Côte d'Opale à Calais - Mention bien
              </div>
              <p>
                <a href="http://dpt-info.univ-littoral.fr/wiki/I2L:Accueil">
                  Cliquez ici pour accèder au détail des disciplines
                </a>
                .
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">
                Septembre 2013 à Septembre 2014
              </span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">
                Maîtrise Ingénierie des Systèmes Informatique Distribués
              </h3>
              <div className="subheading mb-3">
                Université du Littoral Côte d'Opale à Calais - Mention bien
              </div>
              <p>
                <a href="http://dpt-info.univ-littoral.fr/wiki/ISIDIS:Accueil">
                  Cliquez ici pour accèder au détail des disciplines
                </a>
                .
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">
                Septembre 2012 à Septembre 2013
              </span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">
                Licence Génie Mathématique et Informatique
              </h3>
              <div className="subheading mb-3">
                Université du Littoral Côte d'Opale à Calais - Mention assez
                bien
              </div>
              <p>
                <a href="http://dpt-info.univ-littoral.fr/wiki/Licence:Accueil">
                  Cliquez ici pour accèder au détail des disciplines
                </a>
                .
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">
                Septembre 2011 à Septembre 2012
              </span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">DUT Informatique</h3>
              <div className="subheading mb-3">
                Institut Universitaire et Technologique à Calais
              </div>
              <p>
                <a href="http://iutcalais.univ-littoral.fr/">
                  Cliquez ici pour accèder au détail des disciplines
                </a>
                , catégorie "DUT Informatique".
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">
                Septembre 2009 à Septembre 2011
              </span>
            </div>
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="skills"
      >
        <div className="w-100">
          <h2 className="mb-5">Compétences</h2>

          <div className="subheading mb-3">
            Languages de programmation &amp; outils
          </div>
          <ul className="list-inline dev-icons">
            <li className="list-inline-item">
              <i className="fab fa-html5"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-css3-alt"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-angular"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-react"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-bootstrap"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-npm"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-git"></i>
            </li>
          </ul>

          <p>ajouter les icones C#, Entity Framework...</p>

          <div className="subheading mb-3">Méthodes</div>
          <ul className="fa-ul mb-0">
            <li>
              <i className="fa-li fa fa-check"></i>
              Mobile-First, Responsive Design
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Tests et Debugging Cross Browser
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Développement Agile &amp; Scrum
            </li>
          </ul>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="interests"
      >
        <div className="w-100">
          <h2 className="mb-5">Centres d’intérêt</h2>
          <p>texte à ajouter...</p>
          <p className="mb-0">texte à ajouter...</p>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="awards"
      >
        <div className="w-100">
          <h2 className="mb-5">Réalisations</h2>
          <ul className="fa-ul mb-0">
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              TOEIC - Mai 2011 - Score : 810.
            </li>
          </ul>
          <p>en construction...</p>
        </div>
      </section>

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="teaching"
      >
        <div className="w-100">
          <h2 className="mb-5">Enseignement</h2>

          <div className="subheading mb-3">Introduction aux services web</div>
          <p>Page en construction...</p>
          <div className="subheading mb-3">Modèle N-Tiers &amp; REST APIs</div>
          <p>Page en construction...</p>
          <div className="subheading mb-3">GraphQL</div>
          <p>Page en construction...</p>
        </div>
      </section>
    </div>
  </Layout>
);

export default IndexPage;
