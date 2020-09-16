import React, { Component } from 'react';
import { Route, Switch, HashRouter } from 'react-router-dom';
import Home from './components/pages/Home';
import Register from './components/pages/Register';
import Profile from './components/pages/Profile';
import Verification from './components/pages/Verification';
import Contact from './components/pages/Contact';
// import TermCondition from './components/pages/TermCondition';
import ForgotPassword from './components/pages/ForgotPassword';
import Reset from './components/pages/Reset';
import { createBrowserHistory } from 'history';
import FaqHelp from './components/pages/FaqHelp';
import AboutLsp from './components/pages/cms/AboutLsp'
import AboutLb from './components/pages/cms/AboutLb'
import AboutTna from './components/pages/cms/AboutTna'
import DocumentRequired from './components/pages/cms/DocumentRequired'
import ProcessStep from './components/pages/cms/ProcessStep'
import Terms from './components/pages/cms/Terms'
import Benefits from './components/pages/cms/Benefits'
import FssaiLabel from './components/pages/cms/FssaiLabel';
import ActionAgainstMislabeling from './components/pages/cms/ActionAgainstMislabeling';
import AboutFssai from './components/pages/cms/AboutFssai';
import CompleteLabel from './components/pages/label/CompleteLabel';
import IncompleteLabel from './components/pages/label/IncompleteLabel';
import LabelLayout from './components/pages/label/LabelLayout';
import SelectionCategories from './components/pages/label/SelectionCategories';
import FoodName from './components/pages/label/FoodName';
import IngredientList from './components/pages/label/IngredientList';
import Allergens from './components/pages/label/Allergens';
import Additives from './components/pages/label/Additives';
import NutritionInfo from './components/pages/label/NutritionInfo';
import MitraRegistration from './components/pages/MitraRegistration';
import Declaration from './components/pages/label/Declaration';
import Mendatory from './components/pages/label/Mendatory';
import NameAddress from './components/pages/label/NameAddress';
import Fortified from './components/pages/label/Fortified';
import ConsumerCare from './components/pages/label/ConsumerCare';
import DateMarketing from './components/pages/label/DateMarketing';
import Instrucion from './components/pages/label/Instrucion';
import Finaldesign from './components/pages/label/Finaldesign';

const NoMatchPage = () => {
  return (
    <div >
      <h1>404 Not Found</h1>
    </div>
  );
};

const history = createBrowserHistory();
class App extends Component {

  componentDidMount() {

  }

  render() {
    return (
      <HashRouter history={history}>
          <Switch>
            <Route path="/" component={Home} exact />
            {/* <Route path="/register" component={Register} exact /> */}
            <Route path="/login" component={Register} exact />

            <Route path="/business-operator/registration" component={Register} exact />
            <Route path="/mitra-operator/registration" component={MitraRegistration} exact />

            <Route path="/business-operator/login" component={Register} exact />
            <Route path="/mitra-operator/login" component={MitraRegistration} exact />
            
            <Route path="/:token/verification" render={({ match }) => <Verification token={match.params.token} />} exact />
            <Route path="/user-dashboard" component={Profile} exact />
            <Route path="/logout" component={Profile} exact />
            <Route path="/contact-us" component={Contact} exact />
            {/* <Route path="/terms-and-conditions" render={({ match }) => <TermCondition />} exact /> */}
            <Route path="/forgot-password" render={({ match }) => <ForgotPassword />} exact />
            <Route path="/reset/:token" render={({ match }) => <Reset token={match.params.token} />} exact />

            {/* CMS PAGES */}
            <Route path="/about-lsp" component={AboutLsp} exact />
            <Route path="/about-tna" component={AboutTna} exact />
            <Route path="/about-lb" component={AboutLb} exact />
            <Route path="/benefits" component={Benefits} exact />
            <Route path="/process-steps" component={ProcessStep} exact />
            <Route path="/document-required" component={DocumentRequired} exact />
            <Route path="/about-fssai" component={AboutFssai} exact />
            <Route path="/fssai-labeling-regulations" component={FssaiLabel} exact />
            <Route path="/action-against-mislabeling" component={ActionAgainstMislabeling} exact />
            <Route path="/terms-and-conditions" component={Terms} exact />

            {/* Faq Route */}
            <Route path="/faqs" component={FaqHelp} exact />

            {/* Label Routes */}
            <Route path="/complete-labels" component={CompleteLabel} exact />
            <Route path="/incomplete-labels" component={IncompleteLabel} exact />


            {/* Labels Steps */}
            <Route path="/label/label-layouts" component={LabelLayout} exact />
            <Route path="/label/selection-of-categories-or-subcategories" component={SelectionCategories} exact />
            <Route path="/label/name-of-foods" component={FoodName} exact />
            <Route path="/label/list-of-ingredients" component={IngredientList} exact />
            <Route path="/label/allergens" component={Allergens} exact />
            <Route path="/label/nutrition-informations" component={NutritionInfo} exact />
            <Route path="/label/declaration-of-veg-non-veg" component={Declaration} exact />
            <Route path="/label/food-additives" component={Additives} exact />
            <Route path="/label/mendatory-declaration" component={Mendatory} exact />
            <Route path="/label/name-and-complete-address" component={NameAddress} exact />
            <Route path="/label/fotified-or-organic" component={Fortified} exact />
            <Route path="/label/consumer-care-details" component={ConsumerCare} exact />
            <Route path="/label/date-marketing" component={DateMarketing} exact />
            <Route path="/label/instruction-of-use" component={Instrucion} exact />
            <Route path='/label/preview' component={Finaldesign} exact />

            {/* Error Pages */}
            <Route component={NoMatchPage} />
          </Switch>
      </HashRouter>

    );
  }

}


export default App;
