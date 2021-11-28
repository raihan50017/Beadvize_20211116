import React, { useState, useEffect } from "react";
import Style from "./Nav.module.scss";
import logoBeadvize from "../../assets/Nav/logoBeadvize.svg";
import Burger from '../../assets/Nav/burger.svg'
import Cross from '../../assets/Nav/cross.svg'
import Connexion from "../Auth/Connexion/Connexion";
import jwt_decode from "jwt-decode";
import ProfilUser from '../../assets/Nav/ProfilUser.svg'
import NoActive from "../Auth/NoActive/NoActive";
import { isLogin, checkRegister, isValid, logout, getInitials } from "../../Utilities/utils";
import { parse } from "query-string";
import { getMe, validateComtpe } from "../../Utilities/request";
import Active from "../Auth/Active/Active";
import PasswordForgot from "../Auth/ResetPassword/PasswordForgot";
import ChangePassword from "../Auth/ResetPassword/ChangePassword";
import { useHistory } from "react-router";
import ClickAwayListener from '@mui/material/ClickAwayListener';

const NavBar = () => {


  
	const handleClickAway = () => {
		setShowMenuConnected(false);
	};


	const [show, setShow] = useState<boolean>(false)
	const [showModal, setShowModal] = useState(false)
	const [user, setUser] = useState<any>()
	// const [navUser, setNavUser] = useState<boolean>(false)
	const [showMenuConnected, setShowMenuConnected] = useState<boolean>(false)
	const [noActive, setNoActive] = useState<boolean>(false)
	const [active, setActive] = useState<boolean>(false)
	const [resetPasswordToken, setResetPasswordToken] = useState<boolean>(false)
	const [email, setEmail] = useState<string>()
	const [changePassword, setChangePassword] = useState<boolean>(false)
	const history = useHistory()


	const showMenu = (res: React.SetStateAction<boolean>) => {
		setShow(res)
	}

	const getUsers = () => {
		let userToken = localStorage.getItem('currentUser')
		if(userToken) {
			const data = getMe()
			data.then(res => {
				setUser(res)
				
			})
			.catch(err => {
				console.log(err)
			})
			// setNavUser(true)
			let token:any = jwt_decode(userToken)
			let tokenExpire = token.exp
			let expiresIn = ((tokenExpire * 1000) - 60000)
			if(Date.now() >= expiresIn) {
				localStorage.removeItem('currentUser')
				setShowModal(true)
				window.location.reload()
			}
		}
	}

	const query = parse(window.location.search)
	
	const activateUser = () => {
		let token:any = query.activationToken
		if(token) {
			const result = validateComtpe(token)
			result
				.then((res:any) => {
					if(res) {
						setNoActive(false)
						setActive(true)
						localStorage.removeItem('register')
					}
				})
				.catch((err:any) => {
					console.log('error', err.response.status)
				})
		} else {
			return null
		}
	}

	const valid = async () => {
		const result = await isValid()
		if(result === true) {
			setNoActive(true)
		}
	}

	useEffect(() => {
		getUsers()
		activateUser()
		if(query.resetPasswordToken) {
			setChangePassword(true)
		}	
		//valid() 
	// eslint-disable-next-line
	}, [])


	const toConnect = localStorage.getItem('toConnect')
   	useEffect(() => {
        if(toConnect === 'true'){
            setShowModal(true)
			localStorage.removeItem('toConnect')
        }
    },[toConnect])

	const newMission = () => {
		if(user.type === 'client') {
			history.push('/missionsClient')
		}
		else if (user.type === 'consultant') {
			history.push('/missionsFreelance')
		}
	}

	const redirectDashboard = () => {
		history.push('/')
	}

	const redirectAccount = () => {
		history.push('/account')
	}

	const redirectEnterprise = () => {
		history.push('/company')
	}

	const redirectMissions = () => {
		if(user.type === 'client') {
			history.push('/missionsClient')
		}
		else if (user.type === 'consultant') {
			history.push('/missionsFreelance')
		}
	}

	const redirectMyProfil = () => {
		history.push('/myProfil')
	}
	
	const handleChangeProfil = () => {
		if( user && user.profil !== undefined) {
			return (
				<img src={ProfilUser} alt="profil" onClick={e => {setShowMenuConnected(!showMenuConnected)}}/>
			)
		}
		else {
			return <div className={Style.initial} onClick={e => {setShowMenuConnected(!showMenuConnected)}}>{getInitials(user)}</div>
		}
	}

	return (
		
		<div className={isLogin() === undefined && checkRegister() === false ? Style.container : Style.containerRegister}>
			{
				isLogin()
					?
					<nav className={Style.nav}>
						<a href='/'>
							<img
							src={logoBeadvize}
							className={Style.imgM}
							alt="logo de 'entreprise BeAdvize"
							/>
						</a>
						<div className={show ? Style.containButtonActive : `${Style.containButton} ${Style.containButtonActive}`}>
							<div className={Style.left}>
								<a href='/'>
									<img
									src={logoBeadvize}
									className={Style.img}
									alt="logo de 'entreprise BeAdvize"
									/>
								</a>
							</div>
							
							<div className={ checkRegister() ? Style.hidden : Style.right}>
								<div className={Style.containButtonUser}>
									<button onClick={redirectDashboard}>Dashboard</button>
									<button onClick={redirectMissions}>Missions</button>
									<div className={Style.divProfil}>
										{
											handleChangeProfil()
										}
										
										<div>
											
										<ClickAwayListener onClickAway={handleClickAway}>
											<div>
												<p className={Style.weigth} onClick={e => {setShowMenuConnected(!showMenuConnected)}} >{user ? user.firstname : null}</p>
												<p className={Style.size} onClick={e => {setShowMenuConnected(!showMenuConnected)}} >Mon espace {user && user.type === 'client' ? "Client" : "Consultant" }</p>
											</div>
										</ClickAwayListener>		
											
											<ul className={ showMenuConnected ? Style.dropdown : Style.hidden}>
												<li className={user && user.type === 'client' ? Style.hidden : undefined }> <button className={Style.buttonDropdown} onClick={e => {redirectMyProfil(); setShowMenuConnected(!showMenuConnected)}}>Mon Profil</button></li>
												<li><button onClick={e => {newMission(); setShowMenuConnected(!showMenuConnected)}}>Créer une mission</button></li>
												<li><button onClick={e => {redirectAccount(); setShowMenuConnected(!showMenuConnected)}}>Compte</button></li>
												<li><button onClick={e => {redirectEnterprise(); setShowMenuConnected(!showMenuConnected)}}>Entreprise</button></li>
												<li><button onClick={e => {logout(); setShowMenuConnected(!showMenuConnected)}}>Deconnexion</button></li>
											</ul>
										</div>
									</div>
								</div>
							</div>
						</div>
					</nav>
					:
					<nav className={Style.nav}>
					<a href='/'>
								<img
								src={logoBeadvize}
								className={Style.imgM}
								alt="logo de 'entreprise BeAdvize"
								/>
							</a>
						<div className={show ? Style.containButtonActive : `${Style.containButton} ${Style.containButtonActive}`}>
							<div className={Style.left}>
								<a href='/'>
									<img
									src={logoBeadvize}
									className={Style.img}
									alt="logo de 'entreprise BeAdvize"
									/>
								</a>
								<a className={ checkRegister() ? Style.hidden : Style.buttonwithoutbackground} href="/concept">Concept</a>
								<a className={ checkRegister() ? Style.hidden : Style.buttonwithoutbackground} href="http://blog.beadvize.fr">Blog</a>
							</div>
							<div className={ checkRegister() ? Style.right : Style.hidden}>
								<a className={Style.buttonwithbackground4} href="/">Quitter</a>
							</div>
							<div className={ checkRegister() ? Style.hidden : Style.right}>
								<a className={Style.buttonwithbackground1} href="/registerClient">Déposer un projet</a>				
								<a className={Style.buttonwithbackground2} href="/registerFreelance">Inscription Consultant</a>	
								<button className={Style.buttonwithbackground3} onClick={e => {setShowModal(!showModal)}}>Connexion</button>
							</div>
						</div>
							{
								show ?
									<div className={Style.burger} onClick={() => { showMenu(!show) }}>
										<img src={Cross} alt="logo en forme de croix"/>
									</div>
								:
									<div className={Style.burger} onClick={() => { showMenu(!show) }}>
										<img src={Burger} alt="logo du menu pour version mobile"/>
									</div>
							}

							{
								showModal === true 
									?
										<div className={Style.modalBlock}>
											<Connexion setShowModal={setShowModal} setNoActive={setNoActive}  setResetPasswordToken={setResetPasswordToken} setEmail={setEmail}/>
										</div>
									:
										null
								
							}
							{
								noActive
									?
										<div className={Style.modalBlock}>
											<NoActive setNoActive={setNoActive} noActive={noActive} />
										</div>
									:
										null

							}
							{
								active
									?
										<div className={Style.modalBlock}>
											<Active setActive={setActive} setShowModal={setShowModal} />
										</div>
									:
										null
							}
							{
								resetPasswordToken
									?
										<div className={Style.modalBlock}>
											<PasswordForgot setResetPasswordToken={setResetPasswordToken} setShowModal={setShowModal} email={email}/>
										</div>
									:
										null
							}
							{
								changePassword
									?
										<div className={Style.modalBlock}>
											<ChangePassword />			
										</div>
									:
										null
							}
														{
							
								
							}
						</nav>
			}
		</div>
  	);
};

export default NavBar;
