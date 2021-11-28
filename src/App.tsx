import React from "react";
import { BrowserRouter, BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./pages/Home";
import Nav from "./components/NavBar/Nav";
import Concept from "./pages/Concept";
import RegisterFreelance from "./pages/Auth/Freelance/RegisterFreelance";
import RegisterClient from "./pages/Auth/Client/RegisterClient";
import DashboardFreelance from "./pages/Freelance/Dashboard/Dashboard";
import MissionsFreelance from "./pages/Freelance/Missions/Missions";
import DetailMission from "./pages/Freelance/DetailMission/DetailMission";
import Facturation from "./pages/Freelance/Facturation/Facturation";
import MyProfil from "./pages/Freelance/MyProfil/MyProfil";
import MissionNotWon from "./pages/Freelance/MissionNotWon/MissionNotWon";
import MyEnterprise from "./pages/company/company";
import DashboardClient from "./pages/Client/Dashboard/Dashboard";
import ProfilsConsultant from "./pages/Client/ProfilsConsultants/ProfilsConsultants";
import FactureClient from "./pages/Client/Facturation/Facturation";
import SourcingConsultant from "./pages/Client/SourcingConsultant/SourcingConsultant";
import MissionsClient from "./pages/Client/Missions/Missions";
import Account from "./pages/Client/Account/Account";
import PublicRoutes from "./Routes/PublicRoutes";
import ClientPrivateRoutes from "./Routes/ClientPrivateRoutes";
import ConsultantPrivateRoutes from './Routes/ConsultantPrivateRoutes'
import PrivateRoutes from './Routes/PrivateRoutes'
import Profils from "./pages/Client/Profil/Profils";
import ContactUs from "./pages/ContactUs/ContactUs";
import Faq from "./pages/FAQ/Faq";
import WhoWeAre from "./pages/WhoWeAre/WhoWeAre";
import HttpsRedirect from 'react-https-redirect';
import MyMission from "./components/Dashboard/MyMissions/MyMissions";


const App = () => {

    return (
        <HttpsRedirect>
            <Router>
                <BrowserRouter>
                    <Nav />
                    <Switch>
                        {/* Routes Publics */}
                        <PublicRoutes restricted={true} exact path="/" component={Home} />
                        <PublicRoutes restricted={true} path="/concept" component={Concept} />
                        <PublicRoutes restricted={true} path="/registerFreelance" component={RegisterFreelance}/>
                        <PublicRoutes restricted={true} path="/registerClient" component={RegisterClient} />
                        <PublicRoutes restricted={true} path="/contactUs" component={ContactUs} />
                        <PublicRoutes restricted={true} path="/FAQ" component={Faq} />
                        <PublicRoutes restricted={true} path="/WhoWeAre" component={WhoWeAre} />

                        {/* Routes Consultants */}
                        <Route path="/df"><DashboardFreelance></DashboardFreelance></Route>
                        <ConsultantPrivateRoutes path="/dashboardFreelance" component={DashboardFreelance}/>
                        <ConsultantPrivateRoutes path="/missionsFreelance" component={MissionsFreelance} />
                        <Route path="dm"><DetailMission></DetailMission></Route>
                        <ConsultantPrivateRoutes path="/detailMission" component={DetailMission} />
                        <ConsultantPrivateRoutes path="/facturation" component={Facturation} />
                        <ConsultantPrivateRoutes path="/myProfil" component={MyProfil} />
                        <ConsultantPrivateRoutes path="/MissionNotWon" component={MissionNotWon} />
                        <ConsultantPrivateRoutes path="/updateProfilConsultant" component={RegisterFreelance} />

                        {/* Routes Clients */}
                        <Route path="/fc"><FactureClient></FactureClient></Route>
                        <ClientPrivateRoutes path="/dashboardClient" component={DashboardClient} />
                        <ClientPrivateRoutes path="/factureClient" component={FactureClient} />
                        <Route path="/mc"><MissionsClient></MissionsClient></Route>
                        <ClientPrivateRoutes path="/missionsClient" component={MissionsClient} />
                        <ClientPrivateRoutes path="/profilsConsultant" component={ProfilsConsultant} />
                        <ClientPrivateRoutes path="/sourcing" component={SourcingConsultant} />
                        <ClientPrivateRoutes path="/profil" component={Profils} />
                        <ClientPrivateRoutes path="/updateProfilClient" component={RegisterClient} />


                        {/* Routes qui concerne les 2 */}
                        <PrivateRoutes path="/company" component={MyEnterprise} />
                        <PrivateRoutes path="/account" component={Account} /> 
                        
                        <Route path="/mm"><MyMission></MyMission></Route>
                        {/* Routes not Found */}
                        <Route path="*">
                            {/* Futur component not Found */}
                        </Route>
                    </Switch>
                </BrowserRouter>
            </Router>
        </HttpsRedirect>
    );
};

export default App;
