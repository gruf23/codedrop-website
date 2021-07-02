import './selected-projects.scss';
import ProjectSummaryBig from '../ProjectSummaryBig/ProjectSummaryBig';

import floranextHero from '../../../assets/graphics/projects/floranext-hero.jpeg';
import alhudoodHero from '../../../assets/graphics/projects/alhudood-hero.jpg';
import dpHero from '../../../assets/graphics/projects/druckerpatronen-hero.jpeg';

// static data for now
const data = [
  {
    title: 'Druckerpatronen.de',
    tags: ['e-commerce'],
    summary: 'Druckerpatronen.de is the marketplace with consumable materials for printing . Cartridges, toners, paper - up to 2500 orders daily.',
    websiteUrl: 'https://druckerpatronen.de',
    image: dpHero
  },
  {
    title: 'Alhudood.net',
    tags: ['mass media'],
    summary: 'Al-Hudood is a satirical Arabic news publication originally focused on satirical journalism in Jordan, and came to encompass news from the Arab world and from around the world, working with Arab writers and cartoonists from different parts of the Middle East and North Africa.',
    image: alhudoodHero,
    websiteUrl: 'https://alhudood.net/'
  },
  {
    title: 'Floranext.com',
    tags: ['saas for florists'],
    summary: 'Florist Websites, Florist POS and Wedding/Event software. The one stop florist software platform that saves you time and helps you to run your entire flower shop more efficiently.',
    image: floranextHero,
    websiteUrl: 'http://floranext.com/'
  }
];

function SelectedProjects(props) {
  return (
    <div className="selected-projects">
      {data.map((item, i) => <ProjectSummaryBig key={i} data={item} direction={i % 2 === 0 ? 'ltr' : 'rtl'}/>)}
    </div>
  );
}

SelectedProjects.defaultProps = {
  items: 3
};

export default SelectedProjects;
